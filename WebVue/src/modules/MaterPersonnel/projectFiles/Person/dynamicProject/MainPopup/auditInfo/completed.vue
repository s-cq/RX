<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'竣工'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">状态</span>
                    <span class="cGreen pr8">
                        已申请竣工
                    </span>
                </p>

                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">1分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">总检</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">监理</span>
                    <span class="cRed pr8">
                        未完
                    </span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">整改</span>
                    <span class="cRed pr8">
                        未启动
                    </span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">验收</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">客户</span>
                    <span class="cRed pr8">
                        未验收
                    </span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">结算</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">增减项</span>
                    <span class="cRed">
                        未审批
                    </span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">材料</span>
                    <span class="cRed pr8">订单未付款</span>
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
                    <span class="fz14 totalScore">0</span>
                </p>
                <p class="col-md-4 fz16">
                    <span class="clightGray pr8 fz14">实得</span>
                    <span class="fz14 finascore">0</span>
                </p>
                <p class="col-md-4 fz16">
                    <span class="clightGray pr8 fz14">差值</span>
                    <span class="fz14 cRed countScore">0</span>
                </p>
                <span><span class="circlemark circlemark-lightGreen">完</span></span>
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
import rxCompleted from './completed/completed'
import rxGeneral from './completed/general'
import rxCheck from './completed/check'
import rxSettlement from './completed/settlement'

export default {
    components: {
        rxCompleted,
        rxGeneral,
        rxCheck,
        rxSettlement
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
