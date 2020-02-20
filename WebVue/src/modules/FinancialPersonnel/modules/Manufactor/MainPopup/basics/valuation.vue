<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'计价'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">计价</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单位</span>
                    <span>块</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">单位</span>
                    <span>块</span>
                </p>

            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
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
