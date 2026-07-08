/**
 * Import executive team only. Leadership (member-01–03) is never modified.
 *
 * Edit team/executives.json — one { name, driveId } per row, in display order.
 * Then: node scripts/rebuild-team.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const TEAM = path.join(ROOT, 'team');
const ROSTER_PATH = path.join(TEAM, 'roster.json');
const EXEC_PATH = path.join(TEAM, 'executives.json');

const LEADERSHIP = [
  { name: 'Thivya Jeyapalan', role: 'Founder & CEO', photo: 'team/member-01.jpg' },
  { name: 'Kathy Dong', role: 'Program Director', photo: 'team/member-02.jpg' },
  { name: 'Madison Wong', role: 'Chief Marketing Officer', photo: 'team/member-03.jpg' },
];

function download(id, dest) {
  execSync(`python -m gdown "${id}" -O "${dest}"`, { stdio: 'inherit', cwd: ROOT });
}

function loadExecutives() {
  const raw = JSON.parse(fs.readFileSync(EXEC_PATH, 'utf8'));
  if (!Array.isArray(raw) || raw.length === 0) {
    throw new Error('team/executives.json must be a non-empty array of { name, driveId }');
  }
  return raw.map((row, i) => {
    const name = String(row.name || '').trim();
    const driveId = String(row.driveId || '')
      .trim()
      .replace(/^https?:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)([^/&?]+).*/i, '$1')
      .replace(/[?&].*$/, '');
    if (!name) throw new Error(`executives.json row ${i + 1}: missing name`);
    if (!driveId || driveId === 'PASTE_DRIVE_ID_HERE') {
      throw new Error(`executives.json row ${i + 1} (${name}): missing driveId`);
    }
    return { name, driveId };
  });
}

fs.mkdirSync(TEAM, { recursive: true });

const executives = loadExecutives();
console.log(`Importing ${executives.length} executives (leadership unchanged)…`);

for (let n = 4; n <= 30; n++) {
  const file = path.join(TEAM, `member-${String(n).padStart(2, '0')}.jpg`);
  if (fs.existsSync(file)) fs.unlinkSync(file);
}

const staging = path.join(TEAM, '_staging');
if (fs.existsSync(staging)) fs.rmSync(staging, { recursive: true, force: true });

for (let i = 0; i < executives.length; i++) {
  const slot = String(i + 4).padStart(2, '0');
  const dest = path.join(TEAM, `member-${slot}.jpg`);
  const { name, driveId } = executives[i];
  console.log(`Exec ${i + 1}/${executives.length} → member-${slot}.jpg (${name})`);
  download(driveId, dest);
}

const roster = [
  ...LEADERSHIP.map((p) => ({ ...p, linkedin: '' })),
  ...executives.map((p, i) => ({
    name: p.name,
    role: '',
    photo: `team/member-${String(i + 4).padStart(2, '0')}.jpg`,
    linkedin: '',
  })),
];

fs.writeFileSync(ROSTER_PATH, `${JSON.stringify(roster, null, 2)}\n`);
console.log(`Wrote ${ROSTER_PATH} (${roster.length} people)`);
