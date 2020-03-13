<template>
<div class="tc-center fl">
    <rx-center-title-swiper :data="title">
        <ul class="clearfix uiTab9 j_uiTab9">
            <li :class="{'uiTab9-active':subIndex == index}" :data-title="titleRemark[index]" @click="subSwitch(index)" v-for="(item, index) of title" :key="index">{{item}}</li>
        </ul>
    </rx-center-title-swiper>
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
        <!-- 基础 baseInfo -->
        <div class="uiTab9Con" v-if="subIndex == 3">
            <rx-baseInfo></rx-baseInfo>
        </div>
        <!-- 人工 personnel -->
        <div class="uiTab9Con" v-if="subIndex == 4">
            <rx-person></rx-person>
        </div>
        <!-- 材料 material -->
        <div class="uiTab9Con" v-if="subIndex == 5">
            <rx-material></rx-material>
        </div>
        <!-- 质量 quality -->
        <div class="uiTab9Con" v-if="subIndex == 6">
            <rx-quality></rx-quality>
        </div>
        <!-- 现场 scene -->
        <div class="uiTab9Con" v-if="subIndex == 7">
            <rx-scene></rx-scene>
        </div>
        <!-- 摄像头 camera -->
        <div class="uiTab9Con" v-if="subIndex == 8">
            <rx-camera></rx-camera>
        </div>
        <!-- 管理内容 administration -->
        <div class="uiTab9Con" v-if="subIndex == 9">
            <rx-administration></rx-administration>
        </div>
        <!-- 竣工内容 completed -->
        <div class="uiTab9Con" v-if="subIndex == 10">
            <rx-completed></rx-completed>
        </div>
        <!-- 竣工内容 customer -->
        <div class="uiTab9Con" v-if="subIndex == 11">
            <rx-customer></rx-customer>
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
import rxBaseInfo from './baseInfo'
import rxPerson from './person'
import rxMaterial from './material'
import rxQuality from './quality'
import rxScene from './scene'
import rxCamera from './camera'
import rxAdministration from './administration'
import rxCompleted from './completed'
import rxCustomer from './customer'


export default {
    components: {
        rxState,
        rxExample,
        rxStage,
        rxBaseInfo,
        rxAdministration,
        rxCompleted,
        rxPerson,
        rxMaterial,
        rxQuality,
        rxScene,
        rxCamera,
        rxCustomer
    },
    data () {
        return {
            title: [],
            titleRemark: [],
            subIndex: 1
        }
    },
    mounted () {

    },
    created () {
        this.stage(this.leftInfo.AfterMarketState)
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 1:
                value = '审计'
                break
            case 2:
                value = '准备'
                break
            case 3:
                value = '在施'
                break
            case 4:
                value = '竣工'
                break
            case 5:
                value = '完工'
                break
            case 6:
                value = '历史'
                break
            case 7:
                value = '坏账'
                break
            case 8:
                value = '退单'
                break
            }
            this.title = ['状', '项', '阶', value, '人', '材', '质', '现', '摄', '管', '资', '客']
            this.titleRemark = ['状态', '项目', '阶段', value, '人工', '材料', '质量', '现场', '摄像头', '管理', '资料', '客服']
        },
        subSwitch (index) {
            this.subIndex = index
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        }
    },
    watch: {
        leftInfo () {
            this.stage(this.leftInfo.AfterMarketState)
        }
    }
}
</script>
<style lang="scss" scoped>
    .uiTab9.j_uiTab9 li{
        min-width: 42px;
    }
</style>
