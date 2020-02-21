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
         <div class="analyItem statusCha">
            <p class="analyItemTit tx-center">合计</p>
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
import { GetShopItemsToFinanceByRwdID } from '../Resources/Api'
export default {
    data () {
        return {
            qualityList: [],
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
