<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'项款'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon" v-if="audit[0]">
                <p class="col-md-4">
                        <span class="cLightGray pr8">合同额</span>
                        <span >{{audit[0].contractMoney}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">发包额</span>
                        <span class="c666">{{audit[0].pubMoney}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">溢价</span>
                        <span class="c666">{{audit[0].premium}}</span>
                    </p>
            </div>
        </div>

        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor" >
            <p class="analyItemTit tx-center">款项</p>
            <div class="analyItemCon" v-if="compositeFunds[0]">
                        <p class="col-md-4">  <span class="cLightGray pr8"> 当前{{compositeFunds[0].PeriodName}}</span></p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">金额</span>
                            <span >{{compositeFunds[0].PeriodMoney}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8" :class="compositeFunds[0].DiffDay>=0?'':'cRed'">{{compositeFunds[0].DiffDay>=0?'距离下期还有'+compositeFunds[0].DiffDay+'天':'超期'+compositeFunds[0].DiffDay+'天'}}</span>
                            <span ></span>
                        </p>
            </div>
        </div>

        <div tag="div" class="analyItem anItemBor" @click="clickFourShow(1)">
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon" v-if="badReview">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">差评</span>
                        <span >{{badReview.badReview}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">投诉</span>
                        <span class="c666">0</span>
                    </p>
            </div>
        </div>

         <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">巡检</p>
            <div class="analyItemCon" v-if="inspection">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">整改发起</span>
                        <span >{{inspection.pubRec}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">整改完成</span>
                        <span class="c666">{{inspection.overRec}}</span>
                    </p>
            </div>
        </div>

        <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon" v-if="materialRatio">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">材料配比差</span>
                        <span >{{materialRatio.diffRatio}}</span>
                    </p>
            </div>
        </div>
        <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">工艺</p>
            <div class="analyItemCon" v-if="projectProcess">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">应做</span>
                        <span >{{projectProcess.oughtCount}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">进行中</span>
                        <span class="c666">{{projectProcess.overCount}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已完成</span>
                        <span class="c666">{{projectProcess.doing}}</span>
                    </p>
            </div>
        </div>

        <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">工人</p>
            <div class="analyItemCon" v-if="workers">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">应选</span>
                        <span >{{workers.workerNumber}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已选</span>
                        <span class="c666">{{workers.workerActiveNumber}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">差额</span>
                        <span class="c666">{{workers.workerDiffNumber}}</span>
                    </p>
            </div>
        </div>

        <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">工期</p>
            <div class="analyItemCon" v-if="constructionTime">
                   <p class="col-md-2">
                        <span class="cLightGray pr8">工期</span>
                        <span >{{constructionTime.constructionPeriod}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">开工日期</span>
                        <span class="c666">{{constructionTime.constructionTime}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">延期单</span>
                        <span class="c666">{{constructionTime.constructionDelay}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="c666" :class="constructionTime.surplusDays>=0?'':'cRed'">{{constructionTime.surplusDays>=0?"剩余工期"+constructionTime.surplusDays+"天":"超期"+constructionTime.surplusDays+'天'}}</span>
                    </p>
            </div>
        </div>

    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 问题 threeresultDetail -->
        <rx-threeresultDetail v-if="fourIndex === 0" :key="0" :orderId="orderId"></rx-threeresultDetail>
        <rx-cusbadreview v-if="fourIndex === 1" :key="1" :orderCodeList="orderCodeList"></rx-cusbadreview>
    </transition-group>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxThreeresultDetail from './resultDetail/threeresultDetail'
import rxCusbadreview from './resultDetail/cusbadreview'
import {
    getAuditMoney,
    getIGCCompositeFunds,
    getConstructionTimeByOrderNo,
    getProjectProcessCount,
    getProInfoDeliveryRatio,
    getOrderWorkType,
    getCustomerBadReview,
    getInspection

} from '../../Resources/Api'
export default {

    components: {
        rxThreeresultDetail,
        rxCusbadreview
    },
    data () {
        return {
            fourIndex: undefined,
            orderId: '',
            audit: {},
            compositeFunds: {},
            constructionTime: {},
            projectProcess: {},
            materialRatio: {},
            badReview: {},
            orderCodeList: {},
            workers: {},
            inspection: {}
        }
    },
    created () {
        this.orderId = this.$route.query.orderNo
        this.GetAudit()
        this.GetCompositeFunds()
        this.GetConstructionTime()
        this.GetProjectProcess()
        this.GetMaterialRatio()
        this.GetWorker()
        this.GetBadReviewCount()
        this.GetInspectionInfo()
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        GetCompositeFunds () {
            let _this = this
            _this.compositeFunds = {}
            getIGCCompositeFunds({
                orderId: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.compositeFunds = results.data.Body
                } else {
                    let compositeFundsObject = {
                        PeriodName: 0,
                        DiffDay: 0
                    }
                    _this.compositeFunds = []
                    _this.compositeFunds.push(compositeFundsObject)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetAudit () {
            let _this = this
            _this.audit = {}
            getAuditMoney({
                orderNo: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.audit = results.data.Body
                } else {
                    _this.audit = [{
                        contractMoney: 0,
                        pubMoney: 0,
                        premium: 0
                    }]
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetConstructionTime () {
            let _this = this
            _this.constructionTime = {}
            getConstructionTimeByOrderNo({
                orderNo: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.constructionTime = results.data.Body
                } else {
                    _this.constructionTime = {
                        constructionPeriod: 0,
                        constructionTime: '',
                        constructionDelay: 0,
                        surplusDays: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetProjectProcess () {
            let _this = this
            _this.projectProcess = {}
            getProjectProcessCount({
                orderNo: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.projectProcess = results.data.Body
                } else {
                    _this.projectProcess = {
                        oughtCount: 0,
                        overCount: 0,
                        doing: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetMaterialRatio () {
            let _this = this
            _this.materialRatio = {}
            getProInfoDeliveryRatio({
                rwdID: this.orderId
            }).then(results => {
                if (results.data.body) {
                    _this.materialRatio = results.data.body
                } else {
                    _this.materialRatio = {
                        diffRatio: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetWorker () {
            let _this = this
            _this.workers = {}
            getOrderWorkType({
                orderNo: this.orderId
            }).then(results => {
                console.log(results.data.Body)
                if (results.data.Body) {
                    _this.workers = results.data.Body
                } else {
                    _this.workers = {
                        workerNumber: 0,
                        workerActiveNumber: 0,
                        workerDiffNumber: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetBadReviewCount () {
            let _this = this
            _this.badReview = {}
            getCustomerBadReview({
                orderNo: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.badReview = results.data.Body
                    _this.orderCodeList = _this.badReview.orderCodeList
                } else {
                    _this.badReview = {
                        badReview: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetInspectionInfo () {
            let _this = this
            _this.inspection = {}
            getInspection({
                orderNo: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.inspection = results.data.Body
                } else {
                    _this.inspection = {
                        pubRec: 0,
                        overRec: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        $route () {
            this.orderId = this.$route.query.orderNo
            this.GetAudit()
            this.GetCompositeFunds()
            this.GetConstructionTime()
            this.GetProjectProcess()
            this.GetMaterialRatio()
            this.GetWorker()
            this.GetBadReviewCount()
            this.GetInspectionInfo()
        }
    }
}
</script>
