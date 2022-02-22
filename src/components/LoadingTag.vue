<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="loading-tag">
    <van-loading type="spinner"></van-loading>
  </div>
</template>

<style scoped lang="less">
.loading-tag {
  width: 100%;
  top: 20vh;
  position: fixed;
}
.van-loading {
  color: @theme-color;
}
</style>
