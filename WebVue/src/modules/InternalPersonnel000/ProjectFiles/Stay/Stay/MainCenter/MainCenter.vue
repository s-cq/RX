<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
        </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 结果 result -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-result></rx-result>
        </div>
        <!-- 过程 process -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-process></rx-process>
        </div>
        <!-- 管理 management -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-management></rx-management>
        </div>
        <!-- 薪酬 salary -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-salary></rx-salary>
        </div>
        <!-- 人事 personnel -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-personnel></rx-personnel>
        </div>
        <!-- 留 retention -->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-retention></rx-retention>
        </div>
        <!-- 标记 mark -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-mark></rx-mark>
        </div>
        <!-- 培训 training -->
        <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-training></rx-training>
        </div>
        <!-- 成就 achievement -->
        <div class="uiTab9Con" v-if="subIndex == 9">
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
import rxManagement from './management'
import rxSalary from './salary'
import rxPersonnel from './personnel'
import rxRetention from './retention'
import rxMark from './mark'
import rxTraining from './training'
import rxAchievement from './achievement'

export default {
    components: {
        rxState,
        rxResult,
        rxProcess,
        rxManagement,
        rxSalary,
        rxPersonnel,
        rxRetention,
        rxMark,
        rxTraining,
        rxAchievement
    },
    data () {
        return {
            title: ['状态', '结果', '过程', '管理', '薪酬', '人事', '留', '标记', '培训', '成就'],
            subIndex: 1
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
