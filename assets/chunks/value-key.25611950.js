import{h as O,k as v,r as u,o,g as h,w as d,c,j as f,F as b,a as i,f as j,d as k,ay as C,b as y,z as $,t as x,l as M}from"../app.e6cee091.js";const U=O({__name:"allow-create",setup(V){const l=v([]),t=[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),h(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"Choose tags for your article",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const T=O({__name:"basic-usage",setup(V){const l=v(""),t=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),c(b,null,[i(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),class:"m-2",placeholder:"Select",size:"large",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),i(_,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),class:"m-2",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),i(_,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value=e),class:"m-2",placeholder:"Select",size:"small",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])],64)}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const N=O({__name:"clearable",setup(V){const l=v(""),t=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),h(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),clearable:"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var ge=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const P=k(" Add an option "),A=k(" confirm "),B=k("cancel"),F=O({__name:"custom-footer",setup(V){const l=v(!1),t=v([]),s=v(""),a=v([{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}]),n=()=>{l.value=!0},_=()=>{s.value&&(a.value.push({label:s.value,value:s.value}),e())},e=()=>{s.value="",l.value=!1};return(p,g)=>{const r=u("el-option"),m=u("el-button"),w=u("el-input"),z=u("el-select");return o(),h(z,{modelValue:t.value,"onUpdate:modelValue":g[1]||(g[1]=S=>t.value=S),placeholder:"Select",style:{width:"240px"}},{footer:d(()=>[l.value?(o(),c(b,{key:1},[i(w,{modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=S=>s.value=S),class:"option-input",placeholder:"input option name",size:"small"},null,8,["modelValue"]),i(m,{type:"primary",size:"small",onClick:_},{default:d(()=>[A]),_:1}),i(m,{size:"small",onClick:e},{default:d(()=>[B]),_:1})],64)):(o(),h(m,{key:0,text:"",bg:"",size:"small",onClick:n},{default:d(()=>[P]),_:1}))]),default:d(()=>[(o(!0),c(b,null,f(a.value,S=>(o(),h(r,{key:S.value,label:S.label,value:S.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var G=j(F,[["__scopeId","data-v-f4260ed4"]]),he=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const D=k(" All "),I=O({__name:"custom-header",setup(V){const l=v(!1),t=v(!1),s=v([]),a=v([{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}]);C(s,_=>{_.length===0?(l.value=!1,t.value=!1):_.length===a.value.length?(l.value=!0,t.value=!1):t.value=!0});const n=_=>{t.value=!1,_?s.value=a.value.map(e=>e.value):s.value=[]};return(_,e)=>{const p=u("el-checkbox"),g=u("el-option"),r=u("el-select");return o(),h(r,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=m=>s.value=m),multiple:"",clearable:"","collapse-tags":"",placeholder:"Select","popper-class":"custom-header","max-collapse-tags":1,style:{width:"240px"}},{header:d(()=>[i(p,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=m=>l.value=m),indeterminate:t.value,onChange:n},{default:d(()=>[D]),_:1},8,["modelValue","indeterminate"])]),default:d(()=>[(o(!0),c(b,null,f(a.value,m=>(o(),h(g,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const L={class:"flex items-center"},E=O({__name:"custom-tag",setup(V){const l=v([]),t=[{value:"#E63415",label:"red"},{value:"#FF6600",label:"orange"},{value:"#FFDE0A",label:"yellow"},{value:"#1EC79D",label:"green"},{value:"#14CCCC",label:"cyan"},{value:"#4167F0",label:"blue"},{value:"#6222C9",label:"purple"}];return t.forEach(s=>{l.value.push(s.value)}),(s,a)=>{const n=u("el-tag"),_=u("el-option"),e=u("el-select");return o(),h(e,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=p=>l.value=p),multiple:"",placeholder:"Select",style:{width:"240px"}},{tag:d(()=>[(o(!0),c(b,null,f(l.value,p=>(o(),h(n,{key:p.value,color:p},null,8,["color"]))),128))]),default:d(()=>[(o(),c(b,null,f(t,p=>i(_,{key:p.value,label:p.label,value:p.value},{default:d(()=>[y("div",L,[i(n,{color:p.value,style:{"margin-right":"8px"},size:"small"},null,8,["color"]),y("span",{style:$({color:p.value})},x(p.label),5)])]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])}}});var H=j(E,[["__scopeId","data-v-19fcb33a"]]),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const W={style:{float:"left"}},J={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},K=O({__name:"custom-template",setup(V){const l=v(""),t=[{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),h(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},{default:d(()=>[y("span",W,x(e.label),1),y("span",J,x(e.value),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])}}});var Ve=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const R=O({__name:"disabled-option",setup(V){const l=v(""),t=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2",disabled:!0},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),h(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])}}});var Se=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const Y=O({__name:"disabled",setup(V){const l=v(""),t=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),h(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),disabled:"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var xe=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const Q=O({__name:"filterable",setup(V){const l=v(""),t=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),h(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),filterable:"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,e=>i(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}});var ke=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));const X=O({__name:"grouping",setup(V){const l=v(""),t=[{label:"Popular cities",options:[{value:"Shanghai",label:"Shanghai"},{value:"Beijing",label:"Beijing"}]},{label:"City name",options:[{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"},{value:"Dalian",label:"Dalian"}]}];return(s,a)=>{const n=u("el-option"),_=u("el-option-group"),e=u("el-select");return o(),h(e,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=p=>l.value=p),placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(t,p=>i(_,{key:p.label,label:p.label},{default:d(()=>[(o(!0),c(b,null,f(p.options,g=>(o(),h(n,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])}}});var je=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const Z={class:"m-4"},q=y("p",null,"default",-1),ee={class:"m-4"},le=y("p",null,"use collapse-tags",-1),ae={class:"m-4"},oe=y("p",null,"use collapse-tags-tooltip",-1),te={class:"m-4"},ne=y("p",null,"use max-collapse-tags",-1),ue=O({__name:"multiple",setup(V){const l=v([]),t=v([]),s=v([]),a=v([]),n=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}];return(_,e)=>{const p=u("el-option"),g=u("el-select");return o(),c(b,null,[y("div",Z,[q,i(g,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=r=>l.value=r),multiple:"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(n,r=>i(p,{key:r.value,label:r.label,value:r.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),y("div",ee,[le,i(g,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value=r),multiple:"","collapse-tags":"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(n,r=>i(p,{key:r.value,label:r.label,value:r.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),y("div",ae,[oe,i(g,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=r=>s.value=r),multiple:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(n,r=>i(p,{key:r.value,label:r.label,value:r.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),y("div",te,[ne,i(g,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=r=>a.value=r),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(),c(b,null,f(n,r=>i(p,{key:r.value,label:r.label,value:r.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])],64)}}});var we=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const se={class:"flex flex-wrap"},_e={class:"m-4"},pe=y("p",null,"default",-1),re={class:"m-4"},ie=y("p",null,"use remote-show-suffix",-1),de=O({__name:"remote-search",setup(V){const l=v([]),t=v([]),s=v([]),a=v(!1);M(()=>{l.value=_.map(e=>({value:`value:${e}`,label:`label:${e}`}))});const n=e=>{e?(a.value=!0,setTimeout(()=>{a.value=!1,t.value=l.value.filter(p=>p.label.toLowerCase().includes(e.toLowerCase()))},200)):t.value=[]},_=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(e,p)=>{const g=u("el-option"),r=u("el-select");return o(),c("div",se,[y("div",_e,[pe,i(r,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=m=>s.value=m),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":n,loading:a.value,style:{width:"240px"}},{default:d(()=>[(o(!0),c(b,null,f(t.value,m=>(o(),h(g,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),y("div",re,[ie,i(r,{modelValue:s.value,"onUpdate:modelValue":p[1]||(p[1]=m=>s.value=m),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-show-suffix":"","remote-method":n,loading:a.value,style:{width:"240px"}},{default:d(()=>[(o(!0),c(b,null,f(t.value,m=>(o(),h(g,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])])])}}});var ze=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const ce={class:"m-4"},ve=O({__name:"value-key",setup(V){const l=v(),t=v([{id:1,label:"Option A",desc:"Option A - 230506"},{id:2,label:"Option B",desc:"Option B - 230506"},{id:3,label:"Option C",desc:"Option C - 230506"},{id:4,label:"Option A",desc:"Option A - 230507"}]);return(s,a)=>{const n=u("el-option"),_=u("el-select");return o(),c("div",ce,[i(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),"value-key":"id",placeholder:"Select",style:{width:"240px"}},{default:d(()=>[(o(!0),c(b,null,f(t.value,e=>(o(),h(n,{key:e.id,label:e.label,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),y("p",null," selected option's description: "+x(l.value?l.value.desc:"no select"),1)])}}});var Ce=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));export{me as _,fe as a,ge as b,he as c,ye as d,Oe as e,Ve as f,Se as g,xe as h,ke as i,je as j,we as k,ze as l,Ce as m};
