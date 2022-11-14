import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../components/Inicio.vue'
import listarProductos from '../views/ListarProductos.vue'



Vue.use(VueRouter)

Vue.component('inicio', inicio);

Vue.component('listarProductos', listarProductos);

const routes = [   
    {path: '/', component:inicio},
    {path: '/inicio', component: inicio},
    {path: '/productos', component: listarProductos},            
]

const router = new VueRouter({
  mode: 'history',  
  routes
})

export default router
