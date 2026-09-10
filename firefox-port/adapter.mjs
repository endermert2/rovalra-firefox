import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { parse } from 'acorn';
import * as walk from 'acorn-walk';
import { zipSync } from 'fflate';
import { transform } from 'esbuild';

export const ROOT = path.dirname(fileURLToPath(import.meta.url));
export const sha256 = (data) => createHash('sha256').update(data).digest('hex');
export const parseJS = (source) => parse(source, { ecmaVersion: 'latest', sourceType: 'script' });
export function normalizedHash(source) {
  const tree = parseJS(source);
  return sha256(JSON.stringify(tree, (key, value) =>
    ['start', 'end', 'raw'].includes(key) ? undefined : value));
}
export function functions(source) {
  const result = new Map();
  walk.simple(parseJS(source), { FunctionDeclaration(node) {
    const name = node.id?.name;
    if (!result.has(name)) result.set(name, []);
    result.get(name).push(node);
  } });
  return result;
}
export function edits(source, changes) {
  changes.sort((a, b) => b.start - a.start);
  let last = source.length;
  for (const change of changes) {
    if (change.end > last) throw new Error('Overlapping adapter changes');
    source = source.slice(0, change.start) + change.text + source.slice(change.end);
    last = change.start;
  }
  parseJS(source);
  return source;
}
export async function filesIn(directory, prefix = '') {
  const files = {};
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error(`Symlink is not an extension file: ${entry.name}`);
    const name = prefix + entry.name;
    if (entry.isDirectory()) Object.assign(files, await filesIn(path.join(directory, entry.name), name + '/'));
    else if (entry.isFile()) files[name] = await fs.readFile(path.join(directory, entry.name));
  }
  return files;
}
export function apiPaths(source) {
  return [...new Set(source.match(/\bchrome\.[A-Za-z]+(?:\.[A-Za-z]+)*/g) || [])].sort();
}
function replaceFunction(source, name, replacement, contracts) {
  const nodes = functions(source).get(name);
  if (nodes?.length !== 1) throw new Error(`Expected one upstream function ${name}; review required`);
  const node = nodes[0];
  if (normalizedHash(source.slice(node.start, node.end)) !== contracts.functions[name]) {
    throw new Error(`Upstream changed ${name}; adapter review required. Previous build is preserved.`);
  }
  return edits(source, [{ ...node, text: replacement }]);
}
function replaceOnce(source, before, after) {
  if (source.split(before).length !== 2) throw new Error(`Upstream patch no longer matches: ${before.slice(0, 70)}`);
  return source.replace(before, after);
}
export function adaptManifest(original, config) {
  const manifest = structuredClone(original);
  if (manifest.manifest_version !== 3 || !manifest.background?.service_worker || manifest.background.type === 'module') {
    throw new Error('This adapter requires a bundled MV3 classic service worker; review the new release');
  }
  if (!/^\d+\.\d+\.\d+$/.test(manifest.version) || !Number.isInteger(config.adapterRevision) || config.adapterRevision < 1) {
    throw new Error('Expected a three-part upstream version and positive adapter revision');
  }
  if (!/^[^\s@]+@[^\s@]+$/.test(config.addonId)) throw new Error('Configure a stable Firefox add-on ID');
  manifest.version += `.${config.adapterRevision}`;
  manifest.name = 'RoValra (Unofficial Firefox Port)';
  manifest.background = { scripts: ['firefox/background.js', manifest.background.service_worker], persistent: false };
  delete manifest.update_url;
  delete manifest.minimum_chrome_version;
  delete manifest.key;
  manifest.browser_specific_settings = { gecko: {
    id: config.addonId, strict_min_version: config.minimumFirefoxVersion,
    data_collection_permissions: config.dataCollectionPermissions,
  } };
  if (config.releaseRepository) {
    if (!/^[\w.-]+\/[\w.-]+$/.test(config.releaseRepository)) throw new Error('Invalid release repository');
    manifest.browser_specific_settings.gecko.update_url =
      `https://github.com/${config.releaseRepository}/releases/latest/download/updates.json`;
  }
  // Copy-ID runs after a context-menu message, outside Firefox's transient gesture.
  manifest.permissions = [...new Set([...manifest.permissions, 'clipboardWrite', 'contextMenus'])];
  // Firefox accepts this permission at installation, not as an optional one.
  manifest.optional_permissions = manifest.optional_permissions.filter(permission => permission !== 'contextMenus');
  // Used by the upstream background downloader for Roblox client assets.
  manifest.host_permissions = [...new Set([...manifest.host_permissions, 'https://setup.rbxcdn.com/*'])];
  for (const script of manifest.content_scripts) {
    if (script.world !== 'MAIN') script.js.unshift('firefox/content.js');
  }
  manifest.web_accessible_resources.push({
    resources: ['firefox/beta-programs.json'], matches: ['*://*.roblox.com/*'],
  });
  return manifest;
}
export async function adaptFiles(input, config) {
  const output = { ...input };
  const original = JSON.parse(input['manifest.json']);
  const contracts = JSON.parse(await fs.readFile(path.join(ROOT, 'contracts.json'), 'utf8'));
  const scriptLayout = original.content_scripts?.map(script => ({ js: script.js, world: script.world || 'ISOLATED' }));
  if (JSON.stringify(scriptLayout) !== JSON.stringify([
    {js:['intercept.js'],world:'MAIN'},
    {js:['public/Assets/data/serverid_extractor.js'],world:'MAIN'},
    {js:['content.js'],world:'ISOLATED'},
  ])) throw new Error('Upstream changed its script layout; adapter review required');
  for (const permission of [...(original.permissions || []), ...(original.optional_permissions || [])]) {
    if (!contracts.permissions.includes(permission)) throw new Error(`New upstream permission ${permission}; review required`);
  }
  for (const [name, bytes] of Object.entries(input)) {
    if (!name.endsWith('.js')) continue;
    for (const api of apiPaths(bytes.toString())) {
      if (!contracts.apis.includes(api)) throw new Error(`New upstream API ${api} in ${name}; review required`);
    }
    parseJS(bytes.toString());
  }
  let content = input['content.js'].toString();
  const launcher = await fs.readFile(path.join(ROOT, 'patches/launcher.js'), 'utf8');
  for (const [name, nodes] of functions(launcher)) {
    const replacement = launcher.slice(nodes[0].start, nodes[0].end);
    content = replaceFunction(content, name, replacement, contracts);
  }
  content = replaceFunction(content, 'injectScript', `function injectScript(src) {
    const prefix = chrome.runtime.getURL('');
    if (!src.startsWith(prefix)) return Promise.reject(new Error('Only packaged scripts can be injected'));
    return browser.runtime.sendMessage({action: 'rovalraFirefoxMainScript', path: src.slice(prefix.length)})
      .then(response => { if (!response?.success) throw new Error(response?.error || 'Script injection failed'); });
  }`, contracts);
  // Bundle the existing mesh worker as a file instead of a blob/data script.
  let worker;
  walk.simple(parseJS(content), { VariableDeclarator(node) {
    if (node.id.name === 'jsContent' && node.init?.type === 'TemplateLiteral' && node.init.expressions.length === 0) {
      if (worker) throw new Error('Ambiguous worker source');
      worker = node.init.quasis[0].value.cooked;
    }
  } });
  if (!worker) throw new Error('Upstream mesh worker changed; review required');
  parseJS(worker);
  content = replaceFunction(content, 'WorkerWrapper', `function WorkerWrapper(options) {
    return new RoValraFirefoxWorker(options);
  }`, contracts);
  output['firefox/mesh-worker.js'] = Buffer.from(worker);
  const changes = [];
  walk.simple(parseJS(content), {
    NewExpression(node) {
      if (node.callee.type === 'Identifier' && node.callee.name === 'CustomEvent') {
        changes.push({ ...node.callee, text: 'RoValraFirefoxCustomEvent' });
      }
    },
    MemberExpression(node) {
      if (!node.computed && node.object.name === 'chrome' && node.property.name === 'storage') {
        changes.push({ ...node, text: 'RoValraFirefoxStorage' });
      }
    },
  });
  content = edits(content, changes);
  // Mozilla's validator will not parse an individual JS file over 5 MB. Keep
  // original readable inputs in upstream/ and use upstream's standard bundler.
  output['content.js'] = Buffer.from((await transform(content, {
    minify: true, target: 'firefox140', legalComments: 'eof', charset: 'utf8',
  })).code);
  let background = input['background.js'].toString();
  background = replaceOnce(background, 'fetchOptions = { method, headers: { ...headers } }',
    'fetchOptions = { method, credentials: "include", cache: options.noCache ? "no-store" : "default", headers: { ...headers } }');
  // An unrelated listener must not claim asynchronous responses to every message.
  const backgroundEdits = [];
  walk.simple(parseJS(background), { ArrowFunctionExpression(node) {
    if (node.body.type === 'SequenceExpression' &&
        background.slice(node.body.start, node.body.end).startsWith('message.type === "settingsCompatGetRes"')) {
      backgroundEdits.push({ ...node, text:
        `(message, sender, sendResponse) => { if (message.type !== "settingsCompatGetRes") return false; return (${background.slice(node.body.start, node.body.end)}); }` });
    }
  } });
  if (backgroundEdits.length !== 1) throw new Error('Settings compatibility listener changed; review required');
  background = edits(background, backgroundEdits);
  // The converted launcher no longer sends executable strings. Remove that path.
  const bgTree = parseJS(background);
  let injectionCase;
  walk.simple(bgTree, { SwitchCase(node) { if (node.test?.value === 'injectScript') injectionCase = node; } });
  if (!injectionCase) throw new Error('Upstream launcher message handler changed');
  background = edits(background, [{ ...injectionCase, text:
    'case "injectScript": sendResponse({success: false, error: "Use the packaged Firefox launcher"}); return false;' }]);
  output['background.js'] = Buffer.from(background);
  for (const file of ['background.js', 'content.js']) {
    output[`firefox/${file}`] = await fs.readFile(path.join(ROOT, 'runtime', file));
  }
  output['LICENSE'] = await fs.readFile(path.join(ROOT, 'LICENSE'));
  output['FIREFOX-PORT-NOTICE.md'] = await fs.readFile(path.join(ROOT, 'NOTICE.md'));
  const manifest = adaptManifest(original, config);
  // Firefox rejects data: redirect targets. Serve the same static JSON as a
  // packaged, web-accessible resource and retain the user's ruleset toggle.
  const betaPath = 'public/Assets/Rules/beta-rules.json';
  const betaRules = JSON.parse(output[betaPath]);
  const dataRules = betaRules.filter(rule => rule.action?.redirect?.url?.startsWith('data:application/json'));
  if (dataRules.length !== 1) throw new Error('Early-access redirect changed; review required');
  const redirect = dataRules[0].action.redirect;
  const payload = decodeURIComponent(redirect.url.slice(redirect.url.indexOf(',') + 1));
  JSON.parse(payload);
  output['firefox/beta-programs.json'] = Buffer.from(payload);
  dataRules[0].action.redirect = { extensionPath: '/firefox/beta-programs.json' };
  output[betaPath] = Buffer.from(JSON.stringify(betaRules, null, 2) + '\n');
  output['manifest.json'] = Buffer.from(JSON.stringify(manifest, null, 2) + '\n');
  validateFiles(output);
  return { files: output, manifest, report: {
    upstreamVersion: original.version, firefoxVersion: manifest.version,
    adapterRevision: config.adapterRevision,
    inputHashes: Object.fromEntries(Object.entries(input).map(([name, bytes]) => [name, sha256(bytes)])),
    changedFiles: Object.keys(output).filter(name => !input[name] || !output[name].equals(input[name])),
    compatibility: 'Automated checks cover known adapter contracts, not all Roblox features or future browser APIs.',
  } };
}
export function validateFiles(files) {
  const manifest = JSON.parse(files['manifest.json']);
  const required = [...manifest.background.scripts, manifest.action.default_popup,
    ...Object.values(manifest.icons), ...manifest.content_scripts.flatMap(s => [...s.js, ...(s.css || [])]),
    ...manifest.declarative_net_request.rule_resources.map(r => r.path)];
  for (const name of required) if (!files[name]) throw new Error(`Missing packaged file: ${name}`);
  for (const [name, bytes] of Object.entries(files)) if (name.endsWith('.js')) parseJS(bytes.toString());
}
export async function writeBuild(result) {
  const build = path.join(ROOT, 'build');
  await fs.mkdir(build, { recursive: true });
  const stage = await fs.mkdtemp(path.join(build, 'extension-stage-'));
  for (const [name, bytes] of Object.entries(result.files)) {
    const target = path.resolve(stage, name);
    if (!target.startsWith(stage + path.sep)) throw new Error(`Unsafe extension path ${name}`);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, bytes);
  }
  const target = path.resolve(build, 'extension');
  // Both paths are fixed children of this adapter's build directory.
  if (path.dirname(target) !== build) throw new Error('Unsafe build target');
  await fs.rm(target, { recursive: true, force: true });
  await fs.rename(stage, target);
  const zip = zipSync(Object.fromEntries(Object.entries(result.files)
    .sort(([a], [b]) => a.localeCompare(b)).map(([name, bytes]) => [name, [bytes, { mtime: new Date('2020-01-01T00:00:00Z') }]])), { level: 9 });
  const filename = `rovalra-firefox-${result.manifest.version}-unsigned.xpi`;
  await fs.writeFile(path.join(build, filename), zip);
  await fs.writeFile(path.join(build, 'report.json'), JSON.stringify({ ...result.report,
    package: filename, sha256: sha256(zip) }, null, 2) + '\n');
  console.log(`Built ${filename} (${zip.length} bytes). This package is unsigned.`);
  return filename;
}
export async function readConfig() {
  const config = JSON.parse(await fs.readFile(path.join(ROOT, 'config.json'), 'utf8'));
  if (process.env.FIREFOX_ADDON_ID) config.addonId = process.env.FIREFOX_ADDON_ID;
  if (process.env.FIREFOX_RELEASE_REPOSITORY) config.releaseRepository = process.env.FIREFOX_RELEASE_REPOSITORY;
  return config;
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const index = process.argv.indexOf('--source');
    const source = path.resolve(ROOT, index === -1 ? 'upstream' : process.argv[index + 1]);
    await writeBuild(await adaptFiles(await filesIn(source), await readConfig()));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
