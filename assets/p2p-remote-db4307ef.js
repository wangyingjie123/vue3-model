import{n as _,x as R,r as B,t as A,o as j,m as J}from"./vendor-8b414e32.js";import{d as K,a as I,f as L,l as U,m as $,M as c,Q as l,q as r,ak as q,U as w,V as S,ai as P,aj as Q}from"./@vue-8492d132.js";import{_ as z}from"./index-17f5d053.js";const f=v=>(P("data-v-e9232af9"),v=v(),Q(),v),F={class:"p2p-container"},G=f(()=>r("div",{class:"remote-video margin-top-10"},[r("video",{id:"remote-video",class:"remote-video__dom",autoplay:"",playsinline:""})],-1)),H=f(()=>r("div",{class:"video-title"},"远程视频",-1)),W=f(()=>r("div",{class:"local-video"},[r("video",{id:"local",class:"local-video__dom",autoplay:"",playsinline:""})],-1)),X=f(()=>r("div",{class:"video-title"},"我",-1)),Y={class:"operation"},Z=f(()=>r("label",{class:"operation-label"},"房间号：",-1)),ee=K({__name:"p2p-remote",setup(v){const t=new RTCPeerConnection({iceServers:[{urls:"stun:stun.voipbuster.com"}]}),i=Math.random().toString(36).substring(2),a=I("");let o,d,h,p="";function k(){if(!a.value){_.error("请输入房间号");return}o=R("https://10.1.60.61:3333"),o.on("connect",()=>{C()}),o.on("disconnect",e=>{e==="io server disconnect"&&o.connect(),_.warning("您已断开连接")}),o.on("error",e=>{_.error(e)}),o.on("welcome",e=>{_.success(e.userId===i?"🦄成功加入房间":`🦄${e.userId}加入房间`)}),o.on("leave",e=>{_.warning(e.userId===i?"🦄成功离开房间":`🦄${e.userId}离开房间`)}),o.on("message",e=>{console.log(e)}),o.on("createOffer",()=>{if(p){o.emit("offer",{userId:i,roomId:a.value,sdp:p});return}O()}),o.on("offer",e=>{V(e.sdp)}),o.on("answer",e=>{b(e.sdp)})}function C(){o.emit("join",{userId:i,roomId:a.value})}const E=async()=>{const e=document.getElementById("local"),n=document.getElementById("remote-video");d=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),h=new MediaStream,e.srcObject=d,n.srcObject=h,d.getTracks().forEach(s=>{t.addTrack(s,d)}),t.ontrack=s=>{s.streams[0].getTracks().forEach(m=>{h.addTrack(m)})}};async function O(){t.onicecandidate=async e=>{e.candidate&&(p=JSON.stringify(t.localDescription),p&&o.emit("offer",{userId:i,roomId:a.value,sdp:p}))};try{const e=await t.createOffer();await t.setLocalDescription(e)}catch(e){console.log(e)}}async function V(e){const n=JSON.parse(e);t.onicecandidate=async m=>{m.candidate&&o.emit("answer",{userId:i,roomId:a.value,sdp:JSON.stringify(t.localDescription)})},await t.setRemoteDescription(n);const s=await t.createAnswer();await t.setLocalDescription(s)}async function b(e){const n=JSON.parse(e);t.currentRemoteDescription||t.setRemoteDescription(n)}const u=I(!0);function x(){u.value=!u.value,d.getVideoTracks().forEach(e=>{e.enabled=u.value})}const y=I(!0);function D(){d.getAudioTracks().forEach(e=>{e.stop()}),y.value=!y.value}function T(){t.close(),o.emit("leave",{userId:i,roomId:a.value}),o.disconnect()}return L(()=>{E()}),(e,n)=>{const s=B,m=A,M=j,g=J;return U(),$("div",F,[c(m,{class:"p2p-container__row"},{default:l(()=>[c(s,{span:17,class:"remote__left"},{default:l(()=>[G,H]),_:1}),c(s,{span:7,class:"local__right"},{default:l(()=>[W,X]),_:1})]),_:1}),r("div",Y,[Z,c(M,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=N=>a.value=N),style:{width:"150px","margin-right":"20px"},placeholder:"要加入的房间号",clearable:"",onKeyup:q(k,["enter"])},null,8,["modelValue","onKeyup"]),c(g,{type:"primary",onClick:k},{default:l(()=>[w("加入")]),_:1}),c(g,{type:y.value?"warning":"primary",onClick:D},{default:l(()=>[w(S(y.value?"关闭":"打开")+"麦克风 ",1)]),_:1},8,["type"]),c(g,{type:u.value?"warning":"primary",onClick:x},{default:l(()=>[w(S(u.value?"关闭":"打开")+"视频",1)]),_:1},8,["type"]),c(g,{type:"danger",onClick:T},{default:l(()=>[w("离开")]),_:1})])])}}});const ne=z(ee,[["__scopeId","data-v-e9232af9"]]);export{ne as default};
