(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4185],{99288:(e,t,r)=>{Promise.resolve().then(r.bind(r,66261)),Promise.resolve().then(r.t.bind(r,48173,23)),Promise.resolve().then(r.t.bind(r,34332,23)),Promise.resolve().then(r.t.bind(r,15462,23)),Promise.resolve().then(r.t.bind(r,66966,23))},33228:(e,t,r)=>{"use strict";r.d(t,{L:()=>n});var o=r(95155);r(46457);var a=r(12115);function n(e){var t;let r,{children:n,bufferZone:l,rotateAmount:s}=e,[i,c]=(0,a.useState)({x:0,y:0}),d=(0,a.useCallback)((t=e=>{let t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.left,o=e.clientY-t.top,a=t.width/2;c({x:-((o-t.height/2)/s*1),y:-((a-r)/s*1)})},r=0,function(){for(var e=arguments.length,o=Array(e),a=0;a<e;a++)o[a]=arguments[a];let n=new Date().getTime();if(!(n-r<100))return r=n,t(...o)}),[]);return(0,o.jsx)("div",{onMouseMove:d,onMouseLeave:()=>{c({x:0,y:0})},style:{transform:"perspective(1000px) rotateX(".concat(i.x,"deg) rotateY(").concat(i.y,"deg) scale3d(1, 1, 1)"),transition:"all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"},children:n})}},60770:(e,t,r)=>{"use strict";r.d(t,{m3:()=>s,px:()=>i});var o=r(95155),a=r(12115),n=r(83817),l=r(87298);function s(e){let{src:t,autoplay:r,controls:a,muted:n,loop:l}=e;return(0,o.jsx)(c,{src:t,autoplay:r,controls:a,muted:n,loop:l,className:"",onEnter:e=>{e.target instanceof HTMLVideoElement&&e.target.play()},onLeave:e=>{e.target instanceof HTMLVideoElement&&e.target.pause()}})}function i(e){let{src:t,autoplay:r,controls:a,muted:n,loop:l}=e;return(0,o.jsx)(c,{src:t,autoplay:r,controls:a,muted:n,loop:l,className:"w-full h-full object-contain",onEnter:()=>{},onLeave:()=>{}})}function c(e){let{src:t,autoplay:r,controls:s,muted:i,loop:c,className:d,onEnter:p,onLeave:x}=e,[u,h]=(0,a.useState)("");return(0,a.useEffect)(()=>{(async function(){h(await (0,n.A)(t))})()},[t]),""===u?(0,o.jsx)(l.A,{}):(0,o.jsx)("video",{onMouseEnter:p,onMouseLeave:x,preload:"auto",width:"100%",height:"100%",src:u+"#t=0.001",autoPlay:r,playsInline:!0,controls:s,muted:i,loop:c,className:d})}},83817:(e,t,r)=>{"use strict";async function o(e){return"https://eevee-feywild.art/".concat(e)}r.d(t,{A:()=>o})},87298:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var o=r(95155);function a(){return(0,o.jsx)("div",{className:"self-center content-center justify-self-center w-full h-full text-center bg-cardBGColor",children:(0,o.jsx)("p",{children:"Loading..."})})}},82655:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var o=r(12115);function a(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{function r(){window.innerWidth<=768?e||t(!0):e&&t(!1)}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[e]),e}},46584:(e,t,r)=>{"use strict";r.d(t,{K:()=>a});var o=r(95155);function a(e){let{children:t,overflowStyle:r}=e;return(0,o.jsx)("div",{className:"absolute left-0 right-0 top-0 bottom-0 bg-bgColor",children:(0,o.jsx)("div",{className:"".concat(r," relative grid grid-cols-1 gap-[24px] w-full h-full justify-center py-[48px] no-scrollbar"),children:t})})}r(46457)},78152:(e,t,r)=>{"use strict";r.d(t,{Y:()=>g});var o=r(95155);r(46457);var a=r(82655),n=r(48173),l=r.n(n),s=r(33228),i=r(66966),c=r.n(i),d=r(15462),p=r.n(d),x=r(60770);function u(e){let{src:t}=e;return(0,o.jsx)("div",{className:"z-20",children:(0,o.jsx)(x.m3,{src:t,autoplay:!1,controls:!1,muted:!0,loop:!0})})}function h(e){let{dataArray:t}=e;return(0,o.jsxs)("div",{className:"group relative grid hover:gap-[8px] hover:lg:gap-[10px] w-fit h-auto p-[8px] lg:p-[12px] transition-all duration-300 rounded-md place-items-center overflow-clip",children:[(0,o.jsx)("div",{className:"relative content-center w-[200px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px] h-[90%] self-start overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090] transition-all duration-300",children:(0,o.jsx)(u,{src:t.mediaLink})}),(0,o.jsx)("div",{className:"absolute left-0 bottom-0 p-[6px] md:p-[8px] w-full h-auto group-hover:opacity-100 opacity-0 transition-all duration-300",children:(0,o.jsx)(function(){return(0,o.jsxs)("div",{className:"relative flex justify-between w-full h-fit text-[0px] sm:group-hover:text-[6px] md:group-hover:text-[8px] lg:group-hover:text-[10px] xl:group-hover:text-[12px] 2xl:group-hover:text-[16px] items-end transition-all duration-300",children:[(0,o.jsx)("p",{className:"".concat(c().className," text-black text-left text-nowrap"),children:t.projectTitle}),(0,o.jsx)("p",{className:"".concat(p().className," text-black text-right text-nowrap"),children:t.projectDates})]})},{})})]})}function m(e){let{dataArray:t}=e;return(0,o.jsx)("div",{className:"w-full h-full place-items-center place-content-center",children:(0,o.jsx)(s.L,{bufferZone:0,rotateAmount:7,children:(0,o.jsx)("div",{className:"bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[112%] active:scale-[105%] transition-all duration-200",children:(0,o.jsxs)(l(),{href:t.cardLink,children:[(0,o.jsx)(h,{dataArray:t}),"string"==typeof t.errorText?(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"".concat(c().className," text-nowrap absolute w-full h-fit text-center top-0 group-hover:top-[-.75rem] sm:group-hover:top-[-1rem] md:group-hover:top-[-1.25rem] lg:group-hover:top-[-1.5rem] xl:group-hover:top-[-1.75rem] opacity-0 group-hover:opacity-100 text-textVariant transition-all duration-200\n                                        text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px]"),children:t.errorText})}):(0,o.jsx)(o.Fragment,{})]})})})})}function f(e){let{src:t}=e;return(0,o.jsx)("div",{className:"z-20",children:(0,o.jsx)(x.px,{src:t,autoplay:!1,controls:!1,muted:!0,loop:!0})})}function v(e){let{dataArray:t}=e;return(0,o.jsxs)("div",{className:"relative grid w-fit h-auto p-[8px] transition-all duration-300 rounded-md place-items-center overflow-clip",children:[(0,o.jsx)("div",{className:"relative content-center w-[120px] h-[90%] self-start overflow-hidden rounded-md z-20 shadow-[0px_0px_12px_#00000090]",children:(0,o.jsx)(f,{src:t.mediaLink})}),(0,o.jsx)("div",{className:"absolute left-0 bottom-0 p-[6px] w-full h-auto opacity-100",children:(0,o.jsx)(function(){return(0,o.jsxs)("div",{className:"relative flex justify-between w-full h-fit text-[6px] items-end",children:[(0,o.jsx)("p",{className:"".concat(c().className," text-black text-left text-nowrap"),children:t.projectTitle}),(0,o.jsx)("p",{className:"".concat(p().className," text-black text-right text-nowrap"),children:t.projectDates})]})},{})})]})}function j(e){let{dataArray:t}=e;return(0,o.jsx)("div",{className:"relative w-fit h-fit place-self-center",children:(0,o.jsx)("div",{className:"bg-cardBGInactiveColor active:bg-cardBGColor w-fit h-fit rounded-[8px] opacity-80 active:opacity-100 active:scale-[110%] transition-all duration-200",children:(0,o.jsxs)(l(),{href:t.cardLink,children:[(0,o.jsx)(v,{dataArray:t}),"string"==typeof t.errorText?(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"".concat(c().className," text-nowrap absolute w-full h-fit text-center top-[-12px] text-textVariant text-[6px]"),children:t.errorText})}):(0,o.jsx)(o.Fragment,{})]})})})}function g(e){let{dataArray:t}=e;return(0,o.jsx)("div",{className:"",children:!1===(0,a.c)()?(0,o.jsx)("div",{className:"grid grid-cols-3 w-[90%] justify-self-center gap-[24px] h-full content-center place-content-center",children:t.map((e,t)=>(0,o.jsx)(m,{dataArray:e},t))}):(0,o.jsx)("div",{className:"grid grid-cols-2 w-[80%] h-full absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] gap-[12px] place-content-center",children:t.map((e,t)=>(0,o.jsx)(j,{dataArray:e},t))})})}},66261:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var o=r(95155);r(46457);var a=r(46584),n=r(78152);let l=[{projectTitle:"JS + HTML Bingo",projectDates:"2025",mediaLink:"_project-links/sqr-loop_codeBingo.mp4",cardLink:"https://github.com/iArtemyst/_bingo-board",errorText:"link to my github!"},{projectTitle:"ReactJS Resume",projectDates:"2025",mediaLink:"_project-links/sqr-loop_codeResume.mp4",cardLink:"https://github.com/iArtemyst/resume",errorText:"link to my github!"},{projectTitle:"ReactJS Portfolio Site",projectDates:"2025",mediaLink:"_project-links/portfolio-proj-link.mp4",cardLink:"../projCodeWebsite/",errorText:void 0}];function s(){return(0,o.jsx)(a.K,{overflowStyle:"overflow-y-scroll",children:(0,o.jsx)(n.Y,{dataArray:l})})}},46457:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[9856,689,4320,8441,1517,7358],()=>t(99288)),_N_E=e.O()}]);