<template>
  <div class="header">
    <van-tabbar @click="active" :fixed="false">
      <van-tabbar-item icon="home-o" @click="onClickLeft"></van-tabbar-item>
      <van-tabbar-item>消息中心</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="onClickRight"></van-tabbar-item>
    </van-tabbar>
    <div class="columnList">
      <div id="commentRoot">
        <div class="clearfix messageInfor" v-for="(item,index) in List" :key="index">
          <img src="https://m.wowdsgn.com/static/img/official_message.png" class="messageIcon" />
          <div class="messageInforRihgt">
            <div class="messageInforRihgtTop">
              <span class="columnName">{{item.title}}</span>
              <li
                href="/message/list?msgType=2"
                class="columnTitleRight"
                @click="toList(item.msgType)"
              >
                <van-icon name="arrow" size="0.28" />
              </li>
            </div>
            <li href @click="toDetail(item.targetId)">
              <p class="messageContent">{{item.msgContent}}</p>

              <p class="messageTime">{{item.createTime}}</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
// Vue.filter("msgContentFilter", data => {
//   if (data) {
//     return data.map(item => item.msgContent).join(" ");
//   }
// });
export default {
  data () {
    return {
      active: 0,
      List: []
    }
  },
  created () {
    axios.get('http://114.215.128.76:3000/goods/message').then(res => {
      console.log(res.data)
      this.List = res.data
      // console.log(res.data[0].msgContent);
    })
  },
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    },
    onClickRight () {
      this.$router.push('/mine')
    },
    toList (id) {
      // this.$router.push(`/new/${id}`)
      this.$router.push(`/news/newslist/${id}`)
    },
    toDetail (id) {
      // this.$router.push(`/new/${id}`)
      this.$router.push(`/topic/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: #fff;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  position: relative;
  padding: 0rem 0.2rem 0rem 0.2rem;
  border-bottom: 1px solid #f5f5f5;
}
.columnList {
  * {
    touch-action: pan-y;
  }
  padding: 0.4rem 0rem;
  background-color: #fff;
  margin-bottom: 0.3rem;
  #commentRoot {
    width: 100%;
    height: 100%;
    .messageInfor {
      position: relative;
      margin-top: 0.2rem;
      margin-bottom: 0.6rem;
      .messageIcon {
        float: left;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 100%;
        border: 1px solid #c1c0c6;
      }
      .messageInforRihgt {
        overflow: hidden;
        .messageInforRihgtTop {
          border-bottom: 1px solid #eaeaea;
          height: 0.4rem;
          font-size: 0.26rem;
          position: relative;

          .columnName {
            position: absolute;
            left: 0.3rem;
            top: 0;
            color: #65686c;
            font-weight: bold;
            font-size: 0.12rem;
            .columnTitleRight {
              float: right;
              color: #65686c;
              font-size: 0.22rem;
            }
            .van-icon.van-icon-arrow {
              position: absolute;
              right: 0;
            }
          }
        }
        li {
          color: #000;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          .messageContent {
            margin-top: 0.1rem;
            color: #65686c;
            font-size: 0.14rem;
            margin-right: 0.2rem;
          }
          .messageTime {
            margin-top: 0.2rem;
            color: #ccc;
          }
          .van-icon {
            float: right;
          }
        }
      }
    }
  }
}
</style>
