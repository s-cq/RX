<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'积分'}"></three-title>
         <div class="layerRtb-scroll thinScroll" v-scrollHeight="437">
                <div class="analyItem" @click="clickFourShow(0)">
                    <p class="analyItemTit tx-center">历史</p>
                    <div class="analyItemCon">
                        <p class="col-md-3">
                            <span>{{integral.aggregateIntegral}}分</span>
                        </p>
                         <p class="col-md-3">
                            <span>当前{{integral.userLevel}} 级</span>
                        </p>
                         <p class="col-md-3">
                            <span>-100分</span>
                        </p>
                         <p class="col-md-3">
                            <span>下级别{{integral.nextLevel}} 级</span>
                        </p>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">结余</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>结余{{integral.surplusIntegra}}分</span>
                        </p>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">投诉</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
                        </p>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">拒单</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
                        </p>
                    </div>
                </div>
                 <div class="analyItem">
                    <p class="analyItemTit tx-center">退单</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
                        </p>
                    </div>
                </div>
                 <div class="analyItem">
                    <p class="analyItemTit tx-center">管理</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
                        </p>
                    </div>
                </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span>{{integral.aggregateIntegral}}分</span>
                        </p>
                         <p class="col-md-4">
                            <span>{{integral.userLevel}}级降{{integral.nextLevel}} 级</span>
                        </p>
                         <p class="col-md-4">
                            <span>距离降{{integral.nextLevel}} 级需扣{{100-Number(integral.aggregateIntegral)}}分</span>
                        </p>
                    </div>
            </div>
        </div>
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 问题 threeresultDetail -->
        <rx-history v-if="fourIndex === 0" :key="0" :basic="basic"></rx-history>
    </transition-group>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getDepositDetail, getIntegralMsg } from '../../Resources/Api/index'
import rxHistory from './IntegralHistory/history'
export default {
    components: {
        rxHistory
    },
    data () {
        return {
            Complaint: [],
            fourIndex: undefined,
            integral: {}
        }
    },
    created () {
        this.integral = this.$route.query.integral
    },
    methods: {
        GetDeposit () {
            let _this = this
            getDepositDetail({
                uId: _this.leftInfo.uid,
                flag: 1
            })
        },
        clickFourShow (index) {
            this.fourIndex = index
        },
        GetIntegral () {
            let _this = this
            _this.integral = {}
            getIntegralMsg({
                uid: this.leftInfo.uid
            }).then(results => {
                this.integral = results.data.Body
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetProjectManagerResult()
        }
    }
}

</script>
