<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'审计'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGreen pr8">固定账号</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGreen pr8">审核完成</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGreen pr8">总审完成</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">监理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGreen pr8">袁精材已接单</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客服</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">APP</span>
                    <span class="cRed pr8">未激活</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">外人</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGreen pr8">已完成</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">财务</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">收款日期</span>
                    <span class="cGreen pr8">已确认</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">材料商</span>
                    <span class="cGreen pr8">完</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">设计师</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">漏量漏项</span>
                    <span class="cRed pr8">有</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">设计师</span>
                    <span class="cRed pr8">未确认</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">经理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">分配监理</span>
                    <span class="cGreen pr8">袁精材</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">打点</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">工序确认</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">总检确认</span>
                    <span class="cRed pr8">未完</span>
                </p>
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

        }
    },
    created () {

    },
    methods: {

    }
}
</script>
