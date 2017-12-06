import Vue from 'vue'
import Router from 'vue-router'

// FontEnd template
import Home from './components/FontEnd/Home.vue'
import ArticleList from './components/FontEnd/ArticleList.vue'
import Article from './components/FontEnd/Article.vue'

// Admin template
import Admin from './components/Admin/Admin.vue'
import Login from './components/Admin/Login.vue'
import Dashboard from './components/Admin/Dashboard.vue'
import AdminArticleList from './components/Admin/ArticleList.vue'
import Release from './components/Admin/Release.vue'
import Comment from './components/Admin/Comment.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                component: ArticleList
            },
            {
                path: ':index',
                component: ArticleList
            },
            {
                path: ':index/:id',
                component: Article
            }
        ]
    },{
        path: '/admin',
        component: Admin,
        redirect: '/admin/dashboard',
        meta: {
            auth: true  //这里设置该路由需要校验
        },
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'adminarticlelist',
                component: AdminArticleList
            },
            {
                path: 'release',
                component: Release
            },
            {
                path: 'comment',
                component: Comment
            }
        ]
    },{
        path: '/login',
        component: Login
    },{
        path: '/',
        redirect: '/home'
    },{
        path: '*',
        redirect: '/home'
    }]
});
