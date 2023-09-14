import{I as x,a as m,J as s,U as b,W as y,X as g}from"./vendor-bb1848df.js";import{B as E}from"./antd-cc4a4e1e.js";import{c as S}from"./collect-80fd318e.js";const j="modulepreload",O=function(e){return"/"+e},p={},i=function(r,t,o){if(!t||t.length===0)return r();const l=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=O(n),n in p)return;p[n]=!0;const d=n.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(!!o)for(let a=l.length-1;a>=0;a--){const u=l[a];if(u.href===n&&(!d||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${v}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":j,d||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),d)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())},k=x.div``,_=Object.assign({"/src/mdx/Output/1.mdx":()=>i(()=>import("./1-1901939a.js"),["assets/1-1901939a.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/a.浏览器和网络/1.常见的HTTP请求方法.mdx":()=>i(()=>import("./1.常见的HTTP请求方法-82a328c7.js"),["assets/1.常见的HTTP请求方法-82a328c7.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/a.浏览器和网络/2.简单请求和复杂请求的区别.mdx":()=>i(()=>import("./2.简单请求和复杂请求的区别-5b557573.js"),["assets/2.简单请求和复杂请求的区别-5b557573.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/a.浏览器和网络/3.GET请求和POST请求的区别.mdx":()=>i(()=>import("./3.GET请求和POST请求的区别-6ddfb309.js"),["assets/3.GET请求和POST请求的区别-6ddfb309.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/a.浏览器和网络/4.POST请求和PUT请求的区别.mdx":()=>i(()=>import("./4.POST请求和PUT请求的区别-a4287750.js"),["assets/4.POST请求和PUT请求的区别-a4287750.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/b.HTML和CSS/5.HTML5有哪些新特性.mdx":()=>i(()=>import("./5.HTML5有哪些新特性-3ea29952.js"),["assets/5.HTML5有哪些新特性-3ea29952.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/b.HTML和CSS/6.HTML语义化的理解.mdx":()=>i(()=>import("./6.HTML语义化的理解-3ea29952.js"),["assets/6.HTML语义化的理解-3ea29952.js","assets/vendor-bb1848df.js"]),"/src/mdx/Study/b.HTML和CSS/7.script标签中defer和async的区别.mdx":()=>i(()=>import("./7.script标签中defer和async的区别-3ea29952.js"),["assets/7.script标签中defer和async的区别-3ea29952.js","assets/vendor-bb1848df.js"])}),f={};for(const e in _){const r=e.match(/(\/src\/mdx\/.+?\/)(.*)(\d+\.)/),t=`${r[1]}${r[3]}mdx`;f[t]=m.lazy(_[e])}function T({view:e,mdxId:r}){const t=`/src/mdx/${e}/${r}.mdx`,o=f[t];return s.jsx(k,{children:s.jsx(m.Suspense,{fallback:s.jsx(s.Fragment,{}),children:o?s.jsx(o,{}):s.jsxs("div",{children:["这个页面还没写好呐",e,"-",r]})})})}const L=()=>{const e=b(),[r]=y(),t=r.get("id"),[o,l]=m.useState(t);return m.useEffect(()=>{l(t)},[t]),{navigvate:e,mdxId:o}};function P({items:e}){return s.jsx(E,{items:e})}const w=x.div`
  position: relative;
  .body {
    height: ${S};
    padding: 18px 200px;
  }
`,C=x.div`
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
`,D=x.div`
  height: 100%;
  overflow: auto;
  .ant-breadcrumb {
    margin-bottom: 18px;
  }
`;function R({config:e}){const r=e.key,t=[{title:s.jsx(g,{to:"/output",children:"返回列表"}),key:"back"}];return t.push({title:e.label}),s.jsxs(D,{children:[s.jsx(P,{items:t}),s.jsx(T,{view:"Output",mdxId:r})]})}function I({navigvate:e,configData:r}){return s.jsx(C,{children:r.map(t=>s.jsxs("div",{className:"item",onClick:()=>{e(`/output?id=${t.key}`)},children:[s.jsx("div",{className:"title",children:t.label}),s.jsx("div",{className:"desc",children:t.desc})]},t.key))})}const h=[{key:"1",label:"网站框架图",desc:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍"},{key:"2",label:"网站框架图",desc:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍"},{key:"3",label:"网站框架图",desc:"介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍"}];function M(){const{navigvate:e,mdxId:r}=L(),t=h.find(o=>o.key==r);return s.jsx(w,{children:s.jsx("div",{className:"body",children:r?s.jsx(R,{config:t}):s.jsx(I,{navigvate:e,configData:h})})})}const B=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{T as M,i as _,B as i,L as u};
