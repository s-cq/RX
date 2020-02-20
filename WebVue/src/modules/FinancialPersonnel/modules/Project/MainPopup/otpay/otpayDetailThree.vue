<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'[其他_'+type+']详情'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
        <ul class="clearfix uiTab3">
            <li :class="{'uiTab3-active':flg==1}"><a @click="flg=1" href="javascript:">科目</a></li>
            <li  :class="{'uiTab3-active':flg==2}"><a @click="flg=2" href="javascript:">记录</a></li>
        </ul>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
         <div v-if="flg==1&&type==='客户代购'" class="">
                <div class="analyItem">
                    <p class="analyItemTit tx-center">可用额度</p>
                    <div class="analyItemCon clearfix">
                        <div class="fl tx-center col-md-3">
                            <span class="cLightGray pr8 cRed" data-title="钢结构款可支付额度 =（增项分账总额 * 0.7） - 已付/待付增项">可支付额度</span>
                            <span class="cRed">0.00</span>
                        </div>
                        <div class="fl tx-center col-md-9">
                            <span class="pr8">公式</span>
                            <span style="color:#09f">钢结构款可用额度 =（钢结构款发包金额 / 最终同金额 * 总回款额) - 已付/待付钢结构款</span>
                        </div>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">钢结构款</p>
                    <div class="analyItemCon clearfix">
                        <div class="fl tx-center col-md-3">
                            <div class="clearfix mb10"><input type="text" id="FXMoney" placeholder="请输支款额" class="jm_tab_inp number fl" style="width:100px" maxlength="9"></div>
                        </div>
                        <div class="fl tx-center col-md-6">
                            <textarea class="jm_table_textarea_z" placeholder="请输支款人备注信息" id="txtZKRemarks" style="width:220px"></textarea>
                        </div>
                            <div class="fl col-md-3">
                                <input type="button" data-subject="109" data-dept="5" title="钢结构款" value="钢结构款" data-wfmoney="0.00" data-money="0" data-payee="" class="uiBtn-large uiBtn-blue canpay">
                            </div>
                    </div>
                </div>
        </div>
        <div v-if="flg==1&&type!=='客户代购'" class="analyItem">
          <p class="analyItemTit tx-center">其他费支出</p>
          <div class="analyItemCon clearfix pr5">
              <div class="fl tx-center col-md-3">
                  <input type="text" id="FXMoney" class="jm_tab_inp number" placeholder="请输支款额" style="width:100px" maxlength="9">
              </div>
              <div class="fl tx-center col-md-3">
                  <textarea class="jm_table_textarea_z" placeholder="请输支款人备注信息" id="txtZKRemarks" style="width:150px"></textarea>
              </div>
                      <div class="fl col-md-12 mb5">
                          <span class="cRed">抱歉，此科目无未付金额！</span>
                      </div>
          </div>
        </div>
        <div v-if="flg==2">
             <span style="text-align:center;color:red">预留信息</span>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            flg: 1,
            type: '',
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
        }
    },
    created () {
        this.type = this.$route.query.index
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    },
    watch: {
        $route () {
            this.type = this.$route.query.index
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
