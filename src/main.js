import { createApp } from 'vue'
import { createPinia } from 'pinia'

import index from '@/pages/index/index.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(index)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#index')
