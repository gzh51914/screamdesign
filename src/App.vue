<template>
  <div id="app">
<<<<<<< HEAD
    <nav v-if="$route.meta.footShow">
      <ul>
=======
    <router-view />
    <nav>
      <ul v-if="$route.meta.footShow">
>>>>>>> lgd
        <router-link
          v-for="nav in navList"
          :key="nav.id"
          :to="nav.path"
          tag="li"
          active-class="active"
        >
          <van-icon :name="nav.icon" size="20" />
          <span>{{nav.title}}</span>
        </router-link>
      </ul>
    </nav>
<<<<<<< HEAD
=======
    <router-view />
>>>>>>> my
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> my

=======
>>>>>>> lgd
Vue.use(Icon)
export default {
  data () {
    return {
      navList: [
        {
          name: 'home',
          path: '/home',
          icon: 'home-o',
          title: '首页'
        },
        {
          name: 'list',
          path: '/list',
          icon: 'apps-o',
          title: '分类'
        },
        {
          name: 'shopCart',
          path: '/shopCart',
          icon: 'shopping-cart-o',
          title: '购物车'
        },
        {
          name: 'news',
          path: '/news',
          icon: 'envelop-o',
          title: '消息'
        },
        {
          name: 'mine',
          path: '/mine',
          icon: 'user-o',
          title: '我'
        }
      ]
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
.active {
  color: #000;
}
nav {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 0.5rem;
  background: #fff;
  z-index: 10;
  color: #808080;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 0.25rem;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
}

</style>
