<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">金额</span>
                        <span>{{Number(orderMoney)+Number(workerMoney.worker_money*workerSum)}}</span>
                    </p>
                    <span class="circlemark" :class="stageNum | stageColor">{{ stageName }}</span>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <div v-if="orderList.length >0">
                <router-link tag="div" :to="{path: routerPath('processEnvironmentorder1'),query:{order_type_id:item.order_type_id,user_card_no:leftInfo.cardNo,order_name:item.name,priceCount:item.unit_price*item.orderCount}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in orderList" :key="index" exact>
                    <p class="analyItemTit tx-center">{{item.name}}</p>
                    <p class="analyItemTit tx-center" style="display:none">{{item.order_type_id}}</p>
                    <div v-if="item.order_type_id!=28" class="analyItemCon">
                        <p class="col-md-3 ">
                            <span class="cLightGray pr8">个数</span>
                            <span>{{item.orderCount}}个</span>
                        </p>
                        <p class="col-md-3 ">
                            <span class="cLightGray pr8">完成单价</span>
                            <span>{{item.unit_price}}</span>
                        </p>
                        <!-- <p class="col-md-3 ">
                            <span class="cLightGray pr8">超期单价</span>
                            <span>-{{item.unit_price}}</span>
                        </p> -->
                        <!-- <p class="col-md-3 ">
                            <span class="cLightGray pr8">合计金额</span>
                            <span>-{{item.unit_price * item.orderCount}}</span>
                        </p> -->
                         <span class="circlemark" :class="stageNum | stageColor">{{ stageName }}</span>
                    </div>
                    <div v-if="item.order_type_id==28" class="analyItemCon">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">个数</span>
                            <span>{{item.orderCount}}个</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">接单单价</span>
                            <span>{{item.unit_price}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">完成单价</span>
                            <span>{{item.finish_price}}</span>
                        </p>
                        <!-- <p class="col-md-3">
                            <span class="cLightGray pr8">合计金额</span>
                            <span>{{item.orderCount * item.finish_price}}</span>
                        </p> -->
                         <span class="circlemark" :class="stageNum | stageColor">{{ stageName }}</span>
                    </div>
                </router-link>
            </div>
            <div v-else>
                <div class="analyItem" v-for="(item, index) in orderListDate" :key="index">
                    <p class="analyItemTit tx-center">{{item}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-4 ">
                            <span class="cLightGray pr8">个数</span>
                            <span>0个</span>
                        </p>
                         <span class="circlemark" :class="stageNum | stageColor">{{ stageName }}</span>
                    </div>
                </div>
            </div>
            <router-link tag="div" :to="{name: 'worker1'}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">工人录入</p>
                <!-- <p class="analyItemTit tx-center" style="display:none">{{item.order_type_id}}</p> -->
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{workerSum}}个</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{workerMoney.worker_money}}</span>
                    </p>
                     <span class="circlemark" :class="stageNum | stageColor">{{ stageName }}</span>
                    <!-- <p class="col-md-4 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{}}</span>
                    </p> -->
                </div>
            </router-link>
            <router-link tag="div" :to="{path:routerPath('superServerThree'),query: {data:serverNameList}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">增值</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">个数</span><span>{{allnumber}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">总金额</span><span>{{allmoney}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">实际金额</span><span>{{allactualMoney}}</span></p>
                    <span class="circlemark" :class="stageNum | stageColor">{{ stageName }}</span>
                </div>
            </router-link>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="{name:'handerProcess1'}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">总个数</span>
                        <span>{{totalNumber}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">总金额</span>
                        <span>{{Number(orderMoney)+Number(workerMoney.worker_money*workerSum)}}</span>
                        <!-- <span>{{totalMoney}}</span> -->
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { getStayStayProcessDetail, getWorkerDetails, getValueAddServicesBySupervisionCard, getExcellentGoodModeratePoor } from '../Resources/Api'
export default {
    data () {
        return {
            orderListDate: ['现场交底', '摄像头订单', '整改订单', '竣工总检'], // 订单无数据时的数据
            orderList: [], // 订单数据
            countSum: 0,
            countMoney: 0.0,
            anQuan: 0,
            xingXiang: 0,
            huanJing: 0,
            xunJian: 0,
            orderMoney: 0,
            workerSum: 0,
            body: {},
            workerMoney: {},
            workerDetails: {},
            serverNameList: [], // 二段增值名称
            serverAllData: [], // 所有数据
            stageName: '', // 状态名称
            stageNum: 0 // 状态值
        }
    },
    created () {
        this.getExcellentGoodModeratePoor()
        this.GetByRoleOrderListFn()
        this.getWorkerDetailsFn()
        this.getValueAddServicesBySupervisionCard()
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
        // 获取状态中的按钮
        getExcellentGoodModeratePoor () {
            getExcellentGoodModeratePoor({
                user_card_no: this.leftInfo.cardNo,
                standard: 0,
                abilityLevel: this.leftInfo.abilityLevel,
                abilityType: 22
            }).then(results => {
                if (results.data.StatusCode === 0) {
                    this.stageName = results.data.Body.standardName
                    this.stageNum = results.data.Body.userGoodBad
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取增值服务
        getValueAddServicesBySupervisionCard () {
            let parms = {
                supervisionCard: this.leftInfo.cardNo // '01014720'
            }
            getValueAddServicesBySupervisionCard(parms).then(results => {
                if (results.data.StatusCode === 1) {
                    this.serverNameList = []
                    this.serverAllData = results.data.Body.valueAddServicesList
                    this.serverAllData.forEach(element => {
                        if (element.length > 0) {
                            let serverObject = {}
                            let allmoney = 0
                            let actualMoney = 0
                            let number = 0
                            element.forEach(item => {
                                if (item.proname !== null) {
                                    allmoney += Number(item.money)
                                    actualMoney += Number(item.actualMoney)
                                    number += 1
                                } else {
                                    allmoney += 0
                                    actualMoney += 0
                                    number += 0
                                }
                            })
                            serverObject.name = element[0].name
                            serverObject.allmoney = allmoney
                            serverObject.actualMoney = actualMoney
                            serverObject.number = number
                            serverObject.currentObject = element
                            this.serverNameList.push(serverObject)
                        }
                    })
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        GetByRoleOrderListFn () {
            this.anQuan = 0
            this.xingXiang = 0
            this.huanJing = 0
            this.xunJian = 0
            let _this = this
            getStayStayProcessDetail({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                this.countSum = 0
                _this.orderList = results.data.Body.StayStayProcessDetail
                this.orderMoney = results.data.Body.orderMoney
                for (var i = 0; i < _this.orderList.length; i++) {
                    this.countSum += _this.orderList[i].orderCount
                    this.countMoney += _this.orderList[i].orderCount * _this.orderList[i].unit_price
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getWorkerDetailsFn () {
            getWorkerDetails({
                user_card_no: this.leftInfo.cardNo,
                grade: this.leftInfo.abilityLevel
            }).then(results => {
                this.body = results.data.Body
                this.workerSum = this.body.workerDetails.length
                this.workerDetails = this.body.workerDetails
                this.workerMoney = this.body.workerMoney
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        // 增值总金额
        allmoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.allmoney)
            })
            return number.toFixed(2)
        },
        // 增值实际金额
        allactualMoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.actualMoney)
            })
            return number.toFixed(2)
        },
        // 增值项目个数
        allnumber () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.number)
            })
            return allnumber
        },
        // 综合中的个数
        totalNumber () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.number)
            })
            allnumber += this.countSum
            return allnumber
        },
        // 综合中的金额
        totalMoney () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.allmoney)
            })
            this.orderList.forEach(item => {
                allnumber += Number(item.unit_price)
            })
            if (this.workerMoney.hasOwnProperty('worker_money')) {
                allnumber += (Number(this.workerMoney.worker_money) * this.workerSum)
            }
            return allnumber.toFixed(2)
        }
    },
    filters: {
        stageColor (str) {
            switch (Number(str)) {
            case 1:
                return 'circlemark-green'
            case 2:
                return 'circlemark-lightGreen'
            case 3:
                return 'circlemark-yellow'
            case 4:
                return 'circlemark-lightRed'
            case 5:
                return 'circlemark-purple'
            }
        }
    },
    watch: {
        leftInfo () {
            this.GetByRoleOrderListFn()
            this.getValueAddServicesBySupervisionCard()
            this.getExcellentGoodModeratePoor()
        }
    }
}
</script>
