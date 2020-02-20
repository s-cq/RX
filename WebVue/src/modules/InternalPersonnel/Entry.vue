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
                <ul class="clearfix uiTab1 mb5" v-if="(route == '/Engineering/Personnel' || route == '/Engineering/Account')">
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Personnel" active-class="uiTab1-active"><a href="javascript:">人</a></router-link>
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Account" active-class="uiTab1-active"><a href="javascript:">账</a></router-link>
                </ul>
                <ul class="clearfix uiTab1 mb5" v-if="(route == '/Engineering/StayLibrary' || route == '/Engineering/Stay')">
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/StayLibrary" active-class="uiTab1-active"><a href="javascript:">库</a></router-link>
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Stay" active-class="uiTab1-active"><a href="javascript:">留</a></router-link>
                </ul>
                <ul class="clearfix uiTab1 mb5" v-if="(route == '/Engineering/UseLibrary' || route == '/Engineering/Use')">
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/UseLibrary" active-class="uiTab1-active"><a href="javascript:">库</a></router-link>
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Use" active-class="uiTab1-active"><a href="javascript:">用</a></router-link>
                </ul>
                <ul class="clearfix uiTab1 mb5" v-if="(route == '/Engineering/Salary' || route == '/Engineering/Area')">
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Salary" active-class="uiTab1-active"><a href="javascript:">司</a></router-link>
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Area" active-class="uiTab1-active"><a href="javascript:">{{areaName}}</a></router-link>
                </ul>
                <ul class="clearfix uiTab1 mb5" v-if="(route == '/Engineering/Salarys')">
                    <router-link tag="li" class="col-md-4 fl" to="/Engineering/Salarys" active-class="uiTab1-active"><a href="javascript:">全</a></router-link>
                </ul>
            </div>
            <!-- 具体业务内容 -->
            <router-view></router-view>
        </rx-main>
    </rx-app>
</template>
<script>
import {
    mapGetters, mapMutations
} from 'vuex'
import { sliderMenu } from './Common/utils/menu'
export default {
    metaInfo: {
        title: '内部人事',
        titleTemplate: '%s'
    },
    data () {
        return {
            // header 传值对象
            header: {
                title: '内部人事'
            },
            // slideBar 传值对象
            slideBar: sliderMenu,
            // slideBar 返回对象
            menuCall: {},
            // routerName: '',
            areaName: '', // 地区名称
            // areaid: 0,   // 地区ID
            route: '',
            query: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'rx'])
    },
    created () {
        this.route = this.$route.matched[1].path
        this.query = this.$route.query
        if (this.query.cutting) {
            this.setRx({
                cutting: this.query.cutting
            })
        }
        this.areaName = this.leftInfo.regionName
        // this.areaid = this.leftInfo.regionId
        // if (Number(this.leftInfo.MONTH) < 10) {
        //     this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
        // } else {
        //     this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
        // }
        // let userInfo = { cardNo: '01000378', u_xingming: '巩飞燕' }
        // // this.setUserInfo(userInfo)
        // sessionStorage.setItem('userinfo', JSON.stringify(userInfo))
        this.loginVerification()
    },
    methods: {
        ...mapMutations({
            setRx: 'SET_RX'
        }),
        menuClickCall (data) {
            this.menuCall = data
        },
        // 登录判断
        loginVerification () {
            // if (localStorage.getItem('userInfo') === null) {
            // 判断是否有jwt值
            if (this.$route.query.jwt || this.$route.query.areaID) {
                let results = {}
                results.as_jwt = this.$route.query.jwt // jwt
                this.setUserInfo({ ...results })
                this.$router.push({ path: '/' })
                return false
            }
            if (localStorage.getItem('userInfo') === null) {
                this.$router.push({ path: '/' })
                return false
            }
        }
    },
    watch: {
        $route () {
            this.route = this.$route.matched[1].path
        },
        leftInfo () {
            this.areaName = this.leftInfo.regionName
            if (this.leftInfo.regionName == null) {
                this.areaName = this.leftInfo.dq_name
            }
            // this.areaid = this.leftInfo.regionId
            // if (Number(this.leftInfo.MONTH) < 10) {
            //     this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            // } else {
            //     this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            // }
        }
    }

}
</script>
