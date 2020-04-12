<template>
  <div class="moheader">
    <div class="header">
      <!-- 尖叫设计 -->
      <img class="logo" src="../logo/titleView.png" alt />
      <!-- 搜索框 -->
      <div class="serch">
        <img src="../logo/1.png" alt />
        <input
          type="search"
          name="searchIp"
          id="searchIp"
          placeholder="搜索我的尖叫好物"
          style="outline:none"
          @click="handleChangePage"

        />
      </div>
    </div>

    <!-- 切换 -->
    <div class="leftTabBox">
      <div class="hb">
        <ul class="tabul">
          <li class="on">
            <a href="">推荐</a>
          </li>
          <li>
            <a href="">品质空间</a>
          </li>
          <li>
            <a href="">居家好物</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="page-module-banner">
      <Swiper cName="swipe">
          <div
              class="swiper-slide"
              v-for="(banner,index) in banners"
              :key="banner.id"
               v-swiper="{
                    current:index,
                    length:banners.length,
                    swipe:'swipe'
                }"

          >
            <img :src="banner.bannerImgSrc" alt="">
            <div class="swiper-pagination"></div>
          </div>
      </Swiper>
    </div>

     <!-- 全球设计 -->
        <div class="design">
            <div class="img-a">
                  <img src="https://img.wowdsgn.com/page/banners/ad782eca-7d30-45cf-a20b-7a79707637ca_2dimension_1125x210.jpg" alt="">
            </div>

        </div>

        <!-- 新品上架 -->
        <div class="newProduct">
            <div class="page-module-title"></div>
            <div class="page-module-center">
                <div class="page-module-list"
                    v-for="List in Lists"
                    :key="List.id"
                >
                    <img :src="List.bannerImgSrc" alt="">
                </div>
            </div>

        </div>

        <div class="guodu"></div>
        <!-- 灵感 -->
        <div class="inspiration">
            <img src="https://img.wowdsgn.com/page/banners/59172e58-af6a-4032-956b-6f3586552017_2dimension_1125x204.jpg" alt="" @click="toDolist">
       </div>

       <div class="guodu1"></div>
       <!-- 办公指南 -->
       <div class="special">
            <img src="https://img.wowdsgn.com/page/banners/a656fe78-a708-4ab4-ba93-a92f99c0d629_2dimension_1125x510.jpg" alt="" @click="toDolist">
       </div>

       <div class="guodu2"></div>
       <!-- 专题 -->
       <div class="symposium">
           <img src="https://img.wowdsgn.com/page/banners/88802682-562d-4e1e-bfee-621ec22b85cc_2dimension_1125x204.jpg" alt="" @click="toDolist">
       </div>

        <div class="guodu3"></div>
        <!-- 匠人的礼物 -->
        <div class="gift">
            <div class="gift-title"></div>
            <div class="gift-img">
                <img src="https://img.wowdsgn.com/page/banners/0019768c-5af5-4e1f-94c0-36fac481c271_2dimension_1125x690.jpg" alt="" @click="toDolist">
            </div>
            <div class="gift-list">
                    <div class="listUl"
                        v-for="priceList in priceLists"
                        :key="priceList.parentProductId"
                        
                    >
                        <img :src="priceList.productImg" alt="" @click="toDolist">
                        <p class="listUl-title"
                        >{{priceList.productTitle}} </p>
                        <div class="listUl-price">
                            <span class="sapl-price"
                            >￥{{priceList.sellPrice}}</span>
                        </div>
                    </div>

            </div>
        </div>

        <!-- 进门第一眼 -->
        <div class="guodu4"></div>
        <div class="enter">
            <div class="enter-title"></div>
            <div class="enter-list">
                <img src="https://img.wowdsgn.com/page/banners/8383de11-9a90-4c12-a681-b4315ef66e9c_2dimension_1125x690.jpg" alt="" @click="toDolist">
            </div>
            <div class="enter-pj">
                <div class="enter-meiju"
                    v-for="item in priceLists2"
                    :key="item.parentProductId"
                >
                    <img :src="item.productImg" alt="" @click="toDolist">
                    <p class="enter-name">{{item.productTitle}}</p>
                    <div class="enter-price">
                        <span class="salp-price">￥{{item.sellPrice}}</span>
                    </div>

                </div>

            </div>

        </div>

        <!-- 场景 -->
         <div class="guodu5"></div>
         <div class="changjin">
             <img src="https://img.wowdsgn.com/page/banners/a599ac7f-3835-47eb-9807-7a04b3dd4899_2dimension_1125x204.jpg" alt="">
         </div>

         <!-- 客厅 -->
         <div class="guodu6"></div>
         <div class="keting">
             <img src="https://img.wowdsgn.com/page/banners/8b6e760b-762b-4cc2-a2ce-6627f3b662b1_2dimension_1125x369.jpg" alt="">
         </div>

         <!-- 沙发 -->
         <div class="guodu7"></div>
         <div class="shafa">
             <div class="shafa-title"></div>
             <ul class="shafa-Tu">
                     <li class="List"><a href="" style="border-right:1px solid black">沙发</a></li>
                     <li class="List"><a href="" style="border-right:1px solid black">休闲椅</a></li>
                     <li class="List"><a href="">几类</a></li>
             </ul>
         </div>

        <!-- 框架 -->
        <div class="guodu8"></div>
        <div class="kuangjia">
            <div class="kuangjia-title"></div>
            <ul class="kuangjia-ul">
                <li class="list-li"><a href="" style="border-right:1px solid black">框架</a></li>
                <li class="list-li"><a href="" style="border-right:1px solid black">落地灯</a></li>
                <li class="list-li"><a href="">地毯</a></li>
            </ul>

        </div>

        <!-- 云影沙发 -->
        <div class="guodu9"></div>
        <div class="yunying">
            <div class="yunying-title"></div>
            <div class="yunying-h">
                <div class="yunying-hd">
                    <img src="https://img.wowdsgn.com/page/banners/698e6619-412d-44dd-acaf-83291b2195a5_2dimension_510x672.jpg" alt="" @click="toDolist">
                </div>
                <div class="yunying-hd">
                    <img src="https://img.wowdsgn.com/page/banners/7a076e18-9119-4004-9bd2-e70b7c0b1927_2dimension_510x672.jpg" alt="" @click="toDolist">
                </div>

            </div>

        </div>

        <!-- 咖啡办桌 -->
        <div class="guodu10"></div>
        <div class="kafei">
            <div class="kafei-title"></div>
            <div class="kafei-h">
                <div class="kafei-hb">
                    <img src="https://img.wowdsgn.com/page/banners/73b2f4d7-343b-4c51-90f4-7a5d0950d51b_2dimension_513x690.jpg" alt="" @click="toDolist">
                </div>
                 <div class="kafei-hb">
                     <img src="https://img.wowdsgn.com/page/banners/7347e706-359e-4e8c-9cb1-0816cb8695e6_2dimension_513x690.jpg" alt="" @click="toDolist">
                 </div>
            </div>
        </div>

        <!-- 格兰特落地灯 -->
        <div class="guodu11"></div>
        <div class="gelan">
            <div class="gelantitle"></div>
            <div class="gelan-h">
                    <div class="gelan-hd">
                        <img src="https://img.wowdsgn.com/page/banners/1f866149-3869-4f2e-b555-65d7c28b6d38_2dimension_513x690.jpg" alt="" @click="toDolist">
                    </div>
                    <div class="gelan-hd">
                        <img src="https://img.wowdsgn.com/page/banners/d5652438-18a4-4700-a169-a2994daa1b21_2dimension_513x678.png" alt="">
                    </div>
            </div>
        </div>

        <!-- 餐厅 -->
        <div class="guodu12"></div>
        <div class="guodu-1"></div>
        <div class="guodu13"></div>
        <div class="canting">
            <img src="https://img.wowdsgn.com/page/banners/119b853b-0b49-490c-b9c0-b274af6e71e7_2dimension_1125x375.jpg" alt="" @click="toDolist">
        </div>

        <!-- 餐桌 -->
        <div class="guodu14"></div>
         <div class="canzhuo">
             <div class="canzhuo-title"></div>
             <ul class="canzhuo-Tu">
                     <li class="List-1"><a href="" style="border-right:1px solid black">餐桌</a></li>
                     <li class="List-1"><a href="" style="border-right:1px solid black">餐椅</a></li>
                     <li class="List-1"><a href="">餐边柜</a></li>
             </ul>
         </div>

         <!-- 吊灯 -->
         <div class="guodu15"></div>
           <div class="diaodeng">
             <div class="diaodeng-title"></div>
             <ul class="diaodeng-Tu">
                     <li class="List-2"><a href="" style="border-right:1px solid black">吊灯</a></li>
                     <li class="List-2"><a href="" style="border-right:1px solid black">餐具</a></li>
                     <li class="List-2"><a href="">厨具</a></li>
             </ul>
         </div>

        <!-- 布景餐桌 -->
         <div class="guodu16"></div>
         <div class="bujing">
            <div class="bujing-title"></div>
            <div class="bujing-h">
                    <div class="bujing-hd">
                        <img src="https://img.wowdsgn.com/page/banners/4dde53c0-8b8f-4d7e-afd9-df62355061a5_2dimension_519x681.jpg" alt="" @click="toDolist">
                    </div>
                    <div class="bujing-hd">
                        <img src="https://img.wowdsgn.com/page/banners/141a5d2b-7870-4730-8a39-2112d96d090a_2dimension_510x675.jpg" alt="" @click="toDolist">
                    </div>
            </div>
        </div>

        <!-- 百叶系立柜 -->
        <div class="guodu17"></div>
         <div class="baiye">
            <div class="baiye-title"></div>
            <div class="baiye-h">
                    <div class="baiye-hd">
                        <img src="https://img.wowdsgn.com/page/banners/d338d592-7e0a-4a01-9f28-f7e57d0eff69_2dimension_510x690.jpg" alt="" @click="toDolist">
                    </div>
                    <div class="baiye-hd">
                        <img src="https://img.wowdsgn.com/page/banners/b0c4516c-e4e6-40bd-af4d-ba724741dda6_2dimension_510x690.jpg" alt="" @click="toDolist">
                    </div>
            </div>
        </div>

        <!-- 急冻威士忌酒杯 -->
        <div class="guodu18"></div>
         <div class="jidong">
            <div class="jidong-title"></div>
            <div class="jidong-h">
                    <div class="jidong-hd">
                        <img src="https://img.wowdsgn.com/page/banners/43c3c1ca-7764-4fac-8184-481577d1a0d4_2dimension_510x690.jpg" alt="" @click="toDolist">
                    </div>
                    <div class="jidong-hd">
                        <img src="https://img.wowdsgn.com/page/banners/24252b14-ade7-409c-be93-15e25228aeb2_2dimension_510x693.jpg" alt="" @click="toDolist">
                    </div>
            </div>
        </div>

        <!-- 卧室 -->
        <div class="guodu19"></div>
        <div class="guodu-2"></div>
        <div class="guodu20"></div>
        <div class="woshi">
            <img src="https://img.wowdsgn.com/page/banners/c4e99cc5-7765-4899-b6f5-81f08735153d_2dimension_1125x375.jpg" alt="" @click="toDolist">
        </div>

        <!-- 床头柜 -->
        <div class="guodu21"></div>
           <div class="chunagtou">
               <div class="chunagtou-title"></div>
               <ul class="chunagtou-Tu">
                     <li class="List-3"><a href="" style="border-right:1px solid black">床</a></li>
                     <li class="List-3"><a href="" style="border-right:1px solid black">床头柜</a></li>
                     <li class="List-3"><a href="">床品</a></li>
                </ul>
        </div>

           <!-- 斗柜 -->
        <div class="guodu22"></div>
        <div class="dougui">
               <div class="dougui-title"></div>
               <ul class="dougui-Tu">
                     <li class="List-4"><a href="" style="border-right:1px solid black">斗柜</a></li>
                     <li class="List-4"><a href="" style="border-right:1px solid black">帽子架</a></li>
                     <li class="List-4"><a href="">台灯</a></li>
                </ul>
        </div>

        <!-- 阿尔托系列边柜-->
        <div class="guodu23"></div>
         <div class="aer">
            <div class="aer-title"></div>
            <div class="aer-h">
                    <div class="aer-hd">
                        <img src="https://img.wowdsgn.com/page/banners/8c2beb0d-2134-46e5-b17f-6468a2783fc0_2dimension_513x690.jpg" alt="" @click="toDolist">
                    </div>
                    <div class="aer-hd">
                        <img src="https://img.wowdsgn.com/page/banners/b432ba19-5818-4c71-95b8-f6049aea92fd_2dimension_513x690.jpg" alt="">
                    </div>
            </div>
        </div>

         <!-- 小怪兽衣帽架-->
        <div class="guodu24"></div>
         <div class="xiaogua">
            <div class="xiaogua-title"></div>
            <div class="xiaogua-h">
                    <div class="xiaogua-hd">
                        <img src="https://img.wowdsgn.com/page/banners/258bfcf7-da62-4fad-b0af-5443ef009ac8_2dimension_513x678.jpg" alt="" @click="toDolist">
                    </div>
                    <div class="xiaogua-hd">
                        <img src="https://img.wowdsgn.com/page/banners/5cb41127-bbf2-452f-b249-106c2e33e143_2dimension_513x678.jpg" alt="" @click="toDolist">
                    </div>
            </div>
        </div>

         <!-- 书房 -->
        <div class="guodu25"></div>
        <div class="guodu-3"></div>
        <div class="guodu26"></div>
        <div class="shufang">
            <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/fe5d909c-3fb9-4e73-a424-b6d65c7a54ae_2dimension_1125x375.jpg" alt="">
        </div>

        <!-- 书桌 -->
        <div class="guodu27"></div>
         <div class="shuzhuo">
               <div class="shuzhuo-title"></div>
               <ul class="shuzhuo-Tu">
                     <li class="List-5"><a href="" style="border-right:1px solid black">书桌</a></li>
                     <li class="List-5"><a href="" style="border-right:1px solid black">办公椅</a></li>
                     <li class="List-5"><a href="">书柜</a></li>
              </ul>
        </div>

         <!-- 升降柜-->
        <div class="guodu28"></div>
         <div class="shenjiang">
            <div class="shenjiang-title"></div>
            <div class="shenjiang-h">
                    <div class="shenjiang-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/bc9e802a-4263-4ea5-85aa-d7d90f69f912_2dimension_513x678.jpg" alt="">
                    </div>
                    <div class="shenjiang-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/69d9126d-57e2-4081-b818-38281830b3c4_2dimension_522x684.jpg" alt="">
                    </div>
            </div>
        </div>

        <!-- 鲨鱼椅 -->
         <div class="guodu29"></div>
         <div class="shayu">
            <div class="shayu-title"></div>
            <div class="shayu-h">
                    <div class="shayu-hd">
                        <img src="https://img.wowdsgn.com/page/banners/6e1fe063-56e9-4231-9c0a-0b9354243b98_2dimension_522x693.jpg" alt="">
                    </div>
                    <div class="shayu-hd">
                        <img src="https://img.wowdsgn.com/page/banners/9d7d859e-0422-4d65-80ab-b64e1b78198b_2dimension_522x693.jpg" alt="">
                    </div>
            </div>
        </div>

         <!-- 一书架-->
         <div class="guodu30"></div>
         <div class="yishu">
            <div class="yishu-title"></div>
            <div class="yishu-h">
                    <div class="yishu-hd">
                        <img src="https://img.wowdsgn.com/page/banners/9d20da46-8f48-4bda-aa2b-662f0ed451d5_2dimension_522x690.jpg" alt="">
                    </div>
                    <div class="yishu-hd">
                        <img src="https://img.wowdsgn.com/page/banners/cf8e08d4-bc07-48d0-aa81-8096e9cecf76_2dimension_513x690.png" alt="">
                    </div>
            </div>
        </div>

          <!-- 玄关 -->
        <div class="guodu31"></div>
        <div class="guodu-4"></div>
        <div class="guodu32"></div>
        <div class="xaunguan">
            <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/43420161-f326-4a1b-8d12-68f05d2948b2_2dimension_1125x375.jpg" alt="">
        </div>

         <!-- 玄关柜 -->
        <div class="guodu33"></div>
         <div class="guizi">
               <div class="guizi-title"></div>
               <ul class="guizi-Tu">
                     <li class="List-6"><a href="" style="border-right:1px solid black">玄关柜</a></li>
                     <li class="List-6"><a href="" style="border-right:1px solid black">换鞋凳</a></li>
                     <li class="List-6"><a href="">收纳盒</a></li>
              </ul>
        </div>

           <!-- 镜子 -->
        <div class="guodu34"></div>
         <div class="jingzi">
               <ul class="jingzi-Tu">
                     <li class="List-7"><a href="" style="border-right:1px solid black">镜子</a></li>
                     <li class="List-7"><a href="">挂钩</a></li>
              </ul>
        </div>

          <!-- 阿尔法托尔列  伊莉娜-->
         <div class="guodu35"></div>
         <div class="yili">
            <div class="yili-title"></div>
            <div class="yili-h">
                    <div class="yili-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/b1979d56-a0a3-45a3-87a6-703dc5643837_2dimension_513x678.jpg" alt="">
                    </div>
                    <div class="yili-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/e4a86a15-836a-4ff8-aebb-386cbc41a272_2dimension_513x678.jpg" alt="">
                    </div>
            </div>
        </div>

         <!-- 园意衣帽架-->
         <div class="guodu36"></div>
         <div class="yuanyi">
            <div class="yuanyi-title"></div>
            <div class="yuanyi-h">
                    <div class="yuanyi-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/c57ba91f-deb3-43b0-a70d-81c90cc39e14_2dimension_513x690.jpg" alt="">
                    </div>
                    <div class="yuanyi-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/399ed035-a82a-4b2f-b5d4-3b2d45b9dbd3_2dimension_513x690.jpg" alt="">
                    </div>
            </div>
        </div>

            <!-- 地平线系列-->
         <div class="guodu37"></div>
         <div class="diping">
            <div class="diping-title"></div>
            <div class="diping-h">
                    <div class="diping-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/e6ad34a2-d085-4a7f-8a61-4425ebd73a98_2dimension_513x690.jpg" alt="">
                    </div>
                    <div class="diping-hd">
                        <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/c1c0de12-8256-4d70-a13c-8bfa4b2f9005_2dimension_513x690.jpg" alt="">
                    </div>
            </div>
        </div>

          <!-- 家室-->
        <div class="guodu38"></div>
        <div class="guodu-5"></div>
        <div class="guodu39"></div>
        <div class="jiashi">
            <img @click="toDolist" src="https://img.wowdsgn.com/page/banners/c338ba49-83a1-4390-9f3a-a7021e845eac_2dimension_1125x378.jpg" alt="">
        </div>

        <!-- 挂画 -->
        <div class="guodu40"></div>
         <div class="guahua">
               <div class="guahua-title"></div>
               <ul class="guahua-Tu">
                     <li class="List-7"><a href="" style="border-right:1px solid black">挂画</a></li>
                     <li class="List-7"><a href="" style="border-right:1px solid black">花器</a></li>
                     <li class="List-7"><a href="">香薰</a></li>
              </ul>
        </div>

        <!-- 卫浴-->
      <div class="guodu41"></div>
         <div class="weiyu">
               <div class="weiyu-title"></div>
               <ul class="weiyu-Tu">
                     <li class="List-8"><a href="" style="border-right:1px solid black">挂画</a></li>
                     <li class="List-8"><a href="" style="border-right:1px solid black">花器</a></li>
                     <li class="List-8"><a href="">香薰</a></li>
              </ul>
        </div>

           <!-- 蜂鸟墙饰-->
         <div class="guodu42"></div>
         <div class="fengniao">
            <div class="fengniao-title"></div>
            <div class="fengniao-h">
                    <div class="fengniao-hd">
                        <img src="https://img.wowdsgn.com/page/banners/66078e5d-a11d-46ce-b437-0f92648355f9_2dimension_513x678.jpg" alt="">
                    </div>
                    <div class="fengniao-hd">
                        <img src="https://img.wowdsgn.com/page/banners/506774c8-2642-46a0-b92a-9548a689d280_2dimension_513x678.jpg" alt="">
                    </div>
            </div>
        </div>

             <!-- 小鸟摆件-->
         <div class="guodu43"></div>
         <div class="xiaoniao">
            <div class="xiaoniao-title"></div>
            <div class="xiaoniao-h">
                    <div class="xiaoniao-hd">
                        <img src="https://img.wowdsgn.com/page/banners/ab87077f-0de6-4ce3-b67a-416bdaa71d81_2dimension_513x693.jpg" alt="">
                    </div>
                    <div class="xiaoniao-hd">
                        <img src="https://img.wowdsgn.com/page/banners/2c51c198-c70d-4b08-8e1f-ede8e59878f4_2dimension_513x690.jpg" alt="">
                    </div>
            </div>
        </div>

             <!-- 窄口花瓶-->
         <div class="guodu44"></div>
         <div class="zhaikou">
            <div class="zhaikou-title"></div>
            <div class="zhaikou-h">
                    <div class="zhaikou-hd">
                        <img src="https://img.wowdsgn.com/page/banners/123efc35-56b4-4a70-bf22-f1e71adde6f1_2dimension_513x690.jpg" alt="">
                    </div>
                    <div class="zhaikou-hd">
                        <img src="https://img.wowdsgn.com/page/banners/d136fd84-d807-4941-8822-332e87db6187_2dimension_513x690.jpg" alt="">
                    </div>
            </div>
        </div>

          <!-- 品牌合作-->
        <div class="guodu45"></div>
        <div class="guodu-6"></div>
        <div class="guodu46"></div>
        <div class="pingpai">
            <img src="https://img.wowdsgn.com/page/banners/174c0ec4-af6b-47f8-b0c4-f309ce74eefa_2dimension_1125x147.jpg" alt="">
        </div>

          <!-- normann-->
        <div class="guodu47"></div>
        <div class="normann">
            <div class="normann-title"></div>
            <div class="normann-h">
                    <div class="normann-banner">
                        <img src="https://img.wowdsgn.com/page/banners/455ee7cb-9fa0-4a27-afcf-9912f5a9009f_2dimension_324x162.jpg" alt="">
                    </div>
                    <div class="normann-banner">
                        <img src="https://img.wowdsgn.com/page/banners/2fef0d5a-187c-4e88-85be-b2e3bab7203b_2dimension_324x162.jpg" alt="">
                    </div>
                    <div class="normann-banner">
                        <img src="https://img.wowdsgn.com/page/banners/54eef998-2b48-416d-9d98-03e8dc1aee55_2dimension_327x165.jpg" alt="">
                    </div>
            </div>
        </div>

            <!-- Jospn-->
        <div class="guodu48"></div>
        <div class="Jospn">
            <div class="Jospn-title"></div>
            <div class="Jospn-h">
                    <div class="Jospn-banner">
                        <img src="https://img.wowdsgn.com/page/banners/b223943b-926b-4424-849b-1c05b057a0b6_2dimension_324x159.jpg" alt="">
                    </div>
                    <div class="Jospn-banner">
                        <img src="https://img.wowdsgn.com/page/banners/79cddb34-34aa-43fa-b41e-002c42535bd6_2dimension_324x159.jpg" alt="">
                    </div>
                    <div class="Jospn-banner">
                        <img src="https://img.wowdsgn.com/page/banners/0b28c4ba-a146-49a6-aa09-be5ffbc91707_2dimension_327x162.jpg" alt="">
                    </div>
            </div>
        </div>

              <!-- mouuTo-->
        <div class="guodu49"></div>
        <div class="mouuTo">
            <div class="mouuTo-title"></div>
            <div class="mouuTo-h">
                    <div class="mouuTo-banner">
                        <img src="https://img.wowdsgn.com/page/banners/b2d4fac0-9e46-4d9e-a10e-f0dfc56a5e29_2dimension_324x162.jpg" alt="">
                    </div>
                    <div class="mouuTo-banner">
                        <img src="https://img.wowdsgn.com/page/banners/a53b4657-252f-49d7-b506-e51b019f237e_2dimension_327x159.jpg" alt="">
                    </div>
                    <div class="mouuTo-banner">
                        <img src="https://img.wowdsgn.com/page/banners/7a42dd01-e007-463b-8c66-47e7e41d75cb_2dimension_324x165.jpg" alt="">
                    </div>
            </div>
        </div>

          <!-- 线下店-->
        <div class="guodu50"></div>
        <div class="guodu-7"></div>
        <div class="guodu51"></div>
        <div class="xainxai">
            <img src="https://img.wowdsgn.com/page/banners/6715aeb4-9b68-4b29-80b3-ff8d5457d45d_2dimension_1125x150.jpg" alt="">
        </div>

        <!-- 尖叫实验室 -->
        <div class="guodu52"></div>
        <div class="shiyan">
                <img src="https://img.wowdsgn.com/page/banners/0417c227-e95b-4eab-831a-085e6ec27f31_2dimension_1125x1578.jpg" alt="">
        </div>

        <!-- 已经到底了 -->
        <div class="guodu53"></div>
        <div class="daodil">  </div>
        <div class="daodil-dond">
            <div class="daodil-meil">到底了</div>
        </div>

  </div>
