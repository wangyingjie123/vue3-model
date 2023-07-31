var B=Object.defineProperty;var A=(c,e,s)=>e in c?B(c,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[e]=s;var i=(c,e,s)=>(A(c,typeof e!="symbol"?e+"":e,s),s);import{n as w,r as J,t as W,o as j,m as H,p as K}from"./vendor-bd744d8f.js";import{d as L,b as h,r as U,j as q,J as z,m as P,q as Z,O as l,R as d,ak as F,V as T,ai as G,aj as Q,t as u}from"./@vue-30559afa.js";import{_ as X}from"./console-form.vue_vue_type_script_setup_true_lang-76aee368.js";import{_ as Y}from"./index-48ddccae.js";class ee{constructor({onMessageCallback:e,wsuri:s,maxReconnectCount:r,onOpenCallback:p}){i(this,"heartbeatStr","ping");i(this,"onMessageCallback");i(this,"wsuri","");i(this,"maxReconnectCount",5);i(this,"onOpenCallback");i(this,"pingCount",0);i(this,"websocket",null);i(this,"connectRetryCount",0);i(this,"timeoutnum");i(this,"heartbeat");this.onMessageCallback=e,this.wsuri=s,this.maxReconnectCount=r??this.maxReconnectCount,this.onOpenCallback=p,this.initWebsocket()}initWebsocket(){this.websocket=new WebSocket(this.wsuri),this.websocket.onmessage=this.onMessage.bind(this),this.websocket.onopen=this.onOpen.bind(this),this.websocket.onerror=this.onError.bind(this),this.websocket.onclose=this.onClose.bind(this)}onMessage(e){e.data!==this.heartbeatStr&&this.onMessageCallback(e.data)}onOpen(){var e;this.connectRetryCount=0,console.log("websocket建立连接"),(e=this.onOpenCallback)==null||e.call(this)}send(e){this.websocket.send(e)}onClose(){console.log("websocket连接关闭")}onError(e){this.reconnect(),console.error("websocket出现错误",e.target)}sendHeart(){this.heartbeat&&clearTimeout(this.heartbeat),this.heartbeat=setTimeout(()=>{var e;if(((e=this.websocket)==null?void 0:e.readyState)==1){const s={type:this.heartbeat,payload:`${this.pingCount}`};this.send(JSON.stringify(s)),this.pingCount++}else this.reconnect()},1e3)}reconnect(){if(this.connectRetryCount>=this.maxReconnectCount){this.timeoutnum&&clearTimeout(this.timeoutnum);return}this.timeoutnum&&clearTimeout(this.timeoutnum),console.log(`尝试重新连接-第 ${this.connectRetryCount+1}次`),this.timeoutnum=setTimeout(()=>{this.initWebsocket(),this.connectRetryCount+=1},1e4)}destory(){var e;(e=this.websocket)==null||e.close(),this.heartbeat&&clearTimeout(this.heartbeat),this.timeoutnum&&clearTimeout(this.timeoutnum)}}const C=c=>(G("data-v-6292415d"),c=c(),Q(),c),te={class:"p2p-container"},oe=C(()=>u("div",{class:"video-container"},[u("video",{id:"remote-video",class:"video-dom",autoplay:"",playsinline:""}),u("div",{class:"video-title"},"远程视频")],-1)),ae=C(()=>u("div",{class:"video-container"},[u("video",{id:"local-video",class:"video-dom",autoplay:"",playsinline:""}),u("div",{class:"video-title"},"本地视频")],-1)),ne=C(()=>u("label",{class:"operation-label"},"连接地址：",-1)),se=L({__name:"single-remote",setup(c){const e=h(null),s=h(null),r=h(new MediaStream),p=h(),v=h(""),m=h(!0),y=U({audio:!0,video:!0});let b,_;const x=a=>{try{const t=JSON.parse(a);if(console.log("服务端推送：",t),t.type==="answer"){const o=new RTCSessionDescription(t.payload);V(o)}else t.type==="candidate"&&M(new RTCIceCandidate(t.payload))}catch(t){console.error(t)}},k=()=>{const a=/^(ws:\/\/|wss:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/,t=v.value.trim();if(!a.test(t)){w.error("请输入正确的websocket地址");return}b=new ee({wsuri:t,onMessageCallback:x,onOpenCallback:()=>{O(),I()}}),v.value=""},E=async()=>{try{const a=document.getElementById("local-video");r.value=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!0}),a.srcObject=r.value,S(!1)}catch(a){w.error(`获取本地媒体流失败：${a}`)}},O=()=>{const a=document.getElementById("remote-video");e.value=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),s.value=e.value.createDataChannel("message",{ordered:!1,maxRetransmits:0}),r.value.getTracks().forEach(o=>{e.value.addTrack(o,r.value)});const t=new MediaStream;e.value.ontrack=o=>{o.streams[0].getTracks().forEach(n=>{t.addTrack(n)}),a.srcObject=t},e.value.oniceconnectionstatechange=()=>{var n;const o=(n=e.value)==null?void 0:n.iceConnectionState;console.log("peerConnection 状态:",o),_&&window.clearTimeout(_),o==="connected"&&(w.success("webrtc连接已建立"),m.value=!1,b.destory()),(o==="disconnected"||o==="failed")&&(_=window.setTimeout(()=>f(),3e4)),o==="closed"&&f()},s.value.onmessage=o=>{var n;(n=p.value)==null||n.writeInfo(`接收到的指令：${o.data}`)},e.value.ondatachannel=o=>{const n=o.channel;n.onopen=()=>{n.send("webrtc连接已建立!")},n.onmessage=g=>{console.log(g.data)}}};async function I(){var a,t;e.value.onicecandidate=async o=>{o.candidate&&b.send(JSON.stringify({type:"candidate",payload:o.candidate}))};try{const o=await((a=e.value)==null?void 0:a.createOffer());await((t=e.value)==null?void 0:t.setLocalDescription(o)),b.send(JSON.stringify({type:"offer",payload:o}))}catch(o){console.error(o)}}async function V(a){var t;try{await((t=e.value)==null?void 0:t.setRemoteDescription(a))}catch(o){console.error(o)}}async function M(a){var t;try{await((t=e.value)==null?void 0:t.addIceCandidate(a))}catch{}}const S=a=>{y.audio=a,r.value.getAudioTracks().forEach(t=>{t.enabled=a})},D=a=>{y.video=a,r.value.getVideoTracks().forEach(t=>{t.enabled=a})};function f(){var a,t;w.error("webrtc连接已断开"),m.value=!0,(a=e.value)==null||a.close(),(t=p.value)==null||t.reduction()}return q(()=>{E()}),z(()=>{clearTimeout(_),f()}),(a,t)=>{const o=J,n=W,g=j,R=H,N=K;return P(),Z("div",te,[l(n,{class:"p2p-container__row"},{default:d(()=>[l(o,{span:12},{default:d(()=>[oe]),_:1}),l(o,{span:12},{default:d(()=>[ae]),_:1})]),_:1}),l(n,{class:"operation"},{default:d(()=>[l(o,{span:24,class:"margin-bottom-10"},{default:d(()=>[l(N,{class:"box-card"},{default:d(()=>[ne,l(g,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=$=>v.value=$),disabled:!m.value,style:{width:"200px","margin-right":"10px"},placeholder:"请输入完整wesocket地址",clearable:"",onKeyup:F(k,["enter"])},null,8,["modelValue","disabled","onKeyup"]),l(R,{type:"primary",onClick:k,disabled:!m.value},{default:d(()=>[T("加入")]),_:1},8,["disabled"]),l(R,{type:"danger",onClick:f,disabled:m.value},{default:d(()=>[T("关闭连接")]),_:1},8,["disabled"])]),_:1})]),_:1}),l(o,{span:24},{default:d(()=>[l(X,{localStream:r.value,peerConnection:e.value,dataChannel:s.value,btnDiabled:m.value,mediaDevices:y,experiment:!1,onHandleAudio:S,onHandleVideo:D,ref_key:"consoleRef",ref:p},null,8,["localStream","peerConnection","dataChannel","btnDiabled","mediaDevices"])]),_:1})]),_:1})])}}});const ue=Y(se,[["__scopeId","data-v-6292415d"]]);export{ue as default};
