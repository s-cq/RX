<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
       <div class="analyItem">
            <p class="analyItemTit tx-center">甲乙</p>
            <div class="analyItemCon">
                <div class="clearfix mb10">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8 fl">类型</span>
                            <select class=" fl select_sm width100" id="jyType">
                                <option value="3">增项</option>
                                <option value="4">减项</option>
                            </select>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8 fl">金额</span>
                        <input type="text" class="jm_tab_inp width100 qszjMoney fl" placeholder="增减金额">
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8 fl">申请日期</span>
                        <span class=" fl">2020-02-18</span>
                    </p>
                </div>
                <div class="clearfix">
                  <p v-if="flg==3" class="fl col-md-4">
                      <span class="cLightGray pr8 fl">类别</span>
                      <select class=" fl select_sm width100" id="lbType">
                          <option value="1">消防</option>
                          <option value="2">空调</option>
                          <option value="3">钢结构</option>
                          <option value="4">其他分项</option>
                      </select>
                  </p>
                  <div class="col-md-4">
                    <!-- <span class="cRed">抱歉，审计或准备阶段无法申请增减项，请进入在施操作！</span> -->
                    <a href="javascript:" class="jm_table_btn btn_bg999999 uiBtn-normal uiBtn-blue Add_zjx dis-il-block mt10">分账</a>
                  </div>
                </div>
            </div>
       </div>
       <div class="analyItem">
            <p class="analyItemTit tx-center">乙丙</p>
            <div class="analyItemCon">
                <p class="col-md-4 mb5">
                    <span class="cLightGray pr8 fl">类型</span>
                    <select class=" fl select_sm width100" id="ybType">
                        <option value="1">减项不减利</option>
                        <option value="2">减项减利</option>
                    </select>
                </p>
                <p class="col-md-4 mb5">
                    <span class="cLightGray pr8 fl">金额</span>
                    <input type="text" class="jm_tab_inp width100 fbzjMoney fl" placeholder="增减金额">
                </p>
                <p class="col-md-4 mb5">
                    <span class="cLightGray pr8 fl">申请日期</span>
                    <span class="fl">2020-02-18</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8 fl">承包</span>
                    <span class="fl">107,100.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8 fl">结果</span>
                    <span id="zjAllMoney" class="fl">107,100.00</span>
                </p>
                <p class="col-md-4">
                    <!-- <span class="cRed">抱歉，审计或准备阶段无法申请增减项，请进入在施操作！</span> -->
                    <a href="javascript:" class="jm_table_btn btn_bg999999 uiBtn-normal uiBtn-blue Add_zjx dis-il-block mt10">分账</a>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">增减合计</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">增项合同</span>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">减项合同</span>
                    <span class="cRed">0.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">增减项合同</span>
                    <span class="cRed">0.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem" v-if="flg==1">
                <p class="analyItemTit tx-center">坏账</p>
                <div class="analyItemCon">
                    <p class="col-md-4 mb10">
                        <span class="cLightGray pr8 fl">金额</span>
                        <input type="text" class="jm_tab_inp width100 qszjMoney fl" placeholder="增减金额">
                    </p>
                    <p class="col-md-4 mb10">
                        <span class="cLightGray pr8 fl">申请日期</span>
                        <span class="fl">2020-03-02</span>
                    </p>
                    <p class="col-md-4 mb10">
                        <a href="javascript:" class="jm_table_btn btn_bg999999 uiBtn-normal uiBtn-blue Add_zjx dis-il-block mt10">分账</a>
                    </p>
                    <!-- <p class="col-md-12" >
                        <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"  class="fl ml10"
                            :elStyle="{width:'90px', height: '80px'}"
                            @success="successUpload">
                            <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                                <a href="javascript:">
                                    <span type="file" value="" class="file"></span>
                                    <em class="bgIcon file-ico"></em>
                                </a>
                            </div>
                        </rx-upload>
                        <rx-viewer :images="data" class="fl">
                            <div class="clearfix">
                                <div class="col-md-4" v-for="(item, index) of imgList" :key="index">
                                    <img :src="item | smallImg(80, 80)" :alt="index">
                                </div>
                            </div>
                        </rx-viewer>
                    </p> -->
                </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">历史</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">洽商</span>
                    <span>0笔</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">甲乙</span>
                    <span>0.00</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">乙丙</span>
                    <span>0.00</span>
                </p>
                <p class="fl col-md-3">
                    <!-- <span class="cLightGray pr8"> <a href="javascript:" class="jm_table_btn btn_bg999999 fl uiBtn-normal uiBtn-blue mr10 Add_zjx" style="position: relative; z-index: 1;">分账</a></span> -->
                    <span class="cLightGray pr8"> <a @click="detailClick" href="javascript:" class="jm_table_btn btn_bg999999 fl uiBtn-normal uiBtn-blue mr10 Add_zjx" style="position: relative; z-index: 1;">详细</a></span>
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
        <!-- 客户评价 -->
        <rx-zhuang v-if="fourIndex === 1" :key="0" ></rx-zhuang>
        <rx-fen v-if="fourIndex === 3" :key="1" ></rx-fen>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import rxZhuang from './four/zhuangFour'
import rxFen from './four/fenFour'
export default {
    components: {
        rxZhuang,
        rxFen
    },
    data () {
        return {
            imgList: [],
            flg: 0,
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
        }
    },
    computed: {
        ...mapGetters['leftoInfo']
    },
    created () {
        this.flg = this.$route.query.index
        console.log(this.flg)
    },
    methods: {
        detailClick () {
            this.fourIndex = Number(this.flg)
        },
        successUpload (value) {
            this.imgList.push(value.src)
        },
        clickFourShow (index) {
            this.fourIndex = index
        }
    },
    watch: {
        leftInfo () {
            this.flg = this.$route.query.index
        },
        $route () {
            this.flg = this.$route.query.index
            this.clickFourShow()
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
