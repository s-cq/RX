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
        <router-link tag="div" :to="routerPath('readymanagerReceive')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">数据接收</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="pr8 cLightGray"></span> <span></span> </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('readymanagerProcess')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">执行过程</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="pr8 cLightGray"></span> <span></span></p>
            </div>
        </router-link>
         <router-link tag="div" :to="routerPath('readymanagerResult')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">执行结果</p>
            <div class="analyItemCon">

            </div>
        </router-link>
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
