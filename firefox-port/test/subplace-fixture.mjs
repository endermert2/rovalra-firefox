import {extract,original,repaired} from './server-source.mjs';
import {hardenHTML} from '../hardening.mjs';

// Real upstream card/render functions with deterministic service/cache boundaries.
// Run both original and repaired functions in Firefox to reproduce the failure.
export function subplaceFixtureSource(fixed) {
  const source=extract(['createServerCardFromRobloxApi','createServerCardFromApi','createModernServerCard',
    'enhanceServer','processUptimeBatch','fetchServerUptime','fetchAndDisplayRegion',
    'displayInactivePlaceStatus','getOrCreateDetailsContainer','updateInfoElement','createInfoElement'],fixed?repaired:original);
  return `(async()=>{
    const errors=[],requests=[],joins=[],cards=[];
    const host=document.createElement('section');document.body.append(host);
    const _state={uptimeBatch:new ${fixed?'Map':'Set'}(),serverLocations:{},serverUptimes:{},serverStatuses:{},
      serverPerformanceCache:{},serverIpMap:{},serverDataCache:new Map(),collectedPlayerTokens:[]};
    const cacheReadyPromise=Promise.resolve(),isServerListModificationsEnabled=true,isServerUptimeEnabled=true,
      isServerRegionEnabled=true,isPlaceVersionEnabled=true,isFullServerIDEnabled=false,isFullServerIndicatorsEnabled=true;
    const CLASSES={CONTAINER:'fixture-details',INFO_ROW:'fixture-row',Inactive:'fixture-inactive'},ORDERS={Status:1},
      STYLES2={row:'',icon:'',text:'',container:'',containerFriends:''};
    const purify=DOMPurify,console={error:(...args)=>errors.push(args.map(String).join(' '))};
    const setTimeout=(fn,ms)=>globalThis.setTimeout(()=>{try {Promise.resolve(fn()).catch(e=>errors.push(String(e)));}catch(e){errors.push(String(e));}},ms);
    const noop=()=>{},injectStyles3=noop,cleanupServerUI=noop,attachCleanupObserver=noop,enableAvatarLinks=noop,
      displayPerformance=noop,displayIpAndDcId=noop,addCopyJoinLinkButton=noop,addTooltip=noop;
    const getServerUptime=()=>null,getServerUptimeIsEstimate=()=>false,getServerVersion=()=>null,
      getServerRegion=()=>null,getPlaceIdFromUrl=()=> '111',normalizeRegionName=value=>value||'',
      getLocationFromDataCenterId=()=>null;
    const t2=async(key)=>key,ts2=key=>key,displayLanguageMatch=async()=>{};
    const launchGame=(place,id)=>joins.push([String(place),id]);
    const fetchThumbnails=async(items)=>new Map(items.map(item=>[item.id,{imageUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII='}]));
    const displayUptime=(el,value)=>{el.dataset.testUptime=String(value);},
      displayPlaceVersion=(el,value)=>{el.dataset.testVersion=String(value);},
      displayRegion=(el,value)=>{el.dataset.testRegion=String(value);},
      displayServerFullStatus=el=>{el.dataset.testFull='true';},displayPurchaseGameStatus=noop;
    const fetchServerRegion2=async(place,id)=>{
      requests.push({kind:'region',place:String(place),id});
      await new Promise(resolve=>globalThis.setTimeout(resolve,25));
      return {status:id.startsWith('root')?2:5};
    };
    const fetchServerDetails=async(place,ids)=>{
      requests.push({kind:'details',place:String(place),ids:[...ids]});
      return {servers:ids.filter(id=>id.startsWith('root')).map(serverId=>({serverId,uptime:3600,placeVersion:42,isEstimate:false,region:'Test Region'}))};
    };
    ${hardenHTML(source).source}
    try {
      for(const [i,create] of [createServerCardFromRobloxApi,createServerCardFromApi,createModernServerCard].entries()) {
        for(const [prefix,place] of [['root','111'],['sub','85547073091480']]) {
          const card=await create({id:prefix+'-'+i,playing:1,maxPlayers:10,playerTokens:['fixture-token']},place,{addedByRovalraFilter:true});
          if(!card)throw Error('Card creation failed: '+prefix+'-'+i);
          host.append(card);cards.push(card);
        }
      }
      await new Promise(resolve=>globalThis.setTimeout(resolve,350));
      for(const card of cards)card.querySelector('.game-server-join-btn,.rovalra-join-btn').click();
      return {errors,requests,joins,cards:cards.map(card=>({id:card.dataset.rovalraServerid,
        place:card.dataset.placeid,attached:card.isConnected,uptime:card.dataset.testUptime,
        region:card.dataset.testRegion,version:card.dataset.testVersion,full:card.dataset.testFull||false,
        unconfirmed:card.textContent.includes('Server availability unconfirmed'),
        avatars:card.querySelectorAll('img[alt="Player"]').length}))};
    } finally {host.remove();}
  })()`;
}
