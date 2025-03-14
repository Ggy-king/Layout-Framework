import './assets/main.css'

import { createApp } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores/index.ts'



const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}