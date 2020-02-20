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
            <!-- 设置 setting -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-setting></rx-setting>
            </div>
            <!-- 提成 commission -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-commission></rx-commission>
            </div>
            <!-- 奖金 bonus -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-bonus></rx-bonus>
            </div>
            <!-- 薪酬 salary -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-salary></rx-salary>
            </div>
            <!-- 级别 level -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-level></rx-level>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxSetting from './setting'
import rxCommission from './commission'
import rxBonus from './bonus'
import rxSalary from './salary'
import rxLevel from './level'

export default {
    components: {
        rxState,
        rxSetting,
        rxCommission,
        rxBonus,
        rxSalary,
        rxLevel
    },
    data () {
        return {
            title: ['状态', '设置', '提成', '奖金', '薪酬', '级别'],
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
