<template>
  <div>
    <b-card>
      <component :is="currentPost[this.$route.params.id-1]" class="markdown-body"></component>
      <!-- <markdown-post1 v-if="this.$route.params.id == 1" class="markdown-body"></markdown-post1> -->
    </b-card>
  </div>
</template>

<script>
import MarkdownPost1 from '@/posts/aws/2020-01-22-use-aws-cli.md'
import MarkdownPost2 from '@/posts/aws/2020-01-23-clone-codecommit-repo-using-aws-cli.md'
import MarkdownPost3 from '@/posts/vue/2020-02-20-vue-markdown-loader.md'
import MarkdownPost4 from '@/posts/vue/2020-02-19-async-programming.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  data () {
    return {
      currentPost: [
        MarkdownPost1, 
        MarkdownPost2, 
        MarkdownPost3, 
        MarkdownPost4]
    }
  },
  components: {
    MarkdownPost1,
    MarkdownPost2,
    MarkdownPost3,
    MarkdownPost4
  }
};
</script>

<style>

</style>