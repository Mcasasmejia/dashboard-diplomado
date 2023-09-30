<template>
  <div id="app">
    <MenuDashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MenuDashboard from './components/MenuDashboard.vue' // Agrega esta línea

export default {
  name: 'App',
  components: {
    MenuDashboard // Registra el componente MenuDashboard
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
