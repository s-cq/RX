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
        <router-link tag="div" :to="routerPath('readyData')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">资料</p>
            <div class="analyItemCon">
                <p class="col-md-7">
                    <span class="pr8 cLightGray"></span>
                    <span>2018年11月13日 - 2018年11月19日</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">应传</span>
                    <span>24</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">已传</span>
                    <span>0</span>
                </p>
                <a href="javascript:" class="circlemark circlemark-lightRed">
                    未
                </a>
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
