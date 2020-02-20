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
        <!-- 项 example -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-example></rx-example>
        </div>
        <!-- 阶段 example -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-stage></rx-stage>
        </div>
        <!-- 当前阶段 currentsummary -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-currentsummary></rx-currentsummary>
        </div>
        <!-- 阶段内容 currentList -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-currentList></rx-currentList>
        </div>
        <!-- 订单内容 currentList -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-order></rx-order>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxExample from './example'
import rxStage from './stage'
import rxCurrentsummary from './currentsummary'
import rxCurrentList from './currentList'
import rxOrder from './order'

export default {
    components: {
        rxState,
        rxExample,
        rxStage,
        rxCurrentsummary,
        rxCurrentList,
        rxOrder
    },
    data () {
        return {
            title: ['状态', '项', '阶段', '当前', '详情', '订单'],
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
