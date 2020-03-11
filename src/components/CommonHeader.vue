<template>
    <header>
      <b-navbar type="light" variant="faded">
        <b-navbar-brand to="/"> 
          <img src="../assets/images/icon/icon_macaroon_30x30.jpg" class="d-inline-block align-top" alt="profile logo" />
          Frontend 개발
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <!-- bootstrap-vue original -->
          <!-- <b-nav-item href="#" disabled>Blog</b-nav-item>
          <b-nav-item href="#" disabled>About</b-nav-item> -->

          <!-- vue-router original -->
          <!-- <router-link to="/">Blog</router-link>
          <router-link to="/about">About</router-link> -->

          <!-- bootstrap-vue Router link support -->
          <b-nav-item to="/">Blog</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </header>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>