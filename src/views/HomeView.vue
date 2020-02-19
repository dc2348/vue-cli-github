<template>
  <div class="body">
      <div>
      <b-card>
        <b-card-text>
          쇼핑몰 개발을 하며 경험하는 것들을 기록해보려고 합니다.
        </b-card-text>
        <!-- bootstrap-vue original -->
        <!-- <b-button lang="en" href="#" variant="outline-secondary">Go Blog</b-button> <span> </span>
        <b-button lang="en" href="#" variant="outline-secondary">Go Portfolio</b-button> -->

        <!-- bootstrap-vue Router link support -->
        <b-button to="/blog" variant="outline-secondary" lang="en" >Blog</b-button> <span></span>
        <b-button to="/portfolio" variant="outline-secondary" lang="en">Portfolio</b-button>
      </b-card>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
