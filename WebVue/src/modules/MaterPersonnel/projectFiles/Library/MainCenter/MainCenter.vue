<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
    <ul class="clearfix uiTab9 j_uiTab9">
        <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
    </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab8Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 设置 setUp -->
        <div class="uiTab8Con" v-if="subIndex == 1">
            <rx-setUp></rx-setUp>
        </div>
        <!--当阶 phase-->
        <div class="uiTab8Con" v-if="subIndex == 2">
            <rx-phase></rx-phase>
        </div>
        <!-- 管理 manage -->
        <div class="uiTab8Con" v-if="subIndex == 3">
            <rx-manage></rx-manage>
        </div>
        <!-- 过程 process -->
        <div class="uiTab8Con" v-if="subIndex == 4">
            <rx-process></rx-process>
        </div>
         <!-- 结果 result -->
        <div class="uiTab8Con" v-if="subIndex == 5">
            <rx-result></rx-result>
        </div>
        <!-- 标记 tag -->
        <!-- <div class="uiTab8Con" v-if="subIndex == 6">
            <rx-tag></rx-tag>
        </div> -->
        <!-- 培训 capital -->
        <div class="uiTab8Con" v-if="subIndex == 6">
            <rx-training></rx-training>
        </div>
        <!-- 成就 achievement -->
        <div class="uiTab8Con" v-if="subIndex == 7">
            <rx-achievement></rx-achievement>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxResult from './result'
import rxProcess from './process'
import rxManage from './manage'
import rxPhase from './phase'
import rxSetUp from './setUp'
import rxTag from './tag'
import rxTraining from './training'
import rxAchievement from './achievement'

export default {
    components: {
        rxState,
        rxResult,
        rxProcess,
        rxManage,
        rxPhase,
        rxSetUp,
        rxTag,
        rxTraining,
        rxAchievement
    },
    data () {
        return {
            title: ['状', '设置', '当阶', '管理', '过程', '结果', '培训', '成就'],
            subIndex: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        subSwitch (index) {
            this.subIndex = index
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    }
}
</script>
