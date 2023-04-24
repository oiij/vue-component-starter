import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'pkg-name/dist/style.css'
import 'uno.css'

const app = createApp(App)
app.mount('#app')
