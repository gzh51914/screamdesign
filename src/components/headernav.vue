<template>
  <van-nav-bar :title="headermsg.title" left-arrow fixed>
    <van-icon name="arrow-left" slot="left" size="22" color="#b58c78" @click="handleBack"/>
    <van-icon :name="headermsg.rightname" slot="right" size="22" color="#b58c78" info="" />
  </van-nav-bar>
</template>

<script>
import Vue from 'vue'
import { Icon, NavBar } from 'vant'

Vue.use(Icon)
Vue.use(NavBar)

export default {
  props: ['headermsg'],
  methods: {
    handleBack () {
      this.$emit('back')
    }
  }
}
</script>

<style scoped>
.van-nav-bar__title {
  color: #b58c78
}
</style>
