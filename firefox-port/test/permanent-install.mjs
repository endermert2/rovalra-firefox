import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import {Builder} from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';
import {zipSync} from 'fflate';
import {ROOT,filesIn,readConfig,sha256} from '../adapter.mjs';
import {updateManifest} from '../publish-manifest.mjs';

// Explicitly isolated profile: never read or change the user's browser profile.
const build=path.join(ROOT,'build');
const base=await fs.mkdtemp(path.join(build,'permanent-test-'));
const profile=path.join(base,'profile');
await fs.mkdir(profile);
const reports=[];
const requests=[];
let updateIndex, updateBytes;
const server=http.createServer(async(req,res)=>{
  requests.push(req.url);
  if(req.url==='/updates.json') {
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(updateIndex));return;
  }
  if(req.url==='/update.xpi') {
    res.setHeader('Content-Type','application/x-xpinstall');
    res.end(updateBytes);return;
  }
  let body='';for await(const chunk of req)body+=chunk;
  if(req.url==='/report')reports.push(JSON.parse(body));
  res.end('ok');
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const origin=`http://127.0.0.1:${server.address().port}`;
const files=await filesIn(path.join(build,'extension'));
const manifest=JSON.parse(files['manifest.json']);
const id=manifest.browser_specific_settings.gecko.id;
manifest.host_permissions.push('http://127.0.0.1/*');
manifest.background.scripts.push('installation-probe.js');
files['installation-probe.js']=Buffer.from(`(async()=>{
  const old=await browser.storage.local.get({permanentTestCount:0,permanentTestSetting:null});
  await browser.storage.local.set({permanentTestCount:old.permanentTestCount+1,permanentTestSetting:'retained'});
  await fetch('${origin}/report',{method:'POST',body:JSON.stringify({version:browser.runtime.getManifest().version,
    count:old.permanentTestCount+1,previousSetting:old.permanentTestSetting})});
})();`);
const version1=manifest.version;
const parts=version1.split('.').map(Number);parts[3]++;
const version2=parts.join('.');
for(const version of [version1,version2]) {
  const fixtureManifest=structuredClone({...manifest,version});
  fixtureManifest.browser_specific_settings.gecko.update_url=`${origin}/updates.json`;
  files['manifest.json']=Buffer.from(JSON.stringify(fixtureManifest));
  const bytes=zipSync(files);
  await fs.writeFile(path.join(base,`${version}.xpi`),bytes);
  if(version===version2) {
    updateBytes=bytes;
    updateIndex=updateManifest(await readConfig(),{...manifest,version},'update.xpi',sha256(bytes));
    updateIndex.addons[id].updates[0].update_link=`${origin}/update.xpi`;
  }
}
const names=await fs.readdir(path.join(build,'tools')).catch(()=>[]);
const localDriver=names.find(n=>/^geckodriver-[\d.]+(?:\.exe)?$/.test(n));
let driver;
async function start() {
  const service=localDriver?new firefox.ServiceBuilder(path.join(build,'tools',localDriver)):new firefox.ServiceBuilder();
  service.addArguments('--allow-system-access');
  const options=new firefox.Options().addArguments('-headless','-profile',profile)
    .setPreference('xpinstall.signatures.required',false)
    // Loopback-only fixture. Production manifests and downloads remain HTTPS.
    .setPreference('extensions.checkUpdateSecurity',false)
    .setPreference('extensions.update.enabled',false);
  if(process.env.FIREFOX_BINARY)options.setBinary(process.env.FIREFOX_BINARY);
  else if(process.platform==='win32')options.setBinary('C:/Program Files/Firefox Developer Edition/firefox.exe');
  driver=await new Builder().forBrowser('firefox').setFirefoxOptions(options).setFirefoxService(service).build();
  await driver.manage().setTimeouts({script:30000});
}
async function inspect() {
  await driver.setContext('chrome');
  const result=await driver.executeAsyncScript(`const id=arguments[0],done=arguments[arguments.length-1];
    const {AddonManager}=ChromeUtils.importESModule('resource://gre/modules/AddonManager.sys.mjs');
    AddonManager.getAddonByID(id).then(a=>done(a?{id:a.id,version:a.version,active:a.isActive,
      temporary:a.temporarilyInstalled,signatureEnforced:Services.prefs.getBoolPref('xpinstall.signatures.required')}:null));`,id);
  await driver.setContext('content');return result;
}
try {
  await start();
  await driver.installAddon(path.join(base,`${version1}.xpi`),false);
  await driver.wait(()=>reports.length>=1,30000);
  const installed=await inspect();
  assert.equal(installed.temporary,false);assert.equal(installed.active,true);
  await driver.quit();driver=null;
  await start();
  await driver.wait(()=>reports.length>=2,30000);
  assert.equal((await inspect()).version,version1);
  assert.equal(reports[1].previousSetting,'retained');
  await driver.setContext('chrome');
  const delivery=await driver.executeAsyncScript(`const id=arguments[0],done=arguments[arguments.length-1];
    const {AddonManager}=ChromeUtils.importESModule('resource://gre/modules/AddonManager.sys.mjs');
    AddonManager.getAddonByID(id).then(addon=>addon.findUpdates({
      onUpdateAvailable(_addon,install) {
        install.addListener({
          onInstallEnded:(_install,updated)=>done({version:updated.version}),
          onDownloadFailed:i=>done({error:'Download failed: '+i.error}),
          onInstallFailed:i=>done({error:'Install failed: '+i.error})
        });
        install.install();
      },
      onNoUpdateAvailable:()=>done({error:'No update offered'}),
      onUpdateFinished:(_addon,error)=>{if(error)done({error:'Update check failed: '+error});}
    },AddonManager.UPDATE_WHEN_USER_REQUESTED)).catch(error=>done({error:String(error)}));`,id);
  await driver.setContext('content');
  assert.equal(delivery.error,undefined,delivery.error);
  assert.equal(delivery.version,version2);
  assert(requests.includes('/updates.json'));
  assert(requests.includes('/update.xpi'));
  await driver.wait(()=>reports.some(r=>r.version===version2),30000);
  assert.equal(reports.find(r=>r.version===version2).previousSetting,'retained');
  await driver.quit();driver=null;
  await start();
  await driver.wait(()=>reports.filter(r=>r.version===version2).length>=2,30000);
  const upgraded=await inspect();
  assert.equal(upgraded.version,version2);assert.equal(upgraded.active,true);
  assert.equal(upgraded.temporary,false);assert.equal(upgraded.signatureEnforced,false);
  assert(reports.slice(1).every(r=>r.previousSetting==='retained'));
  const result={firefox:(await driver.getCapabilities()).get('browserVersion'),installed,upgraded,reports,
    survivedRestartWithoutReinstall:true,settingsSurvivedUpgrade:true,updateManifestDownloaded:true,xpiDownloaded:true,
    note:'Real port with a storage probe. Firefox fetched the generated update manifest and XPI from a loopback fixture. Public GitHub delivery is checked separately.'};
  await fs.writeFile(path.join(build,'permanent-install.json'),JSON.stringify(result,null,2));
  console.log(JSON.stringify(result,null,2));
} finally {
  if(driver)await driver.quit();
  await new Promise(resolve=>server.close(resolve));
  if(path.dirname(base)!==build)throw new Error('Unsafe cleanup path');
  await fs.rm(base,{recursive:true,force:true,maxRetries:20,retryDelay:250});
}
