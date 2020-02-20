<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="pr8">
                        <span class="cRed"></span>
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('tagCultivate')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">培养</p>
            <div class="analyItemCon">
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('tagCharacteristics')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">特征</p>
            <div class="analyItemCon">
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('tagSpecialty')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">特长</p>
            <div class="analyItemCon">
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('tagRight')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">权利</p>
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
