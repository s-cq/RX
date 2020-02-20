<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'企业'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">类型</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">详情</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 类型 type -->
        <rx-type v-if="fourIndex === 0" :key="0"></rx-type>
        <!-- 详情 details -->
        <rx-details v-if="fourIndex === 1" :key="1"></rx-details>
    </transition-group>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxType from './enterprise/type'
import rxDetails from './enterprise/details'

export default {
    components: {
        rxType,
        rxDetails
    },
    data () {
        return {
            fourIndex: undefined
        }
    },
    created () {

    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
