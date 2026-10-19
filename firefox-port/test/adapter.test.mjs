import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { zipSync } from 'fflate';
import * as walk from 'acorn-walk';
import { ROOT, adaptManifest, adaptFiles, normalizedHash, validateFiles, filesIn, releaseVersion, firefoxVersion, splitContentBundle, parseJS } from '../adapter.mjs';
import { unpackRelease, releaseAsset } from '../update.mjs';
import { updateManifest } from '../publish-manifest.mjs';

const original = JSON.parse(await fs.readFile(path.join(ROOT, 'upstream/manifest.json')));
const config = JSON.parse(await fs.readFile(path.join(ROOT, 'config.json')));
const baseline = JSON.parse(await fs.readFile(path.join(ROOT, 'upstream-release.json')));

test('MV3 adaptation preserves main-world order and static rules', () => {
  const result = adaptManifest(original, config);
  assert.equal(result.manifest_version, 3);
  assert.equal(result.version, `${original.version}.${config.adapterRevision}`);
  assert.equal(result.background.service_worker, undefined);
  assert.deepEqual(result.background.scripts, ['firefox/background.js','background.js']);
  assert.deepEqual(result.content_scripts.slice(0,2), original.content_scripts.slice(0,2));
  assert.deepEqual(result.content_scripts[2].js.slice(0,3), ['firefox/purify.js','firefox/content.js','firefox/fonts.js']);
  assert.deepEqual(result.content_scripts[2].js.slice(3), ['firefox/draco-decoder.js','content.js']);
  assert.deepEqual(result.declarative_net_request, original.declarative_net_request);
  assert(result.permissions.includes('contextMenus'));
  assert(result.host_permissions.includes('https://apis.rovalra.com/*'));
  assert(result.host_permissions.includes('https://www.rovalra.com/*'));
  assert(!result.optional_permissions.includes('contextMenus'));
  assert(result.optional_permissions.includes('notifications'));
  assert(!result.permissions.includes('notifications'));
  assert.equal(original.background.service_worker, 'background.js');
});
test('unsupported manifest generations and module workers stop adaptation', () => {
  assert.throws(() => adaptManifest({...original,manifest_version:2},config), /requires/);
  assert.throws(() => adaptManifest({...original,background:{service_worker:'bg.js',type:'module'}},config), /requires/);
});

test('upstream hotfix tags retain their identity when the manifest omits the hotfix', () => {
  assert.equal(releaseVersion('v2.6.14.1', '2.6.14'), '2.6.14.1');
  assert.equal(releaseVersion('v2.6.14.1', '2.6.14.1'), '2.6.14.1');
  for (const tag of ['v2.6.15.1', 'v2.6.14.0', 'v2.6.14.1.2', 'v2.6.14-beta']) {
    assert.throws(() => releaseVersion(tag, '2.6.14'), /disagree/);
  }
  const asset = {name:'rovalra-v2.6.14.1.zip', size:10,
    browser_download_url:'https://github.com/NotValra/RoValra/releases/download/v2.6.14.1/rovalra-v2.6.14.1.zip'};
  assert.equal(releaseAsset({assets:[asset]}), asset);
});

test('port versions preserve hotfix ordering and stay within four numeric components', () => {
  assert.equal(firefoxVersion('2.6.14', 9), '2.6.14.9');
  assert.equal(firefoxVersion('2.6.14.1', 9), '2.6.14.109');
  assert.equal(firefoxVersion('2.6.14.2', 1), '2.6.14.201');
  assert(Number(firefoxVersion('2.6.14.2', 1).split('.')[3]) >
    Number(firefoxVersion('2.6.14.1', 99).split('.')[3]));
  for (const revision of [0, 100, 1.5]) assert.throws(() => firefoxVersion('2.6.14', revision), /revision/);
  assert.throws(() => firefoxVersion('2.6.14.656', 9), /limits/);
});
test('function contracts tolerate formatting but detect changed behavior', () => {
  assert.equal(normalizedHash('function x(){ return 1; }'),normalizedHash('function x() {\n return 1;\n}'));
  assert.notEqual(normalizedHash('function x(){ return 1; }'),normalizedHash('function x(){ return 2; }'));
});

test('splitting the decoder preserves shared bindings, initialization order and review checks', () => {
  const prelude='var DracoDecoderModule = (() => { events.push("decoder"); return {ready:true}; })();\nif (false) module.exports = DracoDecoderModule;\n';
  const source=prelude+'(() => { events.push(DracoDecoderModule.ready ? "application" : "broken"); })();';
  const contracts={dracoDecoder:normalizedHash(prelude)};
  const split=splitContentBundle(source,contracts);
  const context=vm.createContext({events:[]});
  vm.runInContext(split.decoder,context);vm.runInContext(split.content,context);
  assert.deepEqual(Array.from(context.events),['decoder','application']);
  assert.throws(()=>splitContentBundle(source.replace('ready:true','ready:false'),contracts),/decoder changed/);
  assert.throws(()=>splitContentBundle(source+'extra();',contracts),/layout changed/);
});
test('changed upstream launcher is rejected before creating a new build', async () => {
  const input=await filesIn(path.join(ROOT,'upstream'));
  input['content.js']=Buffer.from(input['content.js'].toString().replace('function executeLaunchScript(codeToInject) {',
    'function executeLaunchScript(codeToInject) { throw new Error("upstream changed");'));
  await assert.rejects(adaptFiles(input,config),/Upstream changed executeLaunchScript/);
});

