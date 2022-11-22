<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col class="mb-4 deep-purple darken-3">
        <h2 class="display-2 font-weight-bold mb-3 white--text">
          Listado de Productos
        </h2>
      </v-col>
      <v-col cols="1" class="mb-4 pa-4 justify-center deep-purple darken-3">
        <v-btn v-on:click="Carrito()" class="white--text" outlined fab
          ><v-icon large> mdi-cart </v-icon></v-btn
        >
      </v-col>
    </v-row>

    <v-row class="flex justify-center">
      <v-card class="pa-4 mx-2 my-2 m-4 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/msi.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador1 < 1"
            v-on:click="contador1 = contador1 + 1"
            type="v-btn"
            class="btn btn-info outlined fab"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador1 > 0"
            v-on:click="contador1 = contador1 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador1 > 0">{{ contador1 }}</p>
          <v-btn
            v-if="contador1 > 0"
            v-on:click="contador1 = contador1 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/alien.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador2 < 1"
            v-on:click="contador2 = contador2 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador2 > 0"
            v-on:click="contador2 = contador2 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador2 > 0">{{ contador2 }}</p>
          <v-btn
            v-if="contador2 > 0"
            v-on:click="contador2 = contador2 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/acer.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador3 < 1"
            v-on:click="contador3 = contador3 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador3 > 0"
            v-on:click="contador3 = contador3 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador3 > 0">{{ contador3 }}</p>
          <v-btn
            v-if="contador3 > 0"
            v-on:click="contador3 = contador3 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/asus.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador4 < 1"
            v-on:click="contador4 = contador4 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador4 > 0"
            v-on:click="contador4 = contador4 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador4 > 0">{{ contador4 }}</p>
          <v-btn
            v-if="contador4 > 0"
            v-on:click="contador4 = contador4 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/acer2.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador5 < 1"
            v-on:click="contador5 = contador5 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador5 > 0"
            v-on:click="contador5 = contador5 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador5 > 0">{{ contador5 }}</p>
          <v-btn
            v-if="contador5 > 0"
            v-on:click="contador5 = contador5 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/dell1.webp" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador6 < 1"
            v-on:click="contador6 = contador6 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador6 > 0"
            v-on:click="contador6 = contador6 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador6 > 0">{{ contador6 }}</p>
          <v-btn
            v-if="contador6 > 0"
            v-on:click="contador6 = contador6 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/hp.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador7 < 1"
            v-on:click="contador7 = contador7 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador7 > 0"
            v-on:click="contador7 = contador7 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador7 > 0">{{ contador7 }}</p>
          <v-btn
            v-if="contador7 > 0"
            v-on:click="contador7 = contador7 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
      <v-card class="pa-4 mx-2 my-2 text-center">
        <div name="Product" :price="300"></div>
        <img src="../../assets/lenovo.jpg" class="sizeimg" alt="" />
        <div>
          <p><small>MSI</small></p>
          <p>Laptop Gamer MSI GL65 15.6" 16GB RAM 512GB SSD</p>
          <p><strong>S/ 7,390 un</strong></p>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            v-if="contador8 < 1"
            v-on:click="contador8 = contador8 + 1"
            type="v-btn"
            class="btn btn-info"
            >Agregar</v-btn
          >
          <v-btn
            v-if="contador8 > 0"
            v-on:click="contador8 = contador8 - 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
            ><v-icon dark> mdi-minus </v-icon></v-btn
          >
          <p v-if="contador8 > 0">{{ contador8 }}</p>
          <v-btn
            v-if="contador8 > 0"
            v-on:click="contador8 = contador8 + 1"
            type="v-btn"
            class="btn btn-info mx-4"
            small
            fab
          >
            <v-icon dark> mdi-plus </v-icon></v-btn
          >
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
// import axios from 'axios';
export default {
  name: "listarProductos",
  components: {},
  mounted() {
    // this.obtenerArticulos();
  },
  data() {
    return {
      dialogoRegistrar: false,
      dialog: false,
      articulos: null,
      id: null,
      snackbar: false,
      textsnack: "¡Registro Eliminado!",
    };
  },
  methods: {
    openDialogRegistrar() {
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
  },
};
</script>
<script>
import axios from "axios";

export default {
  name: "productos-almacen",
  data() {
    return {
      users: null,
      contador1: 0,
      contador2: 0,
      contador3: 0,
      contador4: 0,
      contador5: 0,
      contador6: 0,
      contador7: 0,
      contador8: 0,
    };
  },
  created: function () {},
  abrirCarrito() {
    if ((contador += 1)) {

    }
  },
};
</script>
<style>
.logo {
  width: 40%;
}
.textos2 {
  font-family: "Gill Sans", sans-serif;
}
.sizeimg{
    width: 320px;
    height: 303px;    
}
</style>
