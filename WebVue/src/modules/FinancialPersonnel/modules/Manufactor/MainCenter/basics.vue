<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <!-- <p class="col-md-4"><span class="cGreen bold">方案</span></p> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
         <router-link tag="div" :to="routerPath('basicsParameter')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">基础</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">名称</span>
                    <span>普通烤漆玻璃</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">规格</span>
                    <span title="">5mm</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">类型</span>
                    <span title="">标尺</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('basicsSize')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">尺寸</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">长</span>
                    <span>3m</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">宽</span>
                    <span title="">3m</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('basicsValuation')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">计价</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr5">单位</span>
                    <span>块</span>
                </p>
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
            parmasExample: {
                name: '',
                age: ''
            }
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
