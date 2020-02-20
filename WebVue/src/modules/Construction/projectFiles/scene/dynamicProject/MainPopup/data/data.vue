<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'在施'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">打印说明</p>
            <div class="analyItemCon">
                <p>
                    <span class="cLightGray pr8">1、设置计算机连接打印机</span>
                </p>
                <p>
                    <span class="cLightGray pr8">2、点击资料打印</span>
                </p>
                <p>
                    <a href="https://jingyan.baidu.com/article/ad310e8091caa21848f49e78.html" class="cBlue goTaobao fz14" target="_blank">设置打印机说明</a>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">注意安全</p>
            <div class="analyItemCon">
               <div class="analyItemCon">
                    <a href="http://px.rxjy.com/Manager/ManageMent/PrintSafeImg?rwdId=20-206878" class="cBlue under_line dis-il-block fl" style="width:80px;" target="_blank">注意安全</a>
                    <span class=" fl ml10" style="margin-top:3px;"><input type="checkbox" checked="checked" disabled="" class="fl  infoPrintCheck" data-amid="25" data-value="25"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总数</span>
                    <span class="fw700 ">14</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">打印次数</span>
                    <span class="fw700 cGreen">0</span>
                </p>
                <p class="col-md-4">
                    <input type="button" value="批量打印" class="uiBtn-normal uiBtn-blue batchprintbtn">
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
            fourIndex: undefined
        }
    },
    created () {
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>

