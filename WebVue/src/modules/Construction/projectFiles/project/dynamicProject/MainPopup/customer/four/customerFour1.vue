<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'发起'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项目编号</span>
                    <span>{{orderDetail.projectId}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">量房编号</span>
                    <span>{{orderDetail.quantityRoomNumber}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">客户</span>
                    <span>{{orderDetail.initialCustomer}}</span>
                </p>
                <p class="col-md-12">
                    <span class="cLightGray pr8">项目名称</span>
                    <span>{{orderDetail.projectName}}</span>
                </p>
                <p class="col-md-12">
                    <span class="cLightGray pr8">公司名称</span>
                    <span>{{orderDetail.projectCompanyName}}</span>
                </p>
                <p class="col-md-12">
                    <span class="cLightGray pr8">项目地址</span>
                    <span>{{orderDetail.projectAddress}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" title="初始订单标准">初始订单</p>
            <div class="analyItemCon">
                <div class="openBox1">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">类型</span>
                        <span>{{orderDetail.typeName}}</span>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8">科目</span>
                        <span>{{orderDetail.subjectName}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="取标准最高等级">等级</span>
                        <span>{{orderDetail.criterionLevel | SectionToChinese()}}级</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="取标准累计罚款">罚款</span>
                        <span class="cRed bold">￥{{orderDetail.criterionFine}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="取标准累计积分">积分</span>
                        <span class="cRed bold">{{orderDetail.criterionIntegral}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="取标准最长处理时间">时间</span>
                        <span>{{orderDetail.criterionTime+'天'}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">发起时间</span>
                        <span >{{orderDetail.orderStart}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">截止时间</span>
                        <span >{{orderDetail.orderEnd}}</span>
                    </p>
                    <div class="col-md-11 ">
                        <span class="cLightGray pr8 fl mt5" style="width: 60px;">详情</span>
                        <div class="fl" style="width: calc(100% - 60px);">
                            <div v-for="(item, index) in orderDetail.criterionList" :key="index" class="col-md-12">
                                <div v-if="item.criterionVersion==1" >
                                    <p v-for="(it, index) in item.changeList" :key="index" class="col-md-12">
                                        <span>
                                            {{index+1}}、{{it.criterionTypeName}} - {{it.criterionSubjectName}} - {{it.criterionLevel| SectionToChinese()}}级
                                        </span>
                                        <span>
                                            罚款：
                                        </span>
                                        <span class="cRed bold">
                                             {{'￥'+it.criterionFine}}
                                        </span>
                                        <span>
                                            、积分
                                        </span>
                                        <span class="cRed bold">
                                            {{it.criterionIntegral}}
                                        </span>
                                        <span>
                                            、用时
                                        </span>
                                        <span class="bold">
                                            {{it.criterionTime+'天'}}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox1($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon">
                <p class="col-md-11">
                    <span class="cLightGray pr8">问题内容</span>
                    <span>{{orderDetail.feedbackContent}}</span>
                </p>
                <p class="col-md-12">
                    <span class="cLightGray pr8">问题图片</span>
                    <rx-viewer :images="orderDetail.spImgs" :options="{}">
                        <div style="float: left; padding: 10px 5px;mt10" v-for="(item, index) in orderDetail.spImgs" :key="index">
                            <div class="look_imgHover relative" :style="elstyle50">
                                <img :alt="item.fileName" :src="item.filePath | smallImg(elstyle50.width,elstyle50.height)">
                                <div class="upload_finish_div">
                                    <div class="upload_finish_bg"></div>
                                    <div class="upload_finish_link">
                                        <div class="dis-il-block">
                                            <a style="width: 25px;height: 25px;background-size : 100%;margin-top: 13px;"
                                            href="javascript:" class="ImgBtn enlarge_link enlarge_viewer"
                                            :data-src="item.filePath"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </rx-viewer>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox1">
                     <p class="col-md-12">
                        <span class="cLightGray pr8">类型</span>
                        <span>{{orderDetail.typeName}}</span>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8">科目</span>
                        <span>{{orderDetail.subjectName}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">订单号</span>
                        <span class="c999999">{{orderDetail.orderNum}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">发起人</span>
                        <span class="c999999">{{orderDetail.projectId+' - '+orderDetail.initialCustomer}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">截止</span>
                        <span class="c999999 ">{{orderDetail.orderEnd}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">等级</span>
                        <span>{{orderDetail.orderLevel | SectionToChinese()}}级</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">罚款</span>
                        <span class="c999999 cRed bold">￥{{orderDetail.orderFine}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">积分</span>
                        <span class="c999999 cRed bold">{{orderDetail.orderIntegral}}</span>
                    </p>
                    <div class="col-md-11 ">
                        <span class="cLightGray pr8 fl mt5" style="width: 60px;">订单调整</span>
                        <div class="fl" style="width: calc(100% - 60px);">
                            <div v-for="(item, index) in orderDetail.criterionList" :key="index" class="col-md-12">
                                <span class="cLightGray pr8">{{item.criterionVersion | SectionToChinese()}}、{{item.changeRemark}}</span>
                                <p v-for="(it, index) in item.changeList" :key="index" class="col-md-12">
                                    <span>
                                        {{it.criterionTypeName}} - {{it.criterionSubjectName}} - {{it.criterionLevel| SectionToChinese()}}级
                                    </span>
                                    <span>
                                        罚款：
                                    </span>
                                    <span class="cRed bold">
                                            {{'￥'+it.criterionFine}}
                                    </span>
                                    <span>
                                        、积分
                                    </span>
                                    <span class="cRed bold">
                                        {{it.criterionIntegral}}
                                    </span>
                                    <span>
                                        、用时
                                    </span>
                                    <span class="bold">
                                        {{it.criterionTime+'天'}}
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <strong title="倒计时" class="status-strong fz14" :class="{ cGreen: orderDetail.orderReckonByTime>0 , cRed: orderDetail.orderReckonByTime<0}">{{orderDetail.orderReckonByTime+'h'}}</strong>
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox1($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">编号</span>
                    <span class="c999999">{{orderDetail.projectId}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">名称</span>
                    <span class="c999999" :data-title="'项目名称: '+orderDetail.projectName">{{orderDetail.projectName | ellipsisText(9)}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">联系</span>
                    <span class="c999999">{{initialPhone}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">客户</span>
                    <span class="c999999">{{orderDetail.initialCustomer}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { findSpSolveTheProblemDetailsById } from '../../../Resources/Api/customer'
export default {
    props: [ 'currentList' ],
    data () {
        return {
            // 图片外层dom样式
            elstyle50: {
                width: '50px',
                height: '50px',
                display: 'inline-block'
            },
            orderDetail: {},
            currentId: ''
        }
    },
    created () {

    },
    mounted () {
        this.orderDetail = this.currentList
    },
    computed: {
        ...mapGetters([ 'leftInfo', 'twoInfo', 'updateThree' ])
    },
    methods: {
        // 收展
        openBox1 (event) {
            if ($(event.target).attr('data-num') === '1') {
                $(event.target).parents('.analyItemCon').find('.openBox1').css({'height': 'auto'})
                $(event.target).attr('data-num', '2')
                $(event.target).html('收')
            } else {
                $(event.target).parents('.analyItemCon').find('.openBox1').css({'height': '110px'})
                $(event.target).attr('data-num', '1')
                $(event.target).html('展')
            }
        },
        // 收展
        openBox (event) {
            if ($(event.target).attr('data-num') === '1') {
                $(event.target).parents('.analyItemCon').find('.openBox').css({'height': 'auto'})
                $(event.target).attr('data-num', '2')
                $(event.target).html('收')
            } else {
                $(event.target).parents('.analyItemCon').find('.openBox').css({'height': '60px'})
                $(event.target).attr('data-num', '1')
                $(event.target).html('展')
            }
        }
    },
    watch: {
        $router () {
            this.orderDetail = this.currentList
        }
    },
    filters: {

    }
}
</script>
<style scoped>
.status-strong, .time-strong{
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -9px;
}
.openBox1 {
    height: 110px;
    overflow: hidden;
}
.imgbox {
    display: inline-block;
    position: absolute;
    top: 5px;
    right: 5px;
}
</style>
