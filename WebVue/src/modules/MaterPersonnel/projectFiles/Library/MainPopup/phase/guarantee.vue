<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'保障'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">保障</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">{{leEnsureRisks===0?'关闭':'开启'}}</span>
                    <span></span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">加点</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">{{leEnsureLittle===0?'关闭':'开启'}}</span>
                    <span></span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span>保障</span>
                    <span class="cLightGray pr8">{{leEnsureRisks===0?'关闭':'开启'}}</span>
                </p>
                <p class="col-md-6">
                    <span>加点</span>
                    <span class="cLightGray pr8">{{leEnsureLittle===0?'关闭':'开启'}}</span>
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
            leEnsureLittle: '',
            leEnsureRisks: ''
        }
    },
    created () {
        this.leEnsureLittle = this.$route.query.leEnsureLittle
        this.leEnsureRisks = this.$route.query.leEnsureRisks
    },
    methods: {

    }
}
</script>
