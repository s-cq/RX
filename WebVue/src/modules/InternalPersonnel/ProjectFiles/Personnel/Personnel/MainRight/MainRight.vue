<template>
    <div class="tc-right">
        <div class="tc-righttop-tab j-tc-righttop-tab">
            <ul class="RTtab clearfix">
                <!-- <li class="visitTab-btn RTtab-active2 fl">设计回访</li> -->
                <!-- <li class="visitTab-btn RTtab-active3 fl">客户回访</li> -->
                <!-- <li class="list-btn RTtab-active fl">其他按钮</li>
            <li class="list-btn RTtab-active fr">
                <router-link :to="routerPath('list')">列表</router-link>
            </li> -->
            </ul>
        </div>
        <div class="tc-right-top clearfix">
            <div class="fl needdealt">
                <!-- <ul>
                <li class="bgRed">待办一</li>
                <li class="bgOrange">待办二</li>
                <li class="bgGreen">待办三</li>
            </ul> -->
            </div>
            <div class="visitbox">
                <!-- 回访内容 #j-visit 是一个整体内容 切换列子看 Index/Right-->
                <div class="visit" id="j-visit" v-scrollHeight="250">
                    <div v-if="userHandInfoList!=null && userHandInfoList.length>0">
                        <div v-if="isGroup===1">
                            <div v-for="(surprvisorWorkLogs1,index) in surprvisorWorkLogs" :key="index">
                                <!-- <span>{{item.logreplytype}}</span> -->
                                <div v-if="surprvisorWorkLogs1.logreplytype===2">
                                    <div class="visi-list tx-left">
                                        <div class="visi-listtop">
                                            <span class="visi-name">行</span>
                                            <span class="cGreen ml5">地方行政经理</span>
                                            <span class="visi-date">
                                                <span>{{surprvisorWorkLogs1.createtime}}</span>
                                            </span>
                                            <span v-if="surprvisorWorkLogs1.importance===1" class="cGreen">正常</span>
                                            <span v-if="surprvisorWorkLogs1.importance===2" class="cOrange">异常</span>
                                            <span v-if="surprvisorWorkLogs1.importance===3" class="cRed">问题</span>
                                            <!-- <span v-else class="cGreen">正常</span> -->
                                        </div>
                                        <p class="visi-listtxt">{{surprvisorWorkLogs1.logcontent}}</p>
                                    </div>

                                </div>
                                <div v-else-if="surprvisorWorkLogs1.logreplytype===3">
                                    <div class="visi-list tx-left">
                                        <div class="visi-listtop">
                                            <span class="visi-name">人</span>
                                            <span class="cGreen ml5">地方人事</span>
                                            <span class="visi-date">
                                                <span>{{surprvisorWorkLogs1.createtime}}</span>
                                            </span>
                                            <span v-if="surprvisorWorkLogs1.importance===1" class="cGreen">正常</span>
                                            <span v-if="surprvisorWorkLogs1.importance===2" class="cOrange">异常</span>
                                            <span v-if="surprvisorWorkLogs1.importance===3" class="cRed">问题</span>
                                            <!-- <span v-else class="cGreen">正常</span> -->
                                        </div>
                                        <p class="visi-listtxt">{{surprvisorWorkLogs1.logcontent}}</p>
                                    </div>
                                </div>
                                <div v-else-if="surprvisorWorkLogs1.logreplytype===1&&ishide===0">

                                    <div class="visi-list tx-right">
                                        <div class="visi-listtop">
                                            <span v-if="surprvisorWorkLogs1.importance===1" class="cGreen">正常</span>
                                            <span v-if="surprvisorWorkLogs1.importance===2" class="cOrange">异常</span>
                                            <span v-if="surprvisorWorkLogs1.importance===3" class="cRed">问题</span>
                                            <!-- <span v-else class="cGreen">正常</span> -->
                                            <span class="visi-date">
                                                <span>{{surprvisorWorkLogs1.createtime}}</span>
                                            </span>
                                            <span class="cGreen ml5">集团工程人事</span>
                                            <span class="visi-name">集</span>

                                        </div>
                                        <p class="visi-listtxt">{{surprvisorWorkLogs1.logcontent}}</p>
                                    </div>

                                </div>
                            </div>

                            <div v-for="(userHandInfoList1,index) in userHandInfoList" :key="index+100000">
                                <!-- <span>{{item.areaId}}</span> -->
                                <div v-if="userHandInfoList1.areaId===39">
                                    <div class="visi-list tx-right">
                                        <div class="visi-listtop">
                                            <span class="scrollUl img_list">
                                                <span style="width: 30px; height: 30px;" class="img_list3 relative">

                                                </span>
                                            </span>
                                            <span class="_evaluateDeailt mr5"></span>
                                            <span v-if="userHandInfoList1.handType===1" class="cGreen">正常</span>
                                            <span v-if="userHandInfoList1.handType===2" class="cOrange">异常</span>
                                            <span v-if="userHandInfoList1.handType===3" class="cRed">问题</span>
                                            <span class="mr5 ">{{userHandInfoList1.jobLevelName}}</span>
                                            <span class="visi-date mr5">
                                                <span>{{userHandInfoList1.createTime}}</span>
                                            </span>
                                            <span class="mr5 ">{{userHandInfoList1.createUserMan}}</span>
                                            <span class="visi-name ml5">团</span>
                                        </div>
                                        <p class="visi-listtxt">{{userHandInfoList1.outline}}</p>
                                    </div>
                                </div>
                                <div v-else-if="userHandInfoList1.areaId!==39">
                                    <div class="visi-list tx-left">
                                        <div class="visi-listtop">
                                            <span class="visi-name ml5">行</span>
                                            <span class="cGreen ml5">{{userHandInfoList1.jobLevelName}}</span>
                                            <span class="cGreen ml5">{{userHandInfoList1.createUserMan}}</span>
                                            <span class="visi-date mr5">
                                                <span>{{userHandInfoList1.createTime}}</span>
                                            </span>
                                            <span v-if="userHandInfoList1.handType===1" class="cGreen">正常</span>
                                            <span v-if="userHandInfoList1.handType===2" class="cOrange">异常</span>
                                            <span v-if="userHandInfoList1.handType===3" class="cRed">问题</span>
                                            <span class="cGreen mr5">{{userHandInfoList1.handTypeName}}</span>
                                            <span class="_evaluateDeailt mr5" data-evaluate="0"></span>
                                            <span class="scrollUl img_list">
                                                <span style="width: 30px; height: 30px;" class="img_list3 relative">

                                                </span>
                                            </span>
                                        </div>
                                        <p class="visi-listtxt">{{userHandInfoList1.outline}}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div v-else>
                            <div v-for="(surprvisorWorkLogs2,index) in surprvisorWorkLogs" :key="index">
                                <div v-if="surprvisorWorkLogs2.logreplytype===1 && ishide===0">
                                    <div class="visi-list tx-left">
                                        <div class="visi-listtop">
                                            <span class="visi-name">集</span>
                                            <span class="cGreen ml5">集团工程人事</span>
                                            <span class="visi-date">
                                                <span>{{surprvisorWorkLogs2.createtime}}</span>
                                            </span>
                                            <span v-if="surprvisorWorkLogs2.importance===1" class="cGreen">正常</span>
                                            <span v-if="surprvisorWorkLogs2.importance===2" class="cOrange">异常</span>
                                            <span v-if="surprvisorWorkLogs2.importance===3" class="cGreen">问题</span>
                                            <!-- <span v-else class="cGreen">正常</span> -->

                                        </div>
                                        <p class="visi-listtxt">{{surprvisorWorkLogs2.logcontent}}</p>
                                    </div>

                                </div>
                                <div v-if="surprvisorWorkLogs2.logreplytype===3">
                                    <div class="visi-list tx-left">
                                        <div class="visi-listtop">
                                            <span class="visi-name">人</span>
                                            <span class="cGreen ml5">地方人事</span>
                                            <span class="visi-date">
                                                <span>{{surprvisorWorkLogs2.createtime}}</span>
                                            </span>
                                            <span v-if="surprvisorWorkLogs2.importance===1" class="cGreen">正常</span>
                                            <span v-if="surprvisorWorkLogs2.importance===2" class="cOrange">异常</span>
                                            <span v-if="surprvisorWorkLogs2.importance===3" class="cGreen">问题</span>
                                            <!-- <span v-else class="cGreen">正常</span> -->

                                        </div>
                                        <p class="visi-listtxt">{{surprvisorWorkLogs2.logcontent}}</p>
                                    </div>

                                </div>
                                <div v-if="surprvisorWorkLogs2.logreplytype===2">

                                    <div class="visi-list tx-right">
                                        <div class="visi-listtop">
                                            <span v-if="surprvisorWorkLogs2.importance===1" class="cGreen">正常</span>
                                            <span v-if="surprvisorWorkLogs2.importance===2" class="cOrange">异常</span>
                                            <span v-if="surprvisorWorkLogs2.importance===3" class="cGreen">问题</span>
                                            <!-- <span v-else class="cGreen">正常</span> -->

                                            <span class="visi-date">
                                                <span>{{surprvisorWorkLogs2.createtime}}</span>
                                            </span>
                                            <span class="cRed mr5">地方行政经理</span>
                                            <span class="visi-name">行</span>
                                        </div>
                                        <p class="visi-listtxt">{{surprvisorWorkLogs2.logcontent}}</p>
                                    </div>

                                </div>
                            </div>
                            <div v-for="(userHandInfoList2,index) in userHandInfoList" :key="index">
                                <div v-if="userHandInfoList2.areaId!==39">

                                    <div class="visi-list tx-right">
                                        <div class="visi-listtop">
                                            <span v-if="userHandInfoList2.handType===1" class="cGreen">正常</span>
                                            <span v-if="userHandInfoList2.handType===2" class="cOrange">异常</span>
                                            <span v-if="userHandInfoList2.handType===3" class="cRed">问题</span>
                                            <span class="scrollUl img_list">
                                                <span style="width: 30px; height: 30px;" class="img_list3 relative">

                                                </span>
                                            </span>
                                            <span class="_evaluateDeailt mr5"></span>
                                            <span class="cRed ml5">{{userHandInfoList2.jobLevelName}}</span>
                                            <span class="cRed mr5">{{userHandInfoList2.createUserMan}}</span>
                                            <span class="visi-date">
                                                <span>{{userHandInfoList2.createTime}}</span>
                                            </span>
                                            <span class="visi-name">行</span>
                                        </div>
                                        <p class="visi-listtxt">{{userHandInfoList2.outline}}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="tc-right-bottom pa10 relative">
            <div class="tc-right-bottom-left relative">
                <ul class="topdaily">
                    <li class="">
                        <a :class="['topdailybtn', currentIndex === 1 ? 'active' : '']" href="javascript:" @click="returnVisit(1)">正常</a>
                    </li>
                    <li>
                        <a :class="['topdailybtn', currentIndex === 2 ? 'active' : '']" href="javascript:" @click="returnVisit(2)">异常</a>
                    </li>
                    <li>
                        <a :class="['topdailybtn', currentIndex === 3 ? 'active' : '']" href="javascript:" @click="returnVisit(3)">问题</a>
                    </li>
                </ul>
                <div class="dailyrgt-divZi" v-if="!isShowVisit">
                    <p class="tx-center">先解决业务问题，才有资格说管理。前两个因素完成之后，再反馈系统问题。</p>
                </div>
                <div class="tc-right-bottom-left personal-right-bottom-left relative tx-center" v-if="isShowVisit">
                    <div class="visi-text-content1">
                        <textarea placeholder="请输入回访内容" v-model="content" class="mb10 pinggu-textarea" maxlength="500" style="color: rgb(169, 169, 169); border:none"></textarea>
                        <input class="worklogsubmit hf-submit" type="button" value="提交" @click="worklogsubmit()">
                    </div>
                </div>
            </div>
            <!-- <div class="EventpenaltyDiv">
            <a href="javascrpit:;" class="EventpenaltyBtn">事件平台</a>
            <a href="javascrpit:;" class="EventpenaltyBtn">平台</a>
        </div> -->
        </div>
        <!-- 三段渲染容器 -->
        <transition class="animated faster" enter-active-class="animated faster slideInLeft" leave-active-class="animated faster slideOutLeft">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { saveWorkLog, addChat, saveUserHandInfo, getUserWorkLogByUserno, getUserjibieInfo } from '../Resources/Api'
