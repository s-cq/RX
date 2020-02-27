<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'过程'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">安全交底</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{safetyNumber}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{safetyPrice}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{safetyCompleted}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{safetyProcessing}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{safetyUnopened}}</span>
                    </p>
                    <!-- <p class="col-md-2 ">
                        <span class="cLightGray pr8">未开启</span>
                        <span>{{safetyUnCompleted}}</span>
                    </p> -->
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">安全巡检</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{environmentNumber}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{environmentPrice}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{environmentCompleted}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{environmentProcessing}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{environmentUnopened}}</span>
                    </p>
                    <!-- <p class="col-md-2 ">
                        <span class="cLightGray pr8">未开启</span>
                        <span>{{environmentUnCompleted}}</span>
                    </p> -->
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">隐蔽验收</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{imageNumber}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{imagePrice}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{imageCompleted}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{imageProcessing}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{imageUnopened}}</span>
                    </p>
                    <!-- <p class="col-md-2 ">
                        <span class="cLightGray pr8">未开启</span>
                        <span>{{imageUnCompleted}}</span>
                    </p> -->
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">现场交底</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{confideNumber}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{confidePrice}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{confideCompleted}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{confideProcessing}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{confideUnopened}}</span>
                    </p>
                    <!-- <p class="col-md-2 ">
                        <span class="cLightGray pr8">未开启</span>
                        <span>{{imageUnCompleted}}</span>
                    </p> -->
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">竣工总检</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{generalInspectionNumber}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{generalInspectionPrice}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{generalInspectionCompleted}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{generalInspectionProcessing}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{generalInspectionUnopened}}</span>
                    </p>
                    <!-- <p class="col-md-2 ">
                        <span class="cLightGray pr8">未开启</span>
                        <span>{{imageUnCompleted}}</span>
                    </p> -->
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">整改订单</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{rectifyNumber}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">接单单价</span>
                        <span>{{rectifyPrice}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">评价单价</span>
                        <span>{{rectifyPricepinjia}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">接单个数</span>
                        <span>{{rectifyCompleted+rectifyProcessing}}</span>
                    </p>

                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">评价个数</span>
                        <span>{{rectifyProcessing}}</span>
                    </p>
                    <!-- <p class="col-md-2 ">
                        <span class="cLightGray pr8">未开启</span>
                        <span>{{imageUnCompleted}}</span>
                    </p> -->
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">工人录入</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{workerSum}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{body.workerMoney.worker_money}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8"></span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8"></span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{Number(workerMoney.worker_money*workerSum)}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem" v-for="(item, index) in serverNameList" :key="index">
                <p class="analyItemTit tx-center">{{item.name}}</p>
                <div class="analyItemCon">
                    <p class="col-md-2"><span class="cLightGray pr8">个数</span><span>{{item.number}}个</span></p>
                    <p class="col-md-2"><span class="cLightGray pr8">单价</span><span>{{item.allmoney.toFixed(2)}}</span></p>
                    <p class="col-md-2"><span class="cLightGray pr8">已完成</span><span>{{item.serverCom}}</span></p>
                    <p class="col-md-2"><span class="cLightGray pr8">进行中</span><span>{{item.serverConduct}}</span></p>
                    <p class="col-md-2"><span class="cLightGray pr8">超期</span><span>{{item.serverTimeOut}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总个数</span>
                        <span>{{allnumber}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{allCom}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{allConduct}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{allTimeOut}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">工人录入</span>
                        <span>{{workerSum}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{allmoney}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    getStayStayProcessOrderTypeDetailsafety,
    getStayStayProcessOrderTypeDetailenvironment,
    getStayStayProcessOrderTypeDetailimage,
    getWorkerDetails,
    getValueAddServicesBySupervisionCard
} from '../../Resources/Api'
export default {
    data () {
        return {
            orderCount: 0,
            safetyNumber: 0,
            safetyPrice: 0,
            safetyCompleted: 0,
            safetyUnCompleted: 0,
            safetyUnopened: 0,
            safetyProcessing: 0,
            environmentNumber: 0,
            environmentPrice: 0,
            environmentCompleted: 0,
            environmentUnCompleted: 0,
            environmentUnopened: 0,
            environmentProcessing: 0,
            imageNumber: 0,
            imagePrice: 0,
            imageCompleted: 0, // 完成
            imageUnCompleted: 0, // 未开启
            imageUnopened: 0, // 超期
            imageProcessing: 0, // 进行中
            CompletedCount: 0,
            UnCompletedCount: 0,
            UnopenedCount: 0,
            ProcessingCount: 0,
            priceCount: 0,
            orderMoney: 0,
            workerSum: 0,
            body: {},
            workerMoney: {},
            workerDetails: {},
            // 现场交底
            confideNumber: 0,
            confidePrice: 0,
            confideCompleted: 0, // 完成
            confideUnCompleted: 0, // 未开启
            confideUnopened: 0, // 超期
            confideProcessing: 0, // 进行中
            // 竣工总检
            generalInspectionNumber: 0,
            generalInspectionPrice: 0,
            generalInspectionCompleted: 0, // 完成
            generalInspectionUnCompleted: 0, // 未开启
            generalInspectionUnopened: 0, // 超期
            generalInspectionProcessing: 0, // 进行中
            // 整改订单
            rectifyNumber: 0,
            rectifyPrice: 0,
            rectifyCompleted: 0, // 接单完成
            rectifyUnCompleted: 0, // 评价完成
            rectifyUnopened: 0, // 超期
            rectifyProcessing: 0, // 进行中
            rectifyPricepinjia: 0, // 评价金额
            // 增值服务
            serverNameList: [], // 二段增值名称
            serverAllData: [] // 所有数据
        }
    },
    created () {
        this.orderCount = this.$route.params.orderCount
        this.orderMoney = this.$route.params.orderMoney
        this.GetByRoleOrderListFn()
        this.getWorkerDetailsFn()
        this.getValueAddServicesBySupervisionCard()
    },
    methods: {
        GetByRoleOrderListFn () {
            getStayStayProcessOrderTypeDetailsafety({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 41
            }).then(results => {
                this.orderBody = results.data.Body
                // 2未开启，1进行中，0已完成，3超期
                // 安全
                for (var i = 0; i < this.orderBody.length; i++) {
                    this.safetyNumber++
                    this.safetyPrice = this.orderBody[0].unit_price
                    switch (this.orderBody[i].orderStatus) {
                    case 0:
                        this.safetyCompleted++
                        this.priceCount += this.safetyPrice
                        break
                    case 1:
                        this.safetyProcessing++
                        break
                    case 2:
                        this.safetyUnCompleted++
                        break
                    case 3:
                        this.safetyUnopened++
                        break
                    default:
                        break
                    }
                }
                this.CompletedCount += this.safetyCompleted
                this.UnCompletedCount += this.safetyUnCompleted
                this.UnopenedCount += this.safetyUnopened
                this.ProcessingCount += this.safetyProcessing
            }).catch(error => {
                console.log(error)
            })
            getStayStayProcessOrderTypeDetailenvironment({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 42
            }).then(results => {
                this.orderBody = results.data.Body
                // 2未开启，1进行中，0已完成，3超期

                for (var j = 0; j < this.orderBody.length; j++) {
                    this.environmentNumber++
                    this.environmentPrice = this.orderBody[0].unit_price
                    switch (this.orderBody[j].orderStatus) {
                    case 0:
                        this.environmentCompleted++
                        this.priceCount += this.environmentPrice
                        break
                    case 1:
                        this.environmentProcessing++
                        break
                    case 2:
                        this.environmentUnCompleted++
                        break
                    case 3:
                        this.environmentUnopened++
                        break
                    default:
                        break
                    }
                }
                this.CompletedCount += this.environmentCompleted
                this.UnCompletedCount += this.environmentUnCompleted
                this.UnopenedCount += this.environmentUnopened
                this.ProcessingCount += this.environmentProcessing
            }).catch(error => {
                console.log(error)
            })
            getStayStayProcessOrderTypeDetailimage({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 43
            }).then(results => {
                this.orderBody = results.data.Body
                for (var o = 0; o < this.orderBody.length; o++) {
                    this.imageNumber++
                    this.imagePrice = this.orderBody[0].unit_price
                    switch (this.orderBody[o].orderStatus) {
                    case 0:
                        this.imageCompleted++
                        this.priceCount += this.imagePrice
                        break
                    case 1:
                        this.imageProcessing++
                        break
                    case 2:
                        this.imageUnCompleted++
                        break
                    case 3:
                        this.imageUnopened++
                        break
                    default:
                        break
                    }
                }
                this.CompletedCount += this.imageCompleted
                this.UnCompletedCount += this.imageUnCompleted
                this.UnopenedCount += this.imageUnopened
                this.ProcessingCount += this.imageProcessing
            }).catch(error => {
                console.log(error)
            })
            getStayStayProcessOrderTypeDetailimage({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 5
            }).then(results => {
                this.orderBody = results.data.Body
                for (var o = 0; o < this.orderBody.length; o++) {
                    this.confideNumber++
                    this.confidePrice = this.orderBody[0].unit_price
                    switch (this.orderBody[o].orderStatus) {
                    case 0:
                        this.confideCompleted++
                        this.priceCount += this.confidePrice
                        break
                    case 1:
                        this.confideProcessing++
                        break
                    case 2:
                        this.confideUnCompleted++
                        break
                    case 3:
                        this.confideUnopened++
                        break
                    default:
                        break
                    }
                }
                this.CompletedCount += this.confideCompleted
                this.UnCompletedCount += this.confideUnCompleted
                this.UnopenedCount += this.confideUnopened
                this.ProcessingCount += this.confideProcessing
            }).catch(error => {
                console.log(error)
            })


            getStayStayProcessOrderTypeDetailimage({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 18
            }).then(results => {
                this.orderBody = results.data.Body
                for (var o = 0; o < this.orderBody.length; o++) {
                    this.generalInspectionNumber++
                    this.generalInspectionPrice = this.orderBody[0].unit_price
                    switch (this.orderBody[o].orderStatus) {
                    case 0:
                        this.generalInspectionCompleted++
                        this.priceCount += this.generalInspectionPrice
                        break
                    case 1:
                        this.generalInspectionProcessing++
                        break
                    case 2:
                        this.generalInspectionUnCompleted++
                        break
                    case 3:
                        this.generalInspectionUnopened++
                        break
                    default:
                        break
                    }
                }
                this.CompletedCount += this.generalInspectionCompleted
                this.UnCompletedCount += this.generalInspectionUnCompleted
                this.UnopenedCount += this.generalInspectionUnopened
                this.ProcessingCount += this.generalInspectionProcessing
            }).catch(error => {
                console.log(error)
            })


            getStayStayProcessOrderTypeDetailimage({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 28
            }).then(results => {
                this.orderBody = results.data.Body
                for (var o = 0; o < this.orderBody.length; o++) {
                    this.rectifyNumber++
                    this.rectifyPrice = this.orderBody[0].unit_price
                    this.rectifyPricepinjia = this.orderBody[0].finish_price
                    switch (this.orderBody[o].orderStatus) {
                    case 0:
                        this.rectifyCompleted++
                        this.priceCount += this.rectifyPrice
                        break
                    case 1:
                        this.rectifyProcessing++
                        this.priceCount += this.rectifyPrice + this.rectifyPricepinjia
                        break
                    case 2:
                        this.rectifyUnCompleted++
                        break
                    case 3:
                        this.rectifyUnopened++
                        break
                    default:
                        break
                    }
                }
                this.CompletedCount += this.imageCompleted
                this.UnCompletedCount += this.imageUnCompleted
                this.UnopenedCount += this.imageUnopened
                this.ProcessingCount += this.imageProcessing
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
        },
        // 获取增值服务
        getValueAddServicesBySupervisionCard () {
            let parms = {
                supervisionCard: this.leftInfo.cardNo
            }
            getValueAddServicesBySupervisionCard(parms).then(results => {
                if (results.data.StatusCode === 1) {
                    this.serverNameList = []
                    this.serverAllData = results.data.Body.valueAddServicesList
                    this.serverAllData.forEach(element => {
                        if (element.length > 0) {
                            let serverObject = {}
                            let allmoney = 0 // 总金额
                            let actualMoney = 0 // 实际金额
                            let number = 0 // 项目个数
                            let serverCom = 0 // 已完成
                            let serverConduct = 0 // 进行中
                            let serverTimeOut = 0 // 超期
                            element.forEach(item => {
                                if (item.proname !== null) {
                                    allmoney += Number(item.money)
                                    actualMoney += Number(item.actualMoney)
                                    number += 1
                                    if (Number(item.status) === 0) {
                                        serverCom += 1
                                    } else {
                                        serverConduct += 1
                                    }
                                    if (Number(item.timeout_flag) === 1) {
                                        serverTimeOut += 1
                                    }
                                } else {
                                    allmoney += 0
                                    actualMoney += 0
                                    number += 0
                                    serverCom += 0
                                    serverConduct += 0
                                    serverTimeOut += 0
                                }
                            })
                            serverObject.name = element[0].name
                            serverObject.allmoney = allmoney
                            serverObject.actualMoney = actualMoney
                            serverObject.number = number
                            serverObject.serverCom = serverCom
                            serverObject.serverConduct = serverConduct
                            serverObject.serverTimeOut = serverTimeOut
                            serverObject.currentObject = element
                            this.serverNameList.push(serverObject)
                        }
                    })
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    filters: {

    },
    computed: {
        ...mapGetters(['leftInfo']),
        // 总的单价
        allmoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.allmoney)
            })
            if (this.workerMoney.hasOwnProperty('worker_money')) {
                number += (Number(this.orderMoney) + Number(this.workerMoney.worker_money * this.workerSum))
            } else {
                number += (Number(this.orderMoney) + 0)
            }
            return number.toFixed(2)
        },
        // 总的个数
        allnumber () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.number)
            })
            allnumber += (this.orderCount + this.workerSum)
            return allnumber
        },
        // 总的完成
        allCom () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.serverCom)
            })
            allnumber += this.CompletedCount
            return allnumber
        },
        // 总的进行
        allConduct () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.serverConduct)
            })
            allnumber += this.ProcessingCount
            return allnumber
        },
        // 总的超期
        allTimeOut () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.serverTimeOut)
            })
            allnumber += this.UnopenedCount
            return allnumber
        }
    }
}
</script>
