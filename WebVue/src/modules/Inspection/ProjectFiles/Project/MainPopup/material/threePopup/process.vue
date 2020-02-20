<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'执行过程'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">分配</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">材料店铺</span>
                    <span>已分配</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">推送</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">个人端</span>
                    <span>已推送</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">总额</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">计算总额</span>
                    <span>已计算</span>
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
                </p>
                <p class="fl"><span class="circlemark circlemark-green">完</span></p>
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
