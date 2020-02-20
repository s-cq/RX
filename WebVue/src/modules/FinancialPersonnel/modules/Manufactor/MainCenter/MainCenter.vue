<template>
<div class="tc-center fl relative">
    <!-- 材 开始 -->
    <template v-if="showFlag==0">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
        </ul>
        <div id="j-tc-center-content">
            <!-- 状态的命名为 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-state></rx-state>
            </div>
            <!-- 基础版块 -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-basics></rx-basics>
            </div>
            <!-- 材料版块 -->
            <div class="uiTab9Con" v-if="subIndex == 2">
                <rx-material></rx-material>
            </div>
            <!-- 人工版块 -->
            <div class="uiTab9Con" v-if="subIndex == 3">
                <rx-artificial></rx-artificial>
            </div>
            <!-- 辅料版块 -->
            <div class="uiTab9Con" v-if="subIndex == 4">
                <rx-accessories></rx-accessories>
            </div>
            <!-- 成本版块 -->
            <div class="uiTab9Con" v-if="subIndex == 5">
                <rx-cost></rx-cost>
            </div>
            <!-- 报价版块 -->
            <div class="uiTab9Con" v-if="subIndex == 6">
                <rx-offer></rx-offer>
            </div>
        </div>
    </template>
    <!-- 材 结束 -->
    <!-- 订 开始 -->
    <template v-else>
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title2" :key="index">{{item}}</li>
        </ul>
        <div id="j-tc-center-content">
            <!-- 状态的命名为 state -->
            <div class="uiTab9Con" v-if="subIndex == 0">
                <rx-state></rx-state>
            </div>
            <!-- 基础版块 -->
            <div class="uiTab9Con" v-if="subIndex == 1">
                <rx-basics></rx-basics>
            </div>
        </div>
    </template>
    <!-- 订 结束 -->
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
import rxBasics from './basics'
import rxMaterial from './material'
import rxArtificial from './artificial'
import rxAccessories from './accessories'
import rxCost from './cost'
import rxOffer from './offer'

export default {
    components: {
        rxState,
        rxBasics,
        rxMaterial,
        rxArtificial,
        rxAccessories,
        rxCost,
        rxOffer
    },
    data () {
        return {
            title: ['状态', '基础', '材料', '人工', '辅料', '成本', '报价'],
            title2: ['状态', '基础1'],
            subIndex: 1,
            showFlag: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'rx'])
    },
    methods: {
        subSwitch (index) {
            this.subIndex = index
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    },
    watch: {
        rx () {
            this.showFlag = this.rx.currentFlag
        }
    }
}
</script>
