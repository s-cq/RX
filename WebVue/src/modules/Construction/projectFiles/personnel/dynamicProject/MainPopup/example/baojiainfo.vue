<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'报价详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">多报</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">多报</span><span>0项</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">总金额</span>0.00<span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A：详情</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">0分</span><span></span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">少报</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">少报</span><span>0项</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">总金额</span>0.00<span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A：详情</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">0分</span><span></span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">临时</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">总共</span><span>0项</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A：详情</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">0分</span><span></span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3 pr"><span class="cLightGray pr8">分数</span><span>0分</span></div>
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
