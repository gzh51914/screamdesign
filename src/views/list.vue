<template>
    <div class="main">
        <!-- <header>我是搜索框。。。</header> -->
        <div class="list">
            <div id='tab-1'>
                <a class="tab"><img src="https://m.wowdsgn.com/static/img/furniture.png" alt=""></a>
                <ul id='furniture'>
                    <router-link
                    v-for="(item,index) in furniture"
                    :key="index"
                    :to="{
                        name:'listPage',
                        params:{id:item.name,key:1,ID:item.ID}
                    }"
                    tag="li">
                        <a >{{item.name}} <i></i></a>
                    </router-link>
                </ul>
            </div>
            <div id='tab-2'>
                <a class="tab"><img src="https://m.wowdsgn.com/static/img/household.png" alt=""></a>
                <ul id='household'>
                    <router-link
                    v-for="(item,index) in household"
                    :key="index"
                    :to="{
                        name:'listPage',
                        params:{id:item.name,key:2,ID:item.ID}
                    }"
                    tag='li'
                    >
                        <a >{{item.name}} <i></i></a>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      furniture: [{ name: '沙发', ID: '20' }, { name: '板凳', ID: '21' }, { name: '床', ID: '2310' }, { name: '柜架', ID: '24' }, { name: '餐桌', ID: '2210' }, { name: '茶几和边桌', ID: '2211' }, { name: '书桌', ID: '2212' }],
      household: [{ name: '灯具', ID: '25' }, { name: '用餐', ID: '26' }, { name: '时尚生活', ID: '32' }, { name: '收纳', ID: '33' }, { name: '烹饪', ID: '27' }, { name: '纺织品', ID: '28' }, { name: '家饰', ID: '29' }, { name: '卫浴', ID: '31' }]
    }
  },
  methods: {
    tolistPage (id, key, ID) {
      this.$router.push(`/listPage/${id, key, ID}`)
    }
  }
}
</script>

<style lang='scss' scoped>
    header{
        width: 100%;
        height:.4rem ;
        background-color: #eee;
        text-align: center;
        line-height: .4rem;
    }
    .list{
        margin: .15rem;
        background:#fff;
        #tab-2{
            margin: .1rem 0 ;
        }
        a{
            display: block;
            width: 100%;
            font-size: .16rem;
            text-indent: .15rem;
            line-height: .5rem;
            position: relative;
        }
        li{
            width: 100%;
            height: .5rem;
            border-bottom: .01rem solid #eee;
            i{
                position: absolute;
                top:.2rem;
                right: .08rem;
                width: .12rem;
                height: .12rem;
                border-top: .02rem solid #bbb;
                border-right: .02rem solid #bbb;
                transform: rotate(45deg);
            }
        }
    }
</style>
