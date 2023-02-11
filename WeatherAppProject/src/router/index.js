import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '../views/WeatherPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/WeatherPage',
      name: 'WeatherPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WeatherPage
    }
  ]
})

export default router
