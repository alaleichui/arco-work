import{d as v,a as y,a4 as F,l as h,r,o as u,c as d,m as l,j as C,g,N as D,h as i,q as k,P as E,F as A,a3 as $,M as p,O as b}from"./vendor.98fdfd48.js";import{_ as j}from"./index.353524b8.js";const B=v({name:"Icons",setup(){const s=y(!1),n=Object.keys($),{copy:f,isSupported:m}=F(),x=e=>{if(!m){p.error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6B64\u529F\u80FD");return}f(a(e)).then(()=>{p.success(`<${e}/> \u590D\u5236\u6210\u529F`)})};let c=0;const t=50,o=h([]);o.push(...n.slice(c,t));function _(){if(o.length>=n.length){p.success("\u6CA1\u6709\u66F4\u591A\u4E86");return}c++,o.push(...n.slice(c*t,c*t+t))}function a(e){return`<${e}/>`}return{loading:s,iconArray:n,tempIcon:o,onCopy:x,onLoadMore:_,getCopyContent:a}}}),I={class:"flex flex-col items-center justify-center icon-wrapper"},w={class:"mt-2 text-xs text-center"},M=["onClick"],N={class:"text-center"},L=b("\u52A0\u8F7D\u66F4\u591A");function V(s,n,f,m,x,c){const t=r("a-col"),o=r("a-row"),_=r("a-button"),a=r("a-card");return u(),d(a,{title:"\u9F20\u6807\u653E\u4E0A\uFF0C\u53EF\u4EE5\u590D\u5236"},{default:l(()=>[C(o,{cols:"",class:"icon-parent",responsive:"screen"},{default:l(()=>[(u(!0),g(A,null,D(s.tempIcon,e=>(u(),d(t,{xs:6,sm:6,md:4,lg:4,xl:3,key:e},{default:l(()=>[i("div",I,[(u(),d(k(e),{style:{"font-size":"22px"}})),i("div",w,E(e),1),i("div",{class:"text-center copy",onClick:z=>s.onCopy(e)}," \u590D\u5236 ",8,M)])]),_:2},1024))),128))]),_:1}),i("div",N,[C(_,{type:"text",onClick:s.onLoadMore},{default:l(()=>[L]),_:1},8,["onClick"])])]),_:1})}var q=j(B,[["render",V],["__scopeId","data-v-2775ad00"]]);export{q as default};
