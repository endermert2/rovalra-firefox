import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import https from 'node:https';
import { execFileSync } from 'node:child_process';
import { Builder } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';
import { ROOT } from '../adapter.mjs';
import {zipSync} from 'fflate';
import {filesIn} from '../adapter.mjs';
import {subplaceFixtureSource} from './subplace-fixture.mjs';

// All browser state belongs to a new temporary WebDriver profile. The fixture
// resolves a Roblox hostname to loopback in that profile only.
const build = path.join(ROOT, 'build');
const fixture = await fs.mkdtemp(path.join(build, 'smoke-extension-'));
await fs.cp(path.join(build, 'extension'), fixture, { recursive: true });
const results = [];
const fontFixture=await fs.readFile(path.join(ROOT,'assets/fonts/MaterialIcons.woff2'));
const handler = async (req, res) => {
  if(req.url.startsWith('/fonts/')) {
    res.setHeader('Content-Type','font/woff2');res.end(fontFixture);return;
  }
  if(req.url==='/transport-fixture') {
    let body='';for await(const chunk of req)body+=chunk;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({status:'success',setting:{key:'pronouns',value:JSON.parse(body).value},
      bearerReceived:req.headers.authorization==='Bearer test-only-value',cookieReceived:Boolean(req.headers.cookie)}));
    return;
  }
  if (req.url === '/result' && req.method === 'POST') {
    let body = '';
    for await (const chunk of req) body += chunk;
    results.push(JSON.parse(body));
    res.end('ok');
    return;
  }
  if (req.url === '/fixture.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(`window.launches = []; window.Roblox = { GameLauncher: Object.fromEntries(
      ['joinGameInstance','joinPrivateGame','joinMultiplayerGame','followPlayerIntoGame','editGameInStudio','openProtocolUrl']
        .map(method => [method, (...args) => window.launches.push({method,args})])),
      DeepLinkService: {navigateToDeepLink:(...args)=>window.launches.push({method:'navigateToDeepLink',args})} };
      document.addEventListener('rovalra-firefox-test-event', event => {
        document.documentElement.dataset.eventValue = event.detail.nested.value;
      });`);
    return;
  }
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'");
  res.end('<!doctype html><html><head><title>RoValra Firefox fixture</title><script src="/fixture.js"></script></head><body><main id="content"><h1>Local compatibility fixture</h1></main></body></html>');
};
const openssl = process.platform === 'win32' ? 'C:/Program Files/Git/usr/bin/openssl.exe' : 'openssl';
execFileSync(openssl, ['req','-x509','-newkey','rsa:2048','-nodes','-keyout',path.join(fixture,'test.key'),
  '-out',path.join(fixture,'test.crt'),'-days','1','-subj','/CN=www.roblox.com'], {stdio:'ignore'});
const secureServer = https.createServer({key:await fs.readFile(path.join(fixture,'test.key')),
  cert:await fs.readFile(path.join(fixture,'test.crt'))},handler);
const server = http.createServer(handler);
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
await new Promise(resolve => secureServer.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
const base = `https://www.roblox.com:${secureServer.address().port}`;
const apiBase = `https://apis.rovalra.com:${secureServer.address().port}`;
await fs.writeFile(path.join(fixture,'firefox/fonts.js'),
  (await fs.readFile(path.join(fixture,'firefox/fonts.js'),'utf8'))
    .replace('https://www.rovalra.com/static/fonts/',apiBase+'/fonts/'));
