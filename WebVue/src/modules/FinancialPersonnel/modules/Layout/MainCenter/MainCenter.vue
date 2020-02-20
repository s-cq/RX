<template>
<div class="tc-center fl">
    <ul class="clearfix uiTab9 j_uiTab9">
        <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
    </ul>
    <div id="j-tc-center-content">
        <!-- 状态的命名为 state -->
        <div class="uiTab9Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 项板块 -->
        <div class="uiTab9Con" v-if="subIndex == 1">
            <rx-term></rx-term>
        </div>
        <!-- 阶板块 -->
        <div class="uiTab9Con" v-if="subIndex == 2">
            <rx-stage></rx-stage>
        </div>
        <!-- 当前阶段 -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-current></rx-current>
        </div>
        <!-- 颜色列表 -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-color></rx-color>
        </div>
        <!-- 三段示例 -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-three></rx-three>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxTerm from './term'
import rxStage from './stage'
import rxCurrent from './current'
import rxColor from './color'
import rxThree from './three'

export default {
    components: {
        rxState,
        rxTerm,
        rxStage,
        rxCurrent,
        rxColor,
        rxThree
    },
    data () {
        return {
            title: ['状', '项', '阶', '当阶', '颜色', '弹窗'],
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
