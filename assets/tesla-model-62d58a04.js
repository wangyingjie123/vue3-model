import{m as j}from"./vendor-3df4b7f5.js";import{G as Z,P as $,M as J,a as K,D as Q,b as X,H as Y,c as ee,S as te,d as oe,W as ne,O as se,C as ae}from"./three-ffe0f610.js";import{_ as re}from"./index-86263c6d.js";import{r as ie,I as le,a as w,f as ce,H as de,l as v,m as b,q as n,S as z,U as u,V as me,u as y,L as H,P,M as F,a5 as fe,T as I}from"./@vue-c739fbfa.js";const _e={key:0,class:"loading"},ue={class:"loading-inner"},pe={class:"margin-left-10"},ge={class:"mask"},he={class:"margin-bottom-10"},we={class:"mask-flex"},ve=["onClick"],be={__name:"tesla-model",setup(ye){const x=["rgb(142, 36, 170)","rgb(81, 45, 168)","rgb(48, 63, 159)","rgb(251, 140, 0)","rgb(244, 81, 30)","rgb(66, 165, 245)","rgb(38, 166, 154)","rgb(129, 199, 132)","rgb(255, 235, 59)","rgb(90, 90, 90)","rgb(22, 22, 22)","rgb(0, 0, 0)"],E=new Z,C={x:510,y:128,z:0},d=ie(C),{x:N,y:S,z:W}=le(d);let r,o,l,i,m,f,_;const L=w(!0),p=w(0),M=w(),A=()=>{const t=new $(5e3,5e3,1,1.1),s=new J({color:7860879});m=new K(t,s),m.rotation.x=-.5*Math.PI,m.position.y=-2.1,r.add(m)},G=()=>{f=new Q(16777215,.5),f.position.set(-4,8,4),new X(f,5,16711680),_=new Y(16777215,16777215,.4),_.position.set(0,8,0),new ee(_,5),r.add(f),r.add(_)},R=()=>{const{x:t,y:s,z:e}=C;r=new te,o=new oe(60,innerWidth/innerHeight,1,1e3),o.position.set(t,s,e),l=new ne,l.setSize(innerWidth,innerHeight),M.value.appendChild(l.domElement)},V=()=>{i=new se(o,l.domElement),i.maxPolarAngle=.9*Math.PI/2,i.enableZoom=!0,i.addEventListener("change",q)},B=async()=>{const t=await U("/tesla_2018_model_3/scene.gltf");R(),G(),console.log(A),V(),r.add(t.scene),g()},g=()=>{window.requestAnimationFrame(g),l.render(r,o),i.update()},D=()=>{i.autoRotate=!0},T=()=>{i.autoRotate=!1},q=()=>{d.x=Number.parseInt(o.position.x),d.y=Number.parseInt(o.position.y),d.z=Number.parseInt(o.position.z)},O=t=>{const s=new ae(x[t]);r.traverse(e=>{e.isMesh&&(console.log(e.name),e.name.includes("door_")&&e.material.color.set(s))})},U=t=>new Promise((s,e)=>{E.load(t,a=>{s(a)},({loaded:a,total:c})=>{const h=Math.abs(a/c*100);p.value=h,h>=100&&setTimeout(()=>{L.value=!1},1e3),console.log(a/c*100+"% loaded")},a=>{e(a)})}),k=()=>{l.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()};return ce(()=>{B(),window.addEventListener("resize",k)}),de(()=>{window.removeEventListener("resize",k),window.cancelAnimationFrame(g)}),(t,s)=>{const e=j;return v(),b(F,null,[L.value?(v(),b("div",_e,[n("div",ue,[n("div",{class:"loading-inner__item",style:z({width:p.value+"%"})},null,4)]),n("div",pe,u(parseInt(p.value))+"%",1)])):me("",!0),n("div",ge,[n("p",he,"x : "+u(y(N))+" y:"+u(y(S))+" z :"+u(y(W)),1),n("div",null,[H(e,{onClick:D,type:"primary"},{default:P(()=>[I("转动车")]),_:1}),H(e,{onClick:T,type:"warning"},{default:P(()=>[I("停止")]),_:1})]),n("div",we,[(v(),b(F,null,fe(x,(a,c)=>n("div",{onClick:h=>O(c),class:"mask-flex__item",key:c,style:z({backgroundColor:a})},null,12,ve)),64))])]),n("div",{class:"canvas",ref_key:"canvas",ref:M},null,512)],64)}}},ke=re(be,[["__scopeId","data-v-8a740f6b"]]);export{ke as default};
