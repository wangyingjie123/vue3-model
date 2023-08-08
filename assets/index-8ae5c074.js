import{n as D,m as E,o as L,p as W,q as G,g as K,r as Q,t as X,h as Y,v as Z,i as ee,w as ae}from"./vendor-43fb942a.js";import{d as k,b as u,m as V,q as R,O as a,R as e,t as s,V as b,P as $,ai as x,aj as T,r as te,j as oe,J as ne}from"./@vue-30559afa.js";import{_ as P}from"./index-da74f1ba.js";import{_ as le}from"./console-form.vue_vue_type_script_setup_true_lang-3af08165.js";const se=async i=>{try{if(navigator.clipboard)navigator.clipboard.writeText(i);else{const r=document.createElement("textarea");document.body.appendChild(r),r.style.position="fixed",r.style.clip="rect(0 0 0 0)",r.style.top="10px",r.value=i,r.select(),document.execCommand("copy",!0),document.body.removeChild(r)}D.success("复制成功")}catch{D.error("复制失败")}},S=i=>(x("data-v-483e5b80"),i=i(),T(),i),re={class:"card-header"},ce={class:"card-header__title"},de=S(()=>s("h3",null,"用户1操作区",-1)),ie=S(()=>s("p",{class:"margin-top-10"},"点击create offer，生成SDP offer，把下面生成的offer复制给用户2",-1)),ue=S(()=>s("div",{class:"card-header"},[s("div",{class:"card-header__title"},[s("h3",null,"用户2操作区")]),s("p",{class:"margin-top-10"}," 将上方用户1生成的offer粘贴到下方，点击create answer生成SDP answer，然后将生成的答案复制给下方用户1 ")],-1)),pe=S(()=>s("div",{class:"card-header"},[s("div",{class:"card-header__title"},[s("h3",null,"用户1操作区")]),s("p",{class:"margin-top-10"},"将用户2生成的SDP answer粘贴到下方，然后点击add answer")],-1)),fe=k({__name:"offer-form",props:{localOffer:{},remoteAnswer:{}},emits:["createOffer","createAnswer","addAnswer"],setup(i,{emit:r}){const v=u(""),c=u(""),t=_=>{se(_)};return(_,n)=>{const m=E,w=L,h=W;return V(),R($,null,[a(h,{shadow:"always"},{header:e(()=>[s("div",re,[s("div",ce,[de,a(m,{type:"primary",onClick:n[0]||(n[0]=p=>r("createOffer"))},{default:e(()=>[b("create offer")]),_:1})]),ie])]),default:e(()=>[a(w,{value:_.localOffer,disabled:"",placeholder:"点击上方create offer",class:"input-with-select"},{append:e(()=>[a(m,{onClick:n[1]||(n[1]=p=>t(_.localOffer)),disabled:!_.localOffer},{default:e(()=>[b("复制")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),a(h,{shadow:"always",class:"margin-top-10"},{header:e(()=>[ue]),default:e(()=>[a(w,{placeholder:"请粘贴用户1 SDP offer",modelValue:v.value,"onUpdate:modelValue":n[3]||(n[3]=p=>v.value=p),clearable:"",class:"input-with-select"},{append:e(()=>[a(m,{disabled:!v.value,onClick:n[2]||(n[2]=p=>r("createAnswer",v.value))},{default:e(()=>[b("create answer")]),_:1},8,["disabled"])]),_:1},8,["modelValue"]),a(w,{placeholder:"SDP answer",value:_.remoteAnswer,disabled:"",class:"margin-top-10"},{append:e(()=>[a(m,{onClick:n[4]||(n[4]=p=>t(_.remoteAnswer)),disabled:!_.remoteAnswer},{default:e(()=>[b("复制")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),a(h,{shadow:"always",class:"margin-top-10"},{header:e(()=>[pe]),default:e(()=>[a(w,{placeholder:"请粘贴用户2 SDP answer",modelValue:c.value,"onUpdate:modelValue":n[6]||(n[6]=p=>c.value=p),clearable:"",class:"input-with-select"},{append:e(()=>[a(m,{onClick:n[5]||(n[5]=p=>r("addAnswer",c.value)),disabled:!c.value},{default:e(()=>[b("add answer")]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})],64)}}});const _e=P(fe,[["__scopeId","data-v-483e5b80"]]),I=i=>(x("data-v-473fc425"),i=i(),T(),i),me=I(()=>s("h2",{class:"p2p-subtitle margin-bottom-10"},"本地摄像头",-1)),ve=I(()=>s("h2",{class:"p2p-subtitle margin-bottom-10"},"用户2摄像头",-1)),we=k({__name:"index",setup(i){const r=u(),v=u(),c=u(new MediaStream),t=u(new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19301"}]})),_=u(t.value.createDataChannel("message")),n=u(),m=u(""),w=u(""),h=u(!1),p=u(!0),A=te({audio:!1,video:!0}),N=async()=>{const o=r.value,l=v.value;c.value=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!0}),o.srcObject=c.value,c.value.getTracks().forEach(d=>{t.value.addTrack(d,c.value)}),c.value.getAudioTracks().forEach(d=>{const f=`Audio Sample Rate: ${d.getSettings().sampleRate} Hz | Channels: ${d.getSettings().channelCount}`;console.log(f),d.enabled=!1}),t.value.ondatachannel=d=>{D.success("建立连接"),p.value=!1;const f=d.channel;f.onopen=()=>{f.send("建立连接!")},f.onmessage=g=>{var C;console.log(g.data),(C=n.value)==null||C.writeInfo(`接收到的指令：${g.data}`)}};const y=new MediaStream;t.value.ontrack=d=>{d.streams[0].getTracks().forEach(f=>{y.addTrack(f)}),l.srcObject=y}},M=async()=>{const o=await t.value.createOffer();await t.value.setLocalDescription(o),t.value.onicecandidate=async l=>{l.candidate&&(m.value=JSON.stringify(t.value.localDescription))}},J=async o=>{if(!o)return;const l=JSON.parse(o);t.value.onicecandidate=async d=>{if(d.candidate){const f=JSON.stringify(t.value.localDescription);w.value=f}},await t.value.setRemoteDescription(l);const y=await t.value.createAnswer();await t.value.setLocalDescription(y)},U=async o=>{if(!o)return;const l=JSON.parse(o);t.value.currentRemoteDescription||t.value.setRemoteDescription(l)},j=o=>{A.audio=o,c.value.getAudioTracks().forEach(l=>{l.enabled=o})},B=o=>{A.video=o,c.value.getVideoTracks().forEach(l=>{l.enabled=o})};return oe(()=>{N()}),ne(()=>{c.value.getTracks().forEach(o=>{o.stop()}),t.value.close()}),(o,l)=>{const y=G,d=E,f=K,g=Q,C=X,F=Y,H=Z,q=ee,z=ae;return V(),R($,null,[a(q,{class:"p2p-main"},{default:e(()=>[a(f,{class:"p2p-header"},{default:e(()=>[a(y,{type:"warning",size:"large"},{default:e(()=>[b("Webrtc-P2P通话")]),_:1}),a(d,{onClick:l[0]||(l[0]=O=>h.value=!0),type:"primary"},{default:e(()=>[b("打开操作面板")]),_:1})]),_:1}),a(F,null,{default:e(()=>[a(C,null,{default:e(()=>[a(g,{span:12,class:"p2p-video"},{default:e(()=>[me,s("video",{class:"p2p-video__dom",ref_key:"localRef",ref:r,autoplay:"",playsinline:"",muted:""},null,512)]),_:1}),a(g,{span:12,class:"p2p-video"},{default:e(()=>[ve,s("video",{class:"p2p-video__dom",ref_key:"remoteRef",ref:v,autoplay:"",playsinline:""},null,512)]),_:1})]),_:1})]),_:1}),a(H,null,{default:e(()=>[a(le,{localStream:c.value,peerConnection:t.value,dataChannel:_.value,btnDiabled:p.value,mediaDevices:A,experiment:!0,onHandleAudio:j,onHandleVideo:B,ref_key:"consoleRef",ref:n},null,8,["localStream","peerConnection","dataChannel","btnDiabled","mediaDevices"])]),_:1})]),_:1}),a(z,{modelValue:h.value,"onUpdate:modelValue":l[1]||(l[1]=O=>h.value=O),title:"本地操作区域-打开2个tab页"},{default:e(()=>[a(_e,{localOffer:m.value,remoteAnswer:w.value,onCreateOffer:M,onCreateAnswer:J,onAddAnswer:U},null,8,["localOffer","remoteAnswer"])]),_:1},8,["modelValue"])],64)}}});const Ce=P(we,[["__scopeId","data-v-473fc425"]]);export{Ce as default};