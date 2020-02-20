<template>
<div class="">
    <div class="pr10">
        <div class="analyItem relative">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <p class="col-md-4 cGreen bold"><span class="">方案</span></p>
                <span class="circlemark circlemark-lightRed">差</span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <div tag="div" class="analyItem analyItem-visited">
            <p class="analyItemTit tx-center">接单</p>
            <div class="analyItemCon clearfix relative">
                <p class="fl col-md-4"><span class="cLightGray pr5">用时</span><span title="">4h</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr5">标准</span><span title="">24h</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr5">差值</span><span title="">20h</span></p>
                <span class="circlemark circlemark-green">优</span>
            </div>
        </div>
        <div tag="div" class="analyItem analyItem-visited">
            <p class="analyItemTit tx-center">量房</p>
            <div class="analyItemCon clearfix relative">
                <p class="fl col-md-4"><span class="cLightGray pr5">完整度</span><span title="">74.47%</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr5">标准</span><span title="">95%</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr5">差值</span><span title="">-20.53%</span></p>
                <p class="fl col-md-5"><span class="cRed">资料完整度低（-20.53%）</span></p>
                <span class="circlemark circlemark-yellow">中</span>
            </div>
        </div>
        <div class="analyItem anItemBor analyItem-current">
            <p class="analyItemTit tx-center">方案</p>
            <div class="analyItemCon clearfix ">
                <div class="col-md-12">
                    <p class="fl col-md-4"><span class="cLightGray pr5">效率</span><span>-1580h</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr5">标准</span><span>36h</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr5">差值</span><span>1616</span></p>
                </div>
                <div><span class="circlemark circlemark-green">优</span></div>
            </div>
        </div>
        <div class="analyItem anItemBor">
            <p class="analyItemTit tx-center">预算</p>
            <div class="analyItemCon">
                <p class="fl col-md-4" style="display: none;"><span class="cLightGray pr5">投资</span><span title="">10.00万</span></p>
                <p class="fl col-md-4" style="display: none;"><span class="cLightGray pr5">预估</span><span class="" title="">7.65万</span></p>
                <p class="fl col-md-12" style="display: none;"><span  class="cGreen">如方案已定，建议在36小时内做预算。</span></p>
                <p class="fl col-md-4" style=""><span class="cLightGray pr8">状态</span><span class="cGreen">已通过</span></p>
                <p class="fl col-md-4" style=""><span class="cLightGray pr5">金额</span><span title="">19.80万</span></p>
                <p class="fl col-md-4 unlineState cLightColor" style=""><span class="cLightGray pr5">差值</span><span class="cLightGray ">12.15万</span> <span  title="" class="cRed">（偏高）</span></p>
                <div class="fixedTrangle"><span href="javascript:" class="fixedtips"></span>
                    <div class="fixedtipscon pt10 pb10" style="display: none;"><span class="dis-il-block">未提：报价未提交</span><br>
                        <span class="dis-il-block">待审：报价待审核</span><br >
                        <span class="dis-il-block">通过：报价已通过</span><br >
                        <span class="dis-il-block">打回：报价已打回</span><br >
                        <span class="dis-il-block">紧急：报价紧急导出</span>
                    </div>
                </div>
            </div>
        </div>
        <div tag="div" class="analyItem relative">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon clearfix ">
                <p class="fl col-md-8"><span class="cLightGray pr5">设计</span>
                    <span title="">-</span></p>
                <p class="fl col-md-4"></p>
                <p class="unlinePosition"><span class="cLightGray pr5 unline">设计</span>
                    <span class="cLightGray pr5 unline">施工</span></p>
            </div>
        </div>
        <div class="analyItem relative">
            <p class="analyItemTit tx-center">洽谈</p>
            <div class="analyItemCon clearfix ">
                <p class="fl col-md-4"><span class="cLightGray pr5">回访率</span><span>36.14%</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr5">标准</span><span title="">95%</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr5">差值</span><span title="">-58.86%</span></p>
                <p class="fl col-md-4"><span class="cRed">回访差（-58.86%）</span></p><i class="circlemark circlemark-lightRed">差</i>
            </div>
        </div>
        <div tag="div" class="analyItem relative">
            <p class="analyItemTit tx-center">未签</p>
            <div class="analyItemCon clearfix ">
                <p class="unlinePosition"><span class="cLightGray pr5 unline" style="display: none;">批复</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: '',
    data () {
        return {

        }
    }
}
</script>
