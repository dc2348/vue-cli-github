<template>
  <div>
    <ul>
      <li><router-link :to="{ name: 'blogDetail', params: { id: 1 }}">{{ POST1.title }}</router-link></li>
      <li><router-link :to="{ name: 'blogDetail', params: { id: 2 }}">{{ POST2.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import POST1 from '@/posts/aws/2020-01-22-use-aws-cli.js'
import POST2 from '@/posts/aws/2020-01-22-clone-codecommit-repo-using-aws-cli.js'

export default {
  data () {
    return {
      POST1,
      POST2
    }
  }
};
</script>

<style>

</style>