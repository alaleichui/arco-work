import{a3 as b,d as g,a9 as f,l as v,e as D,r as c,o as _,g as y,j as d,m as n,h as m,c as C,V as E,q as h,P as $,O as k}from"./vendor.98fdfd48.js";import{_ as F,t as B}from"./index.353524b8.js";const j=Object.keys(b).slice(0,100),x=g({name:"CardDraggable",components:{draggable:f},setup(){const a=[...j],e=v([]),i=!1,r=["#e54d42","#f37b1d","#fbbd08","#8dc63f","#39b54a","#1cbbb4","#0081ff","#6739b6","#9c26b0","#e03997","#a5673f","#8799a3"],l=()=>r[Math.floor(Math.random()*r.length)],u=()=>{e.length=0,e.push(...a.map((t,o)=>({label:`\u7B2C ${o+1} \u4E2A\u5143\u7D20`,id:B(t),color:l()})))};return D(()=>{e.push(...a.map((t,o)=>({label:`\u7B2C ${o+1} \u4E2A\u5143\u7D20`,id:t,color:l()})))}),{drag:i,list:e,resetElements:u}}}),A={class:"main-container"},V=k("\u91CD\u7F6E\u5143\u7D20\u4F4D\u7F6E"),I={class:"card-item"},M={class:"label"};function N(a,e,i,r,l,u){const t=c("a-button"),o=c("draggable"),p=c("a-card");return _(),y("div",A,[d(p,{title:"\u62D6\u52A8\u66F4\u6362\u56FE\u6807\u4F4D\u7F6E"},{extra:n(()=>[d(t,{size:"small",type:"primary",onClick:a.resetElements},{default:n(()=>[V]),_:1},8,["onClick"])]),default:n(()=>[d(o,{list:a.list,animation:"500",onStart:e[0]||(e[0]=s=>a.drag=!0),onEnd:e[1]||(e[1]=s=>a.drag=!1),"item-key":"id",tag:"ul"},{item:n(({element:s})=>[m("li",I,[(_(),C(h(s.id),{class:"icon",style:E({color:s.color})},null,8,["style"])),m("div",M,$(s.label),1)])]),_:1},8,["list"])]),_:1})])}var O=F(x,[["render",N],["__scopeId","data-v-00aea0ec"]]);export{O as default};
