import type { ComponentResolver } from 'unplugin-vue-components'
import type { Resolver } from 'unplugin-auto-import/types'

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
export function x0uiUseResolvers(): Resolver {
  return (name) => {
    return {
      name,
      from: 'x0ui',
    }
  }
}
