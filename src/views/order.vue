<template>
    <div class="order">
         <van-nav-bar
            title="确认订单"
            left-arrow
            @click-left="onClickLeft"
        />
        <div v-if="orderlist.length">
        <div class="address">
            <van-icon name="plus" color="#000" size="12"/>
            <span>添加收货地址</span>
        </div>
        <div class="goodsShow">
            <van-card v-for="item in orderlist" :key="item.goods_id"
                :num="item.num"
                :price="item.price"
                :title="item.name"
                :thumb="item.img"
            />
            <div class="form">
                <van-field  label="优惠券" name="优惠券" right-icon="arrow" readonly/>
                <li><span>运费</span><span>￥0</span></li>
                <li><span>优惠</span><span>￥0</span></li>
                <van-field  label="买家留言:" name="买家留言" placeholder="写下您的特殊要求"/>
                <li class="number"><span >共{{total}}件</span><span >小计 ￥<i class="smallSum">{{allprice /100}}</i></span></li>
            </div>
        </div>
        <van-submit-bar
            :price="allprice"
            button-text="支付"
        />
        </div>
        <div class="nullorder" v-else>
            <img @click="goto" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586619733468&di=fea659977716792f921c9a9dee58b6fb&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F3f2df4adcc6bc75bd898310be79898added2239a9888-8hXly7_fw658" alt="">
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { instance2, instance } from '@/utils/http'
import { Icon, NavBar, Card, Field, SubmitBar} from 'vant';
Vue.use(Field);
Vue.use(Card);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(SubmitBar);
export default {
    data () {
        return {
            orderlist: [],
            uid: '',
            allprice: 0,
            total: 0
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        goto () {
            this.$router.push("/home")
        },
    },
    created () {
        this.orderlist=this.$route.query.orderlist
        console.log(this.orderlist)
        this.allprice = this.$route.query.allprice *100;
        this.total = this.$route.query.total;
        this.uid = localStorage.getItem("uid")
  }
}
</script>

<style scoped>
.van-icon {
  color: #000;
  font-size: 20px;
}
.van-nav-bar__text {
  color: #000;
}
.address {
    text-align: center;
    height: 0.8rem;
    background: #fff;
    line-height: 0.8rem;
    margin-bottom: 0.1rem;
}
.goodsShow {
    background: #fff;
    margin-bottom: 1.4rem;
}
.van-card {
    margin: 0;
    background: #fff;
}
.van-card__header {
    padding-bottom: 0.05rem;
}
.form li {
    border-bottom: 1px solid #ebedf0;
    margin: 0 0.16rem;
    padding: 0.1rem 0;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 0.24rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
}
.from .number {
    height: 1rem;
    line-height: 1rem;
}
.from .number span {
    font-size: 12px;
    color: #808080
}
.from .number .smallSum {
    color: #000;
    font-size: 16px;
}
.van-button {
    background: #ffd444;
    color: #000
}
.van-submit-bar__price {
    color: #000;
}
</style>
