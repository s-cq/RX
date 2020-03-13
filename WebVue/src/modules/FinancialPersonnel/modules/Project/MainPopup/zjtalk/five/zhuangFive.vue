<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'【分项_增减项】详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
            <div class="analyItem">
                  <p class="analyItemTit tx-center">增减项类型</p>
                  <div class="analyItemCon" id="changeType">
                      <p class="fl col-md-4">
                          <label class="ml20 uiRadio12">
                              <!-- <input type="radio" name="zx" checked="checked" data-type="2" class="uiRadio12-input"> -->
                              <span v-if="this.data.ChangesType ===1">增项</span>
                              <span v-if="this.data.ChangesType ===2">减项</span>
                          </label>
                      </p>
                  </div>
            </div>
            <div class="analyItem" id="ChangesZJType" style="">
                <p class="analyItemTit tx-center">减项类型</p>
                <div class="analyItemCon" id="changeType">
                    <span v-if="this.data.ChangesType ===1">增项</span>
                    <span style="color: red" v-if="this.data.ChangesType ===2">减项
                        (
                            <span v-if="this.data.ChangesZJType ===1" >减项不减利</span>
                            <span v-if="this.data.ChangesZJType ===2" >减项减利</span>
                        )
                    </span>
                </div>

            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">增减项日期</p>
                <div class="analyItemCon">
                    <div class="analyItemCon" id="changeType">
                        <span class="cLightGray pr8">增 减 项 日 期</span>
                        <span id="changeTime">{{myFormatDate(this.data.ChangesTime)}}</span>
                        <span class="pl20">上传照片</span>
                    </div>
                    <div class="analyItemCon" id="changeType">

                        <rx-viewer class="dis-inline" :images="data">
                            <div class="clearfix">
                                <div class="fl mr10" v-for="(item, index) of this.data.ChangesImageUrl.substr(0,this.data.ChangesImageUrl.length-1).split(';')" :key="index">
                                    <img :src="item | smallImg(100, 100)" :alt="index">
                                </div>
                            </div>
                        </rx-viewer>

                    </div>
                </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">签单金额</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减签单金额</span>
                              <span id="changeQDMoney">{{this.data.ChangesSigningMoney}}</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减发包金额</span>
                              <span id="changeFBMoney">{{this.data.ChangesContractMoney}}</span>
                          </p>
                          <p class="fl col-md-4">
                              <!-- 公司利润增减 = 增减签单金额-增减发包金额-税金金额-代购主材费 -->
                              <span class="cRed">公司利润增减<span style="font-size: 18px;" id="lrinfo">{{(this.data.ChangesSigningMoney-this.data.ChangesContractMoney-this.data.ChangesTaxes-this.data.ChangesBrokerage) | toFixed()}}</span>元</span>
                          </p>
                      </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">占比金额</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">人工增减金额</span>
                              <span id="changeRGZJXMoney">{{this.data.ChangesArtificiallyMoney}}</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">材料增减金额</span>
                              <span id="changeCLZJXMoney">{{this.data.ChangesMaterialMoney}}</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cRed">默认人工占比45%，材料占比55%</span>
                          </p>
                      </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">其他金额</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">税金金额</span>
                              <span id="changeSJMoney">{{this.data.ChangesTaxes}}</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">代购主材费</span>
                              <span id="changeDGZCMoney">{{this.data.ChangesBrokerage}}</span>
                          </p>
                          <p class="fl col-md-4 jxtk_Items" style="display:none">
                              <span class="cLightGray cRed pr8">退款金额</span>
                              <span id="changeTKMoney" class=" cRed">--</span>
                          </p>
                        </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">备注说明</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减项内容</span>
                              <span id="changesItemContent" :data-title="this.data.ChangesItemContent">{{this.data.ChangesItemContent.substr(0,5)}}...</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减项原因</span>
                              <span id="changesReason" :data-title="this.data.ChangesReason">{{this.data.ChangesReason.substr(0,5)}}...</span>
                          </p>
                      </div>
            </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['data'],
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        },
        // 金额过滤
        toFixed (value) {
            if (value == null || isNaN(value) || value === undefined) {
                return '0.00'
            } else {
                return value.toFixed(2)
            }
        }
    }
}
</script>
