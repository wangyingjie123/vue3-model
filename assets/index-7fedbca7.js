import{d as a,a as c,b as l,o as i,e as d,z as u}from"./vendor-62a7e91c.js";const p=(s,e)=>new Promise(o=>{if(!s)return o("empty");const n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",e&&Object.keys(e).forEach(r=>{t.setAttribute(r,e[r])}),t.onload=t.onerror=function(r){o(r),this.onload=null,this.onerror=null},t.src=s,n.appendChild(t)}),f=a({__name:"index",setup(s){const e=c();return l(()=>{p("/js/jswebrtc.min.js").then(()=>{const{JSWebrtc:o}=window,n="webrtc://r.ossrs.net/live/livestream";new o.Player(n,{video:e.value,autoplay:!0,onPlay:()=>{console.log("start play")}})})}),(o,n)=>(i(),d("div",null,[u("video",{ref_key:"video",ref:e,controls:"",muted:"",width:"640"},null,512)]))}});export{f as default};