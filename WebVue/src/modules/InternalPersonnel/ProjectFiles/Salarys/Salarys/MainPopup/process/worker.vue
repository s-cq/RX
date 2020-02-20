<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'工人录入'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div v-if="workerDetails.length>0">
                <div class="analyItem anItemBor" v-for="(item,index) in workerDetails" :key="index" @click="clickFourShow(index,item.id)">
                    <p class="analyItemTit tx-center">工人信息</p>
                    <div class="analyItemCon">
                        <p class="col-md-2">
                            <span class="cLightGray pr8">姓名</span>
                            <span>{{item.worker_name}}</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">编号</span>
                            <span>{{item.worker_number}}</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">身份证</span>
                            <span>正反面已上传</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">形象照</span>
                            <span>已上传</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">支付宝</span>
                            <span>已绑定</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无数据！</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer" @click="clickFourShowHistory(0)">
            <div class="analyItem anItemBor">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">总人数</span><span id="workerCount">{{workerSum}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">单价</span><span id="oneMoney">{{workerMoney.worker_money}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">总金额</span><span id="CountMoney">{{Number(workerMoney.worker_money*workerSum)}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8" id="workerHistory">历史查询</span>

                    </p>
                </div>
            </div>
        </div>
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <worker-detail v-if="fourIndex === currentIndex" :key='currentIndex' :workerIds='workerIds'></worker-detail>
            <history-detail v-if="fourIndex1 === currentIndex1" :key='currentIndex1'></history-detail>
        </transition-group>

    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import WorkerDetail from './four/workerDetail'
import HistoryDetail from './four/historyDetail'
import { getWorkerDetails
} from '../../Resources/Api'

export default {
    components: {
        WorkerDetail,
        HistoryDetail
    },
    data () {
        return {
            wanCheng: 0,
            daiWanCheng: 0,
            chaoQi: 0,
            orderList: [],
            workerSum: 0,
            body: {},
            workerMoney: {},
            workerDetails: {},
            workerIds: 0,
            fourIndex: undefined,
            currentIndex: 0,
            fourIndex1: undefined,
            currentIndex1: 0,
            fourHistoryIndex: undefined,
            currentHistoryIndex: 0
        }
    },
    created () {
        this.getWorkerDetailsFn()
    },
    methods: {
        getWorkerDetailsFn () {
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            getWorkerDetails({
                user_card_no: this.leftInfo.u_kahao,
                pointTime: this.pointTime
            }).then(results => {
                this.body = results.data.Body
                this.workerSum = this.body.workerDetails.length
                this.workerDetails = this.body.workerDetails
                this.workerMoney = this.body.workerMoney
            })
        },
        // 点击四段
        clickFourShow (index, workerId) {
            this.fourIndex = index
            this.currentIndex = index
            this.workerIds = workerId
        },
        clickFourShowHistory (index) {
            this.fourIndex1 = index
            this.currentIndex1 = index
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
