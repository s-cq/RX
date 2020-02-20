<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'过程'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem " active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">安全订单</p>
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

            <div class="analyItem " active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">环境订单</p>
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

            <div class="analyItem " active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">形象订单</p>
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

            <div class="analyItem " active-class="anItemBor-active" exact>
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
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">

                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总个数</span>
                        <span>{{orderCount+workerSum}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{CompletedCount}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{ProcessingCount}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{UnopenedCount}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">工人录入</span>
                        <span>{{workerSum}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{Number(orderMoney)+Number(workerMoney.worker_money*workerSum)}}</span>
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
    getWorkerDetails
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
            workerDetails: {}
        }
    },
    created () {
        this.orderCount = this.$route.params.orderCount
        this.orderMoney = this.$route.params.orderMoney
        this.GetByRoleOrderListFn()
        this.getWorkerDetailsFn()
    },
    methods: {
        GetByRoleOrderListFn () {
            getStayStayProcessOrderTypeDetailsafety({
                user_card_no: this.leftInfo.cardNo,
                order_type_id: 10
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
                order_type_id: 12
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
                order_type_id: 11
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
            // this.CompletedCount = this.imageCompleted + this.environmentCompleted + this.safetyCompleted
            // this.UnCompletedCount = this.imageUnCompleted + this.environmentUnCompleted + this.safetyUnCompleted
            // this.UnopenedCount = this.imageUnopened + this.environmentUnopened + this.safetyUnopened
            // this.ProcessingCount = this.imageProcessing + this.environmentProcessing + this.safetyProcessing
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
    filters: {

    },
    computed: {
        ...mapGetters(['leftInfo'])
    }

}
</script>
