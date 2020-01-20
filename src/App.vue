<template>
  <div id="app" class="app">
    
    <!-- header -->
    <!-- Bootstrap-Vue start-->
    <b-navbar type="light" variant="faded">
      <b-navbar-brand href="https://dc2348.github.io"> 
        <img src="./assets/images/icon_macaroon_30x30.jpg" class="d-inline-block align-top" alt="profile logo">
        <span lang="en"> Frontend</span> 개발
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto" lang="en">
        <b-nav-item href="https://dc2348.github.io">Home</b-nav-item>
        <b-nav-item href="#" disabled>Blog</b-nav-item>
        <b-nav-item href="#" disabled>Portfolio</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <!-- Bootstrap-Vue end-->

    <!-- body -->
    <HomeBody msg="Under Development..."/>

    <!-- footer -->
    <footer class="footer">
      <p class="copyright">Copyright© 2020 <a href="https://dc2348.github.io">Shin,Hyesoo</a> </p>
    </footer>

  </div>
</template>

<script>
import Vue from 'vue'
import HomeBody from './components/HomeBody.vue'

// Bootstrap-Vue start
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
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
    HomeBody
  }
}
</script>

<style>
.app {
  padding: 0 1.618em;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Nanum Gothic Coding', monospace;
}

*:lang(en) { 
  font-family: 'Ubuntu', sans-serif;
}

/* Bootstrap-Vue */
.selector-for-some-widget {
  box-sizing: content-box;
}

@media (min-width: 1000px) {
  .app {
    width: 1000px;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: left;
  padding: 16px;
}

.footer .copyright{
  font-size: 12px;
  color: #999;
  }

.footer .copyright a{
   color: #999;
}

</style>
