<script setup lang='ts'>
import { toRefs, withDefaults } from 'vue'
import type { Props } from './type'

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'default',
})
const emit = defineEmits<{
  click: []
}>()
const { type, size, block, disabled, ghost, round, loading } = toRefs(props)
</script>

<template>
  <button :class="`my-button ${type} size-${size} ${block ?? 'block'} ${disabled ? 'disabled cursor-not-allowed' : ''} ${ghost ?? 'ghost'} ${round ?? 'round'} ${loading ?? 'loading'} `" type="button" @click="emit('click')">
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped lang='less'>
.my-button{
  @apply transition-base flex-center p-x-3 p-y-1 rounded-4px border-1 ;
  &:hover,&:focus{
    @apply bg-black/10!;
  }
  &:active{
    @apply bg-black/20!;
  }
  &.default{
    @apply bg-def text-def-text;
    &:hover,&:focus{
      @apply bg-def-hover!;
    }
    &:active{
      @apply bg-def-pressed!;
    }
    &.disabled{
      @apply bg-def-disabled!;
    }
  }
  &.primary{
    @apply bg-primary text-primary-text;
    &:hover,&:focus{
      @apply bg-primary-hover!;
    }
    &:active{
      @apply bg-primary-pressed!;
    }
    &.disabled{
      @apply bg-primary-disabled!;
    }
  }
  &.info{
    @apply bg-info text-info-text;
    &:hover,&:focus{
      @apply bg-info-hover!;
    }
    &:active{
      @apply bg-info-pressed!;
    }
    &.disabled{
      @apply bg-info-disabled!;
    }
  }
  &.success{
    @apply bg-success text-success-text;
    &:hover,&:focus{
      @apply bg-success-hover!;
    }
    &:active{
      @apply bg-success-pressed!;
    }
    &.disabled{
      @apply bg-success-disabled!;
    }
  }
  &.warning{
    @apply bg-warning text-warning-text;
    &:hover,&:focus{
      @apply bg-warning-hover!;
    }
    &:active{
      @apply bg-warning-pressed!;
    }
    &.disabled{
      @apply bg-warning-disabled!;
    }
  }
  &.error{
    @apply bg-error text-error-text;
    &:hover,&:focus{
      @apply bg-error-hover!;
    }
    &:active{
      @apply bg-error-pressed!;
    }
    &.disabled{
      @apply bg-error-disabled!;
    }
  }
}
</style>
