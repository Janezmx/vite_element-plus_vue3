System.register(["./element-plus-legacy-fbce1e01.js","./list-legacy-d7ad3458.js","./@vue-legacy-86e110d2.js","./dayjs-legacy-ce81683a.js","./@vueuse-legacy-7f1c55c2.js","./@ctrl-legacy-b33c6eb8.js","./lodash-es-legacy-826bf264.js","./async-validator-legacy-97cc394a.js","./@popperjs-legacy-dac8ae6b.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-5bb9c60d.js","./index-legacy-8a7ee15c.js","./pinia-legacy-6a6f5459.js","./vue-demi-legacy-97cfbb01.js","./@element-plus-legacy-28ceac2d.js","./vue-router-legacy-d46b5a2d.js","./axios-legacy-e74dd017.js","./pinia-plugin-persistedstate-legacy-6b1a5922.js","./moment-legacy-0c23ee07.js"],(function(e,l){"use strict";var a,u,r,t,s,n,o,m,c,d,i,g,p,y,f,j,v,b,_,h,k,V,x;return{setters:[e=>{a=e.l,u=e.m,r=e.v,t=e.g,s=e.n,n=e.o,o=e.p,m=e.q,c=e.r,d=e.k},e=>{i=e.s},e=>{g=e.D,p=e.r,y=e.W,f=e.c,j=e.a,v=e.R,b=e.P,_=e.I,h=e.O,k=e.L,V=e.o,x=e.a4},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"breadcrumb"},w=j("hr",null,null,-1);e("default",g({__name:"Form",setup(e){const g=p(!1),q=y({name:"",remark:"",tag:[]}),U=y({tag:[{required:!0,message:"请选择标签",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{validator:(e,l,a)=>{if(l){if(!l.match(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/))return a(new Error("只能输入中文、英文字母、数字和下划线"));a()}else a(new Error("请输入名称"))},trigger:"blur"}]}),z=p(null),E=()=>{z.value.validate((async e=>{if(e&&e){g.value=!0;const{name:e,tag:l,remark:a}=q,u={name:e,tag:l.join(","),remark:a};i(u).then((()=>{t.success("提交成功")})).catch((e=>{t.error(`提交失败，原因：${e.message}`)})).finally((()=>{g.value=!1}))}}))};return(e,t)=>{const i=s,p=a,y=n,R=o,$=m,A=c,C=d,D=u,F=r;return V(),f(k,null,[j("div",l,[v(p,{separator:">"},{default:b((()=>[v(i,null,{default:b((()=>[x("表单")])),_:1})])),_:1})]),w,_((V(),h(D,{ref_key:"formRef",ref:z,model:q,"label-width":"120px",rules:U},{default:b((()=>[v(R,{label:"名字",prop:"name"},{default:b((()=>[v(y,{modelValue:q.name,"onUpdate:modelValue":t[0]||(t[0]=e=>q.name=e),modelModifiers:{trim:!0},style:{width:"215px"}},null,8,["modelValue"])])),_:1}),v(R,{label:"标签",prop:"tag"},{default:b((()=>[v(A,{modelValue:q.tag,"onUpdate:modelValue":t[1]||(t[1]=e=>q.tag=e),"collapse-tags":"",multiple:"",filterable:"",placeholder:"请选择"},{default:b((()=>[v($,{label:"作业",value:"job"}),v($,{label:"任务",value:"task"}),v($,{label:"进程",value:"process"})])),_:1},8,["modelValue"])])),_:1}),v(R,{label:"备注",prop:"remark"},{default:b((()=>[v(y,{modelValue:q.remark,"onUpdate:modelValue":t[2]||(t[2]=e=>q.remark=e),type:"textarea",style:{width:"215px"}},null,8,["modelValue"])])),_:1}),v(R,null,{default:b((()=>[v(C,{type:"primary",onClick:E},{default:b((()=>[x("确认")])),_:1}),v(C,null,{default:b((()=>[x("取消")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[F,g.value]])],64)}}}))}}}));