<template>
<div class="tc-center fl">
    <ul class="clearfix uiTab9 j_uiTab9">
        <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
    </ul>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 结果 result -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-result></rx-result>
        </div>
        <!-- 收入 income -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-income></rx-income>
        </div>
        <!-- 支出 expenditure -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-expenditure></rx-expenditure>
        </div>
        <!-- 金库 vault -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-vault></rx-vault>
        </div>
        <!-- 分司 division -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-division></rx-division>
        </div>
        <!-- 人事 personnel -->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-personnel></rx-personnel>
        </div>
         <!-- 保金 withdrawal -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-withdrawal></rx-withdrawal>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxResult from './result'
import rxIncome from './income'
import rxExpenditure from './expenditure'
import rxVault from './vault'
import rxDivision from './division'
import rxWithdrawal from './withdrawal'
import rxPersonnel from './personnel'

export default {
    components: {
        rxState,
        rxResult,
        rxIncome,
        rxExpenditure,
        rxVault,
        rxDivision,
        rxWithdrawal,
        rxPersonnel
    },
    data () {
        return {
            title: ['状态', '结果', '收入', '支出', '金库', '分司', '人事', '保金'],
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
