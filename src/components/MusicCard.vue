<script setup lang="ts">
import { Music } from '@/model/ComModel'

defineProps<{ data: Music }>()
</script>

<template>
  <div class="music-card">
    <img :src="data.picurl" />
  </div>
</template>

<style scoped lang="less">
.music-card {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
