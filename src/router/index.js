import { createRouter, createWebHistory } from 'vue-router'
import index from '@/pages/index/index.vue'
import medical from '@/pages/medical/medical.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/medical',
      name: 'medical',
      component: medical
    },
    {
      path: '/login',
      name: 'login',
      component: medical
    }
  ]
})

export default router
