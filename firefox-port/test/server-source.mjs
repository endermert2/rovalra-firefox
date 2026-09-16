import fs from 'node:fs';
import {functions} from '../adapter.mjs';
import {repairServers} from '../server-fixes.mjs';

export const original=fs.readFileSync(new URL('../upstream/content.js',import.meta.url),'utf8');
export const contracts=JSON.parse(fs.readFileSync(new URL('../contracts.json',import.meta.url)));
export const repaired=repairServers(original,contracts);
const indexes=new Map();
export function extract(names,source=repaired) {
  if(!indexes.has(source))indexes.set(source,functions(source));
  return names.map(name=>{
    const node=indexes.get(source).get(name)[0];
    return source.slice(node.start,node.end);
  }).join('\n');
}
