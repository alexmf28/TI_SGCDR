<template>
    <div>
        <v-navigation-drawer 
   v-model="drawer"
    absolute
    temporary
    app clipped>
    <v-list>
      <v-list-item :to="{path: '/'}">
        <v-list-item-action>
          <v-icon>mdi-{{ icons[0] }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item-content>
      </v-list-item>                    
       <v-list-item :to="{path: '/productos'}">
        <v-list-item-action>
          <v-icon>mdi-{{ icons[1] }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{path: '/crear'}">
        <v-list-item-action>
          <v-icon>mdi-{{ icons[2] }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>...</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
   <v-system-bar color="deep-purple darken-3"></v-system-bar>      
  <v-app-bar class="deep-purple accent-4 white--text">
  <v-app-bar-nav-icon @click="drawer=true" class="white--text"></v-app-bar-nav-icon>
    <v-toolbar-title>                
    <v-list-item :to="{path: '/'}">                
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      src="../../assets/Logo-Rayotec.png"
      transition="scale-transition"
      width="40"         
      :to="{path: '/'}" 
    />
    </v-list-item>
    </v-toolbar-title>
  </v-app-bar>      
  
  </v-card> 
    </div>
</template>
<script>
export default {
data: () => ({    
drawer: false,
icons: ['home','shopping','email'],
}),
};
</script>