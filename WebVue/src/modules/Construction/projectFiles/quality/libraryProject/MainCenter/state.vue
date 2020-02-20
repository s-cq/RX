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
        <div class="analyItem">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="cLightGray pr8">实木栏板及扶手</span><span></span>
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">准备</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                </p>
               <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施前</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                </p>
               <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施中</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施尾</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                            <span class="cLightGray pr8">安装立杆</span><span></span>
                            <span class="cLightGray pr8">木扶手安装</span><span></span>
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
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
