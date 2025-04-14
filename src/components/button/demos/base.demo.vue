<script setup lang='ts'>
import { XButton } from '../index'
</script>

<template>
  <div :style="{ display: 'flex', gap: '10px' }">
    <XButton type="default">
      Default
    </XButton>
    <XButton type="primary">
      Primary
    </XButton>
    <XButton type="info">
      Info
    </XButton>
    <XButton type="success">
      Success
    </XButton>
    <XButton type="warning">
      Warning
    </XButton>
    <XButton type="error">
      Error
    </XButton>
  </div>
</template>
