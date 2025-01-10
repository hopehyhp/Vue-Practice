import Vue from 'vue'
import Router from 'vue-router'
import Table from "@/views/table"
import Calendar from "@/views/calendar"
import Test from "@/views/test"
import Index from "@/views/Index.vue";
import HomeContent from "@/views/HomeContent.vue";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      children: [
        { path: '/homepage', name: 'homepage', component: HomeContent },
        { path: '/table', name: 'table', component: Table },
        { path: '/calendar', name: 'calendar', component: Calendar },
        { path: '/test', name: 'test', component: Test },
        // { path: '/foundlist', name: 'foundlist', component: FoundList }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('./views/login/index.vue')
    },
    {
      path: '/infoshow',
      name: 'InfoShow',
      component: () => import('./views/userInfo/InfoShow.vue')
    },
  ]
})


export default router;
