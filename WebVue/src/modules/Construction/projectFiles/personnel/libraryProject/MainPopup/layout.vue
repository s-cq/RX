<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'新增'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">名称</p>
            <div class="analyItemCon">
                <input class="width200" type="text" placeholder="输入工种名字">
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
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
