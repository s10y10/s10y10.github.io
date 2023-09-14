import{a as o,I as a,J as t}from"./vendor-bb1848df.js";import{u as d,M as u}from"./output-57ef8c9c.js";import{g as m}from"./game-c369a954.js";import{c}from"./collect-80fd318e.js";import{b as l}from"./antd-cc4a4e1e.js";const x=i=>{const[s,n]=o.useState([]);return o.useEffect(()=>{fetch(`/config/${i}.json`).then(e=>e.json()).then(e=>{const r=m(e);n(r)})},[]),{menuItems:s}},f=a.div`
  position: relative;
  height: 100%;
  text-align: left;
  .body {
    display: flex;
    align-items: flex-start;
    position: relative;
    .content {
      flex: 1;
      padding: 20px 24px;
      height: ${c};
      overflow: auto;
      ul {
        list-style: disc;
      }
    }
  }
`,p=a.div`
  margin-top: 100px;
  text-align: center;
  img {
    width: 50%;
    border-radius: 10px;
    animation: flip 5s linear infinite, shadow 5s ease-in-out infinite;
    will-change: transform, box-shadow;
  }
`;function g(){return t.jsx(p,{children:t.jsx("img",{src:"/study/studybg.jpg"})})}function I(){const{navigvate:i,mdxId:s}=d(),{menuItems:n}=x("study");return t.jsx(f,{children:t.jsxs("div",{className:"body",children:[t.jsx(l,{style:{width:"20%"},mode:"inline",items:n,onSelect:e=>{i(`/study?id=${e.key}`)}}),t.jsx("div",{className:"content",children:s?t.jsx(u,{view:"Study",mdxId:s}):t.jsx(g,{})})]})})}export{I as default};
