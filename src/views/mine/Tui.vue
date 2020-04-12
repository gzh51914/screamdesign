<template>
  <div class="tui">
    <van-nav-bar title="退换货列表" left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1)
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
</style>
