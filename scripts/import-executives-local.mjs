/**
 * Import executives from chat attachments (images 1–18 = A→Z by last name).
 * Site display order + imageNum from your confirmed list (May 2026).
 * Keeps member-04 & member-05 (Anjalee & Cadence from Drive — already correct).
 *
 * Run: node scripts/import-executives-local.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const TEAM = path.join(ROOT, 'team');
const ASSETS = path.join(
  process.env.USERPROFILE || '',
  '.cursor',
  'projects',
  'c-CapitalHER',
  'assets',
);
const ASSET_PREFIX =
  'c__Users_Aradhana_AppData_Roaming_Cursor_User_workspaceStorage_3e058fa5730edcb094af4ebda6caccec_images_';
const PREFIX = `${ASSET_PREFIX}image-`;

const LEADERSHIP = [
  { name: 'Thivya Jeyapalan', role: 'Founder & CEO', photo: 'team/member-01.jpg' },
  { name: 'Kathy Dong', role: 'Program Director', photo: 'team/member-02.jpg' },
  { name: 'Madison Wong', role: 'Chief Marketing Officer', photo: 'team/member-03.jpg' },
];

/** Chat uploads 1–18 in alphabetical order by last name. */
const IMAGE_BY_NUM = {
  1: `${PREFIX}c913678f-3e9a-45a7-bd0d-4a50ecf41b48.png`,
  2: `${PREFIX}6cf4a2c9-2f22-4f56-a1be-f904ccfdec35.png`,
  3: `${PREFIX}1923ac99-a8fc-41ff-a13e-079652947f99.png`,
  4: `${PREFIX}37006b53-5283-4f7d-b2cc-bc3e4af978a7.png`,
  5: `${PREFIX}f5dca16f-e6cc-40a0-aa3c-cb7750a0d928.png`,
  6: `${PREFIX}628d4e3b-82c2-4a7f-8dff-5494fc12ea6c.png`,
  7: `${PREFIX}7636c5ef-6f4f-4637-b62f-811c8a4efe7d.png`,
  8: `${PREFIX}d702e2a9-79b6-427a-88dc-19341b9053a9.png`,
  9: `${PREFIX}4c8ddae1-2977-4b70-9da7-8662140c7442.png`,
  10: `${PREFIX}29427148-1579-4ec4-b401-1f470cfe2cd2.png`,
  11: `${PREFIX}7ae2f084-a175-44f4-9d37-b70814002ade.png`,
  12: `${PREFIX}00dfb1ad-5415-4453-906e-291e4c706369.png`,
  13: `${PREFIX}2d91971d-b5ae-4e9d-8a7d-caa628c9688f.png`,
  14: `${PREFIX}8388f94e-40a8-44e1-abca-cd2d88fb9039.png`,
  15: `${PREFIX}5e3fd9a4-106e-4593-bebb-8b39897478bf.png`,
  16: `${PREFIX}c5a5b4ba-7814-483e-b308-f19e8038eebb.png`,
  17: `${PREFIX}167a8702-9dbc-427e-9e5e-78ed23ac4d82.png`,
  18: `${PREFIX}28af042d-c9df-45bb-b52c-e21a821ebb55.png`,
};

/** Per-person overrides (photos you sent separately). */
const IMAGE_OVERRIDE = {
  'Suditi Gupta': `${ASSET_PREFIX}image-b067a79e-957e-4ed8-9e2e-9a4b35468e01.png`,
  'Sahana Venkataraman': `${ASSET_PREFIX}Screenshot_2026-06-01_215558-0440ea9a-2f7e-467d-afa5-6640f00496d6.png`,
  'Leanne Semwanga': `${ASSET_PREFIX}Screenshot_2026-06-01_215615-46b8ab65-d4c2-44ae-b487-eeb40cd70b2a.png`,
};

const ALL_NAMES = [
  'Anjalee Baskaralingham',
  'Cadence Ding',
  'Omara Downer',
  'Avery Fan',
  'Shams Guliyeva',
  'Suditi Gupta',
  'Thuvarakha Jeevanesan',
  'Suvi Kakan',
  'Hargun Kaur',
  'Diyaa Kousihan',
  'Anna Lian',
  'Susanna Li',
  'Michaella Saturio',
  'Chitra Sekhri',
  'Leanne Semwanga',
  'Lillian Shen',
  'Iva Talwar',
  'Sahana Venkataraman',
];

const EXCEPTION_IMAGE = {
  'Lillian Shen': 17,
  'Iva Talwar': 18,
};

