<template>
    <div class="tc-center fl">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index, 'cGreen': index === 2 ,'tx-fb':index === 2}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
        </ul>
        <div id="j-tc-center-content">
            <!-- 状态 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-state></rx-state>
            </div>
            <!-- 阶段 state -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-stage></rx-stage>
            </div>
            <!-- 级别 level -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-level></rx-level>
            </div>
            <!-- 结果 result -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <!-- <rx-result></rx-result> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
            <!-- 过程 process -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <!-- <rx-process></rx-process> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
            <!-- 管理 management -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <!-- <rx-management></rx-management> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
            <!-- 人事 personnel -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <!-- <rx-personnel></rx-personnel> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
            <!-- 薪酬 salary -->
            <div class="uiTab9Con" v-if="subIndex == 7">
                <!-- <rx-salary></rx-salary> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
            <!-- 成就 achievement -->
            <div class="uiTab9Con" v-if="subIndex == 8">
                <!-- <rx-achievement></rx-achievement> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
            <!-- 积分 integral-->
            <div class="uiTab9Con" v-if="subIndex == 9">
                <!-- <rx-integral></rx-integral> -->
                <rx-resultcopy></rx-resultcopy>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxStage from './stage'
import rxLevel from './level'
import rxResult from './result'
import rxProcess from './process'
import rxManagement from './management'
import rxPersonnel from './personnel'
import rxSalary from './salary'
import rxAchievement from './achievement'
import rxIntegral from './integral'
// 看样子，可以删除掉，上面的注释解开
import rxResultcopy from './resultcopy'
export default {
    components: {
        rxState,
        rxStage,
        rxLevel,
        rxResult,
        rxProcess,
        rxManagement,
        rxPersonnel,
        rxSalary,
        rxAchievement,
        rxIntegral,
        rxResultcopy
    },
    data () {
        return {
            title: ['状态', '阶段', '级别', '结果', '过程', '管理', '人事', '薪酬', '成就', '积分'],
            // title: ['状态', '阶段'],
            subIndex: 1
        }
    },
    created () {
        this.title = ['状态', '阶段', `${this.leftInfo !== undefined && this.leftInfo.abilityLevel !== undefined ? this.leftInfo.abilityLevel > 12 ? 12 : this.leftInfo.abilityLevel : 0}级`, '结果', '过程', '管理', '人事', '薪酬', '成就', '积分']
        // this.title = ['状态', '阶段']
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
    },
    watch: {
        leftInfo () {
            this.title = ['状态', '阶段', `${this.leftInfo !== undefined && this.leftInfo.abilityLevel !== undefined ? this.leftInfo.abilityLevel > 12 ? 12 : this.leftInfo.abilityLevel : 0}级`, '结果', '过程', '管理', '人事', '薪酬', '成就', '积分']
            // this.title = ['状态', '阶段']
        }
    }
}
</script>
<style lang="scss" scoped>
.uiTab9-active.cGreen {
  color: #3c6;
}
.uiTab9 li {
  min-width: 44px;
}
</style>
