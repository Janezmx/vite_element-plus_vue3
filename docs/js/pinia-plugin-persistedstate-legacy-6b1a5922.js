System.register([],(function(e,r){"use strict";return{execute:function(){function r(e,r){var t;return e="object"==typeof(t=e)&&null!==t?e:Object.create(null),new Proxy(e,{get:(e,t,o)=>"key"===t?Reflect.get(e,t,o):Reflect.get(e,t,o)||Reflect.get(r,t,o)})}function t(e,{storage:r,serializer:t,key:o,debug:s}){try{const s=null==r?void 0:r.getItem(o);s&&e.$patch(null==t?void 0:t.deserialize(s))}catch(n){s&&console.error(n)}}function o(e,{storage:r,serializer:t,key:o,paths:s,debug:n}){try{const n=Array.isArray(s)?function(e,r){return r.reduce(((r,t)=>{const o=t.split(".");return function(e,r,t){return r.slice(0,-1).reduce(((e,r)=>/^(__proto__)$/.test(r)?{}:e[r]=e[r]||{}),e)[r[r.length-1]]=t,e}(r,o,function(e,r){return r.reduce(((e,r)=>null==e?void 0:e[r]),e)}(e,o))}),{})}(e,s):e;r.setItem(o,t.serialize(n))}catch(l){n&&console.error(l)}}e("s",function(e={}){return s=>{const{auto:n=!1}=e,{options:{persist:l=n},store:u}=s;if(!l)return;const i=(Array.isArray(l)?l.map((t=>r(t,e))):[r(l,e)]).map((({storage:r=localStorage,beforeRestore:t=null,afterRestore:o=null,serializer:s={serialize:JSON.stringify,deserialize:JSON.parse},key:n=u.$id,paths:l=null,debug:i=!1})=>{var a;return{storage:r,beforeRestore:t,afterRestore:o,serializer:s,key:(null!=(a=e.key)?a:e=>e)(n),paths:l,debug:i}}));u.$persist=()=>{i.forEach((e=>{o(u.$state,e)}))},u.$hydrate=({runHooks:e=!0}={})=>{i.forEach((r=>{const{beforeRestore:o,afterRestore:n}=r;e&&(null==o||o(s)),t(u,r),e&&(null==n||n(s))}))},i.forEach((e=>{const{beforeRestore:r,afterRestore:n}=e;null==r||r(s),t(u,e),null==n||n(s),u.$subscribe(((r,t)=>{o(t,e)}),{detached:!0})}))}}())}}}));
