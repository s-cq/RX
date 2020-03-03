<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【审计_项目奖罚】详情'}"></three-title>
    <ul class="clearfix uiTab3 pl10 mb10">
        <li class="uiTab3-active"><a href="javascript:">记录</a></li>
    </ul>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center" title="24196">罚款1</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请日期</span><span>2020-02-22</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">罚款人</span><span>彭秀林</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">罚款来源</span>
                    <span>地方监理</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">来源</span><span>集团罚款</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">金额</span><span>2,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">罚款状态</span>
                    <span><span style="color:red">未扣除</span></span>
                </p>
                <p class="fl col-md-4 layerui-title" data-title="">
                    <span class="cLightGray pr8">审批时间</span><span>2020-02-22</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">审核状态</span>
                            <span style="color:green">已审核</span>
                </p>
                <p class="fl col-md-4 layerui-title" data-title="罚款备注说明：从任务单号【111-1500】下处理项目经理【彭秀林】罚款金额：【2000.00】元 【项目罚款】地区：金水，任务单号：111-1500，项目名称：河南省同建建筑设计有限公司装饰工程，项目经理：彭秀林，本次罚款：2000.0元；罚款类型：奖罚-自查；罚款原因：未操作系统， 未上传延期单，按照通知下发罚款2000，操作人：系统自动 操作人：00000079  罚款系统来源：集团巡检  已罚金额：0.0000">
                    <span class="cLightGray pr8">罚款备注</span><span class="alertTitle">从任务单号【11...</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
               <div class="analyItemCon">
                <div class="clearfix">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">个数</span><span>0</span><!--正常/待处理/紧急-->
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">罚款合计</span><span>0.00</span><!--正常/待处理/紧急-->
                    </p>
                    <p class="col-md-4 lh28">
                        <span class="c999 pr10"></span>
                            <input type="button" value="奖罚清零" class="uiBtn-blue uiBtn-small btnpost">
                            <span class="circlemark circlemark-lightRed">未</span>
                    </p>
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
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
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
<style lang="scss" scoped>
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .staticSRyle {
        width: 25px;
        line-height: 25px!important;
        top: 2px;
        left: 2px;
        background: #000;
        opacity: .6;
        height: 25px;
        position: absolute;
        border-radius: 5px;
        color: #fff;
        text-align: center;
    }
</style>
