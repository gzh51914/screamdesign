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
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue')
  },
  {
    path: '/topic',
    name: 'topic',
    component: () => import('../views/topic.vue')
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () => import('../views/item.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue'),
    meta: {
      footShow: true
    }
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: () => import('../views/shopCart.vue'),
    meta: {
      footShow: true
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
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue'),
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
  }
]

const router = new VueRouter({
  mode: '',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/news' || to.path === '/mine') {
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
