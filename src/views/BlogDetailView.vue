<template>
  <div>
    <div>BlogDetailView 개발중입니다</div>
    <br>
    <markdown-it-vue class="md-body" :content="content1"/>
    <!-- <markdown-it-vue class="md-body" :content="content2"/> -->
  </div>
</template>

<script>
import MarkdownText1 from '@/posts/aws/2020-01-22-use-aws-cli'
import MarkdownText2 from '@/posts/aws/2020-01-22-clone-codecommit-repo-using-aws-cli'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content1: MarkdownText1,
      content2: MarkdownText2
    }
  }
};
</script>

<style>

</style>