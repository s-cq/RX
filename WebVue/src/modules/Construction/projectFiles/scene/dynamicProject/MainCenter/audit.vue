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
        <router-link tag="div" :to="routerPath('auditData')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">资料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已选</span>
                    <span class="cGreen" id="BindPartInfoDistributionNumberSpan">21</span> 种
                </p>
                <span class="circlemark circlemark-lightGreen" id="bindPartInfoDistributionSpan">
                    已
                </span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditImage')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">形象</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">共</span>
                        <span style="color:red;">15</span>&nbsp;项
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">启动</span>
                        <span class="cGreen">15</span>&nbsp;项
                    </p>
                    <span class="circlemark circlemark-lightGreen" name="securityStatusSpan">
                        已
                    </span>
                </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditSafe')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">安全</p>
            <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">共</span>
                        <span style="color:red;">11</span>&nbsp;项
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">启动</span>
                        <span class="cGreen">6</span>&nbsp;项
                    </p>
                    <span class="circlemark circlemark-lightRed" name="securityStatusSpan">
                        未
                    </span>
                </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditEnvironmental ')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">环境</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">10</span>&nbsp;项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">启动</span>
                    <span class="cGreen">0</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightRed" name="securityStatusSpan">
                    未
                </span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditComprehensive')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">36</span>&nbsp;项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">启动</span>
                    <span class="cGreen">21</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightRed" name="securityStatusSpan">
                    未
                </span>
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
