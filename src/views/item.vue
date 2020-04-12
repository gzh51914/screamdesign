<template>
  <div class="item">
    <!-- 头部 -->
    <div class="header">
      <a href="./home.vue" class="header-left">
        <img src="../logo/2.png" alt />
      </a>
      <h3>商品详情</h3>
      <a href="./search.vue" class="header-right">
        <img src="../logo/1.png" alt />
      </a>
    </div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://img.wowdsgn.com/product/addtionalImage//c7e15148-6ae7-468e-900a-3c2a2f7ee4c5_2dimension_750x600.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://img.wowdsgn.com/product/images/0f4d35eb-50ee-4257-9e35-07f885a506fa_2dimension_800x800.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://img.wowdsgn.com/product/addtionalImage//c680087d-4996-4509-90f0-7a8482a871eb_2dimension_750x600.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://img.wowdsgn.com/product/addtionalImage//e47421aa-6902-4b4e-b910-a9c0194e5bc1_2dimension_750x600.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>

    <!-- 自由沙发 -->
    <div class="titleCon">
      <p class="headProductTitle">自由沙发 基础款【预售】</p>
      <p class="discountPrice">￥10000</p>
    </div>

    <!-- 丘山 -->
    <div class="designerBrandDiv">
      <div class="brand">
        <div class="brandCountry">
          <img src="../logo/5.png" alt />
          <span class="brandCountryName">中国</span>
        </div>
        <img
          class="brandLogoImg"
          src="https://img.wowdsgn.com/brand/logo/e8872ed8-f252-4fe8-baa8-bd0210e41eac_2dimension_800x800.jpg"
          alt
        />
        <div class="brandInfo">
          <p class="brandName">丘山 ARTISAN</p>
          <p class="brandIntroduction">
            罡风吹散不了热爱
            “少无适俗韵，性本爱丘山”，丘山意指自然、质朴的生活方式，这也是我们的追求。以实木为材，辅以传统手工艺，我们专注于设计并制作简约自然的现代家具，丘山希望带来做工精致、注重细节的高品质手工家具。
            家，是我们所处时间最长的空间，丘山偏爱自然、质朴可以让人放松心情的家，亦如我们的家具，拥有手作的质感，同时保持现代家具的舒适性。丘山希望自己的家具可以长久使用，与家共存。
            丘山位于北京，开始于2015年。从设计图稿、挑选木材、寻找手工艺者，再到家具打样改进，我们用了超过一年的时间思考与调整，每一步都为了接近心中的更好。比起快速发展，我们更愿意细水长流，静下来做好每一件细小的事情，这正源于我们对此的热爱。
          </p>
        </div>
      </div>
    </div>

    <!-- 去繁从简 -->
    <div class="productIntroduction" v-for="data in dataList">
      <img :src="data.content" alt />
    </div>

    <!-- 产品信息 -->
    <div class="productInfoImgDiv">
      <div class="infoHeader">
        <p class="infoHeaderti"></p>
        <div class="infoHeadertitle">
          <span
            style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;"
          >产品信息</span>
          <span
            style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;"
          >INFORMATION</span>
        </div>
        <p class="infoHeadertilll"></p>
      </div>
      <div class="productDetailInfo">
        <img
          src="https://img.wowdsgn.com/product/introduction/08c0be05-299e-4bef-a830-849ac522c58c_2dimension_750x1127.jpg"
          alt
        />
      </div>
    </div>

    <!-- 详细规格书 -->
    <div class="detailParameter">
      <span class="dataltitle">详细规格参数</span>
      <div class="productdropdown">
        <div class="detailDiv">
          <p v-for="item in ListDetail">
            <span>{{item.attributeName}}</span>
            <span>{{item.attributeValueText}}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- 推荐搭配 -->
    <div class="productIRecommendDiv">
      <div class="infoHeader">
        <p class="infoHeaderti"></p>
        <div class="infoHeadertitle">
          <span
            style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;"
          >推荐搭配</span>
          <span
            style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;"
          >MATCH</span>
        </div>
        <p class="infoHeadertilll"></p>
      </div>
      <div class="productRecommendImgDiv">
        <img
          src="https://img.wowdsgn.com/product/comment/b9c9eaff-0f9f-4aa2-80f3-6c5056a70d17_2dimension_750x600.jpg"
          alt
        />
      </div>
      <div class="productlist">
        <d
        iv class="productRecommendLi" v-for="item in itemlist">
          <img :src="item.productImg" alt />
          <p class="product-list-title">{{item.productTitle}}</p>
          <p class="product-list-price">￥{{item.sellPrice}}</p>
        </div>
      </div>
    </div>

    <!-- 猜你喜欢 -->
    <div class="otheInfoDiv">
      <div class="infoHeader">
        <p class="infoHeaderti"></p>
        <div class="infoHeadertitle">
          <span
            style="font-family: PingFangSC-Semibold;font-size: 16px;color: #000000;letter-spacing: 0;"
          >猜你喜欢</span>
          <span
            style="font-family: PingFangSC-Semibold;font-size: 12px;color: #000000;letter-spacing: 0;"
          >WHAT’S HOT</span>
        </div>
        <p class="infoHeadertilll"></p>
      </div>
      <div class="complex">
          <div class="brand-details-list">
                <div class="li"
                
                    v-for="item in List"
                    :key="item.parentProductId"
                >
                    <img :src="item.productImg" alt="">
                    <div class="complexProductTitleDiv">
                            <p class="complexProductTitle">{{item.productTitle}}</p>
                    </div>
                    <p class="productSalePrice">￥{{item.sellPrice}}</p>
                </div>
          </div>
      </div>
    </div>

     <!-- 底部 -->
      <div class="appDown">
          <ul>
              <li>
                  <i class="iconfont  icon-aixin" ></i>
                  <i class="iconfont  icon-gouwuche"> </i>
              </li>
              <li><a href="">加入购物车</a></li>
              <li><a href="">立即购买</a></li>
          </ul>
      </div>

    <div class="kkk"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import { instance } from '@/utils/http'
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data () {
    return {
      dataList: [],
      ListDetail: [],
      itemlist: [],
      List: []
    }
  },
  created () {
    instance.get('/itemdetail/spuInfos/10964?_=1586610064959').then(res => {
      this.dataList = res.data.data.itemDetailIntroVoList
    }),
    instance.get('/itemdetail/skuInfos/18173?_=1586611424231').then(res => {
      this.ListDetail = res.data.data.skuAttrPairs
    }),
    instance.get('/itemdetail/spuInfos/10964?_=1586617877137').then(res => {
      this.itemlist = res.data.data.itemRecommendVo.recommendSkuList
    }),
    instance.get('/recommend/item?skuId=18173&_=1586617877142').then(res => {
      console.log(res.data.data)
      this.List = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  height: 0.44rem;
  line-height: 0.44rem;
  position: relative;
  padding: 0rem 0.1rem 0rem 0.1rem;
  border-bottom: 1px solid #f5f5f5;
  .header-left {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    line-height: 0.25rem;
    position: absolute;
    left: 0.1rem;
    top: 11%;
  }
  h3 {
    position: absolute;
    left: 38%;
    top: 00%;
    font-size: 0.17rem;
    font-weight: bolder;
  }
  .header-right {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    line-height: 0.25rem;
    position: absolute;
    right: 0.1rem;
    top: 11%;
  }
}
.my-swipe {
  width: 3.75rem;
  height: 3rem;
  margin-bottom: 0.15rem;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
}
.titleCon {
  width: 3.75rem;
  height: 0.86rem;
  padding: 0.15rem 0.25rem 0rem;
  background: #fff;
  margin-bottom: 0.05rem;
  .headProductTitle {
    text-align: initial;
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
    font-weight: bolder;
  }
  .discountPrice {
    color: #000;
    font-family: PingFangSC-Semibold;
    margin-right: 0.1rem;
    vertical-align: sub;
    font-size: 0.18rem;
    font-weight: bolder;
  }
}
.designerBrandDiv {
  width: 3.75rem;
  height: 0.96rem;
  margin-bottom: 0.15rem;
  .brand {
    width: 100%;
    background: url(https://m.wowdsgn.com/static/img/designerBackground-87a73c0d943ed2ac610bf7ee85df602b.png)
      no-repeat left top;
    background-size: 100%;
    height: 0.96rem;
    position: relative;
    padding: 0.13rem 0;
    .brandCountry {
      text-align: right;
      height: 0.25rem;
      float: right;
      margin-right: 0.25rem;
      img {
        width: 0.15rem;
        height: 0.15rem;
        vertical-align: middle;
      }
      .brandCountryName {
        font-size: 0.13rem;
        color: #fff;
        vertical-align: middle;
      }
    }
    .brandLogoImg {
      width: 0.74rem;
      height: 0.74.4rem;
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
      .brandName {
        font-family: PingFangSC-Medium;
        font-size: 0.16rem;
        color: #ffffff;
        letter-spacing: 0.005rem;
        text-align: left;
        margin-bottom: 0.005rem;
      }
      .brandIntroduction {
        font-family: PingFangSC-Light;
        font-size: 0.12rem;
        color: #ffffff;
        line-height: 0.4rem;
        margin-bottom: 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.productIntroduction {
  width: 100%;
  text-align: center;
  padding: 0.05rem 0rem 0rem;
  font-size: 0;
  margin-bottom: 0.15rem;
  -webkit-box-sizing: border-box;
}
.productInfoImgDiv {
  width: 3.75rem;
  height: 6.245rem;
  .infoHeader {
    width: 100%;
    height: 0.42rem;
    display: flex;
    justify-content: center;
    margin: 0.15rem 0;
    position: relative;
    background: #f5f5f5;
    .infoHeaderti {
      width: 0.22rem;
      height: 0.01rem;
      background: black;
      position: absolute;
      top: 20px;
      right: 111px;
    }
    .infoHeadertitle {
      width: 0.87rem;
      height: 0.42rem;
      text-align: center;
      position: absolute;
      top: 5%;
    }
    .infoHeadertilll {
      width: 0.22rem;
      height: 0.01rem;
      background: black;
      position: absolute;
      top: 20px;
      left: 111px;
    }
  }
}
.detailParameter {
  width: 3.75rem;
  height: 3.01rem;
  margin-bottom: 0.15rem;
  .dataltitle {
    width: 3.75rem;
    height: 0.5rem;
    display: block;
    line-height: 0.5rem;
    background-color: white;
    padding-left: 0.25rem;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #000000;
    letter-spacing: 1px;
  }
  .productdropdown {
    width: 3.75rem;
    height: 2.51rem;
    padding: 0rem 0.25rem 0.2rem;
    background: #fff;
    .detailDiv {
      width: 3.75rem;
      height: 2.31rem;
      p {
        width: 3.25rem;
        height: 0.33rem;
        line-height: 0.32rem;
        color: #707070;
        font-size: 0.13rem;
        border-top: 1px solid #eaeaea;
        span:nth-child(1) {
          width: 30%;
          color: #707070;
          font-size: 0.13rem;
          display: inline-block;
        }
        span:nth-child(3) {
          width: 70%;
          color: #707070;
          font-size: 0.13rem;
          display: inline-block;
        }
      }
    }
  }
}
.productIRecommendDiv {
  width: 3.75rem;
  height: 4.46rem;
  .infoHeader {
    width: 100%;
    height: 0.42rem;
    display: flex;
    justify-content: center;
    margin: 0.15rem 0;
    position: relative;
    background: #f5f5f5;
    .infoHeaderti {
      width: 0.22rem;
      height: 0.01rem;
      background: black;
      position: absolute;
      top: 20px;
      right: 111px;
    }
    .infoHeadertitle {
      width: 0.87rem;
      height: 0.42rem;
      text-align: center;
      position: absolute;
      top: 5%;
    }
    .infoHeadertilll {
      width: 0.22rem;
      height: 0.01rem;
      background: black;
      position: absolute;
      top: 20px;
      left: 111px;
    }
  }
  .productlist {
    width: 3.75rem;
    height: 1.59rem;
    padding: 0 0.15rem 0.15rem;
    background: #fff;
    .productRecommendLi {
      float: left;
      width: 31.4%;
      margin-right: 0.01rem;
      img {
        width: 0.93rem;
        height: 0.93rem;
      }
      .product-list-title {
        width: 100%;
        margin: 0.05rem 0rem 0rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: center;
      }
      .product-list-price {
        text-align: center;
        font-size: 0.12rem;
      }
      .product-list li:last-child {
        margin-right: 0;
      }
    }
  }
}
.otheInfoDiv {
  width: 3.75rem;
  height: 11.66rem;
  margin-top: 0.65rem;
  .infoHeader {
    width: 100%;
    height: 0.42rem;
    display: flex;
    justify-content: center;
    margin: 0.15rem 0;
    position: relative;
    background: #f5f5f5;
    .infoHeaderti {
      width: 0.22rem;
      height: 0.01rem;
      background: black;
      position: absolute;
      top: 20px;
      right: 111px;
    }
    .infoHeadertitle {
      width: 0.87rem;
      height: 0.42rem;
      text-align: center;
      position: absolute;
      top: 5%;
    }
    .infoHeadertilll {
      width: 0.22rem;
      height: 0.01rem;
      background: black;
      position: absolute;
      top: 20px;
      left: 111px;
    }
  }
  .complex{
      width: 3.75rem;
      height: 11.24rem;
      .brand-details-list{
           width: 3.75rem;
           height: 11.22rem;
            display: flex;
           flex-flow: wrap;
           .li{
                    float: left;
                    width: 49.8%;
                    border-right: 1px solid #f5f5f5;
                    border-bottom: 1px solid #f5f5f5;
                    -webkit-box-sizing: border-box;
                    font-size: 0;
                    position: relative;
                    padding-bottom: 0.05rem;
                    height: 2.8rem;
                    img{
                        width: 1.85rem;
                        height: 1.85rem;
                    }
                    .complexProductTitleDiv{
                            overflow: hidden;
                            -webkit-box-sizing: border-box;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            position: relative;
                            margin-bottom: 0.025rem;
                            margin-left: 0.15rem;
                            width: 88%;
                            margin-top: 0.25rem;
                            .complexProductTitle{
                                color: #808080;
                                font-size: 0.12rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 100%;
                            }
                    }
                    .productSalePrice{
                        font-family: PingFangSC-Regular;
                        font-size: 0.13rem;
                        color: #000;
                        /* margin-bottom: 0.05rem; */
                        margin-right: 0.05rem;
                        margin-left: 0.15rem;
                    }
           }
      }
  }
}
.appDown{
        width: 3.75rem;
        height: 0.44rem;
        position: fixed;
        margin: 0 auto;
        bottom: 0;
        background: #b83232;
        border-top: 1px solid #eaeaea;
        z-index: 999;
        ul{
            display: table;
            width: 100%;
            height: 0.44rem;
            vertical-align: middle;
            li:nth-child(1){
                    width: 33.33%;
                     height: 0.44rem;
                    background-color: #fff;
                    position: relative;
            }
            li:nth-child(2){
                     width: 33.33%;
                     background-color: #f5f5f5;
            }
            li:nth-child(3){
                    width: 50%;
                    background-color: #FFD444;
            }
             li:nth-child(1) i:nth-child(1){
                 width: 0.18rem;
                 height: 0.25rem;
                 margin-right: 0.1rem;
             }
               li:nth-child(2) i:nth-child(1){
                 width: 0.20rem;
                 height: 0.25rem;
             }
             .iconfont{
                        font-family: "iconfont" !important;
                        font-size: 0.2rem;
                        font-style: normal;
                        -webkit-font-smoothing: antialiased
             }
            li{
                    display: table-cell;
                    vertical-align: middle;
                    font-size: 0.3rem;
                    text-align: center;
                    line-height: 0.44rem;
                    a{
                        display: block;
                         text-align: center;
                          line-height: 0.44rem;
                           font-size: 0.15rem;
                    }
            }
        }
}

// .kkk {
//   width: 3rem;
//   height: 3rem;
//   margin-top: 2rem;
//   background: hotpink;
// }
</style>
