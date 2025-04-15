import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { name } from './package.json'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name,
      fileName: 'index',
      cssFileName: 'index',
      formats: [
        'es',
        'umd',
      ],
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    Unocss(),
    dts(),

  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
})
