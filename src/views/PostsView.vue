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

import posts from '@/posts/index.js'

export default {
  data () {
    return {
        posts : posts[this.$route.params.pageId].mdfile
    }
  }
};
</script>

<style>

</style>