<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'押金'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">押金</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">押金</span>
                    <span>{{(leDeposit/10000).toFixed(2)}}万</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                    <span class="cLightGray pr8">押金</span>
                    <span>{{(leDeposit/10000).toFixed(2)}}万</span>
                </p>
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            leDeposit: ''
        }
    },
    created () {
        this.leDeposit = this.$route.query.leDeposit
    },
    methods: {

    }
}
</script>
