import{d as C,a as o,r as n,o as i,g as u,j as t,m as e,h as T,k as p,P as k,O as m}from"./vendor.98fdfd48.js";import{_ as B}from"./index.353524b8.js";const E={class:"main-container"},V={class:"flex"},j=m("\u83B7\u53D6HTML"),H=m("\u83B7\u53D6JSON"),N=["innerHTML"],b={key:1,class:"p-4 mt-4 priview-content"},w=C({setup(A){const a=o(),c=o(""),s=o(""),l=o("");function v(){s.value=a.value.getHtmlContent()}function f(){l.value=a.value.getJsonContent()}return(D,d)=>{const h=n("a-input"),_=n("a-card"),r=n("a-button"),x=n("a-space"),y=n("RichTextEditor");return i(),u("div",E,[t(_,{title:"\u6587\u7AE0\u6807\u9898","content-style":{padding:"10px"},"header-style":{padding:"5px"}},{default:e(()=>[t(h,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=g=>c.value=g),class:"title-input",placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898"},null,8,["modelValue"])]),_:1}),t(_,{title:"\u6587\u7AE0\u5185\u5BB9","body-style":{padding:"10px"},class:"mt-4"},{extra:e(()=>[T("div",V,[t(x,{justify:"end"},{default:e(()=>[t(r,{type:"primary",size:"small",onClick:v},{default:e(()=>[j]),_:1}),t(r,{status:"warning",size:"small",onClick:f},{default:e(()=>[H]),_:1})]),_:1})])]),default:e(()=>[t(y,{ref_key:"richTextEditor",ref:a,height:400},null,512)]),_:1}),s.value?(i(),u("div",{key:0,class:"p-4 mt-4 priview-content",innerHTML:s.value},null,8,N)):p("v-if",!0),l.value?(i(),u("div",b,k(l.value),1)):p("v-if",!0)])}}});var M=B(w,[["__scopeId","data-v-19c17776"]]);export{M as default};
