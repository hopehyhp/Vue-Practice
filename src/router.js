import Vue from 'vue'
import Router from 'vue-router'
import Table from "@/views/table"
import Calendar from "@/views/calendar"
import Test from "@/views/test"
import Index from "@/views/Index.vue";
import HomeContent from "@/views/HomeContent.vue";
import newCheck from "@/views/newCheck.vue";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: Index,
            redirect: '/homepage',
            children: [
                {path: '/homepage', name: 'homepage', component: HomeContent, meta: {title: '首页'}},
                {path: '/table', name: 'table', component: Table, meta: {title: 'Element UI - table'}},
                {path: '/calendar', name: 'calendar', component: Calendar, meta: {title: 'Element UI - calendar'}},
                {path: '/test', name: 'test', component: Test, meta: {title: 'Element UI - test'}},
                {path: '/newCheck', name: 'newCheck', component: newCheck, meta: {title: 'Element UI - check'}},
                {
                    path: '/entertainment',
                    name: 'entertainment',
                    component: () => import('./views/entertainment/index.vue'),
                    meta: {title: '娱乐模块 - 猜数字'}
                },
            ]
        },
        {
            path: '/API',
            component: Index,
            redirect: '/homepage',
            children: [
                {
                    path: '/weather',
                    name: 'weather',
                    component: () => import('./views/WeatherForecast.vue'), meta: {title: 'API TEST - weather'}
                },
            ]
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: () => import('./views/login/index.vue')
        },

    ]
})

// 添加全局路由守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    // 如果路由配置了title，则设置页面标题
    if (to.meta.title) {
        document.title = to.meta.title
    }
    // 如果访问的是登录页，直接放行
    if (to.path === '/login') {
        next()
        return
    }

    // 检查是否有token
    if (!token) {
        // 如果没有token，重定向到登录页
        next('/login')
        return
    }

    // 有token，允许访问
    next()
})
export default router;
