<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'形象'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">形象标识</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">14</span>&nbsp;项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">启动</span>
                    <span class="cGreen">14</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightGreen">
                    已
                </span>
           </div>
        </div>
        <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">着装处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">1</span>&nbsp;项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">启动</span>
                    <span class="cGreen">1</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightGreen">
                    已
                </span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">1</span>&nbsp;项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">启动</span>
                    <span class="cGreen">1</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightGreen">
                    已
                </span>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 形象标识 imageIndent -->
        <rx-imageIndent v-if="fourIndex === 0" :key="0"></rx-imageIndent>
        <!-- 着装处理 imageHandle -->
        <rx-imageHandle v-if="fourIndex === 1" :key="1"></rx-imageHandle>
    </transition-group>
</div>

</template>

<script>
import rxImageIndent from './image/imageIndent'
import rxImageHandle from './image/imageHandle'
export default {
    components: {
        rxImageIndent,
        rxImageHandle
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
