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
        <router-link tag="div" :to="routerPath('frontData')" class="analyItem anItemBor" active-class="anItemBor-active">
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
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">应传</span>
                    <span>76</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">实传</span>
                    <span>1</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">应巡</span>
                    <span class="cGreen">1</span>次
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">实巡</span>
                    <span class="cGreen">1 次</span>
                </p>
                <span class="circlemark circlemark-lightGreen">正</span>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('frontThree')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施前</p>
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
