<template>
  <div class="tui">
    <van-nav-bar title="优惠券" left-text left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="user-o" size="18" @click="home" />
      </template>
    </van-nav-bar>
    <div class="shu">
      <input type="text" placeholder="请输入兑换码" class="wen" />
      <input type="button" value="兑换" class="dian" />
    </div>
    <ul>
      <li v-for="xu in xun" :key="xu.id">
        <span>
          {{xu.deduction}}
          <em>元</em>
        </span>
        <div class="l_right">
          <p class="p1">{{xu.title}}</p>
          <p class="p2">{{xu.limitDesc}}</p>
          <p class="p3">{{xu.effectiveFrom}}至{{xu.effectiveTo}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'
// import axios from 'axios'
// import { instance, instance2 } from '@/utils/http'

Vue.use(NavBar)
export default {
  data () {
    return {
      xun: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    home () {
      this.$router.replace('/home')
    }
  },
  created () {
    // instance.get("/api/goods/messages").then(res => {
    //   console.log(res);
    // });
    fetch('http://localhost:8000/disc.json')
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.xun = res.data
        console.log(this.xun)
      })
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
.shu {
  width: 100%;
  height: 0.37rem;
  background-color: #f5f5f5;
  text-align: center;
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding-left: 0.2rem;
  margin: 0.15rem 0rem;
  .wen {
    padding-left: 0.1rem;
    width: 2.53rem;
    height: 0.37rem;
    background-color: #fff;
    color: #000;
    float: left;
    border: 0;
    font-size: 0.12rem;
  }
  .dian {
    width: 0.68rem;
    height: 0.37rem;
    line-height: 0.37rem;
    background-color: #ffd444;
    color: #000;
    border: 0;
  }
}
ul {
  li {
    width: 100%;
    height: 1rem;
    z-index: 999;
    background: #fff;
    // background-size: 1rem 1.8rem;
    position: relative;
    margin-bottom: 0.1rem;
    span {
      display: inline-block;
      width: 1.25rem;
      height: 100%;
      line-height: 1rem;
      font-family: "PingFangSC-Semibold";
      font-size: 0.4rem;
      text-align: center;
      border-right: 1px dashed #ccc;
      background-color: #fcfcfc;
      em {
        font-size: 0.12rem;
      }
    }
    .l_right {
      width: 1.62rem;
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      left: 1.55rem;
      top: 20%;
      .p1 {
        font-size: 0.15rem;
        color: #000;
      }
      .p2 {
        font-size: 0.13rem;
        color: #ff7070;
      }
      .p3 {
        font-size: 0.13rem;
        color: #808080;
      }
    }
  }
}
</style>
