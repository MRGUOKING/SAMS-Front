<template>
  <Header v-if="!$route.path.includes('/login')" />
  <div style="height: 800px">
    <router-view></router-view>
  </div>


</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
