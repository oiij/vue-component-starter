import type { ComponentResolver } from 'unplugin-vue-components'

export function x0uiComponentResolvers(): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (name.match(/^(X[A-Z]|x-[a-z])/)) {
          return {
            name,
            from: 'x0ui',
          }
        }
      },
    },
  ]
}
