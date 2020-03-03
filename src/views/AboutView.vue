<template>
  <div>
    <b-card>
      <component :is="about" class="markdown-body"></component>
    </b-card>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import about from '@/about/about.md'

export default {
  data () {
    return {
        about
    }
  }
};
</script>

<style>

</style>