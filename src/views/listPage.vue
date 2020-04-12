<template>
    <div id='main'>
       <header>
           <router-link
           id="home"
           :key="1"
           tag="li"
           :to="{name:'home',}"
           ><van-icon :name="'home-o'" size="24"/></router-link>
           <h1>{{Id.name}}</h1>
           <router-link
           id="list"
           :key="3"
           tag="li"
           :to="{name:'list',}"
           ><van-icon :name="'apps-o'" size="24"/></router-link>
           </header>
       <div class="main">
           <div class="swith">
               <Swiper cName="swipe">
                    <div
                        @click="Fh(item.ID,item)"
                        class="swiper-slide"
                        v-for="item in fh"
                        :key="item.ID"
                    >
                        <div class="swiper-item"
                        >{{item.name}}</div>
                    </div>
                </Swiper>
           </div>
           <div class="top">
               <span
                @click="FH(index,Id)"
                v-for="(item,index) in xuanxiangka"
                :key='index'
               >{{item}}</span>
           </div>
           <ul class="content">
               <router-link
                    v-for="item in datalist"
                    :key="item.parentProductId"
                    :to="{
                        name:'details',
                        params:{id:item.parentProductId}
                    }"
                    tag="li">
                        <img :src="item.productImg" alt="">
                        <p>{{item.productName}}</p>
                        <span>￥{{item.originalPrice}}   </span>
                        <p>{{item.prizeOrSlogan}}</p>
                    </router-link>
           </ul>
       </div>
    </div>
</template>
<script>

import { instance } from '@/utils/http'
import Swiper from '@/components/swiper'
import Swip from 'swiper'
export default {
  components: {
    Swiper // 注册组件Swiper
  },
  data () {
    return {
      datalist: null,
      fh: null,
      banners: null,
      Id: { name: `${this.$route.params.id}`, ID: this.$route.params.ID }, // 获取地址栏的参数
      furniture: [{ name: 'All', ID: '35' }, { name: '沙发', ID: '20' }, { name: '板凳', ID: '21' }, { name: '床', ID: '2310' }, { name: '柜架', ID: '24' }, { name: '餐桌', ID: '2210' }, { name: '茶几和边桌', ID: '2211' }, { name: '书桌', ID: '2212' }],
      household: [{ name: '灯具', ID: '25' }, { name: '用餐', ID: '26' }, { name: '时尚生活', ID: '32' }, { name: '收纳', ID: '33' }, { name: '烹饪', ID: '27' }, { name: '纺织品', ID: '28' }, { name: '家饰', ID: '29' }, { name: '卫浴', ID: '31' }],
      Key: `${this.$route.params.key}`,
      xuanxiangka: ['上新', '销量', '价格']
    }
  },
  created () {
    this.Key == 1 ? this.fh = this.furniture : this.fh = this.household
    instance.get(`/pages/category/${this.$route.params.ID}?currentPage=1`).then(res => {
      this.datalist = res.data.data
      if (this.Key == 1) {
        this.banners = this.furniture
      } else {
        this.banners = this.household
      }
      // new Swip('.swiper-container')
      console.log(this.datalist)
    })
  },
  mounted () {
    var myswiper = new Swip('.swiper-container', {
      slidesPerView: 4,
      observer: true
    })
  },
  methods: {
    // goto () {
    // this.$router.push('/home')
    // }
    Fh (index, item) {
      this.Id = item
      instance.get(`/pages/category/${index}?currentPage=1`).then(res => {
        this.datalist = res.data.data
        console.log(this.datalist)
      })
    },
    FH (index, item) {
      instance.get(`/pages/category/${item.ID}?currentPage=${index + 1}`).then(res => {
        this.datalist = res.data.data
        console.log(this.datalist)
      })
    },
    tolistPage (id, key) {
      this.$router.push(`/listPage/${id, key}`)
    }
  }
}
</script>
<style lang="scss" scoped>
    #main{
        header{
        width: 100%;
        height:  .4rem;
        background:#fff;
        #home{
            position: absolute;
            width: .24rem;
            height: .24rem;
            top: .12rem;
            left: .15rem;
        }
        #list{
            position: absolute;
            width: .24rem;
            height: .24rem;
            top: .12rem;
            right: .15rem;
        }
        h1{
            text-align: center;
            font-size: 17px;
            color: #000;
            font-weight: 600;
            line-height: .4rem;
        }
        }
        .main{
            width: 100%;
            .swith{
                height: 1rem;
                padding-top:.1rem ;
                width: 100%;
                background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim) no-repeat;
                background-size:100% 100%;
                .swiper-item{
                    font-size: 12px;
                    color: #fff;
                    text-align: center;
                    height: .8rem;
                    line-height: .8rem;
                    border: 1px solid #ccc;
                    width: .78rem;
                    &:nth-of-type(1){
                        margin-left: .1rem;
                    }
                }
            }
            .top{
                height: .4rem;
                display: flex;
                justify-content: space-around;
                span{
                    display: block;
                    width: .5rem;
                    height:99%;
                    line-height: .36rem;
                    text-align: center;
                }
                .span-active{
                    border-bottom: 3px solid #000;
                }
            }
            .content{
                padding-top: .02rem;
                background-color: #eee;
                overflow: hidden;
                li{
                    float: left;
                    width: 49.9%;
                    height: 2.8rem;
                    background-color: #fff;
                    border-bottom: .01rem solid #eee;
                    text-indent: .2rem;
                    &:nth-child(odd){
                        border-right: .01rem solid #eee;
                    }
                    .img{
                        width: 100%;
                        height: 1.8rem;
                    }
                    span{
                        color: #000;
                        margin-left: .2rem;
                    }
                    p{
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        &:nth-of-type(2){
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }

</style>
