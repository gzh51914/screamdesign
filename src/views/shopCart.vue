<template>
  <div class="shopCart">
    <van-nav-bar
      title="购物车"
      :right-text="rightText[1]"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="nullcart" v-if="isCartShow">
      <p>您的购物车还是空的</p>
      <van-button color="#ffd444">看看收藏</van-button>
      <van-button color="#ffd444" @click="goto">去逛逛</van-button>
    </div>
    <div class="cart" v-else>
      <div class="order-pro" v-for="(item,index) in cartdata" :key="item.goods_id">
        <div class="select">
          <van-checkbox v-model="cartdata[index].isok" checked-color="#202020" @click="changetype(item.goods_id, cartdata[index].isok)" ></van-checkbox>
          <van-stepper v-model="cartdata[index].num" input-width="0.35rem" button-size="0.25rem" @change="changenum(item.goods_id, $event)"/>
        </div>
        <van-card  :num="item.num" :price="item.price" :title="item.name" :thumb="item.img">
          <template #tags>
            <van-tag plain type="danger" v-for="spec in cartdata.specs" :key="spec"></van-tag>
          </template>
        </van-card>
      </div>
    </div>
    <div class="cartfoot">
      <van-checkbox checked-color="#202020" class="allselect" v-model="checked" @click="checkall">全选</van-checkbox>
      <div class="sum" v-if="isSumShow">
        <span style="font-size: 14px;colo: black">合计：</span>
        <span style="color:red">￥{{allprice}}</span>
      </div>
      <van-button :text="buttonText" :color="btnColor" @click="onSubmit"></van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { instance2 } from '@/utils/http';
import {
  Button,
  NavBar,
  Checkbox,
  CheckboxGroup,
  Stepper,
  Card,
  SubmitBar,
  Tag
} from "vant";

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Tag);
export default {
  data() {
    return {
      rightText: ["完成", "编辑"],
      isCartShow: false,
      checked: false,
      cartdata: [],
      isSumShow: true,
      buttonText: "去结算",
      btnColor: "#ffd444",
      allprice: 0,
      uid: '',
      total: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.rightText = this.rightText.reverse();
      if (this.rightText[1] == "编辑") {
        this.isSumShow = true;
        this.checked = true;
        this.buttonText = "去结算";
        this.btnColor = "#ffd444";
      } else {
        this.isSumShow = false;
        this.checked = false;
        this.buttonText = "删除";
        this.btnColor = "#000";
      }
    },
    // 请求订单里的数据
    getorder () {
      // console.log(this.uid)
      instance2.get(`http://114.215.128.76:3000/goods/oders?uid=${this.uid}`).then(res => {
        console.log(res)
        this.cartdata = res.data.datalist
        this.allprice = res.data.allprice;
        this.total = res.data.total;
        this.checked = this.cartdata.every(item => item.isok)
      })
    },
    // 修改购物车加减
    changeorder ({num = null , goods_id}) {
      instance2.post("http://114.215.128.76:3000/goods/cart", {num,goods_id}).then(res => {
        console.log(res.data)
        this.cartdata = res.data.datalist
        this.allprice = res.data.allprice;
        this.total = res.data.total;
      })
    },
    // 点击复选框修改购物车数量
    changeok ({goods_id = null, isok = null}) {
      instance2.post("http://114.215.128.76:3000/goods/type",{goods_id, isok}).then(res => {
        console.log(res.data)
        this.cartdata = res.data.datalist
        this.allprice = res.data.allprice;
        this.total = res.data.total;
        this.checked = this.cartdata.every(item => item.isok)
      })
    },
    // 全选
    checkall () {
      instance2.post(`http://114.215.128.76:3000/goods/Allchangeisok`,{isok:!this.checked,uid:this.uid}).then(res => {
        console.log(res.data)
        // this.cartdata = res.data.datalist
        // this.allprice = res.data.allprice;
        // this.total = res.data.total;
        this.getorder ()
      })
    },
    // 数量加减改变事件
    changenum (goods_id, even) {
      this.changeorder({ num: Number(even), goods_id });
    },
    // 复选框改变事件
    changetype (goods_id, isok) {
      this.changeok({ isok:!isok, goods_id });
    },
    goto() {
      this.$router.push("/home");
    },
    onSubmit() {
      this.$router.push("/order");
    }
  },
  created () {
    if(localStorage.getItem("uid")) {
      this.uid = localStorage.getItem("uid")
    }
    this.getorder ()
  },
  // computed: {
  //   checked: {
  //     get () {
  //       return this.cartdata.every(item => item.isok)
  //     },
  //     set (val) {
  //       this.cartdata.forEach(item => item.isok = val)
  //     }
  //   }
  // }
};
</script>

<style scoped>
.van-icon {
  color: #000;
  font-size: 20px;
}
.van-nav-bar__text {
  color: #000;
}
.nullcart {
  text-align: center;
  margin: 0.1rem 0;
}
.nullcart .van-button {
  width: 1rem;
  margin: 0.1rem 0 0 0.15rem;
}
.cart {
  background: #fff;
  margin-bottom: 0.3rem;
}
.order-pro {
  padding-left: 0.15rem;
}
.order-pro .select {
  height: 0.5rem;
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.order-pro .select .van-stepper {
  margin: 0.12rem 0.1rem 0 0;
}
.van-card {
  background-color: #fff;
}
.cartfoot {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  height: 0.5rem;
  display: flex;
  line-height: 0.5rem;
}
.cartfoot .van-button {
  height: 0.5rem;
  width: 0.94rem;
  color: #000;
  margin-left: 0.54rem;
  position: absolute;
  right: 0;
}
.sum {
  margin: 0 0 0 1.38rem;
  box-sizing: border-box;
  position: relative;
}
.cartfoot .van-checkbox {
  position: absolute;
  left: 0.1rem;
  bottom: 0.14rem;
}
.van-card__title {
  margin-bottom: 0.08rem;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-tag {
  background: #f5f5f5;
  margin-right: 0.06rem;
  border: 0;
  color: #808080;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-tag::after {
  border-color: #fff;
}
</style>
