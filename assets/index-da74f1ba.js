import{ac as k,m as c,S as h,d as b,b as x,j as V,q as g,O as p,R as s,X as S,w as C,V as E,a7 as O,P as w,W as R,ae as j}from"./@vue-30559afa.js";import{E as N,b as $,c as B,u as M,d as q,e as H,f as U,g as W,h as z,i as F,j as K,k as X}from"./vendor-43fb942a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const I=(u,r)=>{const o=u.__vccOpts||u;for(const[a,t]of r)o[a]=t;return o},G={};function J(u,r){const o=k("router-view");return c(),h(o)}const Q=I(G,[["render",J]]),Y="modulepreload",Z=function(u,r){return new URL(u,r).href},P={},i=function(r,o,a){if(!o||o.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=Z(e,a),e in P)return;P[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!a)for(let d=t.length-1;d>=0;d--){const m=t[d];if(m.href===e&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const _=document.createElement("link");if(_.rel=n?"stylesheet":Y,n||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),n)return new Promise((d,m)=>{_.addEventListener("load",d),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},ee={class:"inner"},te=b({__name:"index",setup(u){const r=x(new Date),o=x(!0);return V(()=>{setTimeout(()=>{o.value=!1},2e3)}),(a,t)=>{const e=N,n=$,f=B;return c(),g("div",ee,[p(e,{animated:"",loading:o.value},null,8,["loading"]),p(e,{style:{"--el-skeleton-circle-size":"100px"},animated:"",loading:o.value},{template:s(()=>[p(n,{variant:"circle"})]),_:1},8,["loading"]),o.value?S("",!0):(c(),h(f,{key:0,modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=v=>r.value=v)},null,8,["modelValue"]))])}}}),oe=b({__name:"index",setup(u){const r=x(A),o=x("/"),a=M();return V(()=>{o.value=a.currentRoute.value.path}),C(()=>a.currentRoute.value,t=>{o.value=t.path}),(t,e)=>{const n=q,f=H,v=U,_=W,d=k("router-view"),m=z,D=F;return c(),h(D,{class:"layout-container"},{default:s(()=>[p(_,null,{default:s(()=>[p(v,{"default-active":o.value,mode:"horizontal",router:""},{default:s(()=>[p(n,{index:"/"},{default:s(()=>[E("首页")]),_:1}),(c(!0),g(w,null,O(r.value.filter(l=>l.title),l=>(c(),g(w,{key:l.path},[l.children?(c(),h(f,{key:1,class:"ai-person",index:l.path},{title:s(()=>[E(R(l.title),1)]),default:s(()=>[(c(!0),g(w,null,O(l.children,L=>(c(),h(n,{key:L.path,index:`${l.path}/${L.path}`},{default:s(()=>[E(R(L.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(c(),h(n,{key:0,index:l.path},{default:s(()=>[E(R(l.title),1)]),_:2},1032,["index"]))],64))),128))]),_:1},8,["default-active"])]),_:1}),p(m,null,{default:s(()=>[p(d)]),_:1})]),_:1})}}});const y=I(oe,[["__scopeId","data-v-ab447833"]]),A=[{path:"/",component:y,children:[{path:"",component:te,title:"首页"}]},{path:"/webrtc",title:"webrtc",component:y,children:[{path:"local",component:()=>i(()=>import("./index-0a745ea2.js"),["./index-0a745ea2.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./index-0161a940.css"],import.meta.url),title:"本地媒体获取"},{path:"p2p",component:()=>i(()=>import("./index-8ae5c074.js"),["./index-8ae5c074.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./console-form.vue_vue_type_script_setup_true_lang-3af08165.js","./index-54bceb34.css"],import.meta.url),title:"手动创建会话"},{path:"p2p-remote",component:()=>i(()=>import("./single-remote-c1a2edfe.js"),["./single-remote-c1a2edfe.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./console-form.vue_vue_type_script_setup_true_lang-3af08165.js","./single-remote-593cba00.css"],import.meta.url),title:"加入房间自动创建会话"},{path:"rtc-player",component:()=>i(()=>import("./index-727033d0.js"),["./index-727033d0.js","./@vue-30559afa.js"],import.meta.url),title:"webrtc播放视频流"}]},{path:"/three",title:"threejs",children:[{path:"tesla-3d",component:()=>i(()=>import("./tesla-model-98cc6ef1.js"),["./tesla-model-98cc6ef1.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./three-8c3f73fe.js","./tesla-model-f50ac082.css"],import.meta.url),title:"threejs-特斯拉"},{path:"home-3d",component:()=>i(()=>import("./home-3d-b96d3b2e.js"),["./home-3d-b96d3b2e.js","./three-8c3f73fe.js","./@vue-30559afa.js","./vendor-43fb942a.js","./vendor-5bf9ec11.css","./home-3d-aee1603c.css"],import.meta.url),title:"threejs-全景房屋"},{path:"home-view",component:()=>i(()=>import("./home-view-88a98fd6.js"),["./home-view-88a98fd6.js","./@vue-30559afa.js","./three-8c3f73fe.js","./vendor-43fb942a.js","./vendor-5bf9ec11.css","./home-view-01ce6edb.css"],import.meta.url),title:"threejs-房屋预览"},{path:"cyberpunk-3d",component:()=>i(()=>import("./cyberpunk-dd90e902.js"),["./cyberpunk-dd90e902.js","./three-8c3f73fe.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./cyberpunk-61c0280c.css"],import.meta.url),title:"threejs-赛博朋克"}]},{path:"/h265-player",title:"h265播放器",component:y,children:[{path:"gold-player",component:()=>i(()=>import("./index-306c6f3c.js"),["./index-306c6f3c.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./index-9a9e48d1.css"],import.meta.url),title:"h265播放器"}]},{path:"/ai-algorithm",title:"人物防遮挡",component:y,children:[{path:"body-noblock",component:()=>i(()=>import("./index-3b3a85c6.js"),["./index-3b3a85c6.js","./vendor-43fb942a.js","./@vue-30559afa.js","./vendor-5bf9ec11.css","./tensorflow-a52e5563.js","./index-3e542fed.css"],import.meta.url),title:"人物防遮挡"}]}],ne=K({history:X(),routes:A}),T=j(Q);T.use(ne);T.mount("#app");export{I as _};