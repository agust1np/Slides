import{d,i as _,a as p,u,b as h,c as m,e as f,f as r,g as t,t as a,h as n,F as g,r as v,n as x,j as y,o as l,k as b,l as k,m as N,p as S,q as w,_ as P}from"./index-be21ed29.js";import{N as V}from"./NoteDisplay-938cf3c1.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.map(o=>{var s;return(s=o.meta)==null?void 0:s.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,s)=>(l(),r("div",{id:"page-root",style:x(n(w))},[t("div",j,[t("div",L,[t("h1",T,a(n(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(l(!0),r(g,null,v(n(i),(e,c)=>(l(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(n(b)),1),k(" "+a(e==null?void 0:e.title)+" ",1),s[0]||(s[0]=t("div",{class:"flex-auto"},null,-1))])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<n(i).length-1?(l(),r("hr",z)):S("v-if",!0)]))),128))])],4))}}),E=P(F,[["__file","/home/runner/work/Slides/Slides/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
