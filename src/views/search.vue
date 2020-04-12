<template>
  <div class="search">
    <!-- 头部 -->
    <div class="header">
      <van-search class="van-search" v-model="value" placeholder="搜索我的尖叫好物" />
      <a href="./home.vue" class="header-right">
        <img src="../logo/2.png" alt />
      </a>
    </div>
    <!-- 搜索 -->
    <div class="searchCon">
      <div class="hot">
        <p class="hotTile">热门搜索</p>
        <div class="keyword" v-for="item in dataList">{{item}}</div>
      </div>
    </div>

    <!-- 历史记录 -->
    <div class="history">
        <div class="historyTop">
            <p class="historyTitle">历史纪录</p>
            <div class="cleanSearchDiv">
                <img src="../logo/3.png" alt="" class="cleanSearchimg">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
Vue.use(Search)
export default {
  data () {
    return {
      dataList: [
        '尖叫实验室',
        '暖手宝',
        '沙发',
        '杯子',
        '餐具',
        '茶具',
        '吊灯',
        '厨房',
        '儿童',
        'HAY',
        'Arabia',
        '家室',
        '收纳',
        '床上用品',
        '旅行'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  background: #fff;
  .header {
    height: 0.44rem;
    line-height: 0.44rem;
    position: relative;
    padding: 0rem 0.1rem 0rem 0.1rem;
    border-bottom: 1px solid #f5f5f5;
    .van-search {
      width: 2.7rem;
      height: 0.28rem;
      position: absolute;
      top: 8px;
      border-radius: 0.15rem;
      background: #f5f5f5;
      .van-search__content {
        width: 2.46rem;
        height: 0.27rem;
        border-radius: 0.15rem;
      }
    }
    .header-right {
      display: inline-block;
      width: 0.32rem;
      height: 0.32rem;
      line-height: 0.25rem;
      position: absolute;
      right: 0.1rem;
      top: 50%;
      img {
        display: inline-block;
        width: 0.27rem;
        margin-top: -0.24rem;
        margin-bottom: 0.03rem;
        vertical-align: middle;
      }
    }
  }
  .searchCon {
    width: 3.75rem;
    height: 3.42rem;
    margin-top: 0.1rem;
    font-size: 0.12rem;
    .hot {
      width: 3.75rem;
      height: 2.43rem;
      padding: 18px 16px 0px;
      .hotTile {
        height: 0.18rem;
        color: #808080;
        margin-bottom: 0.15rem;
      }
      .keyword {
        width: 0.54rem;
        height: 0.36rem;
        line-height: 0.36rem;
        margin-right: 0.1rem;
        margin-bottom: 0.15rem;
        font-size: 0.12rem;
        color: #000;
        text-align: center;
        background-color: #f5f5f5;
        float: left;

      }
      .keyword:nth-of-type(1) {
          width: 0.9rem;
          height: 0.36rem;
        }

      .keyword:nth-of-type(11) {
        width: 0.67rem;
        height: 0.36rem;
      }
        .keyword:nth-of-type(2) {
        width: 0.67rem;
        height: 0.36rem;
      }
      .keyword:nth-of-type(14) {
        width: 0.78rem;
        height: 0.36rem;
      }

    }
  }
.history{
          width: 3.75rem;
          height: 0.99rem;
          padding: 18px 16px 0px;
          .historyTop{
              width: 3.75rem;
              height: 0.33rem;
              .historyTitle{
                  width: 80%;
                  display: inline-block;
                   color: #808080;
                  margin-bottom: 0.15rem;
              }
              .cleanSearchDiv{
                      width: 13.5%;
                      display: inline-block;
                      .cleanSearchimg{
                               margin-left: 0.3rem;
                                width: 0.14rem;
                                height: 0.14rem;
                      }
              }
          }
    }
}
</style>
