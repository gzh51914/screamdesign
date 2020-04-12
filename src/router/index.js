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
  },
  {
    path: '/tui',
    name: 'tui',
    component: () => import('../views/mine/Tui.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/colle',
    name: 'colle',
    component: () => import('../views/mine/Colle.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/disc',
    name: 'disc',
    component: () => import('../views/mine/Disc.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/total/:id',
    name: 'total',
    component: () => import('../views/mine/Total.vue'),
    meta: {
      footShow: false
    },
    props: true
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/mine/Person.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/sex',
    name: 'sex',
    component: () => import('../views/mine/Sex.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/signa',
    name: 'signa',
    component: () => import('../views/mine/Signa.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/occu',
    name: 'occu',
    component: () => import('../views/mine/Occu.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/site',
    name: 'site',
    component: () => import('../views/mine/Site.vue'),
    meta: {
      footShow: false
    }
  },
  {
    path: '/nick',
    name: 'nick',
    component: () => import('../views/mine/Nick.vue'),
    meta: {
      footShow: false
    }
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
