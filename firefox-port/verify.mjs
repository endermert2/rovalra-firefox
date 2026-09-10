import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from './adapter.mjs';

const command = spawnSync(process.execPath, [path.join(ROOT, 'node_modules/web-ext/bin/web-ext.js'),
  'lint', '--self-hosted', '--source-dir', path.join(ROOT, 'build/extension'), '--output', 'json'], {
  encoding: 'utf8', env: { ...process.env, NO_UPDATE_NOTIFIER: '1' }, maxBuffer: 10 * 1024 * 1024,
});
if (command.error) throw command.error;
let result;
try { result = JSON.parse(command.stdout); } catch { throw new Error(`Mozilla validator failed: ${command.stderr}`); }
await fs.writeFile(path.join(ROOT, 'build/lint.json'), JSON.stringify(result, null, 2) + '\n');
const counts = {};
for (const warning of result.warnings) counts[warning.code] = (counts[warning.code] || 0) + 1;
console.log(JSON.stringify({ summary: result.summary, warningsByCode: counts }, null, 2));
// These are upstream DOM-rendering warnings, not a Firefox-specific regression.
// Keep every location in lint.json for review; never describe these as resolved.
const unexpected = result.warnings.filter(w => w.code !== 'UNSAFE_VAR_ASSIGNMENT');
if (result.errors.length || unexpected.length) {
  console.error(JSON.stringify({ errors: result.errors, unexpectedWarnings: unexpected }, null, 2));
  process.exitCode = 1;
}
