<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'资料打印'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">资料一</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">资料二</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
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
