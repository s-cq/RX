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
        <!-- 项 example -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-example></rx-example>
        </div> -->
        <!-- 阶段 example -->
        <!-- <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-stage></rx-stage>
        </div> -->
        <!-- 订单 order -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-order></rx-order>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
// import rxExample from './example'
// import rxStage from './stage'
import rxOrder from './order'

export default {
    components: {
        rxState,
        // rxExample,
        // rxStage,
        rxOrder
    },
    data () {
        return {
            title: ['状', '详情'],
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