test('unreviewed permissions and promotion of notifications to required still stop updates', async () => {
  const input = await filesIn(path.join(ROOT,'upstream'));
  for (const field of ['permissions','optional_permissions']) {
    const manifest = structuredClone(original);
    manifest[field].push('history');
    await assert.rejects(adaptFiles({...input,'manifest.json':Buffer.from(JSON.stringify(manifest))},config),
      /New upstream permission history; review required/);
  }
  const manifest = structuredClone(original);
  manifest.permissions.push('notifications');
  manifest.optional_permissions = manifest.optional_permissions.filter(value => value !== 'notifications');
  await assert.rejects(adaptFiles({...input,'manifest.json':Buffer.from(JSON.stringify(manifest))},config),
    /permission notifications is no longer optional; review required/);
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
    callRobloxApiJson:async()=>[{universeId:456}],URL,encodeURIComponent,window:{},preLaunchHook:null,followUserHook:null});
  vm.runInContext(await fs.readFile(path.join(ROOT,'patches/launcher.js'),'utf8'),context);
  for(const expression of ["launchGame(123)","launchGame(123,'job')","launchPrivateGame(123,'access','link')",
    "launchMultiplayerGame(123,{test:'ok'})","followUser(789)","launchStudioForGame(123)","launchDeeplink('roblox://placeId=123')","openWebChat(789)"])
    await vm.runInContext(expression,context);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0].args)),[123]);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[2].args)),[123,'access','link']);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[3].args)),[123,false,false,null,null,{launchData:{test:'ok'}}]);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[5].args)),[123,456]);
  assert.equal(calls[7].method,'navigateToDeepLink');
  assert.deepEqual(JSON.parse(JSON.stringify(calls[7].args)),['roblox://navigation/chat?userId=789']);
  assert.equal(context.window.__rovalra_skipNextLaunch,true);
  assert(calls.every(call=>call.action==='rovalraFirefoxLaunch' && !('codeToInject' in call)));
  assert.throws(()=>vm.runInContext("launchDeeplink('javascript:alert(1)')",context),/Invalid/);
});

test('2.6.9 outfit hooks finish before joining and failed hooks still launch once', async () => {
  const events=[];
  const context=vm.createContext({window:{},console:{error:()=>{}},encodeURIComponent,
    browser:{runtime:{sendMessage:async message=>{events.push(message.method);return {success:true};}}},
    preLaunchHook:async id=>{await Promise.resolve();events.push(`outfit:${id}`);},
    followUserHook:async id=>{events.push(`follow-outfit:${id}`);},
    resolveGameLaunchPlaceId:async launch=>{assert.equal(launch.userId,'789');return 456;}});
  vm.runInContext(await fs.readFile(path.join(ROOT,'patches/launcher.js'),'utf8'),context);
  for (const expression of ["launchGame(123)","launchPrivateGame(123,'a','b')","launchMultiplayerGame(123)","followUser(789)"])
    await vm.runInContext(expression,context);
  assert.deepEqual(events,['outfit:123','joinGameInstance','outfit:123','joinPrivateGame',
    'outfit:123','joinMultiplayerGame','follow-outfit:456','followPlayerIntoGame']);
  events.length=0;
  context.preLaunchHook=()=>{throw new Error('outfit failed');};
  context.followUserHook=async()=>{throw new Error('outfit failed');};
  await vm.runInContext('launchGame(123)',context);
  await vm.runInContext('followUser(789)',context);
  await vm.runInContext("followUser('invalid'); openWebChat('invalid')",context);
  assert.deepEqual(events,['joinGameInstance','followPlayerIntoGame']);
});

test('launch adapters retain upstream positive safe-ID validation before hooks or requests', async () => {
  const calls=[];
  const context=vm.createContext({window:{},console,encodeURIComponent,
    browser:{runtime:{sendMessage:async message=>{calls.push(message);return {success:true};}}},
    preLaunchHook:()=>calls.push('hook'),followUserHook:()=>calls.push('follow-hook'),
    callRobloxApiJson:async()=>{calls.push('api');return [{universeId:'456'}];}});
  vm.runInContext(await fs.readFile(path.join(ROOT,'patches/launcher.js'),'utf8'),context);
  for (const value of [0,-1,Number.MAX_SAFE_INTEGER+1,NaN,null,'','invalid']) {
    for (const name of ['launchGame','launchPrivateGame','launchMultiplayerGame','followUser','openWebChat','launchStudioForGame']) {
      await context[name](value);
    }
  }
  assert.deepEqual(calls,[]);
  assert.equal(context.window.__rovalra_skipNextLaunch,undefined);
  await context.launchStudioForGame('123');
  assert.equal(calls[0],'api');
  assert.deepEqual(Array.from(calls[1].args),[123,456]);
});

