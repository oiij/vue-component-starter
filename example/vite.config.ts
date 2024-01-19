import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Unocss(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'), // 路径别名
    },
  },
})
