import type { App, Component } from 'vue'

export function install(app: App, components: Component[]) {
  components.forEach((component) => {
    app.component(`${component.name}`, component)
  })
}
