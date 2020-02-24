<template>
  <div>
    <b-card>
      <markdown-post1 v-if="this.$route.params.id == 1" class="markdown-body"></markdown-post1>
      <markdown-post2 v-if="this.$route.params.id == 2" class="markdown-body"></markdown-post2>
    </b-card>
  </div>
</template>

<script>
import MarkdownPost1 from '@/posts/vue/2020-02-20-vue-markdown-loader.md'
import MarkdownPost2 from '@/posts/vue/2020-02-19-async-programming.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  components: {
    MarkdownPost1,
    MarkdownPost2
  }
};
</script>

<style>

</style>