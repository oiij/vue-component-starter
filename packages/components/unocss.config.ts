import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import { preset } from '../preset/src/index'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetUno(),
    preset(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
