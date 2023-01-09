import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import fs from 'fs-extra'
// import type { ResolvedConfig } from 'vite'

// let config: ResolvedConfig = undefined!

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-starter',
      fileName: 'ui-starter',
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
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'auto-imports.d.ts',
    }),
    // {
    //   name: 'vite-plugin-copy-style',
    //   apply: 'build',
    //   enforce: 'post',
    //   configResolved(_config) {
    //     config = _config
    //   },
    //   async closeBundle() {
    //     const { build, root } = config
    //     const { outDir } = build
    //     const styleFile = resolve(__dirname, 'src/style.css')
    //     await fs.copyFile(
    //       styleFile,
    //       resolve(root, outDir, 'style.css'),
    //     )
    //   },
    // }
  ],
})
