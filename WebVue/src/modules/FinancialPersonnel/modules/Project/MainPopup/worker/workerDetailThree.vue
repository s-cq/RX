<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【'+stageFilter(leftInfo.AfterMarketState)+'阶段_'+workerTypeIdTwo.workerTypeName+'】详情'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
        <ul class="clearfix uiTab3 rgpkList" >
            <li :class="{'uiTab3-active':flg==0}" @click="flg = 0"><a href="javascript:">待办</a></li>
            <!-- <li :class="{'uiTab3-active':flg==1}"><a @click="flg = 1" href="javascript:" >记录</a></li> -->
        </ul>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">

        <!-- 代办 -->
        <div v-if="flg == 0" class="analyItem"  v-for="(item,index) in workerListThree " :key="index">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">订单{{index+1}}</span>
                    <span class="cBlue">{{item.orderCode}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">姓名</span>
                    <span>{{item.workerName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">类型</span>
                    <span v-if="item.workType == 1">分包</span>
                    <span v-if="item.workType == 2">日工</span>
                    <span v-if="item.workType == 3">整包</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">计划</span>
                    <span class="cGreen">{{item.workMoney.toFixed(2)}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">实际</span>
                    <span class="cGreen">{{item.activeWorkMoney.toFixed(2)}}元</span>
                </p>
                <span class="circlemarkment cGreen">{{pressmentdu(item.orderStage)}}</span>
            </div>
        </div>
        <!-- 记录 -->
        <div v-else>
            记录预留
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <!-- 代办 -->
            <div v-if="flg==0" class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">订单</span>
                    <span>{{workerListThree.length?workerListThree.length:0}}笔</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">计划总额</span>
                    <span>{{workerOtherList.planMoney.toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">实际总额</span>
                    <span>{{workerOtherList.projectMoney.toFixed(2)}}</span>
                </p>
            </div>
            <!-- 预留 -->
            <div v-else class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">详情</span>
                    <span>预留 笔</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">金额</span>
                    <span>预留</span>
                </p>
                <span class="circlemark circlemark-lightRed" title="预留说明">预留</span>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getWorkerQCOrderByCondition } from '../../Resources/Api'
export default {
    data () {
        return {
            workerTypeIdTwo: {}, // 点击二段传过来的信息
            workerListThree: [], // 三段获取信息
            flg: 0 // 代办0、记录标识
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getWorkerQCOrderByCondition()
        this.workerTypeIdTwo = this.$route.query.workerOtherList
    },
    methods: {
        // 查询工人三段数据
        getWorkerQCOrderByCondition () {
            getWorkerQCOrderByCondition({
                orderNo: this.leftInfo.orderno, // 78-2439
                workTypeId: this.workerTypeIdTwo.workerTypeId
            }).then(results => {
                if (Number(results.data.StatusCode) === 1) {
                    this.workerListThree = results.data.Body
                }
            }).catch(() => {})
        },
        // 计算总计划金额
        totalmoney () {
            let sum = 0
            this.workerOtherList.forEach(item => {
                sum += item.workMoney
            })
            return sum.toFixed(2)
        },
        // 计算总实际
        totalPayMoney () {
            let money = 0
            this.workerOtherList.forEach(item => {
                money += item.activeWorkMoney
            })
            return money.toFixed(2)
        },
        // 标题
        stageFilter (stage) {
            var stageName = ''
            switch (stage) {
            case 1:
                stageName = '审计'
                break
            case 2:
                stageName = '准备'
                break
            case 3:
                stageName = '在施'
                break
            case 4:
                stageName = '竣工'
                break
            case 5:
                stageName = '完工'
                break
            case 6:
                stageName = '历史'
                break
            }
            return stageName
        },
        // 阶段
        pressmentdu (stage) {
            var prssName = ''
            switch (stage) {
            case 3:
                prssName = '施工'
                break
            case 4:
                prssName = '竣工'
                break
            case 6:
                prssName = '结算'
                break
            case 7:
                prssName = '评价'
                break
            case 8:
                prssName = '历史'
                break
            }
            return prssName
        }
    },

    watch: {
        $route () {
            console.log(this.leftInfo)
            this.workerTypeIdTwo = this.$route.query.workerOtherList
            this.getWorkerQCOrderByCondition()
            this.flg = 0
        }
    }
}
</script>
<style>
.circlemarkment {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -12.5px;
    font-size: 14px;
    font-weight: 700;
}
</style>
