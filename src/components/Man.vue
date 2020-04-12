<template>
  <ul>
    <router-link
      v-for="main in mainlist"
      :to="{name:`${main.path}`,params:{id:main.id}}"
      :key="main.id"
      tag="li"
    >
      <van-icon :name="main.icon" size="20" class="biao" />
      <div class="nei">
        {{main.title}}
        <van-icon name="arrow" color="#ccc" size="25" class="jian" />
      </div>
    </router-link>
  </ul>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  data () {
    return {
      mainlist: [
        { id: 1, title: '待付款', path: 'total', icon: 'pending-payment' },
        { id: 2, title: '待发货', path: 'total', icon: 'gift-o' },
        { id: 3, title: '待收货', path: 'total', icon: 'logistics' },
        { id: 4, title: '待评论', path: 'total', icon: 'records' },
        { id: 5, title: '退换货', path: 'tui', icon: 'after-sale' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  li {
    height: 0.52rem;
    .biao {
      display: inline-block;
      vertical-align: middle;
    }
    .nei {
      width: 3.26rem;
      height: 100%;
      // background: pink;
      font-size: 0.14rem;
      line-height: 0.52rem;
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      padding-left: 0.08rem;
      border-bottom: 1px solid #eaeaea;
      .jian {
        position: absolute;
        right: 0.08rem;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
