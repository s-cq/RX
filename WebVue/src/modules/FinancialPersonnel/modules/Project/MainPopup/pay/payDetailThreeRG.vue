<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【支款_人工款】详情'}"></three-title>
    <div class="pl10 mb10">
        <el-button type="primary">记录</el-button>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
       <div class="analyItem">
            <p class="analyItemTit tx-center">人工款1</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请日期</span><span>2019-12-27</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请金额</span><span>136,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">支款状态</span>
                                <span style="color:green;">出纳已付</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">支付日期</span><span>2019-12-27</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">收款人</span><span class="layerui-title" data-title="收款人：0，收款账号：0，收款银行：0">0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">收款账号</span><span class="layerui-title" data-title="0">0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">凭证号</span><span class="layerui-title" data-title="CHXM20191227093309-88">
                        <span class="cBlue select_look layerui-title" data-title="点击查看支出凭证图片" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/1577422016QHNWeY52jN.jpg;https://imginvest.rxjy.com/finance/1577422017TpyJtnh2r6.jpg;https://imginvest.rxjy.com/finance/1577422017Bwf626nype.jpg" data-imgname="0 支款凭证" data-msg="true">CH...9-88</span>
                    </span>
                </p>
                <p class="fl col-md-4 layerui-title" data-title="【人工款特殊申请】付：地区：重-川渝，任务单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，项目经理：黄娟，实付金额：136000 元。地方反馈工地很着急需要批款投资人、邓总知晓">
                    <span class="cLightGray pr8">支款备注</span><span>【人工款特殊申请】付：地...</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="张利芳">
                        张利芳
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
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
            fourIndex: undefined
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
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
