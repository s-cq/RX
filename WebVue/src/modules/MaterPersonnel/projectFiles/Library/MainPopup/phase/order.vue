<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'接单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">总金额</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">{{(leReceiptMoney/10000).toFixed(2)}}万</span>
                    <span></span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">金额</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">{{(leReceiptNum/10000).toFixed(2)}}万</span>
                    <span></span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                 <p class="col-md-4">
                     <span>总金额</span>
                    <span class="cLightGray pr8">{{(leReceiptMoney/10000).toFixed(2)}}万</span>
                </p>
                <p class="col-md-4">
                    <span>单项目金额</span>
                    <span class="cLightGray pr8">{{(leReceiptNum/10000).toFixed(2)}}万</span>
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
            leReceiptMoney: '',
            leReceiptNum: ''
        }
    },
    created () {
        this.leReceiptNum = this.$route.query.leReceiptNum
        this.leReceiptMoney = this.$route.query.leReceiptMoney
    },
    methods: {

    }
}
</script>
