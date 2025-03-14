import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/index.vue'
 
import { userFromStore } from '@/stores'
import hooks from '@/utils/hooks'

const routes: Array<RouteRecordRaw> =  [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/total',
    children: [
      {
        path: 'total',
        name: 'total',
        component: () => import('@/views/total/index.vue')
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('@/views/articles/index.vue'),
      },
      
      {
        path: 'market',
        name: 'market',
        component: () => import('@/views/market/index.vue'),
      },
      {
        path: 'market-show',
        name: 'marketShow',
        component: () => import('@/views/market-show/index.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/index.vue'),
      },
      {
        path: 'tool',
        name: 'tool',
        component: () => import('@/views/tool/index.vue'),
      },
      {
        path: 'rates',
        name: 'rates',
        component: () => import('@/views/rates/index.vue'),
      },
      {
        path: 'topic',
        name: 'topic',
        component: () => import('@/views/topic/index.vue'),
      },
      {
        path: 'navigator',
        name: 'navigator',
        component: () => import('@/views/navigator/index.vue'),
      },
      {
        path: 'essay/:id?',
        name: 'essay',
        component: () => import('@/views/essay/index.vue'),
      },
      {
        path: 'write/:id?',
        name: 'write',
        component:() => import('@/views/write/index.vue'), 
      },
      {
        path: 'developer',
        name: 'developer',
        component: () => import('@/views/developer/index.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/search/index.vue'),
      },
      {
        path: 'person',
        name: 'person',
        component: () => import('@/views/person/index.vue'),
      },
      {
        path: '/:catchAll(.*)', // 动态路由匹配所有未定义的路由
        name: 'NotFound',
        component: () => import('@/views/notFound/index.vue'),
      }

    ]
  }
  
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {    // 控制滚动条是否保存位置
    
    if (['articles'].includes(to.name as string)) {
      if(from.name === 'essay') {
        if(savedPosition) return savedPosition
      } else {
        return { top: 0 }
      }
      
    } else {
      return { top: 0 }
    }
  }
})

const protectedViews:string[] = ['/person']
router.beforeEach((to,from,next) => {
  if(protectedViews.includes(to.path)) {
    const userStore = userFromStore()

    if(userStore.token) {
      return next()
    } else {
      next('/total')
      hooks.message('您还没有登录，请先登录','warning')
    }
  }

  next()

})

export default router
