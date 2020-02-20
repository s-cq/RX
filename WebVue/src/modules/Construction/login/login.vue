<template>
  <div class="login-wrap"
       v-loading="isLogin">
    <div class="login-center">
      <!-- 请从wps登录系统-->
      <div class="fx_setbox ui-alignCenter mb20 mt20"
           v-show="!isLogin">
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
import { GetUserInfoByjwt, getCityId } from './Resources/Api/index'
// 测试
// var clpurl = 'http://192.168.1.68:9101/api'
// 线上
// var clpurl = 'https://gapi.rxjy.com/api'
// var myInterval = null
function setCookie (name, value) {
    var exp = new Date()
    exp.setTime(exp.getTime() + 3 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
export default {
    metaInfo: {
        title: '施工店铺',
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
            if (this.query.areaID) {
                this.getAreaID(jwt)
            } else {
                this.login(jwt)
            }
        } else {
            const jwt = this.userInfo ? this.userInfo.as_jwt : ''
            if (jwt) {
                if (this.query.areaID) {
                    this.getAreaID(jwt)
                } else {
                    this.login(jwt)
                }
            } else {
                this.isLogin = false
            }
        }
    },
    methods: {
        ...mapMutations({
            setRx: 'SET_RX',
            setUserInfo: `SET_USER_INFO`
        }),
        async getAreaID (jwt) {
            let params = {
                areaID: this.query.areaID
            }
            await getCityId(params).then((res) => {
                if (res.data.StatusCode === 1) {
                    this.areaID = res.data.Body.cityID
                    this.login(jwt)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 选项卡切换
        // tabIdChange (index) {
        //     this.tabId = index
        // },
        async login (jwt) {
            this.isLogin = false
            let _this = this
            let tempFlag = this.query.tempFlag
            let parm = {
                jwt: jwt
            }
            await GetUserInfoByjwt(parm).then((res) => {
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
                    results.as_cardNo = res.data.Body.u_kahao // 卡号
                    results.as_juese = res.data.Body.juese // 角色
                    results.as_timeStamp = '' // 登录时间
                    results.as_jwt = jwt // jwt
                    results.as_areaId = this.areaID
                    results.as_level = []
                    this.setUserInfo({ ...results })
                    let params = {
                        areaID: res.data.Body.u_diqu,
                        userNo: res.data.Body.u_kahao
                    }
                    getCityId(params).then((res) => {
                        if (res.data.StatusCode === 1) {
                            const userInfo = this.userInfo
                            this.setUserInfo({
                                ...userInfo,
                                'as_level': res.data.Body.level
                            })
                        }
                    }).catch((error) => {
                        console.log(error)
                    })

                    switch (tempFlag) {
                    case '1':
                        _this.$router.push('/projectFiles/Department')
                        break
                    case '2':
                        _this.$router.push('/projectFiles/Term')
                        break
                    default:
                        _this.$router.push('/projectFiles/Project')
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    // Login () {
    //     this.isLogin = false
    //     let _this = this
    //     let jwt = this.query.jwt
    //     let tempFlag = this.query.tempFlag
    //     localStorage.ljwt = jwt
    //     $.ajax({
    //         type: 'get',
    //         url: clpurl + '/PhoneSupervisor/GetUserInfoByjwt',
    //         data: {'jwt': jwt},
    //         dataType: 'json',
    //         success: function (res) {
    //             if (res.StatusCode === 0) {
    //                 setCookie('u_diqu', res.Body.u_diqu)
    //                 setCookie('diquName', res.Body.diquName)
    //                 setCookie('u_kahao', res.Body.u_kahao)
    //                 setCookie('xinming', res.Body.xinming)
    //                 setCookie('juesename', res.Body.juesename)
    //                 setCookie('juese', res.Body.juese)
    //                 setCookie('UserID', res.Body.$UserID)
    //                 // 将数据存到UserInfo中
    //                 let results = {}
    //                 results.as_userImg = '' // 头像
    //                 results.as_diquName = res.Body.diquName // 地区名称
    //                 results.as_jueseName = res.Body.juesename // 角色
    //                 results.as_fullName = res.Body.xinming // 姓名
    //                 results.as_cardNo = res.Body.u_kahao // 卡号
    //                 results.as_timeStamp = '' // 登录时间
    //                 results.as_jwt = this.query.jwt // jwt
    //                 this.setUserInfo({...results})
    //                 switch (tempFlag) {
    //                 case '1':
    //                     _this.$router.push('/projectFiles/Department')
    //                     break
    //                 case '2':
    //                     _this.$router.push('/projectFiles/Term')
    //                     break
    //                 default:
    //                     _this.$router.push('/projectFiles/Project')
    //                 }
    //             } else {
    //                 $('.loginMessage').html(res.statusMsg)
    //             }
    //         }
    //     })
    // }

    // getLoginStatus (loginId) {
    //     var _this = this
    //     // 定时器循环请求
    //     // 获取二维码登录状态
    //     $.ajax({
    //         url: 'https://piapi.rxjy.com/actionapi/AppLogin/GetCheckEWMLogin',
    //         type: 'get',
    //         dataType: 'json',
    //         data: { loginId: loginId },
    //         success: function (result) {
    //             // --获取用户信息------
    //             if (result.StatusCode === 0) {
    //                 // console.log("验证成功");
    //                 _this.ewmTimeOut(myInterval)
    //                 $.ajax({
    //                     url: 'https://piapi.rxjy.com//actionapi/AppPreUser/GetAppUserInfo',
    //                     type: 'post',
    //                     dataType: 'json',
    //                     data: { appid: result.Body.app_id, post: 5 },
    //                     success: function (res) {
    //                         // -----------登录系统----------------https://gclpt.rxjy.com
    //                         if (res.StatusCode === 0) {
    //                             $.ajax({
    //                                 type: 'get',
    //                                 url: clpurl + '/materialDealerApi/materialDealerLogin',
    //                                 data: {'username': res.Body[0].a_account},
    //                                 dataType: 'json',
    //                                 success: function (res) {
    //                                     if (res.statusCode >= 1) {
    //                                         if (res.statusCode === 2) {
    //                                             $('.loginMessage').html(res.statusMsg)
    //                                         } else {
    //                                             setCookie('uid', res.body)
    //                                             _this.$router.push('/Shops')
    //                                         }
    //                                     } else {
    //                                         $('.loginMessage').html(res.statusMsg)
    //                                     }
    //                                 }
    //                             })
    //                         }
    //                         // -----------登录系统end----------------
    //                     }
    //                 })
    //             }
    //             // --获取用户信息end------
    //         }
    //     })
    // },
    // ewmTimeOut (myInterval) {
    //     // 二维码超时
    //     clearInterval(myInterval)// 停止定时器
    //     $('.appCodeRefresh').show()
    // }
    }
}
// import { getManagerLeftList } from '../Resources/Api'

// // 调用获取二维码的
// $(function () {
//     /* 点击这里 */
//     $('.btnLeft').click(function () {
//         $('.makeDesigner .makeBox').removeClass('dis-none')
//         $('.makeDesigner .makehideBox').addClass('dis-none')
//         $('.alertMask').show()
//         $('.makeDesigner').show()
//     })
//     /* 关闭免费预约弹框 */
//     $('.makeClose').click(function () {
//         $('.alertMask').hide()
//         $('.makeDesigner').hide()
//     })
//     // 二维码
//     $('.appcodebox').hover(function () {
//         $(this).css({
//             left: '-46px'
//         })
//         $('.appcodeexample').stop().animate({
//             opacity: '1'
//         }, 200)
//     }, function () {
//         $(this).css({
//             left: '0'
//         })
//         $('.appcodeexample').stop().animate({
//             opacity: '0'
//         }, 200)
//     })
// })


// 计算login高度您正在为账号
// function loginH () {
//     var ClienH = $(window).height()
//     var oHeadH = $('.header').outerHeight() + $('.header2').outerHeight() + 2
//     var ofootH = $('.footer').outerHeight()
//     if (ClienH - oHeadH - ofootH < 394) {
//         $('.login').css('height', '394px')
//         $('.loginCon ').css('padding-top', '0px')
//     } else {
//         $('.login').css('height', ClienH - oHeadH - ofootH + 'px')
//         $('.loginCon ').css('padding-top', (ClienH - oHeadH - ofootH - 394) / 2 + 'px')
//     }
// }

// $(function () {
//     loginH()
//     $(window).resize(function () {
//         loginH()
//     })

//     var aLoginInp = $('.loginTxt input')
//     aLoginInp.focus(function () {
//         $(this).parent().addClass('focus')
//     })
//     aLoginInp.blur(function () {
//         $(this).parent().removeClass('focus')
//     })

//     // 找回密码
//     $('.forgetPassword').click(function () {
//         $('.passMask').show()
//         $('.backPasswordBox').show()
//     })

//     $('.closePass2').click(function () {
//         $('.backPasswordBox').hide()
//     })

//     $('.tellBack').click(function () {
//         $('.backPasswordBox').hide()

//         $('.tellBackBox1').show(0, function () {
//             $(this).css({ marginTop: -$('.tellBackBox1').height() / 2 })
//         })
//     })

//     $('.closePass3').click(function () {
//         $('.tellBackBox1').hide()
//     })
// })
// 忘记密码
// $('.forgetpass').click(function () {
//     $('.backPasswordBox,.alertMask').show()
// })
// $('.closePass2').click(function () {
//     $('.backPasswordBox,.alertMask').hide()
// })
// $('.closePass3').click(function () {
//     $('.tellBackBox1,.alertMask').hide()
// })

// // pc登入
// function Login () {
//     debugger
//     this.$router.push('/Shops')
//     var username = $('#username').val()
//     var userpwd = $('#userpwd').val()
//     $.ajax({
//         url: 'https://piapi.rxjy.com/actionapi/AppLogin/Login',
//         type: 'post',
//         dataType: 'json',
//         data: { cardNo: username, password: userpwd, AppId: 6, isPc: 1},
//         success: function (res) {
//             if (res.StatusCode == 0) {
//                 window.location.href = '/a/userinformation/pmUserInfoFull/getSuccessinboarding?username=' + username
//             } else {
//                 var msg = ''
//                 if (res != undefined && res.StatusMsg != undefined) {
//                     msg = res.StatusMsg
//                 }
//                 $('.loginMessage').html(msg)
//             }
//         },
//         error: function () {
//             $('.loginMessage').html('登录异常')
//         }
//     })
// }
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
