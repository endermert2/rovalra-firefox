import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { zipSync } from 'fflate';
import { ROOT, adaptManifest, adaptFiles, normalizedHash, validateFiles, filesIn } from '../adapter.mjs';
import { unpackRelease, releaseAsset } from '../update.mjs';
import { updateManifest } from '../publish-manifest.mjs';

const original = JSON.parse(await fs.readFile(path.join(ROOT, 'upstream/manifest.json')));
const config = JSON.parse(await fs.readFile(path.join(ROOT, 'config.json')));

test('MV3 adaptation preserves main-world order and static rules', () => {
  const result = adaptManifest(original, config);
  assert.equal(result.manifest_version, 3);
  assert.equal(result.version, `${original.version}.${config.adapterRevision}`);
  assert.equal(result.background.service_worker, undefined);
  assert.deepEqual(result.background.scripts, ['firefox/background.js','background.js']);
  assert.deepEqual(result.content_scripts.slice(0,2), original.content_scripts.slice(0,2));
  assert.equal(result.content_scripts[2].js[0], 'firefox/content.js');
  assert.deepEqual(result.declarative_net_request, original.declarative_net_request);
  assert(result.permissions.includes('contextMenus'));
  assert(!result.optional_permissions.includes('contextMenus'));
  assert.equal(original.background.service_worker, 'background.js');
});
test('unsupported manifest generations and module workers stop adaptation', () => {
  assert.throws(() => adaptManifest({...original,manifest_version:2},config), /requires/);
  assert.throws(() => adaptManifest({...original,background:{service_worker:'bg.js',type:'module'}},config), /requires/);
});
test('function contracts tolerate formatting but detect changed behavior', () => {
  assert.equal(normalizedHash('function x(){ return 1; }'),normalizedHash('function x() {\n return 1;\n}'));
  assert.notEqual(normalizedHash('function x(){ return 1; }'),normalizedHash('function x(){ return 2; }'));
});
test('changed upstream launcher is rejected before creating a new build', async () => {
  const input=await filesIn(path.join(ROOT,'upstream'));
  input['content.js']=Buffer.from(input['content.js'].toString().replace('function executeLaunchScript(codeToInject) {',
    'function executeLaunchScript(codeToInject) { throw new Error("upstream changed");'));
  await assert.rejects(adaptFiles(input,config),/Upstream changed executeLaunchScript/);
});
test('ZIP paths cannot escape extraction or collide on Windows', () => {
  assert.throws(()=>unpackRelease(zipSync({'../manifest.json':new Uint8Array()})),/Unsafe/);
  assert.throws(()=>unpackRelease(zipSync({'C:/escape':new Uint8Array()})),/Unsafe/);
  assert.throws(()=>unpackRelease(zipSync({'manifest.json':new Uint8Array(),'Manifest.json':new Uint8Array()})),/Duplicate/);
  const files=unpackRelease(zipSync({'release/manifest.json':Buffer.from('{}'),'release/a.js':Buffer.from('true;')}));
  assert.equal(files['a.js'].toString(),'true;');
});
test('only the expected stable GitHub release asset is downloaded', () => {
  const asset={name:'rovalra-v2.6.8.zip',size:10,browser_download_url:'https://github.com/NotValra/RoValra/releases/download/v2.6.8/rovalra-v2.6.8.zip'};
  assert.equal(releaseAsset({assets:[asset]}),asset);
  assert.throws(()=>releaseAsset({prerelease:true,assets:[asset]}),/stable/);
  assert.throws(()=>releaseAsset({assets:[asset,asset]}),/one/);
  assert.throws(()=>releaseAsset({assets:[{...asset,browser_download_url:'https://example.com/file.zip'}]}),/origin/);
});
test('unsigned update index pins identity, version, HTTPS artifact and checksum', () => {
  const c={...config,releaseRepository:'test-owner/test-repo'};
  const m=adaptManifest(original,c);
  const digest='a'.repeat(64);
  const update=updateManifest(c,m,'unsigned.xpi',digest).addons[c.addonId].updates[0];
  assert.equal(update.version,m.version);
  assert.equal(update.update_hash,`sha256:${digest}`);
  assert.equal(update.update_link,`https://github.com/test-owner/test-repo/releases/download/firefox-v${m.version}/unsigned.xpi`);
  assert.throws(()=>updateManifest({...config,releaseRepository:null},m,'signed.xpi',digest),/releaseRepository/);
  assert.throws(()=>updateManifest({...c,addonId:'different@local.invalid'},m,'unsigned.xpi',digest),/identity/);
  assert.throws(()=>updateManifest(c,m,'../unsigned.xpi',digest),/artifact/);
  assert.throws(()=>updateManifest(c,m,'unsigned.xpi','bad'),/artifact/);
});
test('launch adapters preserve all Roblox argument shapes without executable strings', async () => {
  const calls=[];
  const context=vm.createContext({browser:{runtime:{sendMessage:async message=>{calls.push(message);return {success:true};}}},console,
    callRobloxApiJson:async()=>[{universeId:456}],URL,encodeURIComponent});
  vm.runInContext(await fs.readFile(path.join(ROOT,'patches/launcher.js'),'utf8'),context);
  for(const expression of ["launchGame(123)","launchGame(123,'job')","launchPrivateGame(123,'access','link')",
    "launchMultiplayerGame(123,{test:'ok'})","followUser(789)","launchStudioForGame(123)","launchDeeplink('roblox://placeId=123')"])
    await vm.runInContext(expression,context);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0].args)),[123]);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[2].args)),[123,'access','link']);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[3].args)),[123,false,false,null,null,{launchData:{test:'ok'}}]);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[5].args)),[123,456]);
  assert(calls.every(call=>call.action==='rovalraFirefoxLaunch' && !('codeToInject' in call)));
  assert.throws(()=>vm.runInContext("launchDeeplink('javascript:alert(1)')",context),/Invalid/);
});
test('build contains required resources and the Firefox-compatible beta redirect', async () => {
  const files=await filesIn(path.join(ROOT,'build/extension'));
  validateFiles(files);
  assert(files['content.js'].length < 5*1024*1024);
  const rules=JSON.parse(files['public/Assets/Rules/beta-rules.json']);
  assert(rules.some(rule=>rule.action.redirect?.extensionPath==='/firefox/beta-programs.json'));
  assert(JSON.parse(files['firefox/beta-programs.json']).betaPrograms.length);
  assert(!Object.keys(files).some(name=>/node_modules|test\.key|smoke-/.test(name)));
});
