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
                <p class="analyItemTit tx-center">结</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">过</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">工资</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">收入</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">支出</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">金库</p>
                <div class="analyItemCon">

                </div>
            </div>
            <!-- <div class="analyItem">
                <p class="analyItemTit tx-center">标记</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">成就</p>
                <div class="analyItemCon">

                </div>
            </div> -->
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('hander')" class="analyItem " active-class="anItemBor-active">
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
