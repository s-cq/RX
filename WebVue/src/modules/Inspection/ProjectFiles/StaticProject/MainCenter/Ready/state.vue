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
            <p class="analyItemTit tx-center">阶段</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">当前</p>
            <div class="analyItemCon">

            </div>
        </div>
        <router-link tag="div" :to="routerPath('currentProject')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <!-- <router-link tag="div" :to="routerPath('status1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p>预留跳转</p>
            </div>
        </router-link> -->
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
