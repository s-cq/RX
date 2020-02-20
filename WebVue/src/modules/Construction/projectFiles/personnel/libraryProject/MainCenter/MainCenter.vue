<template>
<div class="tc-center fl relative">
    <ul class="clearfix uiTab9 j_uiTab9">
        <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
    </ul>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 标准 twoTab1 -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-twoTab1></rx-twoTab1>
        </div>
        <!-- 子工种 twoTab2 -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-twoTab2></rx-twoTab2>
        </div>
    </div>
    <!-- 中间路由渲染 -->
    <transition class="animated faster" enter-active-class="animated faster slideInLeft" leave-active-class="animated faster slideOutLeft">
        <router-view name="center"></router-view>
    </transition>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxTwoTab1 from './twoTab1'
import rxTwoTab2 from './twoTab2'

export default {
    components: {
        rxState,
        rxTwoTab1,
        rxTwoTab2
    },
    data () {
        return {
            title: ['状态', '标准', '子工种'],
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
