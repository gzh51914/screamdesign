<template>
  <div class="colle">
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="user-o" size="18" @click="home" />
      </template>
    </van-nav-bar>

    <van-tabs v-model="activeName">
      <van-tab title="单品" name="a">
        <div class="wu">去收藏喜欢的单品吧</div>
      </van-tab>

      <van-tab title="品牌" name="b">
        <div class="wu">去收藏喜欢的品牌吧</div>
      </van-tab>

      <van-tab title="设计师" name="c">
        <div class="wu">去收藏喜欢的设计师吧</div>
      </van-tab>
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
      activeName: 'a'
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
// .van-tab__text {
//   font-size: 0.12rem;
// }
// .van-tabs__line {
//   background: #202020;
//   position: absolute;
//   bottom: 15px;
//   left: 0;
//   z-index: 1;
//   height: 3px;
//   /* background-color: #ee0a24; */
//   border-radius: 3px;
// }
.wu {
  width: 100%;
  height: 1rem;
  color: #808080;
  background: #f5f5f5;
  text-align: center;
  font-size: 0.14rem;
  line-height: 1rem;
}
</style>
