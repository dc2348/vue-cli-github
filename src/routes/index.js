import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue"
import BlogView from "../views/BlogView.vue"
import PortfolioView from "../views/PortfolioView.vue"
import BlogDetailView from "../views/BlogDetailView.vue"


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        // path : url에 대한 정보
        // conponent: url 주소로 갔을 때 표시될 컴포넌트
        {
            path: '/home',
            component: HomeView
        },
        {
            path: '/blog',
            component: BlogView
        },
        {
            path: '/portfolio',
            component: PortfolioView
        },
        {
            path: '/blogDetail',
            component: BlogDetailView,
            name : 'blogDetail'
        }
      ]
});