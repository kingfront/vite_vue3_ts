<script setup lang="ts">
import { MusicModel } from '@/model/HomeModel'
import { ref } from 'vue'
defineProps<{ data: MusicModel }>()
const playing = ref(false)
const startAudio = ref(false)

const clickAudio = () => {
  startAudio.value = true
  playing.value = !playing.value
}
</script>

<template>
  <div class="music-card">
    <div class="player" @click="clickAudio">
      <div class="rotate-block" :class="{ start: startAudio, active: playing, pause: !playing }">
        <img :src="data.picurl" />
      </div>
      <div v-if="!playing" class="pause-icon"></div>
    </div>
    <div class="title">{{ data.name }}</div>
    <div class="author">{{ data.artistsname }}</div>
  </div>
</template>

<style scoped lang="less">
.music-card {
  .player {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .start {
      animation: player-rotate 10s linear infinite;
    }
    .active {
      animation-play-state: running !important;
    }
    .pause {
      animation-play-state: paused !important;
    }
    .rotate-block {
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('@/images/audio-bg.png') no-repeat;
      background-size: contain;

      &:before {
        content: ' ';
        top: 0;
        left: 0;
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: 10;
        background: url('@/images/audio-bg-light.png') no-repeat;
        background-size: contain;
      }
      img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 100%;
        background: #f8f8f8;
      }
    }
    .pause-icon {
      width: 80px;
      height: 80px;
      position: absolute;
      z-index: 15;
      background: url('@/images/pause.png') no-repeat;
      background-size: contain;
    }
  }
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin-top: 50px;
  }
  .author {
    font-size: 25px;
    color: #818894;
    margin-top: 20px;
  }
}
@keyframes player-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