export default {
    name: '',
    components: {

    },
    data () {
        return {
            IsSubmit: false,
            handType: 0,
            isShowVisit: false, // 回访提交展示
            currentIndex: 0, // 当前Index
            content: '', // 回访内容
            userHandInfoList: {},
            isGroup: 0,
            surprvisorWorkLogs: [],
            userHandInfo: {},
            body: {},
            userDetail: {},
            ishide: 0,
            jibie: 0,
            jibiejuese: ''
        }
    },
    created () {
        this.getUserWorkLogByUsernoFn()
    },
    computed: {
        ...mapGetters(['userInfo', 'leftInfo'])
    },
    methods: {
        ...mapMutations({
            setleftInfo: `SET_LEFT_INFO`
        }),
        // 默认到底部
        scrollToBottom () {
            this.$nextTick(() => {
                var container = this.$el.querySelector('.visit')
                container.scrollTop = container.scrollHeight
            })
        },
        // 获取数据
        getUserWorkLogByUsernoFn () {
            this.userHandInfoList = {}
            this.surprvisorWorkLogs = {}
            this.userDetail = {}
            getUserWorkLogByUserno({
                curUserCard: this.userInfo.as_cardNo,
                userno: this.leftInfo.cardNo
            }).then(results => {
                this.body = results.data.Body
                this.userHandInfoList = this.body.userHandInfoList
                this.isGroup = this.body.IsGroup
                this.surprvisorWorkLogs = this.body.SurprvisorWorkLogs
                this.userHandInfo = this.body.userHandInfo
                this.userDetail = this.body.userDetail
                this.ishide = this.body.ishide
                this.scrollToBottom()
            }).catch(error => {
                console.log(error)
            })
        },

        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        returnVisit (index) {
            this.currentIndex = index
            this.isShowVisit = true
            this.content = ''
        },
        worklogsubmit () {
            var handType = Number(this.currentIndex)
            var Importance = this.currentIndex
            var evaluationlevel = 0
            var content = this.content
            var userWorkLog = {}
            userWorkLog.outline = content
            userWorkLog.taskStatus = 1
            // 异常
            if (Number(Importance) === 2) {
                userWorkLog.handType = 13
                // 问题
            } else if (Number(Importance) === 3) {
                userWorkLog.handType = 14
            } else {
                userWorkLog.handType = 12
            }

            saveWorkLog({
                importance: Importance,
                evaluationlevel: evaluationlevel,
                logreplytype: this.userInfo.as_diquId === 39 ? 1 : 2,
                logtype: 16,
                createUserNo: this.leftInfo.cardNo,
                createUserMan: this.leftInfo.userName,
                logcontent: content,
                projectarea: this.userInfo.as_diquId
            }).then(results => {
                // 处理信息推送到 大院投资人事
                var userHandInfo = {}
                userHandInfo.handType = handType === 1 ? 12 : (handType === 2 ? 13 : (handType === 3 ? 14 : 0))
                userHandInfo.outline = content
                userHandInfo.evaluateAnswer = this.loglabel
                this.addChatFn(userHandInfo)
                this.saveUserHandInfoFn(userWorkLog)
                // this.getUserWorkLogByUsernoFn()
                this.isShowVisit = false
                this.currentIndex = 0
                const currentleftInfo = this.leftInfo
                this.setleftInfo({
                    ...currentleftInfo,
                    Status: 1
                })
                this.scrollToBottom()
            }).catch(error => {
                console.log(error)
            })
        },
        // 处理信息推送到 大院投资人事
        addChatFn (userHandInfo) {
            var handType = userHandInfo.handType
            var evaluateAnswer = ''
            if (handType === 12 || handType === 13 || handType === 14) {
                evaluateAnswer = userHandInfo.evaluateAnswer // 评价结果id，用英文分号隔开，类似于 12;13;15;47 可不传
            }
            getUserjibieInfo({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                this.jibie = results.data.Body.js_id
                this.jibiejuese = results.data.Body.js_name
                addChat({
                    // var hrLevel = parseInt('u_jibie')
                    departId: 4, // 部门编号 2-商务 3-主案 4-工程
                    departName: '工程部', // 部门名称 工程部
                    postId: this.jibie, // 当前登录角色级别
                    postName: this.jibiejuese, // 当前登录角色名称
                    sysType: '工程人事系统回访', // 来源系统 例如：工程人事系统回访，商务部门经理系统，主案日常谈单回
                    // 0，无数据 1正常，2问题，3异常 4、整改 5、淘汰6、奖罚 7、红包 8、培训 9、观察 10、培前 11、赔后 12、结束
                    levelType: handType === 2 ? 4 : (handType === 3 ? 6 : (handType === 4 ? 5 : (handType === 5 ? 7 : (handType === 6 ? 0 : (handType === 7 ? 8 : (handType === 8 ? 10 : (handType === 9 ? 11 : (handType === 10 ? 9 : (handType === 11 ? 12 : (handType === 12 ? 1 : (handType === 13 ? 2 : (handType === 14 ? 3 : 0)))))))))))),
                    evaluate: 0, // 0 无 1 优 2良 3中 4差
                    text: userHandInfo.outline, // 回访内容
                    cardNo: this.leftInfo.cardNo, // 卡号
                    loginCardNo: this.userInfo.as_cardNo,
                    revisitDays: this.getFormatDate(), // 回访时间
                    checkMainID: 4, // 部门表主键
                    regionId: this.userInfo.as_diquId, // 地区编号
                    evaluateAnswer: evaluateAnswer
                }).then(results => {
                    if (results.data.State === 0) {
                        parent.layer.msg('处理推送成功')
                    } else {
                        parent.layer.msg('系统错误，请联系系统管理员！', { icon: 5, time: 1000 })
                    }
                }).catch(error => {
                    console.log(error)
                    parent.layer.msg('系统错误，请联系系统管理员！', { icon: 5, time: 1000 })
                })
            }).catch(error => {
                console.log(error)
            })
        },
        // 存储处理用户处理新接口
        saveUserHandInfoFn (userWorkLog) {
            var curUserNo = this.userInfo.as_cardNo // 当前登录用户的卡号
            var curUserName = this.userInfo.as_userName // 当前登录用户姓名
            saveUserHandInfo({
                user_card_no: this.leftInfo.cardNo, // 用户卡号（唯一性，被处理人员的卡号）
                hrType: 1, /// /人事类型：1内部人事，2外部人事-材料商,3工程Integer
                createdBy: curUserNo, // 任务创建者卡号
                modifyBy: curUserNo, // 修改任务者卡号
                remarks: curUserNo + curUserName + userWorkLog.outline, // 本条数据简述（也做备用字段）
                delFlag: 0, // 删除标记（0：正常；1：删除；2：审核）
                createUserMan: curUserName, // 当前登录用户姓名
                outline: userWorkLog.outline,
                handType: userWorkLog.handType,
                taskStatus: 1
            }).catch(error => {
                console.log(error)
                parent.layer.msg('添加处理信息失败，请稍后再试！', { icon: 5, time: 1000 })
            })
        },
        getFormatDate () {
            var nowDate = new Date()
            var year = nowDate.getFullYear()
            var month = nowDate.getMonth() + 1 < 10 ? '0' + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1
            var date = nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate()
            var hour = nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours()
            var minute = nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes()
            var second = nowDate.getSeconds() < 10 ? '0' + nowDate.getSeconds() : nowDate.getSeconds()
            return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
        }
    },
    filters: {

    },
    watch: {
        leftInfo () {
            this.getUserWorkLogByUsernoFn()
        }
    }
}
</script>
<style lang="scss" scoped>
.visi-text-content1 {
  height: calc(100% - 40px);
  textarea {
    width: 100%;
    height: 80%;
  }
}
</style>
