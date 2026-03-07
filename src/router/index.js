import { createRouter, createWebHistory } from 'vue-router'
import pantallauno from '../views/pantallauno.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: pantallauno,
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pantallaregistro.vue'),
    },
    {
      path: '/principal',
      name: 'principal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pantallaprincipal.vue'),
    },
    {
      path: '/chats',
      name: 'chats',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pantallachats.vue'),
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/pantallaperfil.vue'),
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import('../views/pantallaagregarpub.vue'),
    },
    {
      path: '/pantallaresultado',
      name: 'pantallaresultado',
      component: () => import('@/views/pantallaresultado.vue')
    },
    {
      path: '/pantallapublicacion',
      name: 'pantallapublicacion',
      component: () => import('@/views/pantallapublicacion.vue')
    },
    {
      path: '/pantallarecompensas',
      name: 'pantallarecompensas',
      component: () => import('@/views/pantallarecompensas.vue')
    },
    {
      path: '/pantallapublicacionperfil',
      name: 'pantallapublicacionperfil',
      component: () => import('@/views/pantallapublicacionperfil.vue')
    },
  ],
})

export default router
