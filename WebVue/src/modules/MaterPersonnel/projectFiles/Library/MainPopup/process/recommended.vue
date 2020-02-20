<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'推荐'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">推荐</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">未签（加分）</span>
                    <span>{{leRefereeUnsignedScore}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">已签（加分）</span>
                    <span>{{leRefereeSignedScore}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">未签（加分）</span>
                    <span>{{leRefereeUnsignedScore}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">已签（加分）</span>
                    <span>{{leRefereeSignedScore}}</span>
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
            leRefereeUnsignedScore: '',
            leRefereeSignedScore: ''
        }
    },
    created () {
        this.leRefereeUnsignedScore = this.$route.query.leRefereeUnsignedScore
        this.leRefereeSignedScore = this.$route.query.leRefereeSignedScore
    },
    methods: {

    }
}
</script>
