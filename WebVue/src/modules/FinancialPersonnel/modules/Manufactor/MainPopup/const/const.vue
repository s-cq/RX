<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'成本'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">名称</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>普通玻璃</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">规格</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>5mm</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">单价</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>10元/㎡</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">用量</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8"></span> -->
                    <span>8㎡</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">成本</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <!-- <span class="cLightGray pr8">名称</span> -->
                    <span>80元</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">名称</span>
                    <span>普通玻璃</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">规格</span>
                    <span title="">5mm</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">用量</span>
                    <span title="">8㎡</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">80元</span>
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
