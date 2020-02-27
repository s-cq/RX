<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【财务_记录查看】详情'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
       <ul class="clearfix uiTab3">
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==1}" @click="subSwitch(1)" data-title="此项目下支款记录"><a href="javascript:">支款记录</a></li>
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==2}" @click="subSwitch(2)" data-title="此项目下未付材料"><a href="javascript:">未付材料</a></li>
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==3}" @click="subSwitch(3)" data-title="此项目下罚款记录"><a href="javascript:">罚款记录</a></li>
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==4}" @click="subSwitch(4)" data-title="此项目下增减项记录"><a href="javascript:">增减项记录</a></li>
        </ul>
    </div>
    <div class="clearfix mb10 pl10 pr10 searchDis">
            <div class="">
                <select class="Bordercolorbox fl mr5 bor-ceee" id="KXType">
                    <option value="0">支出类型</option>
                    <option value="107">材料款</option>
                    <option value="108">人工款</option>
                    <option value="536">结算款</option>
                    <option value="-1">特殊支款</option>
                    <option value="471">工程款(联)</option>
                    <option value="167">应付转嫁款</option>
                    <option value="110">增项款</option>
                    <option value="109">钢结构款</option>
                    <option value="112">空调款</option>
                    <option value="113">消防款</option>
                    <option value="163">其他分项款</option>
                    <option value="145">物业押金</option>
                    <option value="146">物业管理费</option>
                    <option value="147">工程一切险</option>
                    <option value="162">人身意外险</option>
                    <option value="303">增项代购主材费</option>
                </select>
                <select class="Bordercolorbox fl mr5 bor-ceee" id="ZFType">
                    <option value="0" selected="selected">支付状态</option>
                    <option value="1">出纳已付</option>
                    <option value="2">待支付中</option>
                    <option value="3">已作废</option>
                </select>
                <input type="text" class="Bordercolorbox fl mr5 bor-ceee" style="width:100px" id="IDorRemarks" placeholder="备注">

            </div>
            <el-button class="fr" type="primary">搜索</el-button>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="">
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">装饰其他额</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2020-01-10</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>3,500.00</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
                                        <span style="color:green;">出纳已付</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支付日期</span><span>2020-01-10</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">收款人</span><span class="layerui-title" data-title="收款人：黄娟，收款账号：000，收款银行：交通银行">
                                    黄娟
                                </span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">收款账号</span><span class="layerui-title" data-title="000">
                                    000
                                </span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="CHTZ20200110165758-12<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer"  data-imgname="黄娟 支款凭证" data-msg="true">CH...8-12</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="付(单号：103-316)(项目名称：重庆融恩科技有限公司)装饰其他金额。">
                                <span class="cLightGray pr8">支款备注</span><span>付(单号：103-316)(项目名称：重...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="陈运凤">
                                    陈运凤
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">材料款</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2020-01-09</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>7,995.30</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
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
                            <p class="fl col-md-4 layerui-title" data-title="CHXM20200109115133-7<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/15786465463fewKGfrJi.jpg" data-imgname="【游真军】游真军 支款凭证" data-msg="true">CH...33-7</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="付：订单号：CH19015010S，单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，【游真军】材料款7995.30元">
                                <span class="cLightGray pr8">支款备注</span><span>付：订单号：CH19015010S，单号...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="张利芳">
                                    张利芳
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">材料款</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2020-01-09</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>119.00</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
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
                            <p class="fl col-md-4 layerui-title" data-title="CHXM20200109114025-6<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/1578646708iha8DBrZrS.jpg" data-imgname="【游真军】游真军 支款凭证" data-msg="true">CH...25-6</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="付：订单号：CH19015004S，单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，【游真军】材料款119.00元">
                                <span class="cLightGray pr8">支款备注</span><span>付：订单号：CH19015004S，单号...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="张利芳">
                                    张利芳
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">材料款</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2020-01-09</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>3,427.00</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
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
                            <p class="fl col-md-4 layerui-title" data-title="CHXM20200109113946-5<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/1578646742PRMAGABpbQ.jpg" data-imgname="【游真军】游真军 支款凭证" data-msg="true">CH...46-5</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="付：订单号：CH19015007S,CH19015006S,CH19015005S，单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，【游真军】材料款3427.00元">
                                <span class="cLightGray pr8">支款备注</span><span>付：订单号：CH19015007S,CH...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="张利芳">
                                    张利芳
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">材料款</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2020-01-09</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>12,516.00</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
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
                            <p class="fl col-md-4 layerui-title" data-title="CHXM20200109113912-4<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/1578646776PpWSa2k2RC.jpg" data-imgname="【游真军】游真军 支款凭证" data-msg="true">CH...12-4</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="付：订单号：CH19015002S，单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，【游真军】材料款12516.00元">
                                <span class="cLightGray pr8">支款备注</span><span>付：订单号：CH19015002S，单号...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="张利芳">
                                    张利芳
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">材料款</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2020-01-09</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>26,151.80</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
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
                            <p class="fl col-md-4 layerui-title" data-title="CHXM20200109100200-3<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/1578646806HmbfZGP7eW.jpg" data-imgname="【游真军】游真军 支款凭证" data-msg="true">CH...00-3</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="【自动】付：地区：重-川渝，订单号：CH19015008S,CH19015003S,CH19015009S,CH19015001S，单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，【游真军】材料款26151.80元">
                                <span class="cLightGray pr8">支款备注</span><span>【自动】付：地区：重-川渝，订单号：CH...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="系统">
                                    系统
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="analyItem">
                        <p class="analyItemTit tx-center">人工款</p>
                        <div class="analyItemCon">
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">申请日期</span><span>2019-12-27</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支款金额</span><span>136,000.00</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8" data-state="3">支款状态</span>
                                        <span style="color:green;">出纳已付</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">支付日期</span><span>2019-12-27</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">收款人</span><span class="layerui-title" data-title="收款人：0，收款账号：0，收款银行：0">
                                    0
                                </span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">收款账号</span><span class="layerui-title" data-title="0">
                                    0
                                </span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="CHXM20191227093309-88<br>点击查看支出凭证图片">
                                <span class="cLightGray pr8">凭证号</span>
                                    <span class="cBlue select_look" style="cursor:pointer" data-src="https://imginvest.rxjy.com/finance/1577422016QHNWeY52jN.jpg;https://imginvest.rxjy.com/finance/1577422017TpyJtnh2r6.jpg;https://imginvest.rxjy.com/finance/1577422017Bwf626nype.jpg" data-imgname="0 支款凭证" data-msg="true">CH...9-88</span>
                            </p>
                            <p class="fl col-md-4 layerui-title" data-title="【人工款特殊申请】付：地区：重-川渝，任务单号：103-316，合同号：CH19015，项目名称：重庆融恩科技有限公司装饰工程，项目经理：黄娟，实付金额：136000 元。地方反馈工地很着急需要批款投资人、邓总知晓">
                                <span class="cLightGray pr8">支款备注</span><span>【人工款特殊申请】付：地区：重-川渝，任...</span>
                            </p>
                            <p class="fl col-md-4">
                                <span class="cLightGray pr8">操作人</span><span class="layerui-title" data-title="张利芳">
                                    张利芳
                                </span>
                            </p>
                        </div>
                    </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class=" col-md-4">
                    <span class="cLightGray pr8">支出数目</span>
                     <span class="cLightGray pr8">7</span>
                </p>
                <p class=" col-md-4">
                    <span class="cLightGray pr8">支款金额</span>
                    <span class="cLightGray pr8">189709.10</span>
                </p>
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
