<template>
<div class="tc-center fl relative">
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
        <!-- 设置 twoTab1 -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-twoTab1></rx-twoTab1>
        </div>
        <!-- 标准 twoTab2 -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-twoTab2></rx-twoTab2>
        </div>
        <!-- 审计 twoTab3 -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-twoTab3></rx-twoTab3>
        </div>
        <!-- 准备 twoTab4 -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-twoTab4></rx-twoTab4>
        </div>
        <!-- 在施 twoTab5 -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-twoTab5></rx-twoTab5>
        </div>
        <!-- 竣工 twoTab8 -->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-twoTab8></rx-twoTab8>
        </div>
        <!-- 罚款 twoTab6 -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-twoTab6></rx-twoTab6>
        </div>
        <!-- 报价 twoTab7 -->
        <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-twoTab7></rx-twoTab7>
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
import rxTwoTab3 from './twoTab3'
import rxTwoTab4 from './twoTab4'
import rxTwoTab5 from './twoTab5'
import rxTwoTab6 from './twoTab6'
import rxTwoTab7 from './twoTab7'
import rxTwoTab8 from './twoTab8'

export default {
    components: {
        rxState,
        rxTwoTab1,
        rxTwoTab2,
        rxTwoTab3,
        rxTwoTab4,
        rxTwoTab5,
        rxTwoTab6,
        rxTwoTab7,
        rxTwoTab8
    },
    data () {
        return {
            title: ['状态', '设置', '标准', '审计', '准备', '在施', '竣工', '罚款', '报价'],
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
