/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  export default component;
}
declare module 'element-plus';
declare module 'goldvideo-player';
declare interface Window {
  JSWebrtc: any;
}
