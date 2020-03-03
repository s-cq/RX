<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="pr8 cLightGray">--</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.AfterMarketState === 1">
        <!-- <router-link tag="div" exact :to="routerPath('workerDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合计</p>
            <div class="analyItemCon">
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
        </router-link> -->
         <!-- <router-link tag="div" exact :to="routerPath('workerDetailThree?workerOtherList='+item+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index"> -->
         <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">人数</span><br>
                    <span class="cGreen">{{item.workerNumber}}个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">工时</span><br>
                    <span class="cGreen">{{item.workingDay}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">计划</span><br>
                    <span class="cGreen">{{item.planMoney}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.AfterMarketState === 2">
         <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="cLightGray pr8">预/实人</span><br>
                    <span class="cGreen">{{item.workerNumber}}/{{item.workerActiveNumber}}</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">工时</span><br>
                    <span class="cGreen">{{item.workingDay.toFixed(2)}}天</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">计划</span><br>
                    <span class="cGreen">{{item.planMoney.toFixed(2)}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">实际</span><br>
                    <span class="cGreen">{{item.projectMoney.toFixed(2)}}元</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">剩余</span><br>
                    <span class="cGreen">{{(item.planMoney-item.projectMoney).toFixed(2)}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.AfterMarketState === 3">
         <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="pr8 cLightGray">可用</span><br>
                    <span class="cGreen">--</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">预/实人</span><br>
                    <span class="cGreen">{{item.workerNumber}}/{{item.workerActiveNumber}}</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">工时</span><br>
                    <span class="cGreen">{{item.workingDay.toFixed(2)}}天</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">计划</span><br>
                    <span class="cGreen">{{item.planMoney.toFixed(2)}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">实际</span><br>
                    <span class="cGreen">{{item.projectMoney.toFixed(2)}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">剩余</span><br>
                    <span class="cGreen">{{(item.planMoney-item.projectMoney).toFixed(2)}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.AfterMarketState === 4">
        <!-- <router-link tag="div" exact :to="routerPath('workerDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合计</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="pr8 cLightGray">实人</span>
                    <span class="cGreen">{{totalWorker}}个</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">应付</span>
                    <span class="cGreen">{{totalProjectMoney}}元</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">已付</span>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">未付</span>
                    <span class="cGreen">{{totalNoPayMoney}}元</span>
                </p>
            </div>
        </router-link> -->
        <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="pr8 cLightGray">实人</span><br>
                    <span class="cGreen">{{item.workerActiveNumber}}</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">应付</span><br>
                    <span class="cGreen">{{item.projectMoney}}元</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">已付</span><br>
                    <span class="cGreen">{{item.payMoney}}元</span>
                </p>
                <p class="col-md-3">
                    <span class="pr8 cLightGray">未付</span><br>
                    <span class="cGreen">{{(item.projectMoney-item.payMoney).toFixed(2)}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.AfterMarketState === 5">
        <!-- <router-link tag="div" exact :to="routerPath('workerDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合计</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应付</span>
                    <span class="cGreen">{{totalProjectMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已付</span>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未付</span>
                    <span class="cGreen">{{totalNoPayMoney}}元</span>
                </p>
            </div>
        </router-link> -->
        <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应付</span><br>
                    <span class="cGreen">{{item.projectMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已付</span><br>
                    <span class="cGreen">{{item.payMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未付</span><br>
                    <span class="cGreen">{{(item.projectMoney-item.payMoney).toFixed(2)}}元</span>
                </p>
             </div>
        </router-link>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-else>
         <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合计</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应付</span><br>
                    <span class="cGreen">{{totalProjectMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已付</span><br>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未付</span><br>
                    <span class="cGreen">{{totalNoPayMoney}}元</span>
                </p>
            </div>
        </router-link>
         <router-link tag="div" exact :to="{path:routerPath('workerDetailThree'), query:{workerOtherList:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) in workerOtherList" :key="index">
            <p class="analyItemTit tx-center">{{item.workerTypeName}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应付</span><br>
                    <span class="cGreen">{{item.projectMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已付</span><br>
                    <span class="cGreen">{{item.payMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未付</span><br>
                    <span class="cGreen">{{item.projectMoney-item.payMoney}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.AfterMarketState === 1">
        <router-link tag="div" exact :to="routerPath('workerDetailThreeHandle?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预人</span><br>
                    <span class="cGreen">{{totalNeedPerson}}个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">工时</span><br>
                    <span class="cGreen">{{totalDays}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">计划</span><br>
                    <span class="cGreen">{{totalmoney}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.AfterMarketState === 2">
        <router-link tag="div" exact :to="routerPath('workerDetailThreeHandle?index=1')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="pr8 cLightGray">预/实人</span><br>
                    <span class="cGreen">{{totalNeedPerson}}/{{totalWorker}}</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">工时</span><br>
                    <span class="cGreen">{{totalDays}}天</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">计划</span><br>
                    <span class="cGreen">{{totalmoney}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">实际</span><br>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">剩余</span><br>
                    <span class="cGreen">{{(totalmoney-totalPayMoney).toFixed(2)}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.AfterMarketState === 3">
        <router-link tag="div" exact :to="routerPath('workerDetailThreeHandle?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="pr8 cLightGray">可用</span><br>
                    <span class="cGreen">--</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">预/实人</span><br>
                    <span class="cGreen">{{totalNeedPerson}}/{{totalWorker}}</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">工时</span><br>
                    <span class="cGreen">{{totalDays}}天</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">计划</span><br>
                    <span class="cGreen">{{totalmoney}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">实际</span><br>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-2">
                    <span class="pr8 cLightGray">剩余</span><br>
                    <span class="cGreen">{{(totalmoney-totalPayMoney).toFixed(2)}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.AfterMarketState === 4">
            <router-link tag="div" exact :to="routerPath('workerDetailThree?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="pr8 cLightGray">实人</span><br>
                        <span class="cGreen">{{totalWorker}}个</span>
                    </p>
                    <p class="col-md-3">
                        <span class="pr8 cLightGray">应付</span><br>
                        <span class="cGreen">{{totalProjectMoney}}元</span>
                    </p>
                    <p class="col-md-3">
                        <span class="pr8 cLightGray">已付</span><br>
                        <span class="cGreen">{{totalPayMoney}}元</span>
                    </p>
                    <p class="col-md-3">
                        <span class="pr8 cLightGray">未付</span><br>
                        <span class="cGreen">{{totalNoPayMoney}}元</span>
                    </p>
                </div>
            </router-link>
    </div>
    <div class="pr10" v-if="leftInfo.AfterMarketState === 5">
        <router-link tag="div" exact :to="routerPath('workerDetailThree?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应付</span><br>
                    <span class="cGreen">{{totalProjectMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已付</span><br>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未付</span><br>
                    <span class="cGreen">{{totalNoPayMoney}}元</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10" v-else>
        <router-link tag="div" exact :to="routerPath('workerDetailThreeHandle?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">应付</span><br>
                    <span class="cGreen">{{totalProjectMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="cGreen">{{totalPayMoney}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span class="cGreen">{{totalNoPayMoney}}元</span>
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
            return sum.toFixed(2)
        },
        // 计算实际总工时
        totalDays () {
            let day = 0
            this.workerOtherList.forEach(item => {
                day += item.workingDay
            })
            return day.toFixed(2)
        },
        // 计算总实际人数
        totalWorker () {
            let count = 0
            this.workerOtherList.forEach(item => {
                count += item.workerActiveNumber
            })
            return count
        },
        // 计算总应付
        totalProjectMoney () {
            let money = 0
            this.workerOtherList.forEach(item => {
                money += item.projectMoney
            })
            return money.toFixed(2)
        },
        // 计算总实际付
        totalPayMoney () {
            let money = 0
            this.workerOtherList.forEach(item => {
                money += item.payMoney
            })
            return money.toFixed(2)
        },
        // 计算总未付
        totalNoPayMoney () {
            let money = 0
            this.workerOtherList.forEach(item => {
                money += (item.projectMoney - item.payMoney)
            })
            return money.toFixed(2)
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
                orderNo: this.leftInfo.orderno // 103-316
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
