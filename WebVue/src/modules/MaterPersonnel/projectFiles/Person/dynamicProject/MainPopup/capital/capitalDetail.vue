<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'惩罚'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
           <div class="analyItemCon clearfix">
                <div class="col-md-9">
                    <p class="col-md-4">
                        <span class="pr8">财务待</span>
                        <span class="ng-binding">0.00</span>
                    </p>
                    <p class="col-md-3">
                        <span class="pr8">人事待</span>
                        <span class="ng-binding">0.00</span>
                    </p>

                    <p class="col-md-4">
                        <span class="pr8">已执行</span>
                        <span class="ng-binding">0.00</span>
                    </p>
                    <p class="col-md-4">
                        <span class="pr8">待执行</span>
                        <span class="ng-binding">0.00</span>
                    </p>
                </div>

                <div class="col-md-3 tx-center">
                    <p class="fr mr10" style="margin: 0 auto;width: 100%;">
                        <span class="cLightGray pr8">总计</span>
                        <span class="cRed ng-binding">0.00</span>
                    </p>
                </div>

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
