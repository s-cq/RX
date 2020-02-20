<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'主案图标'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">主案图标</p>
            <div class="analyItemCon">
              <div class="col-md-12">
                    <rx-viewer :images="data2">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data2" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            data2: []
        }
    },
    created () {
        setTimeout(() => {
            this.data2 = [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
            ]
        }, 1000)
    },
    methods: {

    }
}
</script>
