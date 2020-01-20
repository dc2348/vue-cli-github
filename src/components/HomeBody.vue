<template>
  <div class="body">
      <div>
      <b-card img-src="../assets/images/background_macaroon.jpg" img-alt="Card image" img-top>
        <b-card-text>
          쇼핑몰 개발을 하며 경험하는 것들을 기록해보려고 합니다.
        </b-card-text>
        <b-button lang="en" href="#" variant="outline-secondary">Go Blog</b-button> <span> </span>
        <b-button lang="en" href="#" variant="outline-secondary">Go Portfolio</b-button>
      </b-card>
    </div>
  </div>
  
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Homebody',
  props: {
    msg: String
  }
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

*:lang(en) { 
  font-family: 'Ubuntu', sans-serif;
}
</style>
