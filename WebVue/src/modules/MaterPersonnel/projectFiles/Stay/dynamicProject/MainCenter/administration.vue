<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="pr8">
                        <span class="cRed">未转正</span>
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('administrationAdministrationDetail')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">认证</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">总数</span>
                    <span class="rz-num">18</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">标准</span>
                    <span class="rz-num-h cGreen">12</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">合格</span>
                    <span class="rz-num-h cGreen">18</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">差额</span>
                    <span class="cRed rz-num-c">0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">培训</span>
                    <span>0</span>
                </p>
                <span class="circlemark circlemark-green">已</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('administrationAdministrationDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">临时</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">资料</span>
                    <span>8</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">押金</span>
                    <span>0</span>
                </p>
                <span class="circlemark circlemark-red">未</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('administrationAdministrationDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">正式</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="pr8">
                        <span class="cRed">未转正</span>
                    </span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('administrationAdministrationDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">加盟</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">合同倒计时</span>
                    <span>0 天</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span></span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('administrationAdministrationDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">离职</p>
            <div class="analyItemCon">

            </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
