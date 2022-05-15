(()=>{"use strict";var e={6618:(e,t,r)=>{r(8964),r(702);var n=r(1957),o=r(1947),a=r(499),i=r(9835);function s(e,t,r,n,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(l,[["render",s]]),d=u;var p=r(3340),h=r(7363);const f=(0,p.h)((()=>{const e=(0,h.WB)();return e}));var m=r(8910);const b=[{path:"/",component:()=>Promise.all([r.e(736),r.e(237)]).then(r.bind(r,8237)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(57)]).then(r.bind(r,2057)),name:"index"},{path:"my_schedule",component:()=>Promise.all([r.e(736),r.e(524)]).then(r.bind(r,3524)),name:"my_schedule"},{path:"profile/:userId",component:()=>Promise.all([r.e(736),r.e(781)]).then(r.bind(r,2781)),name:"profile",props:!0},{path:"profile/:userId/services",component:()=>Promise.all([r.e(736),r.e(856)]).then(r.bind(r,3856)),name:"profile_services",props:!0},{path:"profile/:userId/reviews",component:()=>Promise.all([r.e(736),r.e(942)]).then(r.bind(r,7942)),name:"profile_reviews",props:!0},{path:"profile/:userId/achievements",component:()=>Promise.all([r.e(736),r.e(837)]).then(r.bind(r,8837)),name:"profile_achievements",props:!0}]},{path:"/login",component:()=>Promise.all([r.e(736),r.e(229)]).then(r.bind(r,4229)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(738)]).then(r.bind(r,7738)),name:"login"}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],v=b;var g=r(6144),y=r(4006);const w=(0,p.BC)((function(){const e=m.PO,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/")});return t.beforeEach((async(e,t,r)=>{const n=(0,g.L)();if(!n.isAuthenticated){const e=y.Z.get("username");e&&n.setRoles(e)}"login"===e.name||n.isAuthenticated?r():(y.Z.set("next",e.fullPath),r({name:"login"}))})),t}));async function P(e,t){const r=e(d);r.use(o.Z,t);const n="function"===typeof f?await f({}):f;r.use(n);const i=(0,a.Xl)("function"===typeof w?await w({store:n}):w);return n.use((({store:e})=>{e.router=i})),{app:r,store:n,router:i}}var O=r(6192);const k={config:{},plugins:{Notify:O.Z,Cookies:y.Z}},C="/";async function _({app:e,router:t,store:r},n){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:C})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}P(n.ri,k).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));_(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var n=r(3340),o=r(9981),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},6144:(e,t,r)=>{r.d(t,{L:()=>a});var n=r(7363),o=r(4006);const a=(0,n.Q_)("user",{state:()=>({username:null,student:!1,teacher:!1}),getters:{isAuthenticated(e){return!!e.username}},actions:{login(e,t){return"student"==e&&"student_888"==t?(this.setRoles("student"),o.Z.set("username",e),!0):"teacher"==e&&"teacher_123"==t&&(this.setRoles("teacher"),o.Z.set("username",e),!0)},setRoles(e){this.username=e,"student"==e?this.student=!0:"teacher"==e&&(this.student=!0,this.teacher=!0)}}})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{57:"a9e3191f",229:"71afab99",237:"6bfc58a4",524:"04f030b1",738:"a5102467",781:"9f2544b9",837:"26bab7b8",856:"ebcbcc57",862:"793c05d9",942:"2afc0242"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{57:"411a842e",143:"8f86c2c5",524:"cc7d70df",736:"4a61a2ea",781:"682c2134",837:"0734c228",856:"c103848c",942:"254465e1"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="becomebetter:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={57:1,524:1,781:1,837:1,856:1,942:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkbecomebetter"]=self["webpackChunkbecomebetter"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(6618)));n=r.O(n)})();