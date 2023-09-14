import{I as Z,P as J,K,L as W,O,V as Q,M as $,N as tt,Q as M,a as k,J as v}from"./vendor-bb1848df.js";import{c as et}from"./collect-80fd318e.js";function U(e,t,n){return{key:t,children:n?n.map(({label:i,key:o,children:a})=>U(i,o,a)):void 0,label:e}}const ht=e=>{const t=[];return e.forEach(({label:n,key:i,children:o})=>{const a=U(n,i,o);t.push(a)}),t},R=(e,t)=>((e===void 0||t===void 0)&&(t=e,e=0),e>t&&([e,t]=[t,e]),Math.floor(Math.random()*(t-e+1))+e),nt=(e,t)=>{const n=Math.max(e,t);return Math.round(Math.sqrt(n*n+n*n))/2},ot=(e,t=500)=>{let n;return function(){n&&clearTimeout(n),n=setTimeout(e,t)}},pt=e=>{const t=document.createElement("script");t.src=e,document.body.appendChild(t)},it=Z.div`
  position: relative;
  height: 100%;
  .body {
    position: relative;
    height: ${et};
    #menu {
      position: absolute;
      bottom: 30px;
      width: 100%;
      text-align: center;
      pointer-events: none;
      button {
        color: rgb(127, 255, 255);
        background: transparent;
        border: 2px solid rgba(127, 255, 255);
        margin: 4px;
        border-radius: 6px;
        font-weight: bold;
        font-size: 18px;
        padding: 5px 10px;
        cursor: pointer;
        pointer-events: auto;
        &:hover {
          background-color: rgba(0, 255, 255, 0.4);
        }
      }
    }
    #container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      .element {
        width: 150px;
        height: 200px;
        background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
        border: 1px solid rgba(127, 255, 255, 0.25);
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        writing-mode: vertical-lr;
        color: #aaf2ff;
        text-shadow: 4px 4px 8px #fff;
        border-radius: 10px;
      }
      .changeImgBoxs {
        width: 440px;
        height: 600px;
        border-radius: 20px;
        border: 1px solid rgba(127, 255, 255, 0.25);
        background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
        font-size: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        writing-mode: vertical-lr;
        color: #fff;
        text-shadow: 4px 4px 10px #fefcc9;
        animation: bling 2s infinite;
      }
    }
  }
`;function P(){}P.prototype.init=function(e,t,n){this.orbitRadius=R(nt(e,t)),this.radius=R(60,this.orbitRadius)/8,this.orbitX=e/2,this.orbitY=t/2,this.timePassed=R(0,n),this.speed=R(this.orbitRadius)/1e5,this.alpha=R(2,10)/10};P.prototype.draw=function(e,t){const n=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,o=R(10);o===1&&this.alpha>0?this.alpha-=.05:o===2&&this.alpha<1&&(this.alpha+=.05),t.globalAlpha=this.alpha,t.drawImage(e,n-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};function st(){let e=-1;const t=217,n=[],i=400;for(let h=0;h<i;h++)n.push(new P);const o=document.getElementById("sky"),a=o.getContext("2d");w();const r=document.createElement("canvas"),f=r.getContext("2d");r.width=100,r.height=100;const l=r.width/2,s=f.createRadialGradient(l,l,0,l,l,l);s.addColorStop(.025,"#CCC"),s.addColorStop(.1,"hsl("+t+", 61%, 33%)"),s.addColorStop(.25,"hsl("+t+", 64%, 6%)"),s.addColorStop(1,"transparent"),f.fillStyle=s,f.beginPath(),f.arc(l,l,l,0,Math.PI*2),f.fill();function w(){o.width=window.innerWidth,o.height=window.innerHeight;for(let h=0;h<i;h++)n[h].init(o.width,o.height,i)}const S=ot(w);window.addEventListener("resize",S);function E(){a.globalCompositeOperation="source-over",a.globalAlpha=.5,a.fillStyle="hsla("+t+", 64%, 6%, 2)",a.fillRect(0,0,o.width,o.height),a.globalCompositeOperation="lighter";for(let h=1,C=n.length;h<C;h++)n[h].draw(r,a);e=window.requestAnimationFrame(E)}return E(),{destroy:()=>{window.cancelAnimationFrame(e),window.removeEventListener("resize",S),o.width=0,o.height=0,r.width=0,r.height=0}}}const at=[{label:"幸运"},{label:"倒霉"},{label:"顺遂"},{label:"惨淡"},{label:"吉祥"},{label:"坎坷"},{label:"福气"},{label:"悲惨"},{label:"美好"},{label:"如意"},{label:"平安"},{label:"落魄"},{label:"厄运"},{label:"灿烂"},{label:"平稳"},{label:"祥和"},{label:"悲哀"},{label:"美满"}],rt=()=>{let e=at,t,n,i,o,a=[],r={chaos:[],table:[],sphere:[]},f=0,l=!1,s,w;function S(){const m=window.innerWidth/window.innerHeight;t=new J(40,m,1,1e4),t.position.z=2e3,n=new K;const d=3400,p=d/2,b=9,y=Math.floor(e.length/9),I=150,A=200,N=20;for(let g=0;g<e.length;g++){const x=document.createElement("div");x.className="element",x.innerHTML=e[g].label;const c=new W(x);c.position.x=Math.random()*d-p,c.position.y=Math.random()*d-p,c.position.z=Math.random()*d-p,n.add(c),a.push(c);const u=new O,z=Math.floor(g/b),X=g%b;u.position.x=X*(I+N)-b*I/2,u.position.y=-z*(A+N)+y*A,r.table.push(u)}w=document.createElement("div"),w.className="changeImgBoxs",s=new W(w),s.position.x=0,s.position.y=2e4,s.position.z=0,n.add(s);const T=500,G=new Q;for(let g=0,x=a.length;g<x;g++){const c=new O;let u=Math.random()*d-p;u<T&&u>-T&&(u<0?u-=T:u+=T),c.position.x=Math.random()*d-p,c.position.y=u,c.position.z=Math.random()*d-p,c.lookAt(G),r.chaos.push(c)}const D=800;for(let g=0,x=a.length;g<x;g++){const c=Math.acos(-1+2*g/x),u=Math.sqrt(x*Math.PI)*c,z=new O;z.position.x=D*Math.cos(u)*Math.sin(c),z.position.y=D*Math.sin(u)*Math.sin(c),z.position.z=D*Math.cos(c),z.lookAt(G),r.sphere.push(z)}i=new $,i.setSize(window.innerWidth,window.innerHeight),i.domElement.style.position="absolute",document.getElementById("container").appendChild(i.domElement),o=new tt(t,i.domElement),o.rotateSpeed=.5,o.minDistance=500,o.maxDistance=6e3,o.addEventListener("change",j),E(r.table),window.addEventListener("resize",h)}function E(m,d=500){M.removeAll();for(let p=0;p<a.length;p++){const b=a[p],y=m[p],I=Math.random()*d+d;new M.Tween(b.position).to({x:y.position.x,y:y.position.y,z:y.position.z},I).easing(M.Easing.Exponential.InOut).start(),new M.Tween(b.rotation).to({x:y.rotation.x,y:y.rotation.y,z:y.rotation.z},I).easing(M.Easing.Exponential.InOut).start()}new M.Tween(this).to({},d*2).onUpdate(j).start()}function h(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),j()}function C(){requestAnimationFrame(C),M.update(),l&&q(),o.update()}function j(){i.render(n,t)}let H=0;const L=2500;function q(){f+=Math.PI/30,t.position.x=Math.cos(f)*L,t.position.z=Math.sin(f)*L,t.position.y=0,t.up.x=0,t.up.y=1,t.up.z=0,s.rotation.y=-f+Math.PI/2,H=Math.floor(Math.random()*e.length);const m=e[H];w.innerHTML=m.label}function B(m,d){const p={x:m.scale.x,y:m.scale.y,z:m.scale.z};new M.Tween(p).to({x:d,y:d,z:d},300).delay(100).onUpdate(function(b){m.scale.x=b.x,m.scale.y=b.y,m.scale.z=b.z}).start()}S(),C();function F(){l=!0,s.position.y=0,E(r.sphere),B(s,1)}function _(){l&&(l=!1,E(r.chaos,250),B(s,1.6))}function Y(){l=!1,t.position.z=2e3,t.position.x=0,t.position.y=0,t.up.x=0,t.up.y=1,t.up.z=0,s.rotation.y=0,s.position.y=2e4,s.scale.set(1,1,1),E(r.table)}function V(){_(),o.removeEventListener("change",j),window.removeEventListener("resize",h)}return{start:F,closes:_,resets:Y,destroy:V}};function lt(){const e=k.useRef(null),t=k.useRef(null),n=k.useRef(null);return k.useEffect(()=>{const{destroy:i}=st(),{start:o,closes:a,resets:r,destroy:f}=rt(),l=e.current,s=t.current,w=n.current;return l.onclick=o,s.onclick=a,w.onclick=r,()=>{i(),f()}},[]),v.jsx(it,{children:v.jsxs("div",{className:"body",children:[v.jsx("canvas",{id:"sky"}),v.jsx("div",{id:"container"}),v.jsxs("div",{id:"menu",children:[v.jsx("button",{ref:e,children:"开始"}),v.jsx("button",{ref:t,children:"结束"}),v.jsx("button",{ref:n,children:"重置"})]})]})})}const ut=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));export{pt as a,ht as g,ut as i};
