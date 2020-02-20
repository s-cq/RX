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
        <router-link tag="div" :to="routerPath('audit')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon">
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('ready')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">准备</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('constructionFront')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施前</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('constructionCenter')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施中</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('constructionTail')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施尾</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('completed')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('finished')" class="analyItem anItemBor" active-class="anItemBor-active">
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
