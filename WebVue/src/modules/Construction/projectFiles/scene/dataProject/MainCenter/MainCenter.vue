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
        <!-- 标准 twoTab2 -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-twoTab2></rx-twoTab2>
        </div>
        <!-- 审计 twoTab3 -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-twoTab3></rx-twoTab3>
        </div>
        <!-- 准备 twoTab4 -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-twoTab4></rx-twoTab4>
        </div>
        <!-- 在施 twoTab5 -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-twoTab5></rx-twoTab5>
        </div>
        <!-- 竣工 twoTab6 -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-twoTab6></rx-twoTab6>
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
import rxTwoTab2 from './twoTab2'
import rxTwoTab3 from './twoTab3'
import rxTwoTab4 from './twoTab4'
import rxTwoTab5 from './twoTab5'
import rxTwoTab6 from './twoTab6'

export default {
    components: {
        rxState,
        rxTwoTab2,
        rxTwoTab3,
        rxTwoTab4,
        rxTwoTab5,
        rxTwoTab6
    },
    data () {
        return {
            title: ['状态', '标准', '审计', '准备', '在施', '竣工'],
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
