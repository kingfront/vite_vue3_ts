<template>
  <div class="home-index">
    <component :is="!loading && MusicCard" :data="musicData"></component>
  </div>
</template>
<script lang="ts" setup>
import MusicCard from '@/components/MusicCard.vue'
import { HomeHooks } from './hooks/HomeHooks'

const { loading, musicData, fetchMusicInfo } = HomeHooks()

fetchMusicInfo()
</script>
<style lang="less" scoped></style>
