System.register(["./@vue-legacy-b418f123.js"],(function(e,t){"use strict";var n,r,o,a,c,s,l,i,u,f,p,h,d,m;return{setters:[e=>{n=e.A,r=e.u,o=e.s,a=e.W,c=e.v,s=e.n,l=e.y,i=e.a0,u=e.aq,f=e.D,p=e.ab,h=e.t,d=e.r,m=e.w}],execute:function(){e({a:function(){return c($e)},b:function(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),function(e){const n=function(e){const{history:t,location:n}=window,r={value:G(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:B()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){console.error(i),n[c?"replace":"assign"](l)}}function c(e,n){a(e,g({},t.state,_(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}function s(e,n){const c=g({},o.value,t.state,{forward:e,scroll:q()});a(c.current,c,!0),a(e,g({},_(r.value,e,null),{position:c.position+1},n),!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:c}}(e=function(e){if(!e)if(t){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),E(e)}(e)),r=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=G(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:u,type:$.pop,direction:u?u>0?S.forward:S.back:S.unknown})}))};function l(){c=n.value}function i(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(g({},e.state,{scroll:q()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:i,destroy:f}}(e,n.state,n.location,n.replace);function o(e,t=!0){t||r.pauseListeners(),history.go(e)}const a=g({location:"",base:e,go:o,createHref:A.bind(null,e)},n,r);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}(e)},c:function(e){const c=function(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,s=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ee(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);s.aliasOf=r&&r.record;const i=re(t,e),u=[s];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(g({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=Z(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!te(f)&&c(e.name)),s.children){const e=s.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{c(p)}:y}function c(e){if(D(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(){return n}function l(e){let t=0;for(;t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!oe(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!te(e)&&r.set(e.record.name,e)}function i(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw F(1,{location:e});c=o.record.name,s=g(J(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&J(e.params,o.keys.map((e=>e.name)))),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw F(1,{location:e,currentLocation:t});c=o.record.name,s=g({},t.params,e.params),a=o.stringify(s)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:c,path:a,params:s,matched:l,meta:ne(l)}}return t=re({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:i,removeRoute:c,getRoutes:s,getRecordMatcher:o}}(e.routes,e),l=e.parseQuery||Oe,i=e.stringifyQuery||Re,u=e.history,f=Ae(),p=Ae(),h=Ae(),d=n(I);let m=I;t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=v.bind(null,(e=>""+e)),E=v.bind(null,Ee),O=v.bind(null,ke);function x(e,t){if(t=g({},t||d.value),"string"==typeof e){const n=k(l,e,t.path),r=c.resolve({path:n.path},t),o=u.createHref(n.fullPath);return g(n,r,{params:O(r.params),hash:ke(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=g({},e,{path:k(l,e.path,t.path).path});else{const r=g({},e.params);for(const e in r)null==r[e]&&delete r[e];n=g({},e,{params:E(e.params)}),t.params=E(t.params)}const r=c.resolve(n,t),o=e.hash||"";r.params=w(O(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,g({},e,{hash:(s=o,be(s).replace(me,"{").replace(ve,"}").replace(he,"^")),path:r.path}));var s;const f=u.createHref(a);return g({fullPath:a,hash:o,query:i===Re?Pe(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function C(e){return"string"==typeof e?k(l,e,d.value.path):g({},e)}function S(e,t){if(m!==e)return F(8,{from:t,to:e})}function j(e){return B(e)}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),g({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function B(e,t){const n=m=x(e),r=d.value,o=e.state,a=e.force,c=!0===e.replace,s=A(n);if(s)return B(g(C(s),{state:"object"==typeof s?g({},o,s.state):o,force:a,replace:c}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&R(t.matched[r],n.matched[o])&&P(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=F(16,{to:l,from:r}),ae(r,r,!0,!1)),(u?Promise.resolve(u):_(l,r)).catch((e=>T(e)?T(e,2)?e:N(e):Y(e,l,r))).then((e=>{if(e){if(T(e,2))return B(g({replace:c},C(e.to),{state:"object"==typeof e.to?g({},o,e.to.state):o,force:a}),t||l)}else e=W(l,r,!0,c,o);return U(l,r,e),e}))}function G(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>R(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>R(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=Le(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const c=G.bind(null,e,t);return n.push(c),Ue(n).then((()=>{n=[];for(const r of f.list())n.push(qe(r,e,t));return n.push(c),Ue(n)})).then((()=>{n=Le(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(c),Ue(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(b(r.beforeEnter))for(const o of r.beforeEnter)n.push(qe(o,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(c),Ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Le(a,"beforeRouteEnter",e,t),n.push(c),Ue(n)))).then((()=>{n=[];for(const r of p.list())n.push(qe(r,e,t));return n.push(c),Ue(n)})).catch((e=>T(e,8)?e:Promise.reject(e)))}function U(e,t,n){for(const r of h.list())r(e,t,n)}function W(e,n,r,o,a){const c=S(e,n);if(c)return c;const s=n===I,l=t?history.state:{};r&&(o||s?u.replace(e.fullPath,g({scroll:s&&l&&l.scroll},a)):u.push(e.fullPath,a)),d.value=e,ae(e,n,r,s),N()}let V;function z(){V||(V=u.listen(((e,n,r)=>{if(!ie.listening)return;const o=x(e),a=A(o);if(a)return void B(g(a,{replace:!0}),o).catch(y);m=o;const c=d.value;var s,l;t&&(s=L(c.fullPath,r.delta),l=q(),M.set(s,l)),_(o,c).catch((e=>T(e,12)?e:T(e,2)?(B(e.to,o).then((e=>{T(e,20)&&!r.delta&&r.type===$.pop&&u.go(-1,!1)})).catch(y),Promise.reject()):(r.delta&&u.go(-r.delta,!1),Y(e,o,c)))).then((e=>{(e=e||W(o,c,!1))&&(r.delta&&!T(e,8)?u.go(-r.delta,!1):r.type===$.pop&&T(e,20)&&u.go(-1,!1)),U(o,c,e)})).catch(y)})))}let K,H=Ae(),X=Ae();function Y(e,t,n){N(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function N(e){return K||(K=!e,z(),H.list().forEach((([t,n])=>e?n(e):t())),H.reset()),e}function ae(n,r,o,a){const{scrollBehavior:c}=e;if(!t||!c)return Promise.resolve();const l=!o&&function(e){const t=M.get(e);return M.delete(e),t}(L(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return s().then((()=>c(n,r,l))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>Y(e,n,r)))}const ce=e=>u.go(e);let se;const le=new Set,ie={currentRoute:d,listening:!0,addRoute:function(e,t){let n,r;return D(e)?(n=c.getRecordMatcher(e),r=t):r=e,c.addRoute(r,n)},removeRoute:function(e){const t=c.getRecordMatcher(e);t&&c.removeRoute(t)},hasRoute:function(e){return!!c.getRecordMatcher(e)},getRoutes:function(){return c.getRoutes().map((e=>e.record))},resolve:x,options:e,push:j,replace:function(e){return j(g(C(e),{replace:!0}))},go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:f.add,beforeResolve:p.add,afterEach:h.add,onError:X.add,isReady:function(){return K&&d.value!==I?Promise.resolve():new Promise(((e,t)=>{H.add([e,t])}))},install(e){e.component("RouterLink",Be),e.component("RouterView",Ie),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>r(d)}),t&&!se&&d.value===I&&(se=!0,j(u.location).catch((e=>{})));const n={};for(const t in I)n[t]=o((()=>d.value[t]));e.provide($e,this),e.provide(Se,a(n)),e.provide(je,d);const c=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(m=I,V&&V(),V=null,d.value=I,se=!1,K=!1),c()}}};return ie},o:function(e){const t=c(xe,{}).value;t&&function(e,t,n){const r=()=>{e[t].delete(n)};l(r),i(r),u((()=>{e[t].add(n)})),e[t].add(n)}(t,"updateGuards",e)},u:function(){return c(Se)}});
/*!
        * vue-router v4.1.6
        * (c) 2022 Eduardo San Martin Morote
        * @license MIT
        */
const t="undefined"!=typeof window,g=Object.assign;function v(e,t){const n={};for(const r in t){const o=t[r];n[r]=b(o)?o.map(e):e(o)}return n}const y=()=>{},b=Array.isArray,w=/\/$/,E=e=>e.replace(w,"");function k(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function O(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function R(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function P(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!x(e[n],t[n]))return!1;return!0}function x(e,t){return b(e)?C(e,t):b(t)?C(t,e):e===t}function C(e,t){return b(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var $,S;!function(e){e.pop="pop",e.push="push"}($||($={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(S||(S={}));const j=/^[^#]+#/;function A(e,t){return e.replace(j,"#")+t}const q=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e,t){return(history.state?history.state.position-t:-1)+e}const M=new Map;let B=()=>location.protocol+"//"+location.host;function G(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),O(n,"")}return O(n,e)+r+o}function _(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?q():null}}function D(e){return"string"==typeof e||"symbol"==typeof e}const I={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},U=Symbol("");var W;function F(e,t){return g(new Error,{type:e,[U]:!0},t)}function T(e,t){return e instanceof Error&&U in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(W||(W={}));const V="[^/]+?",z={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function H(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=H(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(X(r))return 1;if(X(o))return-1}return o.length-r.length}function X(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Y={type:0,value:""},N=/[a-zA-Z0-9_]/;function Z(e,t,n){const r=function(e,t){const n=g({},z,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(K,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||V;if(f!==V){c+=10;try{new RegExp(`(${f})`)}catch(s){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+s.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&l.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,c+=20,i&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,l=a in t?t[a]:"";if(b(l)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=b(l)?l.join("/"):l;if(!i){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[Y]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}for(;l<e.length;)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:N.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}(e.path),n),o=g(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function J(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ee(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function te(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ne(e){return e.reduce(((e,t)=>g(e,t.meta)),{})}function re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function oe(e,t){return t.children.some((t=>t===e||oe(e,t)))}const ae=/#/g,ce=/&/g,se=/\//g,le=/=/g,ie=/\?/g,ue=/\+/g,fe=/%5B/g,pe=/%5D/g,he=/%5E/g,de=/%60/g,me=/%7B/g,ge=/%7C/g,ve=/%7D/g,ye=/%20/g;function be(e){return encodeURI(""+e).replace(ge,"|").replace(fe,"[").replace(pe,"]")}function we(e){return be(e).replace(ue,"%2B").replace(ye,"+").replace(ae,"%23").replace(ce,"%26").replace(de,"`").replace(me,"{").replace(ve,"}").replace(he,"^")}function Ee(e){return null==e?"":function(e){return be(e).replace(ae,"%23").replace(ie,"%3F")}(e).replace(se,"%2F")}function ke(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Oe(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ue," "),o=e.indexOf("="),a=ke(o<0?e:e.slice(0,o)),c=o<0?null:ke(e.slice(o+1));if(a in t){let e=t[a];b(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function Re(e){let t="";for(let n in e){const r=e[n];(n=we(n).replace(le,"%3D"),null!=r)?(b(r)?r.map((e=>e&&we(e))):[r&&we(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function Pe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=b(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const xe=Symbol(""),Ce=Symbol(""),$e=Symbol(""),Se=Symbol(""),je=Symbol("");function Ae(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function qe(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const l=e=>{var l;!1===e?s(F(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(l=e)||l&&"object"==typeof l?s(F(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},i=e.call(r&&r.instances[o],t,n,l);let u=Promise.resolve(i);e.length<3&&(u=u.then(l)),u.catch((e=>s(e)))}))}function Le(e,t,n,r){const o=[];for(const c of e)for(const e in c.components){let s=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(a=s)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(s.__vccOpts||s)[t];a&&o.push(qe(a,n,r,c,e))}else{let a=s();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const a=(s=o).__esModule||"Module"===s[Symbol.toStringTag]?o.default:o;var s;c.components[e]=a;const l=(a.__vccOpts||a)[t];return l&&qe(l,n,r,c,e)()}))))}}var a;return o}function Me(e){const t=c($e),n=c(Se),a=o((()=>t.resolve(r(e.to)))),s=o((()=>{const{matched:e}=a.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const c=o.findIndex(R.bind(null,r));if(c>-1)return c;const s=Ge(e[t-2]);return t>1&&Ge(r)===s&&o[o.length-1].path!==s?o.findIndex(R.bind(null,e[t-2])):c})),l=o((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!b(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,a.value.params))),i=o((()=>s.value>-1&&s.value===n.matched.length-1&&P(n.params,a.value.params)));return{route:a,href:o((()=>a.value.href)),isActive:l,isExactActive:i,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[r(e.replace)?"replace":"push"](r(e.to)).catch(y):Promise.resolve()}}}const Be=f({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Me,setup(e,{slots:t}){const n=a(Me(e)),{options:r}=c($e),s=o((()=>({[_e(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_e(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:p("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}});function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _e=(e,t,n)=>null!=e?e:null!=t?t:n;function De(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ie=f({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=c(je),s=o((()=>e.route||a.value)),l=c(Ce,0),i=o((()=>{let e=r(l);const{matched:t}=s.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),u=o((()=>s.value.matched[i.value]));h(Ce,o((()=>i.value+1))),h(xe,u),h(je,s);const f=d();return m((()=>[f.value,u.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&R(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,o=e.name,a=u.value,c=a&&a.components[o];if(!c)return De(n.default,{Component:c,route:r});const l=a.props[o],i=l?!0===l?r.params:"function"==typeof l?l(r):l:null,h=p(c,g({},i,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:f}));return De(n.default,{Component:h,route:r})||h}}});function Ue(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}}));
