import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
/*import about_us from '../components/about_us.vue'
import homePage from '../components/homePage.vue'
import join_us from '../components/join_us.vue'
import projects from '../components/projects.vue'
import sponsorships from '../components/sponsorships.vue'*/

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/homePage.vue'),
      props: true
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: () => import('../components/about_us.vue')
    },
    {
      path: '/join_us',
      name: 'join_us',
      component: () => import('../components/join_us.vue'),
    },
    {
      path: '/projects',
      name: "projects",
      component: () => import('../components/projects.vue'),
    },
    {
      path: '/sponsorships',
      name: 'sponsorships',
      component: () => import('../components/sponsorships.vue'),
    }
  ]
})

export default router
