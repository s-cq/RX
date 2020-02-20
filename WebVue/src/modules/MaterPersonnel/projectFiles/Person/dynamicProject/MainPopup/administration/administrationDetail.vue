<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'认证'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center" style="background: #97E4B0;color: #fff;">资料</p>
            <div class="analyItemCon clearfix">
                <p class="fl col-md-2">
                    <span class="cLightGray pr8">总数</span>
                    <span class="rz-num ng-binding">18</span>
                </p>
                <p class="fl col-md-2">
                    <span class="cLightGray pr8">标准</span>
                    <span class="rz-num-h cGreen">12</span>
                </p>
                <p class="fl col-md-2">
                    <span class="cLightGray pr8">合格</span>
                    <span class="rz-num-h cGreen ng-binding">18</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">差额</span>
                    <span class="cRed rz-num-c ng-binding">0</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">完成度</span>
                    <span class="rz-num-b cGreen ng-binding">100.00%</span>
                </p>
                <span class="circlemark circlemark-green">已</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon clearfix">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">资料</span>
                    <span class="cGreen">18</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">合格</span>
                    <span class="rz-num-h cGreen ng-binding">18</span>
                </p>
                <span class="circlemark circlemark-green">已</span>
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
