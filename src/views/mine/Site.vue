<template>
  <div class="person">
    <van-nav-bar title="管理收货地址" left-text left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="user-o" size="18" @click="home" />
      </template>
    </van-nav-bar>
    <div class="main">你还没有收货地址，添加一个吧</div>
    <div class="butt">添加收货地址</div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon, NavBar } from 'vant'

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
.main {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.butt {
  width: 100%;
  height: 0.5rem;
  background: black;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
</style>
