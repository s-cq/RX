<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'收入详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem analyItem-visited">
            <p class="analyItemTit tx-center">司财</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>2019-06-20</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>5000</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">原因</span>
                    <span>押金扣除</span>
                </p>
            </div>
        </div>
        <div class="analyItem analyItem-visited">
            <p class="analyItemTit tx-center">88团</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>2019-06-21</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>5000</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">收款人</span>
                    <span>赵晓军</span>
                </p>
            </div>
        </div>
         <div class="analyItem analyItem-visited">
            <p class="analyItemTit tx-center">82团</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>2019-06-21</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>5000</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span class="cGreen">已完成</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>5000</span>
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
