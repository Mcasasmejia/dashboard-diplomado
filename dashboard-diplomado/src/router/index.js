import { createRouter, createWebHistory } from 'vue-router'
import HotelListado from '../views/HotelListado.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hotel-listado',
      name: 'hotel-listado',
      component: HotelListado
    },
    {
      path: '/habitaciones',
      name: 'habitaciones',
      component: () => import('../views/Habitaciones.vue')
    },
    {
      path: '/informes_acomodaciones',
      name: 'informes_acomodaciones',
      component: () => import('../views/Informes_Acom.vue')
    },
    {
      path: '/informes_habitaciones',
      name: 'informes_habitaciones',
      component: () => import('../views/Informes_Hab.vue')
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: () => import('../views/Prueba.vue')
    },
    {
      path: '/prueba2',
      name: 'prueba2',
      component: () => import('../views/Prueba2.vue')
    },
  ]
})

export default router
