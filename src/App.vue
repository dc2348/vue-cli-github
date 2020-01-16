<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="profile logo" src="./assets/images/logo_profile.png">
    <HelloWorld msg="Welcome to Hyesoo`s Vue.js App!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
