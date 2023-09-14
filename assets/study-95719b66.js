import{I as i,J as e}from"./vendor-bb1848df.js";import{u as l,M as a}from"./output-9449369d.js";import{g as o}from"./game-c369a954.js";import{c as d}from"./collect-80fd318e.js";import{b as r}from"./antd-cc4a4e1e.js";const c=[{label:"浏览器和网络",key:"sub1",children:[{label:"常见的HTTP请求方法",key:"1"},{label:"GET请求和POST请求的区别",key:"2"},{label:"POST请求和PUT请求的区别",key:"3"},{label:"简单请求和复杂请求的区别",key:"4"}]},{label:"HTML和CSS",key:"sub2",children:[{label:"HTML语义化的理解",key:"55"},{label:"script标签中defer和async的区别",key:"56"},{label:"HTML5有哪些新特性",key:"67"}]}],m=i.div`
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
      height: ${d};
      overflow: auto;
      ul {
        list-style: disc;
      }
    }
  }
`,u=i.div`
  margin-top: 100px;
  text-align: center;
  img {
    width: 50%;
    border-radius: 10px;
    animation: flip 5s linear infinite, shadow 5s ease-in-out infinite;
    will-change: transform, box-shadow;
  }
`;function y(){return e.jsx(u,{children:e.jsx("img",{src:"/study/studybg.jpg"})})}const x=o(c);function v(){const{navigvate:s,mdxId:t}=l();return e.jsx(m,{children:e.jsxs("div",{className:"body",children:[e.jsx(r,{style:{width:"20%"},mode:"inline",items:x,onSelect:n=>{s(`/study?id=${n.key}`)}}),e.jsx("div",{className:"content",children:t?e.jsx(a,{view:"Study",mdxId:t}):e.jsx(y,{})})]})})}export{v as default};
