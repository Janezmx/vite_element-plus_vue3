System.register(["./element-plus-legacy-da24df43.js","./list-legacy-62e4ecc0.js","./index-legacy-dd42c63d.js","./@vue-legacy-b418f123.js","./dayjs-legacy-ce81683a.js","./@vueuse-legacy-017f853d.js","./@element-plus-legacy-ee7991bd.js","./@ctrl-legacy-b33c6eb8.js","./lodash-es-legacy-826bf264.js","./async-validator-legacy-97cc394a.js","./@popperjs-legacy-dac8ae6b.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-5bb9c60d.js","./pinia-legacy-ba9a9cc6.js","./vue-demi-legacy-97cfbb01.js","./vue-router-legacy-563f63a3.js","./axios-legacy-e74dd017.js","./pinia-plugin-persistedstate-legacy-6b1a5922.js","./moment-legacy-0c23ee07.js"],(function(e,l){"use strict";var a,u,r,s,t,n,m,o,c,d,g,i,p,y,f,j,v,b,_,h,k,V,x;return{setters:[e=>{a=e.l,u=e.m,r=e.v,s=e.n,t=e.o,n=e.p,m=e.q,o=e.r,c=e.k},e=>{d=e.s},e=>{g=e.u},e=>{i=e.D,p=e.r,y=e.W,f=e.c,j=e.a,v=e.R,b=e.P,_=e.I,h=e.O,k=e.L,V=e.o,x=e.a4},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"breadcrumb"},w=j("hr",null,null,-1);e("default",i({__name:"Form",setup(e){const{Global:i}=g(),q=p(!1),$=y({name:"",remark:"",tag:[]}),U=y({tag:[{required:!0,message:"请选择标签",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{validator:(e,l,a)=>{if(l){if(!l.match(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/))return a(new Error("只能输入中文、英文字母、数字和下划线"));a()}else a(new Error("请输入名称"))},trigger:"blur"}]}),z=p(null),E=()=>{z.value.validate((async e=>{if(e&&e){q.value=!0;const{name:e,tag:l,remark:a}=$,u={name:e,tag:l.join(","),remark:a};d(u).then((()=>{i.$message({type:"success",message:"提交成功"})})).catch((e=>{i.$message({type:"error",message:`提交失败，原因：${e.message}`})})).finally((()=>{q.value=!1}))}}))};return(e,d)=>{const g=s,i=a,p=t,y=n,R=m,A=o,C=c,D=u,F=r;return V(),f(k,null,[j("div",l,[v(i,{separator:">"},{default:b((()=>[v(g,null,{default:b((()=>[x("表单")])),_:1})])),_:1})]),w,_((V(),h(D,{ref_key:"formRef",ref:z,model:$,"label-width":"120px",rules:U},{default:b((()=>[v(y,{label:"名字",prop:"name"},{default:b((()=>[v(p,{modelValue:$.name,"onUpdate:modelValue":d[0]||(d[0]=e=>$.name=e),modelModifiers:{trim:!0},style:{width:"215px"}},null,8,["modelValue"])])),_:1}),v(y,{label:"标签",prop:"tag"},{default:b((()=>[v(A,{modelValue:$.tag,"onUpdate:modelValue":d[1]||(d[1]=e=>$.tag=e),"collapse-tags":"",multiple:"",filterable:"",placeholder:"请选择"},{default:b((()=>[v(R,{label:"作业",value:"job"}),v(R,{label:"任务",value:"task"}),v(R,{label:"进程",value:"process"})])),_:1},8,["modelValue"])])),_:1}),v(y,{label:"备注",prop:"remark"},{default:b((()=>[v(p,{modelValue:$.remark,"onUpdate:modelValue":d[2]||(d[2]=e=>$.remark=e),type:"textarea",style:{width:"215px"}},null,8,["modelValue"])])),_:1}),v(y,null,{default:b((()=>[v(C,{type:"primary",onClick:E},{default:b((()=>[x("确认")])),_:1}),v(C,null,{default:b((()=>[x("取消")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[F,q.value]])],64)}}}))}}}));