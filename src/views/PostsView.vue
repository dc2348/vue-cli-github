<template>
  <div>
    <b-card>
      <component :is="posts" class="markdown-body"></component>
    </b-card>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  data () {
    return {
        posts : this.$route.params.component
    }
  }
};
</script>

<style>

</style>