<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'环境'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">现场保护</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">4</span>&nbsp;项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">启动</span>
                    <span class="cGreen">3</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-red">
                    未
                </span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="clightGray">共</span>
                    <span>11</span>&nbsp;项
                </p>
                <p class="col-md-3" style="text-align:right">
                    <span class="clightGray">启动</span>
                    <span>6</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightRed">
                    未
                </span>
            </div>
        </div>
    </div>
        <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 现场保护 scenePro -->
        <rx-scenePro v-if="fourIndex === 0" :key="0"></rx-scenePro>
    </transition-group>
</div>
</template>
<script>
import rxScenePro from './environment/scenePro'
export default {
    components: {
        rxScenePro
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
