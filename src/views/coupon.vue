<template>
  <div class="header">
    <van-tabbar :fixed="false">
      <van-tabbar-item icon="home-o" @click="onClickLeft"></van-tabbar-item>
      <van-tabbar-item>优惠券</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="onClickRight"></van-tabbar-item>
    </van-tabbar>

    <div class="yhboxParentDiv">
      <div class="yhbox">
        <!-- 优惠码  兑换 -->
        <div class="no-use">
          <input
            type="text"
            id="redemptionCode"
            name="text"
            placeholder="请输入兑换码"
          />
          <input
            type="button"
            name="button"
            value="兑换"
            onclick="getCoupon();"
            class="btn"
          />
        </div>
        <div class="yibai nouse" v-for="(item, index) in list" :key="index">
          <span class="money">{{ item.deduction }}<em>元</em></span>
          <ul>
            <li class="li1">{{ item.name }}</li>
            <li class="li2">{{ item.limitDesc }}</li>
            <li class="li3">
              {{ item.effectiveFrom }}至{{ item.effectiveTo }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
export default {
  data () {
    return {
      active: 0,
      list: [],
      isShow: true,
      isread: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    },
    onClickRight () {
      this.$router.push('/mine')
    },
    toDetail (id) {
      // this.$router.push(`/new/${id}`)
      this.$router.push(`/topic/${id}`)
    }
  },
  created () {
    axios.get('http://114.215.128.76:3000/goods/quan').then(res => {
      console.log(res)
      this.list = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
.yhbox {
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  .no-use {
    width: 100%;
    height: 0.88rem;
    text-align: center;
    font-size: 0.2rem;
    #redemptionCode {
      width: 2.3rem;
      height: 0.44rem;
      padding-left: 0.2rem;
      background-color: #fff;
      color: #000;
      float: left;
    }
    .btn {
      width: 0.8rem;
      height: 0.44rem;
      background-color: #ffd444;
      color: #000;
      float: right;
    }
  }
  .yibai {
    width: 100%;
    height: 1rem;
    background: #fff;
    background-size: 1rem 1.8rem;
    position: relative;
    margin-bottom: 0.3rem;
    top: -0.2rem;
    .money {
      font-family: "PingFangSC-Semibold";
      font-size: 0.3rem;
      text-align: center;
      border-right: 1px dashed #ccc;
      background-color: #fcfcfc;
      em {
        font-style: normal;
        font-size: 0.24rem;
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      left: 1.4rem;
      top: 23%;
      transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      .li1 {
        color: #000;
      }
      .li2 {
        color: #ff7070;
      }
      .li3 {
        color: #808080;
      }
    }
  }
}
</style>
