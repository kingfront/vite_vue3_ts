<script setup lang="ts">
import { MusicModel } from '@/model/HomeModel'
defineProps<{ data: MusicModel }>()
</script>

<template>
  <div class="music-card">
    <img :src="data.picurl" />
    <div class="title">{{ data.name }}</div>
    <div class="author">{{ data.artistsname }}</div>
  </div>
</template>

<style scoped lang="less">
.music-card {
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 100%;
    background: #f8f8f8;
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
</style>
