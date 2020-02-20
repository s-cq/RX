<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">工龄</span>
                    <span class="pSeniority">0月</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">级别</span>
                    <span class="cGreen rankClass">{{user.showLevel}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">地区</span>
                    <span class="regionClass">{{user.region}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail?time='+time)" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">入口</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">身份</span>
                    <span class="pSeniority" >{{user.stagestate>1?'已验证':'未验证'}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">进展</span>
                    <span class="cGreen rankClass" v-if="user.stagestate>1">{{user.stagestate===2?'J3未完善':user.stagestate===3?'P未完善':user.stagestate===4?'J4未完善':'J5'}}</span>
                    <span class="cGreen rankClass" v-else>J2未完善</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">最近登录</span>
                    <span class="regionClass">{{time}}</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">信息</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                    <p>
                        <span class="cLightGray pr8">姓名</span>
                        <span class="pName">{{user.userName}}</span>
                    </p>
                    <p>
                        <span class="cLightGray pr8">状态</span>
                        <span class="userStateClass" v-if="user.userState==1">临时</span>
                        <span class="userStateClass" v-else-if="user.userState==2">正式</span>
                        <span class="userStateClass" v-else-if="user.userState==3 || user.userState==6 || user.userState==7 || user.userState==8">停工</span>
                        <span class="userStateClass" v-else>待离职</span>
                    </p>
                </div>
                <div class="col-md-3">
                    <p>
                        <span class="cLightGray pr8">押金</span>
                        <span class="pledgeMoneyClass">{{user.depositCash}}</span>
                    </p>
                </div>
                <div class="col-md-3">
                    <p class="workerNumClass" v-if="5-user.workerNewNum>0">
                        <span class="cRed pr8">工人差</span>
                        <span class="workerNewNumClass">{{user.workerNewNum!==undefined && user.workerNewNum!==''?(5-user.workerNewNum &lt; 0?0:5-user.workerNewNum):5}}人</span>
                    </p>
                    <p class="projectNumClass" v-if="2-user.projectNewNum>0">
                        <span class="cRed pr8">项目差</span>
                        <span class="projectNewNumClass">{{user.projectNewNum!==undefined && user.projectNewNum!==''?(2-user.projectNewNum &lt; 0?0:2-user.projectNewNum):2}}个</span>
                    </p>
                </div>
                <span class="circlemark circlemark-purple">待</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">职务</p>
            <div class="analyItemCon">
                <div class="col-md-2 mt10">
                    <img :src="user.image" height="80" width="60" class="imageClass">
                </div>
                <div class="col-md-8">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">姓名</span>
                        <span class="pName">{{user.userName}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">职务</span>
                        <span>项目经理</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">卡号</span>
                        <span class="pCardNo">{{user.appCardNo}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8 ">邀请码</span>
                        <span class="InvitationNo">{{user.appCardNo}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">工龄</span>
                        <span class="pSeniority">{{user.workingYears}}月</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">级别</span>
                        <span class="rankClass">{{user.showLevel}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">地区</span>
                        <span class="regionClass">{{user.region}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">入职</span>
                        <span class="dataTimeClass">{{user.workDate | slice(0,10)}}</span>
                    </p>
                </div>
                <div class="col-md-2" style="padding-top: 30px;">
                    <img style="width:45px;height: 45px;" alt="二维码" class="QRclass" :src="img">
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">级别</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">级别</span>
                    <span class="cGreen w700 fz18 rankClass">{{user.showLevel}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">接单量</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">接单额</span>
                    <span>0</span>
                </p>
                <span class="circlemark">
                    <i class="cGreen w700 fz18 rankClass">{{user.showLevel}}</i>
                </span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">培训</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">函授</span>
                    <span class="cRed">未开启</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">面授</span>
                    <span class="cRed">未开启</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail5')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">通知</p>
            <div class="analyItemCon">
                <div class="col-md-10 pt5" style="padding-left:15px">
                    <p class="fl col-md-8"><span class="cLightGray pr8">标题</span><span class="informTitleClass">{{title}}</span></p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">统计</span><span class="cRed noticeCountClass">{{noticeCount}}</span>
                        <span class="cGreen countClass">{{noticeSum-noticeCount}}</span>/<span class="countSumClass">{{noticeSum}}</span>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { GetByUIdUserInfo, GetAppNoticeNoRead, GetAppNoticeGroup, GetAppLastLoginTime, GetQRCodeUrl } from '../Resources/Api'
export default {
    data () {
        return {
            user: {},
            title: '',
            noticeCount: 0, // 当前通知数量
            noticeSum: 0, // 总通知数量
            time: '',
            img: ''
        }
    },
    created () {
        this.GetByUIdUserInfoFn()
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
        // 查询指定人员的人事信息
        GetByUIdUserInfoFn () {
            let _this = this
            _this.user = {}
            GetByUIdUserInfo({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.user = results.data.Body
                this.GetAppNoticeNoReadFn()
                this.GetAppNoticeGroupFn()
                this.GetAppLastLoginTimeFn()
                this.GetQRCodeUrlFn()
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取人事的通知
        GetAppNoticeNoReadFn () {
            let _this = this
            _this.title = ''
            GetAppNoticeNoRead({
                CardNo: _this.user.appCardNo
            }).then(results => {
                _this.title = results.data.Body.length > 0 ? results.data.Body[0].title : ''
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取人事通知统计数据
        GetAppNoticeGroupFn () {
            let _this = this
            _this.noticeCount = 0
            _this.noticeSum = 0
            GetAppNoticeGroup({
                CardNo: _this.user.appCardNo,
                IsApp: 5
            }).then(results => {
                for (let i = 0; i < results.data.Body.length; i++) {
                    _this.noticeCount = _this.noticeCount + Number(results.data.Body[i].notice_count)
                    _this.noticeSum = _this.noticeSum + Number(results.data.Body[i].notice_countSum)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询最近登陆时间
        GetAppLastLoginTimeFn () {
            let _this = this
            _this.time = ''
            GetAppLastLoginTime({
                CardNo: _this.user.appCardNo,
                AppId: _this.user.rsAppId
            }).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.time = results.data.Body.replace('/', '-')
                    _this.time = _this.time.replace('/', '-')
                } else {
                    _this.time = ''
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取二维码
        GetQRCodeUrlFn () {
            let _this = this
            _this.img = ''
            GetQRCodeUrl({
                url: _this.user.appCardNo
            }).then(results => {
                _this.img = results.data
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leftInfo () {
            this.GetByUIdUserInfoFn()
        },
        updatePlate () {
            this.GetByUIdUserInfoFn()
        }
    }
}
</script>
