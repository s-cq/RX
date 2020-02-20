<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <!-- <router-link tag="div" :to="{path:routerPath('administration'), query:{index:1, data:Designer}}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
            <p class="analyItemTit tx-center">设计师</p>
            <div class="analyItemCon">
                 <div class="col-md-4">
                    <span class="cLightGray pr5">姓名</span>{{Designer.name}} <span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">电话</span> {{Designer.iphone}}<span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">级别</span>{{Designer.ysGrade}} <span></span>
                </div>
            </div>
        </router-link> -->
        <router-link tag="div" :to="{path:routerPath('administration'), query:{index:2, data:emAndsmData}}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
            <p class="analyItemTit tx-center">工程经理</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                    <span class="cLightGray pr5">姓名</span>{{emAndsmData.managerName}} <span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">电话</span> {{emAndsmData.managerPhone}}<span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">级别</span>{{emAndsmData.managerLevel}} <span></span>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="{path:routerPath('administration'), query:{index:3, data:emAndsmData}}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
            <p class="analyItemTit tx-center">监理</p>
            <div class="analyItemCon">
                 <div class="col-md-4">
                    <span class="cLightGray pr5">姓名</span> {{emAndsmData.supervisorName}}<span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">电话</span> {{emAndsmData.supervisorPhone}}<span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">级别</span> {{emAndsmData.supervisorLevel}}<span></span>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="{path:routerPath('administration'), query:{index:4, data:pmData}}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
            <p class="analyItemTit tx-center">项目经理</p>
            <div class="analyItemCon">
                 <div class="col-md-4">
                    <span class="cLightGray pr5">姓名</span>{{pmData.userName}} <span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">电话</span>{{pmData.mobile}} <span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">级别</span>{{pmData.level}} <span></span>
                </div>
            </div>
        </router-link>
        <!-- <router-link tag="div" :to="routerPath('administration?index=5')" class="analyItem anItemBor" active-class="anItemBor-active" exact>
            <p class="analyItemTit tx-center">客服</p>
            <div class="analyItemCon">
                 <div class="col-md-4">
                    <span class="cLightGray pr5">姓名</span>张萍<span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">电话</span>400-070-5088<span></span>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr5">级别</span>10级 <span></span>
                </div>
            </div>
        </router-link> -->
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPmCardMsgByOrderno, getTeamByOrderNo, getProjectBasicInfo, getWenesByCardNo } from '../Resources/Api/index'
export default {
    data () {
        return {
            pmData: {}, // 项目经理
            emAndsmData: {}, // 工程经理,监理
            Designer: {}
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        // getCookie (name) {
        //     let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        //     let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        //     if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        // },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },

        // 自动加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true

            // 接收参数
            let parm = {
                orderNo: this.leftInfo.orderno,
                areaId: this.leftInfo.areaid
            }

            // 查询设计师卡号
            getProjectBasicInfo(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    const cardNo = result.data.Body.projectBasicInfo.designerNo
                    this.getWenesByCardNo(cardNo)
                }
            }).catch((error) => {
                console.log(error)
            })


            // 查询项目经理基本信息
            getPmCardMsgByOrderno({
                orderno: this.leftInfo.orderno
            }).then((result) => {
                if (result.data.statusCode === 1) {
                    _this.pmData = result.data.body
                }
            }).catch((error) => {
                console.log(error)
            })

            // 查询工程经理,监理基本信息
            getTeamByOrderNo(parm).then((result) => {
                if (result.data.statusCode === 1) {
                    _this.emAndsmData = result.data.body
                    console.log(_this.emAndsmData)
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 查询设计师基本信息
        getWenesByCardNo (cardNo) {
            getWenesByCardNo({
                cardNo: cardNo
            }).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.Designer = result.data.Body
                    console.log(this.Designer)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    }
}
</script>
