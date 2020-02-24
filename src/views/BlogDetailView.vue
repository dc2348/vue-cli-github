<template>
  <div>
    <b-card>
      <template v-slot:header>
        <h6 class="mb-0">{{ POST.title }}</h6>
      </template>
      <markdown-it-vue class="md-body p-3" :content="`${POST.content}`"/>
    </b-card>
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
    this.POST = eval(`this.POST${this.$route.params.id}`)
  },
  data () {
    return {
      POST1,
      POST2,
      POST: ''
    }
  }
};
</script>

<style>

</style>