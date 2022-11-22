import Vue from 'vue'
import VueRouter from 'vue-router'
import inicioCliente from '../views/Dashboard/dashboard-cliente.vue'
import inicioAdmin from '../views/Dashboard/dashboard-Admin.vue'
import listarProductos from '../views/ListarProductos.vue'
import listaProductosCliente from '../views/Cliente/ListaProductos.vue'
import loginCliente from '../views/Login/Login-Cliente.vue'
import loginAdmin from '../views/Login/Login-Admin.vue'

Vue.use(VueRouter)

Vue.component('inicioCliente', inicioCliente);
Vue.component('inicioAdmin', inicioAdmin);
Vue.component('listarProductos', listarProductos);
Vue.component('loginCliente', loginCliente);
Vue.component('loginAdmin', loginAdmin);
Vue.component('listaProductosCliente', listaProductosCliente);

const routes = [   
    {path: '/inicioAdmin', component:inicioAdmin},
    {path: '/inicioCliente', component: inicioCliente},
    {path: '/productos', component: listarProductos},  
    {path: '/login/cliente', component: loginCliente},  
    {path: '/login/admin', component: loginAdmin},   
    {path: '/listaProductosCliente', component: listaProductosCliente},            
]

const router = new VueRouter({
  mode: 'history',  
  routes
})

export default router
