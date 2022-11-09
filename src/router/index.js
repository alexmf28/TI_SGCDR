import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [   
  {
    path: '/',
    name: 'Dashboard',
    redirect: "/inicio",
    component: () =>
      import ('../components/Inicio.vue'),
      children: [{
        path: 'productos',
        name: "productos",
        component: () => import("@/views/ListarProductos"),
      },    
      {
        path: "crear",
        name: "crear",
        component: () => import("@/components/CrearProducto"),
      },      
    ]
  },   
]

const router = new VueRouter({
  mode: 'history',  
  routes
})

export default router
