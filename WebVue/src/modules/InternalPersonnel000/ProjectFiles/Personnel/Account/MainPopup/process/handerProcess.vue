<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理'}"></three-title>
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
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{Number(priceCount-chaoqiCount)}}</span>
                    </p>
                </div>
            </div>

            <div class="analyItem " active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">形象订单</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{safetyNumber1}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{safetyCompleted1}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{safetyProcessing1}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{safetyUnopened1}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{Number(priceCount1-chaoqiCount1)}}</span>
                    </p>
                </div>
            </div>

            <div class="analyItem " active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">环境订单</p>
                <p class="analyItemTit tx-center" style="display:none"></p>
                <div class="analyItemCon">
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{safetyNumber2}}个</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{safetyCompleted2}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{safetyProcessing2}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{safetyUnopened2}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{Number(priceCount2-chaoqiCount2)}}</span>
                    </p>
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
                        <span class="cLightGray pr8"></span>
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
                        <span>{{Number(safetyNumber+safetyNumber1+safetyNumber2+workerSum)}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{Number(safetyCompleted+safetyCompleted1+safetyCompleted2)}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{Number(safetyProcessing+safetyProcessing1+safetyProcessing2)}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{Number(safetyUnopened+safetyUnopened1+safetyUnopened2)}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">工人录入</span>
                        <span>{{workerSum}}</span>
                    </p>
                    <p class="col-md-2 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{Number(priceCount+priceCount1+priceCount2-chaoqiCount-chaoqiCount1-chaoqiCount2)+Number(workerMoney.worker_money*workerSum)}}</span>
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
    getStayStayProcessOrderTypeDetailYearMonth,
    getWorkerDetails
} from '../../Resources/Api'
export default {
    data () {
        return {
            orderList: [],
            countSum: 0,
            countMoney: 0.0,
            anQuan: 0,
            xingXiang: 0,
            huanJing: 0,
            xunJian: 0,
            orderCount: 0,
            safetyNumber: 0,
            safetyPrice: 0,
            safetyCompleted: 0,
            safetyUnCompleted: 0,
            safetyUnopened: 0,
            safetyProcessing: 0,
            safetyNumber1: 0,
            safetyPrice1: 0,
            safetyCompleted1: 0,
            safetyUnCompleted1: 0,
            safetyUnopened1: 0,
            safetyProcessing1: 0,
            safetyNumber2: 0,
            safetyPrice2: 0,
            safetyCompleted2: 0,
            safetyUnCompleted2: 0,
            safetyUnopened2: 0,
            safetyProcessing2: 0,
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
            priceCount1: 0,
            priceCount2: 0,
            chaoqiCount: 0,
            chaoqiCount1: 0,
            chaoqiCount2: 0,
            orderBody: {},
            workerSum: 0,
            body: {},
            workerMoney: {},
            workerDetails: {}
        }
    },
    created () {
        this.getStayStayProcessOrderTypeDetailYearMonthFn()
        this.getWorkerDetailsFn()
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
        getStayStayProcessOrderTypeDetailYearMonthFn () {
            this.anQuan = 0
            this.xingXiang = 0
            this.huanJing = 0
            this.xunJian = 0
            getStayStayProcessOrderTypeDetailYearMonth({
                userCard: this.leftInfo.cardNo
            }).then(results => {
                this.orderBody = results.data.Body.orderList


                // 2未开启，1进行中，0已完成，3超期
                // 安全
                for (var i = 0; i < this.orderBody.length; i++) {
                    // this.safetyNumber1++
                    // this.safetyPrice1 = this.orderBody[0].unit_price
                    switch (this.orderBody[i].order_type_id) {
                    // 安全
                    case 10:
                        this.safetyNumber++
                        switch (this.orderBody[i].orderStatus) {
                        case 0:
                            this.safetyCompleted++
                            this.priceCount += this.orderBody[i].unit_price
                            break
                        case 1:
                            this.safetyProcessing++
                            break

                        case 3:
                            this.safetyUnopened++
                            this.chaoqiCount += this.orderBody[i].unit_price
                            break
                        default:
                            break
                        }
                        break
                        // 形象
                    case 11:
                        this.safetyNumber1++
                        switch (this.orderBody[i].orderStatus) {
                        case 0:
                            this.safetyCompleted1++
                            this.priceCount1 += this.orderBody[i].unit_price
                            break
                        case 1:
                            this.safetyProcessing1++
                            break

                        case 3:
                            this.safetyUnopened1++
                            this.chaoqiCount1 += this.orderBody[i].unit_price
                            break
                        default:
                            break
                        }
                        break
                        // 环境
                    case 12:
                        this.safetyNumber2++
                        switch (this.orderBody[i].orderStatus) {
                        case 0:
                            this.safetyCompleted2++
                            this.priceCount2 += this.orderBody[i].unit_price
                            break
                        case 1:
                            this.safetyProcessing2++
                            break

                        case 3:
                            this.safetyUnopened2++
                            this.chaoqiCount2 += this.orderBody[i].unit_price
                            break
                        default:
                            break
                        }
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
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetByRoleOrderListFn()
        }
    }
}
</script>
