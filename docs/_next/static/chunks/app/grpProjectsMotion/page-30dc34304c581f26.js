(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6586],{85871:(e,t,r)=>{Promise.resolve().then(r.bind(r,66381)),Promise.resolve().then(r.t.bind(r,48173,23)),Promise.resolve().then(r.t.bind(r,94453,23)),Promise.resolve().then(r.t.bind(r,34332,23)),Promise.resolve().then(r.t.bind(r,93610,23)),Promise.resolve().then(r.t.bind(r,10472,23)),Promise.resolve().then(r.t.bind(r,53468,23)),Promise.resolve().then(r.t.bind(r,15462,23)),Promise.resolve().then(r.t.bind(r,71502,23)),Promise.resolve().then(r.t.bind(r,66966,23))},33228:(e,t,r)=>{"use strict";r.d(t,{L:()=>i});var o=r(95155);r(46457);var n=r(12115);function i(e){var t;let r,{children:i,bufferZone:l,rotateAmount:a}=e,[s,c]=(0,n.useState)({x:0,y:0}),p=(0,n.useCallback)((t=e=>{let t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.left,o=e.clientY-t.top,n=t.width/2;c({x:-((o-t.height/2)/a*1),y:-((n-r)/a*1)})},r=0,function(){for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];let i=new Date().getTime();if(!(i-r<100))return r=i,t(...o)}),[]);return(0,o.jsx)("div",{onMouseMove:p,onMouseLeave:()=>{c({x:0,y:0})},style:{transform:"perspective(1000px) rotateX(".concat(s.x,"deg) rotateY(").concat(s.y,"deg) scale3d(1, 1, 1)"),transition:"all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"},children:i})}},60770:(e,t,r)=>{"use strict";r.d(t,{YU:()=>a,m3:()=>s,px:()=>c});var o=r(95155),n=r(12115),i=r(83817),l=r(87298);function a(e){let{src:t,autoplay:r,controls:n,muted:i,loop:l,className:a}=e;return(0,o.jsx)(p,{src:t,autoplay:r,controls:n,muted:i,loop:l,className:a,onEnter:()=>{},onLeave:()=>{}})}function s(e){let{src:t,autoplay:r,controls:n,muted:i,loop:l}=e;return(0,o.jsx)(p,{src:t,autoplay:r,controls:n,muted:i,loop:l,className:"",onEnter:e=>{e.target instanceof HTMLVideoElement&&e.target.play()},onLeave:e=>{e.target instanceof HTMLVideoElement&&e.target.pause()}})}function c(e){let{src:t,autoplay:r,controls:n,muted:i,loop:l}=e;return(0,o.jsx)("div",{className:"w-full h-full relative content-center",children:(0,o.jsx)(a,{src:t,autoplay:r,controls:n,muted:i,loop:l,className:"w-full h-full object-contain"})})}function p(e){let{src:t,autoplay:r,controls:a,muted:s,loop:c,className:p,onEnter:d,onLeave:u}=e,[x,m]=(0,n.useState)("");return(0,n.useEffect)(()=>{(async function(){m(await (0,i.A)(t))})()},[t]),""===x?(0,o.jsx)(l.A,{}):(0,o.jsx)("video",{onMouseEnter:d,onMouseLeave:u,src:x,width:"100%",height:"100%",autoPlay:r,controls:a,muted:s,loop:c,className:p})}},83817:(e,t,r)=>{"use strict";async function o(e){return"https://eevee-feywild.art/".concat(e)}r.d(t,{A:()=>o})},87298:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r(95155);function n(){return(0,o.jsx)("div",{className:"self-center content-center justify-self-center w-full h-full text-center bg-cardBGColor",children:(0,o.jsx)("p",{children:"Loading..."})})}},46584:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});var o=r(95155);function n(e){let{children:t,overflowStyle:r}=e;return(0,o.jsx)("div",{className:"absolute left-0 right-0 top-0 bottom-0 bg-bgColor",children:(0,o.jsx)("div",{className:"".concat(r," relative grid grid-cols-1 gap-[24px] w-full h-full justify-center py-[48px] no-scrollbar"),children:t})})}r(46457)},78152:(e,t,r)=>{"use strict";r.d(t,{Y:()=>v});var o=r(95155);r(46457);var n=r(48173),i=r.n(n),l=r(12115),a=r(33228),s=r(66966),c=r.n(s),p=r(15462),d=r.n(p),u=r(60770);function x(e){let{dataArray:t}=e;return(0,o.jsxs)("div",{className:"relative flex justify-between w-full h-fit text-[0px] group-hover:text-[6px] sm:group-hover:text-[8px] md:group-hover:text-[10px] lg:group-hover:text-[12px] xl:group-hover:text-[14px] 2xl:group-hover:text-[20px] items-end transition-all duration-300",children:[(0,o.jsx)("p",{className:"".concat(c().className," text-black text-left text-nowrap"),children:t.projectTitle}),(0,o.jsx)("p",{className:"".concat(d().className," text-black text-right text-nowrap"),children:t.projectDates})]})}function m(e){let{dataArray:t}=e;return(0,o.jsxs)("div",{className:"group relative grid hover:gap-[8px] hover:lg:gap-[10px] w-fit h-auto p-[8px] lg:p-[12px] transition-all duration-300 rounded-md place-items-center overflow-clip",children:[(0,o.jsx)("div",{className:"relative content-center w-[140px] group-hover:w-[120px] md:group-hover:w-[180px] md:w-[200px] lg:group-hover:w-[220px] lg:w-[240px] xl:group-hover:w-[280px] xl:w-[300px] 2xl:group-hover:w-[340px] 2xl:w-[360px] h-[100%] group-hover:h-[90%] self-start overflow-hidden rounded-md z-20 group-hover:shadow-[0px_0px_12px_#00000090] transition-all duration-300",children:(0,o.jsx)(u.m3,{src:t.mediaLink,autoplay:!1,controls:!1,muted:!0,loop:!0})}),(0,o.jsx)("div",{className:"absolute left-0 bottom-0 p-[6px] md:p-[8px] w-full h-auto group-hover:opacity-100 opacity-0 transition-all duration-300",children:(0,o.jsx)(x,{dataArray:t})})]})}function h(e){let{dataArray:t}=e,[r,n]=(0,l.useState)(!1);return(0,o.jsx)("div",{className:"w-full h-full place-items-center place-content-center",children:(0,o.jsx)(a.L,{bufferZone:0,rotateAmount:7,children:(0,o.jsx)("div",{className:"".concat(r&&"animate-error-wiggle"," bg-cardBGInactiveColor hover:bg-cardBGColor group w-fit h-fit cursor-pointer rounded-[8px] opacity-80 hover:opacity-100 hover:scale-[112%] active:scale-[105%] transition-all duration-200"),onClick:()=>{t.cardLink||n(!0)},onAnimationEnd:()=>{n(!1)},children:(0,o.jsxs)(i(),{href:t.cardLink,children:[(0,o.jsx)(m,{dataArray:t}),"string"==typeof t.errorText?(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"".concat(c().className," text-nowrap absolute w-full h-fit text-center top-0 group-hover:top-[-.75rem] sm:group-hover:top-[-1rem] md:group-hover:top-[-1.25rem] lg:group-hover:top-[-1.5rem] xl:group-hover:top-[-1.75rem] opacity-0 group-hover:opacity-100 text-textVariant transition-all duration-200\n                                        text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px]"),children:t.errorText})}):(0,o.jsx)("div",{})]})})})})}function v(e){let{dataArray:t}=e;return(0,o.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 w-[420px] sm:w-[540px] md:w-[720px] lg:w-[1080px] xl:w-[1280px] 2xl:w-[1640px] justify-self-center gap-[24px] h-full content-center place-content-center",children:t.map((e,t)=>(0,o.jsx)(h,{dataArray:e},t))})}},66381:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var o=r(95155);r(46457);var n=r(46584),i=r(78152);let l=[{projectTitle:"DDR Melee Motion Graphics",projectDates:"2025",mediaLink:"_project-links/trimmed-loop_ddr-melee.mp4",cardLink:"../indProjects/projDDRMelee",errorText:void 0},{projectTitle:"Looping Animations",projectDates:"2020-2024",mediaLink:"_project-links/trimmed-loop_insta-loops.mp4",cardLink:"../indProjects/projLoopAnim",errorText:void 0},{projectTitle:"Consumer Motion Graphics",projectDates:"2018-2025",mediaLink:"_project-links/trimmed-loops_mogr-ui_001.mp4",cardLink:"../indProjects/projConsumerMotion",errorText:void 0},{projectTitle:"Medical Motion and UI",projectDates:"2018-2025",mediaLink:"_project-links/trimmed-loops_med-ui_001.mp4",cardLink:"../indProjects/projMedUI",errorText:void 0},{projectTitle:"Concept App Designs",projectDates:"2018-2020",mediaLink:"_project-links/trimmed-loop_bankapp.mp4",cardLink:"../indProjects/projConceptApps",errorText:void 0}];function a(){return(0,o.jsx)(n.K,{overflowStyle:"overflow-y-scroll",children:(0,o.jsx)(i.Y,{dataArray:l})})}},46457:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[9856,1616,169,7084,8441,1517,7358],()=>t(85871)),_N_E=e.O()}]);