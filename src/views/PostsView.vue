<template>
  <div>
    <b-card>
      <component :is="post" class="markdown-body"></component>
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
        posts
    }
  },
  computed: {
    post: function () {
      let result;
      for(let item of posts) {
        if(item.pageId == this.$route.params.pageId){
          result = item
        }
      }
      return result.mdfile
    }
  }
};
</script>

<style>

</style>