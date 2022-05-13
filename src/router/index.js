import { createRouter, createWebHistory } from 'vue-router'
import index from '@/pages/index/index.vue'
// import medical from '../pages/medical/medical'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/medical',
    //   name: 'medical',
    //   component: medical
    // }
  ]
})

export default router
