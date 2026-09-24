import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {extract,original,contracts} from './server-source.mjs';
import {repairServers} from '../server-fixes.mjs';

test('uptime batches use each card place, including mixed root and subplace lists',async()=>{
  const calls=[],state={uptimeBatch:new Map([['root-a','111'],['sub-a','85547073091480'],['sub-b','85547073091480']]),
    serverLocations:{},serverUptimes:{},serverStatuses:{}};
  const context=vm.createContext({_state:state,fetchServerUptime:async(place,ids)=>calls.push([place,Array.from(ids)])});
  vm.runInContext(extract(['processUptimeBatch']),context);
  await context.processUptimeBatch();
  assert.deepEqual(calls,[['111',['root-a']],['85547073091480',['sub-a','sub-b']]]);
  assert.equal(state.uptimeBatch.size,0);
  await context.processUptimeBatch();
  assert.equal(calls.length,2);
});

test('observer-supplied context is used instead of unrelated global state',async()=>{
  const calls=[],local={uptimeBatch:new Map([['local','222']]),serverLocations:{},serverUptimes:{},serverStatuses:{}};
  const context=vm.createContext({_state:{uptimeBatch:new Map([['global','111']])},fetchServerUptime:async(place,ids,locations)=>calls.push([place,Array.from(ids),locations])});
  vm.runInContext(extract(['processUptimeBatch']),context);
  await context.processUptimeBatch(local);
  assert.deepEqual(calls,[['222',['local'],local.serverLocations]]);
  assert.equal(context._state.uptimeBatch.size,1);
});

test('server filtering respects subplace query overrides and localized URLs',()=>{
  const context=vm.createContext({URL,window:{location:{href:''}}});
  vm.runInContext(extract(['getPlaceIdFromUrl']),context);
  for(const [url,expected] of [
    ['https://www.roblox.com/games/111/Root?PlaceId=85547073091480','85547073091480'],
    ['https://www.roblox.com/tr/games/85547073091480/Asylum#!/game-instances','85547073091480'],
    ['https://www.roblox.com/games/111/Root','111']
  ]) {context.window.location.href=url;assert.equal(context.getPlaceIdFromUrl(),expected);}
});

function metadataContext(response) {
  const errors=[],uptimes=[],full=[],card={};
  const context=vm.createContext({
    fetchServerDetails:async()=>response,console:{error:(...args)=>errors.push(args)},
    document:{querySelectorAll:()=>[card]},getServerUptime:()=>null,getServerUptimeIsEstimate:()=>false,
    getServerRegion:()=>null,displayUptime:(...args)=>uptimes.push(args),displayServerFullStatus:el=>full.push(el)
  });
  return {context,errors,uptimes,full};
}

test('empty metadata is valid and does not falsely mark a server full',async()=>{
  const before=metadataContext({servers:[]});
  vm.runInContext(extract(['fetchServerUptime'],original),before.context);
  await before.context.fetchServerUptime('85547073091480',['sub-a'],{},{});
  assert.match(String(before.errors[0][1]),/Invalid API Data/);
  const after=metadataContext({servers:[]});
  vm.runInContext(extract(['fetchServerUptime']),after.context);
  await after.context.fetchServerUptime('85547073091480',['sub-a'],{},{});
  assert.equal(after.errors.length,0);
  assert.equal(after.full.length,0);
  assert.equal(after.uptimes.length,1);
  assert.equal(after.uptimes[0][1],null);
});

test('malformed metadata is still reported with a graceful display fallback',async()=>{
  const {context,errors,uptimes}=metadataContext({servers:'bad'});
  vm.runInContext(extract(['fetchServerUptime']),context);
  await context.fetchServerUptime('111',['root-a'],{},{});
  assert.match(String(errors[0][1]),/Invalid API Data/);
  assert.equal(uptimes.length,1);
});

test('join checks preserve cards on unknown status or errors, while explicit full status still works',async()=>{
  for(const outcome of [5,22,2,'network-error']) {
    const marks=[],statuses={},server={dataset:{rovalraServerid:'sub-a',placeid:'85547073091480'},querySelector:()=>null};
    const context=vm.createContext({
      fetchServerRegion2:async(place,id)=>{
        assert.equal(place,'85547073091480');assert.equal(id,'sub-a');
        if(outcome==='network-error')throw Error('offline');
        return {status:outcome};
      },getPlaceIdFromUrl:()=> '111',isFullServerIndicatorsEnabled:true,
      displayServerFullStatus:()=>marks.push('full'),displayInactivePlaceStatus:()=>marks.push('unconfirmed')
    });
    vm.runInContext(extract(['fetchAndDisplayRegion']),context);
    await context.fetchAndDisplayRegion(server,'sub-a',{}, {},{serverStatuses:statuses});
    assert.deepEqual(marks,outcome===22?['full']:outcome===2?[]:['unconfirmed']);
    if(outcome===5)assert.equal(statuses['sub-a'],'unconfirmed');
  }
});

test('changed upstream server functions stop publication pending review',()=>{
  assert.throws(()=>repairServers(original.replace('function displayInactivePlaceStatus(server) {','function displayInactivePlaceStatus(server) { console.log("changed");'),contracts),/Server function displayInactivePlaceStatus changed/);
});

