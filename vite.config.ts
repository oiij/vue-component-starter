import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-components',
      fileName: 'index',
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
    Unocss(), // https://github.com/antfu/unocss
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'), // 路径别名
    },
  },
})
