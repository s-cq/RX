<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'执行'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "18">
        <div class="analyItem mt5">
            <p class="analyItemTit tx-center">执行人</p>
            <div class="analyItemCon clearfix">
                <div class="col-md-2 pr10">
                    <img v-if='executor.UserImageUrl' :src="executor.UserImageUrl" class="person-img">
                    <img alt="暂无图片信息" src="https://pa.rxjy.com/abc/images/timg.jpg" class="person-img" v-else>
                </div>
                <div class="col-md-8 lh28">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">姓名</span>
                        <span v-if='executor.UserName' v-text='executor.UserName'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4"><span class="cLightGray pr8">卡号</span>
                        <span v-if='executor.UserCardNO' v-text='executor.UserCardNO'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">年龄</span>
                        <span v-if='executor.Age' v-text="executor.Age+'岁'"></span>
                        <span v-else> - </span>
                    </p>
                    <p  class="col-md-4">
                        <span class="cLightGray pr8">工龄</span>
                        <span v-if='executor.WorkAge' v-text="executor.WorkAge+'月'"></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">入职</span>
                        <span v-if='executor.EntryTime' v-text='executor.EntryTime'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span v-if='executor.Level' v-text='executor.Level'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">部门</span>
                        <span v-if='executor.Dept' v-text='executor.Dept'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">隶属</span>
                        <span v-if='executor.MemberOf' v-text='executor.MemberOf'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">职务</span>
                        <span v-if='executor.Position' v-text='executor.Position'></span>
                        <span v-else> - </span>
                    </p>
                    <p class="col-md-4 hide">
                        <span class="cLightGray pr8">手机号</span>
                        <span v-if='executor.phone' v-text='executor.phone'></span>
                        <span v-else></span>
                    </p>
                </div>
                <div class="card-right col-md-2">
                    <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QTlCMzZERDg5QUE0RTYxMTgwNEJCREU2RjFDM0QzOUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEyNzA4NzgwREY1MTFFN0JFQzBFOTg3QTJCNTY5QzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEyNzA4NzcwREY1MTFFN0JFQzBFOTg3QTJCNTY5QzAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMjdEQUFFRDlCQ0RFNjExOThEMEY2NDg5MkU2RjI2NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOUIzNkREODlBQTRFNjExODA0QkJERTZGMUMzRDM5QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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">
                </div>
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
                <strong data-title="倒计时" class="status-strong fz14" :class="{ cGreen: orderDetail.orderReckonByTime>0 , cRed: orderDetail.orderReckonByTime<0}">{{orderDetail.orderReckonByTime+'h'}}</strong>
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox1($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">问题内容</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox">
                    <p class="col-md-11">
                        <span class="c999999">{{orderDetail.feedbackContent}}</span>
                    </p>
                </div>
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">问题图片</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox">
                    <p class="col-md-11">
                        <rx-viewer :images="orderDetail.spImgs" :options="{}">
                            <div style="float: left; padding: 5px 5px;" v-for="(item, index) in orderDetail.spImgs" :key="index">
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
        <!-- <div v-if="orderDetail.executeState=='0'&&orderDetail.orderState=='0'" class="analyItem">
            <p class="analyItemTit tx-center">处理内容</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <p class="col-md-11">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="executeValue">
                        </el-input>
                    </p>
                </div>
            </div>
        </div> -->
        <!-- <div v-if="orderDetail.executeState=='0'&&orderDetail.orderState=='0'" class="analyItem">
            <p class="analyItemTit tx-center">处理附件</p>
            <div class="analyItemCon">
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
        </div> -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">处理内容</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox">
                    <p class="col-md-11">
                        <span class="c999999">{{orderDetail.executeValue}}</span>
                    </p>
                </div>
                <div class="dis-il-block imgbox">
                    <a href="javascript:;" class="cBlue openBtn cur_edit" @click="openBox($event)" data-num="1">展</a>
                </div>
            </div>
        </div>
        <div  class="analyItem">
            <p class="analyItemTit tx-center">处理附件</p>
            <div class="analyItemCon">
                <div class="col-md-12 openBox">
                    <p class="col-md-11">
                        <rx-viewer :images="orderDetail.exIms" :options="{}">
                            <div style="float: left; padding: 5px 5px;" v-for="(item, index) in orderDetail.exIms" :key="index">
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
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { getPMBusinessCardMsg, findSpSolveTheProblemDetailsById } from '../../../Resources/Api/customer'
export default {
    props: [ 'currentList', 'postData' ],
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
            executor: [], // 外部人事
            // imgList: [], // 处理图片集合
            executeValue: '' // 处理内容
        }
    },
    mounted () {
        this.orderDetail = this.currentList
        this.executor = this.postData
    },
    computed: {
        ...mapGetters([ 'leftInfo', 'twoInfo', 'updateThree', 'otherInfo' ])
    },
    methods: {
        // findSpSolveTheProblemDetailsById (id) {
        //     findSpSolveTheProblemDetailsById({
        //         id: id
        //     }).then(results => {
        //         this.orderDetail = results.data.body
        //         if (this.orderDetail) {
        //             this.getPMBusinessCardMsg(this.orderDetail.personnelCard)
        //         }
        //     }).catch(error => { console.log(error) })
        // },
        // // 获取外部人事
        // getPMBusinessCardMsg (userCardNO) {
        //     if (!userCardNO) {
        //         this.executor = []
        //         return
        //     }
        //     getPMBusinessCardMsg({
        //         UserCardNO: userCardNO
        //     }).then(results => {
        //         this.executor = results.data.body
        //     }).catch(error => { console.log(error) })
        // },
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
                let height = $(event.currentTarget).parents('.analyItemCon').find('.openBox').height()
                if (height < 38) {
                    $(event.currentTarget).parents('.analyItemCon').find('.openBox').height('60px')
                }
                $(event.target).attr('data-num', '2')
                $(event.target).html('收')
            } else {
                $(event.target).parents('.analyItemCon').find('.openBox').css({'height': '60px'})
                $(event.target).attr('data-num', '1')
                $(event.target).html('展')
            }
        }
        // // 上传图片方法
        // successUploadImg (data) {
        //     let param = {
        //         solveTheProblemId: this.leftInfo.id, // 订单编号
        //         imgType: '2', // 图片类型 1:客户问题 2：处理图片 3:客户评估 4：客服评估
        //         fileName: '处理图片', // 图片名称
        //         filePath: data.src// 图片地址
        //     }
        //     this.imgList.push(param)
        // },
        // // 删除图片方法
        // deleteImg (i) {
        //     this.imgList.splice(i, 1)
        // }
    },
    watch: {
        $router () {
            this.orderDetail = this.currentList
            this.executor = this.postData
        }
    },
    filters: {
        // 等级
        SectionToChinese (type) {
            let value = ''
            switch (type) {
            case 1:
                value = '一级'
                break
            case 2:
                value = '二级'
                break
            case 3:
                value = '三级'
                break
            default:
                break
            }
            return value
        }
    }
}
</script>
<style>
.status-strong {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -9px;
}
.person-img {
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid #e6e6e6;
    width: 65px;
    height: 65px;
    display: block;
    margin: 0 auto;
    margin-top: 8px;
}
</style>
<style scoped>
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
