<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'临时'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">Z3-临时</p>
            <div class="analyItemCon clearfix">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">姓名</span>
                    <span class="newjiamengName ng-binding">张国平</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">身份证号</span>
                    <span class="ng-binding">512926197311151858</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">银行账户</span>
                    <span class="ng-binding">6222083202014093179</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">银行开户行</span>
                    <span class="ng-binding">工商银行</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">身份证正面</span>
                    <a href="javascript:" class="info_noup zl_pass largePhoto" data-img="https://proj01.oss-cn-beijing.aliyuncs.com/common/1568698303pGCr4XXpDE.jpg" data-imgname="1"></a>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">身份证反面</span>
                    <a href="javascript:" class="info_noup zl_pass largePhoto" data-img="https://holding01.oss-cn-beijing.aliyuncs.com/2019919151931489742671.jpg" data-imgname="1"></a>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">合作意向书</span>
                    <a class="info_noup xy_pass" href="javascript:"></a>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">体检报告</span>
                    <a href="javascript:" class="info_noup zl_shenhe largePhoto" data-img="" data-imgname=""></a>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">银行卡</span>
                    <a href="javascript:" class="info_noup zl_pass largePhoto" data-img="https://holding01.oss-cn-beijing.aliyuncs.com/2019919152035111145417.jpg" data-imgname="1"></a>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">证件照</span>
                    <a href="javascript:" class="info_noup zl_pass largePhoto" data-img="https://holding01.oss-cn-beijing.aliyuncs.com/201991817211886863956.jpg" data-imgname="1"></a>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8 width70s">艺术照</span>
                    <a href="javascript:" class="info_noup zl_pass largePhoto" data-img="https://proj01.oss-cn-beijing.aliyuncs.com/common/1568698980cw4WZhMbXP.jpg" data-imgname="1"></a>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">押金</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已缴交</span>
                    <span class="cGreen">0</span>
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
