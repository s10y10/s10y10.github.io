import{J as n}from"./vendor-bb1848df.js";function s(i){const e=Object.assign({ul:"ul",li:"li"},i.components);return n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:n.jsx("center",{children:"GET请求和POST请求的区别"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"GET 和 POST 是 HTTP 协议中的两种请求方式。"}),`
`,n.jsx(e.li,{children:"GET 请求的数据会附在 URL 之后，以？分割 URL 和传输数据，参数之间以&相连；POST 把提交的数据则放置在 HTTP 包的包体中。"}),`
`,n.jsx(e.li,{children:"GET 请求的长度受限于 URL 的长度，而 URL 的长度受限于浏览器和服务器的设置，在理论上 GET 的长度是可以无限长的。"}),`
`,n.jsx(e.li,{children:"POST 请求比 GET 请求更加安全可靠，因为 POST 请求不会被缓存、不会留下历史记录、不会被收藏夹收藏。此外 POST 请求可以向服务器提交大量数据，GET 请求不能。"}),`
`,n.jsx(e.li,{children:"GET 请求适用于请求数据，POST 请求更适用于提交数据。"}),`
`,n.jsx(e.li,{children:"GET 请求的参数只允许 ASCII 字符，POST 请求的参数支持更多的数据类型(如文件、图片)。"}),`
`]})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,Object.assign({},i,{children:n.jsx(s,i)})):s(i)}export{l as default};
