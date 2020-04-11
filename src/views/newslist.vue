<template>
  <div class="header">
    <van-tabbar @click="active" :fixed="false">
      <van-tabbar-item icon="home-o" @click="onClickLeft"></van-tabbar-item>
      <van-tabbar-item>消息中心</van-tabbar-item>
      <van-tabbar-item @click="isShow = !isShow">全部已读</van-tabbar-item>
    </van-tabbar>
    <div id="commentRoot" v-for="(item, index) in list" :key="index">
      <div class="messageListItemTime">{{ item.createTime }}</div>
      <div class="clearfix messageListItem">
        <div class="messageListItemRihgt">
          <div class="messageListItemRihgtTop">
            <span class="columnName">{{ item.msgTitle }}</span>
            <a class="messageTitleRight">
              <van-icon
                name="arrow"
                size="0.2rem"
                @click="toDetail(item.targetId)"
              />
            </a>
          </div>

          <p class="messageContent">{{ item.msgContent }}</p>
          <p class="messageFlag" v-if="isShow">•</p>
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
    // props: ["id"];
    console.log(this.$route.params.id)

    axios
      .get(`http://114.215.128.76:3000/goods/messages?${this.$route.params.id}`)
      .then(res => {
        console.log(res.data)
        this.list = res.data
        // console.log(res.data[0].msgContent);
      })
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
#commentRoot {
  background: #f5f5f5;
}
.messageListItemTime {
  text-align: center;
  font-size: 0.15rem;
  margin-top: 0.2rem;
}
.messageListItem {
  width: 2.8rem;
  height: 0.75rem;
  position: relative;
  margin: 0.1rem 0.4rem 0rem 0.4rem;
  background: #fff;
  .messageListItemRihgt {
    float: right;
    overflow: hidden;
    padding: 0.2rem 0rem 0rem 0.2rem;
    .messageListItemRihgtTop {
      height: 0.1rem;

      margin-top: 0.05rem;
      .columnName {
        position: absolute;
        left: 0.16rem;
        top: 0.08rem;
        color: #65686c;
        font-weight: bold;
      }
      .messageTitleRight {
        float: right;
        color: #65686c;
        font-size: 0.22rem;
        i {
          font-size: 0.28rem;
          position: absolute;
          top: 0.08rem;
          right: 0.16rem;
        }
      }
    }
    .messageContent {
      color: #65686c;
      margin-right: 0.2rem;
      color: #65686c;
      font-size: 0.017rem;
    }
    .messageFlag {
      position: absolute;
      right: 0;
      top: 0.1rem;
      color: yellow;
      font-size: 0.5rem;
    }
  }
}
</style>
