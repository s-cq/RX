<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'审计'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="c999 pr8"></span>
                    <span class="cGreen pr8">
                        胡燕珠
                    </span>
                </p>
                <p class="col-md-4">
                    <span class="c999 pr8"></span>
                    <span class="cGreen  pr8">
                        审核完成
                    </span>
                </p>
                <p class="col-md-4">
                    <span class="c999 pr8"></span>
                    <span class="cGreen  pr8">
                        总审完成
                    </span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">
                        1分
                    </strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">监理</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8"></span>
                    <span class="cGreen pr8">
                        喻响君已接单
                    </span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">
                        1分
                    </strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客服</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">APP</span>
                    <span class="cRed">未激活</span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">外人</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="cGreen pr8">
                        已完成
                    </span>
                </p>
                <div class="judge-divFour ">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">
                        1分
                    </strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">财务</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">收款日期</span>
                    <span class="cGreen">已确认</span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">
                        1分
                    </strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">材料商</span>
                    <span class="cGreen">完</span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">
                        1分
                    </strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">设计师</p>
           <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="cLightGray pr8">漏量漏项</span>
                        <span class="cRed">有</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="cLightGray pr8">设计师</span>
                    <span class="cRed">未确认</span>
                </p>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">经理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">分配监理</span>
                    <span class="cGreen">喻响君</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">打点</span>
                    <span class="cGreen">完成</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">工序确认</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">总检确认</span>
                    <span class="cRed">未完</span>
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
import rxAudit from './audit/audit'
import rxSupervisor from './audit/supervisor'
import rxCustomer from './audit/customer'
import rxStranger from './audit/stranger'
import rxFinance from './audit/finance'
import rxMaterial from './audit/material'
import rxDesigner from './audit/designer'
import rxManager from './audit/manager'

export default {
    components: {
        rxAudit,
        rxSupervisor,
        rxCustomer,
        rxStranger,
        rxFinance,
        rxMaterial,
        rxDesigner,
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
