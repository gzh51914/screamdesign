<template>
  <div class="colle">
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="user-o" size="18" @click="home" />
      </template>
    </van-nav-bar>

    <van-tabs v-model="active">
      <van-tab title="全部">暂无订单</van-tab>
      <van-tab title="待付款">暂无订单</van-tab>
      <van-tab title="待发货">暂无订单</van-tab>
      <van-tab title="待收货">暂无订单</van-tab>
      <van-tab title="待评论">暂无订单</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon, NavBar, Tab, Tabs } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(NavBar)
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    home () {
      this.$router.replace('/home')
    }
  },
  data () {
    return {
      active: this.$route.params.id
    }
  }
}
</script>
<style lang="scss" scoped>
.van-icon {
  color: black;
  font-size: 18px;
}
.van-nav-bar__title {
  font-weight: bold;
}
.van-tab__pane {
  width: 100%;
  height: 2rem;
  text-align: center;
}
.van-tab {
  font-size: 0.12rem;
}
</style>
