<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单1</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单2</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单3</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

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
