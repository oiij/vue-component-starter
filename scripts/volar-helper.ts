/* eslint-disable regexp/no-super-linear-backtracking */
import path from 'node:path'
import process from 'node:process'
import fs from 'fs-extra'
import { name } from '../package.json'
import * as globalComponents from '../src/components'

const TYPE_ROOT = process.cwd()
const PREFIX = 'X'
function exist(path: string) {
  return fs.existsSync(path)
}

function parseComponentsDeclaration(code: string) {
  if (!code)
    return {}

  return Object.fromEntries(
    Array.from(code.matchAll(/(?<!\/\/)\s{2,}['"]?(.+?)['"]?:\s(.+)\n/g)).map(
      i => [i[1], i[2]],
    ),
  )
}

async function generateComponentsType() {
  const components = {}
  Object.keys(globalComponents).forEach((key) => {
    // Replace after packaging
    const entry = `typeof import(${name})['${key}']`
    if (key.startsWith(PREFIX))
      components[key] = entry
  })
  const originalContent = exist(path.resolve(TYPE_ROOT, 'dist', 'volar.d.ts'))
    ? await fs.readFile(path.resolve(TYPE_ROOT, 'dist', 'volar.d.ts'), 'utf-8')
    : ''

  const originImports = parseComponentsDeclaration(originalContent)
  const lines = Object.entries({
    ...originImports,
    ...components,
  })
    .filter(([name]) => {
      return components[name]
    })
    .map(([name, v]) => {
      if (!/^\w+$/.test(name))
        name = `'${name}'`

      return `${name}: ${v}`
    })
  const code = `// Auto generated component declarations
declare module 'vue' {
  export interface GlobalComponents {
    ${lines.join('\n    ')}
  }
}
export {}
`
  if (code !== originalContent)
    await fs.writeFile(path.resolve(TYPE_ROOT, 'dist', 'volar.d.ts'), code, 'utf-8')
}
generateComponentsType()
