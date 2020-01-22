<template>
  <div id="app" class="app">
    <!-- Header -->
    <common-header/>
    <!-- Body -->
    <router-view class="body"></router-view>
    <!-- Footer -->
    <common-footer/>
  </div>
</template>

<script>
import Vue from 'vue'
// import HomeView from './views/HomeView.vue'
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  components: {
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

@media (min-width: 800px) {
  .app {
    width: 800px;
  }
}

.body {
  padding: 1rem;
}
</style>
