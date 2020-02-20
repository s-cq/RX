<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'退单'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-if="refund.length>0">
            <div class="analyItem"  v-for="(item,index) in refund" :key="index">
                <p class="analyItemTit tx-center"></p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">{{item.pmDepositRemark}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center"></p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
                        </p>
                    </div>
                </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            refund: []
        }
    },
    created () {

    },
    methods: {

    }
}

</script>
