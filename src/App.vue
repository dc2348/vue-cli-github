<template>
  <div id="app">
    <div>
      <!-- Bootstrap-Vue start-->
      <b-navbar type="light" variant="faded">
        <b-navbar-brand href="#"> 
          <img src="./assets/images/logo_profile_with_line_30x30.png" class="d-inline-block align-top" alt="profile logo">
          사이트 이름
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#" disabled>Blog</b-nav-item>
          <b-nav-item href="#" disabled>Portfolio</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <!-- Bootstrap-Vue end-->
    </div>
    <HelloWorld msg="under development"/>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// Bootstrap-Vue start
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Bootstrap-Vue end

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

/* Bootstrap-Vue */
.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
