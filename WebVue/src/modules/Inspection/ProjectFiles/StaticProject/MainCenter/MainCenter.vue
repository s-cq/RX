<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index" :data-title="item.title">{{item.name}}</li>
        </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 审计 -->
        <div v-if="this.leftInfo.stage == 11">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-audit-state></rx-audit-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-audit-stage></rx-audit-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-audit-project></rx-audit-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-audit-audit></rx-audit-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-audit-manager></rx-audit-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-audit-term></rx-audit-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-audit-material></rx-audit-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-audit-finance></rx-audit-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-audit-worker></rx-audit-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-audit-personnel></rx-audit-personnel>
            </div>
        </div>
        <!-- 准备 -->
        <div v-if="this.leftInfo.stage == 12">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-ready-state></rx-ready-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-ready-stage></rx-ready-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-ready-project></rx-ready-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-ready-audit></rx-ready-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-ready-manager></rx-ready-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-ready-term></rx-ready-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-ready-material></rx-ready-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-ready-finance></rx-ready-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-ready-worker></rx-ready-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-ready-personnel></rx-ready-personnel>
            </div>
        </div>
        <!-- 施前 -->
        <div v-if="this.leftInfo.stage == 13">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-front-state></rx-front-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-front-stage></rx-front-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-front-project></rx-front-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-front-audit></rx-front-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-front-manager></rx-front-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-front-term></rx-front-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-front-material></rx-front-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-front-finance></rx-front-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-front-worker></rx-front-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-front-personnel></rx-front-personnel>
            </div>
        </div>
        <!-- 施中 -->
        <div v-if="this.leftInfo.stage == 14">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-center-state></rx-center-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-center-stage></rx-center-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-center-project></rx-center-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-center-audit></rx-center-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-center-manager></rx-center-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-center-term></rx-center-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-center-material></rx-center-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-center-finance></rx-center-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-center-worker></rx-center-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-center-personnel></rx-center-personnel>
            </div>
        </div>
        <!-- 施尾 -->
        <div v-if="this.leftInfo.stage == 15">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-tail-state></rx-tail-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-tail-stage></rx-tail-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-tail-project></rx-tail-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-tail-audit></rx-tail-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-tail-manager></rx-tail-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-tail-term></rx-tail-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-tail-material></rx-tail-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-tail-finance></rx-tail-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-tail-worker></rx-tail-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-tail-personnel></rx-tail-personnel>
            </div>
        </div>
        <!-- 竣工 -->
        <div v-if="this.leftInfo.stage == 16">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-completed-state></rx-completed-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-completed-stage></rx-completed-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-completed-project></rx-completed-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-completed-audit></rx-completed-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-completed-manager></rx-completed-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-completed-term></rx-completed-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-completed-material></rx-completed-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-completed-finance></rx-completed-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-completed-worker></rx-completed-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-completed-personnel></rx-completed-personnel>
            </div>
        </div>
        <!-- 完工 -->
        <div v-if="this.leftInfo.stage == 17">
             <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-finished-state></rx-finished-state>
            </div>
            <!-- 阶段 stage -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-finished-stage></rx-finished-stage>
            </div>
            <!-- 审 project -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-finished-project></rx-finished-project>
            </div>
            <!-- 审计 audit -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-finished-audit></rx-finished-audit>
            </div>
            <!-- 经理 manager -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-finished-manager></rx-finished-manager>
            </div>
            <!-- 项经 term -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-finished-term></rx-finished-term>
            </div>
            <!-- 材料 audit -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-finished-material></rx-finished-material>
            </div>
            <!-- 财务 finance -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <rx-finished-finance></rx-finished-finance>
            </div>
            <!-- 工人 worker -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <rx-finished-worker></rx-finished-worker>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <rx-finished-personnel></rx-finished-personnel>
            </div>
        </div>
        <!-- 状态 state -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div> -->
        <!-- 阶段 stage -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-stage></rx-stage>
        </div> -->
         <!-- 审 project -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-project></rx-project>
        </div> -->
        <!-- 审计 audit -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-audit></rx-audit>
        </div> -->
        <!-- 经理 manager -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-manager></rx-manager>
        </div> -->
        <!-- 项经 term -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-term></rx-term>
        </div> -->
        <!-- 材料 audit -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-material></rx-material>
        </div> -->
        <!-- 财务 finance -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-finance></rx-finance>
        </div> -->
        <!-- 工人 worker -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-worker></rx-worker>
        </div> -->
        <!-- 人事 personnel -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 9">
            <rx-personnel></rx-personnel>
        </div> -->
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
// import rxState from './state'
// import rxStage from './stage'
// import rxProject from './project'
// import rxAudit from './audit'
// import rxManager from './Manager'
// import rxTerm from './term'
// import rxMaterial from './material'
// import rxFinance from './finance'
// import rxWorker from './worker'
// import rxPersonnel from './personnel'

