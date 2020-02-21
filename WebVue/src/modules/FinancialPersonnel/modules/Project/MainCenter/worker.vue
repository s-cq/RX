<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon" v-if="leftInfo.AfterMarketState === 1">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预人</span>
                    <span class="cGreen">{{totalNeedPerson}}个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">工时</span>
                    <span class="cGreen">{{totalTimes.toFixed(2)}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">计划</span>
                    <span class="cGreen">{{totalmoney.toFixed(2)}}元</span>
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
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.AfterMarketState === 1">
         <router-link tag="div" exact :to="routerPath('workerDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">人数</span>
                    <span class="cGreen">{{item.workerNumber}}个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">工时</span>
                    <span class="cGreen">{{item.workingDay}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">计划</span>
                    <span class="cGreen">{{item.planMoney}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-else>
         <router-link tag="div" exact :to="routerPath('workerDetailOtherThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="pr8 cLightGray">人数</span> <br>
                    <span>{{item.workerNumber}}</span>人
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">工时</span> <br>
                    <span class="cGreen">{{item.workingDay}}</span>人
                </p>
                <p class="col-md-2" >
                    <span class="pr8 cLightGray">计划</span> <br>
                    <span class="cRed">{{item.planMoney}}</span>人
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.AfterMarketState === 1">
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
import { getOrderWorkTypeWagesList } from '../Resources/Api'
export default {
    name: '',
    data () {
        return {
            workerList: [],
            workerOtherList: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        // 计算总预计人数
        totalNeedPerson () {
            let count = 0
            this.workerOtherList.forEach(item => {
                count += item.workerNumber
            }) 
            return count
        },
        // 计算总工时
        totalTimes () {
            let times = 0
            this.workerOtherList.forEach(item => {
                times += item.workingDay
            })
            return times
        },
        // 计算总计划金额
        totalmoney () {
            let sum = 0
            this.workerOtherList.forEach(item => {
                sum += item.planMoney
            })
            return sum
        },
        totalDays () {
            let day = 0
            this.workerList.forEach(item => {
                day += item.workingDay
            })
            return day
        },
        totaloffers () {
            let offer = 0
            this.workerList.forEach(item => {
                offer += item.offer
            })
            return offer
        },
        totalmoneys () {
            let money = 0
            this.workerList.forEach(item => {
                money += item.money
            })
            return money
        },
        // 应选
        selectNumber () {
            let number = 0
            this.workerOtherList.forEach(item => {
                number += item.workerNumber
            })
            return number
        },
        // 实际
        actualNumber () {
            let number = 0
            this.workerOtherList.forEach(item => {
                number += item.workerActiveNumber
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
            return ((number2 / number1) * 100)
        }
    },
    created () {
        console.info(this.leftInfo)
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
                orderNo: this.leftInfo.orderno
            }
            // 查询材料数据
            getOrderWorkTypeWagesList(param).then(results => {
                this.workerOtherList = results.data.Body
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
