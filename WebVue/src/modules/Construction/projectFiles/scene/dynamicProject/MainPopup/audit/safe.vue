<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'安全'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
         <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">设备安全</p>
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
         <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">消防安全</p>
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
         <div tag="div" @click="clickFourShow(2)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">用电安全</p>
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
         <div tag="div" @click="clickFourShow(3)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">人员安全</p>
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
        <!-- 设备安全 envSafe -->
        <rx-envSafe v-if="fourIndex === 0" :key="0"></rx-envSafe>
        <!-- 消防安全 fireSafe -->
        <rx-fireSafe v-if="fourIndex === 1" :key="1"></rx-fireSafe>
        <!-- 用电安全 elecSafe -->
        <rx-elecSafe v-if="fourIndex === 2" :key="2"></rx-elecSafe>
        <!-- 人员安全 perSafe -->
        <rx-perSafe v-if="fourIndex === 3" :key="3"></rx-perSafe>
    </transition-group>
</div>
</template>
<script>
import rxEnvSafe from './safe/envSafe'
import rxFireSafe from './safe/fireSafe'
import rxElecSafe from './safe/elecSafe'
import rxPerSafe from './safe/perSafe'
export default {
    components: {
        rxEnvSafe,
        rxFireSafe,
        rxElecSafe,
        rxPerSafe
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
