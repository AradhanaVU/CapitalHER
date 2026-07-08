/**
 * Download each executive's photo from Google Drive (team/executives.json).
 * Names are sorted A→Z by last name for display. Leadership 01–03 untouched.
 * Run: node scripts/import-executives-drive.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const USE_GDOWN = true;
const ASSETS = path.join(
  process.env.USERPROFILE || '',
  '.cursor',
  'projects',
  'c-CapitalHER',
  'assets',
);
const ASSET_PREFIX =
  'c__Users_Aradhana_AppData_Roaming_Cursor_User_workspaceStorage_3e058fa5730edcb094af4ebda6caccec_images_image-';

/** Chat attachments A→Z by last name (when Drive link is a PDF/doc). */
const ASSET_BY_ALPHA = {
  'Anjalee Baskaralingham': 'c913678f-3e9a-45a7-bd0d-4a50ecf41b48.png',
  'Cadence Ding': '6cf4a2c9-2f22-4f56-a1be-f904ccfdec35.png',
  'Omara Downer': '1923ac99-a8fc-41ff-a13e-079652947f99.png',
  'Avery Fan': '37006b53-5283-4f7d-b2cc-bc3e4af978a7.png',
  'Shams Guliyeva': 'f5dca16f-e6cc-40a0-aa3c-cb7750a0d928.png',
  'Suditi Gupta': '628d4e3b-82c2-4a7f-8dff-5494fc12ea6c.png',
  'Thuvarakha Jeevanesan': '7636c5ef-6f4f-4637-b62f-811c8a4efe7d.png',
  'Suvi Kakan': 'd702e2a9-79b6-427a-88dc-19341b9053a9.png',
  'Hargun Kaur': '4c8ddae1-2977-4b70-9da7-8662140c7442.png',
  'Diyaa Kousihan': '29427148-1579-4ec4-b401-1f470cfe2cd2.png',
  'Susanna Li': '00dfb1ad-5415-4453-906e-291e4c706369.png',
  'Anna Lian': '7ae2f084-a175-44f4-9d37-b70814002ade.png',
  'Michaella Saturio': '2d91971d-b5ae-4e9d-8a7d-caa628c9688f.png',
  'Chitra Sekhri': '8388f94e-40a8-44e1-abca-cd2d88fb9039.png',
  'Leanne Semwanga': '5e3fd9a4-106e-4593-bebb-8b39897478bf.png',
  'Lillian Shen': '167a8702-9dbc-427e-9e5e-78ed23ac4d82.png',
  'Iva Talwar': '28af042d-c9df-45bb-b52c-e21a821ebb55.png',
  'Sahana Venkataraman': 'c5a5b4ba-7814-483e-b308-f19e8038eebb.png',
};

function assetFallback(name) {
  const file = ASSET_BY_ALPHA[name];
  if (!file) return null;
  return path.join(ASSETS, `${ASSET_PREFIX}${file}`);
}
const TEAM = path.join(ROOT, 'team');
const EXEC_PATH = path.join(TEAM, 'executives.json');
const CONVERT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'convert-photos.py');

const LEADERSHIP = [
  { name: 'Thivya Jeyapalan', role: 'Founder & CEO', photo: 'team/member-01.jpg' },
  { name: 'Kathy Dong', role: 'Program Director', photo: 'team/member-02.jpg' },
  { name: 'Madison Wong', role: 'Chief Marketing Officer', photo: 'team/member-03.jpg' },
];

function lastName(full) {
  const parts = full.trim().split(/\s+/);
  return parts[parts.length - 1].toLowerCase();
}

function fileKind(filePath) {
  const buf = fs.readFileSync(filePath).subarray(0, 16);
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'image';
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return 'image';
  if (buf.toString('ascii', 0, 4) === '%PDF') return 'pdf';
  if (buf.includes(Buffer.from('ftyp'))) return 'image';
  return 'unknown';
}

function downloadDrive(fileId, destPath) {
  if (USE_GDOWN) {
    execSync(`python -m gdown "https://drive.google.com/uc?id=${fileId}" -O "${destPath}"`, {
      stdio: 'inherit',
      cwd: ROOT,
    });
    return fs.statSync(destPath).size;
  }

  return downloadDriveFetch(fileId, destPath);
}

async function downloadDriveFetch(fileId, destPath) {
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  let res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${fileId}`);

  const type = res.headers.get('content-type') || '';
  if (type.includes('text/html')) {
    const html = await res.text();
    const confirm = html.match(/confirm=([0-9A-Za-z_-]+)/);
    if (confirm) {
      res = await fetch(`${url}&confirm=${confirm[1]}`);
      if (!res.ok) throw new Error(`Confirm failed ${fileId}`);
    } else {
      throw new Error(`Got HTML instead of file for ${fileId}`);
    }
  }

  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buf);
  return buf.length;
}

const raw = JSON.parse(fs.readFileSync(EXEC_PATH, 'utf8'));
const executives = [...raw]
  .map((row) => ({
    name: String(row.name || '').trim(),
    driveId: String(row.driveId || '').trim(),
  }))
  .sort((a, b) => lastName(a.name).localeCompare(lastName(b.name)));

for (const ex of executives) {
  if (!ex.name || !ex.driveId) throw new Error(`Invalid row: ${JSON.stringify(ex)}`);
}

fs.mkdirSync(TEAM, { recursive: true });
const staging = path.join(TEAM, '_drive-staging');
fs.rmSync(staging, { recursive: true, force: true });
fs.mkdirSync(staging, { recursive: true });

for (let n = 4; n <= 30; n++) {
  const f = path.join(TEAM, `member-${String(n).padStart(2, '0')}.jpg`);
  if (fs.existsSync(f)) fs.unlinkSync(f);
}

const batch = [];
for (let i = 0; i < executives.length; i++) {
  const { name, driveId } = executives[i];
  const slot = String(i + 4).padStart(2, '0');
  const src = path.join(staging, `${slot}-raw.bin`);
  console.log(`Downloading ${name} → member-${slot}.jpg`);
  downloadDrive(driveId, src);
  let srcForConvert = src;
  const kind = fileKind(src);
  if (kind === 'pdf' || kind === 'unknown') {
    const fallbackPath = assetFallback(name);
    if (!fallbackPath || !fs.existsSync(fallbackPath)) {
      throw new Error(
        `${name}: Drive file is ${kind}, not an image. Fix driveId in team/executives.json`,
      );
    }
    console.warn(`  ${name}: Drive returned ${kind}; using chat attachment fallback`);
    srcForConvert = fallbackPath;
  }
  batch.push({
    src: srcForConvert,
    dest: path.join(TEAM, `member-${slot}.jpg`),
    name,
  });
}

console.log(`\nConverting ${batch.length} photos…`);
for (const item of batch) {
  execSync(`python "${CONVERT}" ${JSON.stringify(JSON.stringify([item]))}`, {
    stdio: 'inherit',
    cwd: ROOT,
  });
}

const roster = [
  ...LEADERSHIP.map((p) => ({ ...p, linkedin: '' })),
  ...executives.map((ex, i) => ({
    name: ex.name,
    role: '',
    photo: `team/member-${String(i + 4).padStart(2, '0')}.jpg`,
    linkedin: '',
  })),
];

fs.writeFileSync(path.join(TEAM, 'roster.json'), `${JSON.stringify(roster, null, 2)}\n`);
fs.rmSync(staging, { recursive: true, force: true });
console.log('Wrote team/roster.json');
