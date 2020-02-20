<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'数据接收'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">工人</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">油工</span>
                    <span>5 人</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">瓦工</span>
                    <span>1 人</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">木工</span>
                    <span>2 人</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">订单</span>
                    <span>10 个</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">进行中</span>
                    <span>5 个</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已完成</span>
                    <span>5 个</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">质量</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">工艺</span>
                    <span>7 种</span>
                </p>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">照片</span>
                    <span>10 张</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                 <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span>已接收</span>
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
