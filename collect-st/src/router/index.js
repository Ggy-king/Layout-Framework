import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 引入子路由
import CheckCollect from '@/views/CheckCollect'
import DoneCollect from '@/views/DoneCollect'
import StudentManage from '@/views/StudentManage'
import WelcomeView from '@/views/WelcomeView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页'
    },
    redirect:'/welcomeview',
    children:[
      {
        path: 'welcomeview',
        name: 'welcomeview',
        meta: {
          title: '欢迎来到题集库'
        },
        component:WelcomeView
      },
      {
        path: 'checkcollect',
        name: 'checkcollect',
        meta: {
          title: '寻找更多优秀的题集'
        },
        component:CheckCollect
      },
      {
        path: 'donecollect',
        name: 'donecollect',
        meta: {
          title: '查看已收藏'
        },
        component:DoneCollect
      },
      {
        path: 'studentmanage',
        name: 'studentmanage',
        meta: {
          title: '个人中心'
        },
        component:StudentManage
      },
    ]
  }, {
    path: '/loginview',
    name: 'loginview',
    meta: {
      title: '登录页面'
    },
    component: () => import(/* webpackChunkName: "LoginView" */ '../views/login/LoginView.vue'),
    beforeEnter(to, from, next) {
      let isLogin = sessionStorage.getItem('isLogin');
      (isLogin === 'sure') ? next({ name: 'welcomeview' }) : next();
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  ((isLogin !== 'sure') && to.name !== 'loginview') ? next({ name: 'loginview' }) : next();
})

export default router