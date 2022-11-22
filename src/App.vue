<template>
  <v-app>
  
  <v-main>
    <v-container fluid>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-container>
  </v-main>  
</v-app>
</template>
<script>
export default {
name: 'App',
data: () => ({    
drawer: false,
icons: ['home','shopping','email'],
}),
};
</script>