import{R as $,S as q,T as O,a as w,b as X,A as Y,o as v,e as b,z as o,U as M,t as u,g as J,V as y,f as F,w as H,F as P,k as K,y as Q,j as E,W as ee,X as te,Y as ne,Z as oe,_ as se,$ as ae,a0 as re,a1 as ie,a2 as le,a3 as ce,a4 as de,a5 as me}from"./vendor-62a7e91c.js";import{_ as fe}from"./index-b97f6eea.js";const _e={key:0,class:"loading"},ue={class:"loading-inner"},ge={class:"margin-left-10"},pe={class:"mask"},he={class:"margin-bottom-10"},we={class:"mask-flex"},ve=["onClick"],be={__name:"tesla-model",setup(ye){const x=["rgb(142, 36, 170)","rgb(81, 45, 168)","rgb(48, 63, 159)","rgb(251, 140, 0)","rgb(244, 81, 30)","rgb(66, 165, 245)","rgb(38, 166, 154)","rgb(129, 199, 132)","rgb(255, 235, 59)","rgb(90, 90, 90)","rgb(22, 22, 22)","rgb(0, 0, 0)"],I=new $,C={x:510,y:128,z:0},d=q(C),{x:N,y:W,z:A}=O(d);let r,n,l,i,m,f,_;const L=w(!0),g=w(0),k=w(),R=()=>{const t=new ee(5e3,5e3,1,1.1),s=new te({color:7860879});m=new ne(t,s),m.rotation.x=-.5*Math.PI,m.position.y=-2.1,r.add(m)},S=()=>{f=new oe(16777215,.5),f.position.set(-4,8,4),new se(f,5,16711680),_=new ae(16777215,16777215,.4),_.position.set(0,8,0),new re(_,5),r.add(f),r.add(_)},V=()=>{const{x:t,y:s,z:e}=C;r=new ie,n=new le(60,innerWidth/innerHeight,1,1e3),n.position.set(t,s,e),l=new ce,l.setSize(innerWidth,innerHeight),k.value.appendChild(l.domElement)},B=()=>{i=new de(n,l.domElement),i.maxPolarAngle=.9*Math.PI/2,i.enableZoom=!0,i.addEventListener("change",j)},G=async()=>{const t=await Z("/tesla_2018_model_3/scene.gltf");V(),S(),console.log(R),B(),r.add(t.scene),p()},p=()=>{window.requestAnimationFrame(p),l.render(r,n),i.update()},T=()=>{i.autoRotate=!0},D=()=>{i.autoRotate=!1},j=()=>{d.x=Number.parseInt(n.position.x),d.y=Number.parseInt(n.position.y),d.z=Number.parseInt(n.position.z)},U=t=>{const s=new me(x[t]);r.traverse(e=>{e.isMesh&&(console.log(e.name),e.name.includes("door_")&&e.material.color.set(s))})},Z=t=>new Promise((s,e)=>{I.load(t,a=>{s(a)},({loaded:a,total:c})=>{const h=Math.abs(a/c*100);g.value=h,h>=100&&setTimeout(()=>{L.value=!1},1e3),console.log(a/c*100+"% loaded")},a=>{e(a)})}),z=()=>{l.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()};return X(()=>{G(),window.addEventListener("resize",z)}),Y(()=>{window.removeEventListener("resize",z),window.cancelAnimationFrame(p)}),(t,s)=>{const e=Q;return v(),b(P,null,[L.value?(v(),b("div",_e,[o("div",ue,[o("div",{class:"loading-inner__item",style:M({width:g.value+"%"})},null,4)]),o("div",ge,u(parseInt(g.value))+"%",1)])):J("",!0),o("div",pe,[o("p",he,"x : "+u(y(N))+" y:"+u(y(W))+" z :"+u(y(A)),1),o("div",null,[F(e,{onClick:T,type:"primary"},{default:H(()=>[E("转动车")]),_:1}),F(e,{onClick:D,type:"warning"},{default:H(()=>[E("停止")]),_:1})]),o("div",we,[(v(),b(P,null,K(x,(a,c)=>o("div",{onClick:h=>U(c),class:"mask-flex__item",key:c,style:M({backgroundColor:a})},null,12,ve)),64))])]),o("div",{class:"canvas",ref_key:"canvas",ref:k},null,512)],64)}}},Le=fe(be,[["__scopeId","data-v-8a740f6b"]]);export{Le as default};
