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


export default {
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
}