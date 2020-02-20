<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon" v-if="leftInfo.stage === '审计'">
                <p class="col-md-2">
                    <span class="pr8 cLightGray">工种</span>
                    <span class="cGreen">{{workerList.length}}个</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">天数</span>
                    <span class="cGreen">{{totalDays}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总成本</span>
                    <span class="cGreen">{{totalmoneys}}元</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray">总报价</span>
                    <span class="cGreen">{{totaloffers}}</span>
                </p>
            </div>
            <div class="analyItemCon" v-else>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应选</span>
                    <span>{{selectNumber}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">实际</span>
                    <span class="cGreen">{{actualNumber}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未选</span>
                    <span class="cRed">{{noSelectNumber}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">超出</span>
                    <span class="cRed">{{overSelectNumber}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray">选工人占比</span>
                    <span class="cRed">{{worekerScale}}%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.stage === '审计'">
         <router-link tag="div" exact :to="routerPath('workerDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerType}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">天数</span>
                    <span class="cGreen">{{item.days}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">成本</span>
                    <span class="cGreen">{{item.money.toFixed(2)}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">报价</span>
                    <span class="cGreen">{{item.offer}}</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-else>
         <router-link tag="div" exact :to="routerPath('workerDetailOtherThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerType}}</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="pr8 cLightGray">应选</span> <br>
                    <span>{{item.totalNumber}}</span>人
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">实际</span> <br>
                    <span class="cGreen">{{item.planNumber}}</span>人
                </p>
                <p class="col-md-2" v-if="item.planNumber<=item.totalNumber">
                    <span class="pr8 cLightGray">未选</span> <br>
                    <span class="cRed">{{item.totalNumber - item.planNumber}}</span>人
                </p>
                <p class="col-md-2" v-else>
                    <span class="pr8 cLightGray">超出</span> <br>
                    <span class="cRed">{{item.planNumber - item.totalNumber}}</span>人
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">计划金额</span> <br>
                    <span class="cGreen">{{item.money.toFixed(2)}}</span>元
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">项目订单金额</span> <br>
                    <span class="cGreen">{{item.projectMoney.toFixed(2)}}</span>元
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.stage === '审计'">
        <router-link tag="div" exact :to="routerPath('workerDetailThreeHandle?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">工种</span>
                    <span class="cGreen">{{workerList.length}}个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">天数</span>
                    <span class="cGreen">{{totalDays}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总成本</span>
                    <span class="cGreen">{{totalmoneys}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-else>
        <router-link tag="div" exact :to="routerPath('workerDetailThreeHandle?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="pr8 cLightGray">应选</span>
                    <span>{{selectNumber}}</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">实际</span>
                    <span class="cGreen">{{actualNumber}}</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">未选</span>
                    <span class="cRed">{{noSelectNumber}}</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">超出</span>
                    <span class="cRed">{{overSelectNumber}}</span>
                </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: '',
    data () {
        return {
            workerList: [
                {
                    workerType: '木工',
                    days: 6.26,
                    money: 1440,
                    offer: 1
                },
                {
                    workerType: '瓦工',
                    days: 3.76,
                    money: 1015,
                    offer: 1
                },
                {
                    workerType: '油工',
                    days: 17.37,
                    money: 3822,
                    offer: 1
                },
                {
                    workerType: '电工',
                    days: 46.82,
                    money: 11235.8,
                    offer: 2
                },
                {
                    workerType: '水暖工',
                    days: 1.27,
                    money: 304,
                    offer: 1
                },
                {
                    workerType: '壮工',
                    days: 16.79,
                    money: 3357.2,
                    offer: 1
                },
                {
                    workerType: '拆除工',
                    days: 3.1,
                    money: 806.46,
                    offer: 1
                }
            ],
            workerOtherList: [
                {
                    workerType: '木工',
                    totalNumber: 1,
                    planNumber: 0,
                    getNumber: 1,
                    money: 3989.63,
                    projectMoney: 0
                },
                {
                    workerType: '瓦工',
                    totalNumber: 2,
                    planNumber: 0,
                    getNumber: 2,
                    money: 10764.8,
                    projectMoney: 0
                },
                {
                    workerType: '油工',
                    totalNumber: 1,
                    planNumber: 1,
                    getNumber: 0,
                    money: 3914.84,
                    projectMoney: 1
                },
                {
                    workerType: '电工',
                    totalNumber: 1,
                    planNumber: 2,
                    getNumber: 1,
                    money: 3989.63,
                    projectMoney: 0
                },
                {
                    workerType: '水暖工',
                    totalNumber: 1,
                    planNumber: 0,
                    getNumber: 1,
                    money: 849.6,
                    projectMoney: 0
                },
                {
                    workerType: '壮工',
                    totalNumber: 1,
                    planNumber: 0,
                    getNumber: 1,
                    money: 849.6,
                    projectMoney: 0
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        totalDays () {
            let day = 0
            this.workerList.forEach(item => {
                day += item.days
            })
            return day
        },
        totaloffers () {
            let offer = 0
            this.workerList.forEach(item => {
                offer += item.offer
            })
            return offer.toFixed(2)
        },
        totalmoneys () {
            let money = 0
            this.workerList.forEach(item => {
                money += item.money
            })
            return money.toFixed(2)
        },
        // 应选
        selectNumber () {
            let number = 0
            this.workerOtherList.forEach(item => {
                number += item.totalNumber
            })
            return number
        },
        // 实际
        actualNumber () {
            let number = 0
            this.workerOtherList.forEach(item => {
                number += item.planNumber
            })
            return number
        },
        // 未选
        noSelectNumber () {
            let number = 0
            this.workerOtherList.forEach(item => {
                if (item.totalNumber >= item.planNumber) {
                    number += (item.totalNumber - item.planNumber)
                }
            })
            return number
        },
        // 超出
        overSelectNumber () {
            let number = 0
            this.workerOtherList.forEach(item => {
                if (item.totalNumber < item.planNumber) {
                    number += (item.planNumber - item.totalNumber)
                }
            })
            return number
        },
        // 占比
        worekerScale () {
            let number1 = 0
            let number2 = 0
            this.workerOtherList.forEach(item => {
                number2 += item.planNumber
                number1 += item.totalNumber
            })
            return ((number2 / number1) * 100).toFixed(2)
        }
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
    },
    watch: {
        leftInfo () {
            console.log('111')
        }
    }
}
</script>
