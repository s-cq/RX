<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'安全员证'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">安全员证</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">{{leSecurityOpen===0?'未开启':'开启'}}</span>
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
                   <span>安全员证</span>
                    <span class="cLightGray pr8">{{leSecurityOpen===0?'未开启':'开启'}}</span>
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
            leSecurityOpen: ''
        }
    },
    created () {
        this.leSecurityOpen = this.$route.query.leSecurityOpen
    },
    methods: {

    }
}
</script>
