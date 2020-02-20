<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem anItemBor" :key="index" @click="clickFourShow(0)">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                        <span>0</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                        <span class="c666">--</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                    <span class="c666">0</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                    <span class="c666">0</span>
                    <!-- <span class="c666"><span style="color:red; font-weight:bolder">-9</span></span> -->
                    <span class="circlemark circlemark-lightRed layerui-title" data-title="延期未回款">差</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <return-four v-if="fourIndex === 0" :key="0"></return-four>
    </transition-group>
</div>
</template>
<script>
import returnFour from './four/returnFour'
export default {
    components: {
        returnFour
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
