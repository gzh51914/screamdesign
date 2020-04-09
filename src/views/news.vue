<template>
  <van-grid>
    <div class="header">
      <a href="" class="header-left">
        <van-grid-item icon="wap-home-o" :class="active" @click="onClickLeft"
      /></a>
      <h3><van-grid-item text="消息中心" /></h3>
      <a href="" class="header-right"
        ><van-grid-item icon="manager-o" :class="active" @click="onClickRight"
      /></a>
    </div>
  </van-grid>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem } from 'vant'

Vue.use(Grid)
Vue.use(GridItem)
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    },
    onClickRight () {
      this.$router.push('/mine')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: #fff;
  height: 0.88rem;
  line-height: 0.78rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;

  padding: 0rem 0.2rem 0rem 0.2rem;
  border-bottom: 1px solid #f5f5f5;
  .header-left {
    display: inline-block;

    height: 0.64rem;
    line-height: 0.5rem;
    position: absolute;
    left: 0.2rem;
    top: 27%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    border-radius: 50%;
    -moz-border-radius: 50%;
  }
  h3 {
    position: absolute;
    left: 50%;
    top: 27%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 0.34rem;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .header-right {
    display: inline-block;
    height: 0.64rem;
    line-height: 0.5rem;
    position: absolute;
    right: 0.2rem;
    top: 27%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    border-radius: 50%;
    -moz-border-radius: 50%;
    i {
      display: inline-block;
      width: 0.52rem;
      margin-top: 0.06rem;
      margin-bottom: 0.06rem;
      vertical-align: middle;
    }
  }
}
</style>
