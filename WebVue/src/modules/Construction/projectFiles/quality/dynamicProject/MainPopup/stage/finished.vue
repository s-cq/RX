<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'完工'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">财务</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">甲方</span>
                    <span class="cRed">未结算</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">丙方</span>
                    <span class="cRed">未结算</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">经理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">确认售后</span>
                    <span></span>
                </p>
                <p class="col-md-3">
                    <span class="cRed">--</span>
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
