<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'巡检'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
         <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">安全</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">应传</span>
                    <span>14</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">实传</span>
                    <span>0</span>
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">形象</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">应传</span>
                    <span>24</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">实传</span>
                    <span>0</span>
                </p>
                <span class="circlemark circlemark-lightRed"> 未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">应传</span>
                    <span>38</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">实传</span>
                    <span>0</span>
                </p>
                <span class="circlemark circlemark-lightRed">
                    未
                </span>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 安全 frontSafe -->
        <rx-safe v-if="fourIndex === 0" :key="0"></rx-safe>
        <!-- 形象 frontImage -->
        <rx-image v-if="fourIndex === 1" :key="1"></rx-image>
    </transition-group>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxSafe from './three/safe'
import rxImage from './three/image'

export default {
    components: {
        rxSafe,
        rxImage
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
