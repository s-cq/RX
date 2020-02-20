<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li v-for="(item, index) of title" :key="index"
                :class="{'uiTab9-active':subIndex == index}"
                @click="subSwitch(index)">
                {{item}}
            </li>
        </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 项目 example -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-example></rx-example>
        </div>
        <!-- 阶 stageInfo -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-stageInfo></rx-stageInfo>
        </div>
        <!-- 审计 audit -->
        <div class="uiTab9Con" v-if="subIndex == 3 && this.leftInfo.AfterMarketState == 10">
            <rx-audit></rx-audit>
        </div>
        <!-- 准备 ready -->
        <div class="uiTab9Con" v-if="subIndex == 3 && this.leftInfo.AfterMarketState == 20">
            <rx-ready></rx-ready>
        </div>
        <!-- 施前 front -->
        <div class="uiTab9Con" v-if="subIndex == 3 && this.leftInfo.AfterMarketState == 31 || this.leftInfo.AfterMarketState == 32 || this.leftInfo.AfterMarketState == 33">
            <rx-front></rx-front>
        </div>
        <!-- 订单 order -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-order></rx-order>
        </div>
        <!-- 安全 safe -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-safe></rx-safe>
        </div>
        <!-- 形象 image -->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-image></rx-image>
        </div>
        <!-- 环境 environmental -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-environmental></rx-environmental>
        </div>
        <!-- 资料 data -->
        <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-data></rx-data>
        </div>
        <!-- 巡检 inspection -->
        <div class="uiTab9Con" v-if="subIndex == 9">
            <rx-inspection></rx-inspection>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxExample from './example'
import rxStageInfo from './stageInfo'
import rxAudit from './audit'
import rxReady from './ready'
import rxFront from './front'
import rxSafe from './safe'
import rxImage from './image'
import rxEnvironmental from './environmental'
import rxData from './data'
import rxInspection from './inspection'
import rxOrder from './order'

export default {
    components: {
        rxState,
        rxExample,
        rxStageInfo,
        rxAudit,
        rxReady,
        rxFront,
        rxSafe,
        rxImage,
        rxEnvironmental,
        rxData,
        rxInspection,
        rxOrder
    },
    data () {
        return {
            title: ['状态', '项目', '阶', '审计', '订单', '安全', '形象', '环境', '资料', '巡检'],
            subIndex: 1
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.phaseCheck()
    },
    methods: {
        phaseCheck () {
            if (this.leftInfo.AfterMarketState === 10) {
                this.title = ['状态', '项目', '阶', '审计', '订单', '安全', '形象', '环境', '资料', '巡检']
            } else if (this.leftInfo.AfterMarketState === 20) {
                this.title = ['状态', '项目', '阶', '准备', '订单', '安全', '形象', '环境', '资料', '巡检']
            } else if (this.leftInfo.AfterMarketState === 31) {
                this.title = ['状态', '项目', '阶', '施前', '订单', '安全', '形象', '环境', '资料', '巡检']
            } else if (this.leftInfo.AfterMarketState === 32) {
                this.title = ['状态', '项目', '阶', '施中', '订单', '安全', '形象', '环境', '资料', '巡检']
            } else if (this.leftInfo.AfterMarketState === 33) {
                this.title = ['状态', '项目', '阶', '施尾', '订单', '安全', '形象', '环境', '资料', '巡检']
            } else if (this.leftInfo.AfterMarketState === 40) {
                this.title = ['状态', '项目', '阶', '竣工', '订单', '安全', '形象', '环境', '资料', '巡检']
            } else if (this.leftInfo.AfterMarketState === 50) {
                this.title = ['状态', '项目', '阶', '完工', '订单', '安全', '形象', '环境', '资料', '巡检']
            }
        },
        subSwitch (index) {
            this.subIndex = index
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    },
    watch: {
        leftInfo () {
            this.phaseCheck()
        }
    }
}
</script>
