import {extract,original,repaired} from './server-source.mjs';
import {functions,edits} from '../adapter.mjs';
import {hardenHTML} from '../hardening.mjs';

// Restore upstream behavior at the event, filtering and request call sites.
const nodes=functions(repaired);
const previous=edits(repaired,['attachGlobalListeners2','renderAndAppendServers','fetchServerRegion2'].map(name=>({
  ...nodes.get(name)[0],text:extract([name],original)
})));

export function serverEventsFixtureSource(fixed) {
  const source=extract(['callRobloxApi','normalizeGameJoinEndpoint','fetchServerRegion2','attachGlobalListeners2','renderAndAppendServers',
    'manageLoadMoreButton','createServerCardFromRobloxApi','createServerCardFromApi','createModernServerCard',
    'enhanceServer','processUptimeBatch','fetchServerUptime','fetchAndDisplayRegion','isServerActive2',
    'displayInactivePlaceStatus','getOrCreateDetailsContainer','updateInfoElement','createInfoElement'],fixed?repaired:previous);
  return `(async()=>{
    const subscriptions=[],errors=[],requests=[],events=[],loads=[];
    const document=new Proxy(globalThis.document,{get(target,key){
      if(key==='addEventListener')return (type,listener,options)=>{
        subscriptions.push([type,listener,options]);target.addEventListener(type,listener,options);
      };
      const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;
    }});
    const outer=document.createElement('section'),host=document.createElement('ul');outer.append(host);document.body.append(outer);
    const _state={uptimeBatch:new Map(),serverLocations:{},serverUptimes:{},serverStatuses:{},
      serverPerformanceCache:{},serverIpMap:{},serverDataCache:new Map(),collectedPlayerTokens:[],targetActiveCount:0};
    const cacheReadyPromise=Promise.resolve(),isServerListModificationsEnabled=true,isServerUptimeEnabled=true,
      isServerRegionEnabled=true,isPlaceVersionEnabled=true,isFullServerIDEnabled=false,isFullServerIndicatorsEnabled=true;
    const CLASSES={CONTAINER:'event-details',INFO_ROW:'event-row',Inactive:'event-inactive'},ORDERS={Status:1},
      STYLES2={row:'',icon:'',text:'',container:'',containerFriends:''};
    const purify=DOMPurify,console={error:(...args)=>errors.push(args.map(String).join(' ')),warn:()=>{}};
    const noop=()=>{},__name=fn=>fn,injectStyles3=noop,cleanupServerUI=noop,attachCleanupObserver=noop,enableAvatarLinks=noop,
      displayPerformance=noop,displayIpAndDcId=noop,addCopyJoinLinkButton=noop,addTooltip=noop,
      showAutoLoadingIndicator=noop,removeAutoLoadingIndicator=noop,equalizeCardHeights=noop,handleFilterActivation=noop;
    const getServerUptime=()=>null,getServerUptimeIsEstimate=()=>false,getServerVersion=()=>null,getServerRegion=()=>null,
      getPlaceIdFromUrl=()=> '85547073091480',getPlaceIdFromUrl6=getPlaceIdFromUrl,normalizeRegionName=value=>value||'',
      getLocationFromDataCenterId=()=>null,findServerListContainer=()=>host;
    const t2=async(key)=>key,ts2=key=>key,launchGame=noop,displayLanguageMatch=async()=>{};
    const displayUptime=noop,displayPlaceVersion=noop,displayRegion=noop,displayServerFullStatus=noop,displayPurchaseGameStatus=noop;
    const displayMessageInContainer=message=>{host.textContent=message;};
    const fetchServerDetails=async()=>({servers:[]});
    const serverDataCache=new Map(),serverUptimeIsEstimate={},createUUID=()=>crypto.randomUUID();
    let lastGameJoinRequestTime=0,gameJoinErrorCount=0;
    const activeRequests=new Map(),responseCache=new Map(),refreshGameJoinVersionPreference=async()=>false,
      getRequestKey=JSON.stringify,getResponseCacheTtl=()=>0,
      isRovalraAuthEndpoint=()=>false,checkSimulatedJoinHttpError=async()=>false,checkSimulatedJoinError=async()=>false,
      getAuthenticatedUserId=async()=>null,hbaClient={generateBaseHeaders:async()=>({})},getCsrfToken=async()=>'',
      isGameJoinTimeoutEnabled=()=>false,normalizeGameJoinResponse=async(response)=>response;
    let rateLimited=false;
    const fetch=async(url,options)=>{
      if(!url.startsWith('https://gamejoin.roblox.com/'))throw Error('Unexpected fixture request: '+url);
      const body=JSON.parse(options.body);requests.push(body);
      await new Promise(resolve=>setTimeout(resolve,25));
      if(rateLimited)return new Response('{}',{status:429,headers:{'Retry-After':'5'}});
      return new Response(JSON.stringify({status:body.gameId.startsWith('root-')?2:5}),{headers:{'Content-Type':'application/json'}});
    };
    ${hardenHTML(source).source}
    const settle=()=>new Promise(resolve=>setTimeout(resolve,800));
    const card=(id)=>({id,playing:0,maxPlayers:10,playerTokens:[]});
    try {
      attachGlobalListeners2();
      document.addEventListener('rovalra-server-inactive',event=>events.push(event.detail.serverId));
      // Directly appended cards exercise the API's asynchronous event side effect.
      const initial=await createServerCardFromRobloxApi(card('sub-event-initial'),'85547073091480',{addedByRovalraFilter:true});host.append(initial);
      await settle();
      const initialAttached=initial.isConnected;
      // Exercise the real Load More button and event listener twice, including
      // pagination, filtered rendering and the metadata requests it starts.
      document.addEventListener('rovalraRequestRegionServers',event=>{
        loads.push(event.detail);
        const page=loads.length;
        document.dispatchEvent(new CustomEvent('rovalraRegionServersLoaded',{detail:{
          servers:[card('sub-event-'+page),card('root-event-'+page)],append:true,regionCode:'test',next_cursor:null
        }}));
      });
      for(let page=1;page<=2;page++) {
        manageLoadMoreButton('page-'+page,'test');
        document.getElementById('rovalra-load-more-btn').click();
        await settle();
      }
      const result={initialAttached,errors:[...errors],events:[...events],loads:[...loads],requests:[...requests],
        ids:[...host.querySelectorAll('[data-rovalra-serverid]')].map(card=>card.dataset.rovalraServerid),
        unconfirmed:[...host.querySelectorAll('.event-inactive')].map(row=>row.textContent)};
      if(${fixed}) {
        rateLimited=true;
        const requestCount=requests.length,errorCount=errors.length,rateCards=[];
        for(let index=0;index<3;index++) {
          const item=await createServerCardFromRobloxApi(card('sub-rate-'+index),'85547073091480');
          host.append(item);rateCards.push(item);
        }
        await settle();
        result.rateLimited={attached:rateCards.filter(item=>item.isConnected).length,
          requests:requests.length-requestCount,errors:errors.slice(errorCount)};
      }
      return result;
    } finally {
      for(const args of subscriptions)globalThis.document.removeEventListener(...args);
      outer.remove();document.getElementById('rovalra-load-more-btn')?.remove();
    }
  })()`;
}
