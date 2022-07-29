import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/cart',
      name: 'cart',
      component: () => import('../layout/CartPage.vue'),
    },
    {
      path: '/collections/:category',
      name: 'category',
      component: () => import('../layout/CategoryPage.vue'),
    },
    {
      path: '/collections/:category/products/:productName',
      name: 'categoryProduct',
      component: () => import('../layout/ProductPage.vue'),
    },
  ],
})

export default router
