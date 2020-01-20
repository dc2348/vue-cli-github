<template>
    <!-- CommonHeader -->
    <!-- Bootstrap-Vue start-->
    <footer class="footer">
      <p class="copyright">Copyright© 2020 <a href="https://dc2348.github.io">Shin,Hyesoo</a> </p>
    </footer>
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
.body {
  margin-top: 60px;
  padding: 16px;
  font-family: 'Nanum Gothic Coding', monospace;
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
