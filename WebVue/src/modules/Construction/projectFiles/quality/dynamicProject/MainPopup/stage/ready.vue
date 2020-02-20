<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'准备'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">人员组织</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">安全负责人</span>
                    <span class="cRed">无</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">现场负责人</span>
                    <span class="cRed">无</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">确认工序</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">确认工序</span>
                    <span class="cRed">未完成</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施组计划</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">施工进度表</span>
                    <span class="cRed">未</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">无名材料</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">材料商</span>
                    <span class="cGreen">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">无名材料</span>
                    <span class="cGreen">未</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工日期</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">开工日期</span>
                    <span class="cRed">未</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工准备</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">开工准备</span>
                    <span class="cRed">未</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p>
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
