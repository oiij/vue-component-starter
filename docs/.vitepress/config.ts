import { cwd } from 'node:process'
import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { withPwa } from '@vite-pwa/vitepress'
import { searchForWorkspaceRoot } from 'vite'
import UnoCss from 'unocss/vite'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default withPwa(defineConfig({
  title: 'x0ui',
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
    siteTitle: 'x0ui',
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
    sidebar: getSidebar({
      contentRoot: 'docs',
      contentDirs: ['Components', 'Composable'],
      collapsible: false,
      collapsed: false,
    }),
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
      UnoCss(),
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
  },
  pwa: {
    mode: 'development',
    base: '/',
    scope: '/',
    registerType: 'autoUpdate',
    // injectRegister: 'inline',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
  },
}))
