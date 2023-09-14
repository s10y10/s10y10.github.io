import{J as n}from"./vendor-bb1848df.js";function l(i){const e=Object.assign({ul:"ul",li:"li"},i.components);return n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:n.jsx("center",{children:"常见的 HTTP 请求方法"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"GET: 向服务器请求获取数据；"}),`
`,n.jsx(e.li,{children:"POST: 发送数据给服务器，通常会造成服务器端的新增和修改；"}),`
`,n.jsx(e.li,{children:"PUT: 用于修改目标资源；"}),`
`,n.jsx(e.li,{children:"DELETE: 用于删除指定的资源；"}),`
`,n.jsx(e.li,{children:"HEAD: 获取请求头，不返回 BODY 的部分;用于通过请求头判断是否继续请求的场景，如下载大文件；"}),`
`,n.jsx(e.li,{children:"OPTIONS: 用于描述目标资源的通信选项;一般在复杂请求时自动发起；"}),`
`,n.jsx(e.li,{children:"PATCH: 对 PUT 方法的补充，用于对已知资源进行部分修改；"}),`
`,n.jsx(e.li,{children:"TRACE: 回显服务器收到的请求，主要用于测试或诊断；"}),`
`,n.jsx(e.li,{children:"CONNECT: 用于建立一个网络连接，使用隧道协议连接两个主机；"}),`
`]})]})}function c(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,Object.assign({},i,{children:n.jsx(l,i)})):l(i)}export{c as default};
