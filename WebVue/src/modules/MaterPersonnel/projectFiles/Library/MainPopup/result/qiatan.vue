<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'洽谈'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">洽商</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">洽商:</span>
                    <span>{{leNegotiation}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">加分</span>
                    <span>{{leNegotiationScore}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                 <p class="col-md-6">
                    <span class="cLightGray pr8">洽商:</span>
                    <span>{{leNegotiation}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">加分</span>
                    <span>{{leNegotiationScore}}</span>
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
            leNegotiation: '',
            leNegotiationScore: ''
        }
    },
    created () {
        this.leNegotiation = this.$route.query.leNegotiation
        this.leNegotiationScore = this.$route.query.leNegotiationScore
    },
    methods: {

    }
}
</script>
