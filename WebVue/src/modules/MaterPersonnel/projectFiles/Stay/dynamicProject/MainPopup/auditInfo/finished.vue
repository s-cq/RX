<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'完工'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">财务</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">甲方</span>
                    <span class="cRed pr8">未结算</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">丙方</span>
                    <span class="cRed pr8">未结算</span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score  cRed fz14 pr10"> 0分</strong>

                </div>
            </div>
        </div>
        <div class="analyItem">
            <div class="analyItemCon">
                <p class="col-md-4">确认售后</p>
                <p class="col-md-4">
                    <span class="cRed">--</span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="clightGray pr8 fz14">应得</span>
                    <span class="fz14 totalScore">2</span>
                </p>
                <p class="col-md-4 fz16">
                    <span class="clightGray pr8 fz14">实得</span>
                    <span class="fz14 finascore">0</span>
                </p>
                <p class="col-md-4 fz16">
                    <span class="clightGray pr8 fz14">差值</span>
                    <span class="fz14 cRed countScore">2</span>
                </p>
                <div id="state_div"><a href="javascript:" class="circlemark  circlemark-lightRed">未</a></div>
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxFinance from './finished/finance'
import rxManager from './finished/manager'

export default {
    components: {
        rxFinance,
        rxManager
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
<style>
    input.checkedContent{
        position:relative;
    }
</style>
