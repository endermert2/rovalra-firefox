import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, filesIn } from './adapter.mjs';
import { inspectHtmlWarnings } from './lint-policy.mjs';

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
const contracts=JSON.parse(await fs.readFile(path.join(ROOT,'contracts.json')));
const review=inspectHtmlWarnings(await filesIn(path.join(ROOT,'build/extension')),result.warnings,contracts.sanitizerSha256);
await fs.writeFile(path.join(ROOT,'build/html-review.json'),JSON.stringify(review,null,2)+'\n');
const unexpected = review.unexpected;
console.log(`HTML warnings: ${review.reviewed.length} verified sanitizer uses, ${unexpected.length} unresolved.`);
if (result.errors.length || unexpected.length) {
  console.error(JSON.stringify({ errors: result.errors, unexpectedWarnings: unexpected }, null, 2));
  process.exitCode = 1;
}
