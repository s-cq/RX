<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'培训费'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center" title="">培训费</p>
            <div class="analyItemCon">
                <p>
                    <span class="cLightGray pr8 fl">金额</span>
                    <input type="text" class=" fl" id="trainmoney">
                    <input type="button" id="savetrainmoney" value="确定" class="uiBtn-blue uiBtn-normal fl ml10">
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray">已付金额</span>
                    <span class="cGreen fz14 bold">0</span>
                </p>
                <p class="fr col-md-4">
                    <span class="cLightGray">未付金额</span>
                    <span class="cGreen fz14 bold">0</span>
                </p>
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
