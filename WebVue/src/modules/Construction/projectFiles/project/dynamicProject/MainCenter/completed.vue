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
        <router-link tag="div" :to="routerPath('default?1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">设计</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default?2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施工</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default?3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">质保</p>
            <div class="analyItemCon">

            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                </div>
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
