<template>
    <v-container> 
        
    <v-row class="text-center">      
      <v-col class="mb-4 purple darken-2" >
        <h2 class="display-2 font-weight-bold mb-3">
          Listado de Productos
        </h2>       
      </v-col>        
    </v-row>
                 
          <v-row>
            <v-col v-for="n in 12"
                    v-bind:key="n">
                    <div 
                       image="../../assets/Logo-Rayotec.png"
                       name="Product"
                       :price="300"></div> 
                        <img src="../../assets/Logo-Rayotec.png" alt="">
                        <div>
                            <p><small>MSI</small></p>
                            <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
                            <p><strong>S/ 7,390 un</strong></p>
                        </div> 
                        <div class="d-flex">
                            <button v-if="contador < 1" v-on:click="contador = contador + 1" type="button" class="btn btn-info">Agregar</button>
                            <button v-if="contador > 0" v-on:click="contador = contador - 1" type="button" class="btn btn-info"><i class="fa-solid fa-minus"></i></button>
                            <p v-if="contador > 0">{{contador}}</p>
                            <button v-if="contador > 0" v-on:click="contador = contador + 1" type="button" class="btn btn-info"><i class="fa-solid fa-plus"></i></button>
                        </div>
            </v-col >
                    
          </v-row>                 
                   
              
          


    </v-container>
</template>
<script>
// import axios from 'axios';
export default {
    name:'listarProductos',
    components: {
    },
    mounted(){
        // this.obtenerArticulos();
    },
    data(){
        return{            
            dialogoRegistrar: false,
            dialog:false,
            articulos:null,
            id:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        openDialogRegistrar(){
      this.dialogoRegistrar = true;
    },
    closeDialogRegistrar() {
      this.dialogoRegistrar = false;
    },
        // obtenerArticulos(){
        //     axios.get('http://localhost/apirest/articulos')
        //     .then(r => {
        //         this.articulos = r.data;
        //         console.log(this.articulos);
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })

        // },
        // confirmarBorrado(id){            
        //     axios.delete('http://localhost/apirest/articulos?id='+id)
        //     .then(()=>{
        //             this.obtenerArticulos();
        //             this.dialog = false;
        //             this.snackbar = true
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     });    
        // }
    }
}
</script>
<script>
import axios from 'axios';

export default {
    name: 'productos-almacen',
    data() {
        return {
            users: null,
            contador: 0
           
        };        
       
    },
    created: function () {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.users = res.data;
            })
    },
    ocultarAgregar(){
        if(contador += 1){

        }
    }
}
</script>
<style>
.logo{
  width:40%;

}
</style>