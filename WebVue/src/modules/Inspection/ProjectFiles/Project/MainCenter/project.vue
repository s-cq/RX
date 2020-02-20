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
        <router-link tag="div" :to="routerPath('audio')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('manager')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">经理</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('projectManager')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">项经</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('Material')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('Finance')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">财务</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('worker')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">工人</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('EngineeringPersonnel')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">程人</p>
            <div class="analyItemCon tx-center">
                <div class="col-md-11"><span>已完成</span></div>
                <span class="circlemark circlemark-green">完</span>
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
