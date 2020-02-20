<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('salaryBasesalary')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">底薪</p>
            <div class="analyItemCon">
                <p class="col-md-4 ">
                    <span class="cLightGray pr8">底薪</span>
                    <span>{{userLevel.baseSalary}}元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('salaryProvidentfund')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">公积金</p>
            <div class="analyItemCon">
                <p class="col-md-4 ">
                    <span class="cLightGray pr8">公积金</span>
                    <span>{{userLevel.housingFund}}元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('salarySocialsecurity')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">社保</p>
            <div class="analyItemCon">
                <p class="col-md-4 ">
                    <span class="cLightGray pr8">社保</span>
                    <span>{{userLevel.socialSecurity}}元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('salaryPersonaltax')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">个税</p>
            <div class="analyItemCon">
                <p class="col-md-4 ">
                    <span class="cLightGray pr8">个税</span>
                    <span>{{userLevel.incomeTax}}元</span>
                </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    GetUserLevelStandardByAbilityLevel
} from '../Resources/Api'
export default {
    data () {
        return {
            userLevel: {}
        }
    },
    created () {
        this.GetUserLevelStandardByAbilityLevelFn()
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
        // 查询登记对应的分项设置信息
        GetUserLevelStandardByAbilityLevelFn () {
            let _this = this
            _this.userLevel = {}
            GetUserLevelStandardByAbilityLevel({
                level: _this.leftInfo.grade
            }).then(results => {
                _this.userLevel = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetUserLevelStandardByAbilityLevelFn()
        }
    }
}
</script>
