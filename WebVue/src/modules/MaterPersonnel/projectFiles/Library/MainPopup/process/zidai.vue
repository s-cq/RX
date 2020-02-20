<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'自带单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">自带单</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">未签（加分）:</span>
                    <span>{{leSelfUnsignedScore}}</span>
                </p>
                 <p class="col-md-6">
                    <span class="cLightGray pr8">已签（加分）:</span>
                    <span>{{leSelfSignedScore}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                 <p class="col-md-6">
                    <span class="cLightGray pr8">未签（加分）:</span>
                    <span>{{leSelfUnsignedScore}}</span>
                </p>
                 <p class="col-md-6">
                    <span class="cLightGray pr8">已签（加分）:</span>
                    <span>{{leSelfSignedScore}}</span>
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
            leSelfUnsignedScore: '',
            leSelfSignedScore: ''
        }
    },
    created () {
        this.leSelfUnsignedScore = this.$route.query.leSelfUnsignedScore
        this.leSelfSignedScore = this.$route.query.leSelfSignedScore
    },
    methods: {

    }
}
</script>
