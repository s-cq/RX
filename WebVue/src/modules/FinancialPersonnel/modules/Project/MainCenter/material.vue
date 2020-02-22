<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link tag="div" exact :to="routerPath('marStageThree?qualityListItem='+item+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in qualityList" :key="index">
            <p class="analyItemTit tx-center">{{item.shopName | truncate(4)}}</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                        <rx-viewer :images="item.shopPhoto">
                            <div class="clearfix mt10">
                                <div class="fl relative">
                                    <img :src="item.shopPhoto | smallImg(100, 100)">
                                </div>
                            </div>
                        </rx-viewer>
                        <!-- <span data-title="点击查看标准内容" class="staticSRyle" @click="item.isShow = !item.isShow">标</span> -->
                </div>
                <div class="col-md-8">
                    <div>
                        <p class="col-md-6  " :data-title="item.shopName">
                            <span class="cLightGray pr8" >{{item.shopCode}}</span>:
                            <span>{{item.shopName}}</span>
                        </p>
                        <p class="col-md-6">
                            <span class="cLightGray pr8">计划金额:</span>
                            <span> {{item.planMoney}}</span>
                        </p>
                        <p class="col-md-6">
                            <span class="cLightGray pr8">店铺编号:</span>
                            <span> {{item.shopCode}}</span>
                        </p>
                        <p class="col-md-6">
                            <span class="cLightGray pr8">实 际:</span>
                            <span> {{item.totalMoney}}</span>
                        </p >
                        <p class="col-md-6">
                            <span class="cLightGray pr8">主 营:</span>
                            <span :data-title="item.manageMainType"> {{item.manageMainType | truncate(4)}}</span>
                        </p>
                        <p class="col-md-6">
                            <span class="cLightGray pr8">剩 余:</span>
                            <span> {{item.planMoney-item.totalMoney}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('marStageThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active" v-if="leftInfo.AfterMarketState === 1 || leftInfo.AfterMarketState === 2">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" >店铺</span><br>
                    <span class="cGreen clkymoney">{{this.shopCount}}</span>
                 </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">计划金额</span><br>
                    <span class="cGreen clkymoney">{{this.planMoney}}</span>
                 </p>
                 <!-- <span class="circlemark circlemark-lightRed">问</span> -->
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('marStageThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active" v-if="leftInfo.AfterMarketState === 3">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" >计划</span><br>
                    <span class="cGreen clkymoney">{{this.planMoney}}</span>
                 </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">实际</span><br>
                    <span class="cGreen clkymoney">{{this.totalMoneys}}</span>
                 </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="cGreen clkymoney">{{this.paidMoney}}</span>
                 </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">未用</span><br>
                    <span class="cGreen clkymoney">{{this.unusedMoney}}</span>
                 </p>
                 <!-- <span class="circlemark circlemark-lightRed">问</span> -->
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('marStageThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active" v-if="leftInfo.AfterMarketState === 4">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" >应付</span><br>
                    <span class="cGreen clkymoney">{{this.totalMoneys}}</span>
                 </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="cGreen clkymoney">{{this.paidMoney}}</span>
                 </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">未付</span><br>
                    <span class="cGreen clkymoney">{{this.notPaidMoney}}</span>
                 </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">未用</span><br>
                    <span class="cGreen clkymoney">{{this.unusedMoney}}</span>
                 </p>
                 <!-- <span class="circlemark circlemark-lightRed">问</span> -->
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('marStageThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active" v-if="leftInfo.AfterMarketState === 5">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" >应付</span><br>
                    <span class="cGreen clkymoney">{{this.totalMoneys}}</span>
                 </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="cGreen clkymoney">{{this.paidMoney}}</span>
                 </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span class="cGreen clkymoney">{{this.notPaidMoney}}</span>
                 </p>
                 <!-- <span class="circlemark circlemark-lightRed">问</span> -->
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('marStageThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active" v-else>
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" >应付</span><br>
                    <span class="cGreen clkymoney">{{this.totalMoneys}}</span>
                 </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="cGreen clkymoney">{{this.paidMoney}}</span>
                 </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span class="cGreen clkymoney">{{this.notPaidMoney}}</span>
                 </p>
                 <!-- <span class="circlemark circlemark-lightRed">问</span> -->
            </div>
        </router-link>

    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetShopItemsToFinanceByRwdID, GetProInfoMoneyStatisticsToFinanceByRwdID } from '../Resources/Api'
export default {
    data () {
        return {
            shopCount: 0, // 店铺个数
            planMoney: 0.00, // 计划金额
            totalMoneys: 0.00, // 总金额
            paidMoney: 0.00, // 支付金额
            notPaidMoney: 0.00, // 支付金额
            unusedMoney: 0.00, // 未用金额
            qualityList: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 默认加载
        load () {
            let param = {
                rwdID: this.leftInfo.orderno
            }
            // 查询材料数据
            GetShopItemsToFinanceByRwdID(param).then(results => {
                this.qualityList = results.data.body.items
                this.shopCount = results.data.body.shopCount
                this.planMoney = results.data.body.planMoney
            }).catch(() => {})
            // 查询金额信息
            GetProInfoMoneyStatisticsToFinanceByRwdID(param).then(results => {
                this.totalMoneys = results.data.body.totalMoney
                this.paidMoney = results.data.body.paidMoney
                this.notPaidMoney = results.data.body.notPaidMoney
                this.unusedMoney = results.data.body.unusedMoney
            }).catch(() => {})
        }
    },
    watch: {
        leftInfo () {
            this.load()
            console.log('111')
        }
    }
}
</script>
