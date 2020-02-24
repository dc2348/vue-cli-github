<template>
  <div>
    <router-link v-for="item in posts" :key="item.title" :to="{ name: 'posts', params: { id: 1, category:'aws', component: item.mdfile}}">
      <b-card  class="mb-3">
        <b-card-title>{{ item.title }}</b-card-title>
        <b-card-text class="small text-muted">{{ item.date }}</b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>
import posts from '@/posts/index.js'

export default {
  data () {
    return {
      posts
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