import fs from 'node:fs/promises';
import path from 'node:path';
import { zipSync } from 'fflate';
import { ROOT, readConfig, filesIn } from './adapter.mjs';
import { unpackRelease } from './update.mjs';

const state = JSON.parse(await fs.readFile(path.join(ROOT,'build/release.json')));
const upstreamZip = await fs.readFile(path.join(ROOT,'downloads',`rovalra-v${state.upstreamVersion}.zip`));
const input = unpackRelease(upstreamZip);
const source = {};
for (const [name,bytes] of Object.entries(input)) source[`firefox-port/upstream/${name}`]=bytes;
for (const name of ['adapter.mjs','hardening.mjs','lint-policy.mjs','server-fixes.mjs','update.mjs','verify.mjs','publish-manifest.mjs','source-package.mjs','Update-Firefox.ps1','config.json','contracts.json','package.json','package-lock.json','README.md','AUTOMATIC-UPDATES.md','REPAIR-NOTES.md','MAINTENANCE-2.6.9.5.md','SUBPLACE-FIX-2.6.9.6.md','SUBPLACE-FOLLOWUP-2.6.9.7.md','LICENSE','NOTICE.md']) {
  source[`firefox-port/${name}`]=await fs.readFile(path.join(ROOT,name));
}
for (const folder of ['runtime','patches','test','assets']) for (const [name,bytes] of Object.entries(await filesIn(path.join(ROOT,folder)))) {
  source[`firefox-port/${folder}/${name}`]=bytes;
}
source['firefox-port/config.json']=Buffer.from(JSON.stringify(await readConfig(),null,2));
source['firefox-port/UPDATER-REPAIR-2.6.12.8.md']=await fs.readFile(path.join(ROOT,'UPDATER-REPAIR-2.6.12.8.md'));
// Include the original project's corresponding source, pinned to this release.
const response=await fetch(`https://codeload.github.com/NotValra/RoValra/zip/refs/tags/v${state.upstreamVersion}`,
  {signal:AbortSignal.timeout(120000)});
if(!response.ok)throw new Error(`Could not download corresponding upstream source: HTTP ${response.status}`);
source[`upstream-source-v${state.upstreamVersion}.zip`]=new Uint8Array(await response.arrayBuffer());
source['BUILD.txt']=Buffer.from('Requires Node.js 22+. From firefox-port/: npm ci, then npm run build.\nThe exact release input is in upstream/. Its original repository source is also included as a ZIP.\nconfig.json contains the ID and update repository used for this release.\nThis port is distributed unsigned for Firefox editions that support disabling signature enforcement.\n');
await fs.writeFile(path.join(ROOT,'build/source.zip'),zipSync(source,{level:9}));
console.log('Prepared adapter, exact input, build instructions, and corresponding upstream source.');
