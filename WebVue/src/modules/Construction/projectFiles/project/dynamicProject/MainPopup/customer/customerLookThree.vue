<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "18">
        <div class="analyItem analyItem-card">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon">
               <div class="col-md-12">
                    <div class="width80 fl">
                        <div class="imgplementInfo relative tx-center">
                            <span :data-title="'订单类型: '+currentList.typeName+'单'" class="orderType tx-fb cOrange">
                                {{currentList.typeName | ellipsisText(2)}}单
                            </span>
                            <div class="groupImg">
                                <img :src="personnelNameUrl">
                            </div>
                            <span :data-title="'执行人: '+currentList.postName+' - '+currentList.personnelName" class="groupName tx-fb cOrange">{{currentList.personnelName}}</span>
                        </div>
                    </div>
                    <div class="fl relative" style="width: calc(100% - 80px); margin-top: -5px;">
                        <div class="col-md-12">
                            <p class="width80 fl">
                                <span  :data-title="'订单号: '+currentList.orderNum" >{{currentList.orderNum}}</span>
                            </p>
                            <p class="width80 fl">
                                <strong :data-title="'预计罚款: '+currentList.orderFine " class="cRed fz14" >￥{{currentList.orderFine}}</strong>
                            </p>
                            <p class="width60 fl">
                                <strong :data-title="'预计积分: '+currentList.orderIntegral" class="cRed fz14" >{{currentList.orderIntegral}}</strong>
                            </p>
                            <p class="fl">
                                <span v-if="currentList.orderEnd" :data-title="'截至时间: '+currentList.orderEnd" class="tx-fb fz14">
                                    {{currentList.orderEnd ? currentList.orderEnd.substring(5,10) : ''}}
                                </span>
                            </p>
                        </div>
                        <div class="col-md-12 mt5">
                            <div class="fl" style="width: 140px;">
                                <span class="cLightGray pr8" :data-title="'订单名: '+currentList.subjectName">
                                     {{currentList.subjectName| ellipsisText(10)}}
                                </span>
                            </div>
                            <div class="width80 fl">
                                <span data-title="订单等级"  class="cLightGray pr8">等级</span>
                                <span >{{currentList.orderLevel | SectionToChinese()}}</span>
                            </div>
                            <div class="fr width60 relative" style='margin-right:30px;'>
                                <p v-for='(item,index) in currentList.spImgs' :key="index">
                                    <img v-if="showFile(item.filePath)"
                                    :src="item.filePath" class="design-img"
                                    :style="'transform: rotate('+30*index+'deg)'">
                                </p>
                            </div>
                        </div>
                        <div class="col-md-8 openBox mt5" style='height:38px;' >
                            <div v-if="feedbackContentFlag" :data-title="'订单内容: '+currentList.feedbackContent">
                                <span>
                                    {{currentList.feedbackContent}}
                                </span>
                            </div>
                            <div v-else>
                                <span>
                                    {{currentList.feedbackContent}}
                                </span>
                            </div>
                        </div>
                        <div style="position: absolute; right: 17px; bottom: 0px;">
                            <span @click='receiveFair($event)' class="unText" style="float: right;" data-num="1">展</span>
                        </div>
                        <p style="position: absolute; right: 10px;">
                            <strong class="fz14" :class="{ cGreen: currentList.orderReckonByTime>0 , cRed: currentList.orderReckonByTime<0}" :data-title="'执行时间: '+currentList.orderReckonByTime+'h'">{{currentList.orderReckonByTime+'h'}}</strong>
                        </p>
                        <span class="circlemark circlemark-green" >{{currentList.orderStageName | ellipsisText(1)}}</span>
                    </div>
               </div>
            </div>
        </div>
        <div  class="analyItem anItemBor" @click="fourShow(1)">
            <p class="analyItemTit tx-center"  :class="{ analyLightGreen: 0 == parseInt(currentList.orderStage) , analyShallowGreen: 0 < parseInt(currentList.orderStage)}">
            发起</p>
            <div class="analyItemCon">
                <div>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">编号</span>
                        <span class="c999999">{{currentList.projectId}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">名称</span>
                        <span class="c999999" :data-title="'项目名称: '+currentList.projectName">{{currentList.projectName | truncate(9)}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">联系</span>
                        <span class="c999999">{{initialPhone}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">客户</span>
                        <span class="c999999">{{currentList.initialCustomer}}</span>
                    </p>
                </div>
            </div>
        </div>
         <div class="analyItem anItemBor" @click="fourShow(2)">
            <p class="analyItemTit tx-center"
            :class="{ analyLightGreen: 1 == parseInt(currentList.orderStage) , analyShallowGreen: 1 < parseInt(currentList.orderStage)}">
            整改中</p>
            <div class="analyItemCon">
                <p data-title="是否提交" class="col-md-12">
                    <span class="cLightGray pr8">结果</span>
                    <span >{{currentList.postName}}：{{currentList.personnelName}}</span>
                    <span :class="{ cGreen: currentList.executeState=='1'}">{{currentList.executeStateName}}</span>
                </p>
                <p data-title="订单发起时间" class="col-md-6">
                    <span class="cLightGray pr8">发起时间</span>
                    <span >{{$utils.format('yyyy-MM-dd hh:mm', currentList.orderStart)}}</span>
                </p>
                <p v-if="currentList.executeState=='1'" data-title="执行提交时间" class="col-md-6">
                    <span class="cLightGray pr8">提交时间</span>
                    <span >{{$utils.format('yyyy-MM-dd hh:mm', currentList.executeTime) }}</span>
                </p>
                <p v-else class="col-md-6">
                    <span v-if='currentList.orderReckonByTime > 0' class="cGreen">未提交</span>
                    <span v-if='currentList.orderReckonByTime <= 0' class="cRed">未提交</span>
                    <span v-if='currentList.orderReckonByTime <= -72' class='cRed'><b>未提交</b></span>
                </p>
                <p data-title="当前执行状态" class="col-md-12">
                    <span class="cLightGray pr8">状态</span>
                    <span v-if='currentList.orderReckonByTime > 0' class="cGreen">黄色执行</span>
                    <span v-if='currentList.orderReckonByTime <= 0' class="cRed">黑色警报</span>
                    <span v-if='currentList.orderReckonByTime <= -72' class='cRed'><b>订单已严重超时</b></span>
                </p>
                <strong class="time-strong fz14" :class="{ cGreen: currentList.orderReckonByTime>0 , cRed: currentList.orderReckonByTime<0}" >{{currentList.orderReckonByTime}}h</strong>
            </div>
        </div>
        <div  class="analyItem anItemBor" @click="fourShow(3)">
            <p class="analyItemTit tx-center"
            :class="{ analyLightGreen: 2 == parseInt(currentList.orderStage) , analyShallowGreen: 2 < parseInt(currentList.orderStage)}">
            评估</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">评估</span>
                    <span class="c999999">{{currentList.orderEstimateLevelName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">罚款</span>
                    <span :data-title="'公式：'+ currentList.financialPenaltyFormulaOrder" class="c999999 bold cRed">{{currentList.financialPenaltyOrder}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">积分</span>
                    <span :data-title="'公式：'+ currentList.haPenaltyFormulaOrder" class="c999999 bold cRed">{{currentList.haPenaltyOrder}}</span>
                </p>
                <span v-if="currentList.estimateStage=='1'" class="circlemark circlemark-lightGreen" data-title="客户已评价">已</span>
                <span v-else-if="currentList.estimateStage=='2'" class="circlemark circlemark-green" data-title="评估已完成">完</span>
                <span v-else class="circlemark circlemark-purple" data-title="待评价">待</span>
            </div>
        </div>
         <div  class="analyItem anItemBor" @click="fourShow(4)">
            <p class="analyItemTit tx-center"
            :class="{ analyLightGreen: 3 == parseInt(currentList.orderStage) , analyShallowGreen: 3 < parseInt(currentList.orderStage)}">
            财务</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="c999999">{{currentList.personnelName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">罚款</span>
                    <span :data-title="'公式：'+ currentList.financialPenaltyFormula" class="c999999 bold cRed">{{currentList.financialPenalty}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">状态</span>
                    <span class="c999999">{{currentList.financialPenaltyStageName}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem anItemBor" @click="fourShow(5)">
            <p class="analyItemTit tx-center"
            :class="{ analyLightGreen: 3 == parseInt(currentList.orderStage) , analyShallowGreen: 3 < parseInt(currentList.orderStage)}">
            人事</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="c999999">{{currentList.personnelName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">积分</span>
                    <span :data-title="'公式：'+ currentList.haPenaltyFormula" class="c999999 bold cRed">{{currentList.haPenalty}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span class="c999999">{{currentList.haPenaltyStageName}}</span>
                </p>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <rx-customerFour1 v-if="fourIndex === 1" :key="1" :currentList='currentList'></rx-customerFour1>
        <rx-customerFour2 v-if="fourIndex === 2" :key="2" :currentList='currentList' :postData="postData"></rx-customerFour2>
        <rx-customerFour3 v-if="fourIndex === 3" :key="3" :currentList='currentList'></rx-customerFour3>
        <rx-customerFour4 v-if="fourIndex === 4" :key="4" :currentList='currentList'></rx-customerFour4>
        <rx-customerFour5 v-if="fourIndex === 5" :key="5" :currentList='currentList'></rx-customerFour5>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPMBusinessCardMsg, GetDeTel, findSpSolveTheProblemDetailsById } from '../../Resources/Api/customer'
import rxCustomerFour1 from './four/customerFour1.vue'
import rxCustomerFour2 from './four/customerFour2.vue'
import rxCustomerFour3 from './four/customerFour3.vue'
import rxCustomerFour4 from './four/customerFour4.vue'
import rxCustomerFour5 from './four/customerFour5.vue'

export default {
    components: {
        rxCustomerFour1,
        rxCustomerFour2,
        rxCustomerFour3,
        rxCustomerFour4,
        rxCustomerFour5
    },
    data () {
        return {
            personnelNameUrl: 'https://pa.rxjy.com/abc/images/timg.jpg',
            currentList: {}, // 当前数组
            initialPhone: '', // 项目客户手机号
            fourIndex: undefined, // 四段index
            feedbackContentFlag: true, // 展开与收缩
            currentId: '', // 用户存放id
            postData: [] // 获取人的信息
        }
    },
    created () {
        this.currentId = this.$route.query.id
        this.findSpSolveTheProblemDetailsById(this.currentId)
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 图片限制
        showFile (filename) {
            if (!filename) {
                return false
            }
            let pos = filename.lastIndexOf('.')
            let suffix = ''
            if (pos !== -1) {
                suffix = filename.substring(pos)
            }
            if (suffix === '.jpg' || suffix === '.gif' || suffix === '.png' || suffix === '.bmp' || suffix === '.jpeg') {
                return true
            }
            return false
        },
        // 获取数据
        findSpSolveTheProblemDetailsById (id) {
            findSpSolveTheProblemDetailsById({
                id: id
            }).then(results => {
                this.currentList = results.data.body
                if (this.currentList) {
                    this.getPMBusinessCardMsg(this.currentList.personnelCard)
                    this.GetDeTel(this.currentList.initialPhone)
                }
            }).catch(error => { console.log(error) })
        },
        // 获取外部人事
        getPMBusinessCardMsg (userCardNO) {
            if (!userCardNO) {
                this.personnelNameUrl = 'https://pa.rxjy.com/abc/images/timg.jpg'// 岗位人员照片
                return
            }
            getPMBusinessCardMsg({
                UserCardNO: userCardNO
            }).then(results => {
                this.postData = results.data.body
                if (this.postData && this.postData.UserImageUrl) {
                    this.personnelNameUrl = this.postData.UserImageUrl
                }
            }).catch(error => { console.log(error) })
        },
        // 解密手机号码
        GetDeTel (value) {
            if (!value) {
                this.initialPhone = ''
                return
            }
            GetDeTel({entel: value, key: 'KG000002'}).then(results => {
                this.initialPhone = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        receiveFair (event) {
            if ($(event.currentTarget).attr('data-num') === '1') {
                this.feedbackContentFlag = false
                // 展开
                $(event.currentTarget).parents('.analyItemCon').find('.openBox').height('auto')
                let height = $(event.currentTarget).parents('.analyItemCon').find('.openBox').height()
                if (height < 38) {
                    $(event.currentTarget).parents('.analyItemCon').find('.openBox').height('38px')
                }
                $(event.currentTarget).attr('data-num', '2')
                $(event.currentTarget).context.innerText = '收'
            } else {
                this.feedbackContentFlag = true
                // 收缩
                $(event.currentTarget).parents('.analyItemCon').find('.openBox').height('38px')
                $(event.currentTarget).attr('data-num', '1')
                $(event.currentTarget).context.innerText = '展'
            }
        },
        fourShow (index) {
            this.fourIndex = index
        },
        clickFourShow () {
            this.fourIndex = undefined
        }
    },
    watch: {
        leftInfo () {
            this.currentId = this.$route.query.id
            this.findSpSolveTheProblemDetailsById(this.currentId)
        },
        $route () {
            this.currentId = this.$route.query.id
            this.findSpSolveTheProblemDetailsById(this.currentId)
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
        },
        // 截取字符串
        ellipsisText (name, length) {
            if (name) {
                return name.substring(0, length)
            } else {
                return ''
            }
        }
    }
}
</script>
<style>

.analyItem-card .imgplementInfo .groupName, .analyItem-card .imgplementInfo .orderType {
    padding: 0 4px;
    border-radius: 3px;
    border: 1px solid orange;
}
.analyItem-card .analyItemTit {
    color: #fff;
    background: #409eff;
}
.analyItem-card .imgplementInfo .groupImg {
    overflow: hidden;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 5px;
    margin-top: 5px;
    border: 2px solid;
    border-radius: 50%;
}
.analyItem-card .imgplementInfo .groupImg img {
    width: 100%;
    height: 100%;
}
.design-img {
    height: 40px;
    width: 40px;
    float: left;
    margin-right: 10px;
    margin-bottom: 2px;
    position: absolute;
    right: 20px;
    top: 10px;
    border: 1px solid #ddd;
}
.unText {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #409eff;
}
.designList {
    max-height: 60px;
    overflow: hidden;
}
.designListAuto {
    max-height: unset;
}
.oh{
    overflow:hidden
}
.time-strong {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -9px;
}
.design-img {
    height: 40px;
    width: 40px;
    float: left;
    margin-right: 10px;
    margin-bottom: 2px;
    position: absolute;
    right: 20px;
    top: 10px;
    border: 1px solid #ddd;
}
.openBox{
    overflow: hidden;
}
</style>
