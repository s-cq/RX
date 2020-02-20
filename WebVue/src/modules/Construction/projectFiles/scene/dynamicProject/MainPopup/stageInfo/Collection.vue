<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'集巡'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">巡检</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">巡检小时</span>
                    <input type="text" name="name" value="" id="txtbeginTime" class="width100">小时
                </p>
                <p class="col-md-4">
                     <el-switch
                        v-model="value2"
                        active-text="开启"
                        inactive-text="关闭"
                    >
                    </el-switch>
                </p>
                <p class="col-md-2 tx-center"><span class="fr cRed">未开启</span></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">巡检中</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8 fl">结束日期</span>
                    --
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8 fl">剩余小时</span>
                    0小时
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">
                <div class="col-md-8">
                    <div class="Scroll clearfix Scroll_1 mb10">
                        <a href="javascript:" class="ScrollBtn Prev fl mr10 hide" style="display: none;"></a>
                        <div class="ScrollText fl">

                            <ul class="implementUl " id="FineDic" style="margin-left: 0px;">

                            </ul>
                        </div>
                        <a href="javascript:" class="ScrollBtn Next fl ml10 hide" style="display: none;"></a>
                    </div>
                </div>
                <div class="col-md-4" style="margin-top:24px;">
                    <span class="cLightGray pr8 fl">张数</span> <span id="zhangshu">0</span> 张
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                   <el-switch
                        v-model="value1"
                        active-text="解除巡检"
                        inactive-text="开启巡检"
                    >
                    </el-switch>
                </p>
                <p class="col-md-4">&nbsp;</p>
                <p class="col-md-2 tx-center"><span class="fr cRed">未解除</span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3"></p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p>
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            value1: true,
            value2: true
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
