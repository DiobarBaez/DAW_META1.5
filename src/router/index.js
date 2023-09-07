/**
 * router/index.js
 *
 * Este archivo define las rutas de enrutamiento para la aplicación utilizando Vue Router.
 */

// Importación de Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Definición de rutas
const routes = [
  {
    path: '/', // Especifica la URL asociada a esta ruta. En este caso, es la URL raíz '/'.
    component: () => import('@/layouts/default/Default.vue'), // Componente que se debe cargar cuando la ruta se active 
    children: [ // rutas anidadas dentro de ella, o simplemente sus nodos hijos
      {
        path: '',
        name: 'Home',
        // División de nivel de ruta
        // Esto genera un fragmento separado (home.[hash].js) para esta ruta
        // que se carga de forma diferida cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/imagen',
        name: 'Imagen',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Vista2.vue'),
      },
      {
        path: '/table',
        name: 'Table',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Vista3.vue'),
      },
    ],
  },
];

// Creación de la instancia de Vue Router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Exportación del enrutador
export default router;
