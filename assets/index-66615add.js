import{m as V,o as N,U as P,V as $,W as A}from"./vendor-3df4b7f5.js";import{d as L,r as S,a as g,f as q,H as z,l as U,m as B,Y as W,q as D,L as d,P as f,T as F,U as H,aa as K,_ as j}from"./@vue-c739fbfa.js";import{S as O,k as Y,U as G}from"./tensorflow-488e9b64.js";import{_ as J}from"./index-1aa2b632.js";const Q=""+new URL("../video/dance.mp4",import.meta.url).href,X=(c,n=0,r=0)=>{if(c&&n&&r){const a=document.createElement("canvas"),l=a.getContext("2d");return a.width=n,a.height=r,l.drawImage(c,0,0,n,r),l.getImageData(0,0,n,r)}return null},Z=c=>{if(!c)return null;const{width:n,height:r}=c,a=document.createElement("canvas"),l=a.getContext("2d");return a.width=n,a.height=r,l.putImageData(c,0,0,0,0,n,r),a.toDataURL("image/png")},ee={class:"danmu"},te={class:"danmu-video","element-loading-text":"人物检测模型加载中... ","element-loading-background":"rgba(0, 0, 0, 0.7)"},ae=10,C=16,ne=4,oe=2,se=!1,re=.3,le=L({__name:"index",setup(c){const n=S({message:""}),r=g(!0),a=g(),l=g(),m=g(0),w=g(),b=new WeakMap;let u=0,x=0,_=0,v;const M=S({message:[{required:!0,message:"请输入一个弹幕",trigger:"change"}]}),k=async()=>{const e=X(a.value,u,x);if(e){const o={flipHorizontal:!1,multiSegmentaion:!1,segmentBodyParts:!1,segmentationThreshold:1},s=await(v==null?void 0:v.segmentPeople(e,o)),y=await G(s,{r:0,g:0,b:0,a:0},{r:0,g:0,b:0,a:255},se,re),p=Z(y);l.value.style["-webkit-mask-image"]=`url(${p})`,l.value.style["-webkit-mask-size"]=`${u}px ${x}px`}m.value===1&&(_=window.requestAnimationFrame(k))},h=e=>{const{left:o}=e.style,s=Number(o.replace("px",""));if(s>=-u){e.style.left=`${s-oe}px`;const i=window.requestAnimationFrame(()=>h(e));b.set(e,i);return}e&&(e.parentNode.removeChild(e),window.cancelAnimationFrame(b.get(e)),b.delete(e))},I=async()=>{var e;await((e=w.value)==null?void 0:e.validate((o,s)=>{var i;if(o){const t=document.createElement("span");t.innerText=n.message,t.style.fontSize=`${C}px`,t.style.fontWeight="500",t.style.color="#fff",t.style.whiteSpace="nowrap",t.style.position="absolute";const p=Math.floor(Math.random()*ae)*(C+ne)+C;t.style.top=`${p}px`,t.style.left=`${u}px`,l.value.appendChild(t),h(t),(i=w.value)==null||i.resetFields()}else console.log("error submit!",s)}))},R=()=>{const e=a.value;e.paused?(e.play(),m.value=1,k()):(e.pause(),m.value=2,window.cancelAnimationFrame(_))},T=async()=>{const e=O.MediaPipeSelfieSegmentation,o={runtime:"mediapipe",modelType:"landscape",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation"};try{v=await Y(e,o),r.value=!1;const{width:i,height:t}=a.value.getBoundingClientRect();u=i,x=t,k()}catch(s){console.log(s)}};return q(()=>T()),z(()=>{_&&window.cancelAnimationFrame(_)}),(e,o)=>{const s=V,i=N,t=P,y=$,p=A;return U(),B("div",ee,[W((U(),B("div",te,[D("video",{src:Q,class:"danmu-video-inner",preload:"true",ref_key:"videoRef",ref:a,loop:"","x5-video-player-fullscreen":"true","x5-playsinline":"true",playsInline:"","webkit-playsinline":"true",crossOrigin:"anonymous"},null,512),D("div",{class:"danmu-mask",ref_key:"barrageBoxRef",ref:l},null,512),d(s,{type:"primary",class:"danmu-video-btn",onClick:R},{default:f(()=>[F(H(m.value===1?"暂停":"播放"),1)]),_:1})])),[[p,r.value]]),d(y,{inline:!0,model:n,rules:M,disabled:r.value,ref_key:"ruleFormRef",ref:w,onSubmit:o[1]||(o[1]=j(()=>{},["stop","prevent"]))},{default:f(()=>[d(t,{label:"",prop:"message",class:"danmu-input"},{default:f(()=>[d(i,{modelValue:n.message,"onUpdate:modelValue":o[0]||(o[0]=E=>n.message=E),placeholder:"发送弹幕",onKeyup:K(I,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),d(t,null,{default:f(()=>[d(s,{type:"primary",onClick:I},{default:f(()=>[F("发送")]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])])}}});const ue=J(le,[["__scopeId","data-v-cc51b57c"]]);export{ue as default};