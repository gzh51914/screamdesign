<template>
  <div class="mine">
    <div class="top" @click="person">
      <img src="../assets/default_portrait.png" alt />
      <div class="top_text">
        <p>{{username}}</p>
      </div>
      <van-icon name="arrow" color="#ccc" size="25" class="jian" />
    </div>
    <div class="second">
      <div class="title" @click="total">全部订单</div>
      <Man></Man>
    </div>
    <div class="three">
      <div class="three_b" @click="coll">
        我的收藏
        <van-icon name="arrow" color="#ccc" size="25" class="jian" />
      </div>
      <div class="three_b" @click="disc">
        我的礼券
        <van-icon name="arrow" color="#ccc" size="25" class="jian" />
      </div>
      <div class="three_b">
        客服电话
        <span>周一至周日 9:00-21:00</span>
        <van-icon name="arrow" color="#ccc" size="25" class="jian" />
      </div>
    </div>
    <div class="exit" @click="ext">退出登录</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
import Man from '@/views/mine/Man'
// import axios from 'axios'
// import { instance, instance2 } from "@/utils/http";

Vue.use(Icon)

// console.log(localStorage.getItem("username"));
export default {
  data () {
    return {
      username: localStorage.getItem('username')
    }
  },
  components: {
    Man
  },
  methods: {
    coll () {
      this.$router.replace('/colle')
    },
    disc () {
      this.$router.replace('/disc')
    },
    total () {
      this.$router.push('/total/0')
    },
    person () {
      this.$router.push('/person')
    },
    ext () {
      this.$router.push('/login')
      window.localStorage.removeItem('token')
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #f5f5f5;
}
.top {
  width: 100%;
  height: 0.7rem;
  // background-color: yellow;
  margin: 0.065rem 0rem;
  position: relative;
  box-sizing: border-box;
  padding: 0.08rem 0rem;
  img {
    width: 0.52rem;
    height: 0.52rem;
    margin: 0rem 0.12rem;
    float: left;
  }
  .top_text {
    width: 2.13rem;
    height: 0.34rem;
    font-size: 0.16rem;
    display: inline-block;
    vertical-align: middle;
    margin-top: 0.03rem;
    margin-left: 0.05rem;
  }
  .jian {
    position: absolute;
    right: 0.08rem;
    margin-top: 0.1rem;
  }
}
.second {
  width: 100%;
  //   height: 2.55rem;
  //   background-color: yellowgreen;
  box-sizing: border-box;
  padding-left: 0.12rem;
  .title {
    width: 3.5rem;
    height: 0.42rem;
    // background: yellow;
    font-size: 0.16rem;
    border-bottom: 1px solid #eaeaea;
    line-height: 0.42rem;
  }
}
.three {
  margin-top: 0.15rem;
  //   background: yellow;
  .three_b {
    width: 100%;
    height: 0.52rem;
    box-sizing: border-box;
    padding-left: 0.08rem;
    font-size: 0.16rem;
    line-height: 0.52rem;
    border-top: 1px solid #eaeaea;
    span {
      font-size: 0.12rem;
      color: #cccccc;
      position: absolute;
      right: 0.7rem;
    }
    .jian {
      position: absolute;
      right: 0.08rem;
      margin-top: 0.1rem;
    }
  }
}
.exit {
  width: 100%;
  height: 0.42rem;
  //   background: yellowgreen;
  color: red;
  text-align: center;
  line-height: 0.42rem;
  font-size: 0.16rem;
  margin-top: 0.15rem;
}
</style>
