import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import fs from 'fs-extra'
import type { ResolvedConfig } from 'vite'

// https://vitejs.dev/config/

let config: ResolvedConfig = undefined!

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@pkg-name/components',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    Vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'auto-imports.d.ts',
    }),
    {
      name: 'vite-plugin-copy-style',
      apply: 'build',
      enforce: 'post',
      configResolved(_config) {
        config = _config
      },
      async closeBundle() {
        const { root, build } = config
        const { outDir } = build
        const styleFile = resolve(root, outDir, 'style.css')
        await fs.copyFile(
          styleFile,
          resolve(__dirname, '../pkg-name/src/style.css'),
        )
      },
    },
  ],
})
