<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index" :data-title="datatitle[index]">{{item}}</li>
        </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 状态的命名为 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 项板块 -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-basics></rx-basics>
        </div>
        <!-- 阶板块 -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-rank></rx-rank>
        </div>
        <!-- 当前阶段 -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-currentrank></rx-currentrank>
        </div>
        <!-- 人 -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-worker></rx-worker>
        </div>
        <!-- 材料 -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-material></rx-material>
        </div>
        <!-- 成本分账 cost-->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-cost></rx-cost>
        </div>
        <!-- 回款批次 return -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-return ></rx-return >
        </div>
        <!-- 支款账务 -->
        <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-pay></rx-pay>
        </div>
        <!-- 增减项洽商 -->
        <div class="uiTab9Con" v-if="subIndex == 9">
            <rx-zjtalk></rx-zjtalk>
        </div>
        <!-- 项目绩效核算 -->
        <div class="uiTab9Con" v-if="subIndex == 10">
            <rx-jxitem></rx-jxitem>
        </div>
        <!-- 其他分项支出 -->
        <div class="uiTab9Con" v-if="subIndex == 11">
            <rx-otpay></rx-otpay>
        </div>
        <!-- 项目订单 -->
        <div class="uiTab9Con" v-if="subIndex == 12">
            <rx-order></rx-order>
        </div>
        <!-- 项目资料 -->
        <div class="uiTab9Con" v-if="subIndex == 13">
            <rx-data></rx-data>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxBasics from './basics'
import rxRank from './rank'
import rxCurrentrank from './currentrank'
import rxWorker from './worker'
import rxMaterial from './material'
import rxCost from './cost'
import rxReturn from './return'
import rxPay from './pay'
import rxZjtalk from './zjtalk'
import rxJxitem from './jxitem'
import rxOtpay from './otpay'
import rxOrder from './order'
import rxData from './data'

export default {
    components: {
        rxState,
        rxBasics,
        rxRank,
        rxCurrentrank,
        rxWorker,
        rxMaterial,
        rxCost,
        rxReturn,
        rxPay,
        rxZjtalk,
        rxJxitem,
        rxOtpay,
        rxOrder,
        rxData
    },
    data () {
        return {
            title: ['状', '项', '阶', '', '人', '材', '成', '收', '支', '洽', '绩', '其', '订', '资'],
            datatitle: ['状态', '项目', '阶段', '', '人工', '材料', '成本分账', '回款批次', '支款账务', '增减项洽商', '项目绩效核算', '其他分项支出', '项目订单', '项目资料'],
            subIndex: 1
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.stage(this.leftInfo.AfterMarketState)
    },
    methods: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 1:
                value = '审计'
                break
            case 2:
                value = '准备'
                break
            case 3:
                value = '在施'
                break
            case 4:
                value = '竣工'
                break
            case 5:
                value = '完工'
                break
            case 6:
                value = '历史'
                break
            case 7:
                value = '坏账'
                break
            case 8:
                value = '退单'
                break
            }
            this.title = ['状', '项', '阶', value, '人', '材', '成', '收', '支', '洽', '绩', '其', '订', '资']
            this.datatitle = ['状态', '项目', '阶段', value, '人工', '材料', '成本分账', '回款批次', '支款账务', '增减项洽商', '项目绩效核算', '其他分项支出', '项目订单', '项目资料']
        },
        subSwitch (index) {
            this.subIndex = index
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    },
    watch: {
        leftInfo () {
            this.stage(this.leftInfo.AfterMarketState)
        }
    }
}
</script>
<style lang="scss" scoped>
   .tc-center-tabBox .uiTab9 li {
       min-width: 40px
   }
</style>

