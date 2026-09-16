import * as walk from 'acorn-walk';
import {parseJS,sha256} from './adapter.mjs';

// Mozilla's minified-bundle warnings don't follow sanitizer aliases. Resolve
// only aliases of our pinned DOMPurify and templates whose returns sanitize.
export function inspectHtmlWarnings(files,warnings,sanitizerHash) {
  const cache=new Map();
  const reviewed=[],unexpected=[];
  for(const warning of warnings) {
    if(warning.code!=='UNSAFE_VAR_ASSIGNMENT'){unexpected.push(warning);continue;}
    const bytes=files[warning.file];
    if(warning.file==='firefox/purify.js' && bytes && sha256(bytes)===sanitizerHash) {
      reviewed.push({...warning,reason:'Pinned DOMPurify inert-document parser'});continue;
    }
    if(!bytes){unexpected.push(warning);continue;}
    if(!cache.has(warning.file)) {
      const source=bytes.toString(),tree=parseJS(source),assignments=[],sinks=[];
      const offsets=[0];for(let i=0;i<source.length;i++)if(source[i]==='\n')offsets.push(i+1);
      walk.simple(tree,{
        AssignmentExpression(n) {
          if(n.left.type==='Identifier')assignments.push({name:n.left.name,value:n.right});
          if(n.left.type==='MemberExpression' && ['innerHTML','outerHTML'].includes(n.left.property.name??n.left.property.value))sinks.push({node:n,value:n.right});
        },
        VariableDeclarator(n) {if(n.id.type==='Identifier' && n.init)assignments.push({name:n.id.name,value:n.init});},
        CallExpression(n) {if(n.callee.type==='MemberExpression' && n.callee.property.name==='insertAdjacentHTML')sinks.push({node:n,value:n.arguments[1]});}
      });
      const aliases=new Set(['DOMPurify']);
      let changed=true;
      while(changed){changed=false;for(const a of assignments)if(a.value.type==='Identifier' && aliases.has(a.value.name) && !aliases.has(a.name)){aliases.add(a.name);changed=true;}}
      // A reassigned alias cannot be used as evidence of sanitization.
      for(const a of assignments)if(aliases.has(a.name) && !(a.value.type==='Identifier' && aliases.has(a.value.name)))throw new Error(`Sanitizer alias reassigned: ${a.name}`);
      const sanitized=n=>Boolean(n && (n.type==='SequenceExpression'?sanitized(n.expressions.at(-1)):
        n.type==='CallExpression' && n.callee.type==='MemberExpression' &&
        n.callee.property.name==='sanitize' && aliases.has(n.callee.object.name)));
      const templates=new Set();
      for(const a of assignments) {
        const fn=a.value.type==='CallExpression' && a.value.arguments[1]?.value==='safeHtml' ? a.value.arguments[0] : null;
        if(!fn || !['ArrowFunctionExpression','FunctionExpression'].includes(fn.type))continue;
        const returns=[];
        walk.simple(fn.body,{ReturnStatement(n){returns.push(n.argument);}});
        if(returns.length && returns.every(sanitized))templates.add(a.name);
      }
      cache.set(warning.file,{offsets,sinks,sanitized,templates});
    }
    const {offsets,sinks,sanitized,templates}=cache.get(warning.file);
    const offset=offsets[warning.line-1]+warning.column-1;
    const sink=sinks.filter(s=>s.node.start<=offset && s.node.end>offset).sort((a,b)=>(a.node.end-a.node.start)-(b.node.end-b.node.start))[0];
    if(sink && (sanitized(sink.value) || sink.value?.type==='TaggedTemplateExpression' && templates.has(sink.value.tag.name))) {
      reviewed.push({...warning,reason:'HTML passes through the pinned sanitizer'});
    } else unexpected.push(warning);
  }
  return {reviewed,unexpected};
}