const manifest = JSON.parse(await fs.readFile(path.join(fixture, 'manifest.json'), 'utf8'));
manifest.host_permissions.push('http://127.0.0.1/*');
manifest.background.scripts.push('smoke-background.js');
manifest.content_scripts.find(entry => entry.js.includes('content.js')).js.push('smoke-content.js');
await fs.writeFile(path.join(fixture, 'manifest.json'), JSON.stringify(manifest));
await fs.writeFile(path.join(fixture, 'smoke-background.js'), `
const endpoint = 'http://127.0.0.1:${port}/result';
const report = result => fetch(endpoint, {method:'POST',body:JSON.stringify(result)});
addEventListener('error', event => report({error:event.message, file:event.filename, line:event.lineno}));
addEventListener('unhandledrejection', event => report({error:String(event.reason)}));
browser.runtime.onMessage.addListener((message) => {
  if (message.action === 'smokeReport') return report(message.result).then(()=>true);
  return false;
});
(async () => {
  const promises = await chrome.storage.local.get({testDefault:42});
  const callbacks = await new Promise(resolve => chrome.storage.local.get({testDefault:43},resolve));
  await browser.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds:['ruleset_status','ruleset_3']});
  const enabled = await browser.declarativeNetRequest.getEnabledRulesets();
  await browser.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds:['ruleset_status','ruleset_3']});
  const rules = await browser.declarativeNetRequest.getDynamicRules();
  await report({test:'background',promises:promises.testDefault,callbacks:callbacks.testDefault,enabled,rules:rules.map(r=>r.id)});
})().catch(error=>report({error:String(error)}));
`);
await fs.writeFile(path.join(fixture, 'smoke-content.js'), `
(async () => {
  const report = result => browser.runtime.sendMessage({action:'smokeReport',result});
  await new Promise(resolve => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded',resolve,{once:true}) : resolve());
  const fonts=await RoValraFirefoxFontsReady;
  await document.fonts.load('24px "Material Icons Outlined"','bookmark_border');
  await document.fonts.load('24px "Material Icons"','bookmark');
  const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
  ctx.font='24px "Material Icons Outlined"';
  const bookmarkWidth=ctx.measureText('bookmark_border').width;
  const bookmark=document.createElement('icon');
  bookmark.setAttribute('material','');bookmark.setAttribute('size','large');bookmark.textContent='bookmark_border';
  document.querySelector('main').append(bookmark);
  const probe=document.createElement('div');
  probe.innerHTML=DOMPurify.sanitize('<img src=x onerror="window.pwned=true"><a href="javascript:alert(1)">link</a><svg onload="alert(1)"><path d="M0 0h10v10z"/></svg><icon material filled size="large">bookmark</icon><input type="checkbox" checked>',
    {ADD_TAGS:['icon'],ADD_ATTR:['material','filled','fill','rovalra','size']});
  const htmlSafe=!probe.querySelector('[onerror],[onload],[href^="javascript:"]') &&
    Boolean(probe.querySelector('svg path')) && Boolean(probe.querySelector('icon[material][filled]')) &&
    probe.querySelector('input').checked;
  document.dispatchEvent(new RoValraFirefoxCustomEvent('rovalra-firefox-test-event',{detail:{nested:{value:'readable'}}}));
  const change = new Promise(resolve => {
    RoValraFirefoxStorage.onChanged.addListener((changes,area)=>{
      if(area==='session' && changes.firefoxSmokeKey) resolve(changes.firefoxSmokeKey.newValue);
    });
  });
  await RoValraFirefoxStorage.session.set({firefoxSmokeKey:123});
  const session = await RoValraFirefoxStorage.session.get('firefoxSmokeKey');
  const changed = await Promise.race([change,new Promise(resolve=>setTimeout(()=>resolve('timeout'),5000))]);
  const response = await browser.runtime.sendMessage({action:'getLatestPresence'});
  let pageFetchBlocked=false;
  try { await fetch('${apiBase}/transport-fixture'); } catch { pageFetchBlocked=true; }
  const synced=await RoValraFirefoxFetch('${apiBase}/transport-fixture',{
    method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer test-only-value'},
    body:JSON.stringify({value:'they/them'})});
  const publicSync=await synced.clone().json();
  const blockedHost=await browser.runtime.sendMessage({action:'rovalraFirefoxFetch',url:'https://example.com/',method:'GET',body:null});
  const launches = [];
  for (const method of ['joinGameInstance','joinPrivateGame','joinMultiplayerGame','followPlayerIntoGame','editGameInStudio','openProtocolUrl']) {
    launches.push(await browser.runtime.sendMessage({action:'rovalraFirefoxLaunch',method,args:[123,'test']}));
  }
  const invalid = await browser.runtime.sendMessage({action:'rovalraFirefoxLaunch',method:'eval',args:[]});
  launches.push(await browser.runtime.sendMessage({action:'rovalraFirefoxLaunch',method:'navigateToDeepLink',args:['roblox://navigation/chat?userId=123']}));
  const worker = new RoValraFirefoxWorker();
  const workerReady = await new Promise(resolve => {
    worker.onmessage = event => resolve({data:event.data[0],values:Array.from(new Float32Array(event.data[1]))});
    worker.onerror = event => resolve({error:event.message || 'Worker error'});
    worker.postMessage([1,'patchRBF',[[new Float32Array([2]).buffer],new Float32Array([4]).buffer,new Float32Array([6]).buffer,new Float32Array([8]).buffer]]);
    setTimeout(()=>resolve('timeout'),5000);
  });
  worker.terminate();
  const subplacesBefore=await ${subplaceFixtureSource(false)};
  const subplaces=await ${subplaceFixtureSource(true)};
  await report({test:'content',event:document.documentElement.dataset.eventValue,session:session.firefoxSmokeKey,changed,
    response,launches,invalid,workerReady,pageFetchBlocked,publicSync,blockedHost,
    fonts,bookmarkWidth,htmlSafe,subplacesBefore,subplaces,contentLoaded:typeof RoValraFirefoxStorage !== 'undefined'});
})().catch(error=>browser.runtime.sendMessage({action:'smokeReport',result:{error:String(error),stack:error.stack}}));
`);

