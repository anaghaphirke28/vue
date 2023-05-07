<template>
 <v-app>
   <div class="main">
     <router-view></router-view>
   </div>
 </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style scoped>
.main {
  margin:10px;
}
</style>
