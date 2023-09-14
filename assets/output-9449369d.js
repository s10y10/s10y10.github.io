import{I as x,a as m,J as s,U as g,W as b,X as y}from"./vendor-bb1848df.js";import{B as j}from"./antd-cc4a4e1e.js";import{c as k}from"./collect-80fd318e.js";const E="modulepreload",O=function(t){return"/"+t},p={},l=function(n,e,i){if(!e||e.length===0)return n();const d=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=O(r),r in p)return;p[r]=!0;const c=r.endsWith(".css"),_=c?'[rel="stylesheet"]':"";if(!!i)for(let a=d.length-1;a>=0;a--){const u=d[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const o=document.createElement("link");if(o.rel=c?"stylesheet":E,c||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),c)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},w=x.div``,h=Object.assign({"/src/mdx/Output/1.mdx":()=>l(()=>import("./1-1901939a.js"),["assets/1-1901939a.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/1.mdx":()=>l(()=>import("./1-82a328c7.js"),["assets/1-82a328c7.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/2.mdx":()=>l(()=>import("./2-6ddfb309.js"),["assets/2-6ddfb309.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/3.mdx":()=>l(()=>import("./3-a4287750.js"),["assets/3-a4287750.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/4.mdx":()=>l(()=>import("./4-5b557573.js"),["assets/4-5b557573.js","assets/vendor-bb1848df.js"])}),v={};for(const t in h)v[t]=m.lazy(h[t]);function S({view:t,mdxId:n}){const e=`/src/mdx/${t}/${n}.mdx`,i=v[e];return s.jsx(w,{children:s.jsx(m.Suspense,{fallback:s.jsx(s.Fragment,{}),children:i?s.jsx(i,{}):s.jsxs("div",{children:["这个页面还没写好呐",t,"-",n]})})})}const L=()=>{const t=g(),[n]=b(),e=n.get("id"),[i,d]=m.useState(e);return m.useEffect(()=>{d(e)},[e]),{navigvate:t,mdxId:i}};function C({items:t}){return s.jsx(j,{items:t})}const D=x.div`
  position: relative;
  .body {
    height: ${k};
    padding: 18px 200px;
  }
`,P=x.div`
  height: 100%;
  overflow: auto;
  .item {
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 12px;
    padding-bottom: 4px;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1));
    }
    .title {
      font-weight: bold;
    }
    .desc {
      margin-top: 2px;
      color: #555;
    }
  }
`,R=x.div`
  height: 100%;
  overflow: auto;
  .ant-breadcrumb {
    margin-bottom: 18px;
  }
`;function I({config:t}){const n=t.key,e=[{title:s.jsx(y,{to:"/output",children:"返回列表"}),key:"back"}];return e.push({title:t.label}),s.jsxs(R,{children:[s.jsx(C,{items:e}),s.jsx(S,{view:"Output",mdxId:n})]})}function V({navigvate:t,configData:n}){return s.jsx(P,{children:n.map(e=>s.jsxs("div",{className:"item",onClick:()=>{t(`/output?id=${e.key}`)},children:[s.jsx("div",{className:"title",children:e.label}),s.jsx("div",{className:"desc",children:e.desc})]},e.key))})}const f=[{key:"1",label:"网站框架图",desc:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍"},{key:"2",label:"网站框架图",desc:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍"},{key:"3",label:"网站框架图",desc:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍"}];function T(){const{navigvate:t,mdxId:n}=L(),e=f.find(i=>i.key==n);return s.jsx(D,{children:s.jsx("div",{className:"body",children:n?s.jsx(I,{config:e}):s.jsx(V,{navigvate:t,configData:f})})})}const A=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{S as M,l as _,A as i,L as u};
