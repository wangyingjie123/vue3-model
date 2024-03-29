import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/index.vue';
import Layout from '@/layout/index.vue';

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '', component: Home, title: '首页' }],
  },
  {
    path: '/webrtc',
    title: 'webrtc',
    component: Layout,
    children: [
      { path: 'local', component: () => import('@/pages/webrtc-local/index.vue'), title: '本地媒体获取' },
      { path: 'p2p', component: () => import('@/pages/webrtc-p2p/index.vue'), title: '手动创建会话' },
      {
        path: 'p2p-remote',
        component: () => import('@/pages/webrtc-p2p/single-remote.vue'),
        title: '加入房间自动创建会话',
      },
      { path: 'rtc-player', component: () => import('@/pages/webrtc-player/index.vue'), title: 'webrtc播放视频流' },
    ],
  },
  {
    path: '/three',
    title: 'threejs',
    children: [
      { path: 'tesla-3d', component: () => import('@/pages/three-model/tesla-model.vue'), title: 'threejs-特斯拉' },
      { path: 'home-3d', component: () => import('@/pages/three-model/home-3d.vue'), title: 'threejs-全景房屋' },
      { path: 'home-view', component: () => import('@/pages/three-model/home-view.vue'), title: 'threejs-房屋预览' },
      { path: 'cyberpunk-3d', component: () => import('@/pages/three-model/cyberpunk.vue'), title: 'threejs-赛博朋克' },
    ],
  },
  {
    path: '/h265-player',
    title: 'h265播放器',
    component: Layout,
    children: [{ path: 'gold-player', component: () => import('@/pages/h265-player/index.vue'), title: 'h265播放器' }],
  },
  {
    path: '/ai-algorithm',
    title: '人物防遮挡',
    component: Layout,
    children: [
      { path: 'body-noblock', component: () => import('@/pages/danmu-noblock/index.vue'), title: '人物防遮挡' },
    ],
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
