import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/resolver.ts'],
  clean: false,
  format: ['cjs', 'esm'],
  external: ['vue'],
  dts: true,
  minify: false,
})
