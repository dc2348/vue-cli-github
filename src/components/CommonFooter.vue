<template>
  <footer>
    <p class="copyright">Copyright© 2020 <router-link to="/">Shin,Hyesoo</router-link></p>
  </footer>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  bottom: 0;
  width: 100%;
  text-align: left;
  padding: 0 16px;
}

footer .copyright{
  font-size: 12px;
  color: #586069;
  padding-top: 40px;
  border-top: 1px solid #e1e4e8;
  margin: 40px 0;
}

footer .copyright a{
   color: #586069;
}
</style>