import type { Preset } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

export function preset(): Preset<Theme> {
  return {
    name: '@ano-ui/preset',
  }
}
