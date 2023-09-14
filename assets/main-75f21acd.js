import{I as s,a as o,J as t,U as x}from"./vendor-bb1848df.js";import{R as e}from"./collect-80fd318e.js";import{C as g}from"./antd-cc4a4e1e.js";const h=s.div`
  width: 100%;
  background-color: #000000;
  transition-duration: 2s;
  transition-delay: 1s;
  transition-property: margin-top;
  display: flex;
  margin-top: 0;
  img {
    width: 100%;
  }
`;function m(){const[n,a]=o.useState({}),[i,r]=o.useState(!0),d=o.useCallback(c=>{const l=c.target;a({marginTop:`-${l.clientHeight}px`})},[]),p=()=>{r(!1)};return i?t.jsx(h,{onTransitionEnd:()=>p(),style:n,children:t.jsx("img",{src:"banner.jpg",onLoad:d})}):t.jsx(t.Fragment,{})}const b=[{path:e.STUDY,title:"努力学习",text:"记录各种技术知识点"},{path:e.COLLECT,title:"日常收集",text:"存放一些直接收藏来的东东"},{path:e.OUTPUT,title:"持续输出",text:"放一些自己做的玩意儿"},{path:e.GAME,title:"今日运势",text:"来测一测今天的运气如何吧"}],f=s.div`
  .headIcon {
    border-radius: 50%;
    margin: 40px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .headTitle {
    font-size: 40px;
    font-weight: bold;
  }
  .cardlist {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .ant-card {
      margin-top: 20px;
      width: 300px;
      height: 150px;
      border: 1px solid #5dd8e6;
      background-color: #e2ffff;
      .ant-card-head {
        border-bottom: 1px solid #add8e6;
      }
      .ant-card-body {
        line-height: 94px;
        padding: 0;
      }
      &.ant-card-hoverable:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
  }
  .group {
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;function w(){const n=x();return t.jsxs(f,{children:[t.jsx(m,{}),t.jsx("img",{className:"headIcon",src:"avatar.jpg"}),t.jsx("div",{className:"headTitle",children:"我的窝棚"}),t.jsx("div",{className:"cardlist",children:t.jsx("div",{className:"group",children:b.map(({path:a,title:i,text:r})=>t.jsx(g,{hoverable:!0,title:i,onClick:()=>{n(a)},children:r},a))})})]})}export{w as default};
