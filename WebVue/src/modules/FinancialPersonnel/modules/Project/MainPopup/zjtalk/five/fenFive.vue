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
                              <input type="radio" name="zx" checked="checked" data-type="2" class="uiRadio12-input">
                              减项
                          </label>
                      </p>
                  </div>
            </div>
            <div class="analyItem" id="ChangesZJType" style="">
                  <p class="analyItemTit tx-center">减项类型</p>
                  <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <label class="uiRadio12">
                                  <input type="radio" id="rbt_jxjl" name="jxname" checked="checked" data-zjtype="2" class="uiRadio12-input">
                                  减项减利
                              </label>
                          </p>
                  </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">增减项日期</p>
                <div class="analyItemCon">
                      <p class="fl col-md-4">
                          <span class="cLightGray pr8">增 减 项 日 期</span>
                          <span id="changeTime">2020-01-13</span>
                      </p>
                      <p class="fl col-md-8">
                          <span class="cLightGray pr8">上传照片</span>
                          </p><div class="jm_bot_rig_cen_left05 fl clear" id="box_pic">
                                  <div id="xgImg" class="fl">
                                          <div class="jm_bot_img_fds fl ml10 mb10 relative" onmouseenter="mouseoverPic(this)" onmouseleave="mouseoutPic(this)">
                                              <img src="https://imginvest.rxjy.com/finance/1578902942Jjchb2SyCF.jpg" style="width: 103px; height: 123px; overflow: hidden; cursor: pointer;"> <div class="upload_finish_div" style="display:block">
                                                  <div class="upload_finish_bg" style="display: none;"></div> <div class="upload_finish_link" style="display: none;">
                                                      <div class="dis_il_block">
                                                          <a href="javascript:" onclick="imgBig(this,0)" class="enlarge_link" data-src="https://imginvest.rxjy.com/finance/1578902942Jjchb2SyCF.jpg" data-imgname="图片"></a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="jm_bot_img_fds fl ml10 mb10 relative" onmouseenter="mouseoverPic(this)" onmouseleave="mouseoutPic(this)">
                                              <img src="https://imginvest.rxjy.com/finance/15789029503ahtd8xn3a.jpg" style="width: 103px; height: 123px; overflow: hidden; cursor: pointer;"> <div class="upload_finish_div" style="display:block">
                                                  <div class="upload_finish_bg" style="display: none;"></div> <div class="upload_finish_link" style="display: none;">
                                                      <div class="dis_il_block">
                                                          <a href="javascript:" onclick="imgBig(this,1)" class="enlarge_link" data-src="https://imginvest.rxjy.com/finance/15789029503ahtd8xn3a.jpg" data-imgname="图片"></a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="jm_bot_img_fds fl ml10 mb10 relative" onmouseenter="mouseoverPic(this)" onmouseleave="mouseoutPic(this)">
                                                  <img src="https://imginvest.rxjy.com/finance/1578903021txaSMRbpY3.jpg" style="width: 103px; height: 123px; overflow: hidden; cursor: pointer;"> <div class="upload_finish_div" style="display:block">
                                                      <div class="upload_finish_bg" style="display: none;"></div> <div class="upload_finish_link" style="display: none;">
                                                          <div class="dis_il_block">
                                                              <a href="javascript:" onclick="imgBig(this,2)" class="enlarge_link" data-src="https://imginvest.rxjy.com/finance/1578903021txaSMRbpY3.jpg" data-imgname="图片"></a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                      </div>
                                  <div id="NewImg" class="fl"></div>
                              </div>
                          <p></p>
                      </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">签单金额</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减签单金额</span><br>
                              <span id="changeQDMoney">28000.00</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减发包金额</span><br>
                              <span id="changeFBMoney">23680.00</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cRed">公司利润增减<span style="font-size: 18px;" id="lrinfo">4320.00</span>元</span>
                          </p>
                      </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">占比金额</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">人工增减金额</span><br>
                              <span id="changeRGZJXMoney">10656.00</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">材料增减金额</span><br>
                              <span id="changeCLZJXMoney">13024.00</span>
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
                              <span class="cLightGray pr8">税  金  金  额</span><br>
                              <span id="changeSJMoney">0.00</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">代 购 主 材 费</span><br>
                              <span id="changeDGZCMoney">0.00</span>
                          </p>
                          <p class="fl col-md-4 jxtk_Items" style="display:none">
                              <span class="cLightGray cRed pr8">退款金额</span><br>
                              <span id="changeTKMoney" class=" cRed">0.00</span>
                          </p>
                        </div>
            </div>
            <div class="analyItem">
                      <p class="analyItemTit tx-center">备注说明</p>
                      <div class="analyItemCon">
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减项内容</span><br>
                              <span id="changesItemContent" title="【装饰-减项】后期甲方更换地址">【装饰-减项】后期甲方更换地址</span>
                          </p>
                          <p class="fl col-md-4">
                              <span class="cLightGray pr8">增减项原因</span><br>
                              <span id="changesReason" title="【装饰-减项】后期甲方更换地址">【装饰-减...</span>
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
