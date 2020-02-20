<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon clearfix"><span class="circlemark circlemark-yellow">中</span></div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <router-link tag="div" :to="routerPath('personnelEntrance')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">入口</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4 lh28"><span class="cLightGray pr10">身份</span><span class="idCheck">验证通过</span></p>
                    <p class="fl col-md-4 lh28"><span class="cLightGray pr10">登录</span><span class="loginCheck cGreen">允许</span></p>
                    <p class="fl col-md-4 lh28"><span class="cLightGray pr10">进展</span><span class="cRed ziLiaoJinZhan">Z2未完善</span></p> <span class="circlemark fl mt10 circlemark-lightRed inUserEntranceStage">J3</span>
                </div>
            </router-link>

            <router-link tag="div" :to="routerPath('personnelInformation')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">信息</p>
                <div class="analyItemCon">
                    <div class="col-md-8">
                        <p class="fl col-md-6"><span class="cLightGray pr8">姓名</span><span>{{user.u_xingming}}&nbsp;&nbsp;&nbsp;{{user.u_xingbie}}</span></p>
                        <p class="fl col-md-6"><span class="cLightGray pr8">状态</span><span>{{user.u_zhuangtai}}</span></p>
                        <p class="fl col-md-6"><span class="cLightGray pr8">卡号</span><span>{{user.u_kahao}}</span></p>
                        <p class="fl col-md-6"><span class="cLightGray pr8">工龄</span><span>{{user.seniority}}</span></p>
                        <p class="fl col-md-6"><span class="cLightGray pr8">生日</span><span>{{user.u_birthDay}}</span></p>
                        <p class="fl col-md-6"><span class="cLightGray pr8">电话</span>{{user.u_shouji}}<span></span></p>
                        <p id="ReturnInfo" class="fl col-md-6 cRed"></p>
                    </div>
                    <div class="col-md-3"><img :src="user.img_url" alt="" width="75" height="90"></div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'personnelPosition',params:{user:user,abilityLevel:abilityLevel}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">职务</p>
                <div class="analyItemCon">
                    <div class="clearfix relative">
                        <div class="col-md-2 pr1 mt10"><img alt="个人照片" :src="user.img_url" width="57" height="67"></div>
                        <div class="col-md-8">
                            <p class="col-md-3"><span class="cLightGray pr8">姓名</span><span>{{user.u_xingming}}</span></p>
                            <p class="col-md-5"><span class="cLightGray pr8">卡号</span><span>{{user.u_kahao}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">邀请码</span><span>{{user.code}}</span></p>
                            <p class="col-md-3"><span class="cLightGray pr8">工龄</span><span>{{user.seniority}}月</span></p>
                            <p class="col-md-5"><span class="cLightGray pr8">入职</span><span>{{user.u_ruzhitime}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">级别</span><span>{{abilityLevel}}</span></p>
                            <p class="col-md-3"><span :data-title="user.bm_name" class="cLightGray pr8">部门</span><span></span></p>
                            <p class="col-md-5"><span class="cLightGray pr8">分组</span><span>{{user.js_name}}</span></p>
                            <p class="col-md-4"><span class="cLightGray pr8">职务</span><span :data-title="user.zw_name">{{user.zw_name}}</span></p>

                        </div>

                        <div style="float:left;" class="mt10">
                            <img alt="二维码" :src="user.code_url" width="57" height="67">
                        </div>

                    </div>

                </div>
            </router-link>
            <router-link tag="div" :to="{name:'personnelGenerallevel',params:{isGroup:isGroup,gradeByAbilityLevel:gradeByAbilityLevel}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">普级</p>
                <div class="analyItemCon">
                    <p class="col-md-6"><span class="cLightGray pr8">级别</span><span>{{gradeByAbilityLevel.grade}}</span></p>
                    <p class="col-md-6"><span class="cLightGray pr8">历史</span>
                        <span class="pr8">{{general.createTime}}</span> <span>{{general.oldLevel}}</span> <span>{{levleStatus}}</span> <span>{{general.abilityLevel}}</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'personnelManagementlevel',params:{isGroup:isGroup,gradeByManageLevel:gradeByManageLevel}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">管级</p>
                <div class="analyItemCon">
                    <p class="col-md-6"><span class="cLightGray pr8">级别</span><span>{{gradeByManageLevel.grade==null?0:gradeByManageLevel.grade}}</span></p>
                    <p class="col-md-6"><span class="cLightGray pr8">历史</span>
                        <span class="pr8">{{manage.createTime}}</span> <span>{{manage.oldLevel==null?0:manage.oldLevel}}</span> <span>{{levleStatusManage==null?'':levleStatusManage}}</span> <span>{{gradeByManageLevel.grade==null?0:gradeByManageLevel.grade}}</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('personnelKeypoint')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">攻坚</p>
                <div class="analyItemCon">
                    <p class="col-md-2"><span class="cLightGray pr8">次数</span> <span>{{valiantCount}}次</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">结束</span> <span></span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">地区</span> <span>{{valiant.dis_name}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span> <span>{{valiantCount == 0 ? '无' : '开启'}}</span></p>
                    <span href="javascript:" class="circlemark" :class="finishStatus | circleColor">{{finishStatus | resultColor}}</span>
                </div>
            </router-link>
            <div class="analyItem">
                <p class="analyItemTit tx-center">标签</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">培养</span><span>{{sign.educateTitle}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">特征</span><span>{{sign.featureTitle}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">特长</span><span>{{sign.specialTitle}}</span></p>
                </div>
            </div>
            <router-link tag="div" :to="routerPath('personnelTraining')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <!-- 原版函授和面授等于3和其他的都是未开启，不知是何意义，备注 -->
                    <p class="fl col-md-4"><span class="cLightGray pr8">函授</span> <span class="cRed">{{correspondenceDetail.train_flag==1?'开启中':'未开启'}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">面授</span> <span class="cRed">{{faceDetail.train_flag==1?'开启中':'未开启'}}</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('personnelCertificate')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">证用</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">是否有证</span><span>{{body.paperwork}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">次数</span><span id="">0次</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('personnelNotice')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">通知</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">次数</span><span id="NoticeCnt">{{noticeCnt}}</span></p>
                </div>
            </router-link>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('personnelHandling')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">

                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { getUseUseTwoEndUserDetail, selectComCareInfoUseHuman, getAppNoticeGroup } from '../Resources/Api'
import { mapGetters } from 'vuex'


export default {
    data () {
        return {
            datainfo: [],
            user: { u_xingming: '' },
            gradeByAbilityLevel: {},
            general: { createTime: '', oldLevel: '', abilityLevel: '' },
            valiant: '',
            valiantList: [],
            sign: '',
            valiantCount: 0,
            finishStatus: 2,
            abilityLevel: '',
            YW_BYCnt: 0,
            YW_BYWDCnt: 0,
            XC_BYCnt: 0,
            XC_BYWDCnt: 0,
            SJ_BYCnt: 0,
            SJ_BYWDCnt: 0,
            correspondenceDetail: { train_flag: 3 },
            faceDetail: { train_flag: 3 },
            body: {},
            levleStatus: '',
            levleStatusManage: '',
            gradeByManageLevel: {},
            noticeCnt: 0,
            isGroup: 0,
            manage: { createTime: '', oldLevel: '', abilityLevel: '' },
            tongzhi: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'updatePlate'])
    },
    created () {
        this.load()
    },

    methods: {

        load () {
            getUseUseTwoEndUserDetail({ user_card_no: this.leftInfo.cardNo, login_card_no: this.userInfo.as_cardNo })
                .then(result => {
                    this.manage = { createTime: '', oldLevel: '', abilityLevel: '' }
                    this.general = { createTime: '', oldLevel: '', abilityLevel: '' }
                    this.levleStatusManage = ''
                    if (result.data.Body !== null) {
                        this.body = result.data.Body
                        this.user = this.body.userInfo
                        this.abilityLevel = this.body.internalUserLevel.abilityLevel
                        if (this.body.general != null) {
                            this.general = this.body.general
                            this.levleStatus = this.general.oldLevel <= this.general.abilityLevel ? '升' : '降'
                        }
                        if (this.body.manage != null) {
                            this.manage = this.body.manage
                            this.levleStatusManage = this.manage.oldLevel <= this.manage.manageLevel ? '升' : '降'
                        }

                        this.gradeByManageLevel = this.body.gradeByManageLevel
                        this.internalUserLevel = this.body.internalUserLevel
                        this.gradeByAbilityLevel = this.body.gradeByAbilityLevel
                        this.isGroup = this.body.isGroup
                        if (this.body.correspondenceDetail != null) {
                            this.correspondenceDetail = this.body.correspondenceDetail
                        }
                        if (this.body.faceDetail != null) {
                            this.faceDetail = this.body.faceDetail
                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                })

            selectComCareInfoUseHuman({ cardNo: this.leftInfo.cardNo })
                .then(msg => {
                    if (msg != null && msg !== '' && msg !== undefined) {
                        this.valiant = msg
                        if (msg.finish_status != null && msg.finish_status !== '' && msg.finish_status !== undefined) {
                            this.finishStatus = msg.finish_status
                        }
                        if (msg.list != null && msg.list !== '' && msg.list.length > 0) {
                            this.valiantList = msg.list
                            this.valiantCount = msg.list.length
                        }
                        this.$nextTick(function () {
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })


            var isapp = 5
            getAppNoticeGroup({ cardNo: this.leftInfo.cardNo, isapp })
                .then(result => {
                    this.tongzhi = result.data.Body
                    if (result.data.StatusCode === 0) {
                        for (var i = 0; i < this.tongzhi.length; i++) {
                            var group = this.tongzhi[i].group// 1  薪酬通知 2、奖罚通知  3、业务通知  4、其它
                            this.state = this.tongzhi[i].state// 0未读，1已读
                            switch (group) {
                            case '1':
                                this.XC_BYCnt = this.tongzhi[i].notice_countSum == null ? 0 : this.tongzhi[i].notice_countSum
                                break
                            case '2':
                                this.SJ_BYCnt = this.tongzhi[i].notice_countSum == null ? 0 : this.tongzhi[i].notice_countSum
                                break
                            case '3':
                                this.YW_BYCnt = this.tongzhi[i].notice_countSum == null ? 0 : this.tongzhi[i].notice_countSum
                                break
                            }
                        }
                    }
                    this.noticeCnt = Number(this.YW_BYCnt) + Number(this.XC_BYCnt) + Number(this.SJ_BYCnt)
                })
                .catch(err => {
                    console.log(err)
                })
        },


        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        dateFtt (fmt, date) { // author: meizz
            var o = {
                'M+': date.getMonth() + 1, // 月份
                'd+': date.getDate(), // 日
                'h+': date.getHours(), // 小时
                'm+': date.getMinutes(), // 分
                's+': date.getSeconds(), // 秒
                'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
                'S': date.getMilliseconds() // 毫秒
            }
            if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
            }
            return fmt
        }
    },
    // 這個轉日期的方法再問

    filters: {
    // formatDate: function (value) {
    //     if (value === undefined || value === '-') { return '未' }
    //     var date = new Date(value)
    //     return dateFtt('yyyy-MM-dd', date)
    // },

        mangerColor: function (str) {
            if (str > 0) {
                return 'circlemark-green'
            } else {
                return 'circlemark-purple'
            }
        },
        circleColor: function (str) {
            switch (str) {
            case 0:
                return 'circlemark-green'

            case 1:
                return 'circlemark-red'

            case 2:
                return 'circlemark-gray'
            }
        },
        resultColor: function (str) {
            switch (str) {
            case 0:
                return '完'

            case 1:
                return '未'

            case 2:
                return '无'
            }
        }
    },

    watch: {
        leftInfo () {
            this.load()
        },
        updatePlate () {
            this.load()
        }
    }
}
</script>
