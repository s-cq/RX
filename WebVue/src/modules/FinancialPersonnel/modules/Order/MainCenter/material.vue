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
                    <span title="">130元</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
         <router-link tag="div" exact :to="routerPath('materialMaterial?matId=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">玻璃</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">名称</span>
                    <span>普通玻璃</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">规格</span>
                    <span title="">5mm</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">用量</span>
                    <span title="">8㎡</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">80元</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('materialMaterial?matId=2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">油漆</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">名称</span>
                    <span>油漆</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">规格</span>
                    <span title="">5KG/每桶</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">用量</span>
                    <span title="">0.5桶</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">50元</span>
                </p>
                <!-- <p class="fl col-md-4">
                    <span class="cLightGray pr5">类型</span>
                    <span title="">标尺</span>
                </p> -->
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
