<template>
  <div id="app" class="app">
    <!-- Header -->
    <CommonHeader/>
    <!-- body -->
    <HomeBody msg="Under Development..."/>
    <!-- footer -->
    <CommonFooter/>

  </div>
</template>

<script>
import Vue from 'vue'
import HomeBody from './components/HomeBody.vue'
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

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
    HomeBody,
    CommonHeader,
    CommonFooter
  }
}
</script>

<style>
.app {
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

@media (min-width: 1000px) {
  .app {
    width: 1000px;
  }
}
</style>