test('storage listener removal stops both local and bridged session notifications', async () => {
  let storageListener, messageListener;
  const context=vm.createContext({console,window:{},CustomEvent:function(){},
    chrome:{storage:{onChanged:{addListener:fn=>{storageListener=fn;}}}},
    browser:{runtime:{onMessage:{addListener:fn=>{messageListener=fn;}}}}});
  vm.runInContext(await fs.readFile(path.join(ROOT,'runtime/content.js'),'utf8'),context);
  vm.runInContext('var seen=[]; var listener=(changes,area)=>seen.push(area); RoValraFirefoxStorage.onChanged.addListener(listener);',context);
  storageListener({},'local');messageListener({action:'rovalraFirefoxSessionChanged',changes:{}});
  vm.runInContext('RoValraFirefoxStorage.onChanged.removeListener(listener)',context);
  storageListener({},'local');messageListener({action:'rovalraFirefoxSessionChanged',changes:{}});
  assert.deepEqual(Array.from(context.seen),['local','session']);
});

test('globe initialization clones object payloads into the Firefox page world', async () => {
  const cloned=[],page={};
  const context=vm.createContext({console,window:page,
    CustomEvent:function(type,options){return {type,...options};},
    cloneInto:(value,target)=>{assert.equal(target,page);const copy={...value};cloned.push(copy);return copy;},
    chrome:{storage:{onChanged:{addListener:()=>{}}}},
    browser:{runtime:{onMessage:{addListener:()=>{}}}}});
  vm.runInContext(await fs.readFile(path.join(ROOT,'runtime/content.js'),'utf8'),context);
  const detail={REGIONS:{Europe:{DE:{coords:{lat:50,lon:10}}}},serverCounts:{DE:2}};
  const event=new context.RoValraFirefoxCustomEvent('initRovalraGlobe',{detail});
  assert.equal(cloned.length,1);
  assert.notEqual(event.detail,detail);
  assert.deepEqual(event.detail,detail);
  const unrelated=new context.RoValraFirefoxCustomEvent('unrelated',{detail});
  assert.equal(unrelated.detail,detail);
  assert.equal(cloned.length,1);
});

test('reviewed upstream baseline adapts successfully and unknown APIs still stop updates', async () => {
  const input=await filesIn(path.join(ROOT,'upstream'));
  const result=await adaptFiles(input,config,baseline.version);
  assert.equal(result.report.upstreamVersion,baseline.version);
  assert.equal(result.manifest.version,firefoxVersion(baseline.version,config.adapterRevision));
  input['content.js']=Buffer.concat([input['content.js'],Buffer.from('\nchrome.unknownNewAPI();')]);
  await assert.rejects(adaptFiles(input,config),/New upstream API chrome.unknownNewAPI/);
});
test('build contains required resources and the Firefox-compatible beta redirect', async () => {
  const files=await filesIn(path.join(ROOT,'build/extension'));
  validateFiles(files);
  for (const [name,bytes] of Object.entries(files)) {
    if (name.endsWith('.js')) assert(bytes.length < 5*1024*1024,`${name} exceeds Mozilla's parse limit`);
  }
  const rules=JSON.parse(files['public/Assets/Rules/beta-rules.json']);
  assert(rules.some(rule=>rule.action.redirect?.extensionPath==='/firefox/beta-programs.json'));
  assert(JSON.parse(files['firefox/beta-programs.json']).betaPrograms.length);
  assert(!Object.keys(files).some(name=>/node_modules|test\.key|smoke-/.test(name)));
});

test('settings compatibility replies are safe before initialization and do not claim unrelated messages', async () => {
  const source=await fs.readFile(path.join(ROOT,'build/extension/background.js'),'utf8');
  const listeners=[];
  walk.simple(parseJS(source),{ArrowFunctionExpression(node) {
    const text=source.slice(node.start,node.end);
    if(node.params[0]?.name==='message' && node.params[2]?.name==='sendResponse' &&
        text.includes('message.type !== "settingsCompatGetRes"'))listeners.push(text);
  }});
  assert.equal(listeners.length,1);
  const context=vm.createContext({compatResults:null,debugVerbose:()=>{}});
  const listener=vm.runInContext(`(${listeners[0]})`,context);
  const replies=[];
  assert.equal(listener({action:'unrelated'},{},value=>replies.push(value)),false);
  assert.deepEqual(replies,[]);
  listener({type:'settingsCompatGetRes'},{},value=>replies.push(value));
  assert.deepEqual(JSON.parse(JSON.stringify(replies)),[{replaced:[],deleted:[]}]);
  context.compatResults={replaced:['old-setting'],deleted:['removed-setting']};
  listener({type:'settingsCompatGetRes'},{},value=>replies.push(value));
  assert.deepEqual(replies[1],{replaced:['old-setting'],deleted:['removed-setting']});
  assert.deepEqual(JSON.parse(JSON.stringify(context.compatResults)),{replaced:[],deleted:[]});
});
