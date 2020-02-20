<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
   <three-title :title="{name:'评估'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-if="orderDetail.estimateLevelName !== '--'">
            <p class="analyItemTit tx-center">客户评估</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">评估</span>
                    <span>{{orderDetail.estimateLevelName}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{orderDetail.estimateTime}}</span>
                </p>
                <p class="col-md-12">
                    <span class="cLightGray pr8">评语</span>
                    <span>{{orderDetail.estimateValue}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem" v-if="orderDetail.estimateLevelName !== '--'">
            <p class="analyItemTit tx-center">客户结果</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">罚款</span>
                    <span class="c999999 cRed">{{orderDetail.financialPenaltyFormulaKH}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">积分</span>
                    <span class="c999999 cRed">{{orderDetail.haPenaltyFormulaKH}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem" v-if="orderDetail.estimateLevelName !== '--'">
            <p class="analyItemTit tx-center">客户附件</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox">
                    <p class="col-md-11">
                        <rx-viewer :images="orderDetail.esImgs" :options="{}">
                            <div style="float: left; padding: 5px 5px;" v-for="(item, index) in orderDetail.esImgs" :key="index">
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
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单评估</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">评估</span>
                    <span>{{orderDetail.adjustEstimateLevelName}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{orderDetail.adjustEstimateValue}}</span>
                </p>
                <p class="col-md-12">
                    <span class="cLightGray pr8">评语</span>
                    <span>{{orderDetail.adjustEstimateTime}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单结果</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">罚款</span>
                    <span class="c999999 cRed">{{orderDetail.financialPenaltyFormula}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">积分</span>
                    <span class="c999999 cRed">{{orderDetail.haPenaltyFormula}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客服附件</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox">
                    <p class="col-md-11">
                        <rx-viewer :images="orderDetail.aesImgs" :options="{}">
                            <div style="float: left; padding: 5px 5px;" v-for="(item, index) in orderDetail.aesImgs" :key="index">
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
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
        <div class="analyItem" v-if="orderDetail.estimateLevelName === '--'">
            <p class="analyItemTit tx-center">客户评价</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-12 mb20">
                        <label  class="mr20">评价</label>
                        <el-radio-group v-model="evalValue">
                            <el-radio :label="item.id" v-for="(item,index) of evalArray" :key="index">{{item.value}}</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="col-md-12">
                        <label class="mr20 fl">描述</label>
                        <textarea class="col-md-10 h80" v-model="estimateValue"></textarea>
                    </div>
                    <div class="col-md-12">
                        <div class="mt10" :class="{'mt10':imgList.length>1}" style="float: left;">
                            <rx-upload @success="successUploadImg" :data="{id: 11}" :init="{class: 2, mime: 1}"
                                :elStyle="elstyle56">
                                <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                                    <a href="javascript:">
                                        <span type="file" value="" class="file"></span>
                                        <em class="bgIcon file-ico"></em>
                                    </a>
                                </div>
                            </rx-upload>
                        </div>
                        <rx-viewer :images="imgList" :options="{}">
                            <div style="float: left; padding: 5px 5px;" v-for="(item, index) in imgList" :key="index">
                                <div class="look_imgHover relative" :style="elstyle50">
                                    <img :alt="item.name" :src="item.filePath | smallImg(elstyle50.width,elstyle50.height)">
                                    <div class="upload_finish_div">
                                        <div class="upload_finish_bg"></div>
                                        <div class="upload_finish_link">
                                            <div class="dis-il-block">
                                                <a style="width: 20px;height: 20px;background-size : 100%;margin-top: 13px;"
                                                href="javascript:" class="ImgBtn enlarge_link enlarge_viewer"
                                                :data-src="item.filePath"></a>
                                                <a style="width: 20px;height: 20px;background-size : 100%;background-position: 0 -19px;margin-top: 13px;"
                                                href="javascript:" class="ImgBtn delect_link"
                                                @click="deleteImg(index)"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </rx-viewer>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">评估</span>
                    <span class="c999999">{{orderDetail.orderEstimateLevelName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">罚款</span>
                    <span :data-title="'公式：'+ orderDetail.financialPenaltyFormulaOrder" class="c999999 bold cRed">{{orderDetail.financialPenaltyOrder}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">积分</span>
                    <span :data-title="'公式：'+ orderDetail.haPenaltyFormulaOrder" class="c999999 bold cRed">{{orderDetail.haPenaltyOrder}}</span>
                </p>
                <span v-if="orderDetail.estimateStage=='1'" class="circlemark circlemark-lightGreen" data-title="客户已评价">已</span>
                <span v-else-if="orderDetail.estimateStage=='2'" class="circlemark circlemark-green" data-title="评估已完成">完</span>
                <span v-else class="circlemark circlemark-purple" data-title="待评价">待</span>
            </div>
        </div>
         <div class="tx-center" v-if="orderDetail.estimateLevelName === '--'">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" @click="submitData()">
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { updateAssessmentResultsKH } from '../../../Resources/Api/customer'
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
            // 图片外层dom样式
            elstyle56: {
                width: '60px',
                height: '50px',
                display: 'inline-block'
            },
            orderDetail: {},
            evalValue: '', // 评价等级
            evalArray: [
                {
                    id: 4,
                    value: '优'
                },
                {
                    id: 3,
                    value: '良'
                },
                {
                    id: 2,
                    value: '中'
                },
                {
                    id: 1,
                    value: '差'
                }
            ], // 评价数组
            imgList: [], // 处理图片集合
            estimateValue: '' // 评价内容
        }
    },
    mounted () {
        this.orderDetail = this.currentList
    },
    computed: {
        ...mapGetters([ 'leftInfo', 'twoInfo', 'updateThree' ])
    },
    methods: {
        // 上传图片方法
        successUploadImg (data) {
            let param = {
                solveTheProblemId: this.leftInfo.id, // 订单编号
                imgType: '3', // 图片类型 1:客户问题 2：处理图片 3:客户评估 4：客服评估
                fileName: '处理图片', // 图片名称
                filePath: data.src// 图片地址
            }
            this.imgList.push(param)
        },
        // 删除图片方法
        deleteImg (i) {
            this.imgList.splice(i, 1)
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
        },
        submitData () {
            if (this.evalValue === '') {
                this.$message('必须选择评价内容')
            }
            let estimateImgs = []
            this.imgList.forEach(element => {
                estimateImgs.push(element.filePath)
            })
            let parm = {
                id: this.$route.query.id,
                estimateLevel: this.evalValue,
                estimateValue: this.estimateValue,
                estimateImgs: estimateImgs.join(',')
            }
            updateAssessmentResultsKH(parm).then(results => {
                if (results.data.statusCode === 1) {
                    this.$message('提交评价成功')
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        $router () {
            this.orderDetail = this.currentList
        }
    }
}
</script>
<style >
    .h80 {
        height: 80px;
    }
</style>
