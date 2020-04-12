<template>
  <div class="details">
    <van-nav-bar title="商品详情" @click-left="onClickLeft">
      <van-icon name="home-o" slot="left" color="#000" size="20" />
      <!-- <van-icon name="search" slot="right" color="#000" size="20" /> -->
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image,index) in swiperlist" :key="index">
        <van-image :src="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="title">
      <p class="goodtitle">{{data.name}}</p>
      <p class="price" style="font-weight: 600">￥{{data.price}}</p>
    </div>
    <div style="margin-bottom: 0.3rem" id="designerBrandDiv">
      <div id="brand" brandid="578">
        <div id="brandCountry">
          <img src="https://m.wowdsgn.com/static/img/icon-location.png" class="brandLocationIcon" />
          <span id="brandCountryName">中国</span>
        </div>
        <img
          id="brandLogoImg"
          src="https://img.wowdsgn.com/brand/logo/e8872ed8-f252-4fe8-baa8-bd0210e41eac_2dimension_800x800.jpg?imageslim"
        />
        <div class="brandInfo">
          <p id="brandName">丘山 ARTISAN</p>
          <p
            id="brandIntroduction"
          >丘山偏爱自然、质朴可以让人放松心情的家，亦如我们的家具，拥有手作的质感，同时保持现代家具的舒适性。丘山希望自己的家具可以长久使用，与家共存。</p>
        </div>
      </div>
      <div class="product">
        <img :src="product" alt v-for="(product,index) in productlist" :key="index" />
      </div>
    </div>
    <!-- 产品信息 -->
    <div id="productInfoImgDiv">
      <div class="infoHeader">
        <p style="padding-top: 0.2rem;padding-right: 0.1rem;">—</p>
        <div style=" text-align: center;">
          <span
            style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;"
          >产品信息</span>
          <br />
          <span
            style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;"
          >INFORMATION</span>
        </div>
        <p style="padding-top: 0.2rem;padding-left: 0.1rem;">—</p>
      </div>

      <!--产品细节图-->
      <div class="productDetailInfo">
        <div class="productInfoImgs">
          <img
            id="sizeMainImageUrl"
            class="lazy"
            style="width: 100%; opacity: 1;"
            data-src="https://img.wowdsgn.com/product/introduction/a65b9235-04da-4945-97af-d1b0221f4933_2dimension_750x1159.jpg?imageslim"
            src="https://img.wowdsgn.com/product/introduction/a65b9235-04da-4945-97af-d1b0221f4933_2dimension_750x1159.jpg?imageslim"
            sizes
            srcset
          />
        </div>

        <!--细节图列表-->
      </div>
    </div>
    <!-- 产品详情 -->
    <div class="cartfoot">
      <van-icon name="shopping-cart-o" size="20" @click="goshopcart"/>
      <van-button text="加入购物车" color="firebrick" @click="addcart"></van-button>
      <van-button text="立即购买" color="#ffd444" @click="goorder"></van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { instance, instance2 } from "@/utils/http";
