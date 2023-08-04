import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
/*import about_us from '../components/about_us.vue'
import homePage from '../components/homePage.vue'
import join_us from '../components/join_us.vue'
import projects from '../components/projects.vue'
import sponsorships from '../components/sponsorships.vue'*/

import { newFetchData } from '@/ultility/fetchData'

const SHEET_ID = '1rmibTT-UsrZfB9X58mcfgwKb8inYeoKoxYo3RletQ_s'
const SHEET_TITLE = 'Sheet1'
const SHEET_RANGE = 'A2:E10'
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`

const data = await newFetchData(FULL_URL)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/homePage.vue'),
      props: { calendarSchedule: await data.calendarSchedule }
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
      props: { deadline: await data.deadline }
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
