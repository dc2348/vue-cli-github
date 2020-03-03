import Vue from "vue";
import VueRouter from "vue-router";
import BlogView from "../views/BlogView.vue"
import AboutView from "../views/AboutView.vue"
import BlogDetailView from "../views/BlogDetailView.vue"
import PostsView from "../views/PostsView.vue"


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: BlogView
        },
        {
            path: '/about',
            component: AboutView
        },
        {
            path: '/blogDetail/:category/:id',
            component: BlogDetailView,
            name : 'blogDetail'
        },
        {
            path: '/posts/:index',
            component: PostsView,
            name : 'posts'
        }
      ]
});