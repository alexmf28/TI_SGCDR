<template>
 <v-card>
    <v-card-title class="justify-center title font-weight-black"
      >Registrar Producto</v-card-title
    >
    <v-card-text>
        
      <div class="container-user">        
        <form v-on:submit.prevent="guardarArticulo()">
        <v-text-field v-model="articulo.descripcion"
                label="Descripción"
                outlined
                required   
        >
        </v-text-field>
         <v-text-field
                v-model="articulo.precio"        
                label="Precio"
                type="number"                
                prefix="$"
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="articulo.stock"        
                label="Stock"
                type="number"
                outlined
                required        
            ></v-text-field>
            <v-card-actions>
                <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
        </form>
      </div>
      <v-row>
        <v-col>           
          <v-btn block @click="cerrarDialogo()" color="primary">
            <v-icon left>mdi-close-outline</v-icon>
            <span>Cerrar</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn block @click="registrarProducto()" color="success">
            <v-icon left>mdi-content-save-all-outline</v-icon>
            <span>Registrar</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

</template>
<script>
import axios from 'axios';
export default {
    name:'crearProducto',
    data(){
        return{
            articulo:{
                descripcion:'',
                precio:'',
                stock:''
            }
        };
    },
    methods:{
        async registrarProducto() {
    //   const requestBody = {
    //     nombreProyecto : this.proyecto,
    //     jefe_Proyecto: this.jefe_proyecto,
    //     dtoCliente : this.cliente
    //   };
    //   const data=[];
    //   await axios
    //     .post("/Cliente/Registro", requestBody)
    //     .then((res) => {
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => {
    //       this.$emit("charge-cliente");
    //       Object.assign(this.$data, this.$options.data.call(this));
    //       this.$v.$reset();
    //       this.obtenerPaises();
          this.$emit("close-dialog-save");
    //     });
    },  
        cerrarDialogo() {
    //   Object.assign(this.$data, this.$options.data.call(this));
    //   this.$v.$reset();   
      this.$emit("close-dialog-save");          
    },
        guardarArticulo(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('descripcion',this.articulo.descripcion);
           formData.append('precio',this.articulo.precio);
           formData.append('stock',this.articulo.stock);
           axios.post('http://localhost/apirest/articulos',formData)
           .then(()=>{
               router.push('/articulos');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>