import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/registrar',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/ingresar',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/reportes',
    name: 'Reports',
    component: () => import('../views/Reports.vue')
  },
  {
    path: '/reportes/nuevo',
    name: 'NuevoReporte',
    component: () => import('../views/NuevoReporte.vue')
  },
  {
    path: '/reportes/actualizar/:id',
    name: 'ActualizarReporte',
    component: () => import('../views/ActualizarReporte.vue')
  },
  {
    path: '/ministerio',
    name: 'Ministerio',
    component: () => import('../views/Ministerio.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
