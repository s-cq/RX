<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'尺寸'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">长</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>4m</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">宽</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>2m</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">面积</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>8㎡</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">长</span>
                    <span>4m</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">宽</span>
                    <span title="">2m</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">面积</span>
                    <span title="">8㎡</span>
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
