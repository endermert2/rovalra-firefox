import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { unzipSync } from 'fflate';
import { ROOT, sha256, readConfig } from './adapter.mjs';

export function updateManifest(config, manifest, filename, digest) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(config.releaseRepository || '')) throw new Error('Set releaseRepository before publishing');
  if (!/^[\w.-]+\.xpi$/.test(filename) || !/^[a-f\d]{64}$/.test(digest)) throw new Error('Invalid update artifact');
  const gecko=manifest.browser_specific_settings?.gecko;
  if(gecko?.id!==config.addonId || gecko?.update_url!==`https://github.com/${config.releaseRepository}/releases/latest/download/updates.json`) {
    throw new Error('Update identity or repository differs from the packaged manifest');
  }
  return { addons: { [config.addonId]: { updates: [{
    version: manifest.version,
    update_link: `https://github.com/${config.releaseRepository}/releases/download/firefox-v${manifest.version}/${filename}`,
    update_hash: `sha256:${digest}`,
    applications: { gecko: { strict_min_version: config.minimumFirefoxVersion } },
  }] } } };
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const config = await readConfig();
  const report=JSON.parse(await fs.readFile(path.join(ROOT,'build/report.json')));
  if(!/^rovalra-firefox-[\d.]+-unsigned\.xpi$/.test(report.package)) throw new Error('Invalid package filename');
  const bytes = await fs.readFile(path.join(ROOT, 'build', report.package));
  if(sha256(bytes)!==report.sha256) throw new Error('Package checksum differs from the build report');
  const files = unzipSync(bytes);
  const manifest = JSON.parse(Buffer.from(files['manifest.json']));
  const expected = JSON.parse(await fs.readFile(path.join(ROOT, 'build/extension/manifest.json')));
  if (manifest.version !== expected.version || manifest.browser_specific_settings.gecko.id !== config.addonId ||
      manifest.browser_specific_settings.gecko.update_url !== expected.browser_specific_settings.gecko.update_url) {
    throw new Error('XPI identity, version, or update URL differs from this build');
  }
  await fs.writeFile(path.join(ROOT, 'build/updates.json'),
    JSON.stringify(updateManifest(config, manifest, report.package, sha256(bytes)), null, 2) + '\n');
  console.log('Prepared the Firefox update manifest for the unsigned Developer Edition package.');
}
