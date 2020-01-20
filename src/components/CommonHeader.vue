<template>
    <!-- CommonHeader -->
    <!-- Bootstrap-Vue start-->
    <b-navbar type="light" variant="faded">
      <b-navbar-brand href="https://dc2348.github.io"> 
        <img src="../assets/images/icon_macaroon_30x30.jpg" class="d-inline-block align-top" alt="profile logo">
        <span lang="en"> Frontend</span> 개발
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto" lang="en">
        <b-nav-item href="https://dc2348.github.io">Home</b-nav-item>
        <b-nav-item href="#" disabled>Blog</b-nav-item>
        <b-nav-item href="#" disabled>Portfolio</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <!-- Bootstrap-Vue end-->
</template>

<script>
import Vue from 'vue'

export default {
  name: 'CommonHeader'
}

// Bootstrap-Vue start
import { BootstrapVue, CardPlugin, ButtonPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(CardPlugin)
Vue.use(ButtonPlugin)
// Bootstrap-Vue end
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
