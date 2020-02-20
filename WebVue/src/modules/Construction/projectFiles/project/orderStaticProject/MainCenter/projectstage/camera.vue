<template>
<div>
    <router-link tag="div" :to="routerPath('threeDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center  analyShallowGreen">指定出库</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">地方会计</span>
            <span class="circlemark circlemark-lightGreen">完</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('threeDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center  analyShallowGreen">安装</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">监理</span>
            <span class="circlemark circlemark-lightGreen">完</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('threeDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center  analyLightGreen">拍照</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">项目经理</span>
            <span class="circlemark circlemark-purple">待</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('threeDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">解绑</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">监理</span>
            <span class="circlemark circlemark-purple">待</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('threeDetail5')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">归库</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">地方会计</span>
            <span class="circlemark circlemark-purple">待</span>
        </div>
    </router-link>
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
<style lang="">
    .roleFixed {
        position: absolute;
        right: 30px;
        top: 5px;
        font-family: Tahoma,Helvetica,Arial;
        font-size: 12px;
        color: #85da02;
        letter-spacing: 2px;
    }
</style>
