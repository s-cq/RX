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
        <router-link tag="div" :to="routerPath('auditSite')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditMaterials')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditProcesses')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">工序</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditDuration')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">工期</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditTotal')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合计</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditCompletion')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('auditCompletion')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">完工</p>
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
