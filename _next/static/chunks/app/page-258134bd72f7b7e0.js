(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{428:function(A,e,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.bind(t,9721)),Promise.resolve().then(t.bind(t,5555)),Promise.resolve().then(t.bind(t,9743)),Promise.resolve().then(t.bind(t,273)),Promise.resolve().then(t.bind(t,2890)),Promise.resolve().then(t.t.bind(t,345,23)),Promise.resolve().then(t.t.bind(t,1856,23)),Promise.resolve().then(t.t.bind(t,4559,23)),Promise.resolve().then(t.t.bind(t,4820,23)),Promise.resolve().then(t.t.bind(t,1239,23)),Promise.resolve().then(t.bind(t,1870)),Promise.resolve().then(t.bind(t,2664)),Promise.resolve().then(t.t.bind(t,3190,23)),Promise.resolve().then(t.t.bind(t,5610,23)),Promise.resolve().then(t.t.bind(t,2032,23)),Promise.resolve().then(t.bind(t,1645)),Promise.resolve().then(t.bind(t,5732)),Promise.resolve().then(t.bind(t,8452)),Promise.resolve().then(t.bind(t,2141)),Promise.resolve().then(t.t.bind(t,3219,23))},1870:function(A,e,t){"use strict";t.r(e),t.d(e,{Header:function(){return f}});var n=t(7437),r=t(6480),s=t.n(r),i=t(2265),o=t(8792),a=t(703),l=t(1663),c={src:"/_next/static/media/logo.7623e61a.png",height:123,width:226,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/eFplAAAADHRSTlMAcc1g3x4kTsGUTUn8AeI4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nAXBgQEAIAjDsG4DRf3/XxMAVrlZ92VXgz2eCpxIkfQBCFoAcf/APFAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},d=t(514),h=t.n(d);let x=A=>{let e=s()(h().logo,A.className);return(0,n.jsxs)(o.default,{href:"/",className:e,children:[(0,n.jsx)(a.default,{src:c,height:"20",alt:"mR"}),(0,n.jsx)(l.x,{as:"span",uppercase:!0,size:"xl",children:"MicroRack™"})]})};var u=t(5732),_=t(8452),g=t(6),p=t.n(g),m=JSON.parse('[{"title":"FAQ","href":"#faq"},{"title":"Forum","href":"https://forum.microrack.org/"},{"title":"Shop","href":"https://forms.gle/CgNbhLSbxbahZK8BA","subtitle":"soon","external":true}]');let f=A=>{let{className:e}=A,[t,r]=(0,i.useState)(!1),o=s()(p().header,e);return(0,n.jsxs)("header",{className:o,children:[(0,n.jsxs)("div",{className:p().headerContent,children:[(0,n.jsx)(x,{}),(0,n.jsx)("div",{className:p().burgerIcon,onClick:()=>{r(!t)},children:t?"✖":"☰"}),(0,n.jsx)(u.Menu,{uppercase:!0,items:m,isOpen:t})]}),(0,n.jsx)(_.Separator,{type:"sin"})]})}},2664:function(A,e,t){"use strict";t.r(e),t.d(e,{Hero:function(){return w}});var n=t(7437),r=t(2265),s=t(6480),i=t.n(s),o=t(9177),a=t.n(o),l=A=>{let{x:e,y:t,scale:r=1,dotSize:s}=A;return(0,n.jsx)("div",{className:a().dot,style:{width:"".concat(s,"px"),height:"".concat(s,"px"),left:"".concat(e,"px"),top:"".concat(t,"px"),transform:"scale(".concat(r,")")}})},c=t(4671),d=t.n(c);let h={initialScale:1,minScale:.25},x=A=>{let{dotSize:e,dotSpacing:t,height:s="100%",influenceRadius:i,interactive:o=!1}=A,a=(0,r.useRef)(null),[c,x]=(0,r.useState)([]),u=(0,r.useCallback)((A,n)=>{let r=[];for(let s=0;s<n;s+=t)for(let n=0;n<A;n+=t)r.push({x:n,y:s,scale:h.initialScale,dotSize:e});x(r)},[e,t]);(0,r.useEffect)(()=>{if(a.current){let A=new ResizeObserver(A=>{for(let e of A){let{width:A,height:t}=e.contentRect;u(A,t)}});return A.observe(a.current),()=>A.disconnect()}},[e,t,u]);let _=(A,e)=>{if(!o||void 0===i)return;let{initialScale:t,minScale:n}=h;x(c.map(r=>{let s=r.x-A,o=r.y-e,a=Math.sqrt(s*s+o*o);return{...r,scale:a<i?n+(1-n)*Math.min(a/i,1):t}}))},g=()=>{x(c.map(A=>({...A,scale:h.initialScale})))};return(0,n.jsx)("div",{ref:a,className:d().dotsContainer,onMouseMove:o?A=>{if(!a.current)return;let e=a.current.getBoundingClientRect();_(A.clientX-e.left,A.clientY-e.top)}:void 0,onTouchMove:o?A=>{if(!a.current)return;let e=A.touches[0],t=a.current.getBoundingClientRect();_(e.clientX-t.left,e.clientY-t.top)}:void 0,onMouseLeave:o?g:void 0,onTouchEnd:o?g:void 0,style:{height:s},children:c.map((A,e)=>(0,n.jsx)(l,{...A},e))})};var u=t(1663),_=t(8792),g=t(6190),p=t.n(g);let m=A=>{let{className:e,variant:t="secondary",href:r,text:s,...o}=A,a=i()(p().button,p()[t],e);return r?(0,n.jsx)(_.default,{href:r,className:i()(p().link,a),...o,children:s}):(0,n.jsx)("button",{type:"button",className:a,...o,children:s})};var f=t(3114),C=t.n(f);let E=A=>{let{children:e,className:t}=A,r=i()(C().container,t);return(0,n.jsx)("section",{className:r,children:e})},b=A=>{let{className:e,children:t,columns:r=12,hideOnMobile:s=!1,hideOnTablet:o=!1}=A,a=i()(e,C().item,s?C().hideOnMobile:"",o?C().hideOnTablet:"");return(0,n.jsx)("div",{className:a,style:{"--cols":r},children:t})};var B=t(5698),v=t.n(B);let w=A=>{let{className:e,children:t,formUrl:r,instUrl:s,texts:o}=A;return(0,n.jsxs)(E,{className:i()(v().container,e),children:[(0,n.jsx)(b,{columns:1,hideOnMobile:!0,hideOnTablet:!0,children:(0,n.jsx)(x,{dotSize:4,dotSpacing:15})}),(0,n.jsx)(b,{columns:2,hideOnMobile:!0,children:(0,n.jsx)(x,{dotSize:4,dotSpacing:15})}),(0,n.jsxs)(b,{columns:3,className:v().content,children:[(0,n.jsx)(x,{height:"",dotSize:4,dotSpacing:15}),(0,n.jsx)(u.x,{as:"h1",size:"xl",weight:"bold",className:v().description,children:o.heroTitle}),(0,n.jsx)(u.x,{size:"m",className:v().description,children:o.heroDescription}),(0,n.jsx)(m,{variant:"action",href:r,text:o.formButton,className:v().button}),(0,n.jsx)(m,{variant:"promo",href:s,text:o.instButton,className:v().button}),(0,n.jsx)(x,{height:"10px",dotSize:4,dotSpacing:15})]}),(0,n.jsx)(b,{columns:1,hideOnMobile:!0,children:(0,n.jsx)(x,{dotSize:4,dotSpacing:15})}),(0,n.jsx)(b,{columns:4,className:v().imageItem,children:t}),(0,n.jsx)(b,{columns:1,children:(0,n.jsx)(x,{dotSize:4,dotSpacing:15})})]})}},1645:function(A,e,t){"use strict";t.r(e);var n=t(7437),r=t(2265);e.default=A=>{let{url:e,className:t}=A,s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let A=document.createElement("script");return A.src="//www.instagram.com/embed.js",A.async=!0,A.defer=!0,document.body.appendChild(A),()=>{document.body.removeChild(A)}},[]),(0,r.useEffect)(()=>{window.instgrm&&window.instgrm.Embeds.process()},[]),(0,n.jsx)("div",{ref:s,className:t,children:(0,n.jsx)("blockquote",{className:"instagram-media","data-instgrm-permalink":e,"data-instgrm-version":"14",style:{background:"#FFF",border:"0",borderRadius:"3px",boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",margin:"1px",maxWidth:"540px",minWidth:"326px",padding:"0",width:"calc(100% - 2px)"},children:(0,n.jsx)("div",{style:{padding:"16px"},children:(0,n.jsxs)("a",{href:e,style:{background:"#FFFFFF",lineHeight:"0",padding:"0 0",textAlign:"center",textDecoration:"none",width:"100%"},target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:"40px",marginRight:"14px",width:"40px"}}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center"},children:[(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:0,height:"14px",marginBottom:"6px",width:"100px"}}),(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:0,height:"14px",width:"60px"}})]})]}),(0,n.jsx)("div",{style:{padding:"19% 0"}}),(0,n.jsx)("div",{style:{display:"block",height:"50px",margin:"0 auto 12px",width:"50px"},children:(0,n.jsx)("svg",{width:"50px",height:"50px",viewBox:"0 0 60 60",version:"1.1",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink",children:(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsx)("g",{transform:"translate(-511.000000, -20.000000)",fill:"#000000",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"})})})})})}),(0,n.jsx)("div",{style:{paddingTop:"8px"},children:(0,n.jsx)("div",{style:{color:"#3897f0",fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",fontWeight:"550",lineHeight:"18px"},children:"View this post on Instagram"})}),(0,n.jsx)("div",{style:{padding:"12.5% 0"}}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginBottom:"14px",alignItems:"center"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}}),(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:0,marginRight:"14px",marginLeft:"2px"}}),(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})]}),(0,n.jsxs)("div",{style:{marginLeft:"8px"},children:[(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:"20px",width:"20px"}}),(0,n.jsx)("div",{style:{width:0,height:0,borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})]}),(0,n.jsxs)("div",{style:{marginLeft:"auto"},children:[(0,n.jsx)("div",{style:{width:"0px",borderTop:"8px solid #F4F4F4",borderRight:"8px solid transparent",transform:"translateY(16px)"}}),(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",flexGrow:0,height:"12px",width:"16px",transform:"translateY(-4px)"}}),(0,n.jsx)("div",{style:{width:0,height:0,borderTop:"8px solid #F4F4F4",borderLeft:"8px solid transparent",transform:"translateY(-4px) translateX(8px)"}})]})]}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center",marginBottom:"24px"},children:[(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:0,height:"14px",marginBottom:"6px",width:"224px"}}),(0,n.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"4px",flexGrow:0,height:"14px",width:"144px"}})]})]})})})})}},5732:function(A,e,t){"use strict";t.r(e),t.d(e,{Menu:function(){return d}});var n=t(7437),r=t(2265),s=t(6480),i=t.n(s),o=t(8792),a=t(1663),l=t(990),c=t.n(l);let d=A=>{let{className:e,headingColor:t="primary",uppercase:s=!1,wide:l=!1,items:d,isOpen:h}=A,x=(0,r.useRef)(null),u=(0,r.useRef)(null),[_,g]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let A=x.current,e=u.current;if(!A||!e)return;let t=()=>{let t=e.scrollWidth>A.clientWidth;if(g(t),t){let t=e.cloneNode(!0);A.appendChild(t)}else{let e=A.querySelector(".".concat(c().menuContent,":nth-child(2)"));e&&A.removeChild(e)}},n=()=>{A.style.animationPlayState="paused"};return h&&(t(),A.style.animationPlayState="running",A.addEventListener("touchstart",n),A.addEventListener("mouseover",n),A.addEventListener("scroll",n)),window.addEventListener("resize",t),()=>{A&&(A.removeEventListener("touchstart",n),A.removeEventListener("mouseover",n),A.removeEventListener("scroll",n)),window.removeEventListener("resize",t)}},[h,d]);let p=i()(e,c().menu,l?c().wide:"",h?c().menuOpen:"",_?c().animate:"");return(0,n.jsx)("nav",{ref:x,className:p,children:(0,n.jsx)("div",{ref:u,className:c().menuContent,children:d.map((A,e)=>{let r=i()(c().menuItem,{[c().hideOnMobile]:A.hideOnMobile});return(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)(o.default,{href:A.href,title:A.title,target:A.external?"_blank":"_self",children:(0,n.jsx)(a.x,{size:"s",as:"span",uppercase:s,color:t,children:A.title})}),A.subtitle&&(0,n.jsx)(a.x,{className:c().subtitle,size:"xxs",as:"span",color:"secondary",children:A.subtitle})]},e)})})})}},8452:function(A,e,t){"use strict";t.r(e),t.d(e,{Separator:function(){return a}});var n=t(7437);t(2265);var r=t(6480),s=t.n(r),i=t(5866),o=t.n(i);let a=A=>{let{className:e,color:t="#000000",height:r=25,type:i="sin"}=A,a=s()(o().separator,e);return(0,n.jsx)("div",{className:a,children:(0,n.jsxs)("svg",{width:"100%",height:r,preserveAspectRatio:"none",children:["sin"===i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"sin",x:"0",y:"0",width:25,height:r,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("path",{d:"M0,".concat(r/2," Q").concat(6.25,",0 ").concat(12.5,",").concat(r/2," T").concat(25,",").concat(r/2),fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"square"})})}),(0,n.jsx)("rect",{width:"100%",height:r,fill:"url(#sin)"})]}),"triangle"===i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"triangle",x:"0",y:"0",width:25,height:r,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("path",{d:"M0,".concat(r/2," L").concat(12.5,",0 L").concat(25,",").concat(r/2),fill:"none",stroke:t,strokeWidth:"2"})})}),(0,n.jsx)("rect",{width:"100%",height:r,fill:"url(#triangle)"})]}),"square"===i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"square",x:"0",y:"0",width:25,height:r,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("path",{d:"M0,".concat(r/2," h").concat(12.5," v").concat(-r/2," h").concat(12.5," v").concat(r/2),fill:"none",stroke:t,strokeWidth:"2"})})}),(0,n.jsx)("rect",{width:"100%",height:r,fill:"url(#square)"})]}),"saw"===i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"saw",x:"0",y:"0",width:25,height:r,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("path",{d:"M0,".concat(r/2," L").concat(25,",0 V").concat(r/2," M0,").concat(r/2),fill:"none",stroke:t,strokeWidth:"2"})})}),(0,n.jsx)("rect",{width:"100%",height:r,fill:"url(#saw)"})]})]})})}},2141:function(A,e,t){"use strict";t.r(e),t.d(e,{Slider:function(){return l}});var n=t(7437),r=t(2265),s=t(6480),i=t.n(s),o=t(8959),a=t.n(o);let l=A=>{let{children:e,autoPlayInterval:t=6500,showArrows:s=!0}=A,[o,l]=(0,r.useState)(0),[c,d]=(0,r.useState)(!0),h=(0,r.useRef)(null),x=(0,r.useRef)(null),u=(0,r.useRef)(0),_=(0,r.useRef)(0),g=(0,r.useRef)(null),p=(0,r.useRef)(null),m=(0,r.useCallback)(()=>{l(A=>(A+1)%e.length)},[e.length]),f=(0,r.useCallback)(()=>{l(A=>(A-1+e.length)%e.length)},[e.length]),C=(0,r.useCallback)(A=>{l(A)},[]),E=(0,r.useCallback)(()=>{d(!1),g.current&&clearTimeout(g.current),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{d(!0)},1e4)},[]),b=(0,r.useCallback)(()=>{E()},[E]),B=(0,r.useCallback)(A=>{"ArrowRight"===A.key?(m(),E()):"ArrowLeft"===A.key&&(f(),E())},[m,f,E]);(0,r.useEffect)(()=>{document.addEventListener("keydown",B);let A=A=>{h.current&&!h.current.contains(A.target)&&d(!0)};return document.addEventListener("click",A),()=>{document.removeEventListener("keydown",B),document.removeEventListener("click",A)}},[B]),(0,r.useEffect)(()=>(c&&(g.current=setTimeout(m,t)),()=>{g.current&&clearTimeout(g.current)}),[c,t,m,o]);let v=(0,r.useCallback)(A=>{u.current=A.touches[0].clientX,E()},[E]),w=(0,r.useCallback)(A=>{_.current=A.touches[0].clientX},[]),j=(0,r.useCallback)(()=>{let A=u.current-_.current;A>50?m():A<-50&&f()},[m,f]),Q=(0,r.useCallback)(A=>{A.deltaX>50?(m(),E()):A.deltaX<-50&&(f(),E())},[m,f,E]);return(0,r.useCallback)(A=>{"prev"===A?f():m(),E()},[f,m,E]),(0,n.jsxs)("div",{className:a().sliderContainer,ref:h,onTouchStart:v,onTouchMove:w,onTouchEnd:j,onWheel:Q,children:[(0,n.jsx)("div",{className:a().sliderTrack,ref:x,style:{transform:"translateX(-".concat(100*o,"%)"),transition:c?"transform 0.5s ease-in-out":"none"},children:e.map((A,e)=>(0,n.jsx)("div",{className:a().sliderItem,onClick:b,onMouseDown:b,onTouchStart:b,children:r.cloneElement(A,{className:"".concat(a().imageComponent),onMouseDown:b,onTouchStart:b})},e))}),(0,n.jsx)("div",{className:a().sliderDots,children:e.map((A,e)=>(0,n.jsx)("span",{className:i()(a().dot,{[a().activeDot]:o===e}),onClick:A=>{A.stopPropagation(),C(e),E()}},e))})]})}},1663:function(A,e,t){"use strict";t.d(e,{x:function(){return a}});var n=t(7437);t(2265);var r=t(6480),s=t.n(r),i=t(3219),o=t.n(i);let a=A=>{let{size:e="s",as:t="p",weight:r="normal",color:i="primary",uppercase:a=!1,children:l,...c}=A,d=s()(o().text,o()[e],o()[i],o()[r],c.className,{[o().uppercase]:a});return(0,n.jsx)(t,{className:d,children:l})}},345:function(A){A.exports={page:"page_page__ZU32B",header:"page_header__kVzhN",main:"page_main__GlU4n",hero:"page_hero__SKW6o",benefits:"page_benefits__h_C5p",about:"page_about__aOfOo",timeline:"page_timeline__L97En",faq:"page_faq__hmOuC",separator:"page_separator__fBZ6h"}},4559:function(A){A.exports={section:"about_section__JUgTM",aside:"about_aside__q8HTT",title:"about_title__LGHvT",text:"about_text__HUOL2",imageHeader:"about_imageHeader__ghhnL"}},1239:function(A){A.exports={benefit:"benefit_benefit__n98DB",heading:"benefit_heading__hzpYF"}},2032:function(A){A.exports={benefits:"benefits_benefits__I4XHO"}},6190:function(A){A.exports={button:"button_button__dM7gR",primary:"button_primary__Y_Ksg",action:"button_action__Aitra",promo:"button_promo__9tX72",secondary:"button_secondary__Mn__I",link:"button_link___1l_R"}},4820:function(A){A.exports={copyright:"copyright_copyright__rB0gw"}},9177:function(A){A.exports={dot:"dot_dot__t3UHx"}},4671:function(A){A.exports={dotsContainer:"dots_dotsContainer__g3V9S"}},1856:function(A){A.exports={faqItem:"faq_faqItem__ra4Ua",faqQuestion:"faq_faqQuestion__pBr4b",faqToggle:"faq_faqToggle__hi223",faqAnswer:"faq_faqAnswer__OBlJI"}},3114:function(A){A.exports={container:"flex_container__PuhJM",item:"flex_item__KJVTR",hideOnMobile:"flex_hideOnMobile__zbLpA",hideOnTablet:"flex_hideOnTablet__SFxhS"}},5610:function(A){A.exports={footer:"footer_footer__ysJQv",container:"footer_container__PyKNL",menu:"footer_menu__Bdu9o"}},6:function(A){A.exports={header:"header_header__iAHWV",headerContent:"header_headerContent__5LLZ6",burgerIcon:"header_burgerIcon__MJI5f"}},5698:function(A){A.exports={container:"hero_container__F8a_i",content:"hero_content__F4E3Z",imageItem:"hero_imageItem__lQhE9",imageComponent:"hero_imageComponent__reMb1",slogan:"hero_slogan__6esdx",button:"hero_button__bpL8r"}},3190:function(A){A.exports={container:"image-header_container__WSsWl"}},514:function(A){A.exports={logo:"logo_logo__e7YNS"}},990:function(A){A.exports={menu:"menu_menu___PdAa",menuContent:"menu_menuContent__OeK6x",menuItem:"menu_menuItem__lN5ad",subtitle:"menu_subtitle__7Kija",wide:"menu_wide__UbhzP",menuOpen:"menu_menuOpen__v54SJ",animate:"menu_animate__Hbsnf",scroll:"menu_scroll__brl0_",hideOnMobile:"menu_hideOnMobile__SW1_7"}},5866:function(A){A.exports={separator:"separator_separator__SI_PM"}},8959:function(A){A.exports={sliderContainer:"slider_sliderContainer__VYxK5",sliderTrack:"slider_sliderTrack__7CkL8",sliderItem:"slider_sliderItem__2_33H",sliderDots:"slider_sliderDots__EC5hP",dot:"slider_dot__o4gjL",activeDot:"slider_activeDot__evyYW",imageComponent:"slider_imageComponent__aILuj",embedContainer:"slider_embedContainer__GWXjC",embedContent:"slider_embedContent__vMKOL"}},3219:function(A){A.exports={text:"text_text__IHkKq",uppercase:"text_uppercase__VYD81",xxs:"text_xxs__n7jjR",xs:"text_xs__zkCXI",s:"text_s__h2v9E",m:"text_m__lrOD2",ml:"text_ml__Q4bjp",l:"text_l__FU5sg",xl:"text_xl__XLUTM",xxl:"text_xxl__l0rlb",xxxl:"text_xxxl__RHOW8",bold:"text_bold__gK0US",light:"text_light__ajHhQ",purple:"text_purple__pxm58",green:"text_green__9IfK6",secondary:"text_secondary__2_ZGN",warning:"text_warning__Hyma9",error:"text_error__qftME"}},5555:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/asortment.ac7189a6.jpg",height:1120,width:3803,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAABgi1//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAQABBQKXh//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPwFQ/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFC/9oACAECAQE/AaZ//8QAFhAAAwAAAAAAAAAAAAAAAAAAAAFx/9oACAEBAAY/AlD/xAAXEAEAAwAAAAAAAAAAAAAAAAABABEh/9oACAEBAAE/IUAFB1U//9oADAMBAAIAAwAAABDz/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQMBAT8Qm//EABURAQEAAAAAAAAAAAAAAAAAAACx/9oACAECAQE/ELv/xAAXEAEAAwAAAAAAAAAAAAAAAAABABFx/9oACAEBAAE/EGvoQqHZ/9k=",blurWidth:8,blurHeight:2}},9743:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/asortment3.d6e2ad00.jpg",height:1280,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGSGf/EABYQAQEBAAAAAAAAAAAAAAAAAAIBA//aAAgBAQABBQIkXP8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Bj//EABYQAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAQAGPwJCXf/EABUQAQEAAAAAAAAAAAAAAAAAAACR/9oACAEBAAE/IZ1j/9oADAMBAAIAAwAAABD3/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qr//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxDCX//EABoQAAICAwAAAAAAAAAAAAAAAAExABEhQZH/2gAIAQEAAT8QwQQTXscn/9k=",blurWidth:8,blurHeight:8}},273:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/cover-1.eb8db441.jpg",height:1280,width:964,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/aAAwDAQACEAMQAAABiCkP/8QAFhABAQEAAAAAAAAAAAAAAAAAAQIR/9oACAEBAAEFAmMf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AXT/xAAYEQACAwAAAAAAAAAAAAAAAAAAAgERIv/aAAgBAgEBPwFNLcn/xAAXEAADAQAAAAAAAAAAAAAAAAAAAhEx/9oACAEBAAY/Ao2n/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERUf/aAAgBAQABPyF8C6P/2gAMAwEAAgADAAAAEPf/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8Qyi//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEh/9oACAECAQE/EKAWs//EABgQAQADAQAAAAAAAAAAAAAAAAEAESHB/9oACAEBAAE/EHCg266dn//Z",blurWidth:6,blurHeight:8}},2890:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/diy2.57c9410c.jpg",height:590,width:1046,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABgFD/AP/EABYQAQEBAAAAAAAAAAAAAAAAAAEEAv/aAAgBAQABBQLNCzf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwFW/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/AQHS/8QAGBABAAMBAAAAAAAAAAAAAAAAAQACEhH/2gAIAQEABj8C1kGryf/EABgQAAIDAAAAAAAAAAAAAAAAAAABESFx/9oACAEBAAE/IXqMlNP/2gAMAwEAAgADAAAAEA//xAAXEQEAAwAAAAAAAAAAAAAAAAABAEGR/9oACAEDAQE/EKC6z//EABcRAQADAAAAAAAAAAAAAAAAAAEAMXH/2gAIAQIBAT8QoB0J/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARMSH/2gAIAQEAAT8QZwAuapgjT2f/2Q==",blurWidth:8,blurHeight:5}}},function(A){A.O(0,[703,971,69,744],function(){return A(A.s=428)}),_N_E=A.O()}]);