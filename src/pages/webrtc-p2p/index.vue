<template>
  <el-container class="p2p-main">
    <el-header class="p2p-header">
      <el-text type="warning" size="large">Webrtc-P2P通话</el-text>
      <el-button type="primary" @click="drawer = true">打开操作面板</el-button>
    </el-header>
    <el-main>
      <el-row>
        <!-- 给自己本地的视频播放设置静音，防止产生回音 -->
        <el-col :span="12" class="p2p-video">
          <h2 class="p2p-subtitle margin-bottom-10">本地摄像头</h2>
          <video ref="localRef" class="p2p-video__dom" autoplay playsinline muted></video>
        </el-col>
        <el-col :span="12" class="p2p-video">
          <h2 class="p2p-subtitle margin-bottom-10">用户2摄像头</h2>
          <video ref="remoteRef" class="p2p-video__dom" autoplay playsinline></video>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <ConsoleForm
        ref="consoleRef"
        :local-stream="localStream"
        :peer-connection="peerConnection"
        :data-channel="dataChannel"
        :btn-diabled="btnDiabled"
        :media-devices="mediaDevices"
        :experiment="true"
        @handle-audio="handleAudio"
        @handle-video="handleVideo"
      ></ConsoleForm>
    </el-footer>
  </el-container>
  <el-drawer v-model="drawer" title="本地操作区域-打开2个tab页">
    <OfferForm
      :local-offer="localOffer"
      :remote-answer="remoteAnswer"
      @create-offer="createOffer"
      @create-answer="createAnswer"
      @add-answer="addAnswer"
    ></OfferForm>
  </el-drawer>
</template>
<script setup lang="ts">
import 'webrtc-adapter';
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import OfferForm from './components/offer-form.vue';
import ConsoleForm from './components/console-form.vue';
const localRef = ref<HTMLVideoElement>();
const remoteRef = ref<HTMLVideoElement>();
// 创建本地/远程 SDP 描述, 用于描述本地/远程的媒体流
const localStream = ref<MediaStream>(new MediaStream());
const peerConnection = ref<RTCPeerConnection>(
  new RTCPeerConnection({
    iceServers: [
      // {
      //   urls: 'stun:172.16.40.202:3478',
      // },
      // {
      //   urls: 'stun:stun.voipbuster.com',
      // },
      {
        urls: 'stun:stun.l.google.com:19301',
      },
      // TURN 服务器,这个对服务器压力太大了，目前没找到免费的，后续我在自己的服务器上弄一个
      // {
      //   urls: 'turn:1.119.169.85:10042',
      //   username: 'webrtc',
      //   credential: 'turnserver',
      // },
    ],
  })
);
const dataChannel = ref<RTCDataChannel>(peerConnection.value.createDataChannel('message'));
const consoleRef = ref<{ writeInfo: (info: string) => void }>();
const localOffer = ref('');
const remoteAnswer = ref('');
const drawer = ref(false);
const btnDiabled = ref(true);

const mediaDevices = reactive<Record<'audio' | 'video', boolean>>({ audio: false, video: true });
// 初始化
const init = async () => {
  // 获取本地端视频标签
  const localVideo = localRef.value!;
  // 获取远程端视频标签
  const remoteVideo = remoteRef.value!;
  // 采集本地媒体流
  localStream.value = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
    audio: true,
  });
  // 设置本地视频流
  localVideo.srcObject = localStream.value;
  // 添加本地媒体流的轨道都添加到 RTCPeerConnection 中
  localStream.value.getTracks().forEach((track) => {
    peerConnection.value.addTrack(track, localStream.value);
  });
  // 先禁用音频
  localStream.value.getAudioTracks().forEach((track) => {
    const audiInfo = `Audio Sample Rate: ${track.getSettings().sampleRate} Hz | Channels: ${
      track.getSettings().channelCount
    }`;
    console.log(audiInfo);
    track.enabled = false;
  });
  // 监听文本信息
  peerConnection.value.ondatachannel = (event) => {
    ElMessage.success('建立连接');
    btnDiabled.value = false;
    const channel = event.channel;
    channel.onopen = () => {
      channel.send('建立连接!');
    };
    channel.onmessage = (event) => {
      console.log(event.data);
      consoleRef.value?.writeInfo(`接收到的指令：${event.data}`);
    };
  };
  // 监听远程流，方法一：
  // peerConnection.value.ontrack = (event) => {
  //   remoteVideo.srcObject = event.streams[0];
  // };
  // 方法二：你也可以使用 addStream API，来更加详细的控制流的添加
  const remoteStream: MediaStream = new MediaStream();
  peerConnection.value.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
    // 设置远程视频流
    remoteVideo.srcObject = remoteStream;
  };
};
const createOffer = async () => {
  // 创建 offer
  const offer = await peerConnection.value.createOffer();
  // 设置本地描述
  await peerConnection.value.setLocalDescription(offer);
  // 到这里，我们本地的 offer 就创建好了，一般在这里通过信令服务器发送 offerSdp 给远端
  // 监听 RTCPeerConnection 的 onicecandidate 事件，当 ICE 服务器返回一个新的候选地址时，就会触发该事件
  peerConnection.value.onicecandidate = async (event) => {
    if (!event.candidate) {
      return;
    }
    localOffer.value = JSON.stringify(peerConnection.value.localDescription);
  };
};
const createAnswer = async (localOffer: string) => {
  if (!localOffer) return;
  // 解析字符串
  const offer = JSON.parse(localOffer);
  peerConnection.value.onicecandidate = async (event) => {
    // Event that fires off when a new answer ICE candidate is created
    if (event.candidate) {
      const answer = JSON.stringify(peerConnection.value.localDescription);
      remoteAnswer.value = answer;
    }
  };
  await peerConnection.value.setRemoteDescription(offer);
  const answer = await peerConnection.value.createAnswer();
  await peerConnection.value.setLocalDescription(answer);
};
// 添加 answer(应答)
const addAnswer = async (remoteAnswer: string) => {
  if (!remoteAnswer) return;
  const answer = JSON.parse(remoteAnswer);
  if (!peerConnection.value.currentRemoteDescription) {
    peerConnection.value.setRemoteDescription(answer);
  }
};

// 打开/关闭麦克风
const handleAudio = (flag: boolean) => {
  mediaDevices.audio = flag;
  localStream.value.getAudioTracks().forEach((track) => {
    track.enabled = flag;
  });
};
// 打开/关闭摄像头
const handleVideo = (flag: boolean) => {
  mediaDevices.video = flag;
  localStream.value.getVideoTracks().forEach((track) => {
    track.enabled = flag;
  });
};
onMounted(() => {
  init();
});
onUnmounted(() => {
  localStream.value.getTracks().forEach((track) => {
    track.stop();
  });

  // 关闭peerConnection
  peerConnection.value.close();
});
</script>
<style scoped lang="scss">
.p2p {
  &-header {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-main {
    height: 100%;
  }
  &-footer {
    background-color: var(--el-color-primary-light-7);
    height: var(--el-header-height);
  }
  &-subtitle {
    text-align: center;
  }
  &-video {
    text-align: center;
    &__dom {
      width: 560px;
      aspect-ratio: 16/9;
      object-fit: contain;
      background-color: #000;
    }
  }
}
</style>
