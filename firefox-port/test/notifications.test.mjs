import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';

// Exercise the exact reviewed upstream notification module, which is retained
// in the Firefox background bundle, without contacting Roblox or displaying OS UI.
const background=await fs.readFile(new URL('../upstream/background.js',import.meta.url),'utf8');
const start=background.indexOf('// src/background/notifications.js');
const end=background.indexOf('// src/background/background.js',start);
assert(start>=0 && end>start,'Upstream notification module layout changed');
const source=background.slice(start,end);

function fixture({permission=false,enabled=false}={}) {
  const state={permission,enabled,checks:0,adds:0,timers:[],cleared:[],removed:[],created:[],tabs:[]};
  const listeners=new Set();
  const notifications={
    create:(...args)=>state.created.push(args),clear:id=>state.cleared.push(id),
    onClicked:{hasListener:fn=>listeners.has(fn),addListener:fn=>{listeners.add(fn);state.adds++;}},
  };
  const chrome={
    permissions:{contains:async()=>state.permission},
    storage:{local:{get:async defaults=>({...defaults,browserNotificationsEnabled:state.enabled}),
      remove:key=>state.removed.push(key)}},
    runtime:{getURL:file=>`moz-extension://fixture/${file}`},
    tabs:{create:options=>state.tabs.push(options)},
  };
  Object.defineProperty(chrome,'notifications',{get:()=>{
    assert(state.permission,'Notification API accessed without optional permission');return notifications;
  }});
  const context=vm.createContext({chrome,__name:fn=>fn,
    setInterval:(fn,delay)=>{state.timers.push({fn,delay});return state.timers.length;},
    clearInterval:id=>state.cleared.push(id)});
  vm.runInContext(source,context);
  context.check=async()=>{state.checks++;};
  return {context,state};
}

test('notifications stay inactive by default and without optional permission',async()=>{
  for(const options of [{},{permission:true},{enabled:true}]) {
    const {context,state}=fixture(options);
    await context.syncNotifications();
    assert.equal(state.timers.length,0);
    assert.equal(state.checks,0);
    assert.equal(state.created.length,0);
  }
});

test('notification enable, disable and permission removal manage polling without duplicates',async()=>{
  for(const revoke of [false,true]) {
    const {context,state}=fixture({permission:true,enabled:true});
    await context.syncNotifications();await context.syncNotifications();
    assert.equal(state.adds,1);
    assert.equal(state.timers.length,1);
    assert.equal(state.timers[0].delay,60000);
    assert.equal(state.checks,1);
    if(revoke)state.permission=false;else state.enabled=false;
    await context.syncNotifications();
    assert.deepEqual(state.cleared,[1]);
    assert.deepEqual(state.removed,['rovalra_notifications_state']);
    assert.equal(context.interval,null);
  }
});

test('notifications use Firefox basic options, packaged icons and Roblox click destinations',()=>{
  const {context,state}=fixture({permission:true});
  context.notify('rovalra-trade-123','Trade','New trade');
  assert.deepEqual(JSON.parse(JSON.stringify(state.created)),[['rovalra-trade-123',{
    type:'basic',iconUrl:'moz-extension://fixture/public/Assets/icon-128.png',title:'Trade',message:'New trade',
  }]]);
  context.onClicked('rovalra-trade-123');context.onClicked('rovalra-game-456-789');
  assert.deepEqual(state.tabs.map(tab=>tab.url),['https://www.roblox.com/trades','https://www.roblox.com/games/456']);
  assert.deepEqual(state.cleared,['rovalra-trade-123','rovalra-game-456-789']);
});
