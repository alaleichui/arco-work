import{u as n}from"./useEcharts.bf7789c0.js";import{d as r,a,e as i,a5 as p,o as c,g as d}from"./vendor.98fdfd48.js";import{_ as f}from"./index.353524b8.js";const u=r({name:"LineChart",props:{id:{type:Number,default:0},options:{type:Object,default:()=>({})}},setup(o){const e=a(null);return i(()=>{const s=p(o,"options"),t=n(e.value);t.setOption(s.value),t.resize()}),{eChartContainer:e}}}),l={ref:"eChartContainer",style:{height:"180px",width:"100%"}};function h(o,e,s,t,m,_){return c(),d("div",l,null,512)}var b=f(u,[["render",h]]);export{b as default};
