<template>
  <div>
    <router-link v-for="(item, index) in posts" :key="item.title" :to="{ name: 'posts', params: { index: index + 1}}">
      <b-card class="mb-3">
        <font-awesome-icon :icon="['fab', item.category]" :style="{ color: colors[item.category] }"/>
        {{ item.title }}
      </b-card>
    </router-link>
  </div>
</template>

<script>
import posts from '@/posts/index.js'
import colors from '@/assets/js/colors.js'

export default {
  data () {
    return {
      posts,
      colors
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