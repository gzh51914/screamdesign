<template>
    <div class="details">
        <van-nav-bar 
            title="商品详情"
            @click-left="onClickLeft"
        >
        <van-icon name="arrow-left" slot="left" color="#000" size="20"/>
        <van-icon name="search" slot="right" color="#000" size="20" />
        </van-nav-bar>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image,index) in swiperlist" :key="index">
          <van-image :src="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="title">
          <p class="goodtitle">{{data[0]}}</p>
          <p class="price">￥{{data[1]}}</p>
      </div>
      <div style="margin-bottom: 0.3rem" id="designerBrandDiv">
        <div id="brand" brandid="578">
            <div id="brandCountry">
                <img src="https://m.wowdsgn.com/static/img/icon-location.png" class="brandLocationIcon">
                <span id="brandCountryName">中国</span>
            </div>
            <img id="brandLogoImg" src="https://img.wowdsgn.com/brand/logo/b587f9d2-b120-4b94-a760-53ed072c410f_2dimension_800x800.jpg?imageslim">
            <div class="brandInfo">
                <p id="brandName">尖叫实验室</p>
                <p id="brandIntroduction">尖叫实验室于2016年1月诞生于中国上海，是一个由北欧家居集合品牌尖叫设计投资</p>
            </div>
        </div>
        <!-- <div class="product">
            <img :src="product" alt="" v-for="(product,index) in productlist" :key="index">
        </div> -->
    </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { instance } from '@/utils/http'
import { NavBar, Icon , Swipe, SwipeItem, Image } from 'vant';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
export default {
    data () {
        return {
            swiperlist : [
                "https://img.wowdsgn.com/product/images/8b2c589b-84ed-4c09-b566-f901162a1d13.jpg",
                "https://img.wowdsgn.com/product/images/8b2c589b-84ed-4c09-b566-f901162a1d13.jpg",
                "https://img.wowdsgn.com/product/images/a93269f6-5d1d-4b38-8153-17ac69323dec_2dimension_800x800.jpg",
                ],
            data: ["白色沙发","99999"],
            productlist: [
                "https://img.wowdsgn.com/product/introduction/1cdb7469-4789-4636-9cd3-0c199389aaa1_2dimension_750x1556.jpg",
                "https://img.wowdsgn.com/product/introduction/954b8df0-79cd-4c90-b217-ac061567e802_2dimension_750x1340.jpg",
                "https://img.wowdsgn.com/product/introduction/d92fb645-63c4-4ca6-99fd-a39c34f5271e_2dimension_750x1285.jp"
            ]
        }
    },
    methods: {
        onClickLeft () {
            this.$router.go(-1)
        },
        getproductimg () {
            console.log(111)
            instance.get("/itemdetail/spuInfos/10011?_=1586627782044").then(res=> {
                console.log(res)
            })
        },
        getsize () {
            instance.get("/itemdetail/skuInfos/15091?_=1586627782040").then(res => {
                console.log(res);
                
            })
        }
    }
}
</script>

<style>
/* .van-nav-bar {
    color:"#000";
    font-size: 20px;
} */
*{
    margin: 0;
    padding:0;
}
img{
    width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  /* margin-top: 0.5rem; */
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
    background: url(https://m.wowdsgn.com/static/img/designerBackground-87a73c0d943ed2ac610bf7ee85df602b.png) no-repeat left top;
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
    color: #FFFFFF;
    letter-spacing: 0.01rem;
    text-align: left;
    margin-bottom: 0.05rem;
}
#brandIntroduction {
    font-family: PingFangSC-Light;
    font-size: 12px;
    color: #FFFFFF;
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
</style>
