<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'款项'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem anItemBor" @click="clickFourShow(0)">
            <p class="analyItemTit tx-center">收款</p>
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
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">计划总额</span>
                        <span >{{projectPayment[0].SumMaterialMoney}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">可用</span>
                        <span class="c666">{{projectPayment[0].WFMaterialMoney}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">已支</span>
                        <span class="c666">{{projectPayment[0].SUMCaiLiao}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">剩余可用</span>
                        <span class="c666">{{projectPayment[0].CaiLiaoMoney}}</span>
                    </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">计划总额</span>
                        <span >{{projectPayment[0].SumArtificialMoney}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">已发生</span>
                        <span class="c666">{{projectPayment[0].DaiFuRenGong}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">已支</span>
                        <span class="c666">{{projectPayment[0].SUMRenGong}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">剩余</span>
                        <span class="c666">{{projectPayment[0].RenGongMoney}}</span>
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
    <!-- 五段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 问题 threeresultDetail -->
        <rx-fourresultDetail v-if="fourIndex === 0" :key="0" :orderNo="orderNo"></rx-fourresultDetail>
    </transition-group>

</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxFourresultDetail from './threeresultDetail/foursultDetail'
import {
    getIGCCompositeFunds,
    getIGCProjectPayment
} from '../../../Resources/Api'
export default {
    props: ['orderId'],
    components: {
        rxFourresultDetail
    },
    data () {
        return {
            fourIndex: undefined,
            compositeFunds: {},
            projectPayment: {},
            orderNo: this.orderId
        }
    },
    mounted () {
    },
    created () {
        this.GetCompositeFunds()
        this.GetProjectPayment()
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
                    _this.compositeFunds = [{
                        PeriodName: 0,
                        DiffDay: 0
                    }]
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetProjectPayment () {
            let _this = this
            _this.projectPayment = {}
            getIGCProjectPayment({
                orderId: this.orderId
            }).then(results => {
                if (results.data.Body) {
                    _this.projectPayment = results.data.Body
                } else {
                    _this.projectPayment = {
                        SumMaterialMoney: 0,
                        WFMaterialMoney: 0,
                        SUMCaiLiao: 0,
                        CaiLiaoMoney: 0
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