test('enhancement preserves upstream language data and recycled-card uptime listeners',async()=>{
  const language=[],uptimes=[],scheduled=[],listeners={};
  const noop=()=>{},server={dataset:{rovalraServerid:'old',placeid:'222'},
    getAttribute:()=>server.dataset.rovalraServerid,
    classList:{contains:()=>false,add:noop},addEventListener:(name,fn)=>{listeners[name]=fn;}};
  const state={serverLocations:{},serverUptimes:{},serverPerformanceCache:{},uptimeBatch:new Map(),
    serverDataCache:new Map([['old',{id:'old',languageMatchCount:3}],['new',{id:'new',languageMatchCount:5}]])};
  const calls=[],context=vm.createContext({
    cacheReadyPromise:Promise.resolve(),isServerListModificationsEnabled:true,
    isServerUptimeEnabled:true,isServerRegionEnabled:true,isPlaceVersionEnabled:true,isFullServerIDEnabled:false,
    injectStyles3:noop,cleanupServerUI:noop,attachCleanupObserver:noop,getOrCreateDetailsContainer:noop,
    displayPerformance:noop,displayPlaceVersion:noop,displayRegion:noop,displayIpAndDcId:noop,
    addCopyJoinLinkButton:noop,enableAvatarLinks:noop,fetchAndDisplayRegion:noop,
    displayLanguageMatch:async(el,value)=>language.push(value),displayUptime:(el,value)=>uptimes.push(value),
    getServerUptime:()=>null,getServerUptimeIsEstimate:()=>false,getServerVersion:()=>null,
    normalizeRegionName:()=>'',getPlaceIdFromUrl:()=> '111',
    setTimeout:fn=>scheduled.push(fn),clearTimeout:noop,_state:{},
    fetchServerUptime:async(place,ids)=>calls.push([place,Array.from(ids)])
  });
  vm.runInContext(extract(['enhanceServer','processUptimeBatch']),context);
  await context.enhanceServer(server,state);
  server.dataset.rovalraServerid='new';
  await context.enhanceServer(server,state);
  assert.deepEqual(language,[3,5]);
  assert.equal(state.uptimeBatch.get('new'),'222');
  uptimes.length=0;
  listeners['rovalra-uptime-update']({detail:{serverId:'old',uptime:1}});
  listeners['rovalra-uptime-update']({detail:{serverId:'new',uptime:42}});
  assert.deepEqual(uptimes,[42]);
  await scheduled.at(-1)();
  assert.deepEqual(calls,[['222',['old','new']]]);
});

function probeContext(responses=[]) {
  let now=10000;
  const calls=[],errors=[];
  class Clock extends Date { static now(){return now;} }
  const context=vm.createContext({Date:Clock,Map,JSON,Promise,Number,Math,
    setTimeout:fn=>{now+=250;queueMicrotask(fn);},serverDataCache:new Map(),serverUptimeIsEstimate:{},
    createUUID:()=> 'fixture',console:{error:(...args)=>errors.push(args)},
    callRobloxApi:async options=>{
      calls.push({at:now,body:options.body});
      return responses.shift() || new Response(JSON.stringify({status:5}));
    }
  });
  vm.runInContext(extract(['fetchServerRegion2']),context);
  return {probe:context.fetchServerRegion2,calls,errors,advance:ms=>{now+=ms;}};
}

test('region requests coalesce repeated enhancements and pace distinct servers',async()=>{
  const {probe,calls,errors}=probeContext();
  await Promise.all(Array.from({length:10},()=>probe('85547073091480','same')));
  assert.equal(calls.length,1);
  await probe('85547073091480','same');
  assert.equal(calls.length,1);
  await Promise.all(['a','b','c'].map(id=>probe('85547073091480',id)));
  assert.equal(calls.length,4);
  for(let i=1;i<calls.length;i++)assert(calls[i].at-calls[i-1].at>=250);
  assert.equal(errors.length,0);
});

test('429 Retry-After pauses queued and new probes without retrying each card',async()=>{
  const {probe,calls,errors,advance}=probeContext([new Response('{}',{status:429,headers:{'Retry-After':'5'}})]);
  const results=await Promise.all(['a','b','c'].map(id=>probe('85547073091480',id)));
  assert.equal(calls.length,1);
  assert(results.every(result=>result.status===0));
  await probe('85547073091480','d');
  assert.equal(calls.length,1);
  advance(5000);
  await probe('85547073091480','e');
  assert.equal(calls.length,2);
  assert.equal(errors.length,0);
});

test('failed eligibility preflights cannot empty a received server page',async()=>{
  const appended=[],context=vm.createContext({
    isServerActive2:async()=>{throw Error('Unnecessary preflight');},
    createServerCardFromRobloxApi:async(server,place,options)=>({id:server.id,place,...options}),
    createServerCardFromApi:async(server,place,options)=>({id:server.server_id,place,...options}),equalizeCardHeights:()=>{}
  });
  vm.runInContext(extract(['renderAndAppendServers']),context);
  await context.renderAndAppendServers([{id:'a',playerTokens:[]},{server_id:'b'},null,{}],{appendChild:card=>appended.push(card)},'85547073091480');
  assert.deepEqual(appended,[{id:'a',place:'85547073091480',addedByRovalraFilter:true},{id:'b',place:'85547073091480',addedByRovalraFilter:true}]);
});