let driver;
try {
  const tools = await fs.readdir(path.join(build, 'tools')).catch(() => []);
  const localDriver = tools.find(name => /^geckodriver-[\d.]+(?:\.exe)?$/.test(name));
  const service = localDriver ? new firefox.ServiceBuilder(path.join(build, 'tools', localDriver)) : new firefox.ServiceBuilder();
  service.addArguments('--allow-system-access');
  const options = new firefox.Options().addArguments('-headless')
    .setAcceptInsecureCerts(true)
    .setPreference('network.dns.localDomains', 'www.roblox.com,apis.rovalra.com')
    .setPreference('network.stricttransportsecurity.preloadlist', false)
    .setPreference('dom.security.https_only_mode', false)
    .setPreference('dom.security.https_first', false)
    .setPreference('network.proxy.type', 0)
    .setPreference('xpinstall.signatures.required', false)
    .setPreference('extensions.update.enabled', false);
  if (process.env.FIREFOX_BINARY) options.setBinary(process.env.FIREFOX_BINARY);
  else if (process.platform === 'win32') options.setBinary('C:/Program Files/Firefox Developer Edition/firefox.exe');
  driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).setFirefoxService(service).build();
  const fixtureXpi=path.join(fixture,'fixture.xpi');
  await fs.writeFile(fixtureXpi,zipSync(await filesIn(fixture)));
  const id = await driver.installAddon(fixtureXpi, false);
  // Establish WebDriver's test-certificate exception for the second fixture host.
  await driver.get(apiBase+'/certificate-fixture');
  await driver.get(base + '/compatibility-fixture');
  await driver.wait(() => results.some(result => result.test === 'content') || results.some(result => result.error), 30000).catch(() => {});
  const page = await driver.executeScript('return {url:location.href,title:document.title,launches:window.launches,interceptor:window.__ROVALRA_INTERCEPTOR_SETUP__}');
  await fs.writeFile(path.join(build,'bookmark-font-test.png'),Buffer.from(await driver.takeScreenshot(),'base64'));
  await driver.setContext('chrome');
  const consoleErrors = await driver.executeScript('return Services.console.getMessageArray().map(e=>e.message).filter(m=>/moz-extension|Worker|worker|RoValra/.test(m)).slice(-20)');
  await driver.setContext('content');
  const report = { firefox: (await driver.getCapabilities()).get('browserVersion'), addonId: id, page, results, consoleErrors };
  await fs.writeFile(path.join(build, 'firefox-smoke.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  const bg = results.find(r => r.test === 'background');
  const content = results.find(r => r.test === 'content');
  const before=content?.subplacesBefore,after=content?.subplaces;
  if(!before?.errors.some(error=>/is not a function/.test(error)) ||
      before.cards.filter(card=>card.id.startsWith('sub')).some(card=>card.attached) ||
      !after || after.errors.length || after.cards.length!==6 ||
      after.cards.some(card=>!card.attached || card.full || card.avatars<1) ||
      after.cards.filter(card=>card.id.startsWith('sub')).some(card=>card.place!=='85547073091480' || !card.unconfirmed || card.uptime!=='null') ||
      after.cards.filter(card=>card.id.startsWith('root')).some(card=>card.uptime!=='3600' || card.version!=='42' || card.region!=='Test Region' || card.unconfirmed) ||
      after.joins.length!==6 || after.joins.some(([place,id])=>place!==(id.startsWith('sub')?'85547073091480':'111')) ||
      after.requests.filter(r=>r.kind==='details').length!==2 ||
      after.requests.some(r=>r.place!==((r.id||r.ids[0]).startsWith('sub')?'85547073091480':'111'))) {
    throw new Error('Subplace regression checks failed');
  }
  if (consoleErrors.some(message => /Invalid rule|TypeError:|ReferenceError:|SyntaxError:|DataCloneError:/.test(message))) {
    throw new Error('Firefox reported a script or declarative rule failure');
  }
  if (!bg || !content || results.some(r => r.error) || bg.promises !== 42 || bg.callbacks !== 43 ||
      content.event !== 'readable' || content.session !== 123 || content.changed !== 123 ||
      !content.launches.every(r => r.success) || content.invalid.success || page.launches?.length !== 7 ||
      page.launches[6].method !== 'navigateToDeepLink' ||
      !page.interceptor || JSON.stringify(content.workerReady?.values) !== '[2,3,4]' ||
      !content.pageFetchBlocked || content.publicSync?.setting?.value!=='they/them' ||
      !content.publicSync.bearerReceived || content.publicSync.cookieReceived || content.blockedHost.ok ||
      !content.fonts?.every(f=>f.loaded) || content.bookmarkWidth<20 || content.bookmarkWidth>28 || !content.htmlSafe ||
      consoleErrors.some(message=>/Receiving end does not exist|font-src/.test(message))) throw new Error('Firefox smoke checks failed');
  console.log('Firefox smoke checks passed. Authenticated Roblox features still require manual testing.');
} finally {
  if (driver) await driver.quit();
  await new Promise(resolve => server.close(resolve));
  await new Promise(resolve => secureServer.close(resolve));
  if (path.dirname(fixture) !== build) throw new Error('Unsafe smoke cleanup');
  await fs.rm(fixture, {recursive:true,force:true});
}
