<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <p class="col-md-4">
                    <strong class="cGreen fz14">设置</strong>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('twoTab1Twodetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab1TwoDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">位置</p>
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
