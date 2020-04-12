<template>
  <div class="person">
    <van-nav-bar title="个性签名" left-text left-arrow @click-left="onClickLeft">
      <template #right>
        <!-- <van-icon name="user-o" size="18" @click="home" /> -->
        保存
      </template>
    </van-nav-bar>
    <div class="in">
      <input type="text" value />
      <van-icon name="clear" class="biao" />
    </div>
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
.in {
  width: 100%;
  height: 0.4rem;
  //   background: yellowgreen;
  margin-top: 0.2rem;
  box-sizing: border-box;
  padding: 0 0.2rem;
  input {
    height: 100%;
    width: 3rem;
    border: 0;
  }
  .biao {
    float: right;
    margin-top: 0.1rem;
  }
}
</style>
