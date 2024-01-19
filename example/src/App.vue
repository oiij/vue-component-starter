<script setup lang='ts'>
import { MyButton } from 'my-components'
</script>

<template>
  <div class="w-full flex-col-center ">
    <div class="flex gap-3 p-10">
      <MyButton>
        Default
      </MyButton>
      <MyButton type="primary">
        Primary
      </MyButton>
      <MyButton type="info">
        Info
      </MyButton>
      <MyButton type="success">
        Success
      </MyButton>
      <MyButton type="warning">
        Warning
      </MyButton>
      <MyButton type="error">
        Error
      </MyButton>
    </div>
    <div class="flex gap-3 p-10">
      <MyButton disabled>
        Default
      </MyButton>
      <MyButton disabled type="primary">
        Primary
      </MyButton>
      <MyButton disabled type="info">
        Info
      </MyButton>
      <MyButton disabled type="success">
        Success
      </MyButton>
      <MyButton disabled type="warning">
        Warning
      </MyButton>
      <MyButton disabled type="error">
        Error
      </MyButton>
    </div>
  </div>
</template>

<style lang='less'>
#app{
  // background-color: #333;
}
</style>
