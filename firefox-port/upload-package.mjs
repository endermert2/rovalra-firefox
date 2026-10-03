import fs from 'node:fs/promises';
import path from 'node:path';
import {zipSync, unzipSync} from 'fflate';
import {ROOT, filesIn} from './adapter.mjs';

// Only source is distributed: generated builds, dependencies, caches and profiles
// never enter a GitHub upload archive.
const workspace = path.dirname(ROOT);
const source = {};
for (const name of ['.gitignore', 'README-FIREFOX.md', 'LICENSE']) {
  source[name] = await fs.readFile(path.join(workspace, name));
}
for (const [name, bytes] of Object.entries(await filesIn(path.join(workspace, '.github')))) {
  source[`.github/${name}`] = bytes;
}
for (const entry of await fs.readdir(ROOT, {withFileTypes:true})) {
  if (entry.isFile() && (entry.name === '.gitignore' || entry.name === 'LICENSE' ||
      /\.(?:mjs|json|md|ps1)$/.test(entry.name))) {
    source[`firefox-port/${entry.name}`] = await fs.readFile(path.join(ROOT, entry.name));
  }
}
for (const folder of ['upstream', 'runtime', 'patches', 'test', 'assets']) {
  for (const [name, bytes] of Object.entries(await filesIn(path.join(ROOT, folder)))) {
    source[`firefox-port/${folder}/${name}`] = bytes;
  }
}
const version = JSON.parse(await fs.readFile(path.join(ROOT, 'build/report.json'))).firefoxVersion;
if (!/^\d+\.\d+\.\d+\.\d+$/.test(version)) throw new Error('Build the port before packaging');
const bytes = zipSync(source, {level:9});
const unpacked = unzipSync(bytes);
for (const [name, original] of Object.entries(source)) {
  if (!Buffer.from(unpacked[name]).equals(original)) throw new Error(`Upload archive mismatch: ${name}`);
}
const filename = `rovalra-firefox-upload-${version}.zip`;
await fs.writeFile(path.join(ROOT, 'build', filename), bytes);
console.log(`Prepared ${filename}: ${Object.keys(source).length} source files, ${bytes.length} bytes.`);
