<template>
  <div class="person">
    <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="user-o" size="18" @click="home" />
      </template>
    </van-nav-bar>
    <div class="top">
      <span>头像</span>
      <img src="../../assets/default_portrait.png" alt />
      <van-icon name="arrow" color="#ccc" size="25" class="jian" />
    </div>
    <ul>
      <li v-for="person in personlist" :key="person.id" @click="liclick(person.id)">
        <div class="nei">
          {{person.title}}
          <span>{{person.value}}</span>
          <van-icon name="arrow" color="#ccc" size="25" class="jian" />
        </div>
      </li>
    </ul>
    <div class="bu" @click="site">
      收货地址
      <van-icon name="arrow" color="#ccc" size="25" class="jian" />
    </div>
    <!-- <Sex v-if="sexShow"></Sex> -->
    <van-picker
      show-toolbar
      title="性别"
      :columns="columns"
      @cancel="onCancel"
      @confirm="onConfirm"
      v-if="sexShow"
    />
    <van-picker
      show-toolbar
      title="年龄段"
      :columns="columns2"
      @cancel="onCancel2"
      @confirm="onConfirm2"
      v-if="ageShow"
    />
    <van-picker
      show-toolbar
      title="星座"
      :columns="columns3"
      @cancel="onCancel3"
      @confirm="onConfirm3"
      v-if="xzShow"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon, NavBar, Tab, Tabs, Picker } from 'vant'

// import Sex from "@/views/mine/Sex";
// import { Picker } from 'vant'

Vue.use(Picker)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(NavBar)
export default {
  data () {
    return {
      personlist: [
        { id: 1, title: '昵称', value: '' },
        { id: 2, title: '个性签名' },
        { id: 3, title: '性别', value: '' },
        { id: 4, title: '年龄段', value: '' },
        { id: 5, title: '星座', value: '' },
        { id: 6, title: '职业' }
      ],
      sexShow: false,
      ageShow: false,
      xzShow: false,
      columns: ['男', '女', '保密'],
      columns2: ['00后', '90后', '80后', '70后', '60后'],
      columns3: [
        '双鱼座',
        '水瓶座',
        '摩羯座',
        '射手座',
        '天蝎座',
        '天秤座',
        '处女座'
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    home () {
      this.$router.replace('/home')
    },
    liclick (personId) {
      if (personId === 3) {
        this.sexShow = true
      }
      if (personId === 4) {
        this.ageShow = true
      }
      if (personId === 5) {
        this.xzShow = true
      }
      if (personId === 2) {
        this.$router.push('/signa')
      }
      if (personId === 6) {
        this.$router.push('/occu')
      }
      if (personId === 1) {
        this.$router.push('/nick')
      }
    },

    onConfirm (value, index) {
      this.personlist[2].value = value
      this.sexShow = false
    },
    onCancel () {
      this.sexShow = false
    },
    onConfirm2 (value, index) {
      this.personlist[3].value = value
      this.ageShow = false
    },
    onCancel2 () {
      this.ageShow = false
    },
    onConfirm3 (value, index) {
      this.personlist[4].value = value
      this.xzShow = false
    },
    onCancel3 () {
      this.xzShow = false
    },
    site () {
      this.$router.push('/site')
    }
  }
  //   components: {
  //     Sex
  //   },
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
.top {
  width: 100%;
  height: 0.7rem;
  //   background-color: yellow;
  margin: 0.065rem 0rem 0rem 0rem;
  position: relative;
  box-sizing: border-box;
  padding: 0.08rem 0.2rem;
  span {
    display: inline-block;
    height: 100%;
    line-height: 0.5rem;
  }
  img {
    width: 0.52rem;
    height: 0.52rem;
    margin: 0rem 0.3rem;
    float: right;
  }
  .jian {
    position: absolute;
    right: 0.08rem;
    margin-top: 0.1rem;
  }
}
ul {
  box-sizing: border-box;
  padding-left: 0.2rem;
  li {
    height: 0.52rem;
    .nei {
      width: 3.26rem;
      height: 100%;
      // background: pink;
      font-size: 0.14rem;
      line-height: 0.52rem;
      display: inline-block;
      vertical-align: middle;
      border-top: 1px solid #eaeaea;
      span {
        float: right;
        margin-right: 0.3rem;
      }
      .jian {
        position: absolute;
        right: 0.08rem;
        margin-top: 0.1rem;
      }
    }
  }
}
.bu {
  width: 3.26rem;
  height: 0.52rem;
  margin-top: 0.2rem;
  // background: pink;
  font-size: 0.14rem;
  line-height: 0.52rem;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  padding-left: 0.2rem;
  .jian {
    position: absolute;
    right: 0.08rem;
    margin-top: 0.1rem;
  }
}
.van-picker {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