</template>

<script>
// 引入Swiper组件
import Swiper from '@/components/swiper'
import { instance } from '@/utils/http'
import axios from 'axios'
import Swipe from 'swiper'
export default {
  components: {
    Swiper // 注册组件Swiper
  },
  methods: {
    toDolist (id) {
      this.$router.push(`/details`)
    },
    handleChangePage () {
      this.$router.push('/search')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  data () {
    return {
      banners: [],
      Lists: [],
      priceLists: [],
      productTitles: [],
      sellPrices: [],
      
      priceLists2: [],
      activeName: 'second'
    }
  },
  created () {
    axios
      .get(`/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1586700092963`)

      .then(res => {
        // console.log(res)
        // console.log(res.data.data.modules[6].moduleContent.products)
        this.banners = res.data.data.modules[0].moduleContent.banners
        this.Lists = res.data.data.modules[2].moduleContent.banners
        this.priceLists = res.data.data.modules[6].moduleContent.products
        this.productTitles = res.data.data.modules[6].moduleContent.products.productTitle
        this.sellPrices = res.data.data.modules[6].moduleContent.products.sellPrice
        this.priceLists2 = res.data.data.modules[7].moduleContent.products
      })
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  height: 0.44rem;
  line-height: 0.44rem;
  -webkit-box-sizing: border-box;
  position: relative;
  padding: 0rem 0.2rem 0rem 0.2rem;

  .logo {
    width: 0.65rem;
    height: 0.16rem;
    position: absolute;
    top: 0.15rem;
  }
  .serch {
    display: inline-block;
    /* position: relative; */
    width: 2.7rem;
    height: 0.26rem;
    line-height: 0.28rem;
    vertical-align: middle;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
    margin-left: 70px;
    margin-bottom: 0.05rem;
    img {
      width: 0.2rem;
      height: 0.2rem;
      display: inline-block;
      vertical-align: middle;
      margin: 0 0.1rem;
    }
    #searchIp input {
      background-color: #f5f5f5;
      display: inline-block;
      width: 80%;
      height: 0.28rem;
    }
    input {
      border: 0;
      background-color: #f5f5f5;
    }
  }

}
.leftTabBox {
    background: #fff;
    .hb {
      height: 0.4rem;
      line-height: 0.4rem;

      background: hotpink;
      .tabul {
        background: #fff;
        height: 0.4rem;
        overflow: hidden;
        .on {
          border-bottom: 0.02rem solid #202020;
          color: #000;
          height: 0.34rem;
        }
        li {
          float: left;
          color: #808080;
          margin: 0 21.5px;
          font-size: 0.28rem;
          padding: 0 11px;
          a {
            height: 0.4rem;
            font-size: 14px;
            color: #808080;
          }
        }
        .on a {
          display: block;
          height: 0.4rem;
          color: #000;
        }
      }
    }
}
.page-module-banner {
    height: 2.49rem;
     .swiper-slide{
         position: relative;
         img{
             width: 100%;

         }
     }
}
.design{
    width: 100%;
    height: 1.1rem;
    bottom: 223px;
    z-index: 10;
      .img-a{
        position: absolute;
        width: 100%;
        height: 1.1rem;
        bottom: 223px;
        z-index: 10;
        background-color: #f5f5f5;
      }
      img{
          height: 0.7rem;
          margin-top: 20px;
      }
}
.newProduct{
    width: 3.75rem;
    height: 2.01rem;
    .page-module-title{
       height: 0.39rem;

    }
    .page-module-center{
        width: 3.75rem;
        height: 1.73rem;
        padding: 15px;
        .page-module-list{
            width: 1.05rem;
            height: 1.43rem;
            margin-right: 0.15rem;
            float: left;
        }
        .page-module-list:last-child{
             margin-right: 0;
        }
    }
}
.guodu{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.inspiration{
    width: 3.75rem;
    height: 0.68rem;
    img{
         width: 3.75rem;
         height: 0.68rem;
    }
}
.guodu1{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.special{
    width: 3.75rem;
    height: 1.7rem;
    img{
         width: 3.75rem;
         height: 1.7rem;
    }
}
.guodu2{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.symposium{
     width: 3.75rem;
    height: 0.68rem;
    img{
         width: 3.75rem;
         height: 0.68rem;
    }
}
.guodu3{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.gift{
    width: 3.75rem;
    height: 4.18rem;
    .gift-title{
        width: 3.75rem;
        height: 0.39rem;

    }
    .gift-img{
        width: 3.75rem;
        height: 2.26rem;
        padding: 15px 15px 0px;

    }
    .gift-list{
        width: 3.75rem;
        height: 1.64rem;
        padding: 0px 15px 15px;
        .listUl{
               float: left;
                width: 31.4%;
                height: 1.49rem;
                margin-right: 0.10rem;

                img{
                    width: 1.08rem;
                    height: 1.08rem;
                }
                .listUl-title{
                        width: 100%;
                        margin: 0.1rem 0rem 0rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-align: center;
                        color: #000;
                        font-size: 12px;
                }
                .listUl-price{
                    text-align: center;
                    color: #000;
                    font-size: 12px;
                    .salp-price{
                        color: #000;
                        font-size: 12px;
                    }
                }

        }
        .listUl:last-child{
             margin-right: 0;
        }
    }
}
.guodu4{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.enter{
     width: 3.75rem;
    height: 4.18rem;
    .enter-title{
         width: 3.75rem;
        height: 0.39rem;
    }
    .enter-list{
         width: 3.75rem;
        height: 2.26rem;
        padding: 15px 15px 0px;

    }
    .enter-pj{
         width: 3.75rem;
        height: 1.64rem;
        padding: 0px 15px 15px;
        .enter-meiju{
                float: left;
                width: 31.4%;
                height: 1.49rem;
                margin-right: 0.10rem;
                img{
                    width: 1.08rem;
                    height: 1.08rem;
                }
                .enter-name{
                        width: 100%;
                        margin: 0.1rem 0rem 0rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-align: center;
                        color: #000;
                        font-size: 12px;
                }
                .enter-price{
                     text-align: center;
                     color: #000;
                     font-size: 12px;
                    .salp-price{
                        font-size: 0.14rem;
                    }
                }
        }
         .enter-meiju:last-child{
             margin-right: 0;
        }
    }
}
.guodu5{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.changjin{
    width: 3.75rem;
    height: 0.68rem;
    .img{
        width: 100%;
        height: 100%;
    }
}
.guodu6{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.keting{
     width: 3.75rem;
    height: 1.23rem;
    .img{
        width: 100%;
        height: 100%;
    }
}
.guodu7{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.shafa{
    width: 3.75rem;
    height: 0.78rem;
    .shafa-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .shafa-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu8{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.kuangjia{
     width: 3.75rem;
    height: 0.78rem;
    .kuangjia-title{
         width: 3.75rem;
        height: 0.28rem;
    }
    .kuangjia-ul{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;
        .list-li{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
               a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
        }
        .list-li:last-child{
                 margin-right: 0rem;
        }
    }
}
.guodu9{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.yunying{
    width: 3.75rem;
    height: 2.58rem;
    .yunying-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .yunying-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .yunying-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
        }
        .yunying-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu10{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.kafei{
    width: 3.75rem;
    height: 2.58rem;
    .kafei-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .kafei-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .kafei-hb{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .kafei-hb:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu11{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.gelan{
    width: 3.75rem;
    height: 2.58rem;
    .gelan-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .gelan-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .gelan-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .gelan-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu12{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-1{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu13{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.canting{
    width: 3.75rem;
    height: 1.25rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.guodu14{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.canzhuo{
    width: 3.75rem;
    height: 0.78rem;
    .canzhuo-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .canzhuo-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-1{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-1:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu15{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}

.diaodeng{
    width: 3.75rem;
    height: 0.78rem;
    .diaodeng-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .diaodeng-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-2{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-2:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu16{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.bujing{
    width: 3.75rem;
    height: 2.59rem;
    .bujing-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .bujing-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .bujing-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .bujing-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu17{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.baiye{
    width: 3.75rem;
    height: 2.59rem;
    .baiye-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .baiye-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .baiye-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .baiye-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu18{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.jidong{
    width: 3.75rem;
    height: 2.59rem;
    .jidong-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .jidong-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .jidong-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .jidong-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu19{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-2{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu20{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.woshi{
    width: 3.75rem;
    height: 1.25rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.guodu21{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.chunagtou{
    width: 3.75rem;
    height: 0.78rem;
    .chunagtou-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .chunagtou-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-3{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-3:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu22{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.dougui{
    width: 3.75rem;
    height: 0.78rem;
    .dougui-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .dougui-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-4{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-4:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu23{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.aer{
    width: 3.75rem;
    height: 2.59rem;
    .aer-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .aer-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .aer-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .aer-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu24{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.xiaogua{
    width: 3.75rem;
    height: 2.59rem;
    .xiaogua-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .xiaogua-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .xiaogua-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .xiaogua-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu25{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-3{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu26{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.shufang{
    width: 3.75rem;
    height: 1.25rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.guodu27{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.shuzhuo{
    width: 3.75rem;
    height: 0.78rem;
    .shuzhuo-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .shuzhuo-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-5{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-5:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu28{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.shenjiang{
    width: 3.75rem;
    height: 2.59rem;
    .shenjiang-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .shenjiang-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .shenjiang-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shenjiang-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu29{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.shayu{
    width: 3.75rem;
    height: 2.59rem;
    .shayu-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .shayu-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .shayu-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shayu-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu30{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.yishu{
    width: 3.75rem;
    height: 2.59rem;
    .yishu-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .yishu-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .yishu-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .yishu-hd:last-child{
            margin-right: 0rem;
        }
    }
}

.guodu31{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-4{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu32{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.xaunguan{
    width: 3.75rem;
    height: 1.25rem;
    img{
        width: 100%;
        height: 100%;
    }
}

.guodu33{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guizi{
    width: 3.75rem;
    height: 0.78rem;
    .guizi-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .guizi-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-6{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-6:last-child{
                 margin-right: 0rem;
        }

    }
}

.guodu34{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.jingzi{
    width: 3.75rem;
    height: 0.5rem;

    .jingzi-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-7{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-7:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu35{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.yili{
    width: 3.75rem;
    height: 2.59rem;
    .yili-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .yili-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .yili-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .yili-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu36{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.yuanyi{
    width: 3.75rem;
    height: 2.59rem;
    .yuanyi-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .yuanyi-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .yuanyi-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .yuanyi-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu37{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.diping{
    width: 3.75rem;
    height: 2.59rem;
    .diping-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .diping-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .diping-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .diping-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu38{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-5{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu39{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.jiashi{
    width: 3.75rem;
    height: 1.25rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.guodu40{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guahua{
    width: 3.75rem;
    height: 0.78rem;
    .guahua-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .guahua-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-7{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-7:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu41{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.weiyu{
    width: 3.75rem;
    height: 0.78rem;
    .weiyu-title{
        width: 3.75rem;
        height: 0.28rem;

    }
    .weiyu-Tu{
         width: 3.75rem;
        height: 0.5rem;
        padding:15px;

        .List-8{
                float: left;
                width: 1.05rem;
                height: 0.2rem;
                margin-right: 0.15rem;
                a{
                    display: block;
                    font-weight: bold;
                    text-align: center;

                }
                 span{
                        margin-left: 10px;
                    }
            }
             .List-8:last-child{
                 margin-right: 0rem;
        }

    }
}
.guodu42{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}

.fengniao{
    width: 3.75rem;
    height: 2.59rem;
    .fengniao-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .fengniao-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .fengniao-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .fengniao-hd:last-child{
            margin-right: 0rem;
        }
    }
}

.guodu43{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}

.xiaoniao{
    width: 3.75rem;
    height: 2.59rem;
    .xiaoniao-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .xiaoniao-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .xiaoniao-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .xiaoniao-hd:last-child{
            margin-right: 0rem;
        }
    }
}

.guodu44{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}

.zhaikou{
    width: 3.75rem;
    height: 2.59rem;
    .zhaikou-title{
         width: 3.75rem;
         height: 0.28rem;

    }
    .zhaikou-h{
        width: 3.75rem;
        height: 2.3rem;
        padding: 0 15px;
        .zhaikou-hd{
            width: 1.67rem;
            height: 2.2rem;
            float: left;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .zhaikou-hd:last-child{
            margin-right: 0rem;
        }
    }
}
.guodu45{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-6{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu46{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.pingpai{
    width: 3.75rem;
    height: 0.49rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.guodu47{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.normann{
    width: 3.75rem;
    height: 1.11rem;
    .normann-title{
        width: 3.75rem;
        height: 0.28rem;
        background: #fff;
    }
    .normann-h{
          width: 3.75rem;
          height: 0.83rem;
          padding: 15px;
          .normann-banner{
                width: 1.05rem;
                height: 0.52rem;
                float: left;
                margin-right: 15px;
          }
          .normann-banner:last-child{
              margin-right: 0;
          }

    }
}
.guodu48{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.Jospn{
    width: 3.75rem;
    height: 1.11rem;
    .Jospn-title{
        width: 3.75rem;
        height: 0.28rem;
        background: #fff;
    }
    .Jospn-h{
          width: 3.75rem;
          height: 0.83rem;
          padding: 15px;
          .Jospn-banner{
                width: 1.05rem;
                height: 0.52rem;
                float: left;
                margin-right: 15px;
          }
          .Jospn-banner:last-child{
              margin-right: 0;
          }

    }
}

.guodu49{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.mouuTo{
    width: 3.75rem;
    height: 1.11rem;
    .mouuTo-title{
        width: 3.75rem;
        height: 0.28rem;
        background: #fff;
    }
    .mouuTo-h{
          width: 3.75rem;
          height: 0.83rem;
          padding: 15px;
          .mouuTo-banner{
                width: 1.05rem;
                height: 0.52rem;
                float: left;
                margin-right: 15px;
          }
          .mouuTo-banner:last-child{
              margin-right: 0;
          }

    }
}
.guodu50{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.guodu-7{
    width: 3.75rem;
    height: 0.32rem;
    background-color: #fff;
}
.guodu51{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.xainxai{
    width: 3.75rem;
    height: 0.49rem;
    img{
        width: 100%;
        height: 100%;
    }
}

.guodu52{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.shiyan{
    width: 3.75rem;
    height: 5.26rem;
    background: hotpink;
}
.guodu53{
    width: 3.75rem;
    height: 0.18rem;
    background-color: #f5f5f5;
}
.daodil{
    width: 3.75rem;
    height: 0.32rem;
    background: #fff;
}
.daodil-dond{
    width: 3.75rem;
    height: 0.5rem;
    background: #fff;
    .daodil-meil{
            height: 50px;
            line-height: 50px;
            text-align: center;
    }
}

</style>
