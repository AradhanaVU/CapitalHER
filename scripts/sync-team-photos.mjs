/**
 * Re-sync team photos and roster. Run: node scripts/rebuild-team.mjs
 * (This file forwards to rebuild-team for one command name.)
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const script = path.join(path.dirname(fileURLToPath(import.meta.url)), 'rebuild-team.mjs');
execSync(`node "${script}"`, { stdio: 'inherit' });
