<template>
<div class="tc-right">
    <div class="tc-righttop-tab j-tc-righttop-tab">
        <ul class="RTtab clearfix">
            <li class="visitTab-btn fl RTtab-active2" style="background:#f33;">
                <a :href="dynamicHref" target="_blank">客户端</a>
            </li>
            <!-- <li class="visitTab-btn RTtab-active2 fl">设计回访</li> -->
            <!-- <li class="visitTab-btn RTtab-active3 fl">客户回访</li> -->
            <!-- <li class="list-btn RTtab-active fl">其他按钮</li>-->
            <li class="list-btn RTtab-active fr">
                <router-link :to="routerPath('list')">列表</router-link>
            </li>
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
                    <div v-if="returnVisitList!=null && returnVisitList.length>0">
                        <div v-for="(item, index) in returnVisitList" :key="index">
                            <div class="visi-list tx-left" v-if="item.logtype===0 | item.logtype===1 | item.logtype===3 ">
                                <div class="visi-listtop">
                                    <span class="visi-name">{{item.logtype===0?'集':item.logtype===1?'地':'地'}}</span>
                                    <span class="visi-date">{{item.logtype===0?'':item.logtype===1?'地监':'地工'+item.createuserman}}</span>
                                    <span class="visi-date">{{ item.createtime }}</span>
                                    <span class="cRed">{{ item.problemcontent }}</span>
                                </div>
                                <p :class="'' | worklog_cont_color " v-html="item.logcontent">
                                </p>
                            </div>
                            <div class="visi-list tx-right" :class="{'dotted_lineL':item.dottedLine}" v-else>
                                <div class="visi-listtop">
                                    <span class="cRed">{{ item.problemcontent }}</span>
                                    <span class="noteslist-span ml5">{{item.createtime}}</span>
                                    <span class="c999999 ml5 mr5">{{item.createuserman}}</span>
                                    <span class="visi-name">集</span>
                                </div>
                                <p :class="item.logtype | worklog_cont_color" v-html="item.logcontent===''?'--':item.logcontent">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <img src="https://pa.rxjy.com/abc/static/images/empty.png">
                    </div>
            </div>
        </div>
    </div>
    <div class="tc-right-bottom pa10 relative">
        <div class="tc-right-bottom-left relative">
            <ul class="topdaily">
                <li>
                    <a class="topdailybtn" href="javascript:">业务</a>
                </li>
                <li>
                    <a class="topdailybtn" href="javascript:">管理</a>
                </li>
                <li>
                    <a class="topdailybtn" href="javascript:">系统</a>
                </li>
            </ul>
            <div class="dailyrgt-divZi">
                <p class="tx-center">先解决业务问题，才有资格说管理。前两个因素完成之后，再反馈系统问题。</p>
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
import { mapGetters } from 'vuex'
import { getReturnVisit, getClientLoginInformation } from '../../../project/dynamicProject/Resources/Api/index'
export default {
    name: '',
    components: {

    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
    },
    data () {
        return {
            returnVisitList: [], // 回访列表
            dynamicHref: ''
        }
    },
    methods: {
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let parm = {
                orderNo: _this.leftInfo.orderno,
                logtype: 0
            }
            // 获取回访数据
            getReturnVisit(parm).then((result) => {
                if (result.data.StatusCode === 0) {
                    _this.returnVisitList = result.data.Body.returnVisitList
                }
            }).catch((err) => {
                console.log(err)
            })
            // 获取客户端接口相关数据
            // 接口信息
            let parameter = {
                areaId: _this.leftInfo.areaid,
                orderNo: _this.leftInfo.orderno,
                // userNo: this.getCookie('u_kahao') ? this.getCookie('u_kahao') : '01015505'
                userNo: this.userInfo.as_cardNo ? this.userInfo.as_cardNo : '01015505'
            }
            getClientLoginInformation(parameter).then((result) => {
                if (result.data.StatusCode === 1) {
                    const CusData = result.data.Body
                    this.dynamicHref = `https://vip.wenes.cn/index.php?m=member&c=khd&a=khdlogin&peolpe=${CusData.peolpe}&cardNo=${CusData.cardNo}&rwdid=${CusData.rwdid}&cityid=${CusData.cityid}&nickname=${CusData.nickname}&type=3&cityName=${CusData.cityName}`
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        ylzccolor (i) {
            let str
            switch (i) {
            case 1 :
                str = 'cGreen'
                break
            case 2:
                str = 'cLightGreen'
                break
            case 3:
                str = 'cOrange'
                break
            case 4:
                str = 'cOrange'
                break
            case 5:
                str = 'cRed'
                break
            default:
                str = ''
                break
            }
            return str
        },
        worklog_cont_color (i) {
            let str
            switch (i) {
            case 1 :
                str = 'visi-listtxt cGreen'
                break
            case 2:
                str = 'visi-listtxt cLightGreen'
                break
            case 3:
                str = 'visi-listtxt cOrange'
                break
            case 4:
                str = 'visi-listtxt cOrange'
                break
            case 5:
                str = 'visi-listtxt cRed'
                break
            default:
                str = 'visi-listtxt'
                break
            }
            return str
        }
    }
}
</script>
