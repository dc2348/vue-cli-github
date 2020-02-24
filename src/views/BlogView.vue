<template>
  <div>
    <router-link :to="{ name: 'blogDetail', params: { id: 1, category:'aws' }}">
      <b-card class="mb-3">
        <b-card-title>{{ POST1.title }}</b-card-title>
        <b-card-text>
          {{ POST1.summary }}
        </b-card-text>
        <b-card-text class="small text-muted">{{ POST1.date }}</b-card-text>
      </b-card>
    </router-link>
    <router-link :to="{ name: 'blogDetail', params: { id: 2, category:'aws' }}">
      <b-card class="mb-3">
        <b-card-title>{{ POST2.title }}</b-card-title>
        <b-card-text>
          {{ POST2.summary }}
        </b-card-text>
        <b-card-text class="small text-muted">{{ POST2.date }}</b-card-text>
      </b-card>
    </router-link>
    <router-link :to="{ name: 'blogDetail2', params: { id: 1, category:'vue' }}">
      <b-card  class="mb-3">
        <b-card-title>Vue-CLI3에서 markdown 파일 로드하기</b-card-title>
        <b-card-text class="small text-muted">2020-02-20 09:00:00 +0900</b-card-text>
      </b-card>
    </router-link>
    <router-link :to="{ name: 'blogDetail2', params: { id: 2, category:'vue' }}">
      <b-card  class="mb-3">
        <b-card-title>비동기적 프로그래밍</b-card-title>
        <b-card-text class="small text-muted">2020-02-19 15:00:00 +0900</b-card-text>
      </b-card>
    </router-link>
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

<style scoped>
a {
  color: #586069;
  text-decoration: none;
}
</style>