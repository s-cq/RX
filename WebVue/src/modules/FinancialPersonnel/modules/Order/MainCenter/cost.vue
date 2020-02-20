<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-3">&nbsp;</p>
                <p class="col-md-3">&nbsp;</p>
                <p class="col-md-3">&nbsp;</p>
                <p class="col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">266元</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
         <router-link exact tag="div" :to="routerPath('constConst?id=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">种类</span>
                    <span>2种</span>
                </p>
                <p class="fl col-md-3">
                    &nbsp;
                </p>
                <p class="fl col-md-3">
                    &nbsp;
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">130元</span>
                </p>
            </div>
        </router-link>
        <router-link exact tag="div" :to="routerPath('constConst?id=2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">种类</span>
                    <span>2种</span>
                </p>
                <p class="fl col-md-3">
                    &nbsp;
                </p>
                <p class="fl col-md-3">
                    &nbsp;
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">120元</span>
                </p>
            </div>
        </router-link>
        <router-link exact tag="div" :to="routerPath('constConst?id=3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">辅料</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">种类</span>
                    <span>2种</span>
                </p>
                <p class="fl col-md-3">
                    &nbsp;
                </p>
                <p class="fl col-md-3">
                    &nbsp;
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">16元</span>
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
