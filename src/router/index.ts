import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import about_us from '../components/about_us.vue'
import homePage from '../components/homePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: about_us
    }
  ]
})

export default router
