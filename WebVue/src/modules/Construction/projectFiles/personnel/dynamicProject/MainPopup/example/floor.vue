<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'楼盘信息详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">施工时间</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">施工时间</span><span>无</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料要求</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">防火等级</span><span>无</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">环保等级</span><span>无</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">保护要求</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">保护材料</span><span>无</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">围挡</span><span>无</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">消防维保</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">维保</span><span>无</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">维保公司</span><span>无</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">空调维保</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">维保</span><span>无</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">维保公司</span><span>无</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">物业要求</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">物业要求</span><span>无</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">物业信息</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">负责人电话</span><span>无</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">面积</span><span>无</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">保修期</span><span>无</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    }
}
</script>
