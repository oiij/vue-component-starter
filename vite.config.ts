import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";
import Unocss from 'unocss/vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import dts from 'vite-plugin-dts'
export default defineConfig(({command, mode})=>{
  const isBuildLib = mode ==='lib'

  return {
    plugins:[
      vue(),
    Unocss(),
    VueI18nPlugin({
      include: resolve(__dirname, './src/i18n/**'),
    }),
    dts({
      include: './package/**/*.ts' ,
      insertTypesEntry: true,
    rollupTypes: true,
    outputDir: './lib/types',})
    ],
    build:isBuildLib? {
      lib: {
        entry: './packages/index.ts',
        name: 'Library',
        formats: ['es', 'cjs'],
        fileName: format => {
          return `index.${format}.js`
        },
      },
      outDir:'lib',
      chunkSizeWarningLimit: 1000,
      rollupOptions:{
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }:{
      minify: 'esbuild',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      assetsDir: 'static/assets',
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, './src'), // 路径别名
        '~~': resolve(__dirname, './packages'),
      },
    },
  }
})
