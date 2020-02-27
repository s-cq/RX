<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【支款_材料款】详情'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
       <ul class="clearfix uiTab3">
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==1}" @click="subSwitch(1)" data-title="材料支款待办"><a href="javascript:">待办</a></li>
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==2}" @click="subSwitch(2)" data-title="材料支款记录"><a href="javascript:">记录</a></li>
        </ul>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="subIndex==2" class="analyItem">
            <p class="analyItemTit tx-center">材料款1</p>
            <div class="analyItemCon">
                <!--√ × 按钮及评分-->
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请日期</span><span>2020-01-09</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请金额</span><span>7,995.30</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">支款状态</span>
                            <span style="color:green;">出纳已付</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">支付日期</span><span>2020-01-10</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">收款人</span><span class="layerui-title" data-title="收款人：【游真军】游真军，收款账号：6228480478805826771，收款银行：农业银行">
                        【游真军】游...
                    </span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">收款账号</span><span class="layerui-title" data-title="6228480478805826771">
                        6228480478...
                    </span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">凭证号</span><span class="layerui-title" data-title="CHXM20200109115133-7">
                        <span class="cBlue select_look layerui-title" style="cursor:pointer" data-title="点击查看支出凭证图片" data-src="https://imginvest.rxjy.com/finance/15786465463fewKGfrJi.jpg" data-imgname="【游真军】游真军 支款凭证" data-msg="true">CH...33-7</span>
                    </span>
                </p>
                <p class="fl col-md-4 layerui-title" data-title="付：订单号：CH19015010S，单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，【游真军】材料款7995.30元">
                    <span class="cLightGray pr8">支款备注</span><span>付：订单号：CH1901...</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">操作人</span><span class=" layerui-title" data-title="张利芳">
                        张利芳
                    </span>
                </p>
            </div>
                            </div>
        <div v-else class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                        <span>0</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                        <span class="c666">--</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                    <span class="c666">0</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">预留</span>
                    <span class="c666">0</span>
                    <!-- <span class="c666"><span style="color:red; font-weight:bolder">-9</span></span> -->
                    <span class="circlemark circlemark-lightRed layerui-title" data-title="延期未回款">差</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
         <div class="analyItem ">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="clearfix">
                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">配送合计</span><span>0.00</span><!--正常/待处理/紧急-->
                    </p>
                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">已付合计</span><span>0.00</span><!--出纳已付/出纳代付/作废-->
                    </p>
                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">未付合计</span><span>0.00</span><!--出纳已付/出纳代付/作废-->
                    </p>
                    <p class="col-md-3 lh28">
                        <span class="c999 pr10"></span>
                            <input type="button" value="材料款清账" class="uiBtn-blue uiBtn-small btnpost">
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <pay-four v-if="fourIndex === 0" :key="0"></pay-four>
    </transition-group>
</div>
</template>
<script>
import payFour from './four/payFour'
export default {
    components: {
        payFour
    },
    data () {
        return {
            subIndex: 1,
            fourIndex: undefined
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
        subSwitch (index) {
            this.subIndex = index
        },
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
<style scoped>
.uiTab3 li{
    margin-right:5px
}
</style>
