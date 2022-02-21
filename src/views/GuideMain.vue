<template>
  <div class="home-index">
    gogo
    <div class="test">guidemain</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    return {
      test: false
    }
  }
})
</script>
<style lang="less" scoped></style>
