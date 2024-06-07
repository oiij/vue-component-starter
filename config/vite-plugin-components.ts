import type { PluginOption } from 'vite'
import Components from 'unplugin-vue-components/vite'
import {
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from 'unplugin-vue-components/resolvers'

export function VitePluginComponents(): PluginOption[] {
  return [
    Components({
      dirs: [],
      extensions: ['vue', 'md'],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
      ],
    }), // https://github.com/antfu/unplugin-vue-components
  ]
}
