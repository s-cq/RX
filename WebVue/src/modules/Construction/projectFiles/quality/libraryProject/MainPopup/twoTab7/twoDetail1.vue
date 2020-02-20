<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'名片'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit  tx-center">名片</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="cLightGray pr8">编号</span>
                    <span>0202</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">类</span>
                    <span>组装</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">科目</span>
                    <span>饰面板装饰</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8 fl">子目</span>
                    <span>横铺</span>
                </p>

                <p class="col-md-2">
                    已选 2
                </p>

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit  tx-center">报价</p>
            <div class="analyItemCon">
                <div class="col-md-9">
                    <select>
                        <option>科目类</option>
                        <option>科目一</option>
                        <option>科目二</option>
                        <option>科目三</option>
                    </select>

                    <select>
                        <option>子目类</option>
                        <option>子目一</option>
                        <option>子目二</option>
                        <option>子目三</option>
                    </select>

                    <select>
                        <option>项目</option>
                        <option>项目一</option>
                        <option>项目二</option>
                        <option>项目三</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <input class="uiBtn-normal uiBtn-blue" type="button" value="选择">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit  tx-center">项目一</p>
            <div class="analyItemCon clearfix">
                <p class="col-md-1">&nbsp;</p>
                <p class="col-md-5">顶面类</p>
                <p class="col-md-5">石膏板吊顶</p>
                <p class="col-md-1"></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit  tx-center">项目二</p>
            <div class="analyItemCon clearfix">
                <p class="col-md-1">&nbsp;</p>
                <p class="col-md-5">顶面类</p>
                <p class="col-md-5">石膏板吊顶</p>
                <p class="col-md-1"></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-3">已选</p>
                <p class="col-md-4">2项</p>
                <p class="col-md-3"> <input class="uiBtn-normal uiBtn-blue" type="button" value="确定"></p>
                <p class="col-md-2">2项</p>
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
