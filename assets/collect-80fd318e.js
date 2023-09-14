import{I as f,a as l,J as e}from"./vendor-bb1848df.js";import{C as o,M as p,a as m}from"./antd-cc4a4e1e.js";const k={STUDY:"/study",OUTPUT:"/output",GAME:"/game",COLLECT:"/collect",MAIN:"/"},g="80px",x="34px",u=`calc(100vh - ${g} - ${x})`,j=[{key:"1",label:"网站框架图",src:["/collect/frame.jpg","/collect/fanqie.png"]},{key:"2",label:"番茄大法好",src:["/collect/fanqie.png"]},{key:"3",label:"费曼学习法",src:["/collect/feiman.png"]},{key:"4",label:"不蒜子",src:["/collect/busuanzi.png"]}],b=f.div`
  position: relative;
  height: 100%;
  .body {
    position: relative;
    height: ${u};
    padding: 20px;
    overflow: hidden;
    .content {
      height: 100%;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      justify-items: center;
      align-items: self-start;
      .ant-card {
        width: 300px;
        margin: 20px;
        background-color: #d3fafa;
        .ant-card-cover {
          width: 100%;
          height: 250px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #fff;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }
  }
`,{Meta:v}=o;function y(){const[s,a]=l.useState(!1),[n,c]=l.useState([]),r=t=>{c(t),a(!0)},d=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("div",{className:"body",children:e.jsx("div",{className:"content",children:j.map(({key:t,label:h,src:i})=>e.jsx(o,{hoverable:!0,cover:e.jsx("img",{src:i[0]}),onClick:()=>{r(i)},children:e.jsx(v,{title:h})},t))})})}),e.jsx(p,{open:s,onCancel:d,footer:null,width:"60%",children:e.jsx(m,{effect:"fade",children:n.map(t=>e.jsx("div",{children:e.jsx("img",{src:t,style:{maxWidth:"100%",maxHeight:"100%"}})},t))})})]})}const w=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{k as R,u as c,x as f,g as h,w as i};
