import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue"
import BlogView from "../views/BlogView.vue"
import PortfolioView from "../views/PortfolioView.vue"
import BlogDetailView from "../views/BlogDetailView.vue"
import PostsView from "../views/PostsView.vue"


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        // path : url에 대한 정보
        // conponent: url 주소로 갔을 때 표시될 컴포넌트
        // {
        //     path: '/',
        //     component: HomeView
        // },
        {
            path: '/',
            component: BlogView
        },
        {
            path: '/portfolio',
            component: PortfolioView
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