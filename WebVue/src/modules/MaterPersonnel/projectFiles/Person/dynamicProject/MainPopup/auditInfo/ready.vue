<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'准备'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">人员组织</p>
            <div class="analyItemCon">
                <div class="clearfix col-md-10">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">安全负责人</span>
                        <span class="cRed">未</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">现场负责人</span>
                        <span class="cRed">未</span>
                    </p>
                </div>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">确认工序</p>
            <div class="analyItemCon">
                <div class="clearfix col-md-10">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">确认工序</span>
                        <span class="cRed">未完成</span>
                    </p>
                </div>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施组计划</p>
            <div class="analyItemCon">
                <div class="clearfix col-md-10">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">施工进度表</span>
                        <span class="cRed" id="sp_planstate">未</span>
                    </p>
                </div>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">无名材料</p>
            <div class="analyItemCon">
                <div class="clearfix col-md-10">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">材料商</span>
                        <span class="cGreen">完</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">无名材料</span>
                        <span class="cRed" id="sp_clstate">未</span>
                    </p>
                </div>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>

                    <strong class="score cRed fz14 pr10">0分</strong>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工日期</p>
            <div class="analyItemCon">
                <div class="clearfix col-md-10">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">开工日期</span>
                        <span class="cGreen">2019-06-16</span>
                    </p>
                </div>
                <div class="judge-divFour">
                    <rx-switch class="checkInput mr10"></rx-switch>
                    <strong class="score cGreen fz14 pr10">1分</strong>
                </div>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">开工准备</p>
            <div class="analyItemCon">
                <div class="clearfix col-md-10">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">摄像</span>
                        <span class="cRed" title="未上传数">1</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">质量</span>
                        <span class="cRed" title="未上传数">8</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">文明</span>
                        <span class="cRed" title="未上传数">14</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">安全</span>
                        <span class="cRed" title="未上传数">7</span>
                    </p>
                </div>
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
                    <span class="fz14 totalScore">6</span>
                </p>
                <p class="col-md-4 fz16">
                    <span class="clightGray pr8 fz14">实得</span>
                    <span class="fz14 finascore">1</span>
                </p>
                <p class="col-md-4 fz16">
                    <span class="clightGray pr8 fz14">差值</span>
                    <span class="fz14 cRed countScore">5</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    }
}
</script>
<style>
    input.checkedContent{
        position:relative;
    }
</style>
