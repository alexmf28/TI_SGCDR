<template>
    <v-app>
      <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text style="text-align:center;padding-left:25px;padding-right:25px">
                    <div style="padding-top:5%; padding-bottom:10%">
                        <h3 class="font-weight-bold">SGCDR</h3>
                        <p class="text--disabled font-weight-medium" style="margin-top:10px">
                            Inicia sesión para acceder a las funciones del sistema
                        </p>
                    </div>
                    <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        class="mb-3"
                        required
                    />

                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Contraseña"
                        :counter="100"
                        :rules="nameRules"
                        v-model="ePassword"
                        @click:append="show = !show"
                    ></v-text-field>
                    <v-checkbox
                        class="mt-5"
                        v-model="checkbox1"
                        label="Recordar en este equipo"
                    ></v-checkbox>
                    <v-btn
                        :loading="loading"
                        to="/inicioAdmin"
                        block
                        style="background-color:#2492fd; color:#fefefe;"
                        dark
                        >Iniciar Sesión</v-btn
                    >
                   
                </v-card-text>

                <!-- error password snackbar  -->
                <v-snackbar v-model="snackbar" top color="danger">
                    El correo y la contraseña son requeridos
                    <template v-slot:action="{attrs}">
                        <v-btn
                            color=""
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                </v-snackbar>
            </base-card>
        </div>
    </div>
    </v-app>
</template>
<script>

export default {
  name: 'signup',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'SignUp 2'
  },
  data() {
    return {
      show: false,
      password: 'Password',
      checkbox1: true,
      checkbox2: false,
      email: '',
      ePassword: '',
      snackbar: false,
      emailRules: [
          (v) => !!v || 'El correo es requerido',
          (v) => /.+@.+\..+/.test(v) || 'Ingrese un correo válido'
      ],
      nameRules: [
          (v) => !!v || 'La contraseña es requerida'
      ]
    }
  },

  methods: {
    
  },
  computed:{
    
  }
}
</script>
<style lang="scss" scoped>
.page-wrap {
    background-color: #452d50 !important;
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
}
.session-form-hold {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
.tile{
  border-radius: 0%;
}
.v-input--checkbox::v-deep {
  .v-label {
    margin-left: 10px;
  }
}
</style>
