import{s as e,g as a,l as t,o as s,k as l,t as o,v as i,n as r,u as p}from"./element-plus-8e6384e1.js";import{D as u,r as n,w as m,c as g,R as d,u as v,o as c,W as j,s as f,e as z,a as h,P as y,I as x,L as S,a4 as _}from"./@vue-61e82e68.js";import{o as b}from"./vue-router-5d7048cc.js";import{f as N}from"./list-a0a56441.js";import"./dayjs-4d0ffb58.js";import"./@vueuse-2e722466.js";import"./@ctrl-91de2ec7.js";import"./lodash-es-aaa217f4.js";import"./async-validator-8d480e59.js";import"./@popperjs-0e77d79c.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-500438c6.js";import"./index-e24beb39.js";import"./pinia-23eb96b6.js";import"./vue-demi-71ba0ef2.js";import"./@element-plus-17b7322c.js";import"./axios-a540c308.js";import"./pinia-plugin-persistedstate-3ffd75ad.js";import"./moment-b265113e.js";const C={style:{"text-align":"center",margin:"10px 0"}},k=u({__name:"Pagination",props:{size:{default:10},total:{default:0},layout:{default:"total, sizes, prev, pager, next, jumper"},sizes:{default:[10,20,50,100,500,1e3]}},emits:["change"],setup(a,{emit:t}){const s=a,l=n(1),o=n(s.total),i=n(s.size);m(o,(e=>{const a=e%i.value==0?e/i.value:Math.floor(e/i.value)+1;0===a?1!==l.value&&r(1):l.value>a&&r(a)}));const r=e=>{l.value=e,t("change",{pageSize:i,pageNo:e})},p=e=>{i.value=e,l.value=1,t("change",{pageSize:e,pageNo:1})};return(a,t)=>{const o=e;return c(),g("div",C,[d(o,{onSizeChange:p,onCurrentChange:r,"current-page":l.value,"page-sizes":v(s).sizes,"page-size":i.value,layout:v(s).layout,total:v(s).total},null,8,["current-page","page-sizes","page-size","layout","total"])])}}}),w={class:"breadcrumb"},V=h("hr",null,null,-1),L={style:{margin:"10px 0"}},P={class:"pagination"},R=u({__name:"List",setup(e){const u=n(!1),m=n(""),C=n([]),R=()=>{u.value=!0,N().then((e=>{C.value=e.data||[]})).catch((e=>{a.error(e.message)})).finally((()=>{u.value=!1}))},U=j({pageNo:1,pageSize:10}),B=({pageNo:e,pageSize:a})=>{U.pageNo=e,U.pageSize=a},D=f((()=>{const e=(U.pageNo-1)*U.pageSize;return C.value.slice(e,e+U.pageSize)}));return z((()=>{R()})),b(((e,a)=>{console.log("onBeforeRouteUpdate")})),(e,a)=>{const n=r,j=t,f=s,z=l,b=p,N=o,U=k,I=i;return c(),g(S,null,[h("div",w,[d(j,{separator:">"},{default:y((()=>[d(n,null,{default:y((()=>[_("列表")])),_:1})])),_:1})]),V,x((c(),g("div",null,[h("div",L,[d(f,{modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e),style:{width:"200px"}},null,8,["modelValue"]),d(z,{type:"primary",onClick:R,style:{"margin-left":"10px"}},{default:y((()=>[_("查询")])),_:1})]),d(N,{data:v(D),border:""},{default:y((()=>[d(b,{label:"id",prop:"id"}),d(b,{label:"名称",prop:"name"})])),_:1},8,["data"]),h("div",P,[d(U,{ref:"pagination",onChange:B,total:C.value.length},null,8,["total"])])])),[[I,u.value]])],64)}}});export{R as default};