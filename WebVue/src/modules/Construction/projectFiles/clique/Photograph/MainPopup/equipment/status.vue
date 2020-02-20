<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'状态'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">地区</span><span>{{ leftInfo.region_name }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">项目</span><span></span></p>
                <p class="col-md-6"><span class="cLightGray pr8">监理</span><span></span></p>
                <p class="col-md-6"><span class="cLightGray pr8">领取时间</span><span></span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
</div>
</template>
<script>
// Vuex
import { mapGetters } from 'vuex'
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
