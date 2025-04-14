<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
}>()
const backgroundColor = computed(() => {
  const type = props.type || 'primary'
  return {
    default: '#f1f1f1',
    primary: '#409eff',
    success: '#67c23a',
    warning: '#e6a23c',
    error: '#f56c6c',
    info: '#909399',
  }[type]
})
</script>

<template>
  <button :style="{ backgroundColor: `${backgroundColor}`, padding: `5px`, borderRadius: '10px' }">
    <slot />
  </button>
</template>

<style scoped lang='less'>

</style>
