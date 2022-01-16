import{ay as L,d as A,r as O,o as D,g as B,j as M,m as j,h as S,O as w}from"./vendor.98fdfd48.js";import{_ as U,l as C}from"./index.353524b8.js";var x={exports:{}};(function(g,P){(function(f,n){g.exports=n()})(window,function(){return function(b){var f={};function n(o){if(f[o])return f[o].exports;var a=f[o]={i:o,l:!1,exports:{}};return b[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=b,n.c=f,n.d=function(o,a,d){n.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:d})},n.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,a){if(a&1&&(o=n(o)),a&8||a&4&&typeof o=="object"&&o&&o.__esModule)return o;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:o}),a&2&&typeof o!="string")for(var y in o)n.d(d,y,function(i){return o[i]}.bind(null,y));return d},n.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(a,"a",a),a},n.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},n.p="",n(n.s=0)}({"./src/index.js":function(b,f,n){n.r(f),n("./src/sass/index.scss");var o=n("./src/js/init.js"),a=o.default.init;typeof window!="undefined"&&(window.printJS=a),f.default=a},"./src/js/browser.js":function(b,f,n){n.r(f);var o={isFirefox:function(){return typeof InstallTrigger!="undefined"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};f.default=o},"./src/js/functions.js":function(b,f,n){n.r(f),n.d(f,"addWrapper",function(){return y}),n.d(f,"capitalizePrint",function(){return i}),n.d(f,"collectStyles",function(){return l}),n.d(f,"addHeader",function(){return e}),n.d(f,"cleanUp",function(){return u}),n.d(f,"isRawHTML",function(){return p});var o=n("./src/js/modal.js"),a=n("./src/js/browser.js");function d(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(c){return typeof c}:d=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d(t)}function y(t,s){var c="font-family:"+s.font+" !important; font-size: "+s.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,s){for(var c=document.defaultView||window,h="",m=c.getComputedStyle(t,""),E=0;E<m.length;E++)(s.targetStyles.indexOf("*")!==-1||s.targetStyle.indexOf(m[E])!==-1||r(s.targetStyles,m[E]))&&m.getPropertyValue(m[E])&&(h+=m[E]+":"+m.getPropertyValue(m[E])+";");return h+="max-width: "+s.maxWidth+"px !important; font-size: "+s.font_size+" !important;",h}function r(t,s){for(var c=0;c<t.length;c++)if(d(s)==="object"&&s.indexOf(t[c])!==-1)return!0;return!1}function e(t,s){var c=document.createElement("div");if(p(s.header))c.innerHTML=s.header;else{var h=document.createElement("h1"),m=document.createTextNode(s.header);h.appendChild(m),h.setAttribute("style",s.headerStyle),c.appendChild(h)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&o.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var s="mouseover";(a.default.isChrome()||a.default.isFirefox())&&(s="focus");var c=function h(){window.removeEventListener(s,h),t.onPrintDialogClose();var m=document.getElementById(t.frameId);m&&m.remove()};window.addEventListener(s,c)}function p(t){var s=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return s.test(t)}},"./src/js/html.js":function(b,f,n){n.r(f);var o=n("./src/js/functions.js"),a=n("./src/js/print.js");function d(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(e){return typeof e}:d=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(l)}f.default={print:function(r,e){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=y(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),a.default.send(r,e)}};function y(l,r){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),p=0;p<u.length;p++)if(r.ignoreElements.indexOf(u[p].id)===-1){var t=y(u[p],r);e.appendChild(t)}switch(r.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return d(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(b,f,n){n.r(f);var o=n("./src/js/functions.js"),a=n("./src/js/print.js"),d=n("./src/js/browser.js");f.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=r,d.default.isFirefox()){var u=e.src;e.src=u}var p=document.createElement("div");p.appendChild(e),i.printableElement.appendChild(p)}),i.header&&Object(o.addHeader)(i.printableElement,i),a.default.send(i,l)}}},"./src/js/init.js":function(b,f,n){n.r(f);var o=n("./src/js/browser.js"),a=n("./src/js/modal.js"),d=n("./src/js/pdf.js"),y=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function e(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(s){return typeof s}:e=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e(p)}var u=["pdf","html","image","json","raw-html"];f.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(T){throw T},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},s=arguments[0];if(s===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(s)){case"string":t.printable=encodeURI(s),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=s.printable,t.fallbackPrintable=typeof s.fallbackPrintable!="undefined"?s.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof s[c]!="undefined"?s[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(s))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&a.default.show(t),t.onLoadingStart&&t.onLoadingStart();var h=document.getElementById(t.frameId);h&&h.parentNode.removeChild(h);var m=document.createElement("iframe");switch(o.default.isFirefox()?m.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):m.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),m.setAttribute("id",t.frameId),t.type!=="pdf"&&(m.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(v){m.srcdoc+='<link rel="stylesheet" href="'+v+'">'})),m.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var E=window.open(t.fallbackPrintable,"_blank");E.focus(),t.onIncompatibleBrowser()}catch(v){t.onError(v)}finally{t.showModal&&a.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else d.default.print(t,m);break;case"image":l.default.print(t,m);break;case"html":y.default.print(t,m);break;case"raw-html":i.default.print(t,m);break;case"json":r.default.print(t,m);break}}}},"./src/js/json.js":function(b,f,n){n.r(f);var o=n("./src/js/functions.js"),a=n("./src/js/print.js");function d(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(r){return typeof r}:d=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},d(i)}f.default={print:function(l,r){if(d(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:d(e)==="object"?e.field:e,displayName:d(e)==="object"?e.displayName:e,columnSize:d(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=y(l),a.default.send(l,r)}};function y(i){var l=i.printable,r=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<r.length;u++)e+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var p=0;p<l.length;p++){e+="<tr>";for(var t=0;t<r.length;t++){var s=l[p],c=r[t].field.split(".");if(c.length>1)for(var h=0;h<c.length;h++)s=s[c[h]];else s=s[r[t].field];e+='<td style="width:'+r[t].columnSize+i.gridStyle+'">'+s+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(b,f,n){n.r(f);var o={show:function(d){var y="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",y),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(d.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};f.default=o},"./src/js/pdf.js":function(b,f,n){n.r(f);var o=n("./src/js/print.js"),a=n("./src/js/functions.js");f.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});d(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(a.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(a.cleanUp)(i),i.onError(e.statusText,e);return}d(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function d(y,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(y,i)}},"./src/js/print.js":function(b,f,n){n.r(f);var o=n("./src/js/browser.js"),a=n("./src/js/functions.js"),d={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var p=document.getElementById(e.frameId);p.onload=function(){if(e.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return y(p,e)},1e3):y(p,e);return}var t=p.contentWindow||p.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var s=document.createElement("style");s.innerHTML=e.style,t.head.appendChild(s)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return y(p,e)}):y(p,e)}}};function y(r,e){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){e.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(a.cleanUp)(e)}}function i(r){var e=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(r){return new Promise(function(e){var u=function p(){!r||typeof r.naturalWidth=="undefined"||r.naturalWidth===0||!r.complete?setTimeout(p,500):e()};u()})}f.default=d},"./src/js/raw-html.js":function(b,f,n){n.r(f);var o=n("./src/js/print.js");f.default={print:function(d,y){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,o.default.send(d,y)}}},"./src/sass/index.scss":function(b,f,n){},0:function(b,f,n){b.exports=n("./src/index.js")}}).default})})(x);var I=L(x.exports);const W=A({name:"Print",setup(){function g(){I({printable:C,type:"image",showModal:!1})}function P(){I({printable:"htmlWrapper",type:"html",targetStyles:["*"]})}return{printImage:g,printHtml:P,imagePath:C,dataList:[{name:"\u5F20\u4E09",age:10,gender:"\u7537"},{name:"\u674E\u56DB",age:40,gender:"\u7537"},{name:"\u738B\u4E94",age:30,gender:"\u5973"}],columns:[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u59D3\u522B",dataIndex:"gender"}]}}}),R={class:"main-container"},H=w("\u6253\u5370"),_={class:"image-wrapper"},N=["src"],K=w("\u6253\u5370"),z={id:"htmlWrapper"};function F(g,P,b,f,n,o){const a=O("a-button"),d=O("a-card"),y=O("a-table");return D(),B("div",R,[M(d,{title:"\u6253\u5370\u56FE\u7247","header-style":{padding:"5px"},"content-style":{padding:"0px"}},{extra:j(()=>[M(a,{type:"primary",size:"small",onClick:g.printImage},{default:j(()=>[H]),_:1},8,["onClick"])]),default:j(()=>[S("div",_,[S("img",{src:g.imagePath},null,8,N)])]),_:1}),M(d,{title:"\u6253\u5370HTML","header-style":{padding:"5px"},"content-style":{padding:"0px"},class:"mt-4"},{extra:j(()=>[M(a,{type:"primary",size:"small",onClick:g.printHtml},{default:j(()=>[K]),_:1},8,["onClick"])]),default:j(()=>[S("div",z,[M(y,{data:g.dataList,columns:g.columns,pagination:!1},null,8,["data","columns"])])]),_:1})])}var $=U(W,[["render",F],["__scopeId","data-v-434ca3c4"]]);export{$ as default};
