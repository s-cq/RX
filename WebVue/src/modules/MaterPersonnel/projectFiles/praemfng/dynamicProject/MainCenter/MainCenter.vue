<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
    <ul class="clearfix uiTab9 j_uiTab9">
        <li :class="{'uiTab9-active':subIndex == index}" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
    </ul>
    </rx-center-title-swiper>
    <div id="j-tc-center-content">
        <!-- 状态 state -->
        <div class="uiTab8Con" v-if="subIndex == 0">
            <rx-state></rx-state>
        </div>
        <!-- 拒单 result -->
        <div class="uiTab8Con" v-if="subIndex == 1">
            <rx-refuseOrder></rx-refuseOrder>
        </div>
        <!-- 退单 process -->
        <div class="uiTab8Con" v-if="subIndex == 2">
            <rx-backOrder></rx-backOrder>
        </div>
        <!-- 投诉 administration -->
        <div class="uiTab8Con" v-if="subIndex == 3">
            <rx-complaints></rx-complaints>
        </div>
        <!-- 管理 capital -->
        <!-- <div class="uiTab8Con" v-if="subIndex == 4">
            <rx-capital></rx-capital>
        </div> -->
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// 注: 所有的大组件已 rx-xxx 命名, 不要使用此示例文件命名，可保留作为参考
import rxState from './state'
import rxRefuseOrder from './refuseOrder'
import rxBackOrder from './backOrder'
import rxComplaints from './complaints'

export default {
    components: {
        rxState,
        rxRefuseOrder,
        rxBackOrder,
        rxComplaints
    },
    data () {
        return {
            title: ['状态', '拒单', '退单', '投诉'],
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
