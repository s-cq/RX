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
        <router-link tag="div" :to="routerPath('dataScene')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">现场资料</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">总数</span>
                    <span class="fw700 ">0</span>
                </p>
                <p class="col-md-2">
                    <span class="cLightGray pr8">打印次数</span>
                    <span class="fw700 cGreen">0</span>
                </p>
                <!-- <p class="col-md-7">
                    <a href="https://item.taobao.com/item.htm?spm=a2126o.11854294.0.0.29c84831Dp9myz&amp;id=585337149721" class="cBlue goTaobao fz14" target="_blank"><strong>保护膜采购地址</strong></a>
                    <a href="https://item.taobao.com/item.htm?spm=a2126o.11854294.0.0.1d544831Q1jR0d&amp;id=585969540241" class="cBlue goTaobao ml10 fz14" target="_blank"><strong>烟感保护采购地址</strong></a>
                </p> -->
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('dataFront')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">前期</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">应传</span><span class="fw700">9</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">已传</span><span class="fw700 cGreen">0</span></p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span class="fw700 cGreen">0.00%</span>
                </p>
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
