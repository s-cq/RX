<template>
  <rx-app>
    <!-- 头部 -->
    <rx-header :header="header"></rx-header>
    <!-- 侧栏 -->
    <rx-aside :slideBar="slideBar" @menuClickCall="menuClickCall"></rx-aside>
    <!-- 主内容 -->
    <rx-main>
      <!-- 固定标题切换 -->
      <div id="components-title">
            <!-- 项目管理 -->
            <ul class="clearfix uiTab1 mb5" v-if="(route == '/projectFiles/Project' || route == '/projectFiles/Order' || route == '/projectFiles/OrderStatic')">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Project" active-class="uiTab1-active"><a href="javascript:">项</a></router-link>
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Order" active-class="uiTab1-active"><a href="javascript:">订单</a></router-link>
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/OrderStatic" active-class="uiTab1-active"><a href="javascript:">模板</a></router-link>
            </ul>
            <!-- 人员 -->
            <ul class="clearfix uiTab1 mb5" v-if="(route == '/projectFiles/Personnel' || route == '/projectFiles/PersonnelLibrary')">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Personnel" active-class="uiTab1-active"><a href="javascript:">项</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/PersonnelLibrary" active-class="uiTab1-active" ><a href="javascript:">工种库</a></router-link>
            </ul>
            <!-- 材料 -->
            <ul class="clearfix uiTab1 mb5" v-if="route == '/projectFiles/Material' ">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Material" active-class="uiTab1-active" ><a href="javascript:">项</a></router-link>
            </ul>
            <!-- 质量 -->
            <ul class="clearfix uiTab1 mb5" v-if="(route == '/projectFiles/Quality' || route == '/projectFiles/QualityLibrary') ">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Quality" active-class="uiTab1-active" ><a href="javascript:">项</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/QualityLibrary" active-class="uiTab1-active"><a href="javascript:">质量库</a></router-link>
            </ul>
            <!-- 现场 -->
            <ul class="clearfix uiTab1 mb5" v-if="(route == '/projectFiles/Scene' || route == '/projectFiles/SceneLibrary' || route == '/projectFiles/SceneData') ">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Scene" active-class="uiTab1-active" ><a href="javascript:">项</a></router-link>
                <router-link tag="li" class="col-md-4 fl" to="/projectFiles/SceneLibrary" active-class="uiTab1-active" ><a href="javascript:">现场库</a></router-link>
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/SceneData" active-class="uiTab1-active" ><a href="javascript:">资料</a></router-link>
            </ul>
            <!-- 集团端-采购管理 -->
            <ul class="clearfix uiTab1 mb5" v-if="(route == '/projectFiles/Photograph') ">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Photograph" active-class="uiTab1-active"><a href="javascript:">摄</a></router-link>
            </ul>
            <!-- 分司端-财务 -->
            <ul class="clearfix uiTab1 mb5" v-if="route == '/projectFiles/Department' ">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Department" active-class="uiTab1-active"><a href="javascript:">司</a></router-link>
            </ul>
            <!-- 项目-实用端 -->
            <ul class="clearfix uiTab1 mb5" v-if="route == '/projectFiles/Term' ">
                <router-link tag="li" class="col-md-3 fl" to="/projectFiles/Term" active-class="uiTab1-active"><a href="javascript:">项</a></router-link>
            </ul>
      </div>
      <!-- 具体业务内容 -->
      <router-view></router-view>
    </rx-main>
  </rx-app>
</template>
<script>
import { sliderMenu } from '@modules/Construction/Common/Utils/menu.js'
import { mapMutations, mapGetters } from 'vuex'
export default {
    metaInfo: {
        title: '瑞祥施工',
        titleTemplate: '%s'
    },
    data () {
        return {
            // header 传值对象
            header: {
                title: '瑞祥施工'
            },
            // slideBar 传值对象
            slideBar: sliderMenu,
            // slideBar 返回对象
            menuCall: {},
            route: '',
            query: {}
        }
    },
    computed: {
        ...mapGetters(['userInfo', 'rx'])
    },
    created () {
        this.query = this.$route.query
        if (this.query.cutting || this.query.areaID) {
            this.setRx({
                cutting: this.query.cutting,
                areaID: this.query.areaID
            })
        }
        this.route = this.$route.matched[1].path
        this.loginVerification()
    },
    methods: {
        ...mapMutations({
            setUserInfo: `SET_USER_INFO`,
            setRx: 'SET_RX'
        }),
        menuClickCall (data) {
            this.menuCall = data
        },
        // 登录判断
        loginVerification () {
            if (localStorage.getItem('userInfo') === null) {
                // 判断是否有jwt值
                if (this.$route.query.jwt) {
                    let results = {}
                    results.as_jwt = this.$route.query.jwt // jwt
                    this.setUserInfo({...results})
                    this.$router.push({path: '/'})
                    return false
                }
            } else if (this.$route.query.areaID) {
                // 判断是否有jwt值
                if (this.$route.query.jwt) {
                    let results = {}
                    results.as_jwt = this.$route.query.jwt // jwt
                    this.setUserInfo({...results})
                    this.$router.push({path: '/'})
                    return false
                }
            }
        }
    },
    watch: {
        $route () {
            this.route = this.$route.matched[1].path
            //   this.$utils.removeSession('menuInit')
            /**
            *  判断是否有登录信息
            *  没有进入提示登录页面
            *  存在登录信息
            *      判断是否正式环境
            *          如果是 验证登录超时
            *              判断存储的登录时间戳 是否超时两个小时
            *              登录超时后 会清空localStorage里存储的用户信息
            */
            //   if (localStorage.getItem('userInfo') === null) {
            //             this.$router.push({ path: '/' }) // 跳转到登录
            //     this.$utils.clearLocal() // 清空当前浏览器存储的localStorage
            //     return false
            //   }
        }
    }
}
</script>
