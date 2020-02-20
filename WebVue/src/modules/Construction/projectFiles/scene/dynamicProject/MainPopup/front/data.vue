<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'资料'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">工期延期</p>
            <div class="analyItemCon">
                <div class="col-md-6 ">
                    <label class="pr8 mb5" style="display:block">
                        <span>1、工程延期单</span>
                    </label>
                </div>
                <span class="circlemark circlemark-lightRed" title="未上传">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">工期洽商</p>
             <div class="analyItemCon">
                <div class="col-md-6 ">
                    <label class="pr8 mb5" style="display:block">
                        <span>1、工期洽商单</span>
                    </label>
                </div>
                <span class="circlemark circlemark-lightRed" title="未上传">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">工期停工</p>
            <div class="analyItemCon">
                <div class="col-md-6 ">
                    <label class="pr8 mb5" style="display:block">
                        <span>1、工期停工单</span>
                    </label>
                </div>
                <span class="circlemark circlemark-lightRed" title="未上传">未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="pr8 cLightGray">选择资料</span>
                    <span class="dataCount">21种</span>
                </p>
                <p class="col-md-5">
                </p>
                <span class="circlemark circlemark-lightGreen">
                    已
                </span>
            </div>
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
