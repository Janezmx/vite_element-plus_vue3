import{l as e,m as a,v as l,n as r,o as s,p as t,q as m,r as o,k as u}from"./element-plus-9c2b417e.js";import{s as i}from"./list-91759937.js";import{u as p}from"./index-42e9273a.js";import{D as d,r as n,W as f,c as j,a as g,R as c,P as b,I as v,O as _,L as h,o as y,a4 as k}from"./@vue-6c75e83b.js";import"./dayjs-4d0ffb58.js";import"./@vueuse-89c89079.js";import"./@element-plus-a1466eed.js";import"./@ctrl-91de2ec7.js";import"./lodash-es-aaa217f4.js";import"./async-validator-8d480e59.js";import"./@popperjs-0e77d79c.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-500438c6.js";import"./pinia-6423bbc2.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-1d03852f.js";import"./axios-a540c308.js";import"./pinia-plugin-persistedstate-3ffd75ad.js";import"./moment-b265113e.js";const V={class:"breadcrumb"},x=g("hr",null,null,-1),w=d({__name:"Form",setup(d){const{Global:w}=p(),q=n(!1),$=f({name:"",remark:"",tag:[]}),U=f({tag:[{required:!0,message:"请选择标签",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{validator:(e,a,l)=>{if(a){if(!a.match(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/))return l(new Error("只能输入中文、英文字母、数字和下划线"));l()}else l(new Error("请输入名称"))},trigger:"blur"}]}),z=n(null),E=()=>{z.value.validate((async e=>{if(e&&e){q.value=!0;const{name:e,tag:a,remark:l}=$,r={name:e,tag:a.join(","),remark:l};i(r).then((()=>{w.$message({type:"success",message:"提交成功"})})).catch((e=>{w.$message({type:"error",message:`提交失败，原因：${e.message}`})})).finally((()=>{q.value=!1}))}}))};return(i,p)=>{const d=r,n=e,f=s,w=t,R=m,A=o,C=u,D=a,F=l;return y(),j(h,null,[g("div",V,[c(n,{separator:">"},{default:b((()=>[c(d,null,{default:b((()=>[k("表单")])),_:1})])),_:1})]),x,v((y(),_(D,{ref_key:"formRef",ref:z,model:$,"label-width":"120px",rules:U},{default:b((()=>[c(w,{label:"名字",prop:"name"},{default:b((()=>[c(f,{modelValue:$.name,"onUpdate:modelValue":p[0]||(p[0]=e=>$.name=e),modelModifiers:{trim:!0},style:{width:"215px"}},null,8,["modelValue"])])),_:1}),c(w,{label:"标签",prop:"tag"},{default:b((()=>[c(A,{modelValue:$.tag,"onUpdate:modelValue":p[1]||(p[1]=e=>$.tag=e),"collapse-tags":"",multiple:"",filterable:"",placeholder:"请选择"},{default:b((()=>[c(R,{label:"作业",value:"job"}),c(R,{label:"任务",value:"task"}),c(R,{label:"进程",value:"process"})])),_:1},8,["modelValue"])])),_:1}),c(w,{label:"备注",prop:"remark"},{default:b((()=>[c(f,{modelValue:$.remark,"onUpdate:modelValue":p[2]||(p[2]=e=>$.remark=e),type:"textarea",style:{width:"215px"}},null,8,["modelValue"])])),_:1}),c(w,null,{default:b((()=>[c(C,{type:"primary",onClick:E},{default:b((()=>[k("确认")])),_:1}),c(C,null,{default:b((()=>[k("取消")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[F,q.value]])],64)}}});export{w as default};
