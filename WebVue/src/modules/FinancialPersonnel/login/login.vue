<template>
    <div class="login-wrap" v-loading="isLogin">
        <div class="login-center">
            <!-- 请从wps登录系统-->
            <div class="fx_setbox ui-alignCenter mb20 mt20" v-show="!isLogin">
                <div class="fx_boxcnt">
                    <div class="fx_boxcnt_bt clearfix">
                        <div class="fx_additional-info">请从WPS打开或用参数jwt登录</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './static/login.css'
import { mapGetters, mapMutations } from 'vuex'
import { GetUserInfoByjwt } from './Resources/Api/index'
function setCookie (name, value) {
    var exp = new Date()
    exp.setTime(exp.getTime() + 3 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
export default {
    metaInfo: {
        title: '内部人事',
        titleTemplate: '%s'
    },
    data () {
        return {
            query: {},
            isLogin: true,
            areaID: null
        }
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    created () {
    // this.loadEWM()
        this.query = this.$route.query
        // 是否显示头部和侧栏
        if (this.query.cutting) {
            this.setRx({
                cutting: this.query.cutting
            })
        }
        // 使用免登录地址
        if (this.query.jwt) {
            const jwt = this.query.jwt
            this.login(jwt)
        } else {
            const jwt = this.userInfo ? this.userInfo.as_jwt : ''

            if (jwt) {
                this.login(jwt)
            } else {
                const cardNo = this.query.cardNo
                const userName = this.query.userName
                const diquId = this.query.diquId
                const type = this.query.type
                if (Number(type) === 9094) {
                    this.isLogin = true
                    this.logincaiwu(cardNo, userName, diquId)
                } else {
                    this.isLogin = false
                }
                if (Number(type) === 9095) {
                    this.isLogin = true
                    this.loginPersonnel(cardNo, userName, diquId)
                } else {
                    this.isLogin = false
                }
            }
        }
    },
    methods: {
        ...mapMutations({
            setRx: 'SET_RX',
            setUserInfo: `SET_USER_INFO`
        }),
        async login (jwt) {
            this.isLogin = false
            let _this = this
            let parm = {
                jwt: jwt
            }
            await GetUserInfoByjwt(parm).then((res) => {
                debugger
                if (res.data.StatusCode === 0) {
                    setCookie('u_diqu', res.data.Body.u_diqu)
                    setCookie('diquName', res.data.Body.diquName)
                    setCookie('u_kahao', res.data.Body.u_kahao)
                    setCookie('xinming', res.data.Body.xinming)
                    setCookie('juesename', res.data.Body.juesename)
                    setCookie('juese', res.data.Body.juese)
                    setCookie('touxiang', res.data.Body.touxiang)
                    // 将数据存到UserInfo中
                    let results = {}
                    results.as_userImg = res.data.Body.touxiang// 头像
                    results.as_diquName = res.data.Body.diquName // 地区名称
                    results.as_diquId = res.data.Body.u_diqu // 地区id
                    results.as_jueseName = res.data.Body.juesename // 角色
                    results.as_fullName = res.data.Body.xinming // 姓名
                    results.as_userName = res.data.Body.xinming // 姓名
                    results.as_cardNo = res.data.Body.u_kahao // 卡号
                    results.as_juese = res.data.Body.juese // 角色
                    results.as_timeStamp = '' // 登录时间
                    results.as_jwt = jwt // jwt
                    this.setUserInfo({ ...results })
                    _this.$router.push('/ElementRx/project')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async logincaiwu (cardNo, userName, diquId) {
            console.log(cardNo + userName + diquId)
            this.isLogin = true
            let _this = this
            setCookie('u_diqu', diquId)

            setCookie('u_kahao', cardNo)
            setCookie('xinming', userName)
            let results = {}
            // 将数据存到UserInfo中
            results.as_diquId = diquId // 地区id
            results.as_userName = userName // 姓名
            results.as_cardNo = cardNo // 卡号
            results.as_timeStamp = '' // 登录时间
            this.setUserInfo({ ...results })
            _this.$router.push('/Engineering/Salarys')
        },
        async loginPersonnel (cardNo, userName, diquId) {
            console.log(cardNo + userName + diquId)
            this.isLogin = true
            let _this = this
            setCookie('u_diqu', diquId)
            setCookie('u_kahao', cardNo)
            setCookie('xinming', userName)
            let results = {}
            // 将数据存到UserInfo中
            results.as_diquId = diquId // 地区id
            results.as_userName = userName // 姓名
            results.as_cardNo = cardNo // 卡号
            results.as_timeStamp = '' // 登录时间
            this.setUserInfo({ ...results })
            _this.$router.push('/ElementRx/project')
        }
    }
}
</script>
<style scoped>
.login-wrap {
  position: fixed !important;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: #fff;
  z-index: 10000;
}
.login-center {
  position: absolute;
  width: 647px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
}
.login-text {
  text-align: center;
}
.fx_boxcnt_bt {
  background: #009688;
}
.fx_additional-info {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  line-height: 110px;
}
</style>
