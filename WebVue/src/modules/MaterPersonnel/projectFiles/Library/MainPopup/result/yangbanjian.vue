<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'样板间'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">样板间</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">样板奖金:</span>
                    <span>{{leScreedBonus}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">加分:</span>
                    <span>{{leScreedBonusScore}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                 <p class="col-md-6">
                    <span class="cLightGray pr8">样板奖金:</span>
                    <span>{{leScreedBonus}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">加分:</span>
                    <span>{{leScreedBonusScore}}</span>
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
            leScreedBonus: '',
            leScreedBonusScore: ''
        }
    },
    created () {
        this.leScreedBonus = this.$route.query.leScreedBonus
        this.leScreedBonusScore = this.$route.query.leScreedBonusScore
    },
    methods: {

    }
}
</script>
