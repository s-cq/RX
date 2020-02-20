<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'入口'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">卡号登录</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">卡号</span><span class="curUserNo">{{user.appCardNo}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">密码</span>******</p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">手机登录</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">手机</span><span class="curUserMobile">{{user.mobile}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">密码</span>******</p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">二维码</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8 fl" style="text-align: center; margin-top: 10px;">二维码</span><img alt="二维码" style="width:45px;height: 45px;" class="ewmImg" :src="img"></p>
                <p class="col-md-4" style="margin-top: 10px; margin-left:-60px;text-align: center;"><span class="cLightGray pr8">密码</span>******</p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">密码设置</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8 fl">验&nbsp;&nbsp;证&nbsp;码</span>
                    <input type="text" class="width80 fl validatecode" v-model="yanZhengMa">&nbsp;&nbsp;
                        <input type="button" value="获取验证码" class="uiBtn-normal uiBtn-green  getvcode" @click="GetVcodeUpdatePwdFn()" v-if="miao==-1">
                        <span v-else>{{miao}}秒</span>
                </p>
                <p class="col-md-12 pt20"><span class="cLightGray pr8 fl">新&nbsp;&nbsp;密&nbsp;码</span><input type="password" class="width80 fl newpasswords" v-model="miMa"></p>
                <p class="col-md-12 pt20"><span class="cLightGray pr8 fl">密码确认</span><input type="password" class="width80 fl newpasswords_" v-model="queRenMiMa">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="重置密码" class="uiBtn-normal uiBtn-blue  updatepasswords " @click="UpdatePasswordVcodeFn()" style="width:80px;"></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">行为</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">最近登录</span><span class="lastedlogintime">{{time}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">登录详情</span><span class="loginlist">--</span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                </p>
                <p class="fl"><span class="circlemark circlemark-green">完</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { GetEWM, GetByUIdUserInfo, GetVcodeUpdatePwd, UpdatePasswordVcode, GetAppLastLoginTime } from '../../Resources/Api'
export default {
    data () {
        return {
            img: '',
            user: {},
            miao: -1,
            yanZhengMa: '',
            miMa: '',
            queRenMiMa: '',
            time: ''
        }
    },
    created () {
        this.GetEWMFn()
        this.GetByUIdUserInfoFn()
    },
    methods: {
        // 查询最近登陆时间
        GetEWMFn () {
            let _this = this
            _this.img = ''
            GetEWM({
                AppId: 5
            }).then(results => {
                _this.img = results.data.Body.url
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询指定人员的人事信息
        GetByUIdUserInfoFn () {
            let _this = this
            _this.user = {}
            GetByUIdUserInfo({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.user = results.data.Body
                _this.GetAppLastLoginTimeFn()
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取验证码
        GetVcodeUpdatePwdFn () {
            let _this = this
            _this.user = {}
            this.miao = 60
            GetVcodeUpdatePwd({
                phone: _this.user.mobile
            }).then(results => {
                if (results.data.StatusCode !== 0) {
                    layer.msg('获取验证码失败！', {icon: 5})
                } else {
                    let intervaNumber = window.setInterval(function () {
                        _this.miao = _this.miao - 1
                        if (_this.miao <= 0) {
                            window.clearInterval(intervaNumber)
                            _this.miao = -1
                        }
                    }, 1000)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 重置密码
        UpdatePasswordVcodeFn () {
            let _this = this
            if ($.trim(_this.yanZhengMa === '')) {
                layer.msg('验证码不能为空！', {icon: 5})
                return
            }
            if ($.trim(_this.miMa === '') || $.trim(_this.queRenMiMa === '')) {
                layer.msg('密码不能为空！', {icon: 5})
                return
            }
            if (_this.miMa !== _this.queRenMiMa) {
                layer.msg('密码确认失败！', {icon: 5})
                return
            }
            let ind = layer.load()
            UpdatePasswordVcode({
                phone: _this.user.mobile,
                newPassword: _this.miMa,
                vCode: _this.yanZhengMa
            }).then(results => {
                layer.close(ind)
                if (results.data.StatusCode === 0) {
                    layer.msg('密码修改成功！', {icon: 1})
                    _this.yanZhengMa = ''
                    _this.miMa = ''
                    _this.queRenMiMa = ''
                    _this.miao = -1
                } else {
                    layer.msg('密码修改失败！', {icon: 5})
                }
            }).catch(error => {
                layer.close(ind)
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
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
