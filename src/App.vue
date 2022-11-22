<template>
  <v-app>
  
        <router-view></router-view>
  
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