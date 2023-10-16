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
    }
  ]
})

export default router
