import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// @ts-ignore
import router from './router'

import './style.css'
import 'element-plus/dist/index.css'
import './assets/main.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
