<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'满意度'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">满意度</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">加分：</span>
                    <span>{{leDegreeScore}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">加分：</span>
                    <span>{{leDegreeScore}}</span>
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
            leDegreeScore: ''
        }
    },
    created () {
        this.leDegreeScore = this.$route.query.leDegreeScore
    },
    methods: {

    }
}
</script>
