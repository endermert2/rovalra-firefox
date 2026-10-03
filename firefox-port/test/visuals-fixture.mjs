import fs from 'node:fs';
import * as walk from 'acorn-walk';
import {parseJS} from '../adapter.mjs';
import {hardenHTML} from '../hardening.mjs';
import {extract, original} from './server-source.mjs';

let icons;
walk.simple(parseJS(original), {VariableDeclarator(node) {
  if (node.id.name === 'Icons') icons = original.slice(node.init.start, node.init.end);
}});
if (!icons) throw new Error('Quick Play icon definitions changed');
const patchedIcon = fs.readFileSync(new URL('../patches/icons.js', import.meta.url), 'utf8');

export function iconsFixtureSource(fixed) {
  return `(()=>{
    const __name=fn=>fn;
    ${fixed ? patchedIcon : hardenHTML(extract(['createSvgPath'], original)).source}
    const Icons=${icons}, host=document.createElement('section');
    host.style.cssText='display:flex;gap:16px;padding:16px;background:#232527;';
    document.querySelector('main').append(host);
    const result={};
    for(const name of ['privateServer','configure','globe','copy','generate']) {
      const button=document.createElement('button');
      button.style.cssText='display:flex;align-items:center;padding:6px;background:#343840;border:0;border-radius:4px;';
      button.title=name;button.append(Icons[name]());host.append(button);
      const path=button.querySelector('svg path');
      result[name]=Boolean(path && path.namespaceURI==='http://www.w3.org/2000/svg' && path.getAttribute('d'));
    }
    if(!${fixed})host.remove();
    return result;
  })()`;
}

export function globeFixtureSource() {
  const functions = hardenHTML(extract(['createGlobePanel','preloadGlobeResources','ensureGlobeInitialized'], original))
    .source.replaceAll('new CustomEvent(', 'new RoValraFirefoxCustomEvent(');
  return `(async()=>{
    const GLOBE_PANEL_ID='rovalra-globe-panel',GLOBE_CONTAINER_ID='rovalra-globe-container',
      GLOBE_TOOLTIP_ID='rovalra-globe-tooltip',EASTER_EGG_TRIGGER_ID='rovalra-easter-egg-trigger',
      HEADER_TITLE_ID='rovalra-header-title',EVT_INIT_GLOBE='initRovalraGlobe';
    const State2={globe:{},regions:{Europe:{DE:{coords:{lat:50,lon:10},city:'Frankfurt',country:'Germany'}}},
      apiCounts:{},dataCenterCounts:{DE:1},activeServerCounts:{DE:2}};
    const getAssets=()=>({rovalraIcon:browser.runtime.getURL('public/Assets/RoValraLogo.png'),
      globeInitializer:browser.runtime.getURL('public/Assets/data/globe_initializer.js'),
      mapDark:browser.runtime.getURL('public/Assets/data/map_dark.png')});
    const detectTheme2=()=> 'dark',ts2=()=> 'RoValra Region Selector',setupGlobePointerEvents=()=>{},
      buildServerCountsMap=()=>({DE:2});
    async function injectScript(src) {
      const response=await browser.runtime.sendMessage({action:'rovalraFirefoxMainScript',
        path:src.slice(browser.runtime.getURL('').length)});
      if(!response?.success)throw Error(response?.error || 'Globe injection failed');
    }
    ${functions}
    const host=document.createElement('section');document.querySelector('main').append(host);
    createGlobePanel(host);
    const panel=document.getElementById(GLOBE_PANEL_ID);
    panel.classList.add('show');panel.style.cssText='display:block;position:relative;width:400px;height:440px;background:#232527;color:white;';
    document.getElementById(GLOBE_CONTAINER_ID).style.cssText='width:400px;height:400px;';
    const logo=panel.querySelector('img');
    const imageLoaded=await new Promise(resolve=>{
      if(logo.complete && logo.naturalWidth)return resolve(true);
      logo.addEventListener('load',()=>resolve(true),{once:true});
      logo.addEventListener('error',()=>resolve(false),{once:true});
      setTimeout(()=>resolve(false),3000);
    });
    await ensureGlobeInitialized('dark');
    const deadline=Date.now()+4000;
    while(!document.documentElement.dataset.globeTextureLoaded && Date.now()<deadline)
      await new Promise(resolve=>setTimeout(resolve,50));
    const canvases=[...panel.querySelectorAll('canvas')];
    const canvas=canvases[0],gl=canvas?.getContext('webgl');
    const unsafe=document.createElement('div');
    unsafe.innerHTML=DOMPurify.sanitize('<img src="'+getAssets().rovalraIcon+'" onerror="alert(1)"><img src="moz-extension://other-extension/icon.png"><img src="javascript:alert(1)"><script src="'+getAssets().globeInitializer+'"></script>');
    return {logoSource:logo.getAttribute('src'),logoLoaded:imageLoaded,canvasCount:canvases.length,
      canvasWidth:canvas?.width,webglSupported:Boolean(gl),textureLoaded:document.documentElement.dataset.globeTextureLoaded==='true',
      unsafeHandlers:unsafe.querySelectorAll('[onerror],script').length,
      foreignExtensionSource:unsafe.querySelectorAll('img')[1].getAttribute('src'),
      javascriptSource:unsafe.querySelectorAll('img')[2].getAttribute('src')};
  })()`;
}