function lastName(full) {
  const parts = full.trim().split(/\s+/);
  return parts[parts.length - 1].toLowerCase();
}

function defaultAlphaSlot(name) {
  const sorted = [...ALL_NAMES].sort((a, b) => lastName(a).localeCompare(lastName(b)));
  return sorted.indexOf(name) + 1;
}

/** Your site name order (not A→Z); photos = chat attachments A→Z by last name. */
const DISPLAY_ORDER = [
  'Anjalee Baskaralingham',
  'Cadence Ding',
  'Omara Downer',
  'Avery Fan',
  'Shams Guliyeva',
  'Thuvarakha Jeevanesan',
  'Suvi Kakan',
  'Hargun Kaur',
  'Diyaa Kousihan',
  'Anna Lian',
  'Susanna Li',
  'Michaella Saturio',
  'Chitra Sekhri',
  'Lillian Shen',
  'Suditi Gupta',
  'Iva Talwar',
  'Sahana Venkataraman',
  'Leanne Semwanga',
];

const EXECUTIVES = DISPLAY_ORDER.map((name) => ({
  name,
  imageNum: EXCEPTION_IMAGE[name] ?? defaultAlphaSlot(name),
  keepPhoto: name === 'Anjalee Baskaralingham' || name === 'Cadence Ding',
}));

const CONVERT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'convert-photos.py');

function imagePath(ex) {
  const override = IMAGE_OVERRIDE[ex.name];
  if (override) {
    const src = path.join(ASSETS, override);
    if (!fs.existsSync(src)) throw new Error(`Missing override for ${ex.name}: ${src}`);
    return src;
  }
  const file = IMAGE_BY_NUM[ex.imageNum];
  if (!file) throw new Error(`No image #${ex.imageNum} for ${ex.name}`);
  const src = path.join(ASSETS, file);
  if (!fs.existsSync(src)) throw new Error(`Missing attachment #${ex.imageNum}: ${src}`);
  return src;
}

fs.mkdirSync(TEAM, { recursive: true });

const preserved = new Map();
for (const ex of EXECUTIVES.filter((e) => e.keepPhoto)) {
  const slot = String(EXECUTIVES.indexOf(ex) + 4).padStart(2, '0');
  const file = path.join(TEAM, `member-${slot}.jpg`);
  if (fs.existsSync(file)) preserved.set(slot, fs.readFileSync(file));
}

for (let n = 4; n <= 30; n++) {
  const f = path.join(TEAM, `member-${String(n).padStart(2, '0')}.jpg`);
  if (fs.existsSync(f)) fs.unlinkSync(f);
}

const batch = [];
for (let i = 0; i < EXECUTIVES.length; i++) {
  const ex = EXECUTIVES[i];
  const slot = String(i + 4).padStart(2, '0');
  const dest = path.join(TEAM, `member-${slot}.jpg`);

  if (ex.keepPhoto && preserved.has(slot)) {
    fs.writeFileSync(dest, preserved.get(slot));
    console.log(`KEEP member-${slot}.jpg (${ex.name})`);
    continue;
  }

  batch.push({ src: imagePath(ex), dest, name: ex.name });
}

console.log('\nSite order (name → chat image #):');
EXECUTIVES.forEach((ex, i) => {
  const src = IMAGE_OVERRIDE[ex.name] ? 'override' : ex.imageNum;
  console.log(`  ${String(i + 1).padStart(2)}. ${ex.name} → ${src}`);
});

if (batch.length) {
  console.log(`\nConverting ${batch.length} photos…`);
  for (const item of batch) {
    execSync(`python "${CONVERT}" ${JSON.stringify(JSON.stringify([item]))}`, {
      stdio: 'inherit',
      cwd: ROOT,
    });
  }
}

const roster = [
  ...LEADERSHIP.map((p) => ({ ...p, linkedin: '' })),
  ...EXECUTIVES.map((ex, i) => ({
    name: ex.name,
    role: '',
    photo: `team/member-${String(i + 4).padStart(2, '0')}.jpg`,
    linkedin: '',
  })),
];

fs.writeFileSync(
  path.join(TEAM, 'executives.json'),
  `${JSON.stringify(
    EXECUTIVES.map(({ name, imageNum }) => ({ name, imageNum })),
    null,
    2,
  )}\n`,
);
fs.writeFileSync(path.join(TEAM, 'roster.json'), `${JSON.stringify(roster, null, 2)}\n`);
console.log('Wrote team/roster.json');
