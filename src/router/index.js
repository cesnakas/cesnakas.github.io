import { createRouter, createWebHistory } from 'vue-router'

const loadComponent = (view) => {
  return () => import(`@/views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 48,
        behavior: 'smooth',
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Sergei Česnakas',
      component: loadComponent('Home')
    },
    {
      path: '/resume',
      name: 'Resume - Sergei Česnakas',
      component: loadComponent('Resume')
    },
    {
      path: '/services',
      name: 'Services - Sergei Česnakas',
      component: loadComponent('Services')
    },
    {
      path: '/work',
      name: 'Work - Sergei Česnakas',
      component: loadComponent('Work')
    },
    {
      path: '/contact',
      name: 'Contact - Sergei Česnakas',
      component: loadComponent('Contact')
    },
    {
      path: '/:pathMatch(.*)',
      name: '404 Not Found',
      component: loadComponent('NotFound')
    }
  ],
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link'
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
