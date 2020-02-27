<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【支款_材料款】详情'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
       <ul class="clearfix uiTab3">
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==1}" @click="subSwitch(1)" data-title="材料支款待办"><a href="javascript:">操作</a></li>
            <li class=" layerui-title" :class="{'uiTab3-active':subIndex==2}" @click="subSwitch(2)" data-title="材料支款记录"><a href="javascript:">记录</a></li>
        </ul>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="subIndex==1" class="">
                  <div class="analyItem">
                      <p class="analyItemTit tx-center">可用额度</p>
                      <div class="analyItemCon clearfix">
                          <div class="fl tx-center col-md-3">
                              <span class="cLightGray pr8 cRed" data-title="增项可支付额度 =（增项分账总额 * 0.7） - 已付/待付增项">可支付额度</span>
                              <span class="cRed">0.000</span>
                          </div>
                          <div class="fl tx-center col-md-9">
                              <span class="pr8">公式</span>
                              <span style="color:#09f">增项可支付额度 =（增项分账总额 * 0.7） - 已付/待付增项</span>
                          </div>
                      </div>
                  </div>
                  <div class="analyItem">
                      <p class="analyItemTit tx-center">增项款支出</p>
                      <div class="analyItemCon clearfix">
                          <div class="fl tx-center col-md-3">
                              <input type="text" id="ZXMoney" class="jm_tab_inp number" style="width:100px" maxlength="8" placeholder="支款金额">
                          </div>
                          <div class="fl tx-center col-md-6">
                              <textarea class="jm_table_textarea_z" placeholder="请输支款人备注信息" id="txtZKRemarks" style="width:220px"></textarea>
                          </div>
                          <div class="fl col-md-3">
                                  <input type="button" data-subject="110" data-dept="5" title="增项款" value="增项款" data-wfmoney="0.00" data-money="0.000" data-payee="黄娟" class="uiBtn-large uiBtn-blue canpay">

                          </div>
                      </div>
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
       <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">个数</span><span>0</span><!--正常/待处理/紧急-->
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">支款合计</span><span>0.00</span><!--正常/待处理/紧急-->
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span class="circlemark circlemark-green">完</span>
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
