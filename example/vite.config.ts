import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'), // 路径别名
    },
  },
})
