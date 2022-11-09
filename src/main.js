import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//importamos vue-router
import router from './router'

//importamos nuestros componentes
import inicio from './components/Inicio';
import listarProductos from './views/ListarProductos';
import crearProducto from './components/CrearProducto';
import editarProducto from './components/EditarProducto';


//creamos nuestros componentes
Vue.component('inicio', inicio);
Vue.component('listarProductos', listarProductos);
Vue.component('crearProducto', crearProducto);
Vue.component('editarProducto', editarProducto);



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
