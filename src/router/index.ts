import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/GuideMain.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
