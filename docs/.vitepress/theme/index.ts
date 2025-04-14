import type { App } from 'vue'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'
import '@vitepress-demo-preview/component/dist/style.css'
import './vars.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    const className = frontmatter.value.className ?? ''
    return h(Layout, { class: className }, {
      'nav-bar-title-after': () => h('span', {}, { default: () => '🕹️' }),
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('DemoPreview', NaiveUIContainer)
  },
}
