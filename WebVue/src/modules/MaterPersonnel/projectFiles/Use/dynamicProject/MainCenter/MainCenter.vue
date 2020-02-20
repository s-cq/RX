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
        <!-- 结果 result -->
        <div class="uiTab8Con" v-if="subIndex == 1">
            <rx-result></rx-result>
        </div>
        <!-- 过程 process -->
        <div class="uiTab8Con" v-if="subIndex == 2">
            <rx-process></rx-process>
        </div>
        <!-- 管理 administration -->
        <div class="uiTab8Con" v-if="subIndex == 3">
            <rx-administration></rx-administration>
        </div>
        <!-- 资金 capital -->
        <div class="uiTab8Con" v-if="subIndex == 4">
            <rx-capital></rx-capital>
        </div>
         <!-- 成就 achievement -->
        <div class="uiTab8Con" v-if="subIndex == 5">
            <rx-achievement></rx-achievement>
        </div>
        <!-- 积分 integral -->
        <div class="uiTab8Con" v-if="subIndex == 6">
            <rx-integral></rx-integral>
        </div>
        <!-- 人事 personnel -->
        <div class="uiTab8Con" v-if="subIndex == 7">
            <rx-personnel></rx-personnel>
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
import rxAdministration from './administration'
import rxPersonnel from './personnel'
import rxCapital from './capital'
import rxIntegral from './integral'
import rxAchievement from './achievement'

export default {
    components: {
        rxState,
        rxResult,
        rxProcess,
        rxAdministration,
        rxPersonnel,
        rxCapital,
        rxIntegral,
        rxAchievement
    },
    data () {
        return {
            title: ['状态', '结果', '过程', '管理', '资金', '成就', '积分', '人事'],
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
