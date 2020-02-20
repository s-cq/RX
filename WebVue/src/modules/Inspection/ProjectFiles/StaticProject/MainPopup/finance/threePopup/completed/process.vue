<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'执行过程'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">增减项</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已完成</span>
                </p>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">回款</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已完成</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">罚款</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已完成</span>
                </p>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">材料款</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已完成</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工款</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已完成</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">清算</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已完成</span>
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
