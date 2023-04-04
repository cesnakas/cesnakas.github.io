import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Sergei Česnakas',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/Resume.vue')
    },
    {
      path: '/notes',
      name: 'Notes',
      component: () => import('../views/Notes.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    { path: '/:pathMatch(.*)', component: () => import('../views/NotFound.vue') }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
