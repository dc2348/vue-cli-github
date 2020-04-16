<template>
  <div id="app" class="app">
    <!-- Header -->
    <common-header/>
    <!-- Section -->
    <common-section/>
    <!-- Footer -->
    <common-footer/>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonSection from './components/CommonSection.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  components: {
    CommonHeader,
    CommonSection,
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
  font-family: Consolas;
}

@media (min-width: 900px) {
  .app {
    width: 900px;
  }
}
</style>
