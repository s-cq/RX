<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'综合'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFour()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">降级</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">暂无内容</span>
                    <!-- <span>预留名称</span> -->
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fr col-md-3">
                    <span class="cLightGray">总数</span>
                    <span>0</span>
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
