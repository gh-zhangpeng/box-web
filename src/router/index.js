import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
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

router.beforeEach(async (to, from) => {
  if (
    // 检查用户是否已登录
    !isLogin() &&
    // ❗️ 避免无限重定向
    to.name !== 'index'
  ) {
    // 将用户重定向到登录页面
    return { name: 'index' }
  }
})

function isLogin() {
  if (!Cookies.get("token")) {
      return false
  }
  return true
}

export default router
