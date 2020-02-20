<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'预留'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                弹窗四段
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
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
        <layout-four v-if="fourIndex === 0" :key="0"></layout-four>
    </transition-group>
</div>
</template>
<script>
import layoutFour from './layoutFour'
export default {
    components: {
        layoutFour
    },
    data () {
        return {
            fourIndex: undefined
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
