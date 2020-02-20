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
        <router-link tag="div" :to="routerPath('twoTab7TwoDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon clearfix">
                <p class="col-md-2">
                    <span class="cLightGray pr8">编号</span>
                    <span>0202</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">类</span>
                    <span>组装</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">科目</span>
                    <span>饰面板装饰</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8 fl">子目</span>
                    <span>横铺</span>
                </p>
                <p class="col-md-2 cGreen tx-center">已选</p>
            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon clearfix">
                <p class="col-md-1">&nbsp;</p>
                <p class="col-md-5">顶面类</p>
                <p class="col-md-5">石膏板吊顶</p>
                <p class="col-md-1"></p>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('twoTab7TwoDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">过程</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab7TwoDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab7TwoDetail5')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
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
