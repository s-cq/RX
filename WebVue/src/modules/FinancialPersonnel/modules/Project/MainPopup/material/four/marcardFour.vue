<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'储蓄卡详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">合同号</span>
                    <span>GX20002</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">名称</span>
                    <span>毛记冒菜陕科大店装饰工程</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">报价</span>
                    <span>1</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">储蓄卡</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">储蓄卡</span>
                    <span>20200108021</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">洁具店铺</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总额度</span>
                    <span>91.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem anItemBor" @click="clickFiveShow(0)">
            <p class="analyItemTit tx-center">清单</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">数量</span>
                    <span>1</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
    <!-- 五段段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <marcard-five v-if="fiveIndex === 0" :key="0"></marcard-five>
    </transition-group>
</div>
</template>
<script>
import marcardFive from '../five/marcardFive'
export default {
    components: {
        marcardFive
    },
    data () {
        return {
            fiveIndex: undefined
        }
    },
    created () {

    },
    methods: {
        clickFiveShow (index) {
            this.fiveIndex = index
        }
    }
}
</script>
