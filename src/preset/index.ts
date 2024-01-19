import type { Preset } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { getColor } from '../utils'

export function preset(): Preset<Theme> {
  const { def, primary, info, success, warning, error } = {
    def: '#ffffff',
    primary: '#6366f1',
    info: '#06b6d4',
    success: '#10b981',
    warning: '#fbbf24',
    error: '#ef4444',

  }
  return {
    name: '@my-components/preset',
    theme: {
      colors: {
        def: getColor(def),
        primary: getColor(primary),
        info: getColor(info),
        success: getColor(success),
        warning: getColor(warning),
        error: getColor(error),
      },
    },
    rules: [

    ],
  }
}
