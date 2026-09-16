import * as walk from 'acorn-walk';
import {parseJS, edits} from './adapter.mjs';

// Sanitize dynamic HTML at the DOM boundary. Literal markup is packaged code.
// Never rewrite the sanitizer's own inert-document parser.
export function hardenHTML(source) {
  const changes=[];
  const options=', {ADD_TAGS:["icon"], ADD_ATTR:["material","filled","fill","rovalra","size"]})';
  let count=0;
  function protect(node, ancestors) {
    if(ancestors.some(a=>a.type==='FunctionDeclaration' && a.id?.name==='createDOMPurify'))return;
    if(node.type==='Literal' || (node.type==='TemplateLiteral' && !node.expressions.length))return;
    if(node.type==='CallExpression' && node.callee.type==='MemberExpression' && node.callee.property.name==='sanitize' &&
      ['purify','dompurify_default','DOMPurify'].includes(node.callee.object.name))return;
    if(node.type==='TaggedTemplateExpression' && node.tag.name==='safeHtml')return;
    changes.push({start:node.start,end:node.start,text:'DOMPurify.sanitize('},
      {start:node.end,end:node.end,text:options});
    count++;
  }
  walk.ancestor(parseJS(source),{
    AssignmentExpression(node,ancestors) {
      if(node.left.type==='MemberExpression' && ['innerHTML','outerHTML'].includes(node.left.property.name ?? node.left.property.value))protect(node.right,ancestors);
    },
    CallExpression(node,ancestors) {
      if(node.callee.type==='MemberExpression' && node.callee.property.name==='insertAdjacentHTML' && node.arguments[1])protect(node.arguments[1],ancestors);
    }
  });
  return {source:edits(source,changes),count};
}
