<template>
  <div>
    <markdown-it-vue class="md-body" :content="CONTENT"/>
  </div>
</template>

<script>
import POST1 from '@/posts/aws/2020-01-22-use-aws-cli.js'
import POST2 from '@/posts/aws/2020-01-23-clone-codecommit-repo-using-aws-cli.js'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue
  },
  created () {
    this.CONTENT = eval(`this.POST${this.$route.params.id}.content`)
  },
  data () {
    return {
      POST1,
      POST2,
      CONTENT: ''
    }
  }
};
</script>

<style>

</style>