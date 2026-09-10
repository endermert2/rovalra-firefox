import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { unzipSync } from 'fflate';
import { ROOT, sha256, readConfig, adaptFiles, writeBuild } from './adapter.mjs';

const MAX_ZIP = 40 * 1024 * 1024;
const MAX_UNPACKED = 160 * 1024 * 1024;
export function releaseAsset(release) {
  if (release.draft || release.prerelease) throw new Error('Only stable upstream releases are accepted');
  const assets = release.assets.filter(asset => /^rovalra-v?\d+\.\d+\.\d+\.zip$/i.test(asset.name));
  if (assets.length !== 1) throw new Error('Expected one RoValra release ZIP; upstream packaging needs review');
  const asset = assets[0];
  const url = new URL(asset.browser_download_url);
  if (url.protocol !== 'https:' || url.hostname !== 'github.com' ||
      !url.pathname.startsWith('/NotValra/RoValra/releases/download/')) throw new Error('Unexpected release download origin');
  if (asset.size > MAX_ZIP) throw new Error('Upstream ZIP exceeds size limit');
  return asset;
}
export function unpackRelease(bytes) {
  if (bytes.length > MAX_ZIP) throw new Error('Upstream ZIP exceeds size limit');
  let total = 0;
  const names = new Set();
  const raw = unzipSync(bytes, { filter(entry) {
    const name = entry.name;
    if (name.includes('\\') || name.startsWith('/') || name.includes(':') ||
        name.split('/').some(part => part === '..' || part === '.') || /[\x00-\x1f]/.test(name)) {
      throw new Error(`Unsafe ZIP entry: ${name}`);
    }
    const canonical = name.toLowerCase();
    if (names.has(canonical)) throw new Error(`Duplicate ZIP entry: ${name}`);
    names.add(canonical);
    total += entry.originalSize;
    if (names.size > 10000 || total > MAX_UNPACKED) throw new Error('Upstream archive exceeds unpacking limits');
    return !name.endsWith('/');
  } });
  const manifests = Object.keys(raw).filter(name => name === 'manifest.json' || name.endsWith('/manifest.json'));
  if (manifests.length !== 1) throw new Error('Expected exactly one extension manifest');
  const prefix = manifests[0].slice(0, -'manifest.json'.length);
  const files = {};
  for (const [name, bytes] of Object.entries(raw)) {
    if (!name.startsWith(prefix)) throw new Error('Unexpected files outside extension root');
    files[name.slice(prefix.length)] = Buffer.from(bytes);
  }
  return files;
}
async function download(url, limit, headers = {}) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(120000) });
  if (!response.ok) throw new Error(`Download failed: HTTP ${response.status} (${new URL(url).hostname})`);
  let size = 0;
  const chunks = [];
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > limit) throw new Error('Download exceeds size limit');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}
export async function update() {
  const config = await readConfig();
  if (config.upstreamRepository !== 'NotValra/RoValra') throw new Error('This adapter supports NotValra/RoValra only');
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'RoValra-Firefox-Adapter' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const release = JSON.parse(await download(`https://api.github.com/repos/${config.upstreamRepository}/releases/latest`, 2 * 1024 * 1024, headers));
  const asset = releaseAsset(release);
  const bytes = await download(asset.browser_download_url, MAX_ZIP);
  const digest = sha256(bytes);
  if (asset.digest && asset.digest !== `sha256:${digest}`) throw new Error('GitHub release checksum does not match');
  const files = unpackRelease(bytes);
  const manifest = JSON.parse(files['manifest.json']);
  if (release.tag_name.replace(/^v/, '') !== manifest.version) throw new Error('Release tag and manifest version disagree');
  // Preserve the previous build until the entire conversion and validation pass.
  const result = await adaptFiles(files, config);
  result.report.releaseUrl = release.html_url;
  result.report.releaseAssetSha256 = digest;
  result.report.githubDigestVerified = Boolean(asset.digest);
  await fs.mkdir(path.join(ROOT, 'downloads'), { recursive: true });
  await fs.writeFile(path.join(ROOT, 'downloads', asset.name), bytes);
  await writeBuild(result);
  const state = { upstreamVersion: manifest.version, firefoxVersion: result.manifest.version,
    tag: `firefox-v${result.manifest.version}`, releaseUrl: release.html_url };
  await fs.writeFile(path.join(ROOT, 'build/release.json'), JSON.stringify(state, null, 2) + '\n');
  console.log(`Adapted upstream ${manifest.version}. Run npm run verify, npm run test:firefox and npm run test:install before publishing.`);
  return state;
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  update().catch(error => { console.error(error.message); process.exitCode = 1; });
}
