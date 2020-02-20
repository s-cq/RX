<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="87">
        <router-link tag="div" :to="routerPath('comprehensiveComprehensive')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">积分</p>
            <div class="analyItemCon">

            </div>
        </router-link>
    </div>
    <router-link tag="div" :to="routerPath('processProcessing')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">处理</p>
        <div class="analyItemCon">

        </div>
    </router-link>
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
