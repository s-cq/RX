<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【其他_处理版块】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270">
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
    <div class="layerRtb-footer" style="height:270px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="clearfix">
            <div class="col-md-7 handle-left " style="min-height: 172px;">
                <div class="clearfix">
                    <!-- <h2 class="uiTitle2 mt3">
                        <i class="uiTitle-icon"></i>
                        处理
                    </h2> -->
                    <ul class="handle-ul mt5">
                        <li @click="changeColor(index)" :class="{'current':color==index}" v-for="(item,index) in arr" :key="index">{{item}}</li>
                        <!-- <li class="current">正常</li>
                        <li>异常</li>
                        <li>问题</li>
                        <li>坏账</li> -->
                    </ul>
                </div>
                <div class="pr10">
                    <textarea class="evaluate-textarea" style="width: 100%; height: 66px; padding: 4px 8px;"></textarea>
                </div>
            </div>
            <div class="col-md-5 fl operate-bottomDiv EventBanner operate-bottomR pt20 pl10 relative" style="overflow: hidden;">
                <div class="pt10 tx-center" style="padding:96px 0 10px;">
                    <input type="button" class="uiBtn-normal uiBtn-blue  operate-submit" value="提交" >
                </div>
             </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            color: 0,
            arr: ['正常', '异常', '问题', '坏账']
        }
    },
    created () {

    },
    methods: {
        changeColor (val) {
            this.color = val
        }
    }
}
</script>
<style lang="scss" scoped>
.evaluate-textarea {
    width: 100%;
    height: 66px;
    padding: 4px 8px;
}
</style>
