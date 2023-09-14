import{a as s,Y as f,J as e,I as u,Z as a,$ as m,a0 as h,a1 as x,a2 as _}from"./vendor-bb1848df.js";import{_ as c}from"./output-57ef8c9c.js";import{R as o,f as j,h as g}from"./collect-80fd318e.js";import{a as v}from"./game-c369a954.js";import"./antd-cc4a4e1e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function p(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(t){if(t.ep)return;t.ep=!0;const i=p(t);fetch(t.href,i)}})();const b=s.lazy(()=>c(()=>import("./study-174aa743.js"),["assets/study-174aa743.js","assets/vendor-bb1848df.js","assets/output-57ef8c9c.js","assets/antd-cc4a4e1e.js","assets/collect-80fd318e.js","assets/game-c369a954.js"])),y=s.lazy(()=>c(()=>import("./output-57ef8c9c.js").then(r=>r.i),["assets/output-57ef8c9c.js","assets/vendor-bb1848df.js","assets/antd-cc4a4e1e.js","assets/collect-80fd318e.js"])),E=s.lazy(()=>c(()=>import("./game-c369a954.js").then(r=>r.i),["assets/game-c369a954.js","assets/vendor-bb1848df.js","assets/collect-80fd318e.js","assets/antd-cc4a4e1e.js"])),O=s.lazy(()=>c(()=>import("./collect-80fd318e.js").then(r=>r.i),["assets/collect-80fd318e.js","assets/vendor-bb1848df.js","assets/antd-cc4a4e1e.js"])),L=s.lazy(()=>c(()=>import("./main-75f21acd.js"),["assets/main-75f21acd.js","assets/vendor-bb1848df.js","assets/collect-80fd318e.js","assets/antd-cc4a4e1e.js"])),T=[{path:"/",element:e.jsx(L,{})},{path:o.STUDY,element:e.jsx(b,{})},{path:o.COLLECT,element:e.jsx(O,{})},{path:o.OUTPUT,element:e.jsx(y,{})},{path:o.GAME,element:e.jsx(E,{})}];function z(){return f(T)}const A=u.div`
  display: flex;
  width: 100%;
  height: ${j};
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  .container {
    background: #abfff3;
    padding: 3px 6px;
    border-radius: 5px;
    font-size: 14px;
  }
`;function P(){return s.useEffect(()=>{v("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js")},[]),e.jsxs(A,{children:[e.jsxs("span",{className:"container",id:"busuanzi_container_site_pv",children:["本站总访问量",e.jsx("span",{id:"busuanzi_value_site_pv"}),"次"]}),e.jsxs("span",{className:"container",id:"busuanzi_container_site_uv",children:["本站总访客数",e.jsx("span",{id:"busuanzi_value_site_uv"}),"次"]})]})}const R=u.div`
  display: flex;
  width: 100%;
  height: ${g};
  align-items: center;
  padding: 0 40px;
  background-color: #000000;
  .avatar {
    border-radius: 50%;
    width: 60px;
  }
  .router-links {
    margin-left: 20px;
    a {
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      position: relative;
      margin-left: 20px;
      &.active::after {
        content: '';
        height: 2px;
        background-color: #ffffff;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -4px;
      }
    }
  }
`;function N(){return e.jsxs(R,{children:[e.jsx("img",{className:"avatar",src:"avatar.jpg"}),e.jsxs("div",{className:"router-links",children:[e.jsx(a,{to:o.MAIN,children:"首页"}),e.jsx(a,{to:o.STUDY,children:"努力学习"}),e.jsx(a,{to:o.COLLECT,children:"日常收集"}),e.jsx(a,{to:o.OUTPUT,children:"持续输出"}),e.jsx(a,{to:o.GAME,children:"今日运势"})]})]})}function I(){const n=m().pathname===o.MAIN;return e.jsxs(e.Fragment,{children:[!n&&e.jsx(N,{}),e.jsx(s.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(z,{})}),e.jsx(P,{})]})}h({color:"#54aac9"});x.createRoot(document.getElementById("root")).render(e.jsx(_,{children:e.jsx(I,{})}));
