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
        <router-link tag="div" :to="routerPath('culturalsecurityTotal')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">总计</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('culturalsecurityResult')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('culturalsecurityEnergyefficiency')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">能效</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">级别</p>
            <div class="analyItemCon">

            </div>
        </div>
        <router-link tag="div" :to="routerPath('culturalsecurityHumanities')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">人文</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('culturalsecurityKeypoint')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">攻坚</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('culturalsecurityCulturaltraining')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">文修</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('culturalsecurityMilitarytraining')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">武练</p>
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
