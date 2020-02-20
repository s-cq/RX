<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'款项'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">费项</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(2)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">取费</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(3)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">保险</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(4)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">税金</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(5)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">物业</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div tag="div" @click="clickFourShow(6)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">协调费</p>
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
        <!-- 合同 contract -->
        <rx-contract v-if="fourIndex === 0" :key="0"></rx-contract>
        <!-- 费项 cost -->
        <rx-cost v-if="fourIndex === 1" :key="1"></rx-cost>
        <!-- 取费 fee -->
        <rx-fee v-if="fourIndex === 2" :key="2"></rx-fee>
        <!-- 保险 insurance -->
        <rx-insurance v-if="fourIndex === 3" :key="3"></rx-insurance>
        <!-- 税金 taxes -->
        <rx-taxes v-if="fourIndex === 4" :key="4"></rx-taxes>
        <!-- 物业 property -->
        <rx-property v-if="fourIndex === 5" :key="5"></rx-property>
        <!-- 协调费 coordinate -->
        <rx-coordinate v-if="fourIndex === 6" :key="6"></rx-coordinate>
    </transition-group>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxContract from './money/contract'
import rxCost from './money/cost'
import rxFee from './money/fee'
import rxInsurance from './money/insurance'
import rxTaxes from './money/taxes'
import rxProperty from './money/property'
import rxCoordinate from './money/coordinate'

export default {
    components: {
        rxContract,
        rxCost,
        rxFee,
        rxInsurance,
        rxTaxes,
        rxProperty,
        rxCoordinate
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
