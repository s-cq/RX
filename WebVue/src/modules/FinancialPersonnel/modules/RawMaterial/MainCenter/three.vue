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
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('layoutLayout')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">基础</p>
            <div class="analyItemCon">
                三段基础布局，基础跳转(建议都用方法跳转)
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('layoutThree')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">弹出四段</p>
            <div class="analyItemCon">
                弹出四段示例
            </div>
        </router-link>
        <router-link tag="div" :to="{path: routerPath('layoutThreeQuery') , query: { type: 1 }}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">query</p>
            <div class="analyItemCon">
                三段基础布局，跳转携带 query
            </div>
        </router-link>
        <router-link tag="div" :to="{name: 'elementRxParmasExample', params: { parmasExample }}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">params</p>
            <div class="analyItemCon">
                三段基础布局，跳转携带 params(使用时注意，要保证定义的name不会冲突)
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
