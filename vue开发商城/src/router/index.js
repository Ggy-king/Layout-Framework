import { createRouter, createWebHashHistory } from 'vue-router' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },{
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')

  },{
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList.vue')

  },{
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList')
  },{
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "personal" */ '../views/personal/Personal')
  },{
    path: '/orderConfirmation',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderconfirmation" */ '../views/orderconfirmation/OrderConfirmation.vue')

  },{
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
     // 在跳转到这个页面之前 
     beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }

  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    // 在跳转到这个页面之前 
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }

  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// beforeEac可以解决页面是否允许被访问等问题  在路由每次做切换时执行
// from从哪里来(之前的页面)，to到哪里去(当前的页面) next转到下一个页面(你自己设的)
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (!isLogin && (to.name !== 'Login' && to.name !== 'Register')) ? next({ name: 'Login' }) : next();
})

export default router
