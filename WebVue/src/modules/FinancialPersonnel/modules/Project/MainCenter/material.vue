<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-6">
                    <span class="cLightGray pr8">店铺</span>
                    <span>{{shopNumber}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{totalMoney}}</span>
                </p> -->
            </div>
            <!-- <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">储蓄卡总金额</span>
                    <span>25517.00元</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">储蓄卡余额</span>
                    <span>25517.00元</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">下单计划金额</span>
                    <span>15266.50</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">下单配送金额</span>
                    <span>0.00</span>
                </p>
                <p class="col-md-6">
                    <span data-title="储蓄卡和下单的总占比" class="cLightGray pr8">储蓄卡和下单总占比</span>
                    <span> 0%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div> -->
        </div>
    </div>
    <!-- <div class="thinScroll pr10" v-scrollHeight="84">
         <router-link tag="div" exact :to="routerPath('workerDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in materialList" :key="index">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="pr8 cLightGray">店铺</span>
                    <span>{{item.shopNumber}}</span>
                </p>
                <p class="col-md-6">
                    <span class="pr8 cLightGray">金额</span>
                    <span>{{item.shopMoney.toFixed(2)}}元</span>
                </p>
            </div>
        </router-link>
    </div> -->
    <div class="thinScroll pr10" v-scrollHeight="84">
         <div class="analyItem statusCha">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span><br>
                    <span class="cGreen">0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span><br>
                    <span class="cGreen">0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span><br>
                    <span class="cGreen">0</span>
                </p>
            </div>
         </div>
        <router-link tag="div" exact :to="routerPath('marStageThree?index='+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in qualityList" :key="index">
            <p class="analyItemTit tx-center">{{item.name | truncate(4)}}</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                        <rx-viewer :images="sceneImgList">
                            <div class="clearfix mt10">
                                <div class="fl relative">
                                    <img :src="src | smallImg(100, 100)">
                                </div>
                            </div>
                        </rx-viewer>
                        <!-- <span data-title="点击查看标准内容" class="staticSRyle" @click="item.isShow = !item.isShow">标</span> -->
                </div>
                    <div class="col-md-8">
                        <div>
                            <p class="col-md-6  " :data-title="item.name">
                                <span class="cLightGray pr8" >名称</span>
                                <span> {{item.name | truncate(4)}}</span>
                            </p>
                            <p class="col-md-6">
                                <span class="cLightGray pr8">工艺单号</span>
                                <span> {{item.qualityNumber === null ? '暂无工艺单号' : ''}}</span>
                            </p>
                            <p class="col-md-6">
                                <span class="cLightGray pr8">工人</span>
                                <span> {{item.worker === null ? '暂无工人' : ''}}</span>
                            </p>
                            <p class="col-md-6">
                                <span class="cLightGray pr8">区域名称</span>
                                <span> {{item.area}}</span>
                            </p >
                            <p class="col-md-12">
                                <span class="cLightGray pr8">位置名称</span>
                                <span> {{item.local}}</span>
                            </p>
                        </div>
                    </div>
                    <!-- <span class="cGreen circlemarkmen fixedRight">待分配</span> -->
                <!-- <div v-show="item.isShow">
                    {{item.content}}
                </div> -->
            </div>
        </router-link>
        <!-- <router-link tag="div" exact :to="{path:routerPath('marStageThree'), query:{stage: '待接单',  name:'待接单'}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">待接单</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">订单</span>
                    <span>0笔</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">金额</span>
                    <span>0元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact :to="{path:routerPath('marStageThree'), query:{stage: '配送中',  name:'进行中'}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">进行中</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">订单</span>
                    <span>0笔</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">金额</span>
                    <span>0元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact :to="{path:routerPath('marStageThree'), query:{stage: '待收货',  name:'待验证'}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">待验证</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">订单</span>
                    <span>0笔</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">金额</span>
                    <span>0元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact :to="{path:routerPath('marStageThree'), query:{stage: '待出纳', name:'已收货'}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">已收货</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">订单</span>
                    <span>0笔</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">金额</span>
                    <span>0元</span>
                </p>
            </div>
        </router-link> -->
    </div>
    <div class="pr10">
        <!-- <div class="analyItem">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon" >
                <p class="col-md-6">
                    <span class="cLightGray pr8">店铺</span>
                    <span>{{shopNumber}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{totalMoney}}</span>
                </p>
            </div>
        </div> -->
        <router-link tag="div" :to="routerPath('marStageThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title=" 可用=当人工可用> 项目可用时， 人工可用=项目可用 <br/>材料款可用资金： <br/>1、当人工可用为负数时：项目可用资金 + 人工款可用资金 ，  <br/>2、人工可用为正数时： 项目可用资金 - 人工款可用资金">可用</span><br>
                    <span class="cGreen clkymoney">0.00</span>
                 </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">可批</span><br>
                    <span class="cGreen clkymoney">0.00</span>
                 </p>
                 <span class="circlemark circlemark-lightRed">问</span>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
            qualityList: [{
                src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
                isShow: false,
                name: '开槽修补',
                qualityNumber: null,
                worker: null,
                area: '电器工程',
                local: '其他',
                content: '修补采用1:3-1:4的水泥砂浆将孔洞、线管槽回填处理'
            },
            {
                src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
                isShow: false,
                name: '明装灯具',
                qualityNumber: null,
                worker: null,
                area: '电器工程',
                local: '其他',
                content: '据图纸安装位置，画出灯具固定位置，将电源线与灯具接线端子连接，用螺丝将灯具与挂件连接，用自攻螺丝将灯具底座安装在顶面，面罩卡扣与底座连接紧密，保持横平竖直，灯具安装牢固、无松动后通电调试。'
            },
            {
                src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1558084186pbTTM587f3.png',
                isShow: false,
                name: '轻钢龙骨双面单层石膏板隔墙',
                qualityNumber: null,
                worker: null,
                area: '间隔工程',
                local: '其他',
                content: '根据施工方案进行放线定位，清理基层，用电锤安装12ø钻头打眼，其深度不小于60mm，将眼内灰尘清理干净，塞入10ø膨胀螺栓，将螺栓拧紧固定，固定点间距应不大于600mm，固定点至两端距离不大于100mm。竖向龙骨间距不超过400mm,与天地龙骨拉铆钉连接处理，单面封板进行岩棉填充，隐蔽验收后进行双面封板。'
            }],
            materialList: [{
                name: '主材订单',
                shopNumber: 5,
                shopMoney: 10290.50
            },
            {
                name: '复尺订单',
                shopNumber: 3,
                shopMoney: 9230
            }, {
                name: '基础订单',
                shopNumber: 5,
                shopMoney: 7228.66
            }]
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        shopNumber () {
            let number = 0
            this.materialList.forEach(item => {
                number += item.shopNumber
            })
            return number
        },
        totalMoney () {
            let money = 0
            this.materialList.forEach(item => {
                money += item.shopMoney
            })
            return money.toFixed(2)
        }
    },
    created () {

    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
