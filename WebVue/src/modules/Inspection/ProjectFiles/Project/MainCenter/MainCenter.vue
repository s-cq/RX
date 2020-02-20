<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index" :data-title="item.title">{{item.name}}</li>
        </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 阶段 stage -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-stage></rx-stage>
        </div>
         <!-- 审 project -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-project></rx-project>
        </div>
        <!-- 审计 audit -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-audit></rx-audit>
        </div>
        <!-- 经理 manager -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-manager></rx-manager>
        </div>
        <!-- 项经 term -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-term></rx-term>
        </div>
        <!-- 材料 audit -->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-material></rx-material>
        </div>
        <!-- 财务 finance -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-finance></rx-finance>
        </div>
        <!-- 工人 worker -->
        <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-worker></rx-worker>
        </div>
        <!-- 人事 personnel -->
        <div class="uiTab9Con" v-if="subIndex == 9">
            <rx-personnel></rx-personnel>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxStage from './stage'
import rxProject from './project'
import rxAudit from './audit'
import rxManager from './Manager'
import rxTerm from './term'
import rxMaterial from './material'
import rxFinance from './finance'
import rxWorker from './worker'
import rxPersonnel from './personnel'

export default {
    components: {
        rxState,
        rxProject,
        rxStage,
        rxAudit,
        rxManager,
        rxTerm,
        rxMaterial,
        rxFinance,
        rxWorker,
        rxPersonnel
    },
    data () {
        return {
            title: [],
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
        // 根据一段判断二段的tab
        phaseCheck () {
            if (this.leftInfo.stage === 11) {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '审', 'title': '审计'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            } else if (this.leftInfo.stage === 12) {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '审', 'title': '审计'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            } else if (this.leftInfo.stage === 13) {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '审', 'title': '审计'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            } else if (this.leftInfo.stage === 14) {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '审', 'title': '审计'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            } else if (this.leftInfo.stage === 15) {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '审', 'title': '审计'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            } else {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '审', 'title': '审计'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            }
            this.subIndex = 0
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
<style scoped>
    .j_uiTab9.uiTab9 li {
        min-width:44px;
    }
</style>
