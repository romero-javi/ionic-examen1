import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/menu'
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/MenuPage.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('@/views/GamesPage.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/GalleryPage.vue')
  },
  {
    path: '/exercise1',
    name: 'Exercise1',
    component: () => import('@/views/Exercise1Page.vue')
  },
  {
    path: '/exercise2',
    name: 'Exercise2',
    component: () => import('@/views/Exercise2Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
