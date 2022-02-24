<template>
  <div class="home-main">
    <component :is="LoadingTag"></component>
    <component :is="!loading && MusicCard" :data="musicData"></component>
    <van-empty v-if="noData" image="error" description="没有获取到数据哦">
      <van-button round class="retry-button" @click="retryData">点击重试</van-button>
    </van-empty>
  </div>
</template>
<script lang="ts" setup>
import LoadingTag from '@/components/LoadingTag/LoadingTag.jsx'
import MusicCard from '@/components/MusicCard.vue'
import { HomeHooks } from './hooks/HomeHooks'

const { loading, noData, musicData, fetchMusicInfo } = HomeHooks()
fetchMusicInfo()

// 对外暴露重新加载数据
const retryData = () => {
  fetchMusicInfo()
}
</script>
<style lang="less" scoped>
.home-main {
  margin-top: 100px;
  .retry-button {
    background: #fff;
    color: @theme-color;
    border: 1px solid @theme-color;
    width: 200px;
    height: 60px;
  }
}
</style>
