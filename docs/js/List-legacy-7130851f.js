System.register(["./element-plus-legacy-fbce1e01.js","./@vue-legacy-86e110d2.js","./vue-router-legacy-d46b5a2d.js","./list-legacy-d7ad3458.js","./dayjs-legacy-ce81683a.js","./@vueuse-legacy-7f1c55c2.js","./@ctrl-legacy-b33c6eb8.js","./lodash-es-legacy-826bf264.js","./async-validator-legacy-97cc394a.js","./@popperjs-legacy-dac8ae6b.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-5bb9c60d.js","./index-legacy-8a7ee15c.js","./pinia-legacy-6a6f5459.js","./vue-demi-legacy-97cfbb01.js","./@element-plus-legacy-28ceac2d.js","./axios-legacy-e74dd017.js","./pinia-plugin-persistedstate-legacy-6b1a5922.js","./moment-legacy-0c23ee07.js"],(function(e,l){"use strict";var a,t,n,u,s,o,i,g,r,c,p,d,y,v,m,j,f,h,z,x,S,_,C,b,N,k,w=document.createElement("style");return w.textContent=".el-pagination{justify-content:center}\n",document.head.appendChild(w),{setters:[e=>{a=e.s,t=e.g,n=e.l,u=e.o,s=e.k,o=e.t,i=e.v,g=e.n,r=e.u},e=>{c=e.D,p=e.r,d=e.w,y=e.c,v=e.R,m=e.u,j=e.o,f=e.W,h=e.s,z=e.e,x=e.a,S=e.P,_=e.I,C=e.L,b=e.a4},e=>{N=e.o},e=>{k=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={style:{"text-align":"center",margin:"10px 0"}},w=c({__name:"Pagination",props:{size:{default:10},total:{default:0},layout:{default:"total, sizes, prev, pager, next, jumper"},sizes:{default:[10,20,50,100,500,1e3]}},emits:["change"],setup(e,{emit:t}){const n=e,u=p(1),s=p(n.total),o=p(n.size);d(s,(e=>{const l=e%o.value==0?e/o.value:Math.floor(e/o.value)+1;0===l?1!==u.value&&i(1):u.value>l&&i(l)}));const i=e=>{u.value=e,t("change",{pageSize:o,pageNo:e})},g=e=>{o.value=e,u.value=1,t("change",{pageSize:e,pageNo:1})};return(e,t)=>{const s=a;return j(),y("div",l,[v(s,{onSizeChange:g,onCurrentChange:i,"current-page":u.value,"page-sizes":m(n).sizes,"page-size":o.value,layout:m(n).layout,total:m(n).total},null,8,["current-page","page-sizes","page-size","layout","total"])])}}}),V={class:"breadcrumb"},L=x("hr",null,null,-1),P={style:{margin:"10px 0"}},R={class:"pagination"};e("default",c({__name:"List",setup(e){const l=p(!1),a=p(""),c=p([]),d=()=>{l.value=!0,k().then((e=>{c.value=e.data||[]})).catch((e=>{t.error(e.message)})).finally((()=>{l.value=!1}))},U=f({pageNo:1,pageSize:10}),q=({pageNo:e,pageSize:l})=>{U.pageNo=e,U.pageSize=l},B=h((()=>{const e=(U.pageNo-1)*U.pageSize;return c.value.slice(e,e+U.pageSize)}));return z((()=>{d()})),N(((e,l)=>{console.log("onBeforeRouteUpdate")})),(e,t)=>{const p=g,f=n,h=u,z=s,N=r,k=o,U=w,D=i;return j(),y(C,null,[x("div",V,[v(f,{separator:">"},{default:S((()=>[v(p,null,{default:S((()=>[b("列表")])),_:1})])),_:1})]),L,_((j(),y("div",null,[x("div",P,[v(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),style:{width:"200px"}},null,8,["modelValue"]),v(z,{type:"primary",onClick:d,style:{"margin-left":"10px"}},{default:S((()=>[b("查询")])),_:1})]),v(k,{data:m(B),border:""},{default:S((()=>[v(N,{label:"id",prop:"id"}),v(N,{label:"名称",prop:"name"})])),_:1},8,["data"]),x("div",R,[v(U,{ref:"pagination",onChange:q,total:c.value.length},null,8,["total"])])])),[[D,l.value]])],64)}}}))}}}));
