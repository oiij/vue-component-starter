import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { searchForWorkspaceRoot } from 'vite'
import { defineConfig } from 'vitepress'

const alias = {
  'vue-component-starter': resolve(__dirname, '../../src'), // 路径别名
}
export default defineConfig({
  title: 'vue-component-starter',
  description: 'vue components ui',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, workbox, Vite, vite-plugin',
    }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.svg', sizes: '192x192' }],
  ],
  themeConfig: {
    siteTitle: 'vue-component-starter',
    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Eiog',
      },
    ],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '相关资源',
        items: [
          { text: 'VitePress', link: 'https://vitepress.vuejs.org/' },
        ],
      },
    ],
    sidebar: [
      {
        text: '介绍',
        link: '/overview',
      },
      {
        text: '组件',
        items: [
          { text: '按钮', link: '/components/button' },
        ],
      },
    ],
    sidebarMenuLabel: '目录',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    search: {
      provider: 'local',
    },
  },
  vite: {
    plugins: [

    ],
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(cwd())],
      },
    },
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    resolve: {
      alias,
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview, { alias })
      md.use(componentPreview, { alias })
    },
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
  },
})
