import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue'),
    beforeEnter (to, from, next) {
      console.log('进入Center了哦....')
      next()
    },
    meta: {
      footShow: true
    }
  },
  { 
    path: '/listPage/:id', // 携带参数
    name: 'listPage',
    component: () => import('../views/listPage.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: () => import('../views/shopCart.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/news/newslist/:id',
    name: 'newslist',
    component: () => import('../views/newslist.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: () => import('../views/coupon.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: () => import('../views/topic.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/Person',
    name: 'Person',
    component: () => import('../views/mine/Person.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/Colle',
    name: 'Colle',
    component: () => import('../views/mine/Colle.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/Disc',
    name: 'Disc',
    component: () => import('../views/mine/Disc.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/Total',
    name: 'Total',
    component: () => import('../views/mine/Total.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/details.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: '',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/news' || to.path === '/mine' || to.path === '/shopCart') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      localStorage.setItem('path', to.path)
      next('/login')
    }
  } else {
    next()
  }
})

export default router
