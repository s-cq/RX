<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="100">
            <router-link tag="div" :to="routerPath('integralIntegralDetail')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">积分</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">当前积分</span>
                        <span class="cRed">0 分</span>
                    </p>
                </div>
            </router-link>
        </div>
        <div class="layerRtb-footer">
            <router-link tag="div" :to="routerPath('integralIntegralhander')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-2 cRed nowIntegral">0分</p>
                    <p class="col-md-3"><strong class="EndLevels cGreen fz14 pr5 nowLevel">4</strong>级降<strong
                            class="EndLevelsLast cRed fz14 pl5 pr5 beforeLevel">4</strong>级</p>
                    <p class="col-md-3"><span class="cLightGray pr8">差额</span><span class="diffIntegral">100</span>分</p>
                    <p class="col-md-4"><span class="cLightGray pr8">状态</span><span
                            class="fz14 cRed twoState">传统最低级</span></p>
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
