<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name: '解绑'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">拆卸</p>
            <div class="analyItemCon">
                <p class="col-md-12" v-for="(item, index) in uninstallList" :key="index"><span class="cLightGray pr8">步骤{{ index+1 }}</span><span>{{ item }}</span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <span class="cRed">--</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            uninstallList: [
                '断电', '拆摄像头', '拧螺丝', '拆底座', '填孔', '拍照'
            ]
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
