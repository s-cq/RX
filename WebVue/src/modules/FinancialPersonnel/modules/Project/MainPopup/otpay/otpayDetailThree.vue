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
        <div v-if=" flg==1 && type!== '客户代购' " class="analyItem">
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
            <div v-if=" paymentRecordList.length > 0">
                <div class="analyItem"  v-for="(item, index) in paymentRecordList" :key="index">
                    <p class="analyItemTit tx-center">{{item.typeName}}</p>
                    <div class="analyItemCon">
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">申请日期</span><span>{{formatDate(item.CreateDate)}}</span>
                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">支款金额</span><span>{{item.DebitAll.toFixed(2)}}</span>
                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8" data-state="3">支款状态</span>
                                    <!-- <span style="color:green;"></span> -->
                                {{GrantStatus(item.Status,item.GrantStatus)}}
                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">支付日期</span><span>{{formatDate(item.Time)}}</span>
                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">收款人</span><span class="layerui-title">
                                {{item.Payee.substr(0,5) }}
                            </span>
                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">收款账号</span><span class="layerui-title" :data-title="item.PayeeBankNo">
                                {{item.PayeeBankNo.substr(0,10)}}...
                            </span>
                        </p>
                        <p class="fl col-md-4 layerui-title"  :data-title="item.Code+'<br>点击查看支出凭证图片'">
                            <span class="cLightGray pr8 fl">凭证号</span>
                            <rx-viewer class="fl">
                                <div class="clearfix">
                                    <div class="col-md-12" v-for="(itemImg, Imgindex) in item.ImageURL.split(';')" :key='Imgindex'>
                                        <span :class="['enlarge_viewer','cBlue', 'select_look', Imgindex !== 0 ? 'hide' : '']" style="cursor:pointer" :data-src="itemImg">{{item.Code.substr(0,2)}}...{{item.Code.substr(16,item.Code.lenth)}}</span>
                                        <img :src="itemImg" style="display:none">
                                    </div>
                                </div>
                            </rx-viewer>
                        </p>

                        <p class="fl col-md-4 layerui-title" :data-title="item.Summary1" >
                            <span class="cLightGray pr8">支款备注</span><span>{{item.Summary1.substr(0,15)}}...</span>

                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">操作人</span><span class="layerui-title">
                                    {{item.SourceBy}}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <span v-else  class="cRed">对不起，暂无此分项【支款】数据记录！</span>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p> -->
                <span class="circlemark circlemark-green">完</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPaymentRecord } from '../../Resources/Api'
export default {
    data () {
        return {
            flg: 1,
            type: '',
            SubjectB1: '',
            fourIndex: undefined,
            paymentRecordList: [] // 支款记录
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        // this.type = this.$route.query.index
        // this.SubjectB1 = this.$route.query.type
        // this.load()
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        // 默认加载
        load () {
            let param = {
                orderNo: this.leftInfo.orderno, // this.leftInfo.orderno
                type: this.SubjectB1
            }
            // 查询材料数据
            getPaymentRecord(param).then(results => {
                this.paymentRecordList = results.data.Body.paymentRecordList
            }).catch(() => {})
        }, // 时间转换
        formatDate (value) {
            let date = new Date(value)
            let y = date.getFullYear()
            let MM = date.getMonth() + 1
            MM = MM < 10 ? ('0' + MM) : MM
            let d = date.getDate()
            d = d < 10 ? ('0' + d) : d
            return y + '-' + MM + '-' + d
        },
        // 支款状态
        GrantStatus (Status, GrantStatus) {
            let str = ''
            if (Status === 1) {
                if (GrantStatus === 3) {
                    str = '出纳已付'
                } else if (GrantStatus === 2) {
                    str = '待出纳上传凭证'
                } else {
                    str = '出纳待办'
                }
            } else if (Status === 3) { // 冻结  需要作废
                str = '已作废'
            } else if (Status === 4) { // 已作废
                str = '出纳作废'
            }
            return str
        }
    },
    watch: {
        $route () {
            this.type = this.$route.query.index
            this.SubjectB1 = this.$route.query.type
            this.load()
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
