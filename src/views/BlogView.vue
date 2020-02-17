<template>
  <div>
    <div>
      <router-link :to="{ name: 'blogDetail', params: { id: 1 }}">
        <b-card  class="mb-3">
          <b-card-title>{{ POST1.title }}</b-card-title>
          <b-card-text>
            {{ POST1.summary }}
          </b-card-text>
          <b-card-text class="small text-muted">{{ POST1.date }}</b-card-text>
        </b-card>
      </router-link>
      <router-link :to="{ name: 'blogDetail', params: { id: 2 }}">
        <b-card>
          <b-card-title>{{ POST2.title }}</b-card-title>
          <b-card-text>
            {{ POST2.summary }}
          </b-card-text>
          <b-card-text class="small text-muted">{{ POST2.date }}</b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import POST1 from '@/posts/aws/2020-01-22-use-aws-cli.js'
import POST2 from '@/posts/aws/2020-01-23-clone-codecommit-repo-using-aws-cli.js'

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