import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {hardenHTML} from '../hardening.mjs';
import {inspectHtmlWarnings} from '../lint-policy.mjs';

test('dynamic HTML is sanitized without repeating side effects or touching text assignments',()=>{
  const calls=[];
  const context={target:{},other:{},getHtml:()=>{calls.push('get');return 'untrusted';},
    DOMPurify:{sanitize:value=>{calls.push(value);return `clean:${value}`;}}};
  const result=hardenHTML('target.innerHTML = getHtml(); target.textContent = "plain"; other.outerHTML = target.innerHTML;');
  vm.runInNewContext(result.source,context);
  assert.equal(result.count,2);
  assert.equal(context.target.innerHTML,'clean:untrusted');
  assert.equal(context.target.textContent,'plain');
  assert.deepEqual(calls,['get','untrusted','clean:untrusted']);
});

test('HTML insertion methods, computed properties and unknown sanitizers are protected',()=>{
  const result=hardenHTML('el["innerHTML"]=unsafe.sanitize(input); el.insertAdjacentHTML("beforeend",input); el.innerHTML="<b>fixed</b>";');
  assert.equal(result.count,2);
  assert.match(result.source,/DOMPurify\.sanitize\(unsafe\.sanitize/);
  assert.match(result.source,/insertAdjacentHTML\("beforeend",DOMPurify\.sanitize/);
  assert(result.source.includes('el.innerHTML="<b>fixed</b>"'));
});

test('lint policy recognizes sanitizer aliases but rejects unsanitized warnings',()=>{
  const source='var p=DOMPurify; var alias=p; el.innerHTML=alias.sanitize(value); other.innerHTML=value;';
  const warnings=['el.innerHTML','other.innerHTML'].map(text=>({file:'content.js',code:'UNSAFE_VAR_ASSIGNMENT',line:1,column:source.indexOf(text)+1}));
  const review=inspectHtmlWarnings({'content.js':Buffer.from(source)},warnings,'');
  assert.equal(review.reviewed.length,1);
  assert.equal(review.unexpected.length,1);
  assert.equal(review.unexpected[0].column,source.indexOf('other.innerHTML')+1);
  assert.throws(()=>inspectHtmlWarnings({'content.js':Buffer.from(source+'p=unsafe;')},warnings,''),/reassigned/);
});

test('the upstream sanitizer alias keeps its options and runs only once',()=>{
  const source='var purify_default=DOMPurify; el.innerHTML=purify_default.sanitize(input,{ADD_TAGS:["icon"]});';
  const result=hardenHTML(source),calls=[];
  const context={el:{},input:'markup',DOMPurify:{sanitize:(value,options)=>{calls.push(options);return 'clean';}}};
  vm.runInNewContext(result.source,context);
  assert.equal(context.el.innerHTML,'clean');
  assert.equal(calls.length,1);
  assert.deepEqual(Array.from(calls[0].ADD_TAGS),['icon']);
  const warning={file:'content.js',code:'UNSAFE_VAR_ASSIGNMENT',line:1,column:result.source.indexOf('el.innerHTML')+1};
  assert.equal(inspectHtmlWarnings({'content.js':Buffer.from(result.source)},[warning],'').unexpected.length,0);
});

test('an arbitrary template tag and modified sanitizer are not automatically exempt',()=>{
  const source='el.innerHTML=fake`<b>${input}</b>`;';
  const warning={file:'content.js',code:'UNSAFE_VAR_ASSIGNMENT',line:1,column:1};
  assert.equal(inspectHtmlWarnings({'content.js':Buffer.from(source)},[warning],'').unexpected.length,1);
  assert.equal(inspectHtmlWarnings({'firefox/purify.js':Buffer.from(source)},[{...warning,file:'firefox/purify.js'}],'bad-hash').unexpected.length,1);
});