// 审计
import rxAuditState from './Audit/state'
import rxAuditStage from './Audit/stage'
import rxAuditProject from './Audit/project'
import rxAuditAudit from './Audit/audit'
import rxAuditManager from './Audit/Manager'
import rxAuditTerm from './Audit/term'
import rxAuditMaterial from './Audit/material'
import rxAuditFinance from './Audit/finance'
import rxAuditWorker from './Audit/worker'
import rxAuditPersonnel from './Audit/personnel'
// 准备
import rxReadyState from './Ready/state'
import rxReadyStage from './Ready/stage'
import rxReadyProject from './Ready/project'
import rxReadyAudit from './Ready/audit'
import rxReadyManager from './Ready/Manager'
import rxReadyTerm from './Ready/term'
import rxReadyMaterial from './Ready/material'
import rxReadyFinance from './Ready/finance'
import rxReadyWorker from './Ready/worker'
import rxReadyPersonnel from './Ready/personnel'
// 施前
import rxFrontState from './Front/state'
import rxFrontStage from './Front/stage'
import rxFrontProject from './Front/project'
import rxFrontAudit from './Front/audit'
import rxFrontManager from './Front/Manager'
import rxFrontTerm from './Front/term'
import rxFrontMaterial from './Front/material'
import rxFrontFinance from './Front/finance'
import rxFrontWorker from './Front/worker'
import rxFrontPersonnel from './Front/personnel'
// 施中
import rxCenterState from './Center/state'
import rxCenterStage from './Center/stage'
import rxCenterProject from './Center/project'
import rxCenterAudit from './Center/audit'
import rxCenterManager from './Center/Manager'
import rxCenterTerm from './Center/term'
import rxCenterMaterial from './Center/material'
import rxCenterFinance from './Center/finance'
import rxCenterWorker from './Center/worker'
import rxCenterPersonnel from './Center/personnel'

// 施尾
import rxTailState from './Tail/state'
import rxTailStage from './Tail/stage'
import rxTailProject from './Tail/project'
import rxTailAudit from './Tail/audit'
import rxTailManager from './Tail/Manager'
import rxTailTerm from './Tail/term'
import rxTailMaterial from './Tail/material'
import rxTailFinance from './Tail/finance'
import rxTailWorker from './Tail/worker'
import rxTailPersonnel from './Tail/personnel'

// 竣工
import rxCompletedState from './Completed/state'
import rxCompletedStage from './Completed/stage'
import rxCompletedProject from './Completed/project'
import rxCompletedAudit from './Completed/audit'
import rxCompletedManager from './Completed/Manager'
import rxCompletedTerm from './Completed/term'
import rxCompletedMaterial from './Completed/material'
import rxCompletedFinance from './Completed/finance'
import rxCompletedWorker from './Completed/worker'
import rxCompletedPersonnel from './Completed/personnel'

// 完工
import rxFinishedState from './Finished/state'
import rxFinishedStage from './Finished/stage'
import rxFinishedProject from './Finished/project'
import rxFinishedAudit from './Finished/audit'
import rxFinishedManager from './Finished/Manager'
import rxFinishedTerm from './Finished/term'
import rxFinishedMaterial from './Finished/material'
import rxFinishedFinance from './Finished/finance'
import rxFinishedWorker from './Finished/worker'
import rxFinishedPersonnel from './Finished/personnel'


export default {
    components: {
        // rxState,
        // rxProject,
        // rxStage,
        // rxAudit,
        // rxManager,
        // rxTerm,
        // rxMaterial,
        // rxFinance,
        // rxWorker,
        // rxPersonnel,

        rxAuditState,
        rxAuditProject,
        rxAuditStage,
        rxAuditAudit,
        rxAuditManager,
        rxAuditTerm,
        rxAuditMaterial,
        rxAuditFinance,
        rxAuditWorker,
        rxAuditPersonnel,

        rxReadyState,
        rxReadyProject,
        rxReadyStage,
        rxReadyAudit,
        rxReadyManager,
        rxReadyTerm,
        rxReadyMaterial,
        rxReadyFinance,
        rxReadyWorker,
        rxReadyPersonnel,

        rxFrontState,
        rxFrontProject,
        rxFrontStage,
        rxFrontAudit,
        rxFrontManager,
        rxFrontTerm,
        rxFrontMaterial,
        rxFrontFinance,
        rxFrontWorker,
        rxFrontPersonnel,

        rxCenterState,
        rxCenterProject,
        rxCenterStage,
        rxCenterAudit,
        rxCenterManager,
        rxCenterTerm,
        rxCenterMaterial,
        rxCenterFinance,
        rxCenterWorker,
        rxCenterPersonnel,

        rxTailState,
        rxTailProject,
        rxTailStage,
        rxTailAudit,
        rxTailManager,
        rxTailTerm,
        rxTailMaterial,
        rxTailFinance,
        rxTailWorker,
        rxTailPersonnel,

        rxCompletedState,
        rxCompletedProject,
        rxCompletedStage,
        rxCompletedAudit,
        rxCompletedManager,
        rxCompletedTerm,
        rxCompletedMaterial,
        rxCompletedFinance,
        rxCompletedWorker,
        rxCompletedPersonnel,

        rxFinishedState,
        rxFinishedProject,
        rxFinishedStage,
        rxFinishedAudit,
        rxFinishedManager,
        rxFinishedTerm,
        rxFinishedMaterial,
        rxFinishedFinance,
        rxFinishedWorker,
        rxFinishedPersonnel
    },
    data () {
        return {
            title: [],
            subIndex: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.phaseCheck()
        console.log(this.leftInfo)
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
                    {'name': '准备', 'title': '准备'},
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
                    {'name': '施前', 'title': '施前'},
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
                    {'name': '施中', 'title': '施中'},
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
                    {'name': '施尾', 'title': '施尾'},
                    {'name': '审计', 'title': '11审计'},
                    {'name': '经理', 'title': '12经理'},
                    {'name': '项经', 'title': '13项经'},
                    {'name': '材料', 'title': '14材料'},
                    {'name': '财务', 'title': '15财务'},
                    {'name': '工人', 'title': '16工人'},
                    {'name': '人事', 'title': '17人事'}
                ]
            } else if (this.leftInfo.stage === 16) {
                this.title = [
                    {'name': '状', 'title': '状态'},
                    {'name': '阶', 'title': '阶段'},
                    {'name': '竣工', 'title': '竣工'},
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
                    {'name': '完工', 'title': '完工'},
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
