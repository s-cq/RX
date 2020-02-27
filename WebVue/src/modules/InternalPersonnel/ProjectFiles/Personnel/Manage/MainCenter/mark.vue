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
        <router-link tag="div" :to="routerPath('markPosition')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">职务</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('markCultivation')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">培养</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('markCharacteristics')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">特征</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('markSpecialty')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">特长</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('markAuthority')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">权限</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('markRight')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">权利</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('markHandling')" class="analyItem anItemBor" active-class="anItemBor-active">
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