import { NavBar, Icon, Swipe, SwipeItem, Image, Button, Toast } from "vant";
import { log } from "util";
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
Vue.use(Button);
export default {
  data() {
    return {
      swiperlist: [
        "https://img.wowdsgn.com/product/images/299d0eab-9c5b-4ce2-9b7d-005e179ba26a.jpg",
        "https://img.wowdsgn.com/product/images/05884cc0-ef27-4aac-a2f9-db621ffba18e.jpg",
        "https://img.wowdsgn.com/product/images/a93269f6-5d1d-4b38-8153-17ac69323dec_2dimension_800x800.jpg"
      ],
      data: {id: 1567,name:"ARTISAN", price:"99999",num:1,isok:1,img:"https://img.wowdsgn.com/product/images/299d0eab-9c5b-4ce2-9b7d-005e179ba26a.jpg"},
      productlist: [
        "https://img.wowdsgn.com/product/introduction/507ade29-0d44-49cb-8dcf-0a502c318656_2dimension_750x1330.jpg",
        "https://img.wowdsgn.com/product/introduction/79f1a271-1c87-4c1d-8227-0a2a1b0c4224_2dimension_750x1046.jpg",
        "https://img.wowdsgn.com/product/introduction/3121b8c4-082e-4ef9-9a56-844936235a1e_2dimension_750x545.jpg",
        "https://img.wowdsgn.com/product/introduction/6ee30e74-a1a5-40b4-b225-f0eee79446c2_2dimension_750x1438.jpg"
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    addcart () {
        instance2.post("http://114.215.128.76:3000/goods/addcart", {
            uid: this.uid,
            name: this.data.name,
            num: this.data.num,
            price: this.data.price,
            img: this.data.img,
            goods_id: this.data.id,
            isok: this.data.isok
         }).then(res => {
             console.log(res);
             if(res.data.type == 1) {
                 Toast("加入购物车成功");
             }
         })
    },
    goshopcart () {
        this.$router.push("shopCart")
    },
    goorder () {
      this.addcart()
      this.$router.push("shopCart")
    }
  },
  created() {
    instance.get("/itemdetail/skuInfos/18171?_=1586688287680").then(res => {
      console.log(res);
    });
    this.uid = localStorage.getItem("uid")
  }
};
</script>

<style>
/* .van-nav-bar {
    color:"#000";
    font-size: 20px;
} */
* {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
}
.van-button {
    width: 1.25rem;
}
.cartfoot .van-icon {
    margin: 0.12rem 1rem 0 0.1rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  /* margin-top: 0.5rem; */
}
.van-swipe__indicators {
  background: #f5f5f5;
}
.title {
  padding: 0.3rem 0.5rem 0rem;
  background: #fff;
  margin-bottom: 0.1rem;
}
.goodtitle {
  text-align: initial;
  margin-bottom: 0.2rem;
  font-size: 16px;
  color: #000;
}
.price {
  font-size: 16px;
  color: #000;
  font-family: PingFangSC-Semibold;
  margin-right: 0.1rem;
  vertical-align: sub;
}
#brand {
  width: 100%;
  background: url(https://m.wowdsgn.com/static/img/designerBackground-87a73c0d943ed2ac610bf7ee85df602b.png)
    no-repeat left top;
  background-size: 100%;
  height: 0.96rem;
  position: relative;
  padding: 0.13rem 0;
}
#brandCountry {
  text-align: right;
  height: 0.25rem;
  float: right;
  margin-right: 0.25rem;
}
.brandLocationIcon {
  width: 0.15rem;
  height: 0.15rem;
  vertical-align: middle;
}
#brandCountryName {
  font-size: 12px;
  color: #fff;
  vertical-align: middle;
}
#brandLogoImg {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 100%;
  position: absolute;
  display: block;
  top: 0.15rem;
  left: 0.25rem;
}
.brandInfo {
  position: absolute;
  top: 0.25rem;
  left: 1.1rem;
  right: 0.15rem;
}
#brandName {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.01rem;
  text-align: left;
  margin-bottom: 0.05rem;
}
#brandIntroduction {
  font-family: PingFangSC-Light;
  font-size: 12px;
  color: #ffffff;
  line-height: 0.2rem;
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.product img {
  margin: 0.1rem 0;
}
.infoHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.15rem 0;
    position: relative;
}
#productInfoImgDiv {
    margin-bottom: 1rem;
}
.detailParameterSpecification, .certificates {
    margin-bottom: 0.15rem;
}
.product-dropdown-box {
    padding: 0rem 0.25rem 0.2rem;
    background: #fff;
}
.detailParameterSpecification .product-dropdown-box-tips p {
    line-height: 0.32rem;
    color: #707070;
    font-size: 12px ;
    border-top: 1px solid #EAEAEA;
    display: flex;
    justify-content: space-between;
}
.detailParameterSpecification .product-dropdown-box-tips span {
    color: #707070;
    font-size: 12px;
    display: inline-block;
}
.cartfoot {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  align-content: center;
  background: #fff;
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
