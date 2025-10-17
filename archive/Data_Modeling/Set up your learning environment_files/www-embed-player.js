(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}});
return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ia;
if(typeof Object.setPrototypeOf=="function")ia=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},oa={};try{oa.__proto__=ma;la=oa.a;break a}catch(a){}la=!1}ia=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ia;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ca=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function qa(a){return ra(a,a)}
function ra(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta=typeof Object.assign=="function"?Object.assign:function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ta});
function ua(){this.B=!1;this.o=null;this.i=void 0;this.h=1;this.u=this.H=0;this.J=this.j=null}
function va(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
ua.prototype.G=function(a){this.i=a};
function wa(a,b){a.j={exception:b,Wd:!0};a.h=a.H||a.u}
ua.prototype.return=function(a){this.j={return:a};this.h=this.u};
ua.prototype.yield=function(a,b){this.h=b;return{value:a}};
ua.prototype.A=function(a){this.h=a};
function xa(a,b,c){a.H=b;c!=void 0&&(a.u=c)}
function ya(a,b){a.h=b;a.H=0}
function za(a){a.H=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){a.J=[a.j];a.H=0;a.u=0}
function Ba(a,b){var c=a.J.splice(0)[0];(c=a.j=a.j||c)?c.Wd?a.h=a.H||a.u:c.A!=void 0&&a.u<c.A?(a.h=c.A,a.j=null):a.h=a.u:a.h=b}
function Ca(a){this.h=new ua;this.i=a}
function Da(a,b){va(a.h);var c=a.h.o;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.o=null,wa(a.h,g),Fa(a)}a.h.o=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,wa(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Wd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){va(a.h);a.h.o?b=Ea(a,a.h.o.next,b,a.h.G):(a.h.G(b),b=Fa(a));return b};
this.throw=function(b){va(a.h);a.h.o?b=Ea(a,a.h.o["throw"],b,a.h.G):(wa(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ha(new Ga(new Ca(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ha});
u("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.Z=0;this.ib=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.j)}};
b.prototype.V=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.o(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.H(2,g)};
b.prototype.o=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.Z!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.Z);this.Z=g;this.ib=h;this.Z===2&&this.aa();this.B()};
b.prototype.aa=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.ib)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ib;return k(g)};
b.prototype.B=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.ba=function(g){var h=this.i();g.Ac(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(z){m(z)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Ac(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ac=function(g,h){function k(){switch(l.Z){case 1:g(l.ib);break;case 2:h(l.ib);break;default:throw Error("Unexpected state: "+l.Z);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).Ac(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(z){r[w]=z;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Ac(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||pa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;v(b,Error);b.prototype.name="SuppressedError";return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!sa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!sa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&sa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&sa(k,g)&&sa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&sa(k,g)&&sa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&sa(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)sa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)sa(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
u("Math.imul",function(a){return a?a:function(b,c){b=Number(b);c=Number(c);var d=b&65535,e=c&65535;return d*e+((b>>>16&65535)*e+d*(c>>>16&65535)<<16>>>0)|0}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a,b){var c=F("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Oa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(Math.random()*1E9>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Sa:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a){return a}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function bb(a){var b=C.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function cb(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function db(a){var b=a.url;a=a.xj;this.i=b;this.o=a;this.j=(new Date).getTime()-17040672E5;this.h={};for(var c=/[?&]([^&=]+)=([^&]*)/g;a=c.exec(b);)this.h[a[1]]=a[2]}
function eb(a){a=a.o;if(!a)return"";var b=cb("uap",a.platform)+cb("uapv",a.platformVersion)+cb("uafv",a.uaFullVersion)+cb("uaa",a.architecture)+cb("uam",a.model)+cb("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function fb(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function hb(a){function b(f){a.error=a.pb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.pb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.pb?Promise.reject(a.error):Promise.resolve();
if(a.pb)throw a.error;}
var d,e=0;c()}
;function ib(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ib);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ab(ib,Error);ib.prototype.name="CustomError";var jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var kb=globalThis.trustedTypes,lb;function mb(){var a=null;if(!kb)return a;try{var b=function(c){return c};
a=kb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function nb(){lb===void 0&&(lb=mb());return lb}
;function ob(a){this.h=a}
ob.prototype.toString=function(){return this.h+""};
function pb(a){var b=nb();a=b?b.createScriptURL(a):a;return new ob(a)}
function qb(a){if(a instanceof ob)return a.h;throw Error("");}
;var rb=qa([""]),sb=ra(["\x00"],["\\0"]),tb=ra(["\n"],["\\n"]),ub=ra(["\x00"],["\\u0000"]);function vb(a){return a.toString().indexOf("`")===-1}
vb(function(a){return a(rb)})||vb(function(a){return a(sb)})||vb(function(a){return a(tb)})||vb(function(a){return a(ub)});function wb(a){this.h=a}
wb.prototype.toString=function(){return this.h};
var xb=new wb("about:invalid#zClosurez");function yb(a){this.Gf=a}
function zb(a){return new yb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ab=[zb("data"),zb("http"),zb("https"),zb("mailto"),zb("ftp"),new yb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Bb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Cb(a){if(a instanceof wb)if(a instanceof wb)a=a.h;else throw Error("");else a=Bb.test(a)?a:void 0;return a}
;function Db(a,b){b=Cb(b);b!==void 0&&(a.href=b)}
;function Eb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h+""};
function Ib(a){var b=nb();a=b?b.createScript(a):a;return new Hb(a)}
function Jb(a){if(a instanceof Hb)return a.h;throw Error("");}
;function Kb(a){var b=Gb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Lb(a,b){a.src=qb(b);Kb(a)}
;function Mb(){this.h=Nb[0].toLowerCase()}
Mb.prototype.toString=function(){return this.h};function Ob(a){var b="true".toString(),c=[new Mb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Mb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Pb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Qb(a,b){if(b instanceof ob)a.href=qb(b).toString(),a.rel="stylesheet";else{if(Pb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Cb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Rb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Sb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Tb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ub=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Vb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Sb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Wb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Xb(a,b){b=Rb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Yb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Zb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function $b(a,b){return a>b?1:a<b?-1:0}
;function ac(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function bc(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,dc[c])c=dc[c];else{c=String(c);if(!dc[c]){var f=/function\s+([^\(]+)/m.exec(c);dc[c]=f?f[1]:"[Anonymous]"}c=dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function cc(a,b){b||(b={});b[ec(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[ec(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=cc(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[ec(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=cc(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function ec(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var dc={};function fc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function hc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function lc(a){return kc(a.match(jc)[3]||null)}
function mc(a){return kc(a.match(jc)[5]||null)}
function nc(a){var b=a.match(jc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function oc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function pc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?fc(e):"")}}}
function qc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)qc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function rc(a){var b=[],c;for(c in a)qc(c,a[c],b);return b.join("&")}
function sc(a,b){b=rc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function tc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var uc=/#|$/,vc=/[?&]($|#)/;function wc(a,b){for(var c=a.search(uc),d=0,e,f=[];(e=tc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(vc,"$1")}
;function xc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function I(a,b,c){c=c===void 0?Error():c;var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,this.constructor.prototype)}
v(I,Error);function yc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function zc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?zc.apply(null,d):yc(d)}}
;function J(){this.P=this.P;this.H=this.H}
J.prototype.P=!1;J.prototype.dispose=function(){this.P||(this.P=!0,this.X())};
J.prototype[Symbol.dispose]=function(){this.dispose()};
function Ac(a,b){a.addOnDisposeCallback(Ya(yc,b))}
J.prototype.addOnDisposeCallback=function(a,b){this.P?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
J.prototype.X=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Bc(){var a=Cc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:xc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Dc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Dc(f))}))})}
function Dc(a){J.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Pb=this.vm.p;this.j=this.jc.bind(this);this.addOnDisposeCallback(function(){return void Ec(b)})}
v(Dc,J);Dc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.Ha&&{c:a.Ha},a.Yc&&{s:a.Yc},a.Cd!==void 0&&{p:a.Cd}))};
Dc.prototype.jc=function(a){this.vm.e(a)};
Dc.prototype.Bc=function(a,b){return this.vm.c(a,b,!1)};
function Ec(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
Dc.prototype.qc=function(){return this.vm.l()};function Fc(a){var b,c,d={Ha:a.c,jd:a.e,Pf:(b=a.mc)!=null?b:!1,Qf:(c=a.me)!=null?c:!1};a.co&&(d.yc={Md:a.co.c,Ne:a.co.a,xg:a.co.s});return d}
function Gc(a){return function(){var b;return B(function(c){if(c.h==1)return c.yield(a(),2);b=c.i;return c.return({f:function(){return b.Ob.promise},
c:function(d){if(d>150)var e=!1;else try{b.cache=new Hc(d,b.logger),e=!0}catch(f){Ic(b,new I(22,"GBJ:init",f)),e=!1}return e},
m:function(d){return b.gb(Fc(d))},
mws:function(d){return b.Nc(Fc(d))}})})}}
function Jc(a,b){var c=Cc();c=c===void 0?"bevasrsg":c;b={s:function(f){var g;return a.snapshot(Object.assign({},f.c&&{Ha:f.c},f.s&&{Yc:f.s},{vj:(g=f.p)!=null?g:!0}))},
e:function(f){var g;return void((g=a.jc)==null?void 0:g.call(a,f))},
c:function(f,g){return a.Bc(f,g)},
p:a.Pb,l:function(){return a.qc()},
wpc:b?Gc(b):void 0};var d=window===window.top?window:xc()?window:window.top,e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(c=y(e.nqfbel),d=c.next();!d.done;d=c.next())d=d.value,d(b);e.nqfbel=void 0}else e={},e=(e.bevasrs=b,e.nqfbel=void 0,e),d[c]=e}
;function Kc(a){var b=b===void 0?51:b;var c=[];Lc(a,Mc,6).forEach(function(d){Nc(d,2)<=b&&c.push(Nc(d,1))});
return c}
function Oc(a){var b=b===void 0?51:b;var c=[];Lc(a,Mc,6).forEach(function(d){Nc(d,2)>b&&c.push(Nc(d,1))});
return c}
;function Pc(a){a.then(function(){},function(){})}
function Qc(){J.apply(this,arguments);this.i=1}
v(Qc,J);Qc.prototype.share=function(){if(this.P)throw Error("E:AD");this.i++;return this};
Qc.prototype.dispose=function(){--this.i||J.prototype.dispose.call(this)};function Rc(a){return{fieldType:2,fieldName:a}}
function Sc(a){return{fieldType:3,fieldName:a}}
;function Tc(a){this.h=a;a.ed("/client_streamz/bg/frs",Sc("mk"))}
Tc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Uc(a){this.h=a;a.ed("/client_streamz/bg/wrl",Sc("mn"),Rc("ac"),Rc("sc"),Sc("rk"),Sc("mk"))}
Uc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Vc(a){this.h=a;a.Wb("/client_streamz/bg/ec",Sc("en"),Sc("mk"))}
Vc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/ec",a,b)};
function Wc(a){this.h=a;a.ed("/client_streamz/bg/el",Sc("en"),Sc("mk"))}
Wc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Xc(a){this.h=a;a.Wb("/client_streamz/bg/cec",Rc("ec"),Sc("mk"))}
Xc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/cec",a,b)};
function Yc(a){this.h=a;a.Wb("/client_streamz/bg/po/csc",Rc("cs"),Sc("mk"))}
Yc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/po/csc",a,b)};
function Zc(a){this.h=a;a.Wb("/client_streamz/bg/po/ctav",Sc("av"),Sc("mk"))}
Zc.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/po/ctav",a,b)};
function $c(a){this.h=a;a.Wb("/client_streamz/bg/po/cwsc",Sc("su"),Sc("mk"))}
$c.prototype.Ia=function(a,b){this.h.Tb("/client_streamz/bg/po/cwsc",a,b)};var ad,bd=typeof String.prototype.isWellFormed==="function",cd=typeof TextEncoder!=="undefined";
function dd(a){var b=!1;b=b===void 0?!1:b;if(cd){if(b&&(bd?!a.isWellFormed():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=(ad||(ad=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(f<128)d[c++]=f;else{if(f<2048)d[c++]=f>>6|192;else{if(f>=55296&&f<=57343){if(f<=56319&&e<a.length){var g=a.charCodeAt(++e);if(g>=56320&&g<=57343){f=(f-55296)*1024+g-56320+
65536;d[c++]=f>>18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a}
;function ed(a){D.setTimeout(function(){throw a;},0)}
;function fd(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var gd=La(610401301,!1),hd=La(748402147,!0);function id(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var jd,kd=D.navigator;jd=kd?kd.userAgentData||null:null;function ld(a){if(!gd||!jd)return!1;for(var b=0;b<jd.brands.length;b++){var c=jd.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function K(a){return id().indexOf(a)!=-1}
;function md(){return gd?!!jd&&jd.brands.length>0:!1}
function nd(){return md()?!1:K("Opera")}
function od(){return K("Firefox")||K("FxiOS")}
function pd(){return md()?ld("Chromium"):(K("Chrome")||K("CriOS"))&&!(md()?0:K("Edge"))||K("Silk")}
;function qd(){return gd?!!jd&&!!jd.platform:!1}
function rd(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function sd(a){sd[" "](a);return a}
sd[" "]=function(){};var td=nd(),ud=md()?!1:K("Trident")||K("MSIE"),vd=K("Edge"),wd=K("Gecko")&&!(id().toLowerCase().indexOf("webkit")!=-1&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),xd=id().toLowerCase().indexOf("webkit")!=-1&&!K("Edge");xd&&K("Mobile");qd()||K("Macintosh");qd()||K("Windows");(qd()?jd.platform==="Linux":K("Linux"))||qd()||K("CrOS");var yd=qd()?jd.platform==="Android":K("Android");rd();K("iPad");K("iPod");rd()||K("iPad")||K("iPod");id().toLowerCase().indexOf("kaios");od();var zd=rd()||K("iPod"),Ad=K("iPad");!K("Android")||pd()||od()||nd()||K("Silk");pd();var Bd=K("Safari")&&!(pd()||(md()?0:K("Coast"))||nd()||(md()?0:K("Edge"))||(md()?ld("Microsoft Edge"):K("Edg/"))||(md()?ld("Opera"):K("OPR"))||od()||K("Silk")||K("Android"))&&!(rd()||K("iPad")||K("iPod"));var Cd={},Dd=null;function Ed(a,b){Na(a);b===void 0&&(b=0);Fd();b=Cd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Gd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Hd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Hd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Dd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Fd(){if(!Dd){Dd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Cd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Dd[f]===void 0&&(Dd[f]=e)}}}}
;var Id=typeof Uint8Array!=="undefined",Jd=!ud&&typeof btoa==="function",Kd=/[-_.]/g,Ld={"-":"+",_:"/",".":"="};function Md(a){return Ld[a]||""}
var Nd={};function Pd(a,b){Qd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
function Rd(){return Sd||(Sd=new Pd(null,Nd))}
function Td(a){return new Uint8Array(Ud(a)||0)}
Pd.prototype.sizeBytes=function(){var a=Ud(this);return a?a.length:0};
function Ud(a){Qd(Nd);var b=a.h;if(!(b==null||Id&&b!=null&&b instanceof Uint8Array))if(typeof b==="string")if(Jd){b=Kd.test(b)?b.replace(Kd,Md):b;b=atob(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else b=Gd(b);else Ma(b),b=null;return b==null?b:a.h=b}
var Sd;function Qd(a){if(a!==Nd)throw Error("illegal external caller");}
;var Vd=void 0;function Wd(a){a=Error(a);ac(a,"warning");return a}
function Xd(a,b){if(a!=null){var c;var d=(c=Vd)!=null?c:Vd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),ac(a,"incident"),ed(a))}}
;var Yd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Zd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var $d=Zd("jas",void 0,!0),ae=Zd(void 0,"1oa"),be=Zd(void 0,Symbol()),ce=Zd(void 0,"0ub"),de=Zd(void 0,"0ubs"),ee=Zd(void 0,"0ubsb"),fe=Zd(void 0,"0actk"),ge=Zd("m_m","fj",!0),he=Zd(void 0,"vps"),ie=Zd();Math.max.apply(Math,A(Object.values({Ei:1,Di:2,Ci:4,Ii:8,Ki:16,Gi:32,Ug:64,Ai:128,Zg:256,Ji:512,ah:1024,Bi:2048,Hi:4096,Fi:8192})));var je={Ef:{value:0,configurable:!0,writable:!0,enumerable:!1}},ke=Object.defineProperties,L=Yd?$d:"Ef",le,me=[];ne(me,7);le=Object.freeze(me);function oe(a,b){Yd||L in a||ke(a,je);a[L]|=b}
function ne(a,b){Yd||L in a||ke(a,je);a[L]=b}
;function pe(){return typeof BigInt==="function"}
;var qe={};function re(a,b){return b===void 0?a.h!==se&&!!(2&(a.D[L]|0)):!!(2&b)&&a.h!==se}
var se={};function te(a,b){if(a!=null)if(typeof a==="string")a=a?new Pd(a,Nd):Rd();else if(a.constructor!==Pd)if(Id&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pd(new Uint8Array(a),Nd):Rd();else{if(!b)throw Error();a=void 0}return a}
var ue=Object.freeze({});function ve(a,b,c){var d=b&128?0:-1,e=a.length,f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;var g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(var h in a)!isNaN(h)&&c(+h,a[h])}}
var we={};function xe(a){a.Yi=!0;return a}
;var ye=xe(function(a){return typeof a==="number"}),ze=xe(function(a){return typeof a==="string"}),Ae=xe(function(a){return typeof a==="boolean"});
function Be(){var a=Ce;return xe(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var De=xe(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"}),Ee=xe(function(a){return!!a&&(typeof a==="object"||typeof a==="function")});var Fe=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function Ge(a){var b=a;if(ze(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ye(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Fe?BigInt(a):a=Ae(a)?a?"1":"0":ze(a)?a.trim()||"0":String(a)}
var Me=xe(function(a){return Fe?a>=He&&a<=Ie:a[0]==="-"?Je(a,Ke):Je(a,Le)}),Ke=Number.MIN_SAFE_INTEGER.toString(),He=Fe?BigInt(Number.MIN_SAFE_INTEGER):void 0,Le=Number.MAX_SAFE_INTEGER.toString(),Ie=Fe?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Je(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var Ne=0,Oe=0,Pe;function Qe(a){var b=a>>>0;Ne=b;Oe=(a-b)/4294967296>>>0}
function Re(a){if(a<0){Qe(0-a);var b=y(Se(Ne,Oe));a=b.next().value;b=b.next().value;Ne=a>>>0;Oe=b>>>0}else Qe(a)}
function Te(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ue(a,b)}
function Ue(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else pe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ve(c)+Ve(a));return c}
function Ve(a){a=String(a);return"0000000".slice(a.length)+a}
function We(){var a=Ne,b=Oe;b&2147483648?pe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(Se(a,b)),a=b.next().value,b=b.next().value,a="-"+Ue(a,b)):a=Ue(a,b);return a}
function Xe(a){if(a.length<16)Re(Number(a));else if(pe())a=BigInt(a),Ne=Number(a&BigInt(4294967295))>>>0,Oe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Oe=Ne=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Oe*=1E6,Ne=Ne*1E6+d,Ne>=4294967296&&(Oe+=Math.trunc(Ne/4294967296),Oe>>>=0,Ne>>>=0);b&&(b=y(Se(Ne,Oe)),a=b.next().value,b=b.next().value,Ne=a,Oe=b)}}
function Se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ye(a){return Array.prototype.slice.call(a)}
;var Ze=typeof BigInt==="function"?BigInt.asIntN:void 0,$e=typeof BigInt==="function"?BigInt.asUintN:void 0,af=Number.isSafeInteger,bf=Number.isFinite,cf=Math.trunc;function df(a){return a.displayName||a.name||"unknown type name"}
function ef(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var ff=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function gf(a){switch(typeof a){case "bigint":return!0;case "number":return bf(a);case "string":return ff.test(a);default:return!1}}
function hf(a){if(typeof a!=="number")throw Wd("int32");if(!bf(a))throw Wd("int32");return a|0}
function jf(a){return a==null?a:hf(a)}
function kf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a|0:void 0}
function lf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a>>>0:void 0}
function mf(a){var b=0;b=b===void 0?0:b;if(!gf(a))throw Wd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return nf(a);case "bigint":return String(Ze(64,a));default:return of(a)}case 1024:switch(c){case "string":return pf(a);case "bigint":return Ge(Ze(64,a));default:return qf(a)}case 0:switch(c){case "string":return nf(a);case "bigint":return Ge(Ze(64,a));default:return rf(a)}default:return Eb(b,"Unknown format requested type for int64")}}
function sf(a){return a==null?a:mf(a)}
function tf(a){a.indexOf(".");var b=a.length;if(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")return a;Xe(a);return We()}
function rf(a){gf(a);a=cf(a);if(!af(a)){Re(a);var b=Ne,c=Oe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function of(a){gf(a);a=cf(a);af(a)?a=String(a):(Re(a),a=We());return a}
function nf(a){gf(a);var b=cf(Number(a));if(af(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return tf(a)}
function pf(a){var b=cf(Number(a));if(af(b))return Ge(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return pe()?Ge(Ze(64,BigInt(a))):Ge(tf(a))}
function qf(a){return af(a)?Ge(rf(a)):Ge(of(a))}
function uf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Ze(64,a));if(gf(a)){if(b==="string")return nf(a);if(b==="number")return rf(a)}}
function vf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String($e(64,a));if(gf(a)){if(b==="string")return gf(a),b=cf(Number(a)),af(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Xe(a),a=Ue(Ne,Oe))),a;if(b==="number")return gf(a),a=cf(a),a>=0&&af(a)||(Re(a),a=Te(Ne,Oe)),a}}
function wf(a){if(typeof a!=="string")throw Error();return a}
function xf(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function yf(a){return a==null||typeof a==="string"?a:void 0}
function zf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+df(b)+" but got "+(a&&df(a.constructor)));}
function Af(a,b,c){if(a!=null&&a[ge]===qe)return a;if(Array.isArray(a)){var d=a[L]|0;c=d|c&32|c&2;c!==d&&ne(a,c);return new b(a)}}
;var Bf={};function Cf(a){return a}
;function Df(a){var b=$a(be);return b?a[b]:void 0}
var Ef={nj:!0};function Ff(a,b){b<100||Xd(de,1)}
;function Gf(a,b,c,d){var e=d!==void 0;d=!!d;var f=$a(be),g;!e&&Yd&&f&&(g=a[f])&&g.rf(Ff);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var n=h&&a[h-1];n!=null&&typeof n==="object"&&n.constructor===Object?(h--,g=h):n=void 0;if(l&&!(b&128)&&!e){k=!0;var r;g=((r=Hf)!=null?r:Cf)(g-m,m,a,n,void 0)+m}}b=void 0;for(r=0;r<h;r++){var t=a[r];if(t!=null&&(t=c(t,d))!=null)if(l&&r>=g){var w=r-m,z=void 0;((z=b)!=null?z:b={})[w]=t}else f[r]=t}if(n)for(var x in n)h=n[x],h!=
null&&(h=c(h,d))!=null&&(r=+x,t=void 0,l&&!Number.isNaN(r)&&(t=r+m)<g?f[t]=h:(r=void 0,((r=b)!=null?r:b={})[x]=h));b&&(k?f.push(b):f[g]=b);e&&$a(be)&&Df(a);return f}
function If(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Me(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[L]|0;return a.length===0&&b&1?void 0:Gf(a,b,If)}if(a!=null&&a[ge]===qe)return Jf(a);if(a instanceof Pd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(Jd){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=Ed(b);a=a.h=b}return a}return}return a}
var Hf;function Kf(a,b){if(b){Hf=b==null||b===Cf||b[he]!==Bf?Cf:b;try{return Jf(a)}finally{Hf=void 0}}return Jf(a)}
function Jf(a){a=a.D;return Gf(a,a[L]|0,If)}
;var Lf,Mf;function Nf(a){switch(typeof a){case "boolean":return Lf||(Lf=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Mf||(Mf=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function M(a,b,c,d){d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[L]|0;if(hd&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Of();if(e&256)throw Error("farr");if(e&64)return d!==0||e&2048||ne(a,e|2048),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=
+k,f<g&&(c[f+b]=h[k],delete h[k]);e=e&-16760833|(g&1023)<<14;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-16760833|(k&1023)<<14}}}e|=64;d===0&&(e|=2048);ne(a,e);return a}
function Of(){if(hd)throw Error("carr");Xd(fe,5)}
;function Pf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[L]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Qf(a,c,!1,b&&!(c&16)):(oe(a,34),c&4&&Object.freeze(a)));return a}if(a!=null&&a[ge]===qe)return b=a.D,c=b[L]|0,re(a,c)?a:Rf(a,b,c)?Sf(a,b):Qf(b,c);if(a instanceof Pd)return a}
function Sf(a,b,c){a=new a.constructor(b);c&&(a.h=se);a.i=se;return a}
function Qf(a,b,c,d){d!=null||(d=!!(34&b));a=Gf(a,b,Pf,d);d=32;c&&(d|=2);b=b&16769217|d;ne(a,b);return a}
function Tf(a){var b=a.D,c=b[L]|0;return re(a,c)?Rf(a,b,c)?Sf(a,b,!0):new a.constructor(Qf(b,c,!1)):a}
function Uf(a){if(a.h!==se)return!1;var b=a.D;b=Qf(b,b[L]|0);oe(b,2048);a.D=b;a.h=void 0;a.i=void 0;return!0}
function Vf(a){if(!Uf(a)&&re(a,a.D[L]|0))throw Error();}
function Wf(a,b){b===void 0&&(b=a[L]|0);b&32&&!(b&4096)&&ne(a,b|4096)}
function Rf(a,b,c){return c&2?!0:c&32&&!(c&4096)?(ne(b,c|2),a.h=se,!0):!1}
;var Xf=Ge(0),Yf={};function Zf(a,b,c,d,e){Object.isExtensible(a);b=$f(a.D,b,c,e);if(b!==null||d&&a.i!==se)return b}
function $f(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function ag(a,b,c,d){Vf(a);var e=a.D;bg(e,e[L]|0,b,c,d);return a}
function bg(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[L]|0)>>14&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function cg(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function dg(a){return te(a,!0)}
function eg(a){a=Zf(a,1,void 0,void 0,dg);return a==null?Rd():a}
function fg(a,b,c){Vf(a);var d=a.D,e=d[L]|0;if(b==null)return bg(d,e,3),a;if(!Array.isArray(b))throw Wd();var f=b===le?7:b[L]|0,g=f,h=cg(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ye(b),g=0,f=gg(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Ye(b),g=0,f=gg(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=Ye(b),f=gg(f,e)),ne(b,f));bg(d,e,3,b);return a}
function hg(a,b,c,d){Vf(a);var e=a.D;bg(e,e[L]|0,b,c===""?void 0:c,d);return a}
function ig(a,b,c,d){Vf(a);a=a.D;var e=a[L]|0;if(d==null){var f=jg(a);if(kg(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=jg(a);var g=kg(f,a,e,c);g!==b&&(g&&(e=bg(a,e,g)),f.set(c,b))}bg(a,e,b,d)}
function jg(a){if(Yd){var b;return(b=a[ae])!=null?b:a[ae]=new Map}if(ae in a)return a[ae];b=new Map;Object.defineProperty(a,ae,{value:b});return b}
function kg(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];$f(b,g)!=null&&(e!==0&&(c=bg(b,c,e)),e=g)}a.set(d,e);return e}
function lg(a,b,c,d,e){var f=!1;d=$f(a,d,e,function(g){var h=Af(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!re(d)&&Wf(a,b),d}
function mg(a,b,c,d){var e=a.D,f=e[L]|0;b=lg(e,f,b,c,d);if(b==null)return b;f=e[L]|0;if(!re(a,f)){var g=Tf(b);g!==b&&(Uf(a)&&(e=a.D,f=e[L]|0),b=g,f=bg(e,f,c,b,d),Wf(e,f))}return b}
function Lc(a,b,c){var d=void 0===ue?2:4;var e=a.D,f=e,g=e[L]|0,h=re(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Uf(a)&&(f=a.D,g=f[L]|0);a=$f(f,c);h=Array.isArray(a)?a:le;var l=h===le?7:h[L]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var n=h,r=g,t=!!(2&m);t&&(r|=2);for(var w=!t,z=!0,x=0,H=0;x<n.length;x++){var G=Af(n[x],b,r);if(G instanceof b){if(!t){var V=re(G);w&&(w=!V);z&&(z=V)}n[H++]=G}}H<x&&(n.length=H);m|=4;m=z?m&-4097:m|4096;m=w?m|8:m&-9}m!==l&&(ne(h,m),2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&
(e===1||(e!==4?0:2&m||!(16&m)&&32&g)))){cg(m)&&(h=Ye(h),m=gg(m,g),g=bg(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=Tf(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;ne(h,m)}b=h;k=h=m;e===1||(e!==4?0:2&h||!(16&h)&&32&g)?cg(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&ne(b,h),Object.freeze(b)):(e===2&&cg(h)&&(b=Ye(b),k=0,h=gg(h,g),g=bg(f,g,c,b)),cg(h)||(d||(h|=16),h!==k&&ne(b,h)));2&h||!(4096&h||16&h)||Wf(f,g);return b}
function ng(a,b){a!=null?zf(a,b):a=void 0;return a}
function og(a,b,c,d,e){d=ng(d,b);ag(a,c,d,e);d&&!re(d)&&Wf(a.D);return a}
function pg(a,b,c,d){Vf(a);var e=a.D,f=e[L]|0;if(d==null)return bg(e,f,c),a;if(!Array.isArray(d))throw Wd();for(var g=d===le?7:d[L]|0,h=g,k=cg(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];zf(t,b);k||(t=re(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g&-4097:g|4096);l&&g===h||(d=Ye(d),h=0,g=gg(g,f));g!==h&&ne(d,g);f=bg(e,f,c,d);2&g||!(4096&g||16&g)||Wf(e,f);return a}
function gg(a,b){return a=(2&b?a|2:a&-3)&-273}
function Nc(a,b,c){c=c===void 0?0:c;a=kf(Zf(a,b));return a!=null?a:c}
function qg(a,b){var c=c===void 0?0:c;a=lf(Zf(a,b));return a!=null?a:c}
function rg(a,b,c){c=c===void 0?Xf:c;a=Zf(a,b);b=typeof a;a=a==null?a:b==="bigint"?Ge(Ze(64,a)):gf(a)?b==="string"?pf(a):qf(a):void 0;return a!=null?a:c}
function sg(a,b,c,d){c=c===void 0?"":c;var e;return(e=yf(Zf(a,b,d)))!=null?e:c}
function tg(a){var b=b===void 0?0:b;a=Zf(a,1);a=a==null?a:bf(a)?a|0:void 0;return a!=null?a:b}
function ug(a,b,c){return ag(a,b,xf(c))}
function vg(a,b,c){if(c!=null){if(!bf(c))throw Wd("enum");c|=0}return ag(a,b,c)}
;function wg(a,b){this.i=a>>>0;this.h=b>>>0}
function xg(a){if(!a)return yg||(yg=new wg(0,0));if(!/^\d+$/.test(a))return null;Xe(a);return new wg(Ne,Oe)}
var yg;function zg(a,b){this.i=a>>>0;this.h=b>>>0}
function Ag(a){if(!a)return Bg||(Bg=new zg(0,0));if(!/^-?\d+$/.test(a))return null;Xe(a);return new zg(Ne,Oe)}
var Bg;function Cg(){this.h=[]}
Cg.prototype.length=function(){return this.h.length};
Cg.prototype.end=function(){var a=this.h;this.h=[];return a};
function Dg(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Eg(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
Cg.prototype.writeUint8=function(a){this.h.push(a>>>0&255)};
function Fg(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
Cg.prototype.writeInt8=function(a){this.h.push(a>>>0&255)};function Gg(){this.j=[];this.i=0;this.h=new Cg}
function Hg(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Ig(a,b){Eg(a.h,b*8+2);b=a.h.end();Hg(a,b);b.push(a.i);return b}
function Jg(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Kg(a,b,c){if(c!=null){switch(typeof c){case "string":xg(c)}Eg(a.h,b*8+1);switch(typeof c){case "number":a=a.h;Qe(c);Fg(a,Ne);Fg(a,Oe);break;case "bigint":c=BigInt.asUintN(64,c);c=new wg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));a=a.h;b=c.h;Fg(a,c.i);Fg(a,b);break;default:c=xg(c),a=a.h,b=c.h,Fg(a,c.i),Fg(a,b)}}}
function Lg(a,b,c){Eg(a.h,b*8+2);Eg(a.h,c.length);Hg(a,a.h.end());Hg(a,c)}
;function Mg(){function a(){throw Error();}
Object.setPrototypeOf(a,a.prototype);return a}
var Ng=Mg(),Og=Mg(),Pg=Mg(),Qg=Mg(),Rg=Mg(),Sg=Mg(),Tg=Mg();function N(a,b,c){this.D=M(a,b,c)}
N.prototype.toJSON=function(){return Kf(this)};
N.prototype.serialize=function(a){return JSON.stringify(Kf(this,a))};
function Ug(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");oe(b,32);return new a(b)}
N.prototype.clone=function(){var a=this.D,b=a[L]|0;return Rf(this,a,b)?Sf(this,a,!0):new this.constructor(Qf(a,b,!1))};
N.prototype[ge]=qe;N.prototype.toString=function(){return this.D.toString()};function Vg(a,b){this.cd=a;a=$a(Ng);this.h=!!a&&b===a||!1}
function Wg(a){var b=b===void 0?Ng:b;return new Vg(a,b)}
function Xg(a,b,c,d,e){b=Yg(b,d);b!=null&&(c=Ig(a,c),e(b,a),Jg(a,c))}
var Zg=Wg(Xg),$g=Wg(Xg),ah=Symbol(),bh=Symbol(),ch,dh;
function eh(a){var b=fh,c=gh,d=a[ah];if(d)return d;d={};d.Ni=a;d.Yd=Nf(a[0]);var e=a[1],f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Ff=!0,ch!=null||(ch=e),dh!=null||(dh=a[f+1]),e=a[f+=2]));for(var g={};e&&hh(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);var k=void 0;if(e instanceof Vg)var l=e;else l=Zg,f--;e=void 0;if((e=l)==null?0:e.h){e=a[++f];k=a;var m=f;typeof e==="function"&&(e=e(),k[m]=e);k=
e}e=a[++f];m=h+1;typeof e==="number"&&e<0&&(m-=e,e=a[++f]);for(;h<m;h++){var n=g[h];k?c(d,h,l,k,n):b(d,h,l,n)}}return a[ah]=d}
function hh(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function Yg(a,b){if(a instanceof N)return a.D;if(Array.isArray(a))return M(a,b[0],b[1],2)}
;function fh(a,b,c){a[b]=c.cd}
function gh(a,b,c,d){var e,f,g=c.cd;a[b]=function(h,k,l){return g(h,k,l,f||(f=eh(d).Yd),e||(e=ih(d)))}}
function ih(a){var b=a[bh];if(!b){var c=eh(a);b=function(d,e){return jh(d,e,c)};
a[bh]=b}return b}
function jh(a,b,c){ve(a,a[L]|0,function(d,e){if(e!=null){var f=kh(c,d);f?f(b,e,d):d<500||Xd(ee,3)}});
(a=Df(a))&&a.rf(function(d,e,f){Hg(b,b.h.end());for(d=0;d<f.length;d++)Hg(b,Ud(f[d])||new Uint8Array(0))})}
function kh(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof Vg?c:[$g,c]:[c,void 0];var d=c[0].cd;if(c=c[1]){var e=ih(c),f=eh(c).Yd;c=a.Ff?dh(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;
return a[b]=c}}
;function lh(a,b,c){if(Array.isArray(b)){var d=b[L]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&ne(b,a);c&&a&2&&Object.freeze(b);return b}}
function mh(a,b,c){b=b==null||typeof b==="number"?b:b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;b!=null&&(Eg(a.h,c*8+1),a=a.h,c=Pe||(Pe=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Ne=c.getUint32(0,!0),Oe=c.getUint32(4,!0),Fg(a,Ne),Fg(a,Oe))}
function nh(a,b,c){b=uf(b);if(b!=null){switch(typeof b){case "string":Ag(b)}if(b!=null)switch(Eg(a.h,c*8),typeof b){case "number":a=a.h;Re(b);Dg(a,Ne,Oe);break;case "bigint":c=BigInt.asUintN(64,b);c=new zg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Dg(a.h,c.i,c.h);break;default:c=Ag(b),Dg(a.h,c.i,c.h)}}}
function oh(a,b,c){b=kf(b);if(b!=null&&b!=null)if(Eg(a.h,c*8),a=a.h,c=b,c>=0)Eg(a,c);else{for(b=0;b<9;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}
function ph(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Eg(a.h,c*8),a.h.h.push(b?1:0))}
function qh(a,b,c){b=yf(b);b!=null&&Lg(a,c,dd(b))}
function rh(a,b,c,d,e){b=Yg(b,d);b!=null&&(c=Ig(a,c),e(b,a),Jg(a,c))}
var sh=new Vg(mh,Tg),th=new Vg(mh,Tg),uh=new Vg(nh,Rg),vh=new Vg(nh,Rg),wh=new Vg(oh,Qg),xh=new Vg(oh,Qg),yh;yh=new Vg(function(a,b,c){Kg(a,c,vf(b))},Sg);
var zh;zh=new Vg(function(a,b,c){b=lh(vf,b,!1);if(b!=null)for(var d=0;d<b.length;d++)Kg(a,c,b[d])},Sg);
var Ah=new Vg(ph,Og),Bh=new Vg(ph,Og),Ch=new Vg(qh,Pg),Dh;Dh=new Vg(function(a,b,c){b=lh(yf,b,!0);if(b!=null)for(var d=0;d<b.length;d++){var e=a,f=c,g=b[d];g!=null&&Lg(e,f,dd(g))}},Pg);
var Eh=new Vg(qh,Pg),Fh,Gh=void 0;Gh=Gh===void 0?Ng:Gh;Fh=new Vg(function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)rh(a,b[f],c,d,e);a=b[L]|0;a&1||ne(b,a|1)}},Gh);
var Hh=Wg(rh);function Ih(){var a=Jh;this.ctor=Kh;this.isRepeated=0;this.h=mg;this.defaultValue=void 0;this.i=a.Nf!=null?we:void 0}
Ih.prototype.register=function(){sd(this)};function Lh(a){return function(b){return Ug(a,b)}}
;function Mh(a){this.D=M(a)}
v(Mh,N);function Nh(a,b){return fg(a,b,hf)}
;function Oh(a){this.D=M(a)}
v(Oh,N);var Ph=[1,2,3];var Qh=[0,Ph,Eh,xh,Bh];var Rh=[0,Fh,[0,sh,uh]];function Sh(a){this.D=M(a)}
v(Sh,N);var Th=[1,2,3];var Uh=[0,Th,vh,th,Hh,Rh];function Vh(a){this.D=M(a)}
v(Vh,N);var Wh=[0,Fh,Qh,Uh];var Xh=[0,Ch];function Yh(a){this.D=M(a)}
v(Yh,N);var Zh=[0,Ch,-1,Ah];var $h=[0,Ch,-1,wh,Ah];function ai(a){this.D=M(a)}
v(ai,N);var bi=[1,2,3];var ci=[0,bi,Hh,Zh,Hh,$h,Hh,Xh];function di(a){this.D=M(a)}
v(di,N);di.prototype.j=function(a){return function(){var b=new Gg;jh(this.D,b,eh(a));Hg(b,b.h.end());for(var c=new Uint8Array(b.i),d=b.j,e=d.length,f=0,g=0;g<e;g++){var h=d[g];c.set(h,f);f+=h.length}b.j=[c];return c}}([0,
Ch,ci,Dh,Fh,Wh,yh,zh]);function ei(a){this.D=M(a)}
v(ei,N);function fi(a){var b=new di;b=ug(b,1,a.i);var c=gi(a);b=fg(b,c,wf);c=[];for(var d=[],e=y(a.h.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var g=a.o,h=a.md(f)||[],k=[],l=0;l<h.length;l++){var m=h[l],n=m&&m.h;m=new Sh;switch(g){case 3:n=Number(n);Number.isFinite(n)&&ig(m,1,Th,sf(n));break;case 2:n=Number(n);if(n!=null&&typeof n!=="number")throw Error("Value of float/double field must be a number, found "+typeof n+": "+n);ig(m,2,Th,n)}k.push(m)}g=
k;for(h=0;h<g.length;h++){k=g[h];l=new Vh;k=og(l,Sh,2,k);l=[];m=hi(a);for(n=0;n<m.length;n++){var r=m[n],t=f[n],w=new Oh;switch(r){case 3:ig(w,1,Ph,xf(String(t)));break;case 2:r=Number(t);Number.isFinite(r)&&ig(w,2,Ph,jf(r));break;case 1:ig(w,3,Ph,ef(t==="true"))}l.push(w)}pg(k,Oh,1,l);c.push(k)}}pg(b,Vh,4,c);return b}
;function ii(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function ji(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],z=e[2],x=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var G=x^w&(z^x);var V=1518500249}else G=w^z^x,V=1859775393;else t<60?(G=w&z|x&(w|z),V=2400959708):(G=w^z^x,V=3395469782);G=((n<<5|n>>>27)&4294967295)+G+H+V+r[t]&4294967295;H=x;x=z;z=(w<<30|w>>>2)&4294967295;w=n;n=G}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+H&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,z=n.length;w<z;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Xe:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function ki(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,ni(ii(d),a,c||null)].join(" "):null}
function ni(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Sb(d,function(h){e.push(h)}),oi(e.join(" "));
var f=[],g=[];Sb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Sb(d,function(h){e.push(h)});
a=oi(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function oi(a){var b=ji();b.update(a);return b.Xe().toLowerCase()}
;function pi(a){this.h=a||{cookie:""}}
p=pi.prototype;p.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{maxAge:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.sameSite;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.maxAge}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?
";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=jb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{maxAge:0,path:b,domain:c});return d};
p.dc=function(){return qi(this).keys};
p.bb=function(){return qi(this).values};
p.clear=function(){for(var a=qi(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function qi(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=jb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ri=new pi(typeof document=="undefined"?null:document);function si(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new pi(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function ti(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new pi(document)).get(b));return a?ki(a,c,d):null}
function ui(a){var b=ii(D==null?void 0:D.location.href),c=[];if(si()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new pi(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?ki(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=ti("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=ti("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function vi(){}
vi.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
vi.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function wi(a){this.D=M(a)}
v(wi,N);function xi(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
xi.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
xi.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
xi.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
xi.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function yi(a){this.D=M(a)}
v(yi,N);function zi(a){this.D=M(a)}
v(zi,N);function Ai(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Ai.prototype;p.clone=function(){return new Ai(this.x,this.y)};
p.equals=function(a){return a instanceof Ai&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Bi(a,b){this.width=a;this.height=b}
p=Bi.prototype;p.clone=function(){return new Bi(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Ci(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Di(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ei(a){var b=Fi,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Gi(a){for(var b in a)return!1;return!0}
function Hi(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ii(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Ji(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Ki(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Li(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Li(a[c]);return b}
var Mi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ni(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Mi.length;f++)c=Mi[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Oi(a,b){this.h=a===Pi&&b||""}
Oi.prototype.toString=function(){return this.h};
var Pi={};new Oi(Pi,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Qi(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Ri(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Si(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ti(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Ui(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Vi(a){this.D=M(a)}
v(Vi,N);Vi.prototype.Gc=function(){return tg(this)};function Wi(a){this.D=M(a)}
v(Wi,N);function Xi(a){this.D=M(a)}
v(Xi,N);function Yi(a){pg(Zi,Wi,1,a)}
var $i=Lh(Xi);function aj(a){this.D=M(a)}
v(aj,N);var bj=["platform","platformVersion","architecture","model","uaFullVersion"],Zi=new Xi,cj=null;function dj(a,b){b=b===void 0?bj:b;if(!cj){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));Yi((a.brands||[]).map(function(e){var f=new Wi;f=ug(f,1,e.brand);return ug(f,2,e.version)}));
typeof a.mobile==="boolean"&&ag(Zi,2,ef(a.mobile));cj=a.getHighEntropyValues(b)}var d=new Set(b);return cj.then(function(e){var f=Zi.clone();d.has("platform")&&ug(f,3,e.platform);d.has("platformVersion")&&ug(f,4,e.platformVersion);d.has("architecture")&&ug(f,5,e.architecture);d.has("model")&&ug(f,6,e.model);d.has("uaFullVersion")&&ug(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return Zi.serialize()})}
;function ej(a){this.D=M(a)}
v(ej,N);function fj(a){return vg(a,1,1)}
;function gj(a){this.D=M(a,4)}
v(gj,N);function hj(a){this.D=M(a,36)}
v(hj,N);function ij(a){this.D=M(a,19)}
v(ij,N);ij.prototype.oc=function(a){return vg(this,2,a)};function jj(a,b){this.Sa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new ij;Number.isInteger(a)&&this.h.oc(a);b||(this.locale=document.documentElement.getAttribute("lang"));kj(this,new ej)}
jj.prototype.oc=function(a){this.h.oc(a);return this};
function kj(a,b){og(a.h,ej,1,b);tg(b)||fj(b);a.Sa||(b=lj(a),sg(b,5)||ug(b,5,a.locale));a.j&&(b=lj(a),mg(b,Xi,9)||og(b,Xi,9,a.j))}
function mj(a,b){a.i=b}
function nj(a){var b=b===void 0?bj:b;var c=a.Sa?void 0:window;c?dj(c,b).then(function(d){a.j=$i(d!=null?d:"[]");d=lj(a);og(d,Xi,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function lj(a){var b=mg(a.h,ej,1);b||(b=new ej,kj(a,b));a=b;b=mg(a,aj,11);b||(b=new aj,og(a,aj,11,b));return b}
function oj(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Sa){var h=lj(a);var k=new Vi;k=vg(k,1,a.i);k=ag(k,2,ef(a.isFinal));d=ag(k,3,jf(d>0?d:void 0));d=ag(d,4,jf(f>0?f:void 0));d=ag(d,5,jf(g>0?g:void 0));f=d.D;g=f[L]|0;d=re(d,g)?d:Rf(d,f,g)?Sf(d,f):new d.constructor(Qf(f,g,!0));og(h,Vi,10,d)}a=a.h.clone();h=Date.now().toString();a=ag(a,4,sf(h));b=b.slice();b=pg(a,hj,3,b);e&&(a=new yi,e=ag(a,13,jf(e)),a=new zi,e=og(a,yi,2,e),a=new gj,
e=og(a,zi,1,e),e=vg(e,2,9),og(b,gj,18,e));c&&ag(b,14,sf(c));return b}
;var pj=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function qj(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.H=c||0;this.B=d||2}
qj.prototype.i=0;qj.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
qj.prototype.getValue=function(){return this.j};
function rj(a){a.h=Math.min(a.u,a.h*a.B);a.j=Math.min(a.u,a.h+(a.H?Math.round(a.H*(Math.random()-.5)*2*a.h):0));a.i++}
;function Jh(a){this.D=M(a,8)}
v(Jh,N);var sj=Lh(Jh);function Kh(a){this.D=M(a)}
v(Kh,N);var tj;tj=new Ih;function uj(a){J.call(this);var b=this;this.componentId="";this.h=[];this.Wa="";this.pageId=null;this.lb=this.na=-1;this.G=this.experimentIds=null;this.B=this.o=0;this.V=null;this.ba=this.ha=0;this.Ub=1;this.timeoutMillis=0;this.za=!1;this.logSource=a.logSource;this.Eb=a.Eb||function(){};
this.j=new jj(a.logSource,a.Sa);this.network=a.network||null;this.wb=a.wb||null;this.bufferSize=1E3;this.J=a.Eg||null;this.sessionIndex=a.sessionIndex||null;this.ac=a.ac||!1;this.logger=null;this.withCredentials=!a.hd;this.Sa=a.Sa||!1;this.aa=!this.Sa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Va=typeof URLSearchParams!=="undefined"&&!!(new URL(vj())).searchParams&&!!(new URL(vj())).searchParams.set;var c=fj(new ej);kj(this.j,c);this.u=new qj(1E4,3E5,.1);a=wj(this,a.Jd);
this.i=new xi(this.u.getValue(),a);this.Ga=new xi(6E5,a);this.ac||this.Ga.start();this.Sa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){xj(b);var d;(d=b.V)==null||d.flush()}}),document.addEventListener("pagehide",function(){xj(b);
var d;(d=b.V)==null||d.flush()}))}
v(uj,J);function wj(a,b){return a.Va?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
uj.prototype.X=function(){xj(this);this.i.stop();this.Ga.stop();J.prototype.X.call(this)};
function yj(a){a.J||(a.J=vj());try{return(new URL(a.J)).toString()}catch(b){return(new URL(a.J,window.location.origin)).toString()}}
function zj(a,b,c){a.V&&a.V.Ia(b,c)}
uj.prototype.log=function(a){zj(this,2,1);if(this.Va){a=a.clone();var b=this.Ub++;a=ag(a,21,sf(b));this.componentId&&ug(a,26,this.componentId);b=a;var c=Zf(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Ze(64,c)):gf(c)?e==="string"?nf(c):d?of(c):rf(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",ag(b,1,sf(d)));d=Zf(b,15);d!=null&&(typeof d==="bigint"?Me(d)?d=Number(d):(d=Ze(64,d),d=Me(d)?Number(d):String(d)):d=gf(d)?typeof d==="number"?rf(d):nf(d):
void 0);d==null&&ag(b,15,sf((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),og(b,wi,16,d));zj(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,zj(this,3,b));this.h.push(a);this.ac||this.i.enabled||this.i.start()}};
uj.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.za&&this.aa)this.j.i=3,Aj(this);else{var d=Date.now();if(this.lb>d&&this.na<d)b&&b("throttled");else{this.network&&(typeof this.network.Gc==="function"?mj(this.j,this.network.Gc()):this.j.i=0);var e=this.h.length,f=oj(this.j,this.h,this.o,this.B,this.wb,this.ha,this.ba),g=this.Eb();if(g&&this.Wa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Bj(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var w=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=sj(w)}catch(H){}if(t){r=Number(rg(t,1,Ge("-1")));r>0&&(c.na=Date.now(),c.lb=c.na+r);r=$a(be);var z;Yd&&r&&((z=t.D[r])==null?void 0:z[175237375])!=null&&Xd(ce,3);a:{var x=x===void 0?!1:x;if($a(ie)&&$a(be)&&void 0===ie){z=t.D;r=z[be];if(!r)break a;if(r=r.oj)try{r(z,175237375,Ef);break a}catch(H){ed(H)}}x&&(x=t.D,(z=$a(be))&&
z in x&&(x=x[z])&&delete x[175237375])}x=tj.ctor?tj.h(t,tj.ctor,175237375,tj.i):tj.h(t,175237375,null,tj.i);if(x=x===null?void 0:x)x=Nc(x,1,-1),x!==-1&&(c.u=new qj(x<1?1:x,3E5,.1),c.i.setInterval(c.u.getValue()))}}a&&a();c.B=0},m=function(r,t){var w=Lc(f,hj,3);
var z=Number(rg(f,14));rj(c.u);c.i.setInterval(c.u.getValue());r===401&&g&&(c.Wa=g);z&&(c.o+=z);t===void 0&&(t=c.isRetryable(r));t&&(c.h=w.concat(c.h),c.ac||c.i.enabled||c.i.start());zj(c,7,1);b&&b("net-send-failed",r);++c.B},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){zj(c,5,e);k.Vc["Content-Encoding"]="gzip";k.Vc["Content-Type"]="application/binary";k.body=r;k.Pe=2;n()},function(){zj(c,6,e);
n()}):n()}}}};
function Bj(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(yj(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,Pe:1,Vc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function xj(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Aj(a){Cj(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.aa=!1);return d})}
function Cj(a,b){if(a.h.length!==0){var c=new URL(yj(a));c.searchParams.delete("format");var d=a.Eb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=oj(a.j,e,a.o,a.B,a.wb,a.ha,a.ba);if(!b(c.toString(),f)){++a.B;break}a.o=0;a.B=0;a.ha=0;a.ba=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
uj.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function vj(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Dj(){this.Ie=typeof AbortController!=="undefined"}
Dj.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return B(function(w){switch(w.h){case 1:return f=(e=d.Ie?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,xa(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Vc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.A(3);break}if((l=b)==null){w.A(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:Aa(w);clearTimeout(f);Ba(w,0);break;case 2:m=za(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.A(3)}})};
Dj.prototype.Gc=function(){return 4};function Ej(a,b){b=b===void 0?"0":b;J.call(this);this.logSource=a;this.sessionIndex=b;this.ab="https://play.google.com/log?format=json&hasfast=true";this.buildLabel=null;this.j=!1;this.network=null;this.componentId="";this.h=this.wb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0}
v(Ej,J);function Fj(a,b){a.buildLabel=b;return a}
function Gj(a,b){a.network=b;return a}
function Hj(a,b){a.h=b}
function Ij(a){a.i=!0;return a}
Ej.prototype.hd=function(){this.o=!0;return this};
function Jj(a){a.network||(a.network=new Dj);var b=new uj({logSource:a.logSource,Eb:a.Eb?a.Eb:ui,sessionIndex:a.sessionIndex,Eg:a.ab,Sa:a.j,ac:!1,hd:a.o,Jd:a.Jd,network:a.network});Ac(a,b);if(a.buildLabel){var c=a.buildLabel,d=lj(b.j);ug(d,7,c)}b.G=new vi;a.componentId&&(b.componentId=a.componentId);a.wb&&(b.wb=a.wb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new wi),c=b.experimentIds,d=d.serialize(),ug(c,4,d)):b.experimentIds&&ag(b.experimentIds,4));a.i&&(b.za=
b.aa);nj(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.oc&&a.network.oc(a.logSource);a.network.rg&&a.network.rg(b);return b}
;function Kj(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;J.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Ej(a,"0"),a.componentId=b,Ac(this,a),c!==""&&(a.ab=c),d&&(a.j=!0),e&&Fj(a,e),g&&Gj(a,g),b=Jj(a));this.h=b}
v(Kj,J);Kj.prototype.flush=function(a){var b=a||[];if(b.length){a=new ei;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=fi(e);c.push(f);e.clear()}pg(a,di,1,c);b=this.h;if(a instanceof hj)b.log(a);else try{var g=new hj,h=a.serialize();var k=ug(g,8,h);b.log(k)}catch(l){zj(b,4,1)}this.h.flush()}};function Lj(a){this.h=a}
;function Mj(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function hi(a){return a.fields.map(function(b){return b.fieldType})}
function gi(a){return a.fields.map(function(b){return b.fieldName})}
p=Mj.prototype;p.Je=function(a){var b=C.apply(1,arguments),c=this.md(b);c?c.push(new Lj(a)):this.oe(a,b)};
p.oe=function(a){var b=this.Id(C.apply(1,arguments));this.h.set(b,[new Lj(a)])};
p.md=function(){var a=this.Id(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.tf=function(){var a=this.md(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Id=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function Nj(a,b){Mj.call(this,a,3,b)}
v(Nj,Mj);Nj.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.tf(b);d&&(c=d.h);this.oe(c+a,b)};function Oj(a,b){Mj.call(this,a,2,b)}
v(Oj,Mj);Oj.prototype.record=function(a){this.Je(a,C.apply(1,arguments))};function Pj(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Pj.prototype.stopPropagation=function(){this.j=!0};
Pj.prototype.preventDefault=function(){this.defaultPrevented=!0};function Qj(a,b){Pj.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(Qj,Pj);
Qj.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Qj.Ca.preventDefault.call(this)};
Qj.prototype.stopPropagation=function(){Qj.Ca.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Qj.prototype.preventDefault=function(){Qj.Ca.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Rj="closure_listenable_"+(Math.random()*1E6|0);var Sj=0;function Tj(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++Sj;this.nc=this.zc=!1}
function Uj(a){a.nc=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function Vj(a){this.src=a;this.listeners={};this.h=0}
Vj.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Wj(a,b,d,e);g>-1?(b=a[g],c||(b.zc=!1)):(b=new Tj(b,this.src,f,!!d,e),b.zc=c,a.push(b));return b};
Vj.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Wj(e,b,c,d);return b>-1?(Uj(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Xj(a,b){var c=b.type;c in a.listeners&&Xb(a.listeners[c],b)&&(Uj(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Wj(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.nc&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var Yj="closure_lm_"+(Math.random()*1E6|0),Zj={},ak=0;function bk(a,b,c,d,e){if(d&&d.once)ck(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)bk(a,b[f],c,d,e);else c=dk(c),a&&a[Rj]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):ek(a,b,c,!1,d,e)}
function ek(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=fk(a);h||(a[Yj]=h=new Vj(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=gk();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)pj||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hk(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ak++}}
function gk(){function a(c){return b.call(a.src,a.listener,c)}
var b=ik;return a}
function ck(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ck(a,b[f],c,d,e);else c=dk(c),a&&a[Rj]?jk(a,b,c,Oa(d)?!!d.capture:!!d,e):ek(a,b,c,!0,d,e)}
function kk(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)kk(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=dk(c),a&&a[Rj])?a.i.remove(String(b),c,d,e):a&&(a=fk(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Wj(b,c,d,e)),(c=a>-1?b[a]:null)&&lk(c))}
function lk(a){if(typeof a!=="number"&&a&&!a.nc){var b=a.src;if(b&&b[Rj])Xj(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hk(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ak--;(c=fk(b))?(Xj(c,a),c.h==0&&(c.src=null,b[Yj]=null)):Uj(a)}}}
function hk(a){return a in Zj?Zj[a]:Zj[a]="on"+a}
function ik(a,b){if(a.nc)a=!0;else{b=new Qj(b,this);var c=a.listener,d=a.handler||a.src;a.zc&&lk(a);a=c.call(d,b)}return a}
function fk(a){a=a[Yj];return a instanceof Vj?a:null}
var mk="__closure_events_fn_"+(Math.random()*1E9>>>0);function dk(a){if(typeof a==="function")return a;a[mk]||(a[mk]=function(b){return a.handleEvent(b)});
return a[mk]}
;function nk(){J.call(this);this.i=new Vj(this);this.za=this;this.ba=null}
ab(nk,J);nk.prototype[Rj]=!0;p=nk.prototype;p.addEventListener=function(a,b,c,d){bk(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){kk(this,a,b,c,d)};
function ok(a,b){var c=a.ba;if(c){var d=[];for(var e=1;c;c=c.ba)d.push(c),++e}a=a.za;c=b.type||b;typeof b==="string"?b=new Pj(b,a):b instanceof Pj?b.target=b.target||a:(e=b,b=new Pj(c,a),Ni(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=pk(g,c,!0,b)&&e}b.j||(g=b.h=a,e=pk(g,c,!0,b)&&e,b.j||(e=pk(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=pk(g,c,!1,b)&&e}
p.X=function(){nk.Ca.X.call(this);this.removeAllListeners();this.ba=null};
p.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function jk(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
p.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Uj(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function pk(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.nc&&g.capture==c){var h=g.listener,k=g.handler||g.src;g.zc&&Xj(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var qk=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function rk(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
rk.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function sk(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function tk(){this.i=this.h=null}
tk.prototype.add=function(a,b){var c=uk.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
tk.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var uk=new rk(function(){return new vk},function(a){return a.reset()});
function vk(){this.next=this.scope=this.h=null}
vk.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
vk.prototype.reset=function(){this.next=this.scope=this.h=null};var wk,xk=!1,yk=new tk;function zk(a,b){wk||Ak();xk||(wk(),xk=!0);yk.add(a,b)}
function Ak(){var a=Promise.resolve(void 0);wk=function(){a.then(Bk)}}
function Bk(){for(var a;a=yk.remove();){try{a.h.call(a.scope)}catch(b){ed(b)}sk(uk,a)}xk=!1}
;function Ck(){}
function Dk(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ek(a){this.Z=0;this.ib=void 0;this.Cb=this.Ya=this.parent_=null;this.Hc=this.kd=!1;if(a!=Ck)try{var b=this;a.call(void 0,function(c){Fk(b,2,c)},function(c){Fk(b,3,c)})}catch(c){Fk(this,3,c)}}
function Gk(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Gk.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Hk=new rk(function(){return new Gk},function(a){a.reset()});
function Ik(a,b,c){var d=Hk.get();d.i=a;d.h=b;d.context=c;return d}
function Jk(a){return new Ek(function(b,c){c(a)})}
Ek.prototype.then=function(a,b,c){return Kk(this,qk(typeof a==="function"?a:null),qk(typeof b==="function"?b:null),c)};
Ek.prototype.$goog_Thenable=!0;function Lk(a,b,c,d){Mk(a,Ik(b||Ck,c||null,d))}
p=Ek.prototype;p.finally=function(a){var b=this;a=qk(a);return new Ek(function(c,d){Lk(b,function(e){a();c(e)},function(e){a();
d(e)})})};
p.bd=function(a,b){return Kk(this,null,qk(a),b)};
p.catch=Ek.prototype.bd;p.cancel=function(a){if(this.Z==0){var b=new Nk(a);zk(function(){Ok(this,b)},this)}};
function Ok(a,b){if(a.Z==0)if(a.parent_){var c=a.parent_;if(c.Ya){for(var d=0,e=null,f=null,g=c.Ya;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.Z==0&&d==1?Ok(c,b):(f?(d=f,d.next==c.Cb&&(c.Cb=d),d.next=d.next.next):Pk(c),Qk(c,e,3,b)))}a.parent_=null}else Fk(a,3,b)}
function Mk(a,b){a.Ya||a.Z!=2&&a.Z!=3||Rk(a);a.Cb?a.Cb.next=b:a.Ya=b;a.Cb=b}
function Kk(a,b,c,d){var e=Ik(null,null,null);e.child=new Ek(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Nk?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Mk(a,e);return e.child}
p.Cg=function(a){this.Z=0;Fk(this,2,a)};
p.Dg=function(a){this.Z=0;Fk(this,3,a)};
function Fk(a,b,c){if(a.Z==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.Z=1;a:{var d=c,e=a.Cg,f=a.Dg;if(d instanceof Ek){Lk(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if(typeof k==="function"){Sk(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ib=c,a.Z=b,a.parent_=null,Rk(a),b!=3||c instanceof Nk||Tk(a,c))}}
function Sk(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Rk(a){a.kd||(a.kd=!0,zk(a.jf,a))}
function Pk(a){var b=null;a.Ya&&(b=a.Ya,a.Ya=b.next,b.next=null);a.Ya||(a.Cb=null);return b}
p.jf=function(){for(var a;a=Pk(this);)Qk(this,a,this.Z,this.ib);this.kd=!1};
function Qk(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.Hc;a=a.parent_)a.Hc=!1;if(b.child)b.child.parent_=null,Uk(b,c,d);else try{b.j?b.i.call(b.context):Uk(b,c,d)}catch(e){Vk.call(null,e)}sk(Hk,b)}
function Uk(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Tk(a,b){a.Hc=!0;zk(function(){a.Hc&&Vk.call(null,b)})}
var Vk=ed;function Nk(a){ib.call(this,a)}
ab(Nk,ib);Nk.prototype.name="cancel";function Wk(a,b){nk.call(this);this.j=a||1;this.h=b||D;this.o=Xa(this.zg,this);this.u=Za()}
ab(Wk,nk);p=Wk.prototype;p.enabled=!1;p.Fa=null;p.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
p.zg=function(){if(this.enabled){var a=Za()-this.u;a>0&&a<this.j*.8?this.Fa=this.h.setTimeout(this.o,this.j-a):(this.Fa&&(this.h.clearTimeout(this.Fa),this.Fa=null),ok(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.h.setTimeout(this.o,this.j),this.u=Za())};
p.stop=function(){this.enabled=!1;this.Fa&&(this.h.clearTimeout(this.Fa),this.Fa=null)};
p.X=function(){Wk.Ca.X.call(this);this.stop();delete this.h};function Xk(a){J.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Wk(this.flushInterval);this.h.listen("tick",this.Zc,!1,this);Ac(this,this.h)}
v(Xk,J);p=Xk.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Yk(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Zc()}
p.Zc=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Zk(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Wb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Nj(a,b))};
p.ed=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Oj(a,b))};
function $k(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.Tb=function(a){this.He(a,1,C.apply(1,arguments))};
p.He=function(a,b){var c=C.apply(2,arguments),d=$k(this,a);d&&d instanceof Nj&&(d.j(b,c),Yk(this))};
p.record=function(a,b){var c=C.apply(2,arguments),d=$k(this,a);d&&d instanceof Oj&&(d.record(b,c),Yk(this))};
function Zk(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function al(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function bl(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;function cl(a,b,c){c=c===void 0?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c;this.name="RpcError";Object.setPrototypeOf(this,this.constructor.prototype)}
v(cl,Error);cl.prototype.toString=function(){var a="RpcError("+(bl(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};function dl(){}
dl.prototype.serialize=function(a){var b=[];el(this,a,b);return b.join("")};
function el(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),el(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),fl(d,c),c.push(":"),el(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":fl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var gl={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},hl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function fl(a,b){b.push('"',a.replace(hl,function(c){var d=gl[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),gl[c]=d);return d}),'"')}
;function il(){nk.call(this);this.headers=new Map;this.h=!1;this.M=null;this.o=this.aa="";this.j=this.V=this.B=this.J=!1;this.G=0;this.u=null;this.na="";this.ha=!1}
ab(il,nk);var jl=/^https?$/i,kl=["POST","PUT"],ll=[];function ml(a,b,c,d,e,f,g){var h=new il;ll.push(h);b&&h.listen("complete",b);jk(h,"ready",h.Te);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=il.prototype;p.Te=function(){this.dispose();Xb(ll,this)};
p.send=function(a,b,c,d){if(this.M)throw Error("[goog.net.XhrIo] Object is active with another request="+this.aa+"; newUri="+a);b=b?b.toUpperCase():"GET";this.aa=a;this.o="";this.J=!1;this.h=!0;this.M=new XMLHttpRequest;this.M.onreadystatechange=qk(Xa(this.be,this));try{this.getStatus(),this.V=!0,this.M.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();nl(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Rb(kl,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.M.setRequestHeader(d,c);this.na&&(this.M.responseType=this.na);"withCredentials"in this.M&&this.M.withCredentials!==this.ha&&(this.M.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Bg.bind(this),this.G)),
this.getStatus(),this.B=!0,this.M.send(a),this.B=!1}catch(g){this.getStatus(),nl(this,g)}};
p.Bg=function(){typeof Ka!="undefined"&&this.M&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),ok(this,"timeout"),this.abort(8))};
function nl(a,b){a.h=!1;a.M&&(a.j=!0,a.M.abort(),a.j=!1);a.o=b;ol(a);pl(a)}
function ol(a){a.J||(a.J=!0,ok(a,"complete"),ok(a,"error"))}
p.abort=function(){this.M&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.M.abort(),this.j=!1,ok(this,"complete"),ok(this,"abort"),pl(this))};
p.X=function(){this.M&&(this.h&&(this.h=!1,this.j=!0,this.M.abort(),this.j=!1),pl(this,!0));il.Ca.X.call(this)};
p.be=function(){this.P||(this.V||this.B||this.j?ql(this):this.Sf())};
p.Sf=function(){ql(this)};
function ql(a){if(a.h&&typeof Ka!="undefined")if(a.B&&(a.M?a.M.readyState:0)==4)setTimeout(a.be.bind(a),0);else if(ok(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(rl(a))ok(a,"complete"),ok(a,"success");else{try{var b=(a.M?a.M.readyState:0)>2?a.M.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";ol(a)}}finally{pl(a)}}}
function pl(a,b){if(a.M){a.u&&(clearTimeout(a.u),a.u=null);var c=a.M;a.M=null;b||ok(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.M};
p.isComplete=function(){return(this.M?this.M.readyState:0)==4};
function rl(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.aa).match(jc)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!jl.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.M?this.M.readyState:0)>2?this.M.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function sl(){}
sl.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
ml(a.url,function(d){d=d.target;if(rl(d)){try{var e=d.M?d.M.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Vc,a.timeoutMillis,a.withCredentials)};
sl.prototype.Gc=function(){return 1};function tl(a,b){this.logger=a;this.event=b;this.startTime=ul()}
tl.prototype.done=function(){this.logger.rb(this.event,ul()-this.startTime)};
function vl(){Qc.apply(this,arguments)}
v(vl,Qc);function wl(a,b,c){var d=ul();b=b();a.rb(c,ul()-d);return b}
function xl(){vl.apply(this,arguments)}
v(xl,vl);p=xl.prototype;p.hc=function(){};
p.Ka=function(){};
p.rb=function(){};
p.wa=function(){};
p.Ua=function(){};
p.Mc=function(){};
p.Kc=function(){};
p.Lc=function(){};
function yl(a){vl.call(this);var b=this;this.logger=a;this.addOnDisposeCallback(function(){return void b.logger.dispose()})}
v(yl,vl);p=yl.prototype;p.update=function(a){this.logger.dispose();this.logger=a};
p.Ka=function(a){this.logger.Ka(a)};
p.rb=function(a,b){this.logger.rb(a,b)};
p.wa=function(a){this.logger.wa(a)};
p.Ua=function(){this.logger.Ua()};
p.Mc=function(a){this.logger.Mc(a)};
p.Kc=function(a){this.logger.Kc(a)};
p.Lc=function(a){this.logger.Lc(a)};
p.hc=function(a){this.logger.hc(a)};
function zl(a,b,c,d){a=Ij(Gj(Fj(new Ej(1828,"0"),a),new sl)).hd();b.length&&Hj(a,Nh(new Mh,b));d!==void 0&&(a.ab=d);var e=new Kj(1828,"","",!1,"",Jj(a));Ac(e,a);var f=new Xk({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.Zc()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Al(a,b){J.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(Al,J);function Bl(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-ul());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=ul(),a.timer=void 0}},b)}}
function Cl(a,b){vl.call(this);this.metrics=a;this.qa=b}
v(Cl,vl);p=Cl.prototype;p.hc=function(a){this.metrics.vg.record(a,this.qa)};
p.Ka=function(a){this.metrics.eventCount.Ia(a,this.qa)};
p.rb=function(a,b){this.metrics.hf.record(b,a,this.qa)};
p.wa=function(a){this.metrics.errorCount.Ia(a,this.qa)};
p.Mc=function(a){this.metrics.Ig.Ia(a,this.qa)};
p.Kc=function(a){this.metrics.Qe.Ia(a,this.qa)};
p.Lc=function(a){this.metrics.Hg.Ia(a,this.qa)};
function Dl(a,b){b=b===void 0?[]:b;var c={qa:a.qa||"_",ld:a.ld||[],qd:a.qd|0,ab:a.ab,Pc:a.Pc||function(){},
Rb:a.Rb||function(f,g){return zl(f,g,c.Pc,c.ab)}},d=c.Rb("51",c.ld.concat(b));
Cl.call(this,{vg:new Tc(d),errorCount:new Xc(d),eventCount:new Vc(d),hf:new Wc(d),yj:new Uc(d),Ig:new Yc(d),Qe:new Zc(d),Hg:new $c(d)},c.qa);var e=this;this.options=c;this.service=d;this.j=!a.Rb;this.h=new Al(function(){return void e.service.Zc()},c.qd);
this.addOnDisposeCallback(function(){e.h.dispose();e.j&&e.service.dispose()});
b.slice().sort($b)}
v(Dl,Cl);Dl.prototype.Ua=function(){Bl(this.h)};
function ul(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function El(a){this.D=M(a)}
v(El,N);function Fl(a){this.D=M(a)}
v(Fl,N);function Gl(a){this.D=M(a,0,"bfkj")}
v(Gl,N);var Hl=function(a){return xe(function(b){return b instanceof a&&!re(b)})}(Gl);
Gl.Nf="bfkj";function Mc(a){this.D=M(a)}
v(Mc,N);function Il(a){this.D=M(a)}
v(Il,N);var Jl=Lh(Il);function Kl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ll(a,b){if(a.disable)return new xl;b=b?Kc(b):[];a={qa:a.qa,ld:a.lf,qd:a.Of,ab:a.ab,Pc:a.Pc,Rb:a.Rb};b=b===void 0?[]:b;return new Dl(a,b)}
function Ml(a){function b(w,z,x,H){Promise.resolve().then(function(){k.done();h.Ua();h.dispose();g.resolve({Le:w,ug:z,Wf:x,Re:H})})}
function c(w,z,x,H){if(!d.logger.P){var G="k";z?G="h":x&&(G="u");G!=="k"?H!==0&&(d.logger.Ka(G),d.logger.rb(G,w)):d.j<=0?(d.logger.Ka(G),d.logger.rb(G,w),d.j=Math.floor(Math.random()*200)):d.j--}}
J.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.h=new Il;if("challenge"in a&&Hl(a.challenge)){var e=sg(a.challenge,4,void 0,we);var f=sg(a.challenge,5,void 0,we);sg(a.challenge,7,void 0,we)&&(this.h=Jl(sg(a.challenge,7,void 0,we)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var w,z,x;return B(function(H){if(H.h==1)return H.yield(d.i,2);w=H.i;z=w.ug;(x=z)==null||x();H.h=0})});
this.logger=Ll(a.Lb||{},this.h);Ac(this,this.logger);var g=new Kl;this.i=g.promise;this.logger.Ka("t");var h=this.logger.share(),k=new tl(h,"t");if(!D[f])throw this.logger.wa(25),Error("EGOU");if(!D[f].a)throw this.logger.wa(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=Kc(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=Oc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.o=y(l(e,b,!0,a.ye,c,[f,m],sg(this.h,5),!1)).next().value;this.Pb=g.promise.then(function(){})}catch(w){throw this.logger.wa(28),
w;
}}
v(Ml,J);p=Ml.prototype;p.snapshot=function(a){if(this.P)throw Error("Already disposed");this.logger.Ka("n");var b=this.logger.share();return this.i.then(function(c){var d=c.Le;return new Promise(function(e){var f=new tl(b,"n");d(function(g){f.done();b.hc(g.length);b.Ua();b.dispose();e(g)},[a.Ha,
a.Yc,a.Ce,a.Cd])})})};
p.qe=function(a){var b=this;if(this.P)throw Error("Already disposed");this.logger.Ka("n");var c=wl(this.logger,function(){return b.o([a.Ha,a.Yc,a.Ce,a.Cd])},"n");
this.logger.hc(c.length);this.logger.Ua();return c};
p.jc=function(a){this.i.then(function(b){var c;(c=b.Wf)==null||c(a)})};
p.Bc=function(a,b){return this.i.then(function(c){var d;return(d=c.Re)==null?void 0:d(a,b,!1)})};
p.qc=function(){return this.logger.share()};function Nl(a){if(!a)return null;a=yf(Zf(a,4,void 0,Yf));return a===null||a===void 0?null:pb(a)}
;function Ol(){this.promises={};this.h=null}
function Pl(){Ol.instance||(Ol.instance=new Ol);return Ol.instance}
function Ql(a,b){return Rl(a,mg(b,El,1,we),mg(b,Fl,2,we),sg(b,3,void 0,we))}
function Rl(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Sl(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Sl(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Sl(a,b){return b?Tl(b):a?Ul(a):Promise.resolve()}
function Tl(a){return new Promise(function(b,c){var d=Ri("SCRIPT"),e=Nl(a);Lb(d,e);d.onload=function(){Ti(d);b()};
d.onerror=function(){Ti(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Ul(a){return new Promise(function(b){var c=Ri("SCRIPT");if(a){var d=yf(Zf(a,6,void 0,Yf));d=d===null||d===void 0?null:Ib(d)}else d=null;c.textContent=Jb(d);Kb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Ti(c);b()})}
;function Vl(a){this.D=M(a)}
v(Vl,N);function Wl(a,b){return hg(a,1,xf(b))}
function Xl(a,b){return hg(a,2,xf(b))}
;function Yl(a){J.call(this);var b=this;this.options=a;this.B=new Kl;this.Pb=this.B.promise;this.u=new Kl;this.J=1;this.j=new Kl;this.o=[];this.Qc=a.Qc||function(){};
this.logger=new yl(Ll(a.Lb||{}));Zl(this,a.Oa,a.yf,a.pj,a.rj,Object.assign({},$l,a.Sb||{}));this.addOnDisposeCallback(function(){return void am(b)})}
v(Yl,J);p=Yl.prototype;p.snapshot=function(a){var b=this;return B(function(c){switch(c.h){case 1:if(b.P)throw Error("Already disposed");if(b.h||b.G){c.A(2);break}return c.yield(b.u.promise,2);case 2:if(!b.h){c.A(4);break}return c.yield(b.h.snapshot(a),5);case 5:return c.return(c.i);case 4:throw b.G;}})};
function bm(a){var b;return B(function(c){if(a.P)throw Error("Already disposed");(b=a.i)!=null&&(b.endTimeMs=0,b.Wc(1));return c.yield(a.j.promise,0)})}
function am(a){a.G=Error("Cancelled by dispose");a.u.resolve();Pc(a.B.promise);a.B.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(function(){var c;return B(function(d){(c=a.h)==null||c.dispose();a.h=void 0;d.h=0})});
a.o=[];var b;(b=a.i)!=null&&(b.endTimeMs=0,b.Wc(1));Pc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
p.jc=function(a){var b,c;(b=this.h)==null||(c=b.jc)==null||c.call(b,a)};
p.Bc=function(a,b){var c,d,e;return(e=(c=this.h)==null?void 0:(d=c.Bc)==null?void 0:d.call(c,a,b))!=null?e:Promise.resolve()};
function cm(a,b){var c=a.Qc;a.Qc=function(){c();b()}}
function dm(a,b){a.P||(a.h=b,a.logger.update(b.qc()),a.u.resolve(),a.B.resolve(void 0),a.Qc())}
p.handleError=function(a){if(!this.P){this.G=a;this.u.resolve();var b,c;(c=(b=this.options).Oc)==null||c.call(b,a)}};
function em(a,b){b&&(Promise.all(a.o).then(function(){return void b.dispose()}),a.o=[])}
function fm(a,b){a.J=b;var c,d;(d=(c=a.options).jj)==null||d.call(c,b)}
function gm(a){a.P||(a.j.resolve(),a.j=new Kl)}
function Zl(a,b,c,d,e,f){d=d===void 0?Pl():d;e=e===void 0?Promise.resolve(void 0):e;var g,h,k,l,m,n,r,t,w,z,x,H;B(function(G){switch(G.h){case 1:return G.yield(0,3);case 3:h=null;if(!g){G.A(6);break}fm(a,7);xa(G,7);return G.yield(hm(g.snapshot({}),f.We,function(){return Promise.resolve("E:CTO")}),9);
case 9:h=G.i;ya(G,6);break;case 7:za(G),h="E:UCE";case 6:k=void 0,l=g?f.df:f.ef,m=new qj(l,f.ff,f.gf,f.cf),n=1;case 10:if(!(n<=f.maxAttempts)){G.A(12);break}if(n===1){G.A(13);break}fm(a,0);a.i=new im(m.getValue(),f.ue,f.we);return G.yield(a.i.promise,14);case 14:r=G.i,a.i=void 0,r===1?(n=1,m.reset()):rj(m);case 13:xa(G,15);t=void 0;if(c){t=c;G.A(17);break}fm(a,5);w=d.h;return G.yield(hm(jm(b,w,h),f.pf,function(){return Promise.reject(Error("RGF:Fetch timed out"))}),18);
case 18:t=G.i;case 17:return fm(a,3),G.yield(hm(Ql(d,t),f.If,function(){return Promise.reject(Error("DTZ:Script timed out"))}),19);
case 19:return fm(a,8),G.yield(e,20);case 20:return z=new Ml({challenge:t,Lb:a.options.Lb,ye:a.options.ye}),G.yield(hm(z.Pb,f.tg,function(){return Promise.reject(Error("QEG:Setup timed out"))}),21);
case 21:k=z;G.A(12);break;case 15:x=za(G),a.handleError(x),gm(a);case 11:n++;G.A(10);break;case 12:if(a.P){G.A(5);break}k&&(c=void 0,em(a,g),g=k,dm(a,k),gm(a));fm(a,2);a.i=new im(f.he,f.ue,f.we);return G.yield(a.i.promise,22);case 22:a.i=void 0;if(a.P){G.A(5);break}G.A(3);break;case 5:(H=g)==null||H.dispose(),G.h=0}})}
p.qc=function(){return this.logger.share()};
var $l={he:432E5,ue:3E5,we:10,We:1E4,pf:3E4,If:3E4,tg:6E4,ef:1E3,df:6E4,ff:6E5,gf:.25,cf:2,maxAttempts:10};function hm(a,b,c){var d,e=new Promise(function(f){d=setTimeout(f,b)});
return Promise.race([a.finally(function(){return void clearTimeout(d)}),
e.then(c)])}
function im(a,b,c){function d(){var f=e.endTimeMs-Date.now();f<=c?e.Wc(0):setTimeout(d,Math.min(f,b))}
var e=this;this.endTimeMs=Date.now()+a;this.promise=new Promise(function(f){e.Wc=f});
d()}
;function km(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
var lm,mm=(lm=Math.imul)!=null?lm:function(a,b){return a*b|0};
function nm(a,b,c,d){b=b===void 0?0:b;c=c===void 0?a.length:c;var e=0;for(d&&(e=nm(d));b<c;b++)d=typeof a==="string"?a.charCodeAt(b):a[b],e=mm(31,e)+d|0;return e}
function om(a,b){return[nm(a,0,a.length>>1,b),nm(a,a.length>>1)]}
var pm=[196,200,224,18];function qm(a){var b=y(om(a,pm));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)}
function rm(a,b){var c=om(b);a=new Uint32Array(a.buffer);b=a[0];var d=y(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,g=e,h=c,k=d,l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}}
function sm(a,b,c,d,e){var f=(4-(pm.length+c.length)%4)%4,g=new Uint8Array(4+f+pm.length+4+c.length),h=new DataView(g.buffer),k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(pm,k);k+=pm.length;h.setUint32(k,e);g.set(c,k+4);rm(g,d);return a.la(b,function(l){return void globalThis.sessionStorage.removeItem(l)})?km(b,Ed(g))?"s":"t":"i"}
function tm(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];try{var d=Gd(c);rm(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<pm.length;c++)if(d[b++]!==pm[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function um(a,b,c){c=c===void 0?[]:c;this.maxItems=a;this.h=b===void 0?0:b;this.i=c}
function wm(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new um(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new um(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new um(a)):new um(a,c,b)}
um.prototype.serialize=function(){return String(this.h)+","+this.i.join()};
um.prototype.la=function(a,b){var c=void 0;if(this.i[this.h]!==a){var d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=km("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a};
function Hc(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=wm(a))}
function xm(a,b,c,d,e){var f=a.index?wl(a.logger,function(){return sm(a.index,qm(b),c,d,e)},"W"):"u";
a.logger.Lc(f)}
function ym(a,b,c){var d=y(a.index?wl(a.logger,function(){return tm(qm(b),c)},"R"):["u"]),e=d.next().value;
d=d.next().value;a.logger.Kc(e);return d}
;var zm={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Am(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Bm(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=Cm(a,h),d+=Cm(a,h+4),e+=Cm(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return zm.toString(e)}
function Bm(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Cm(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Dm(a){J.call(this);this.logger=a;this.j=new Kl}
v(Dm,J);function Em(a,b){var c=setTimeout(function(){a.j.resolve()},b);
a.addOnDisposeCallback(function(){return void clearTimeout(c)})}
Dm.prototype.Nc=function(a,b){var c=this.gb(a);b==null||b(c);return wl(this.logger,function(){return Ed(c,2)},this.i)};
function Fm(a,b,c,d){return wl(a.logger,function(){return c?a.Nc(b,d):a.gb(b,d)},a.h)}
function Gm(a,b,c,d){Dm.call(this,a);this.o=b;this.B=c;this.h="m";this.i="x";this.u=0;Em(this,d)}
v(Gm,Dm);Gm.prototype.gb=function(a,b){var c=this;this.logger.Ka(this.h);++this.u>=this.B&&this.j.resolve();var d=a();a=wl(this.logger,function(){return c.o(d)},"C");
if(a===void 0)throw new I(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new I(18,"ODM:Invalid");b==null||b(a);return a};
function Hm(a,b,c){Dm.call(this,a);this.o=b;this.h="f";this.i="z";Em(this,c)}
v(Hm,Dm);Hm.prototype.gb=function(){return this.o};
function Im(a,b,c){Dm.call(this,a);this.o=b;this.h="w";this.i="z";Em(this,c)}
v(Im,Dm);Im.prototype.gb=function(){var a=this;return wl(this.logger,function(){return Gd(a.o)},"d")};
Im.prototype.Nc=function(){return this.o};
function Jm(a,b){Dm.call(this,a);this.error=b;this.h="e";this.i="y"}
v(Jm,Dm);function Km(a,b){var c=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);b=c.length+1;c=Lm(c);var d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
Jm.prototype.gb=function(){if(this.o)return this.o;this.o=Km(this,function(a){return"_"+Am(a)});
return Km(this,function(a){return a})};
function Mm(a,b,c){Dm.call(this,a);this.o=b;this.clientState=c;this.h="S";this.i="q"}
v(Mm,Dm);Mm.prototype.gb=function(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([this.o&255,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);for(var d=b=b.length;d<c.length;++d)c[d]^=c[d%b];this.logger.Mc(this.clientState);return a};
function Lm(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):fd(a)}
;var Nm={qf:3E4,wg:2E4};function Om(a){J.call(this);var b=this;this.Ob=new Kl;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Oa=a.Oa;this.Sb=Object.assign({},Nm,a.Sb||{});this.logger=a.vm.qc();var c;this.onError=(c=a.onError)!=null?c:function(){};
this.Hd=a.Hd||!1;if(Pm(a)){var d=this.vm;this.o=function(){return bm(d).catch(function(g){g=Ic(b,new I(b.h?20:32,"TRG:Disposed",g));b.i=g;var h;(h=b.h)==null||h.dispose();b.h=void 0;b.Ob.reject(g)})};
cm(d,function(){return void Qm(b)});
d.J===2&&Qm(this)}else this.o=a.ij,Qm(this);var e=this.logger.share();e.Ka("o");var f=new tl(e,"o");this.Ob.promise.then(function(){f.done();e.Ua();e.dispose()},function(){return void e.dispose()});
this.addOnDisposeCallback(function(){b.h?(b.h.dispose(),b.h=void 0):b.i?b.logger.Ua():(b.i=Ic(b,new I(32,"TNP:Disposed")),b.logger.Ua(),b.Ob.reject(b.i))});
Ac(this,this.logger)}
v(Om,J);function Rm(a,b){if(!(b instanceof I))if(b instanceof cl){var c=Error(b.toString());c.stack=b.stack;b=new I(11,"EBH:Error",c)}else b=new I(12,"BSO:Unknown",b);return Ic(a,b)}
function Qm(a){var b,c,d,e,f,g,h,k,l,m,n,r,t,w,z;return B(function(x){switch(x.h){case 1:b=void 0;a.j++;c=new Kl;a.vm instanceof Yl&&a.vm.o.push(c.promise);if(!a.Hd){x.A(2);break}d=new Kl;setTimeout(function(){return void d.resolve()});
return x.yield(d.promise,2);case 2:return e=a.logger.share(),xa(x,4,5),a.state=5,f={},g=[],x.yield(hm(a.vm.snapshot({Ha:f,Ce:g}),a.Sb.wg,function(){return Promise.reject(new I(15,"MDA:Timeout"))}),7);
case 7:h=x.i;if(a.P)throw new I(a.h?20:32,"MDA:Disposed");k=g[0];a.state=6;return x.yield(hm(Sm(a.Oa,h),a.Sb.qf,function(){return Promise.reject(new I(10,"BWB:Timeout"))}),8);
case 8:l=x.i;if(a.P)throw new I(a.h?20:32,"BWB:Disposed");a.state=7;b=wl(e,function(){var G=Tm(a,l,c,k);G.j.promise.then(function(){return void a.o()});
return G},"i");
case 5:Aa(x);e.dispose();Ba(x,6);break;case 4:m=za(x);(n=b)==null||n.dispose();if(!a.i){r=Rm(a,m);c.resolve();var H;if(H=a.vm instanceof Yl&&a.j<2)a:if(m instanceof I)H=m.code!==32&&m.code!==20&&m.code!==10;else{if(m instanceof cl)switch(m.code){case 2:case 13:case 14:case 4:break;default:H=!1;break a}H=!0}if(H)return t=(1+Math.random()*.25)*(a.h?6E4:1E3),w=setTimeout(function(){return void a.o()},t),a.addOnDisposeCallback(function(){return void clearTimeout(w)}),x.return();
a.i=r}e.wa(a.h?13:14);a.Ob.reject(a.i);return x.return();case 6:a.state=8,a.j=0,(z=a.h)==null||z.dispose(),a.h=b,a.Ob.resolve(),x.h=0}})}
function Tm(a,b,c,d){var e=qg(b,2)*1E3;if(e<=0)throw new I(31,"TTM:Invalid");if(sg(b,4))return new Im(a.logger,sg(b,4),e);if(!qg(b,3))return new Hm(a.logger,Td(eg(b)),e);if(!d)throw new I(4,"PMD:Undefined");d=d(Td(eg(b)));if(!(d instanceof Function))throw new I(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new Gm(a.logger,d,qg(b,3),e);a.addOnDisposeCallback(function(){return void c.resolve()});
return a}
Om.prototype.gb=function(a){return Um(this,Object.assign({},a),!1)};
Om.prototype.Nc=function(a){return Um(this,Object.assign({},a),!0)};
function Ic(a,b){a.logger.wa(b.code);a.onError(b);return b}
function Vm(a,b){b=b instanceof I?b:new I(5,"TVD:error",b);return Ic(a,b)}
function Um(a,b,c){try{if(a.P)throw new I(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;var d,e;return(e=(d=Wm(a,b,c))!=null?d:Xm(a,b,c))!=null?e:Ym(a,b,c)}catch(f){if(!b.Qf)throw Vm(a,f);return Zm(a,c,f)}}
function Wm(a,b,c){var d;return(d=a.h)==null?void 0:Fm(d,function(){return $m(a,b)},c,function(e){var f;
if(a.h instanceof Gm&&((f=b.yc)==null?0:f.xg))try{var g;(g=a.cache)==null||xm(g,$m(a,b),e,b.yc.Md,a.u-120)}catch(h){Ic(a,new I(24,"ELX:write",h))}})}
function Xm(a,b,c){var d;if((d=b.yc)!=null&&d.Ne)try{var e,f=(e=a.cache)==null?void 0:ym(e,$m(a,b),b.yc.Md);return f?c?wl(a.logger,function(){return Ed(f,2)},"a"):f:void 0}catch(g){Ic(a,new I(23,"RXO:read",g))}}
function Ym(a,b,c){var d={stack:[],error:void 0,pb:!1};try{if(!b.Pf)throw new I(29,"SDF:notready");return Fm(fb(d,new Mm(a.logger,0,a.state)),function(){return $m(a,b)},c)}catch(e){d.error=e,d.pb=!0}finally{hb(d)}}
function Zm(a,b,c){var d={stack:[],error:void 0,pb:!1};try{var e=Vm(a,c);return Fm(fb(d,new Jm(a.logger,e)),function(){return[]},b)}catch(f){d.error=f,d.pb=!0}finally{hb(d)}}
function $m(a,b){return b.jd?b.jd:b.Ha?wl(a.logger,function(){return b.jd=Lm(b.Ha)},"c"):[]}
var Pm=function(a){return xe(function(b){if(!Ee(b))return!1;for(var c=y(Object.entries(a)),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;if(!(d in b)){if(e.Zi===!0)continue;return!1}if(!e(b[d]))return!1}return!0})}({vm:function(a){return xe(function(b){return b instanceof a})}(Yl)},"");var an=window;function bn(a){var b=cn;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function dn(){var a=[];bn(function(b){a.push(b)});
return a}
;var cn={Jg:"allow-forms",Kg:"allow-modals",Lg:"allow-orientation-lock",Mg:"allow-pointer-lock",Ng:"allow-popups",Og:"allow-popups-to-escape-sandbox",Pg:"allow-presentation",Qg:"allow-same-origin",Rg:"allow-scripts",Sg:"allow-top-navigation",Tg:"allow-top-navigation-by-user-activation"},en=Dk(function(){return dn()});
function fn(){var a=gn(),b={};Sb(en(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function gn(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function hn(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var jn=(new Date).getTime();function kn(a){this.D=M(a)}
v(kn,N);var ln=Lh(kn);function mn(a){nk.call(this);var b=this;this.B=this.j=0;this.Ea=a!=null?a:{ra:function(e,f){return setTimeout(e,f)},
sa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(nn(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||on(this)}
v(mn,nk);function pn(){var a=qn;mn.instance||(mn.instance=new mn(a));return mn.instance}
mn.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.sa(this.B);delete mn.instance};
mn.prototype.va=function(){return this.h};
function on(a){a.B=a.Ea.ra(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(nn(a),3):c.yield(nn(a),3);on(a);c.h=0})},3E4)}
function nn(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.Ea.ra(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.u=void 0;a.j&&(a.Ea.sa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?ok(a,"networkstatus-online"):ok(a,"networkstatus-offline"));c(g);Ba(h,0);break;case 2:za(h),g=!1,h.A(3)}})})}
;function rn(){this.data=[];this.h=-1}
rn.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
rn.prototype.get=function(a){return!!this.data[a]};
function sn(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function tn(){this.blockSize=-1}
;function un(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ab(un,tn);un.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function vn(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
un.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)vn(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vn(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vn(this,e);f=0;break}}this.i=f;this.o+=b}};
un.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;vn(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function wn(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function xn(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function yn(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:wn(a).match(/\S+/g)||[],b=Rb(a,b)>=0);return b}
function zn(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):yn(a,"inverted-hdpi")&&xn(a,Array.prototype.filter.call(a.classList?a.classList:wn(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function An(){}
An.prototype.next=function(){return Bn};
var Bn={done:!0,value:void 0};An.prototype.Ab=function(){return this};function Cn(a){if(a instanceof Dn||a instanceof En||a instanceof Fn)return a;if(typeof a.next=="function")return new Dn(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Dn(function(){return a[Symbol.iterator]()});
if(typeof a.Ab=="function")return new Dn(function(){return a.Ab()});
throw Error("Not an iterator or iterable.");}
function Dn(a){this.h=a}
Dn.prototype.Ab=function(){return new En(this.h())};
Dn.prototype[Symbol.iterator]=function(){return new Fn(this.h())};
Dn.prototype.i=function(){return new Fn(this.h())};
function En(a){this.h=a}
v(En,An);En.prototype.next=function(){return this.h.next()};
En.prototype[Symbol.iterator]=function(){return new Fn(this.h)};
En.prototype.i=function(){return new Fn(this.h)};
function Fn(a){Dn.call(this,function(){return a});
this.j=a}
v(Fn,Dn);Fn.prototype.next=function(){return this.j.next()};function O(a){J.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
ab(O,J);p=O.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.vc(a)}return!1};
p.vc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Xb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.zb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Gn(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.P;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.vc(c)}}return f!=0}return!1};
function Gn(a,b,c){zk(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.vc,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.X=function(){O.Ca.X.call(this);this.clear();this.j.length=0};function Hn(a){this.h=a}
Hn.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new dl).serialize(b))};
Hn.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hn.prototype.remove=function(a){this.h.remove(a)};function In(a){this.h=a}
ab(In,Hn);function Jn(a){this.data=a}
function Kn(a){return a===void 0||a instanceof Jn?a:new Jn(a)}
In.prototype.set=function(a,b){In.Ca.set.call(this,a,Kn(b))};
In.prototype.i=function(a){a=In.Ca.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
In.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ln(a){this.h=a}
ab(Ln,In);Ln.prototype.set=function(a,b,c){if(b=Kn(b)){if(c){if(c<Za()){Ln.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Ln.Ca.set.call(this,a,b)};
Ln.prototype.i=function(a){var b=Ln.Ca.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Ln.prototype.remove.call(this,a);else return b}};function Mn(){}
;function Nn(){}
ab(Nn,Mn);Nn.prototype[Symbol.iterator]=function(){return Cn(this.Ab(!0)).i()};
Nn.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function On(a){this.h=a;this.i=null}
ab(On,Nn);p=On.prototype;p.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
p.set=function(a,b){Pn(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Pn(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Pn(this);this.h.removeItem(a)};
p.Ab=function(a){Pn(this);var b=0,c=this.h,d=new An;d.next=function(){if(b>=c.length)return Bn;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Pn(this);this.h.clear()};
p.key=function(a){Pn(this);return this.h.key(a)};
function Pn(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||ed(Error("Storage mechanism: Storage unavailable"))}
;function Qn(){var a=null;try{a=D.localStorage||null}catch(b){}On.call(this,a)}
ab(Qn,On);function Rn(a,b){this.i=a;this.h=b+"::"}
ab(Rn,Nn);Rn.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Rn.prototype.get=function(a){return this.i.get(this.h+a)};
Rn.prototype.remove=function(a){this.i.remove(this.h+a)};
Rn.prototype.Ab=function(a){var b=this.i[Symbol.iterator](),c=this,d=new An;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function Sn(a){if(a.bb&&typeof a.bb=="function")return a.bb();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Di(a)}
function Tn(a){if(a.dc&&typeof a.dc=="function")return a.dc();if(!a.bb||typeof a.bb!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Na(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function Un(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Na(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=Tn(a),e=Sn(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function Vn(a){this.i=this.B=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof Vn?(this.o=a.o,Wn(this,a.j),this.B=a.B,this.i=a.i,Xn(this,a.G),this.h=a.h,Yn(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(jc))?(this.o=!1,Wn(this,b[1]||"",!0),this.B=Zn(b[2]||""),this.i=Zn(b[3]||"",!0),Xn(this,b[4]),this.h=Zn(b[5]||"",!0),Yn(this,b[6]||"",!0),this.u=Zn(b[7]||"")):(this.o=!1,this.H=new $n(null,this.o))}
Vn.prototype.toString=function(){var a=[],b=this.j;b&&a.push(ao(b,bo,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.B)&&a.push(ao(b,bo,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(ao(c,c.charAt(0)=="/"?co:eo,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",ao(c,fo));return a.join("")};
Vn.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Wn(b,a.j):c=!!a.B;c?b.B=a.B:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)Xn(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?Yn(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
Vn.prototype.clone=function(){return new Vn(this)};
function Wn(a,b,c){a.j=c?Zn(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function Xn(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function Yn(a,b,c){b instanceof $n?(a.H=b,go(a.H,a.o)):(c||(b=ao(b,ho)),a.H=new $n(b,a.o))}
function Zn(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ao(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,io),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function io(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var bo=/[#\/\?@]/g,eo=/[#\?:]/g,co=/[#\?]/g,ho=/[#\?@]/g,fo=/#/g;function $n(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function jo(a){a.h||(a.h=new Map,a.i=0,a.j&&pc(a.j,function(b,c){a.add(fc(b),c)}))}
p=$n.prototype;p.add=function(a,b){jo(this);this.j=null;a=ko(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
p.remove=function(a){jo(this);a=ko(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
p.clear=function(){this.h=this.j=null;this.i=0};
function lo(a,b){jo(a);b=ko(a,b);return a.h.has(b)}
p.forEach=function(a,b){jo(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
p.dc=function(){jo(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
p.bb=function(a){jo(this);var b=[];if(typeof a==="string")lo(this,a)&&(b=b.concat(this.h.get(ko(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
p.set=function(a,b){jo(this);this.j=null;a=ko(this,a);lo(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
p.get=function(a,b){if(!a)return b;a=this.bb(a);return a.length>0?String(a[0]):b};
p.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.bb(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
p.clone=function(){var a=new $n;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function ko(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function go(a,b){b&&!a.o&&(jo(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(ko(this,e),Yb(c)),this.i=this.i+c.length))},a));
a.o=b}
p.extend=function(a){for(var b=0;b<arguments.length;b++)Un(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},mo=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var no={Bb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Qd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},oo={Bb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Qd:function(a){return[].concat.apply([],a)}};
P.sg=function(){mo?(P.yb=Uint8Array,P.Ma=Uint16Array,P.Ge=Int32Array,P.assign(P,no)):(P.yb=Array,P.Ma=Array,P.Ge=Array,P.assign(P,oo))};
P.sg();var po=!0;try{new Uint8Array(1)}catch(a){po=!1}
function qo(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.yb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ro={};ro=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var so={},to,uo=[],vo=0;vo<256;vo++){to=vo;for(var wo=0;wo<8;wo++)to=to&1?3988292384^to>>>1:to>>>1;uo[vo]=to}so=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^uo[(a^b[d])&255];return a^-1};var xo={};xo={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function yo(a){for(var b=a.length;--b>=0;)a[b]=0}
var zo=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ao=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Bo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Co=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Do=Array(576);yo(Do);var Eo=Array(60);yo(Eo);var Fo=Array(512);yo(Fo);var Go=Array(256);yo(Go);var Ho=Array(29);yo(Ho);var Io=Array(30);yo(Io);function Jo(a,b,c,d,e){this.re=a;this.nf=b;this.mf=c;this.Ze=d;this.Mf=e;this.Td=a&&a.length}
var Ko,Lo,Mo;function No(a,b){this.Pd=a;this.Kb=0;this.jb=b}
function Oo(a,b){a.da[a.pending++]=b&255;a.da[a.pending++]=b>>>8&255}
function Po(a,b,c){a.ia>16-c?(a.pa|=b<<a.ia&65535,Oo(a,a.pa),a.pa=b>>16-a.ia,a.ia+=c-16):(a.pa|=b<<a.ia&65535,a.ia+=c)}
function Qo(a,b,c){Po(a,c[b*2],c[b*2+1])}
function Ro(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function So(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Ro(d[e]++,e))}
function To(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.nb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ta[512]=1;a.Ta=a.Qb=0;a.Aa=a.matches=0}
function Uo(a){a.ia>8?Oo(a,a.pa):a.ia>0&&(a.da[a.pending++]=a.pa);a.pa=0;a.ia=0}
function Vo(a,b,c){Uo(a);Oo(a,c);Oo(a,~c);P.Bb(a.da,a.window,b,c,a.pending);a.pending+=c}
function Wo(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Xo(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Ra;){e<a.Ra&&Wo(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(Wo(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function Yo(a,b,c){var d=0;if(a.Aa!==0){do{var e=a.da[a.Zb+d*2]<<8|a.da[a.Zb+d*2+1];var f=a.da[a.pd+d];d++;if(e===0)Qo(a,f,b);else{var g=Go[f];Qo(a,g+256+1,b);var h=zo[g];h!==0&&(f-=Ho[g],Po(a,f,h));e--;g=e<256?Fo[e]:Fo[256+(e>>>7)];Qo(a,g,c);h=Ao[g];h!==0&&(e-=Io[g],Po(a,e,h))}}while(d<a.Aa)}Qo(a,256,b)}
function Zo(a,b){var c=b.Pd,d=b.jb.re,e=b.jb.Td,f=b.jb.Ze,g,h=-1;a.Ra=0;a.Gb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Ra]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ra<2;){var k=a.ea[++a.Ra]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ta--;e&&(a.Qb-=d[k*2+1])}b.Kb=h;for(g=a.Ra>>1;g>=1;g--)Xo(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Ra--],Xo(a,c,1),d=a.ea[1],a.ea[--a.Gb]=g,a.ea[--a.Gb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,Xo(a,c,1);while(a.Ra>=
2);a.ea[--a.Gb]=a.ea[1];g=b.Pd;k=b.Kb;d=b.jb.re;e=b.jb.Td;f=b.jb.nf;var l=b.jb.mf,m=b.jb.Mf,n,r=0;for(n=0;n<=15;n++)a.Na[n]=0;g[a.ea[a.Gb]*2+1]=0;for(b=a.Gb+1;b<573;b++){var t=a.ea[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Na[n]++;var w=0;t>=l&&(w=f[t-l]);var z=g[t*2];a.Ta+=z*(n+w);e&&(a.Qb+=z*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Na[n]===0;)n--;a.Na[n]--;a.Na[n+1]+=2;a.Na[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Na[n];t!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==n&&(a.Ta+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}So(c,h,a.Na)}
function $o(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ap(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Qo(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Qo(a,l,a.ja),g--),Qo(a,16,a.ja),Po(a,g-3,2)):g<=10?(Qo(a,17,a.ja),Po(a,g-3,3)):(Qo(a,18,a.ja),Po(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function bp(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var cp=!1;function dp(a,b,c){a.da[a.Zb+a.Aa*2]=b>>>8&255;a.da[a.Zb+a.Aa*2+1]=b&255;a.da[a.pd+a.Aa]=c&255;a.Aa++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Go[c]+256+1)*2]++,a.nb[(b<256?Fo[b]:Fo[256+(b>>>7)])*2]++);return a.Aa===a.fc-1}
;function ep(a,b){a.msg=xo[b];return b}
function fp(a){for(var b=a.length;--b>=0;)a[b]=0}
function gp(a){var b=a.state,c=b.pending;c>a.T&&(c=a.T);c!==0&&(P.Bb(a.output,b.da,b.kc,c,a.Mb),a.Mb+=c,b.kc+=c,a.Dd+=c,a.T-=c,b.pending-=c,b.pending===0&&(b.kc=0))}
function hp(a,b){var c=a.xa>=0?a.xa:-1,d=a.v-a.xa,e=0;if(a.level>0){a.R.gd===2&&(a.R.gd=bp(a));Zo(a,a.Jc);Zo(a,a.Ec);$o(a,a.ta,a.Jc.Kb);$o(a,a.nb,a.Ec.Kb);Zo(a,a.Ld);for(e=18;e>=3&&a.ja[Co[e]*2+1]===0;e--);a.Ta+=3*(e+1)+5+5+4;var f=a.Ta+3+7>>>3;var g=a.Qb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Po(a,b?1:0,3),Vo(a,c,d);else if(a.strategy===4||g===f)Po(a,2+(b?1:0),3),Yo(a,Do,Eo);else{Po(a,4+(b?1:0),3);c=a.Jc.Kb+1;d=a.Ec.Kb+1;e+=1;Po(a,c-257,5);Po(a,d-1,5);Po(a,e-4,4);for(f=0;f<e;f++)Po(a,
a.ja[Co[f]*2+1],3);ap(a,a.ta,c-1);ap(a,a.nb,d-1);Yo(a,a.ta,a.nb)}To(a);b&&Uo(a);a.xa=a.v;gp(a.R)}
function R(a,b){a.da[a.pending++]=b}
function ip(a,b){a.da[a.pending++]=b>>>8&255;a.da[a.pending++]=b&255}
function jp(a,b){var c=a.Xd,d=a.v,e=a.ya,f=a.Zd,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.kb,l=a.La,m=a.v+258,n=h[d+e-1],r=h[d+e];a.ya>=a.Sd&&(c>>=2);f>a.F&&(f=a.F);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Jb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.F?e:a.F}
function kp(a){var b=a.ma,c;do{var d=a.Ee-a.F-a.v;if(a.v>=b+(b-262)){P.Bb(a.window,a.window,b,b,0);a.Jb-=b;a.v-=b;a.xa-=b;var e=c=a.Ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.La[--e],a.La[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.oa===0)break;e=a.R;c=a.window;f=a.v+a.F;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,P.Bb(c,e.input,e.ub,g,f),e.state.wrap===1?e.K=ro(e.K,c,g,f):e.state.wrap===2&&(e.K=so(e.K,c,g,f)),e.ub+=g,e.xb+=g,c=g);a.F+=c;if(a.F+a.la>=3)for(d=a.v-a.la,a.S=a.window[d],
a.S=(a.S<<a.Qa^a.window[d+1])&a.Pa;a.la&&!(a.S=(a.S<<a.Qa^a.window[d+3-1])&a.Pa,a.La[d&a.kb]=a.head[a.S],a.head[a.S]=d,d++,a.la--,a.F+a.la<3););}while(a.F<262&&a.R.oa!==0)}
function lp(a,b){for(var c;;){if(a.F<262){kp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.kb]=a.head[a.S],a.head[a.S]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.U=jp(a,c));if(a.U>=3)if(c=dp(a,a.v-a.Jb,a.U-3),a.F-=a.U,a.U<=a.rd&&a.F>=3){a.U--;do a.v++,a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.kb]=a.head[a.S],a.head[a.S]=a.v;while(--a.U!==0);a.v++}else a.v+=a.U,a.U=0,a.S=a.window[a.v],a.S=(a.S<<a.Qa^a.window[a.v+1])&a.Pa;else c=dp(a,0,
a.window[a.v]),a.F--,a.v++;if(c&&(hp(a,!1),a.R.T===0))return 1}a.la=a.v<2?a.v:2;return b===4?(hp(a,!0),a.R.T===0?3:4):a.Aa&&(hp(a,!1),a.R.T===0)?1:2}
function mp(a,b){for(var c,d;;){if(a.F<262){kp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,c=a.La[a.v&a.kb]=a.head[a.S],a.head[a.S]=a.v);a.ya=a.U;a.de=a.Jb;a.U=2;c!==0&&a.ya<a.rd&&a.v-c<=a.ma-262&&(a.U=jp(a,c),a.U<=5&&(a.strategy===1||a.U===3&&a.v-a.Jb>4096)&&(a.U=2));if(a.ya>=3&&a.U<=a.ya){d=a.v+a.F-3;c=dp(a,a.v-1-a.de,a.ya-3);a.F-=a.ya-1;a.ya-=2;do++a.v<=d&&(a.S=(a.S<<a.Qa^a.window[a.v+3-1])&a.Pa,a.La[a.v&a.kb]=a.head[a.S],a.head[a.S]=a.v);
while(--a.ya!==0);a.sb=0;a.U=2;a.v++;if(c&&(hp(a,!1),a.R.T===0))return 1}else if(a.sb){if((c=dp(a,0,a.window[a.v-1]))&&hp(a,!1),a.v++,a.F--,a.R.T===0)return 1}else a.sb=1,a.v++,a.F--}a.sb&&(dp(a,0,a.window[a.v-1]),a.sb=0);a.la=a.v<2?a.v:2;return b===4?(hp(a,!0),a.R.T===0?3:4):a.Aa&&(hp(a,!1),a.R.T===0)?1:2}
function np(a,b){for(var c,d,e,f=a.window;;){if(a.F<=258){kp(a);if(a.F<=258&&b===0)return 1;if(a.F===0)break}a.U=0;if(a.F>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.U=258-(e-d);a.U>a.F&&(a.U=a.F)}a.U>=3?(c=dp(a,1,a.U-3),a.F-=a.U,a.v+=a.U,a.U=0):(c=dp(a,0,a.window[a.v]),a.F--,a.v++);if(c&&(hp(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(hp(a,!0),a.R.T===0?3:4):
a.Aa&&(hp(a,!1),a.R.T===0)?1:2}
function op(a,b){for(var c;;){if(a.F===0&&(kp(a),a.F===0)){if(b===0)return 1;break}a.U=0;c=dp(a,0,a.window[a.v]);a.F--;a.v++;if(c&&(hp(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(hp(a,!0),a.R.T===0?3:4):a.Aa&&(hp(a,!1),a.R.T===0)?1:2}
function pp(a,b,c,d,e){this.wf=a;this.Lf=b;this.Rf=c;this.Kf=d;this.sf=e}
var qp;qp=[new pp(0,0,0,0,function(a,b){var c=65535;for(c>a.Ba-5&&(c=a.Ba-5);;){if(a.F<=1){kp(a);if(a.F===0&&b===0)return 1;if(a.F===0)break}a.v+=a.F;a.F=0;var d=a.xa+c;if(a.v===0||a.v>=d)if(a.F=a.v-d,a.v=d,hp(a,!1),a.R.T===0)return 1;if(a.v-a.xa>=a.ma-262&&(hp(a,!1),a.R.T===0))return 1}a.la=0;if(b===4)return hp(a,!0),a.R.T===0?3:4;a.v>a.xa&&hp(a,!1);return 1}),
new pp(4,4,8,4,lp),new pp(4,5,16,8,lp),new pp(4,6,32,32,lp),new pp(4,4,16,16,mp),new pp(8,16,32,32,mp),new pp(8,16,128,128,mp),new pp(8,32,128,256,mp),new pp(32,128,258,1024,mp),new pp(32,258,258,4096,mp)];
function rp(){this.R=null;this.status=0;this.da=null;this.wrap=this.pending=this.kc=this.Ba=0;this.I=null;this.Da=0;this.method=8;this.Ib=-1;this.kb=this.Gd=this.ma=0;this.window=null;this.Ee=0;this.head=this.La=null;this.Zd=this.Sd=this.strategy=this.level=this.rd=this.Xd=this.ya=this.F=this.Jb=this.v=this.sb=this.de=this.U=this.xa=this.Qa=this.Pa=this.nd=this.Ic=this.S=0;this.ta=new P.Ma(1146);this.nb=new P.Ma(122);this.ja=new P.Ma(78);fp(this.ta);fp(this.nb);fp(this.ja);this.Ld=this.Ec=this.Jc=
null;this.Na=new P.Ma(16);this.ea=new P.Ma(573);fp(this.ea);this.Gb=this.Ra=0;this.depth=new P.Ma(573);fp(this.depth);this.ia=this.pa=this.la=this.matches=this.Qb=this.Ta=this.Zb=this.Aa=this.fc=this.pd=0}
function sp(a,b){if(!a||!a.state||b>5||b<0)return a?ep(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return ep(a,a.T===0?-5:-2);c.R=a;var d=c.Ib;c.Ib=b;if(c.status===42)if(c.wrap===2)a.K=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.cb?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.cb&&(a.K=so(a.K,c.da,c.pending,0)),c.Da=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Gd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;ip(c,e+(31-e%31));c.v!==0&&(ip(c,a.K>>>16),ip(c,a.K&65535));a.K=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Da<(c.I.extra.length&65535)&&(c.pending!==c.Ba||
(c.I.cb&&c.pending>e&&(a.K=so(a.K,c.da,c.pending-e,e)),gp(a),e=c.pending,c.pending!==c.Ba));)R(c,c.I.extra[c.Da]&255),c.Da++;c.I.cb&&c.pending>e&&(a.K=so(a.K,c.da,c.pending-e,e));c.Da===c.I.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.Ba&&(c.I.cb&&c.pending>e&&(a.K=so(a.K,c.da,c.pending-e,e)),gp(a),e=c.pending,c.pending===c.Ba)){var f=1;break}f=c.Da<c.I.name.length?c.I.name.charCodeAt(c.Da++)&255:0;R(c,f)}while(f!==0);c.I.cb&&c.pending>
e&&(a.K=so(a.K,c.da,c.pending-e,e));f===0&&(c.Da=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.Ba&&(c.I.cb&&c.pending>e&&(a.K=so(a.K,c.da,c.pending-e,e)),gp(a),e=c.pending,c.pending===c.Ba)){f=1;break}f=c.Da<c.I.comment.length?c.I.comment.charCodeAt(c.Da++)&255:0;R(c,f)}while(f!==0);c.I.cb&&c.pending>e&&(a.K=so(a.K,c.da,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.cb?(c.pending+2>c.Ba&&gp(a),c.pending+2<=c.Ba&&(R(c,
a.K&255),R(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(gp(a),a.T===0)return c.Ib=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return ep(a,-5);if(c.status===666&&a.oa!==0)return ep(a,-5);if(a.oa!==0||c.F!==0||b!==0&&c.status!==666){d=c.strategy===2?op(c,b):c.strategy===3?np(c,b):qp[c.level].sf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.T===0&&(c.Ib=-1),0;if(d===2&&(b===1?(Po(c,2,3),Qo(c,256,Do),c.ia===16?(Oo(c,c.pa),c.pa=0,c.ia=0):c.ia>=
8&&(c.da[c.pending++]=c.pa&255,c.pa>>=8,c.ia-=8)):b!==5&&(Po(c,0,3),Vo(c,0,0),b===3&&(fp(c.head),c.F===0&&(c.v=0,c.xa=0,c.la=0))),gp(a),a.T===0))return c.Ib=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.K&255),R(c,a.K>>8&255),R(c,a.K>>16&255),R(c,a.K>>24&255),R(c,a.xb&255),R(c,a.xb>>8&255),R(c,a.xb>>16&255),R(c,a.xb>>24&255)):(ip(c,a.K>>>16),ip(c,a.K&65535));gp(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var tp={};tp=function(){this.input=null;this.xb=this.oa=this.ub=0;this.output=null;this.Dd=this.T=this.Mb=0;this.msg="";this.state=null;this.gd=2;this.K=0};var up=Object.prototype.toString;
function vp(a){if(!(this instanceof vp))return new vp(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new tp;this.R.T=0;var b=this.R;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=ep(b,-2);else{e===8&&(e=9);var k=new rp;b.state=k;k.R=b;k.wrap=h;k.I=null;k.Gd=e;k.ma=1<<k.Gd;k.kb=k.ma-1;k.nd=f+7;k.Ic=1<<k.nd;k.Pa=k.Ic-1;k.Qa=~~((k.nd+3-1)/3);k.window=new P.yb(k.ma*2);k.head=new P.Ma(k.Ic);k.La=new P.Ma(k.ma);k.fc=1<<f+6;k.Ba=k.fc*4;k.da=new P.yb(k.Ba);k.Zb=1*k.fc;k.pd=3*k.fc;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.xb=b.Dd=0;b.gd=2;c=b.state;c.pending=0;c.kc=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.Ib=0;if(!cp){d=Array(16);for(f=g=0;f<28;f++)for(Ho[f]=g,e=0;e<1<<zo[f];e++)Go[g++]=f;Go[g-1]=f;for(f=g=0;f<16;f++)for(Io[f]=g,e=0;e<1<<Ao[f];e++)Fo[g++]=f;for(g>>=7;f<30;f++)for(Io[f]=g<<7,e=0;e<1<<Ao[f]-7;e++)Fo[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Do[e*2+1]=8,e++,d[8]++;for(;e<=255;)Do[e*2+1]=9,e++,d[9]++;for(;e<=279;)Do[e*2+1]=7,e++,d[7]++;for(;e<=287;)Do[e*2+1]=8,e++,d[8]++;So(Do,287,d);for(e=0;e<30;e++)Eo[e*2+1]=5,Eo[e*2]=Ro(e,5);Ko=new Jo(Do,zo,257,286,15);Lo=new Jo(Eo,
Ao,0,30,15);Mo=new Jo([],Bo,0,19,7);cp=!0}c.Jc=new No(c.ta,Ko);c.Ec=new No(c.nb,Lo);c.Ld=new No(c.ja,Mo);c.pa=0;c.ia=0;To(c);c=0}else c=ep(b,-2);c===0&&(b=b.state,b.Ee=2*b.ma,fp(b.head),b.rd=qp[b.level].Lf,b.Sd=qp[b.level].wf,b.Zd=qp[b.level].Rf,b.Xd=qp[b.level].Kf,b.v=0,b.xa=0,b.F=0,b.la=0,b.U=b.ya=2,b.sb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(xo[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=qo(a.dictionary):
up.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.R;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.F)b=-2;else{b===1&&(a.K=ro(a.K,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(fp(l.head),l.v=0,l.xa=0,l.la=0),c=new P.yb(l.ma),P.Bb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.ub;e=a.input;a.oa=g;a.ub=0;a.input=f;for(kp(l);l.F>=3;){f=l.v;g=l.F-2;do l.S=(l.S<<l.Qa^l.window[f+3-1])&l.Pa,l.La[f&l.kb]=l.head[l.S],l.head[l.S]=f,f++;while(--g);
l.v=f;l.F=2;kp(l)}l.v+=l.F;l.xa=l.v;l.la=l.F;l.F=0;l.U=l.ya=2;l.sb=0;a.ub=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(xo[b]);this.Li=!0}}
vp.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=qo(a):up.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.ub=0;c.oa=c.input.length;do{c.T===0&&(c.output=new P.yb(d),c.Mb=0,c.T=d);a=sp(c,e);if(a!==1&&a!==0)return wp(this,a),this.ended=!0,!1;if(c.T===0||c.oa===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.Bd(c.output,c.Mb);b=f;f=f.length;if(f<65537&&(b.subarray&&po||!b.subarray))b=
String.fromCharCode.apply(null,P.Bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Bd(c.output,c.Mb),this.chunks.push(b)}while((c.oa>0||c.T===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=ep(c,-2):(c.state=null,a=d===113?ep(c,-3):0)):a=-2,wp(this,a),this.ended=!0,a===0;e===2&&(wp(this,0),c.T=0);return!0};
function wp(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.Qd(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
function xp(a,b){b=b||{};b.gzip=!0;b=new vp(b);b.push(a,!0);if(b.err)throw b.msg||xo[b.err];return b.result}
;function yp(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Ib(a):null:null}
function zp(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?pb(a):null:null}
;function Ap(a){return pb(a===null?"null":a===void 0?"undefined":a)}
;function Bp(a){this.name=a}
;var Cp=new Bp("rawColdConfigGroup");var Dp=new Bp("rawHotConfigGroup");function Ep(a){this.D=M(a)}
v(Ep,N);function Fp(a){this.D=M(a)}
v(Fp,N);Fp.prototype.setTrackingParams=function(a){return ag(this,1,te(a,!1))};var Gp=new Bp("continuationCommand");var Hp=new Bp("webCommandMetadata");var Ip=new Bp("signalServiceEndpoint");var Jp={Yg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Vg:"EMBEDDED_PLAYER_MODE_DEFAULT",Xg:"EMBEDDED_PLAYER_MODE_PFP",Wg:"EMBEDDED_PLAYER_MODE_PFL"};var Kp=new Bp("feedbackEndpoint");var Ce={ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",xi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",wi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ti:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",yi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",zi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ri:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Lh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Vh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",Zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",Th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",si:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT"};var Lp=new Bp("shareEndpoint"),Mp=new Bp("shareEntityEndpoint"),Np=new Bp("shareEntityServiceEndpoint"),Op=new Bp("webPlayerShareEntityServiceEndpoint");var Pp=new Bp("playlistEditEndpoint");var Qp=new Bp("modifyChannelNotificationPreferenceEndpoint");var Rp=new Bp("undoFeedbackEndpoint");var Sp=new Bp("unsubscribeEndpoint");var Tp=new Bp("subscribeEndpoint");function Up(){var a=Vp;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Wp(a){E("yt.ads.biscotti.lastId_",a)}
;function Xp(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Yp=D.window,Zp,$p,aq=(Yp==null?void 0:(Zp=Yp.yt)==null?void 0:Zp.config_)||(Yp==null?void 0:($p=Yp.ytcfg)==null?void 0:$p.data_)||{};E("yt.config_",aq);function bq(){Xp(aq,arguments)}
function S(a,b){return a in aq?aq[a]:b}
function cq(a){var b=aq.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var dq=[];function eq(a){dq.forEach(function(b){return b(a)})}
function fq(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gq(b)}}:a}
function gq(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),bq("ERRORS",b));eq(a)}
function hq(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),bq("ERRORS",f))}
;var iq=/^[\w.]*$/,jq={q:!0,search_query:!0};function kq(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=lq(f[0]||""),h=lq(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Zb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(kq);l.args=[{key:m,value:f[1],query:a,method:mq===n?"unchanged":n}];jq.hasOwnProperty(m)||hq(l)}}return c}
var mq=String(kq);function nq(a){var b=[];Ci(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Sb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function oq(a){a.charAt(0)==="?"&&(a=a.substring(1));return kq(a,"&")}
function pq(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),oq(a.length>1?a[1]:a[0])):{}}
function qq(a,b){return rq(a,b||{},!0)}
function rq(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=oq(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return sc(a,e)+d}
function sq(a){if(!b)var b=window.location.href;var c=a.match(jc)[1]||null,d=lc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?lc(b)===d&&(Number(b.match(jc)[4]||null)||null)===(Number(a.match(jc)[4]||null)||null):!0;return a}
function lq(a){return a&&a.match(iq)?a:fc(a)}
;function tq(a){var b=uq;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=jn;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ta){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();try{var g=an.history.length}catch(Ta){g=0}e.u_his=g;var h;e.u_h=(h=an.screen)==null?void 0:h.height;var k;e.u_w=(k=an.screen)==null?void 0:k.width;var l;e.u_ah=(l=an.screen)==null?void 0:l.availHeight;var m;e.u_aw=(m=an.screen)==null?
void 0:m.availWidth;var n;e.u_cd=(n=an.screen)==null?void 0:n.colorDepth}catch(Ta){}var r;g=b.h;try{var t=g.screenX;var w=g.screenY}catch(Ta){}try{var z=g.outerWidth;var x=g.outerHeight}catch(Ta){}try{var H=g.innerWidth;var G=g.innerHeight}catch(Ta){}try{var V=g.screenLeft;var ja=g.screenTop}catch(Ta){}try{H=g.innerWidth,G=g.innerHeight}catch(Ta){}try{var ic=g.screen.availWidth;var Od=g.screen.availTop}catch(Ta){}t=[V,ja,t,w,ic,Od,z,x,H,G];try{var ka=(b.h.top||window).document,gb=ka.compatMode=="CSS1Compat"?
ka.documentElement:ka.body;var Ua=(new Bi(gb.clientWidth,gb.clientHeight)).round()}catch(Ta){Ua=new Bi(-12245933,-12245933)}ka=Ua;Ua={};var Va=Va===void 0?D:Va;gb=new rn;"SVGElement"in Va&&"createElementNS"in Va.document&&gb.set(0);w=fn();w["allow-top-navigation-by-user-activation"]&&gb.set(1);w["allow-popups-to-escape-sandbox"]&&gb.set(2);Va.crypto&&Va.crypto.subtle&&gb.set(3);"TextDecoder"in Va&&"TextEncoder"in Va&&gb.set(4);Va=sn(gb);Ua.bc=Va;Ua.bih=ka.height;Ua.biw=ka.width;Ua.brdim=t.join();
b=b.i;b=b.prerendering?3:(r={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?r:0;r=(Ua.vis=b,Ua.wgl=!!an.WebGLRenderingContext,Ua);c=d.call(c,e,r);c.ca_type="image";a&&(c.bid=a);return c}
var uq=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return nq(tq(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var vq="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function wq(){if(!vq)return null;var a=vq();return"open"in a?a:null}
function xq(a){switch(yq(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function yq(a){return a&&"status"in a?a.status:-1}
;function zq(a,b){typeof a==="function"&&(a=fq(a));return window.setTimeout(a,b)}
;var Aq="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(Aq),["client_dev_set_cookie"]);function T(a){a=Bq(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Cq(a,b){a=Bq(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Dq(){var a=Bq("html5_web_po_experiment_ids");return Array.isArray(a)?Ub(a,function(b){return Number(b||0)}):[Number(a||0)]}
function Eq(a){a=Bq(a);return a!==void 0?String(a):""}
function Bq(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Fq(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Gq={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Hq="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(Aq)),Iq=!1;function Jq(a,b,c,d,e,f,g,h,k){function l(){(m&&"readyState"in m?m.readyState:0)===4&&b&&fq(b)(m)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var m=wq();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=Kq(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Lq(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
k&&"onprogress"in m&&(m.onprogress=function(){k(m.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{m.setAttributionReporting(a)}catch(r){hq(r)}}m.send(d);return m}
function Lq(a,b){b=b===void 0?{}:b;var c=sq(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Gq){var g=S(Gq[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(lc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=lc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!lc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!lc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&lc(a)||(b["X-YouTube-Ad-Signals"]=nq(tq()));return b}
function Mq(a,b){b.method="POST";b.postParams||(b.postParams={});return Nq(a,b)}
function Nq(a,b){var c=b.format||"JSON";a=Oq(a,b);var d=Pq(a,b),e=!1,f=Qq(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=xq(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Rq(a,c,k,b.convertToSafeHtml);l&&(l=Sq(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=zq(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Oq(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=qq(a,b);return a}
function Pq(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||lc(a)&&!b.withCredentials&&lc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=oq(e),Ni(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):rc(e));f=e||f&&!Gi(f);!Iq&&f&&b.method!=="POST"&&(Iq=!0,gq(Error("AJAX request with postData should use POST")));return e}
function Rq(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hq(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Tq(a):null)e={},Sb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Uq(g)})}d&&Vq(e);
return e}
function Vq(a){if(Oa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=nb();c=d?d.createHTML(c):c;a[b]=new Fb(c)}else Vq(a[b])}}
function Sq(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Tq(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Uq(a){var b="";Sb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Kq(a){var b=window.location.search,c=lc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&sq(a)&&(c=document.location.hostname);var d=mc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=oq(b),f={};Sb(Hq,function(g){e[g]&&(f[g]=e[g])});
return rq(a,f||{},!1)}
var Qq=Jq;var Wq=[{sd:function(a){return"Cannot read property '"+a.key+"'"},
Rc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{sd:function(a){return"Cannot call '"+a.key+"'"},
Rc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{sd:function(a){return a.key+" is not defined"},
Rc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Zq={fb:[],Za:[{callback:Xq,weight:500},{callback:Yq,weight:500}]};function Xq(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function Yq(a){if(!a.stack)return!0;var b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function $q(){this.Za=[];this.fb=[]}
var ar;function br(){if(!ar){var a=ar=new $q;a.fb.length=0;a.Za.length=0;cr(a,Zq)}return ar}
function cr(a,b){b.fb&&a.fb.push.apply(a.fb,b.fb);b.Za&&a.Za.push.apply(a.Za,b.Za)}
;var dr=new O;function er(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fr(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=fr(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=fr(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function fr(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function gr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=hr(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=er(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?hr(f+".ve",g,h,k):0;d+=f;d+=hr(e,a[e],b,c);if(d>500)break}}else c[b]=ir(a),d+=c[b].length;else c[b]=ir(a),d+=c[b].length;return d}
function hr(a,b,c,d){c+="."+a;a=ir(b);d[c]=a;return c.length+a.length}
function ir(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function jr(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function kr(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function lr(){this.se=!0}
function mr(a){var b={},c=[];"USER_SESSION_ID"in aq&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=ui(c))b.Authorization=c,c=a=a==null?void 0:a.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in aq||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in aq&&(b["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return b}
;var nr={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function or(a,b,c,d,e){ri.set(""+a,b,{maxAge:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function pr(a){return ri.get(""+a,void 0)}
function qr(a,b,c){ri.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function rr(){if(T("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!ri.isEnabled())return!1;if(ri.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?ri.set("TESTCOOKIESENABLED","1",{maxAge:60,sameSite:"none",secure:!0}):ri.set("TESTCOOKIESENABLED","1",{maxAge:60});if(ri.get("TESTCOOKIESENABLED")!=="1")return!1;ri.remove("TESTCOOKIESENABLED");return!0}
;var sr=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",sr);function tr(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=pr(this.h);a&&this.parse(a)}
var ur;function vr(){ur||(ur=new tr);return ur}
p=tr.prototype;p.get=function(a,b){wr(a);xr(a);a=sr[a]!==void 0?sr[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){wr(a);xr(a);if(b==null)throw Error("ExpectedNotNull");sr[a]=b.toString()};
function yr(a){return!!((zr("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){wr(a);xr(a);delete sr[a]};
p.clear=function(){for(var a in sr)delete sr[a]};
function xr(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function wr(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function zr(a){a=sr[a]!==void 0?sr[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(sr[d]=c.toString())}};var Ar={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Br={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Cr(){var a=D.navigator;return a?a.connection:void 0}
function Dr(){var a=Cr();if(a){var b=Ar[a.type||"unknown"]||"CONN_UNKNOWN";a=Ar[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Er(){var a=Cr();if(a!=null&&a.effectiveType)return Br.hasOwnProperty(a.effectiveType)?Br[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(U,Error);function Fr(){try{return Gr(),!0}catch(a){return!1}}
function Gr(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Hr(){}
function Ir(a,b){return qn.Xa(a,0,b)}
Hr.prototype.ra=function(a,b){return this.Xa(a,1,b)};
Hr.prototype.Vb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Jr=Cq("web_emulated_idle_callback_delay",300),Kr=1E3/60-3,Lr=[8,5,4,3,2,1,0];
function Mr(a){a=a===void 0?{}:a;J.call(this);this.i=[];this.j={};this.ba=this.h=0;this.aa=this.u=!1;this.J=[];this.V=this.ha=!1;for(var b=y(Lr),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.dd=a.timeout||1;this.G=Kr;this.B=0;this.za=this.Tf.bind(this);this.Ub=this.Ag.bind(this);this.Va=this.Ke.bind(this);this.Wa=this.xf.bind(this);this.lb=this.ag.bind(this);this.Ga=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.na=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.za)}
v(Mr,J);p=Mr.prototype;p.Vb=function(a){var b=Za();Nr(this,a);a=Za()-b;this.u||(this.G-=a)};
p.Xa=function(a,b,c){++this.ba;if(b===10)return this.Vb(a),this.ba;var d=this.ba;this.j[d]=a;this.u&&!c?this.J.push({id:d,priority:b}):(this.i[b].push(d),this.aa||this.u||(this.h!==0&&Or(this)!==this.B&&this.stop(),this.start()));return d};
p.sa=function(a){delete this.j[a]};
function Pr(a){a.J.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Qr(a){return!a.isHidden()&&a.na}
function Or(a){if(a.i[8].length){if(a.V)return 4;if(Qr(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Qr(a)?3:2:1;return 0}
p.wa=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Nr(a,b){try{b()}catch(c){a.wa(c)}}
function Rr(a){for(var b=y(Lr),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.xf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Sr(this,b);this.ha=!1};
p.Ag=function(){Sr(this)};
p.Ke=function(){Tr(this)};
p.ag=function(a){this.V=!0;var b=Or(this);b===4&&b!==this.B&&(this.stop(),this.start());Sr(this,void 0,a);this.V=!1};
p.Tf=function(){this.isHidden()||Tr(this);this.h&&(this.stop(),this.start())};
function Tr(a){a.stop();a.u=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Nr(a,e)}Ur(a);a.u=!1;Rr(a)&&a.start();b=Za()-b;a.G-=b}
function Ur(a){for(var b=0,c=a.J.length;b<c;b++){var d=a.J[b];a.i[d.priority].push(d.id)}a.J.length=0}
function Sr(a,b,c){a.V&&a.B===4&&a.h||a.stop();a.u=!0;b=Za()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.wa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Nr(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Nr(a,c)}while(c&&Za()<b)}a.u=!1;Ur(a);a.G=Kr;Rr(a)&&a.start()}
p.start=function(){this.aa=!1;if(this.h===0)switch(this.B=Or(this),this.B){case 1:var a=this.Wa;this.h=this.Ga?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Jr);break;case 2:this.h=window.setTimeout(this.Ub,this.dd);break;case 3:this.h=window.requestAnimationFrame(this.lb);break;case 4:this.h=window.setTimeout(this.Va,0)}};
p.pause=function(){this.stop();this.aa=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ga?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.X=function(){Pr(this);this.stop();this.na&&document.removeEventListener("visibilitychange",this.za);J.prototype.X.call(this)};var Vr=F("yt.scheduler.instance.timerIdMap_")||{},Wr=Cq("kevlar_tuner_scheduler_soft_state_timer_ms",800),Xr=0,Yr=0;function Zr(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.P)a=new Mr(S("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function $r(){as();var a=F("ytglobal.schedulerInstanceInstance_");a&&(yc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function as(){Pr(Zr());for(var a in Vr)Vr.hasOwnProperty(a)&&delete Vr[Number(a)]}
function bs(a,b,c){if(!c)return c=c===void 0,-Zr().Xa(a,b,c);var d=window.setTimeout(function(){var e=Zr().Xa(a,b);Vr[d]=e},c);
return d}
function cs(a){Zr().Vb(a)}
function ds(a){var b=Zr();if(a<0)b.sa(-a);else{var c=Vr[a];c?(b.sa(c),delete Vr[a]):window.clearTimeout(a)}}
function es(){gs()}
function gs(){window.clearTimeout(Xr);Zr().start()}
function hs(){Zr().pause();window.clearTimeout(Xr);Xr=window.setTimeout(es,Wr)}
function is(){window.clearTimeout(Yr);Yr=window.setTimeout(function(){js(0)},Wr)}
function js(a){is();var b=Zr();b.o=a;b.start()}
function ks(a){is();var b=Zr();b.o>a&&(b.o=a,b.start())}
function ls(){window.clearTimeout(Yr);var a=Zr();a.o=0;a.start()}
;function ms(){Hr.apply(this,arguments)}
v(ms,Hr);function ns(){ms.instance||(ms.instance=new ms);return ms.instance}
ms.prototype.Xa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):zq(a,c||0)};
ms.prototype.sa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ms.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
ms.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var qn=ns();
T("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",$r),E("yt.scheduler.instance.addJob",bs),E("yt.scheduler.instance.addImmediateJob",cs),E("yt.scheduler.instance.cancelJob",ds),E("yt.scheduler.instance.cancelAllJobs",as),E("yt.scheduler.instance.start",gs),E("yt.scheduler.instance.pause",hs),E("yt.scheduler.instance.setPriorityThreshold",js),E("yt.scheduler.instance.enablePriorityThreshold",ks),E("yt.scheduler.instance.clearPriorityThreshold",ls),E("yt.scheduler.initialized",
!0));function ps(a){var b=new Qn;this.h=(a=b.isAvailable()?a?new Rn(b,a):b:null)?new Ln(a):null;this.i=document.domain||window.location.hostname}
ps.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new dl).serialize(b))}catch(f){return}else e=escape(b);or(a,e,c,this.i)};
ps.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=pr(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ps.prototype.remove=function(a){this.h&&this.h.remove(a);qr(a,"/",this.i)};var qs=function(){var a;return function(){a||(a=new ps("ytidb"));return a}}();
function rs(){var a;return(a=qs())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ss=[],ts,us=!1;function vs(){var a={};for(ts=new ws(a.handleError===void 0?xs:a.handleError,a.logEvent===void 0?ys:a.logEvent);ss.length>0;)switch(a=ss.shift(),a.type){case "ERROR":ts.wa(a.payload);break;case "EVENT":ts.logEvent(a.eventType,a.payload)}}
function zs(a){us||(ts?ts.wa(a):(ss.push({type:"ERROR",payload:a}),ss.length>10&&ss.shift()))}
function As(a,b){us||(ts?ts.logEvent(a,b):(ss.push({type:"EVENT",eventType:a,payload:b}),ss.length>10&&ss.shift()))}
;function Bs(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Cs(a){return a.substr(0,a.indexOf(":"))||a}
;var Ds=zd||Ad;function Es(a){var b=id();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Fs={},Gs=(Fs.AUTH_INVALID="No user identifier specified.",Fs.EXPLICIT_ABORT="Transaction was explicitly aborted.",Fs.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Fs.MISSING_INDEX="Index not created.",Fs.MISSING_OBJECT_STORES="Object stores not created.",Fs.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Fs.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Fs.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Fs.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Fs.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Fs.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Fs.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Fs),Hs={},Is=(Hs.AUTH_INVALID="ERROR",Hs.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Hs.EXPLICIT_ABORT="IGNORED",Hs.IDB_NOT_SUPPORTED="ERROR",Hs.MISSING_INDEX=
"WARNING",Hs.MISSING_OBJECT_STORES="ERROR",Hs.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Hs.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Hs.QUOTA_EXCEEDED="WARNING",Hs.QUOTA_MAYBE_EXCEEDED="WARNING",Hs.UNKNOWN_ABORT="WARNING",Hs.INCOMPATIBLE_DB_VERSION="WARNING",Hs),Js={},Ks=(Js.AUTH_INVALID=!1,Js.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Js.EXPLICIT_ABORT=!1,Js.IDB_NOT_SUPPORTED=!1,Js.MISSING_INDEX=!1,Js.MISSING_OBJECT_STORES=!1,Js.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Js.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Js.QUOTA_EXCEEDED=!1,Js.QUOTA_MAYBE_EXCEEDED=!0,Js.UNKNOWN_ABORT=!0,Js.INCOMPATIBLE_DB_VERSION=!1,Js);function Ls(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Gs[a]:c;d=d===void 0?Is[a]:d;e=e===void 0?Ks[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Ls.prototype)}
v(Ls,U);function Ms(a,b){Ls.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Gs.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ms.prototype)}
v(Ms,Ls);function Ns(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ns.prototype)}
v(Ns,Error);var Os=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ps(a,b,c,d){b=Cs(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Ls)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Ls("QUOTA_EXCEEDED",a);if(Bd&&e.name==="UnknownError")return new Ls("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ns)return new Ls("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Os.some(function(f){return e.message.includes(f)}))return new Ls("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Ls("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ce:e.name})];e.level="WARNING";return e}
function Qs(a,b,c){var d=rs();return new Ls("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Rs(a){if(!a)throw Error();throw a;}
function Ss(a){return a}
function Ts(a){this.h=a}
function Us(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Us.all=function(a){return new Us(new Ts(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Hb:0};f.Hb<a.length;f={Hb:f.Hb},++f.Hb)Us.resolve(a[f.Hb]).then(function(g){return function(h){d[g.Hb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Us.resolve=function(a){return new Us(new Ts(function(b,c){a instanceof Us?a.then(b,c):b(a)}))};
Us.reject=function(a){return new Us(new Ts(function(b,c){c(a)}))};
Us.prototype.then=function(a,b){var c=this,d=a!=null?a:Ss,e=b!=null?b:Rs;return new Us(new Ts(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Vs(c,c,d,f,g)}),c.i.push(function(){Ws(c,c,e,f,g)})):c.state.status==="FULFILLED"?Vs(c,c,d,f,g):c.state.status==="REJECTED"&&Ws(c,c,e,f,g)}))};
Us.prototype.catch=function(a){return this.then(void 0,a)};
function Vs(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Us?Xs(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ws(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Us?Xs(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xs(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Us?Xs(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ys(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Zs(a){return new Promise(function(b,c){Ys(a,b,c)})}
function $s(a){return new Us(new Ts(function(b,c){Ys(a,b,c)}))}
;function at(a,b){return new Us(new Ts(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var bt=window,W=bt.ytcsi&&bt.ytcsi.now?bt.ytcsi.now:bt.performance&&bt.performance.timing&&bt.performance.now&&bt.performance.timing.navigationStart?function(){return bt.performance.timing.navigationStart+bt.performance.now()}:function(){return(new Date).getTime()};function ct(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
function dt(){return T("idb_immediate_commit")}
p=ct.prototype;p.add=function(a,b,c){return et(this,[a],{mode:"readwrite",ka:!0,commit:dt()},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return et(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return et(this,[a],{mode:"readonly",ka:!0,commit:dt()},function(c){return c.objectStore(a).count(b)})};
function ft(a,b,c){a=a.h.createObjectStore(b,c);return new gt(a)}
p.delete=function(a,b){return et(this,[a],{mode:"readwrite",ka:!0,commit:dt()&&!(b instanceof IDBKeyRange)},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return et(this,[a],{mode:"readonly",ka:!0,commit:dt()},function(c){return c.objectStore(a).get(b)})};
function ht(a,b,c){return et(a,[b],{mode:"readwrite",ka:!0,commit:dt()},function(d){d=d.objectStore(b);return $s(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function et(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,z;return B(function(x){switch(x.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){x.A(4);break}g++;k=Math.round(W());xa(x,5);l=a.h.transaction(b,e.mode);H=x.yield;var G=!!e.commit;var V=new jt(l);G=kt(V,d,G);return H.call(x,G,7);case 7:return m=x.i,n=Math.round(W()),lt(a,k,n,g,void 0,b.join(),e),x.return(m);case 5:r=za(x);t=Math.round(W());
w=Ps(r,a.h.name,b.join(),a.h.version);if((z=w instanceof Ls&&!w.h)||g>=f)lt(a,k,t,g,w,b.join(),e),h=w;x.A(2);break;case 4:return x.return(Promise.reject(h))}})}
function lt(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Ls&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&As("QUOTA_EXCEEDED",{dbName:Cs(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Ls&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),As("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),mt(a,!1,d,f,b,g.tag),zs(e)):mt(a,!0,d,f,b,g.tag)}
function mt(a,b,c,d,e,f){As("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function gt(a){this.h=a}
p=gt.prototype;p.add=function(a,b){return $s(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return $s(this.h.clear()).then(function(){})};
function nt(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return $s(this.h.count(a))};
function ot(a,b){return pt(a,{query:b},function(c){return c.delete().then(function(){return qt(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?ot(this,a):$s(this.h.delete(a))};
p.get=function(a){return $s(this.h.get(a))};
p.index=function(a){try{return new rt(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Ns(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function pt(a,b,c){a=a.h.openCursor(b.query,b.direction);return st(a).then(function(d){return at(d,c)})}
function jt(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Ls;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function kt(a,b,c){var d=new Promise(function(e,f){try{var g=b(a);c&&a.commit();g.then(function(h){e(h)}).catch(f)}catch(h){f(h),a.abort()}});
return Promise.all([d,a.done]).then(function(e){return y(e).next().value})}
jt.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Ls("EXPLICIT_ABORT");};
jt.prototype.commit=function(){if(!this.aborted){var a,b;(b=(a=this.h).commit)==null||b.call(a)}};
jt.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new gt(a),this.i.set(a,b));return b};
function rt(a){this.h=a}
p=rt.prototype;p.count=function(a){return $s(this.h.count(a))};
p.delete=function(a){return tt(this,{query:a},function(b){return b.delete().then(function(){return qt(b)})})};
p.get=function(a){return $s(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function tt(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return st(a).then(function(d){return at(d,c)})}
function ut(a,b){this.request=a;this.cursor=b}
function st(a){return $s(a).then(function(b){return b?new ut(a,b):null})}
function qt(a){a.cursor.continue(void 0);return st(a.request)}
ut.prototype.delete=function(){return $s(this.cursor.delete()).then(function(){})};
ut.prototype.getValue=function(){return this.cursor.value};
ut.prototype.update=function(a){return $s(this.cursor.update(a))};function vt(a,b,c){return new Promise(function(d,e){function f(){r||(r=new ct(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Oe,k=c.blocking,l=c.yg,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&As("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Cs(a)});var w=f(),z=new jt(g.transaction);
m&&m(w,function(x){return t.oldVersion<x&&t.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){As("IDB_UNEXPECTEDLY_CLOSED",{dbName:Cs(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function wt(a,b,c){c=c===void 0?{}:c;return vt(a,b,c)}
function xt(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Oe)&&c.addEventListener("blocked",function(){e()}),g.yield(Zs(c),4);
if(g.h!=2)return ya(g,0);f=za(g);throw Ps(f,a,"",-1);})}
;function zt(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
zt.prototype.i=function(a,b,c){c=c===void 0?{}:c;return wt(a,b,c)};
zt.prototype.delete=function(a){a=a===void 0?{}:a;return xt(this.name,a)};
function At(a,b){return new Ls("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Bt(a,b){if(!b)throw Qs("openWithToken",Cs(a.name));return a.open()}
zt.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return B(function(z){switch(z.h){case 1:return g=(f=Error().stack)!=null?f:"",xa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=z.i,H=c.options,G=[],V=y(Object.keys(H.Nb)),ja=V.next();!ja.done;ja=V.next()){ja=ja.value;var ic=H.Nb[ja],Od=ic.cg===void 0?Number.MAX_VALUE:ic.cg;!(x.h.version>=ic.Xb)||x.h.version>=Od||x.h.objectStoreNames.contains(ja)||G.push(ja)}k=G;if(k.length===0){z.A(5);break}l=Object.keys(c.options.Nb);
m=h.objectStoreNames();if(c.u<Cq("ytidb_reopen_db_retries",0))return c.u++,h.close(),zs(new Ls("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());if(!(c.o<Cq("ytidb_remake_db_retries",1))){z.A(6);break}c.o++;return z.yield(c.delete(),7);case 7:return zs(new Ls("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());case 6:throw new Ms(m,l);case 5:return z.return(h);case 2:n=za(z);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){z.A(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,At(c,t);return z.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ps(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw At(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,yg:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ct=new zt("YtIdbMeta",{Nb:{databases:{Xb:1}},upgrade:function(a,b){b(1)&&ft(a,"databases",{keyPath:"actualName"})}});
function Dt(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Bt(Ct,b),2);c=d.i;return d.return(et(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return $s(f.h.put(a,void 0)).then(function(){})})}))})}
function Et(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(Bt(Ct,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ft(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(Bt(Ct,b),2)):e.h!=3?(d=e.i,e.yield(et(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return pt(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return qt(g)})}),3)):e.return(c)})}
function Gt(a){return Ft(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Ht(a,b,c){return Ft(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function It(a){var b,c;return B(function(d){if(d.h==1)return b=Gr("YtIdbMeta hasAnyMeta other"),d.yield(Ft(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Jt,Kt=new function(){}(new function(){});
function Lt(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=rs();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ds)f=/WebKit\/([0-9]+)/.exec(id()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(id()),f=!(f&&parseInt(f[1],10)>=602));if(f||vd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Dt(d,Kt),4);case 4:return e.yield(Et("yt-idb-test-do-not-use",Kt),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Mt(){if(Jt!==void 0)return Jt;us=!0;return Jt=Lt().then(function(a){us=!1;var b;if((b=qs())!=null&&b.h){var c;b={hasSucceededOnce:((c=rs())==null?void 0:c.hasSucceededOnce)||a};var d;(d=qs())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Nt(){return F("ytglobal.idbToken_")||void 0}
function Ot(){var a=Nt();return a?Promise.resolve(a):Mt().then(function(b){(b=b?Kt:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var Pt=0;function Qt(a,b){Pt||(Pt=qn.ra(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Ot(),2);case 2:c=h.i;if(!c)return h.return();d=!0;xa(h,3);return h.yield(Ht(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(xt(f.actualName),7);case 7:return h.yield(Et(f.actualName,c),6);case 6:ya(h,4);break;case 3:g=za(h),zs(g),d=!1;case 4:qn.sa(Pt),Pt=0,d&&Qt(a,b),h.h=0}})}))}
function Rt(){var a;return B(function(b){return b.h==1?b.yield(Ot(),2):(a=b.i)?b.return(It(a)):b.return(!1)})}
new Kl;function St(a){if(!Fr())throw a=new Ls("AUTH_INVALID",{dbName:a}),zs(a),a;var b=Gr();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Tt(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Ot(),2);case 2:g=m.i;if(!g)throw h=Qs("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),zs(h),h;Bs(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:St(a);xa(m,3);return m.yield(Dt(k,g),5);case 5:return m.yield(wt(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),xa(m,7),m.yield(Et(k.actualName,
g),9);case 9:ya(m,8);break;case 7:za(m);case 8:throw l;}})}
function Ut(a,b,c){c=c===void 0?{}:c;return Tt(a,b,!1,c)}
function Vt(a,b,c){c=c===void 0?{}:c;return Tt(a,b,!0,c)}
function Wt(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Ot(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Bs(a);d=St(a);return e.yield(xt(d.actualName,b),3)}return e.yield(Et(d.actualName,c),0)})}
function Xt(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(xt(d.actualName,b),2):e.yield(Et(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Yt(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Ot(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Bs("LogsDatabaseV2");return d.yield(Gt(b),3)}c=d.i;return d.yield(Xt(c,a,b),0)})}
function Zt(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Ot(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Bs(a);return d.yield(xt(a,b),3)}return d.yield(Et(a,c),0)})}
;function $t(a,b){zt.call(this,a,b);this.options=b;Bs(a)}
v($t,zt);function au(a,b){var c;return function(){c||(c=new $t(a,b));return c}}
$t.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Vt:Ut)(a,b,Object.assign({},c))};
$t.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Zt:Wt)(this.name,a)};
function bu(a,b){return au(a,b)}
;var cu={},du=bu("ytGcfConfig",{Nb:(cu.coldConfigStore={Xb:1},cu.hotConfigStore={Xb:1},cu),shared:!1,upgrade:function(a,b){b(1)&&(nt(ft(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),nt(ft(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function eu(a){return Bt(du(),a)}
function fu(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(eu(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(ht(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function gu(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(eu(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(ht(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function hu(a){var b,c;return B(function(d){return d.h==1?d.yield(eu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(et(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return tt(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function iu(a){var b,c;return B(function(d){return d.h==1?d.yield(eu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(et(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return tt(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ju(){J.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(ju,J);ju.prototype.X=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;J.prototype.X.call(this)};function ku(){this.h=0;this.i=new ju}
function lu(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function mu(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Nt();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(iu(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(fu(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function nu(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Nt())?c?h.A(4):h.yield(hu(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(gu(c,b,g,d),0)})}
function ou(){if(!ku.instance){var a=new ku;ku.instance=a}a=ku.instance;var b=W()-a.h;if(!(a.h!==0&&b<Cq("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
ku.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function pu(){return"INNERTUBE_API_KEY"in aq&&"INNERTUBE_API_VERSION"in aq}
function qu(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),zf:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Vd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wi:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Bf:S("INNERTUBE_CONTEXT_HL"),Af:S("INNERTUBE_CONTEXT_GL"),Cf:S("INNERTUBE_HOST_OVERRIDE")||"",Df:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xi:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ru(a){var b={client:{hl:a.Bf,gl:a.Af,clientName:a.Vd,clientVersion:a.innertubeContextClientVersion,configInfo:a.zf}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Fq();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Vd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=kr()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Dr())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Er())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=ou())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(oq(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function su(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().Mi:(lr.instance||(lr.instance=new lr),a=mr(),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var tu=typeof TextEncoder!=="undefined"?new TextEncoder:null,uu=tu?function(a){return tu.encode(a)}:function(a){a=fd(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};var vu={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},wu={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function xu(a,b){this.version=a;this.args=b}
xu.prototype.serialize=function(){return{version:this.version,args:this.args}};function yu(a,b){this.topic=a;this.h=b}
yu.prototype.toString=function(){return this.topic};var zu=F("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.vc;O.prototype.publish=O.prototype.zb;O.prototype.clear=O.prototype.clear;E("ytPubsub2Pubsub2Instance",zu);var Au=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",Au);var Bu=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",Bu);var Cu=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",Cu);
E("ytPubsub2Pubsub2SkipSubKey",null);function Du(a,b){var c=Eu();c&&c.publish.call(c,a.toString(),a,b)}
function Fu(a){var b=Gu,c=Eu();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Au[d])try{if(f&&b instanceof yu&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ze){var l=new h;h.ze=l.version}var m=h.ze}catch(n){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Yb(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){gq(n)}},Cu[b.toString()]?F("yt.scheduler.instance")?qn.ra(g):zq(g,0):g())});
Au[d]=!0;Bu[b.toString()]||(Bu[b.toString()]=[]);Bu[b.toString()].push(d);return d}
function Hu(){var a=Iu,b=Fu(function(c){a.apply(void 0,arguments);Ju(b)});
return b}
function Ju(a){var b=Eu();b&&(typeof a==="number"&&(a=[a]),Sb(a,function(c){b.unsubscribeByKey(c);delete Au[c]}))}
function Eu(){return F("ytPubsub2Pubsub2Instance")}
;function Ku(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Du("meta_logging_csi_event",{timerName:a,wj:b})}
;var Lu=void 0,Mu=void 0;function Nu(){Mu||(Mu=zp(S("WORKER_SERIALIZATION_URL")));return Mu||void 0}
function Ou(){var a=Nu();Lu||a===void 0||(Lu=new Worker(qb(a),void 0));return Lu}
;var Pu=Cq("max_body_size_to_compress",5E5),Qu=Cq("min_body_size_to_compress",500),Ru=!0,Su=0,Tu=0,Uu=Cq("compression_performance_threshold_lr",250),Vu=Cq("slow_compressions_before_abandon_count",4),Wu=!1,Xu=new Map,Yu=1,Zu=!0;function $u(){if(typeof Worker==="function"&&Nu()&&!Wu){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Xu.get(c.key);d&&(av(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Xu.delete(c.key))}},b=Ou();
b&&(b.addEventListener("message",a),b.onerror=function(){Xu.clear()},Wu=!0)}}
function bv(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Ru)try{var g=cv(b);if(g!=null&&(g>Pu||g<Qu))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Zu||!T("initial_gzip_use_main_thread"))){Wu||$u();var h=Ou();if(h&&!e){Xu.set(Yu,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Yu});Yu++;return}}var k=xp(uu(b));av(k,f,a,c,d)}}catch(l){hq(l),d(a,c)}else d(a,c)}
function av(a,b,c,d,e){Zu=!1;var f=W();b.ticks.gelc=f;Tu++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Uu&&(Su++,Ru=!1);dv(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function ev(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Ru&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=cv(g);if(h!=null&&(h>Pu||h<Qu))return a;c=b?{level:1}:void 0;f=xp(uu(g),c);var k=W();e.ticks.gelc=k;if(b){Tu++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Uu)if(Su++,T("abandon_compression_after_N_slow_zips_lr")){b=Su/Tu;var l=Vu/Cq("compression_disable_point");Tu>0&&Tu%Cq("compression_disable_point")===0&&b>=l&&(Ru=!1)}else Ru=!1;dv(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return hq(m),a}}else return a}
function cv(a){try{return(new Blob(a.split(""))).size}catch(b){return hq(b),null}}
function dv(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Ku("gel_compression",a,{sampleRate:.1})}
;function fv(a){a=Object.assign({},a);delete a.Authorization;var b=ui();if(b){var c=new un;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ed(c.digest(),3)}return a}
;var gv;function hv(){gv||(gv=new ps("yt.innertube"));return gv}
function iv(a,b,c,d){if(d)return null;d=hv().get("nextId",!0)||1;var e=hv().get("requests",!0)||{};e[d]={method:a,request:b,authState:fv(c),requestTime:Math.round(W())};hv().set("nextId",d+1,86400,!0);hv().set("requests",e,86400,!0);return d}
function jv(a){var b=hv().get("requests",!0)||{};delete b[a];hv().set("requests",b,86400,!0)}
function kv(a){var b=hv().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=fv(su(!1));Ji(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),lv(a,d.method,e,{}));delete b[c]}}hv().set("requests",b,86400,!0)}}
;function mv(a){this.xc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Fb=function(){};
this.now=Date.now;this.cc=!1;var b;this.te=(b=a.te)!=null?b:100;var c;this.ne=(c=a.ne)!=null?c:1;var d;this.ke=(d=a.ke)!=null?d:2592E6;var e;this.ee=(e=a.ee)!=null?e:12E4;var f;this.le=(f=a.le)!=null?f:5E3;var g;this.W=(g=a.W)!=null?g:void 0;this.Fc=!!a.Fc;var h;this.Cc=(h=a.Cc)!=null?h:.1;var k;this.Tc=(k=a.Tc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Fb&&(this.Fb=a.Fb);a.cc&&(this.cc=a.cc);a.xc&&(this.xc=a.xc);this.Y=a.Y;this.Ea=a.Ea;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.yd=a.yd;this.vd=a.vd;nv(this)&&(!this.Y||this.Y("networkless_logging"))&&ov(this)}
function ov(a){nv(a)&&!a.cc&&(a.h=!0,a.Fc&&Math.random()<=a.Cc&&a.ga.Se(a.W),pv(a),a.fa.va()&&a.uc(),a.fa.listen(a.yd,a.uc.bind(a)),a.fa.listen(a.vd,a.Nd.bind(a)))}
p=mv.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(nv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.W).then(function(e){d.id=e;c.fa.va()&&qv(c,d)}).catch(function(e){qv(c,d);
rv(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(nv(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.va()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.W).catch(function(l){rv(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.W).catch(function(g){d.sendFn(a,b,e.skipRetry);
rv(d,g)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(nv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.Db(d.id,c.W):e=!0;c.fa.tb&&c.Y&&c.Y("vss_network_hint")&&c.fa.tb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.W).then(function(g){d.id=g;e&&c.ga.Db(d.id,c.W)}).catch(function(g){rv(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.uc=function(){var a=this;if(!nv(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.ra(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.Rd("NEW",a.W),2);if(c.h!=3)return b=c.i,b?c.yield(qv(a,b),3):(a.Nd(),c.return());a.i&&(a.i=0,a.uc());c.h=0})},this.te))};
p.Nd=function(){this.Ea.sa(this.i);this.i=0};
function qv(a,b){var c;return B(function(d){switch(d.h){case 1:if(!nv(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Jf(b.id,a.W),3);case 3:(c=d.i)||a.Fb(Error("The request cannot be found in the database."));case 2:if(sv(a,b,a.ke)){d.A(4);break}a.Fb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.Db(b.id,a.W),5);case 5:return d.return();case 4:b.skipRetry||(b=tv(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.Db(b.id,a.W),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function tv(a,b){if(!nv(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=uv(f);(h=vv(f))&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Tc)){m.A(2);break}if(!a.fa.Xc){m.A(3);break}return m.yield(a.fa.Xc(),3);case 3:if(a.fa.va()){m.A(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.zd(b.id,a.W,!1),6);case 6:return m.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Tc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.ne?m.yield(a.ga.zd(b.id,a.W,!0,h?!1:void 0),12):m.yield(a.ga.Db(b.id,a.W),8);case 12:a.Ea.ra(function(){a.fa.va()&&a.uc()},a.le);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.Db(b.id,a.W),2);a.fa.tb&&a.Y&&a.Y("vss_network_hint")&&a.fa.tb(!0);d(e,f);h.h=0})};
return b}
function sv(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function pv(a){if(!nv(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.Rd("QUEUED",a.W).then(function(b){b&&!sv(a,b,a.ee)?a.Ea.ra(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.zd(b.id,a.W),2);pv(a);c.h=0})}):a.fa.va()&&a.uc()})}
function rv(a,b){a.Fe&&!a.fa.va()?a.Fe(b):a.handleError(b)}
function nv(a){return!!a.W||a.xc}
function uv(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function vv(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Av;
function Bv(){if(Av)return Av();var a={};Av=bu("LogsDatabaseV2",{Nb:(a.LogsRequestsStore={Xb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ft(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),nt(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Av()}
;function Cv(a){return Bt(Bv(),a)}
function Dv(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Cv(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(ht(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Ev(c);return g.return(f)})}
function Fv(a,b){var c,d,e,f,g,h,k,l,m;return B(function(n){if(n.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(Cv(b),2);if(n.h!=3)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m=a==="NEW"?"readwrite":"readonly",T("use_readonly_for_get_most_recent_by_status_killswitch")&&(m="readwrite"),n.yield(et(d,["LogsRequestsStore"],{mode:m,ka:!0},
function(r){return tt(r.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(t){t.getValue()&&(l=t.getValue(),a==="NEW"&&(l.status="QUEUED",t.update(l)))})}),3);
c.ticks.tc=W();Ev(c);return n.return(l)})}
function Gv(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Cv(b),2);c=d.i;return d.return(et(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",$s(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Hv(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(Cv(b),2);e=f.i;return f.return(et(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),$s(h.h.put(k,void 0)).then(function(){return k})):Us.resolve(void 0)})}))})}
function Iv(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Cv(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Jv(a){var b,c;return B(function(d){if(d.h==1)return d.yield(Cv(a),2);b=d.i;c=W()-2592E6;return d.yield(et(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return pt(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return qt(f)})})}),0)})}
function Kv(){B(function(a){return a.yield(Yt(),0)})}
function Ev(a){T("nwl_csi_killswitch")||Ku("networkless_performance",a,{sampleRate:1})}
;var Lv={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,
visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,
spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,
vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,
buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,
buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,
transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,
tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,
activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,
browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,
gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,
sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,
musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,
embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,
getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,
unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,
connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531};var Mv={},Nv=bu("ServiceWorkerLogsDatabase",{Nb:(Mv.SWHealthLog={Xb:1},Mv),shared:!0,upgrade:function(a,b){b(1)&&nt(ft(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Ov(a){return Bt(Nv(),a)}
function Pv(a){var b,c;B(function(d){if(d.h==1)return d.yield(Ov(a),2);b=d.i;c=W()-2592E6;return d.yield(et(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return pt(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return qt(f)})})}),0)})}
function Qv(a){var b;return B(function(c){if(c.h==1)return c.yield(Ov(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Rv={},Sv=0;function Tv(a){var b=b===void 0?{}:b;var c=new Image,d=""+Sv++;Rv[d]=c;c.onload=c.onerror=function(){delete Rv[d]};
b.qj&&(c.referrerPolicy="no-referrer");c.src=a}
;var Uv;function Vv(){Uv||(Uv=new ps("yt.offline"));return Uv}
function Wv(a){if(T("offline_error_handling")){var b=Vv().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Vv().set("errors",b,2592E3,!0)}}
;function Xv(){this.h=new Map;this.i=!1}
function Yv(){if(!Xv.instance){var a=F("yt.networkRequestMonitor.instance")||new Xv;E("yt.networkRequestMonitor.instance",a);Xv.instance=a}return Xv.instance}
Xv.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Xv.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Xv.prototype.removeParams=function(a){return a.split("?")[0]};
Xv.prototype.removeParams=Xv.prototype.removeParams;Xv.prototype.isEndpointCFR=Xv.prototype.isEndpointCFR;Xv.prototype.requestComplete=Xv.prototype.requestComplete;Xv.getInstance=Yv;function Zv(){nk.call(this);var a=this;this.j=!1;this.h=pn();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Vv().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;gq(d)}Vv().set("errors",{},2592E3,!0)}}})}
v(Zv,nk);function $v(){if(!Zv.instance){var a=F("yt.networkStatusManager.instance")||new Zv;E("yt.networkStatusManager.instance",a);Zv.instance=a}return Zv.instance}
p=Zv.prototype;p.va=function(){return this.h.va()};
p.tb=function(a){this.h.h=a};
p.uf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.af=function(){this.j=!0};
p.listen=function(a,b){return this.h.listen(a,b)};
p.Xc=function(a){a=nn(this.h,a);a.then(function(b){T("use_cfr_monitor")&&Yv().requestComplete("generate_204",b)});
return a};
Zv.prototype.sendNetworkCheckRequest=Zv.prototype.Xc;Zv.prototype.listen=Zv.prototype.listen;Zv.prototype.enableErrorFlushing=Zv.prototype.af;Zv.prototype.getWindowStatus=Zv.prototype.uf;Zv.prototype.networkStatusHint=Zv.prototype.tb;Zv.prototype.isNetworkAvailable=Zv.prototype.va;Zv.getInstance=$v;function aw(a){a=a===void 0?{}:a;nk.call(this);var b=this;this.h=this.u=0;this.j=$v();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){bw(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bw(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ok(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ok(b,"publicytnetworkstatus-offline")})))}
v(aw,nk);aw.prototype.va=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
aw.prototype.tb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
aw.prototype.Xc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Yv().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.tb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function bw(a,b){a.rateLimit?a.h?(qn.sa(a.u),a.u=qn.ra(function(){a.o!==b&&(ok(a,b),a.o=b,a.h=W())},a.rateLimit-(W()-a.h))):(ok(a,b),a.o=b,a.h=W()):ok(a,b)}
;var cw;function dw(){var a=mv.call;cw||(cw=new aw({dj:!0,Ti:!0}));a.call(mv,this,{ga:{Se:Jv,Db:Iv,Rd:Fv,Jf:Gv,zd:Hv,set:Dv},fa:cw,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);hq(b,void 0,void 0,void 0,!0)}else gq(b)},
Fb:hq,sendFn:ew,now:W,Fe:Wv,Ea:ns(),yd:"publicytnetworkstatus-online",vd:"publicytnetworkstatus-offline",Fc:!0,Cc:.1,Tc:Cq("potential_esf_error_limit",10),Y:T,cc:!(Fr()&&fw())});this.j=new Kl;T("networkless_immediately_drop_all_requests")&&Kv();Zt("LogsDatabaseV2")}
v(dw,mv);function gw(){var a=F("yt.networklessRequestController.instance");a||(a=new dw,E("yt.networklessRequestController.instance",a),T("networkless_logging")&&Ot().then(function(b){a.W=b;ov(a);a.j.resolve();a.Fc&&Math.random()<=a.Cc&&a.W&&Pv(a.W);T("networkless_immediately_drop_sw_health_store")&&hw(a)}));
return a}
dw.prototype.writeThenSend=function(a,b){b||(b={});b=iw(a,b);Fr()||(this.h=!1);mv.prototype.writeThenSend.call(this,a,b)};
dw.prototype.sendThenWrite=function(a,b,c){b||(b={});b=iw(a,b);Fr()||(this.h=!1);mv.prototype.sendThenWrite.call(this,a,b,c)};
dw.prototype.sendAndWrite=function(a,b){b||(b={});b=iw(a,b);Fr()||(this.h=!1);mv.prototype.sendAndWrite.call(this,a,b)};
dw.prototype.awaitInitialization=function(){return this.j.promise};
function hw(a){var b;B(function(c){if(!a.W)throw b=Qs("clearSWHealthLogsDb"),b;return c.return(Qv(a.W).catch(function(d){a.handleError(d)}))})}
function ew(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&jw(a,b);if(T("use_request_time_ms_header"))b.headers&&sq(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Jq(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Jq(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new db({url:a});if(k.h.dsh==="1")var l=null;else{var m=k.h.ae;if(m==="1"){var n=k.h.adurl;if(n)try{l={version:3,Ye:decodeURIComponent(n),Me:bb(k.i,"act=1","ri=1",eb(k))};break c}catch(ja){}}l=m==="2"?{version:4,Ye:bb(k.i,"dct=1","suid="+k.j,"ri=1"),Me:bb(k.i,"act=1","ri=1","suid="+k.j)}:null}}if(l){var r=mc(a),t;if(!(t=!r||!r.endsWith("/aclk"))){var w=a.search(uc),z=tc(a,0,"ri",w);if(z<0)var x=null;else{var H=a.indexOf("&",z);if(H<
0||H>w)H=w;x=fc(a.slice(z+3,H!==-1?H:0))}t=x!=="1"}var G=!t;break b}}catch(ja){}G=!1}if(G){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var V=!0;break b}}catch(ja){}V=!1}c=V?!0:!1}else c=!1;c||Tv(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),bv(a,b.postBody,b,Nq,d)):bv(a,JSON.stringify(b.postParams),b,Mq,d):Nq(a,b)}
function iw(a,b){T("use_event_time_ms_header")&&sq(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function jw(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Yv().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Yv().requestComplete(a,!0);d(e,f)}}
function fw(){return lc(document.location.toString())!=="www.youtube-nocookie.com"}
;var kw=!1,lw=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:kw};E("ytNetworklessLoggingInitializationOptions",lw);function mw(){var a;B(function(b){if(b.h==1)return b.yield(Ot(),2);a=b.i;if(!a||!Fr()&&!T("nwl_init_require_datasync_id_killswitch")||!fw())return b.A(0);kw=!0;lw.isNwlInitialized=kw;return b.yield(gw().awaitInitialization(),0)})}
;function nw(a){var b=this;this.config_=null;a?this.config_=a:pu()&&(this.config_=qu());Ir(function(){kv(b)},5E3)}
nw.prototype.isReady=function(){!this.config_&&pu()&&(this.config_=qu());return!!this.config_};
function lv(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=iv(b,c,l,k)),r)){var t=g.onSuccess,w=g.onFetchSuccess;g.onSuccess=function(H,G){jv(r);t(H,G)};
c.onFetchSuccess=function(H,G){jv(r);w(H,G)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?gw().writeThenSend(m,g):gw().sendAndWrite(m,g);
else if(d.compress){var z=!d.networklessOptions.writeThenSend;if(g.postBody){var x=g.postBody;typeof x!=="string"&&(x=JSON.stringify(g.postBody));bv(m,x,g,Nq,z)}else bv(m,JSON.stringify(g.postParams),g,Mq,z)}else Mq(m,g)}catch(H){if(H.name==="InvalidAccessError")r&&(jv(r),r=0),hq(Error("An extension is blocking network request."));else throw H;}r&&Ir(function(){kv(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&hq(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);gq(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onProgress:function(n){if(d.onProgress)d.onProgress(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Cf)&&(h=f);var k=a.config_.Df||!1,l=su(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=qq(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?lw.isNwlInitialized:kw)?Mt().then(function(n){e(n)}):e(!1)}
;var ow=0,pw=xd?"webkit":wd?"moz":ud?"ms":td?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++ow});var qw={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rw(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qw||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function sw(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
rw.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rw.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rw.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Fi=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Fi);var tw=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",tw);
function uw(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ei(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&Ji(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function vw(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=uw(a,b,c,d);if(e)return e;e=++tw.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rw(h);if(!Ui(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rw(h);
h.currentTarget=a;return c.call(a,h)};
g=fq(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ww()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Fi[e]=[a,b,c,g,d];return e}
function xw(a){a&&(typeof a=="string"&&(a=[a]),Sb(a,function(b){if(b in Fi){var c=Fi[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ww()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Fi[b]}}))}
var ww=Dk(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function yw(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.V=vw(window,"mousemove",Xa(this.aa,this));a=Xa(this.J,this);typeof a==="function"&&(a=fq(a));this.ba=window.setInterval(a,25)}
ab(yw,J);yw.prototype.aa=function(a){a.h===void 0&&sw(a);var b=a.h;a.i===void 0&&sw(a);this.h=new Ai(b,a.i)};
yw.prototype.J=function(){if(this.h){var a=W();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
yw.prototype.X=function(){window.clearInterval(this.ba);xw(this.V)};var zw={};function Aw(a){var b=a===void 0?{}:a;a=b.Yf===void 0?!1:b.Yf;b=b.bf===void 0?!0:b.bf;if(F("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&Bw();Cw(a,b);new yw(function(){Dw("mouse",100)})}}
function Cw(a,b){var c=window;a=a===void 0?!1:a;b=b===void 0?!0:b;vw(c.document,"keydown",Bw);vw(c.document,"keyup",Bw);vw(c.document,"mousedown",Bw);vw(c.document,"mouseup",Bw);a?vw(c,"touchmove",function(){Dw("touchmove",200)},{passive:!0}):(vw(c,"resize",function(){Dw("resize",200)}),b&&vw(c,"scroll",function(){Dw("scroll",200)}));
vw(c.document,"touchstart",Bw,{passive:!0});vw(c.document,"touchend",Bw,{passive:!0})}
function Dw(a,b){zw[a]||(zw[a]=!0,qn.ra(function(){Bw();zw[a]=!1},b))}
function Bw(){F("_lact",window)==null&&Aw();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ew(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Fw=D.ytPubsubPubsubInstance||new O,Gw=D.ytPubsubPubsubSubscribedKeys||{},Hw=D.ytPubsubPubsubTopicToKeys||{},Iw=D.ytPubsubPubsubIsSynchronous||{};function Jw(a,b){var c=Kw();if(c&&b){var d=c.subscribe(a,function(){function e(){Gw[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Iw[a]?e():zq(e,0)}catch(g){gq(g)}},void 0);
Gw[d]=!0;Hw[a]||(Hw[a]=[]);Hw[a].push(d);return d}return 0}
function Lw(a){var b=Kw();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Sb(a,function(c){b.unsubscribeByKey(c);delete Gw[c]}))}
function Mw(a,b){var c=Kw();c&&c.publish.apply(c,arguments)}
function Nw(a){var b=Kw();if(b)if(b.clear(a),a)Ow(a);else for(var c in Hw)Ow(c)}
function Kw(){return D.ytPubsubPubsubInstance}
function Ow(a){Hw[a]&&(a=Hw[a],Sb(a,function(b){Gw[b]&&delete Gw[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.vc;O.prototype.publish=O.prototype.zb;O.prototype.clear=O.prototype.clear;E("ytPubsubPubsubInstance",Fw);E("ytPubsubPubsubTopicToKeys",Hw);E("ytPubsubPubsubIsSynchronous",Iw);E("ytPubsubPubsubSubscribedKeys",Gw);var Pw=Symbol("injectionDeps");function Qw(a){this.name=a}
Qw.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Rw(a){this.key=a}
function Sw(){this.i=new Map;this.j=new Map;this.h=new Map}
function Tw(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);if(c)try{c.Wc(a.resolve(b.lc))}catch(d){c.mj(d)}}
Sw.prototype.resolve=function(a){return a instanceof Rw?Uw(this,a.key,[],!0):Uw(this,a,[])};
function Uw(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.xe!==void 0)var e=d.xe;else if(d.Gg)e=d[Pw]?Vw(a,d[Pw],c):[],e=d.Gg.apply(d,A(e));else if(d.Ed){e=d.Ed;var f=e[Pw]?Vw(a,e[Pw],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.uj||a.h.set(b,e);return e}
function Vw(a,b,c){return b?b.map(function(d){return d instanceof Rw?Uw(a,d.key,c,!0):Uw(a,d,c)}):[]}
;var Ww;function Xw(){Ww||(Ww=new Sw);return Ww}
;var Yw=window;function Zw(){var a,b;return"h5vcc"in Yw&&((a=Yw.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Yw.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Yw&&Yw.performance.mark&&Yw.performance.measure?2:0}
function $w(a){var b=Zw();switch(b){case 1:Yw.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Yw.performance.mark(a+"-start");break;case 0:break;default:Eb(b,"unknown trace type")}}
function ax(a){var b=Zw();switch(b){case 1:Yw.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Yw.performance.mark(c);Yw.performance.measure(a,b,c);break;case 0:break;default:Eb(b,"unknown trace type")}}
;var bx=T("web_enable_lifecycle_monitoring")&&Zw()!==0,cx=T("web_enable_lifecycle_monitoring");function dx(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function ex(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ns():d;this.j=c;this.scheduler=d;this.i=new Kl;this.h=a;for(a={qb:0};a.qb<this.h.length;a={Sc:void 0,qb:a.qb},a.qb++)a.Sc=this.h[a.qb],c=function(e){return function(){e.Sc.od();b.h[e.qb].Uc=!0;b.h.every(function(f){return f.Uc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Sc),d=this.scheduler.Xa(c,d),this.h[a.qb]=Object.assign({},a.Sc,{od:c,
jobId:d})}
function fx(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Uc||(a.scheduler.sa(c.jobId),a.scheduler.Xa(c.od,10))}
ex.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Uc||this.scheduler.sa(b.jobId),b.Uc=!0;this.i.resolve()};
ex.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function gx(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};bx&&$w(this.state)}
p=gx.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;bx&&ax(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(fx(this.j),this.j=void 0);hx(this,a,b);this.state=a;bx&&$w(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ix(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ix(a,b){var c=b.filter(function(e){return jx(a,e)===10}),d=b.filter(function(e){return jx(a,e)!==10});
return a.B.tj?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.fg.apply(a,[c].concat(A(e))),2);a.pe.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.gg.apply(a,[c].concat(A(e)));a.pe.apply(a,[d].concat(A(e)))}}
p.gg=function(a){for(var b=C.apply(1,arguments),c=ns(),d=y(a),e=d.next(),f={};!e.done;f={ec:void 0},e=d.next())f.ec=e.value,c.Vb(function(g){return function(){kx(g.ec.name);lx(function(){return g.ec.callback.apply(g.ec,A(b))});
mx(g.ec.name)}}(f))};
p.fg=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=ns(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.eb=e.value;f.wc=void 0;g=function(k){return function(){kx(k.eb.name);var l=lx(function(){return k.eb.callback.apply(k.eb,A(b))});
De(l)?k.wc=T("web_lifecycle_error_handling_killswitch")?l.then(function(){mx(k.eb.name)}):l.then(function(){mx(k.eb.name)},function(m){dx(m);
mx(k.eb.name)}):mx(k.eb.name)}}(f);
c.Vb(g);return f.wc?h.yield(f.wc,3):h.A(3)}f={eb:void 0,wc:void 0};e=d.next();return h.A(2)})};
p.pe=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{od:function(){kx(e.name);lx(function(){return e.callback.apply(e,A(b))});
mx(e.name)},
priority:jx(c,e)}});
d.length&&(this.j=new ex(d))};
function jx(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function kx(a){bx&&a&&$w(a)}
function mx(a){bx&&a&&ax(a)}
function hx(a,b,c){cx&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(gx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function lx(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){dx(b)}}
;function nx(a){gx.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ox;v(nx,gx);nx.prototype.i=function(a,b){var c=this;this.h=Ir(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
nx.prototype.u=function(a,b){this.h&&(qn.sa(this.h),this.h=null);a(b==null?void 0:b.event)};
function px(){ox||(ox=new nx);return ox}
;var qx=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return qx});function rx(){this.store={};this.h={}}
rx.prototype.storePayload=function(a,b){a=sx(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
rx.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=tx(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
rx.prototype.extractMatchingEntries=function(a){a=tx(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
rx.prototype.getSequenceCount=function(a){a=tx(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function tx(a,b){var c=sx(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&sx(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ux(b.auth,g[0])){var h=b.isJspb;ux(h===void 0?"undefined":h?"true":"false",g[1])&&ux(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),ux(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function ux(a,b){return a===void 0||a==="undefined"?!0:a===b}
rx.prototype.getSequenceCount=rx.prototype.getSequenceCount;rx.prototype.extractMatchingEntries=rx.prototype.extractMatchingEntries;rx.prototype.smartExtractMatchingEntries=rx.prototype.smartExtractMatchingEntries;rx.prototype.storePayload=rx.prototype.storePayload;function sx(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function vx(a,b){if(a)return a[b.name]}
;var wx=Cq("initial_gel_batch_timeout",2E3),xx=Cq("gel_queue_timeout_max_ms",6E4),yx=Cq("gel_min_batch_size",5),zx=void 0;function Ax(){this.o=this.h=this.i=0;this.j=!1}
var Bx=new Ax,Cx=new Ax,Dx=new Ax,Ex=new Ax,Fx,Gx=!0,Hx=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Hx);var Ix={};function Jx(){var a=F("yt.logging.ims");a||(a=new rx,E("yt.logging.ims",a));return a}
function Kx(a,b){if(a.endpoint==="log_event"){Lx(a);var c=Mx(a),d=Nx(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=Lv[d||""];var f,g,h,k=Xw().resolve(new Rw(ku))==null?void 0:(f=lu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Ox(e.tier);if(k===400){Px(a,b);return}}Ix[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Jx().storePayload(c,a.payload);Qx(b,c,d==="gelDebuggingEvent")}}
function Qx(a,b,c){function d(){Rx({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(zx=new a);a=Cq("tvhtml5_logging_max_batch_ads_fork")||Cq("tvhtml5_logging_max_batch")||Cq("web_logging_max_batch")||100;var f=W(),g=Sx(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Jx().getSequenceCount(b));c>=1E3?d():c>=a?Fx||(Fx=Tx(function(){d();Fx=void 0},0)):f-h>=10&&(Ux(e,b.tier),g.o=f)}
function Px(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Jx().storePayload({isJspb:!1},a.payload);Lx(a);var c=Mx(a),d=new Map;d.set(c,[a.payload]);var e=Nx(a.payload)||"";b&&(zx=new b);return new Ek(function(f,g){zx&&zx.isReady()?Vx(d,zx,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Mx(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Hx[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Rx(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Ek(function(e,f){var g=Sx(c,d),h=g.j;g.j=!1;Wx(g.i);Wx(g.h);g.h=0;zx&&zx.isReady()?d===void 0&&T("enable_web_tiered_gel")?Xx(e,f,a,b,c,300,h):Xx(e,f,a,b,c,d,h):(Ux(c,d),e())})}
function Xx(a,b,c,d,e,f,g){var h=zx;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Jx().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Jx().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Ix)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Jx().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Jx().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Ix[l];Vx(k,h,a,b,c,!1,g)}
function Ux(a,b){function c(){Rx({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Sx(a,b),e=d===Ex||d===Dx?5E3:xx;T("web_gel_timeout_cap")&&!d.h&&(e=Tx(function(){c()},e),d.h=e);
Wx(d.i);e=S("LOGGING_BATCH_TIMEOUT",Cq("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Gx&&(e=wx);e=Tx(function(){Cq("gel_min_batch_size")>0?Jx().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=yx&&c():c()},e);
d.i=e}
function Vx(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={td:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,xd:void 0,wd:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Li({context:ru(b.config_||qu())});if(!Na(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Hx[m])&&
Yx(g.batchRequest,m,n);delete Hx[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Zx(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.xd=function(r){T("start_client_gcf")&&qn.ra(function(){return B(function(t){return t.yield($x(r),0)})});
k--;k||c()};
g.td=0;g.wd=function(r){return function(){r.td++;if(e.bypassNetworkless&&r.td===1)try{lv(b,l,r.batchRequest,ay({writeThenSend:!0},r.dangerousLogToVisitorSession,r.xd,r.wd,f)),Gx=!1}catch(t){gq(t),d()}k--;k||c()}}(g);
try{lv(b,l,g.batchRequest,ay(e,g.dangerousLogToVisitorSession,g.xd,g.wd,f)),Gx=!1}catch(r){gq(r),d()}}}
function ay(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Oi:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};by()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Zx(a,b,c){by()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),bq("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Yx(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Lx(a){var b=Eq("il_payload_scraping")==="enable_il_payload_scraping";if(!F("yt.logging.transport.enableScrapingForTest"))if(b)qx=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",qx),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),E("yt.logging.transport.scrapeClientEvent",
!0);else return;b=F("yt.logging.transport.scrapedPayloadsForTesting");var c=F("yt.logging.transport.payloadToScrape"),d=F("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function by(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Tx(a,b){return T("transport_use_scheduler")===!1?zq(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Ir(function(){if(px().currentState==="none")a();else{var c={};px().install((c.none={callback:a},c))}},b):Ir(a,b)}
function Wx(a){T("transport_use_scheduler")?qn.sa(a):window.clearTimeout(a)}
function $x(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=vx(d,Dp),g=(f=d)==null?void 0:f.hotHashData,h=vx(d,Cp),l=(k=d)==null?void 0:k.coldHashData,(m=Xw().resolve(new Rw(ku)))?g?e?n.yield(mu(m,g,e),2):n.yield(mu(m,g),2):n.A(2):n.return()):l?h?n.yield(nu(m,l,h),0):n.yield(nu(m,l),0):n.A(0)})}
function Sx(a,b){b=b===void 0?200:b;return a?b===300?Ex:Cx:b===300?Dx:Bx}
function Nx(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Lv[b])return b}
function Ox(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var cy=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",cy);
function dy(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ew();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,cy[b]=b in cy?cy[b]+1:0,a.sequence={index:cy[b],groupKey:b},d.endOfSequence&&delete cy[d.sequenceGroup]);T("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Px:Kx)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function ys(a,b,c){c=c===void 0?{}:c;var d=nw;S("ytLoggingEventsDefaultDisabled",!1)&&nw===nw&&(d=null);dy(a,b,d,c)}
;var ey=new Set,fy=0,gy=0,hy=0,iy=[],jy=[],ky=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ly(){Sb(S("ERRORS")||[],function(a){my.apply(null,a)});
bq("ERRORS",[])}
function xs(a){my(a)}
function ny(a){my(a,"WARNING")}
function oy(a){a instanceof Error?my(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",ny(a))}
function py(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=cq("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Ue)f||(f={}),f.componentStack=m}f&&qy(e,f);g?my(e):ny(e)}}
function my(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(fy>=5))){d=[];e=y(jy);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(x){}}d=[].concat(A(iy),A(d));var k=bc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=gr(a.args[r],"params."+r,c,n),n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,z=ir(t[r]);c[w]=z;n+=w.length+z.length;if(n>500)break}}else c.params=ir(t)}if(d.length)for(r=0;r<d.length&&!(n=gr(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=br();c=y(a.fb);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.gj)){a=d.weight;break a}a=y(a.Za);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=y(Wq);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Rc[r.name])for(e=y(c.Rc[r.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.sd(f);break}r.params||(r.params={});a=br();r.params["params.errorServiceSignature"]="msg="+a.fb.length+"&cb="+a.Za.length;r.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Oi(Pi,"sample")).constructor!==
Oi&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!ey.has(r.message)){if(g&&T("web_enable_error_204"))ry(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(dr.zb("handleError",r),T("record_app_crashed_web")&&hy===0&&r.sampleWeight===1&&(hy++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),ys("appCrashed",
g)),gy++):b==="WARNING"&&dr.zb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(ky);for(c=a.next();!c.done;c=a.next())if(Es(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!cq("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(ys("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Rx(void 0,void 0,!1))}T("suppress_error_204_logging")||
ry(b,r)}try{ey.add(r.message)}catch(x){}fy++}}}
function ry(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=S("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Nq(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function qy(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function sy(){this.register=new Map}
function ty(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.ge("ABORTED")}
sy.prototype.clear=function(){ty(this);this.register.clear()};
var uy=new sy;var vy=Date.now().toString();
function wy(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(vy)for(a=1,b=0;b<vy.length;b++)d[a%16]^=d[(a-1)%16]/4^vy.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var xy,yy=D.ytLoggingDocDocumentNonce_;yy||(yy=wy(),E("ytLoggingDocDocumentNonce_",yy));xy=yy;function zy(a){this.h=a}
p=zy.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Fp;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&ag(a,2,jf(this.h.veType)),this.h.veCounter!==void 0&&ag(a,6,jf(this.h.veCounter)),this.h.elementIndex!==void 0&&ag(a,3,jf(this.h.elementIndex)),this.h.isCounterfactual&&ag(a,5,ef(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();og(a,Fp,7,b)}this.h.youtubeData!==void 0&&og(a,Ep,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ay(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function By(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},bq("client-screen-nonce-store",c));c[b]=a}
function Cy(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Dy(a){return S(Cy(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",Dy);function Ey(){var a=S("csn-to-ctt-auth-info");a||(a={},bq("csn-to-ctt-auth-info",a));return a}
function Fy(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Gy(a){a=Ay(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Gy);function Hy(a,b,c){var d=Ey();(c=Gy(c))&&delete d[c];b&&(d[a]=b)}
function Iy(a){return Ey()[a]}
E("yt_logging_screen.getCttAuthInfo",Iy);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Ay(c)||b!==S(Cy(c)))if(Hy(a,d,c),By(a,c),bq(Cy(c),b),b=function(){setTimeout(function(){a&&ys("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:xy,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Jy(){var a=Ki(Ky),b;return(new Ek(function(c,d){a.onSuccess=function(e){xq(e)?c(new Ly(e)):d(new My("Request failed, status="+yq(e),"net.badstatus",e))};
a.onError=function(e){d(new My("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new My("Request timed out","net.timeout",e))};
b=Nq("//googleads.g.doubleclick.net/pagead/id",a)})).bd(function(c){if(c instanceof Nk){var d;
(d=b)==null||d.abort()}return Jk(c)})}
function My(a,b,c){ib.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(My,ib);function Ly(a){this.xhr=a}
;function Ny(){this.Z=0;this.h=null}
Ny.prototype.then=function(a,b,c){return this.Z===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Oy(a):this.Z===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Py(a):this};
Ny.prototype.getValue=function(){return this.h};
Ny.prototype.isRejected=function(){return this.Z==2};
Ny.prototype.$goog_Thenable=!0;function Py(a){var b=new Ny;a=a===void 0?null:a;b.Z=2;b.h=a===void 0?null:a;return b}
function Oy(a){var b=new Ny;a=a===void 0?null:a;b.Z=1;b.h=a===void 0?null:a;return b}
;function Qy(a){var b=S("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(nc(a)));return a}
function Ry(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=rq(a,b||{},!1)}
function Sy(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:sq(a)?"same-origin":"cors",credentials:sq(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Ty(){return si()||(zd||Ad)&&Es("applewebkit")&&!Es("version")&&(!Es("safari")||Es("gsa/"))||yd&&Es("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Uy(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Vy(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Jp)if(Jp[d]==c.embeddedPlayerMode){b=Jp[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Wy(a){ib.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xy;this.isTimeout=a instanceof My&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Nk}
v(Wy,ib);Wy.prototype.name="BiscottiError";function Xy(){ib.call(this,"Biscotti ID is missing from server")}
v(Xy,ib);Xy.prototype.name="BiscottiMissingError";var Ky={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yy=null;function Zy(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ty())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Ii(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Vy(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Vp(){var a=Zy();if(a!==void 0)return Jk(a);Yy||(Yy=Jy().then($y).bd(function(b){return az(2,b)}));
return Yy}
function $y(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Xy;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Xy;a=a.id;Wp(a);Yy=Oy(a);bz(18E5,2);return a}
function az(a,b){b=new Wy(b);Wp("");Yy=Py(b);a>0&&bz(12E4,a-1);throw b;}
function bz(a,b){zq(function(){Jy().then($y,function(c){return az(b,c)}).bd(Ck)},a)}
function cz(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Vp()}catch(b){return Jk(b)}}
;var Nb=qa(["data-"]);function dz(a){a&&(a.dataset?a.dataset[ez()]="true":Ob(a))}
function fz(a){return a?a.dataset?a.dataset[ez()]:a.getAttribute("data-loaded"):null}
var gz={};function ez(){return gz.loaded||(gz.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function hz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Ki(b);this.assets=a.assets||{};this.attrs=a.attrs||Ki(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
hz.prototype.clone=function(){var a=new hz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=Ki(c):a[b]=c}return a};var iz=["att/get"],jz=["share/get_share_panel"],kz=["share/get_web_player_share_panel"],lz=["feedback"],mz=["notification/modify_channel_preference"],nz=["browse/edit_playlist"],oz=["subscription/subscribe"],pz=["subscription/unsubscribe"];var qz=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",qz);function rz(a){Xp(qz,arguments)}
;function sz(a,b,c){tz(a,b,c===void 0?null:c)}
function uz(a){a=vz(a);var b=document.getElementById(a);b&&(Nw(a),b.parentNode.removeChild(b))}
function wz(a,b){a&&b&&(a=""+Pa(b),(a=xz[a])&&Lw(a))}
function tz(a,b,c){c=c===void 0?null:c;var d=vz(typeof a==="string"?a:a.toString()),e=document.getElementById(d),f=e&&fz(e),g=e&&!f;f?b&&b():(b&&(f=Jw(d,b),b=""+Pa(b),xz[b]=f),g||(e=yz(a,d,function(){fz(e)||(dz(e),Mw(d),zq(function(){Nw(d)},0))},c)))}
function yz(a,b,c,d){d=d===void 0?null:d;var e=Ri("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,typeof a==="string"?Ap(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function vz(a){var b=document.createElement("a");Db(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+hc(a)}
var xz={};function zz(a){var b=Az(a),c=document.getElementById(b),d=c&&fz(c);d||c&&!d||(c=Bz(a,b,function(){if(!fz(c)){dz(c);Mw(b);var e=Ya(Nw,b);zq(e,0)}}))}
function Bz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ap(a);Qb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Az(a){var b=Ri("A");Db(b,new wb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+hc(a)}
;function Cz(a){var b=C.apply(1,arguments);if(!Dz(a)||b.some(function(d){return!Dz(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Ez(a,c.value)}
function Ez(a,b){for(var c in b)if(Dz(b[c])){if(c in a&&!Dz(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ez(a[c],b[c])}else if(Fz(b[c])){if(c in a&&!Fz(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Gz(a[c],b[c])}else a[c]=b[c];return a}
function Gz(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Dz(c)?a.push(Ez({},c)):Fz(c)?a.push(Gz([],c)):a.push(c);return a}
function Dz(a){return typeof a==="object"&&!Array.isArray(a)}
function Fz(a){return typeof a==="object"&&Array.isArray(a)}
;var Hz="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Iz(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=lc(window.location.href);e&&d.push(e);e=lc(a);if(Rb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Db(d,a),a=d.href)if(a=nc(a),a=oc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Gy()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Jz(a,b,f)}else Jz(a,b)}
function Jz(a,b,c){a=Kz(a);b=b?rc(b):"";c=c||5;Ty()&&or(a,b,c)}
function Kz(a){for(var b=y(Hz),c=b.next();!c.done;c=b.next())a=wc(a,c.value);return"ST-"+hc(a).toString(36)}
;function Lz(a){for(var b=0,c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;function Mz(a){xu.call(this,1,arguments);this.csn=a}
v(Mz,xu);var Gu=new yu("screen-created",Mz),Nz=[],Oz=0,Pz=new Map,Qz=new Map,Rz=new Map;
function Sz(a,b,c,d,e,f){e=e===void 0?!1:e;f=f===void 0?{}:f;Object.assign(f,Tz({cttAuthInfo:Iy(b)||void 0},b));for(var g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Gi(k)||!k.trackingParams&&!k.veType)&&ny(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Uz(h,b);if(k.veType&&!Qz.has(l)&&!Rz.has(l)&&!e){if(!T("il_attach_cache_limit")||Pz.size<1E3){Pz.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Pz.size>1E3&&ny(new U("IL Attach cache exceeded limit"))}h=
Uz(c,b);Pz.has(h)?Vz(c,b):Rz.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Ub(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Wz("visualElementAttached",f,c):a?dy("visualElementAttached",c,a,f):ys("visualElementAttached",c,f)}
function Wz(a,b,c){Nz.push({Xf:a,payload:c,aj:void 0,options:b});Oz||(Oz=Hu())}
function Iu(a){if(Nz){for(var b=y(Nz),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,ys(c.Xf,c.payload,c.options));Nz.length=0}Oz=0}
function Uz(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Vz(a,b){a=Uz(a,b);if(Pz.has(a)){b=Pz.get(a)||[];var c=c===void 0?{}:c;Sz(b[0],b[1],b[2],[b[3]],!0,c);Pz.delete(a)}}
function Tz(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Xz(){}
Xz.prototype.flush=function(a,b){a=a===void 0?[]:a;b=b===void 0?!1:b;if(T("enable_client_streamz_web")){a=y(a);for(var c=a.next();!c.done;c=a.next())c=fi(c.value),this.h&&og(c,ai,2,this.h),c={serializedIncrementBatch:Ed(c.j())},ys("streamzIncremented",c,{sendIsolatedPayload:b})}};
function Yz(a){var b=new ai;var c=new Yh;c=ug(c,1,"botguard");a=ug(c,2,a);a=ng(a,Yh);ig(b,1,bi,a);a&&!re(a)&&Wf(b.D);this.h=b}
v(Yz,Xz);var Zz=new Map;function $z(){try{return!!self.localStorage}catch(a){return!1}}
;function aA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function bA(a){if($z()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=aA(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function cA(){if(!$z())return!1;var a=Gr(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=aA(c.value),c!==void 0&&c!==a)return!0;return!1}
;function dA(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function eA(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");bq("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=fA;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function gA(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))eA();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))eA();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof Vn?a.clone():new Vn(a)).h.endsWith("/youtubeoptions");b&&eA()}if(S("LOGGED_IN",!0)&&dA()){b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=lc(window.location.href);c&&b.push(c);c=lc(a);Rb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=nc(a),(b=oc(b))?(b=Kz(b),b=(b=pr(b)||null)?oq(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;dA()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Iz(a,b)}}
var fA=null;function hA(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Iz(a,b);if(c)return!1;gA(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=sc(a,e);gA(b);a=void 0;a=a===void 0?Ab:a;a:if(f=b+f,a=a===void 0?Ab:a,!(f instanceof wb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof yb&&c.Gf(f)){f=new wb(f);break a}f=void 0}g=g.location;f=Cb(f||xb);f!==void 0&&(g.href=f);return!0}
;function iA(a){if(Ii(S("PLAYER_VARS",{}))!="1"){a&&Up();try{cz().then(function(){},function(){}),zq(iA,18E5)}catch(b){gq(b)}}}
;function jA(){this.h={}}
p=jA.prototype;p.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
p.get=function(a){if(this.contains(a))return this.h[a]};
p.set=function(a,b){this.h[a]=b};
p.dc=function(){return Object.keys(this.h)};
p.remove=function(a){delete this.h[a]};function kA(){this.mappings=new jA}
kA.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
kA.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Eb(b)}}return a};
new kA;var lA=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function mA(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=mc(a);if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=pq(a).theme;return lA.get(c)||null}catch(d){}return null}
;function nA(a){var b=new Gl;if(a.interpreterJavascript){var c=yp(a.interpreterJavascript);c=Jb(c).toString();var d=new El;ug(d,6,c);og(b,El,1,d,we)}else a.interpreterUrl&&(c=zp(a.interpreterUrl),c=qb(c).toString(),d=new Fl,ug(d,4,c),og(b,Fl,2,d,we));a.interpreterHash&&hg(b,3,xf(a.interpreterHash),we);a.program&&hg(b,4,xf(a.program),we);a.globalName&&hg(b,5,xf(a.globalName),we);a.clientExperimentsStateBlob&&hg(b,7,xf(a.clientExperimentsStateBlob),we);return b}
function oA(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
function pA(a){return Number(a.t)||7200}
;function Cc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=globalThis.performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function qA(a){this.h=a}
qA.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
qA.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
qA.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function rA(){return new Promise(function(a){var b=window;b.ntpevasrs!==void 0?a(new qA(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new qA(c))}))})}
;var sA=qa(["https://static.doubleclick.net/instream/ad_status.js"]),tA=[],uA=function(a){var b=C.apply(1,arguments);if(b.length===0)return pb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return pb(c)}(sA),vA=!1;
function wA(){if(Ty()){var a=S("PLAYER_VARS",{});if(Ii(a)!="1"&&!Vy(a)){var b=function(){vA=!0;"google_ad_status"in window?bq("DCLKSTAT",1):bq("DCLKSTAT",2)};
try{sz(uA,b)}catch(c){}tA.push(qn.ra(function(){if(!(vA||"google_ad_status"in window)){try{wz(uA.toString(),b)}catch(c){}vA=!0;bq("DCLKSTAT",3)}},5E3))}}}
function xA(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function X(a){this.h=a}
[new X("b.f_"),new X("j.s_"),new X("r.s_"),new X("e.h_"),new X("i.s_"),new X("s.t_"),new X("p.h_"),new X("s.i_"),new X("f.i_"),new X("a.b_"),new X("a.o_"),new X("g.o_"),new X("p.i_"),new X("p.m_"),new X("n.k_"),new X("i.f_"),new X("a.s_"),new X("m.c_"),new X("n.h_"),new X("o.p_"),new X("m.p_"),new X("o.a_"),new X("d.p_"),new X("e.i_")].reduce(function(a,b){a[b.h]=b;return a},{});function yA(a){return F("ytcsi."+(a||"")+"data_")||zA(a)}
function AA(){var a=yA();a.info||(a.info={});return a.info}
function BA(a){a=yA(a);a.metadata||(a.metadata={});return a.metadata}
function CA(a){a=yA(a);a.tick||(a.tick={});return a.tick}
function DA(a){a=yA(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function EA(a){a=DA(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function FA(a){var b=yA(a).nonce;b||(b=wy(),yA(a).nonce=b);return b}
function zA(a){var b={tick:{},info:{}};E("ytcsi."+(a||"")+"data_",b);return b}
;function GA(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function HA(a){a=a||"";var b=IA();if(b[a])return b[a];var c=GA(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function IA(){var a=F("ytcsi.reference");if(a)return a;GA();return F("ytcsi.reference")}
;var Y={},JA=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",Y.channels="LATENCY_ACTION_CHANNELS",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",Y.editor=
"LATENCY_ACTION_EDITOR",Y.embed="LATENCY_ACTION_EMBED",Y.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.favorites="LATENCY_ACTION_FAVORITES",Y.home="LATENCY_ACTION_HOME",Y.inboarding="LATENCY_ACTION_INBOARDING",Y.landing="LATENCY_ACTION_LANDING",Y.learning="LATENCY_ACTION_LEARNING",Y.learning_journey_browse=
"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",Y.learning_journey_watch="LATENCY_ACTION_LEARNING_JOURNEY_WATCH",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.management="LATENCY_ACTION_MANAGEMENT",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",Y.onboarding="LATENCY_ACTION_ONBOARDING",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.projects="LATENCY_ACTION_PROJECTS",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.premium=
"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",Y.review="LATENCY_ACTION_REVIEW",Y.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.supervision_dashboard=
"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",Y.tenx="LATENCY_ACTION_TENX",Y.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]="LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",Y);function KA(a){return JA[a]||"LATENCY_ACTION_UNKNOWN"}
;function LA(a,b){xu.call(this,1,arguments);this.timer=b}
v(LA,xu);var MA=new yu("aft-recorded",LA);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var NA=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",NA);function OA(){this.h=0}
function PA(){OA.instance||(OA.instance=new OA);return OA.instance}
OA.prototype.tick=function(a,b,c,d){QA(this,"tick_"+a+"_"+b)||ys("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
OA.prototype.info=function(a,b,c){var d=Object.keys(a).join("");QA(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,ys("latencyActionInfo",a,{cttAuthInfo:c}))};
OA.prototype.jspbInfo=function(){};
OA.prototype.span=function(a,b,c){var d=Object.keys(a).join("");QA(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,ys("latencyActionSpan",a,{cttAuthInfo:c}))};
function QA(a,b){NA[b]=NA[b]||{count:0};var c=NA[b];c.count++;c.time=W();a.h||(a.h=Ir(function(){var d=W(),e;for(e in NA)NA[e]&&d-NA[e].time>6E4&&delete NA[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||ny(c)),!0):!1}
;var RA=window;function SA(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function TA(){var a;if(T("csi_use_performance_navigation_timing")){var b,c,d,e=Z==null?void 0:(a=Z.getEntriesByType)==null?void 0:(b=a.call(Z,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=UA(e.requestStart),e.responseEnd=UA(e.responseEnd),e.redirectStart=UA(e.redirectStart),e.redirectEnd=UA(e.redirectEnd),e.domainLookupEnd=UA(e.domainLookupEnd),e.connectStart=UA(e.connectStart),e.connectEnd=UA(e.connectEnd),e.responseStart=UA(e.responseStart),
e.secureConnectionStart=UA(e.secureConnectionStart),e.domainLookupStart=UA(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Z.timing)):Z.timing;return a}
function UA(a){return Math.round(VA()+a)}
function VA(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=RA.performance||RA.mozPerformance||RA.msPerformance||RA.webkitPerformance||new SA;var WA=!1,XA=!1,YA={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},ZA=Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||Ck,Z);function $A(a,b){aB("_start",a,b)}
function bB(a,b){if(!T("web_csi_action_sampling_enabled")||!yA(b).actionDisabled){var c=HA(b||"");Cz(c.info,a);a.loadType&&(c=a.loadType,BA(b).loadType=c);Cz(EA(b),a);c=FA(b);b=yA(b).cttAuthInfo;PA().info(a,c,b)}}
function cB(){var a,b,c,d;return((d=Xw().resolve(new Rw(ku))==null?void 0:(a=lu())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function aB(a,b,c){if(!T("web_csi_action_sampling_enabled")||!yA(c).actionDisabled){var d=FA(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Xw().resolve(new Rw(ku))==null?0:lu())&&!XA&&(XA=!0,aB("gcfl",W(),c));var f,g,h;e=(Xw().resolve(new Rw(ku))==null?void 0:(f=lu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=cB();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}f?(e=Lz(d)%e!==0,yA(c).debugTicksExcludedLogged||
(f={},f.debugTicksExcluded=e,bB(f,c)),yA(c).debugTicksExcludedLogged=!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Z.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Z.mark(e);else{f=T("csi_use_performance_navigation_timing")?f-Z.timeOrigin:f-(Z.timeOrigin||Z.timing.navigationStart);try{Z.mark(e,{startTime:f})}catch(k){}}e=HA(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=DA(c);e.gelTicks&&(e.gelTicks[a]=!0);f=CA(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=yA(c).cttAuthInfo;a==="_start"?(a=PA(),QA(a,"baseline_"+d)||ys("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):PA().tick(a,d,b,f);dB(c);return e}}}
function eB(){var a,b=(a=Z.getEntriesByType)==null?void 0:a.call(Z,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;(d=Z.clearMarks)==null||d.call(Z,c.name)}})}
function fB(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=pw+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function gB(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function hB(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Gb(document)&&a.setAttribute("nonce",Gb(document));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=VA(),aB("rsf_"+b,c+Math.round(a.fetchStart)),aB("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function iB(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=Tb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Vb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(aB("wffs",UA(b.startTime)),aB("wffe",UA(b.responseEnd)))}
function jB(a){var b=kB("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=kB(b[d],a);if(e)return e}return NaN}
function lB(a){E("ytglobal.timing"+(a||"")+"ready_",!0)}
function kB(a,b){if(a=CA(b)[a])return typeof a==="number"?a:a[a.length-1]}
function dB(a){var b=kB("_start",a),c=jB(a),d=!WA;b&&c&&d&&(Du(MA,new LA(Math.round(c-b),a)),WA=!0)}
function mB(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=Wb(a,function(c){return c.name==="first-paint"}))return UA(a.startTime)}var b;
T("csi_use_performance_navigation_timing")?b=Z.getEntriesByType("first-paint")[0].startTime:b=Z.timing.hj;return b?Math.max(0,b):0}
;function nB(a,b){fq(function(){HA("").info.actionType=a;b&&bq("TIMING_AFT_KEYS",b);bq("TIMING_ACTION",a);var c=gB();Object.keys(c).length>0&&bB(c);c={isNavigation:!0,actionType:KA(S("TIMING_ACTION"))};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=KA(d));if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Gy())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=fB();if(d===1||d===-1)c.isVisible=!0;BA();AA();c.loadType="cold";d=AA();var e=TA(),f=VA(),g=S("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(aB("srt",e.responseStart),d.prerender!==1&&$A(f));d=mB();d>0&&aB("fpt",d);d=TA();d.isPerformanceNavigationTiming&&bB({performanceNavigationTiming:!0},void 0);aB("nreqs",d.requestStart,void 0);aB("nress",d.responseStart,void 0);aB("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(aB("nrs",d.redirectStart,void 0),aB("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(aB("ndnss",d.domainLookupStart,
void 0),aB("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(aB("ntcps",d.connectStart,void 0),aB("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=VA()&&d.connectEnd-d.secureConnectionStart>0&&(aB("nstcps",d.secureConnectionStart,void 0),aB("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&iB();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in YA)YA.hasOwnProperty(h)&&(e=YA[h],hB(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=
h.next())c.resourceInfo.push({resourceCache:d.value});bB(c);c=DA();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=EA();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(BA().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=CA();e=DA();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")aB(k,kB(k));else if(T("log_repeated_ytcsi_ticks"))for(f=y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,aB(k.slice(1),
g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Cz(c,d),Cz(k,d),d=!0;d&&bB(k)}lB();k=S("TIMING_ACTION");F("ytglobal.timingready_")&&k&&oB()&&jB()&&dB()})()}
function pB(){var a=a===void 0?{}:a;fq(function(){qB();var b=a.sampleRate;if(!T("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=FA("attestation_challenge_fetch");b=Lz(c)%b!==0}b&&(yA("attestation_challenge_fetch").actionDisabled=!0);HA("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(yA("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);bq("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");fq($A)(a.startTime,
"attestation_challenge_fetch");b={actionType:KA("attestation_challenge_fetch")};a.ej&&(b.previousAction=KA(S("TIMING_ACTION")));(c=Gy())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);rB(b,"attestation_challenge_fetch");lB("attestation_challenge_fetch")})()}
function qB(){fq(function(){oB("attestation_challenge_fetch")&&sB("aa",void 0,"attestation_challenge_fetch");var a=IA();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;var b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};GA().push(b);a.attestation_challenge_fetch=b;zA("attestation_challenge_fetch");ZA();eB()})()}
function oB(a){return fq(function(){return tB("_start",a)})()}
function rB(a,b,c){fq(bB)(a,b,c===void 0?!1:c)}
function sB(a,b,c){return fq(aB)(a,b,c)}
function tB(a,b){return fq(function(){var c=CA(b);return a in c})()}
function uB(a){if(!T("universal_csi_network_ticks"))return"";a=mc(a)||"";for(var b=Object.keys(vu),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function vB(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=vu[a];return b?(wB(b),function(){var c=T("universal_csi_network_ticks")?(c=wu[a])?wB(c):!1:!1;return c}):function(){}}
function wB(a){return fq(function(){if(tB(a))return!1;sB(a,void 0,void 0);return!0})()}
function xB(a){fq(function(){if(!oB("attestation_challenge_fetch")||tB(a,"attestation_challenge_fetch"))return!1;sB(a,void 0,"attestation_challenge_fetch");return!0})()}
function yB(){fq(function(){var a=FA();requestAnimationFrame(function(){setTimeout(function(){a===FA()&&sB("ol",void 0,void 0)},0)})})()}
var zB=window;zB.ytcsi&&(zB.ytcsi.infoGel=rB,zB.ytcsi.tick=sB);function AB(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Fg){var e=new Kl;this.h=e.promise;D.ytAtRC&&qn.Xa(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=BB(null);return h.yield(d.ob(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
rA().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.ob(BB(n))}),m.yield(Bc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,mb:oA(k),vm:g,bgChallenge:new Gl};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,mb:oA(n),vm:g,bgChallenge:new Gl};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&CB(this,new Promise(function(f){Ir(function(){f(DB(d))},0)}))}
AB.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
AB.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&CB(d,DB(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.mb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);xa(n,4);e=!0;return n.yield(k.vm.snapshot({Ha:l}),6);case 6:(m=n.i)?f.webResponse=m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";ya(n,3);break;case 4:za(n),
f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var r=k.mb,t={};r.c6a&&(t.reportingStatus=String(Number(r.c)^xA()));r.c6b&&(t.broadSpectrumDetectionResult=String(Number(r.c)^Number(S("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),EB(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function BB(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function DB(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,r,t;return B(function(w){switch(w.h){case 1:c=BB(Pl().h);if(T("att_fet_ks"))return xa(w,7),w.yield(a.ob(c),9);xa(w,4);return w.yield(FB(a,c),6);case 6:g=w.i;e=g.Uf;f=g.Vf;d=g;ya(w,3);break;case 4:return za(w),ny(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),GB(a,864E5),w.return({challenge:"",mb:{},vm:void 0,bgChallenge:void 0});case 9:d=w.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=oA(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");ya(w,3);break;case 7:h=za(w);ny(h);b++;if(b>=5)return ny(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),GB(a,864E5),w.return({challenge:"",mb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return w.return(new Promise(function(z){Ir(function(){z(DB(a,
b))},k)}));
case 3:l=pA(f);GB(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){w.A(10);break}n=nA(d.bgChallenge);xa(w,11);return w.yield(Ql(Pl(),n),13);case 13:ya(w,12);break;case 11:return r=za(w),ny(r),w.return({challenge:e,mb:f,vm:m,bgChallenge:n});case 12:return xa(w,14),m=new Ml({challenge:n,Lb:{qa:"aGIf"}}),w.yield(m.Pb,16);case 16:ya(w,10);break;case 14:t=za(w),ny(t),m=void 0;case 10:return w.return({challenge:e,mb:f,vm:m,bgChallenge:n})}})}
AB.prototype.ob=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.va())return d.return(b.network.ob(a));xB("att_pna");return d.return(new Promise(function(e){jk(c,"publicytnetworkstatus-online",function(){b.network.ob(a).then(e)})}))})};
function HB(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=oA(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Uf:b,Vf:c})}
function FB(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.Kd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Ir(function(){l(void 0)},k.Kd)}}(e)),5);
case 5:return xa(h,7),h.yield(a.ob(b),9);case 9:return f=h.i,h.return(HB(f));case 7:c=g=za(h),g instanceof Error&&ny(g);case 8:d++;e={Kd:void 0};h.A(2);break;case 4:throw c;}})}
function CB(a,b){a.h=b}
function IB(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=DB(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function GB(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(IB(a),0):(Ir(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function EB(a,b){return new Promise(function(c){Ir(function(){c(b())},a)})}
;var JB={},KB=(JB.WEB_UNPLUGGED="^unplugged/",JB.WEB_UNPLUGGED_ONBOARDING="^unplugged/",JB.WEB_UNPLUGGED_OPS="^unplugged/",JB.WEB_UNPLUGGED_PUBLIC="^unplugged/",JB.WEB_CREATOR="^creator/",JB.WEB_KIDS="^kids/",JB.WEB_EXPERIMENTS="^experiments/",JB.WEB_MUSIC="^music/",JB.WEB_REMIX="^music/",JB.WEB_MUSIC_EMBEDDED_PLAYER="^music/",JB.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",JB);
function LB(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=KB[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(KB).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function MB(){this.h=NB.instance}
MB.prototype.ob=function(a){xB("att_fsr");return OB(this.h,a).then(function(b){xB("att_frr");return b})};var PB=new Qw("INNERTUBE_TRANSPORT_TOKEN");function QB(){var a,b,c;return B(function(d){if(d.h==1)return a=Xw().resolve(PB),a?d.yield(RB(a),2):(ny(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ny(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Qi;return d.return(c)}ny(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function SB(){this.h={};if(this.i=rr()){var a=pr("CONSISTENCY");a&&TB(this,{encryptedTokenJarContents:a})}}
SB.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ja.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];TB(this,a)}};
function TB(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&or("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var UB=window.location.hostname.split(".").slice(-2).join(".");function VB(){this.i=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=WB(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}
var XB;function YB(){XB=F("yt.clientLocationService.instance");XB||(XB=new VB,E("yt.clientLocationService.instance",XB));return XB}
p=VB.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=WB(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):or("YT_CL",JSON.stringify({loctok:a}),15552E3,UB,!0))};
function WB(a){return a.localStorage===void 0?new ps("yt-client-location"):a.localStorage}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.localStorage=WB(this))&&this.localStorage.remove("yt-location-playability-token"):qr("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.h=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function ZB(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=S("INNERTUBE_CONTEXT");if(!d)return my(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Li(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;vr();var g="USER_INTERFACE_THEME_LIGHT";yr(165)?g="USER_INTERFACE_THEME_DARK":yr(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:mA()||g;e.userInterfaceTheme=f;if(!b){if(f=Dr())e.connectionType=f;T("web_log_effective_connection_type")&&(f=Er())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=ou())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=pq(D.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=D.location.href,T("kevlar_woffle")&&jr.instance&&(k=jr.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),
e.mainAppWebInfo.webDisplayMode=kr(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=S("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;
break a}catch(ja){}l=void 0}l&&(e.timeZone=l)}(l=S("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Fq();SB.instance||(SB.instance=new SB);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:Di(SB.instance.h)});!T("web_prequest_context_killswitch")&&(l=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=vr();l=yr(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?c&&(b=Gy())&&(d.clientScreenNonce=b):!b&&(b=Gy())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;YB().setLocationOnInnerTubeContext(d);try{var m=tq(),n=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:n};for(var r=y(Object.entries(m)),t=r.next();!t.done;t=r.next()){var w=y(t.value),z=w.next().value,x=w.next().value;m=z;n=x;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+n})}var H,
G;if(((H=d.client)==null?void 0:H.clientName)==="TVHTML5"||((G=d.client)==null?void 0:G.clientName)==="TVHTML5_UNPLUGGED"){var V=S("INNERTUBE_CONTEXT");V.adSignalsInfo&&(d.adSignalsInfo.advertisingId=V.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=V.adSignalsInfo.limitAdTracking)}}catch(ja){my(ja)}return d}
;function $B(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));if(a!=="cors"){var c=S("INNERTUBE_CONTEXT_CLIENT_NAME");c&&(b["X-Youtube-Client-Name"]=c);(c=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=c);
(c=S("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=c);(c=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=c)}S("SEND_LAVA_HEADER_UNCONDITIONALLY",!1)?(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a):a!=="cors"&&S("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a);return b}
;function aC(a){return function(){return new a}}
;function bC(){}
bC.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?nr:c;var d={context:ZB(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+LB(this.j());(e=(f=vx(a.commandMetadata,Hp))==null?void 0:f.apiUrl)&&(b=e);f=Ry(Qy(b));a=Object.assign({},{command:a},void 0);d={input:f,hb:Sy(f),Ja:d,config:a};d.config.Yb?d.config.Yb.identity=c:d.config.Yb={identity:c};return d}c=new U("Error: Failed to create Request from Command.",a);my(c)};
da.Object.defineProperties(bC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function cC(){}
v(cC,bC);function dC(){}
v(dC,cC);dC.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",hb:Sy("/getDatasyncIdsEndpoint","GET"),Ja:{}}};
dC.prototype.j=function(){return[]};
dC.prototype.i=function(){};
dC.prototype.h=function(){};var eC={},fC=(eC.GET_DATASYNC_IDS=aC(dC),eC);var gC="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),hC=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function NB(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.sc||(a.sc={});a.sc=Object.assign({},fC,a.sc)}
function iC(a,b,c){var d=jC;if(NB.instance!==void 0){if(c=NB.instance,a=[d!==c.u,a!==c.fa,b!==c.j,!1,!1,!1,void 0!==c.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else NB.instance=new NB(d,a,b,c)}
function RB(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?nr:c;var d=kC(a,b);return d?new Ek(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}gA(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.se){m=lC(h.config,l);n.A(4);break}return n.yield(mC(h.config,l),5);case 5:m=n.i;case 4:e(nC(a,h,m)),n.h=
0}})}):Jk(new U("Error: No request builder found for command.",b))}
function OB(a,b){function c(){}
var d="/youtubei/v1/"+LB(iz);var e=e===void 0?{Yb:{identity:nr}}:e;var f=f===void 0?!0:f;c=vB(uB(d));b.context||(b.context=ZB(void 0,f));return new Ek(function(g){var h,k,l,m,n;return B(function(r){if(r.h==1)return h=Qy(d),k=sq(h)?"same-origin":"cors",a.j.se?(l=lC(e,k),r.A(2)):r.yield(mC(e,k),3);r.h!=2&&(l=r.i);m=Ry(Qy(d));n={input:m,hb:Sy(m),Ja:b,config:e};g(nC(a,n,l,c));r.h=0})})}
function oC(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(gC);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function nC(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,z,x,H,G,V,ja,ic,Od,ka,gb,Ua,Va,Ta,li,mi,wv,xv,yv,zv;return B(function(na){switch(na.h){case 1:na.A(2);break;case 3:if((e=na.i)&&!e.isExpired())return na.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ja)==null?0:g.context)){na.A(4);break}h=b.Ja.context;na.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){na.A(4);break}m=l.value;return na.yield(m.kj(h),9);case 9:l=k.next();na.A(8);break;case 4:if((n=a.i)==null||!n.sj(b.input,b.Ja)){na.A(12);break}return na.yield(a.i.cj(b.input,
b.Ja),13);case 13:return r=na.i,oC(a,r,b),na.return(r);case 12:return(z=(w=b.config)==null?void 0:w.requestKey)&&a.h.has(z)?t=a.h.get(z):(x=JSON.stringify(b.Ja),V=(G=(H=b.hb)==null?void 0:H.headers)!=null?G:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},V,c)}),ja=Object.assign({},b.hb),b.hb.method==="POST"&&(ja=Object.assign({},ja,{body:x})),((ic=b.config)==null?0:ic.dg)&&sB(b.config.dg),Od=function(){return a.fa.fetch(b.input,ja,b.config)},t=Od(),z&&a.h.set(z,t)),na.yield(t,14);
case 14:(ka=na.i)&&T("web_streaming_player")&&Array.isArray(ka)&&(ka=ka[0].playerResponse);if(ka&&"error"in ka&&((gb=ka)==null?0:(Ua=gb.error)==null?0:Ua.details))for(Va=ka.error.details,Ta=y(Va),li=Ta.next();!li.done;li=Ta.next())mi=li.value,(wv=mi["@type"])&&hC.indexOf(wv)>-1&&(delete mi["@type"],ka=mi);z&&a.h.has(z)&&a.h.delete(z);((xv=b.config)==null?0:xv.eg)&&sB(b.config.eg);if(ka||(yv=a.i)==null||!yv.Pi(b.input,b.Ja)){na.A(15);break}return na.yield(a.i.bj(b.input,b.Ja),16);case 16:ka=na.i;case 15:return oC(a,
ka,b),((zv=b.config)==null?0:zv.Zf)&&sB(b.config.Zf),d(),na.return(ka||void 0)}})}
function kC(a,b){a:{a=a.u;var c,d=(c=vx(b,Ip))==null?void 0:c.signal;if(d&&a.sc&&(c=a.sc[d])){var e=c();break a}var f;if((c=(f=vx(b,Gp))==null?void 0:f.request)&&a.Ve&&(f=a.Ve[c])){e=f();break a}for(e in b)if(a.Od[e]&&(b=a.Od[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function mC(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Yb)==null?void 0:d.sessionIndex;var h=g.yield;var k=mr({sessionIndex:e});if(!(k instanceof Ek)){var l=new Ek(Ck);Fk(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},$B(b),f)))})}
function lC(a,b){var c;a=a==null?void 0:(c=a.Yb)==null?void 0:c.sessionIndex;c=mr({sessionIndex:a});return Object.assign({},$B(b),c)}
;function pC(){}
v(pC,cC);pC.prototype.j=function(){return oz};
pC.prototype.i=function(a){return vx(a,Tp)||void 0};
pC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(pC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function qC(){}
v(qC,cC);qC.prototype.j=function(){return pz};
qC.prototype.i=function(a){return vx(a,Sp)||void 0};
qC.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(qC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var rC=new Qw("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function sC(a){this.H=a}
v(sC,cC);sC.prototype.j=function(){return jz};
sC.prototype.i=function(a){return vx(a,Mp)||vx(a,Np)||vx(a,Lp)};
sC.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
sC[Pw]=[rC];function tC(){}
v(tC,cC);tC.prototype.j=function(){return lz};
tC.prototype.i=function(a){return vx(a,Kp)||void 0};
tC.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(tC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function uC(){}
v(uC,cC);uC.prototype.j=function(){return lz};
uC.prototype.i=function(a){return vx(a,Rp)};
uC.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(uC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vC(){}
v(vC,cC);vC.prototype.j=function(){return mz};
vC.prototype.i=function(a){return vx(a,Qp)||void 0};
vC.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function wC(){}
v(wC,cC);wC.prototype.j=function(){return nz};
wC.prototype.i=function(a){return vx(a,Pp)||void 0};
wC.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function xC(){}
v(xC,cC);xC.prototype.j=function(){return kz};
xC.prototype.i=function(a){return vx(a,Op)};
xC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function yC(){var a=a===void 0?py:a;var b=b===void 0?{}:b;E("yt.logging.errors.log",my);ly();cr(br(),b);window.onerror=a;Vk=oy;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;qy(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}oy(c.reason);c.preventDefault()})}
;function zC(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var AC=D.caches,BC;function CC(a){var b=a.indexOf(":");return b===-1?{ce:a}:{ce:a.substring(0,b),datasyncId:a.substring(b+1)}}
function DC(){return B(function(a){if(BC!==void 0)return a.return(BC);BC=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return xa(d,2),d.yield(AC.open("test-only"),4);case 4:return d.yield(AC.delete("test-only"),5);case 5:ya(d,3);break;case 2:if(c=za(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(BC)})}
function EC(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(DC(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(AC.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=CC(f),h=g.datasyncId,!h||a.includes(h)||b.push(AC.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function FC(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(DC(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Gr("cache contains other");return h.yield(AC.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=CC(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function GC(){try{return!!self.sessionStorage}catch(a){return!1}}
;function HC(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function IC(a){if(GC()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=HC(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function JC(){if(!GC())return!1;var a=Gr(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=HC(c.value),c!==void 0&&c!==a)return!0;return!1}
;function KC(){QB().then(function(a){a&&(Qt(a),EC(a),bA(a),IC(a))})}
function LC(){var a=new aw;qn.ra(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Gr("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Qt(h);EC(h);bA(h);IC(h);return g.return()}c=cA();d=JC();return g.yield(FC(),3);case 3:return e=g.i,g.yield(Rt(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?KC():jk(a,"publicytnetworkstatus-online",KC),g.h=0}})})}
;function MC(a){return new Promise(function(b){window.setTimeout(b,a)})}
function NC(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=function(){return new XMLHttpRequest};
this.h=void 0;this.j=[]}
NC.prototype.getLatestChallengeResponse=function(){return this.i};
function jm(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){pB();sB("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new cl(9,"Missing fetcher");return h.yield(a.h(b,c),2)}d=h.i;f=(e=d)==null?void 0:e.bgChallenge;if(!f)throw new cl(15,"Missing field");a.i=d;a.j.forEach(function(k){k(d)});
g=nA(f);sB("att_fc",void 0,"attestation_challenge_fetch");qB();return h.return(g)})}
function Sm(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=new qj(100,3E5,.25,2),d=void 0;case 2:if(!(c.i<10)){h.A(4);break}xa(h,5);if(!(c.i>0)){h.A(7);break}return h.yield(MC(c.getValue()),7);case 7:return h.yield(OC(a,b),9);case 9:return e=h.i,h.return(e);case 5:f=za(h);f instanceof cl?d=f:(g=f instanceof Error?f.message:"Unknown",d=new cl(9,g));rj(c);h.A(2);break;case 4:if(d)throw d;throw new cl(9,"Unknown error");}})}
function OC(a,b){b=Wl(Xl(new Vl,b),a.requestKey);var c=new Kl,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=function(){if(xq(d)){var e=ln(d.responseText);c.resolve(e)}else c.reject(new cl(al(yq(d)),d.statusText))};
d.onerror=function(){c.reject(new cl(al(yq(d)),d.statusText))};
d.send(b.serialize());return c.promise}
function PC(a){var b={bicf:function(f){a.h=f},
blc:function(){return a.getLatestChallengeResponse()},
bcr:function(f){a.j.push(f)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(var d=y(c.ntpqfbel),e=d.next();!e.done;e=d.next())e=e.value,e(b);c.ntpqfbel=void 0}
;function QC(a){var b,c;(b=a.ytcsi)==null||(c=b.tick)==null||c.call(b,"pot_ist")}
function RC(a){if(a instanceof Error){var b=F("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function SC(a,b){var c=this;this.h=0;var d;this.Dc=(d=b==null?void 0:b.Dc)!=null?d:window;this.ud=b==null?void 0:b.ud;var e;this.requestKey=(e=b==null?void 0:b.requestKey)!=null?e:Eq("par_bir_key")||"O43z0dpjhgX20SCx4KAo";var f;this.Ae=(f=b==null?void 0:b.Ae)!=null?f:function(k){return new Yl(k)};
var g;d=(g=b==null?void 0:b.Vi)!=null?g:function(k,l,m){return new NC(k,l,m)};
this.bgChallenge=nA(a.bgChallenge);this.ttlSeconds=pA(oA(a.challenge||""));this.Oa=d(this.requestKey,T("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(D.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.De=b==null?void 0:b.De;PC(this.Oa);var h;this.je=(h=b==null?void 0:b.je)!=null?h:function(k){bk(c.Dc.document,"visibilitychange",function(){c.Dc.document.visibilityState===
"visible"&&k()})}}
function TC(a){if(!a.vm){var b={maxAttempts:5,he:a.ttlSeconds*1E3};QC(a.Dc);a.vm=a.Ae({Oa:a.Oa,Lb:{disable:T("html5_web_po_disable_remote_logging"),qa:"aGIf",lf:Dq(),Of:T("wpo_dis_lfdms")?0:1E3,Rb:function(d){var e=Zz.get(d);e||(e=new Yz(d),e=new Xk(e),Zz.set(d,e));return e}},
Sb:b,yf:a.bgChallenge,Oc:RC});a.h=Date.now();cm(a.vm,function(){a.h=Date.now()});
Jc(a.vm,function(){return B(function(d){return d.return(UC(a))})});
var c=a.j.bind(a);a.ud&&a.ttlSeconds>0&&a.ud.then(function(d){d.listen("publicytnetworkstatus-online",c)});
a.je(c)}}
SC.prototype.j=function(){if(Date.now()>this.h+this.ttlSeconds*1E3){var a;(a=this.vm)==null||bm(a)}};
function UC(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new Om({vm:a.vm,Oa:a.Oa,Hd:!0,onError:RC,Sb:a.De});return a.i}
function VC(a,b){a=new SC(a,b);TC(a);(b==null?0:b.Si)||UC(a)}
function WC(a){try{var b=JSON.parse(a);if(b.bgChallenge)return b}catch(c){}}
function XC(){var a=window,b={};a=a===void 0?window:a;var c=a.ytAtR,d;b==null||(d=b.Ud)==null||d.lj();if(c){if(c=WC(c)){var e;b==null||(e=b.Ud)==null||e.ge("SUCCESS");VC(c,b)}a.ytAtR=void 0}else a.ytAtRC=function(f){if(f=WC(f)){var g;b==null||(g=b.Ud)==null||g.ge("SUCCESS");VC(f,b);a.ytAtRC=void 0}}}
;var YC=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function ZC(){this.state=1;this.vm=null;this.h=void 0}
p=ZC.prototype;p.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=yp(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=zp(a.interpreterSafeUrl).toString());$C(this,e,d,a.program,b,c)}else ny(Error("BL:CIP"))};
function $C(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,sz(Ap(c),function(){window[g]?aD(a,d,g,e):(a.state=3,uz(c),ny(new U("BL:ULB",""+c)))},f)):b?(f=Ri("SCRIPT"),b instanceof Hb?(f.textContent=Jb(b),Kb(f)):f.textContent=b,f.nonce=Gb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?aD(a,d,g,e):(a.state=4,ny(new U("BL:ULBJ")))):ny(new U("BL:ULV"))}
p.isLoading=function(){return this.state===2};
function aD(a,b,c,d){a.state=5;var e=!!a.h&&YC.includes(lc(a.h)||"");try{var f=new Ml({program:b,globalName:c,Lb:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,qa:"aGIf"}});f.Pb.then(function(){a.state=6;d&&d(b)});
a.Ad(f)}catch(g){a.state=7,g instanceof Error&&ny(g)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Fd()?this.Be({Ha:a}):null};
p.dispose=function(){this.Ad(null);this.state=8};
p.Fd=function(){return!!this.vm};
p.Be=function(a){return this.vm.qe(a)};
p.Ad=function(a){yc(this.vm);this.vm=a};function bD(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function cD(){ZC.apply(this,arguments)}
v(cD,ZC);cD.prototype.Ad=function(a){var b;(b=bD())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.qe.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
cD.prototype.Fd=function(){return!!bD()};
cD.prototype.Be=function(a){return bD().bgvmc(a)};var dD=new Qw("AUTH_SERVICE_TOKEN");function eD(a){gx.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(eD,gx);eD.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
eD.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
eD.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
eD.prototype.i=function(){this.h=new Map};function fD(a){gx.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(fD,gx);fD.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
fD.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
fD.prototype.u=function(a,b){a(b==null?void 0:b.event)};
fD.prototype.H=function(a,b){a(b==null?void 0:b.event)};function gD(){this.o=new eD;this.u=new fD}
gD.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function hD(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
hD.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Gy(c===void 0?0:c)){a=this.client;d=new zy({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Uz(d,c);Qz.set(f,!0);Vz(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Tz({cttAuthInfo:Iy(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Wz("visualElementGestured",f,d):a?dy("visualElementGestured",d,a,f):ys("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
hD.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new zy({trackingParams:a}),b,c===void 0?0:c)};
hD.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Gy(d);a||(a=(a=Dy(d===void 0?0:d))?new zy({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Tz({cttAuthInfo:Iy(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Wz("visualElementStateChanged",d,b):a?dy("visualElementStateChanged",b,a,d):ys("visualElementStateChanged",b,d))}};
function iD(a,b){if(b===void 0)for(var c=Fy(),d=0;d<c.length;d++)c[d]!==void 0&&iD(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Sz(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function jD(){gD.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Ir(kD)}
v(jD,gD);jD.prototype.j=function(){ys("finalPayload",{csn:Gy()})};
jD.prototype.h=function(){ty(uy)};
jD.prototype.i=function(){var a=iD;hD.instance||(hD.instance=new hD);a(hD.instance)};
function kD(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Be();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&ys("genericClientExperimentEvent",{eventType:c});delete aq.CLIENT_EXPERIMENT_EVENTS}}
;function lD(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(lD,U);var mD=new Qw("NETWORK_SLI_TOKEN");function nD(a){this.h=a}
nD.prototype.fetch=function(a,b,c){var d=this,e;return B(function(f){e=oD(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){ny(g);
if((c==null?0:c.kf)&&g instanceof lD&&g.errorType===1)return Promise.reject(g)}))})};
function oD(a,b,c){if(a.h){var d=mc(wc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=ev(c));return new window.Request(b,a)}
nD.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.Hf)&&a.ok)return Ug(b.Hf,d);d=d.replace(")]}'","");if((b==null?0:b.kf)&&d)try{var e=JSON.parse(d)}catch(g){throw new lD(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ui(),c=c.then(function(d){ny(new U("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
nD[Pw]=[new Rw(mD)];var pD=new Qw("NETWORK_MANAGER_TOKEN");function qD(){}
function rD(){var a=F("ytglobal.storage_");a||(a=new qD,E("ytglobal.storage_",a));return a}
qD.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(sD()):d.return()})};
function sD(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",qD);function ws(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
ws.prototype.wa=function(a){this.handleError(a)};
ws.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":tD(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function tD(a,b){rD().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:uD(c==null?void 0:c.usage),deviceStorageQuotaMbytes:uD(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function uD(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var jC={Od:{feedbackEndpoint:aC(tC),modifyChannelNotificationPreferenceEndpoint:aC(vC),playlistEditEndpoint:aC(wC),shareEntityEndpoint:aC(sC),subscribeEndpoint:aC(pC),undoFeedbackEndpoint:aC(uC),unsubscribeEndpoint:aC(qC),webPlayerShareEntityServiceEndpoint:aC(xC)}};function vD(){var a=Xw();Tw(a,{lc:pD,Ed:nD});Tw(a,{lc:dD,Ed:lr});var b=YB(),c=a.resolve(dD),d=a.resolve(pD),e={};b&&(e.client_location=b);iC(d,c,e);Tw(a,{lc:PB,xe:NB.instance})}
;var wD={},xD=(wD["api.invalidparam"]=2,wD.auth=150,wD["drm.auth"]=150,wD["heartbeat.net"]=150,wD["heartbeat.servererror"]=150,wD["heartbeat.stop"]=150,wD["html5.unsupportedads"]=5,wD["fmt.noneavailable"]=5,wD["fmt.decode"]=5,wD["fmt.unplayable"]=5,wD["html5.missingapi"]=5,wD["html5.unsupportedlive"]=5,wD["drm.unavailable"]=5,wD["mrm.blocked"]=151,wD["embedder.identity.denied"]=152,wD["embedder.identity.missing.referrer"]=153,wD);var yD=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function zD(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function AD(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(yD);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(Oa(a))try{var e=JSON.stringify(a);b.embed_config=e}catch(f){console.error("Invalid embedConfig JSON",f)}return b}
function BD(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function CD(a,b){J.call(this);var c=this;this.api=a;this.j=this.G=!1;this.J=[];this.V={};this.o=[];this.i=[];this.ba=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.aa=T("web_player_split_event_bus_iframe");this.B=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.u=function(d){c.onMessage(d)};
DD.addEventListener("message",this.u);if(a=S("WIDGET_ID"))this.sessionId=a;b&&this.u(b);ED(this,"onReady",function(){c.G=!0;var d=c.api.getVideoData();if(!d.isPlayable){c.ba=!0;d=d.errorCode;var e=e===void 0?5:e;c.errorCode=d?xD[d]||e:e;c.sendMessage("onError",Number(c.errorCode))}FD(c);T("embeds_enable_parent_message_on_ready")&&!c.h&&!c.j&&window.parent!==window&&c.sessionId&&GD(c,{event:"readyToListen"},window.parent)});
ED(this,"onVideoProgress",this.og.bind(this));ED(this,"onVolumeChange",this.pg.bind(this));ED(this,"onApiChange",this.hg.bind(this));ED(this,"onPlaybackQualityChange",this.lg.bind(this));ED(this,"onPlaybackRateChange",this.mg.bind(this));ED(this,"onStateChange",this.ng.bind(this));ED(this,"onWebglSettingsChanged",this.qg.bind(this));ED(this,"onCaptionsTrackListChanged",this.ig.bind(this));ED(this,"captionssettingschanged",this.jg.bind(this))}
v(CD,J);function FD(a){if(a.h)if(a.j)T("embeds_send_already_init_message")&&a.sendMessage("alreadyInitialized");else if(a.G){a.j=!0;a.G=!1;a.sendMessage("initialDelivery",HD(a));a.sendMessage("onReady");sB("ep_init_ar");for(var b=y(a.J),c=b.next();!c.done;c=b.next())GD(a,c.value);a.J=[]}}
function ID(a,b){a.sendMessage("infoDelivery",b)}
p=CD.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.j?GD(this,a):this.J.push(a)};
function JD(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function ED(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function HD(a){if(!a.api)return null;var b=a.api.getApiInterface();Xb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.ng=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());ID(this,a)};
p.lg=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());ID(this,a)};
p.mg=function(a){ID(this,{playbackRate:a})};
p.hg=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.pg=function(){ID(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.og=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());ID(this,a)};
p.qg=function(){ID(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.ig=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};ID(this,a)}};
p.jg=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};ID(this,a)}};
p.onMessage=function(a){if(!(this.B!=="*"&&a.origin!==this.B||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.B=this.targetOrigin=a);this.h=c;this.sessionId=b;FD(this);break;case "command":if(c=b.func,b=b.args,c==="addEventListener"&&b)c=b[0],b=a.origin,c==="onReady"?this.api.logApiCall(c+" invocation",b):c==="onError"&&this.ba&&(this.api.logApiCall(c+" invocation",
b,this.errorCode),this.errorCode=void 0),this.api.logApiCall(c+" registration",b),this.V[c]||c==="onReady"||(a=JD(this,c,b),this.i.push({eventType:c,listener:a,origin:b}),this.aa?this.api.handleExternalCall("addEventListener",[c,a],b):this.api.addEventListener(c,a),this.V[c]=!0);else if(a=a.origin,this.api.isExternalMethodAvailable(c,a)){b=b||[];if(b.length>0&&zD(c)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},c){case "loadVideoById":case "cueVideoById":e=AD(d[0],d[1]!==
void 0?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=AD(e);break;case "loadPlaylist":case "cuePlaylist":e=BD(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(c,b,a);zD(c)&&ID(this,HD(this))}}}};
function GD(a,b,c){if(c=c===void 0?a.h:c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(e){ny(e)}}}
p.X=function(){J.prototype.X.call(this);DD.removeEventListener("message",this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.aa?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var DD=window;function KD(a,b,c){J.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){d.onMessage(e)};
LD.addEventListener("message",this.i);MD(this,"RECEIVING")}
v(KD,J);p=KD.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.kg.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.kg=function(a,b){this.P||MD(this,a,ND(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function OD(a,b){switch(a){case "loadVideoById":return[AD(b)];case "cueVideoById":return[AD(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[BD(b)];case "cuePlaylist":return[BD(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function PD(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function ND(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function MD(a,b,c){a.P||(b={id:a.id,command:b},c&&(b.data=c),QD.postMessage(JSON.stringify(b),a.origin))}
p.onMessage=function(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.P){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=OD(c,b||{}),b=this.api.handleExternalCall(c,
b,a||null),(b=PD(c,b))&&MD(this,c,b))}}}}}};
p.X=function(){LD.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);J.prototype.X.call(this)};
var LD=window,QD=window.parent;var RD=new cD;function SD(){return RD.Fd()}
function TD(a){a=a===void 0?{}:a;return RD.invoke(a)}
;function UD(a,b,c,d,e){J.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.Ub=e;this.Va=!1;this.api={};this.na=this.u=null;this.V=new O;this.h={};this.ba=this.za=this.elementId=this.Wa=this.config=null;this.aa=!1;this.j=this.G=null;this.Ga={};this.dd=["onReady"];this.lastError=null;this.lb=NaN;this.J={};this.ha=0;this.i=this.o=a;Ac(this,this.V);VD(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(WD(this),XD(this))}
v(UD,J);p=UD.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.P){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof hz||(b=new hz(b));this.config=b;this.setConfig(a);XD(this);this.isReady()&&YD(this)}};
function WD(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Wa=a;this.config=ZD(a);WD(this);if(!this.za){var b;this.za=$D(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=hn(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=hn(Number(a)||a))};
function YD(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function aE(a){var b=!0,c=bE(a);c&&a.config&&(b=c.dataset.version===cE(a));return b&&!!F("yt.player.Application.create")}
function XD(a){if(!a.P&&!a.aa){var b=aE(a);if(b&&(bE(a)?"html5":null)==="html5")a.ba="html5",a.isReady()||dE(a);else if(eE(a),a.ba="html5",b&&a.j&&a.o)a.o.appendChild(a.j),dE(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=fE(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?ZD(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Ub);dE(a)};
a.aa=!0;b?a.G():(sz(cE(a),a.G),(b=gE(a))&&zz(b||""),hE(a)&&!c&&E("yt.player.Application.create",null))}}}
function bE(a){var b=Qi(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function dE(a){if(!a.P){var b=bE(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.aa=!1;if(!fE(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}iE(a)}else a.lb=setTimeout(function(){dE(a)},50)}}
function iE(a){VD(a);a.Va=!0;var b=bE(a);if(b){a.u=jE(a,b,"addEventListener");a.na=jE(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=jE(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);YD(a);a.za&&a.za(a.api);a.V.zb("onReady",a.api)}
function jE(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function VD(a){a.Va=!1;if(a.na)for(var b in a.h)a.h.hasOwnProperty(b)&&a.na(b,a.h[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&clearTimeout(Number(c));a.J={};a.u=null;a.na=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Va};
p.addEventListener=function(a,b){var c=this,d=$D(this,b);d&&(Rb(this.dd,a)>=0||this.h[a]||(b=kE(this,a),this.u&&this.u(a,b)),this.V.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.P||(b=$D(this,b))&&this.V.unsubscribe(a,b)};
function $D(a,b){var c=b;if(typeof b==="string"){if(a.Ga[b])return a.Ga[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ga[b]=c}return c?c:null}
function kE(a,b){function c(d){function e(){if(!a.P)try{a.V.zb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Ue});g.level="WARNING";throw g;}}
if(fE(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.J,h=String(f);h in g&&delete g[h]},0);
Hi(a.J,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.ba||(bE(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function eE(a){a.cancel();VD(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=bE(a);b&&(aE(a)||!hE(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&Si(a.o)}
p.cancel=function(){this.G&&wz(cE(this),this.G);clearTimeout(this.lb);this.aa=!1};
p.X=function(){eE(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ga=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Wa=this.config=this.api=null;delete this.o;delete this.i;J.prototype.X.call(this)};
function hE(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function cE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function gE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function fE(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function ZD(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Ki(e):e}return b}
;var lE={},mE="player_uid_"+(Math.random()*1E9>>>0);function nE(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Qi(c):c;var e=mE+"_"+Pa(c),f=lE[e];if(f&&d)return oE(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new UD(c,e,a,b,void 0);lE[e]=f;f.addOnDisposeCallback(function(){delete lE[f.getId()]});
return f.api}
function oE(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var pE=new Map;function qE(a,b,c,d,e){b=new rE(a,b,c,d===void 0?function(){}:d,e===void 0?null:e);
pE.set(a,b)}
function rE(a,b,c,d,e){J.call(this);this.container=a;this.webPlayerContextConfig=b;this.h=c;this.Oc=d;this.playerVars=e;sE(this)}
v(rE,J);function sE(a){if(F("yt.player.Application.create"))Promise.resolve().then(function(){tE(a)});
else{uE(zp(a.webPlayerContextConfig.trustedJsUrl),function(){tE(a)},function(){a.P||a.Oc()});
var b=a.webPlayerContextConfig.trustedCssUrl;b&&vE(zp(b))}}
function tE(a){if(!a.P){var b=F("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi();var c=a.api.addEventListener;a.api.addEventListener=function(d,e){d==="onReady"?Promise.resolve().then(function(){e(a.api)}):c(d,e)};
a.api.isReady=function(){return!0};
a.h(a.api)}catch(d){throw a.Oc(),d;}}}
rE.prototype.X=function(){this.api&&this.api.destroy();Si(this.container);J.prototype.X.call(this)};
function vE(a){var b="ytp-"+a.toString();if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;Qb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function uE(a,b,c){var d="ytp-"+a.toString(),e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",function(){c()}),e.addEventListener("load",function(){b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",function(){f.dataset.failed="true";c()});
f.addEventListener("load",function(){f.dataset.loaded="true";b()});
Lb(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;var wE=null,xE=null,yE;function zE(a){wE=a;wE.addEventListener("onVideoDataChange",AE);wE.addEventListener("onReady",BE);a=S("POST_MESSAGE_ID","player");var b=S("POST_MESSAGE_ORIGIN");S("ENABLE_JS_API")?xE=new CD(wE,yE):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(xE=new KD(wE,a,b));yE=void 0}
function CE(){wA();T("ytidb_create_logger_embed_killswitch")||vs();var a={};jD.h||(jD.h=new jD);jD.h.install((a.flush_logs={callback:function(){Rx()}},a));
mw();vD();T("ytidb_clear_embedded_player")&&qn.ra(function(){LC()});
a=Cq("att_init_delay",200);T("enable_rta_manager")&&setTimeout(function(){T("attmusi")&&XC();var b=new MB;var c={preload:!T("enable_rta_npi"),Fg:T("attmusi")},d=!1;if(typeof c==="boolean")var e={preload:c};else typeof c==="undefined"?e={preload:!0}:(e=c,d=!!c.Ri);c=d?void 0:new aw;AB.instance=new AB(b,e,c);b=AB.instance;e=b.i.bind(b);E("yt.aba.att",e);b=b.j.bind(b);E("yt.aba.att2",b)},a);
Ir(function(){if(T("enable_zw_ping")){var b=S("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");S("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",S("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function DE(){yB();var a=vr(),b=yr(119),c=window.devicePixelRatio>1;if(document.body&&yn(document.body,"exp-invert-logo"))if(c&&!yn(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!yn(d,"inverted-hdpi")){var e=wn(d);xn(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&yn(document.body,"inverted-hdpi")&&zn();if(b!=c){b="f"+(Math.floor(119/31)+1);d=zr(b)||0;d=c?d|67108864:d&-67108865;d===0?delete sr[b]:(c=d.toString(16),sr[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in sr)sr.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(sr[f])));var f=d.join("&");or(b,f,63072E3,a.i,c)}}
function AE(){EE()}
function BE(){sB("ep_init_pr");EE()}
function EE(){var a=wE.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function FE(){wE&&wE.sendAbandonmentPing&&wE.sendAbandonmentPing();S("PL_ATT")&&RD.dispose();for(var a=qn,b=0,c=tA.length;b<c;b++)a.sa(tA[b]);tA.length=0;uz(uA.toString());vA=!1;bq("DCLKSTAT",0);zc(xE);wE&&(wE.removeEventListener("onVideoDataChange",AE),wE.destroy(),wE=null)}
;sB("ep_init_eps");E("yt.setConfig",bq);E("yt.config.set",bq);E("yt.setMsg",rz);E("yt.msgs.set",rz);E("yt.logging.errors.log",my);
E("writeEmbed",function(){sB("ep_init_wes");var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}iA(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=zC();if(!b.serializedForcedExperimentIds){var c=pq(window.location.href);c.forced_experiments&&(b.serializedForcedExperimentIds=c.forced_experiments)}var d;((d=
a.args)==null?0:d.autoplay)?nB("watch",["pbs","pbu","pbp"]):a.args&&Uy(a.args)?nB("video_preview",["ol"]):nB("embed_no_video",["ep_init_ar"]);T("embeds_use_player_instances_library")?qE(document.getElementById("player"),b,function(e){zE(e)},function(){throw Error("Unable to load player JS");
},a.args):(a=nE(a,b),zE(a));
CE();sB("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||SD);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||TD);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||xA);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||hA);E("yt.util.activity.init",F("yt.util.activity.init")||Aw);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||Ew);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||Bw);window.addEventListener("load",fq(function(){DE()}));
window.addEventListener("pageshow",fq(function(a){a.persisted||DE()}));
window.addEventListener("pagehide",fq(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?FE():a.persisted||FE()}));
T("embeds_enable_contrib_error_handling")?yC():(window.onerror=function(a,b,c,d,e){py(a,b,c,d,e)},Vk=oy,window.addEventListener("unhandledrejection",function(a){oy(a.reason)}),ly());
(function(){if(T("embeds_enable_early_message_handler")&&S("ENABLE_JS_API")){var a=function(b){yE=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
sB("ep_init_epe");}).call(this);
