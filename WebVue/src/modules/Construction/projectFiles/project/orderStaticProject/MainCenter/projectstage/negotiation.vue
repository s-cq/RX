<template>
<div>
    <router-link tag="div" :to="routerPath('NegThreeDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center  analyShallowGreen">洽商开启</p>
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
            <span class="circlemark circlemark-lightGreen">完</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('NegThreeDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center  analyShallowGreen">内容确认</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">客户</span>
            <span class="circlemark circlemark-lightGreen">完</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('NegThreeDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center  analyLightGreen">金额确认</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">操作人</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">财务</span>
            <span class="circlemark circlemark-purple">待</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('NegThreeDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">增项发包</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">财务</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">出纳</span>
            <span class="circlemark circlemark-purple">待</span>
        </div>
    </router-link>
     <router-link tag="div" :to="routerPath('NegThreeDetail5')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">增项审核</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">审计</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">项目经理</span>
            <span class="circlemark circlemark-purple">待</span>
        </div>
    </router-link>
    <router-link tag="div" :to="routerPath('NegThreeDetail6')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">客户评价</p>
        <div class="analyItemCon">
            <p class="col-md-4">
                <span class="cLightGray pr8">操作时间</span>
                <span class="cGreen">2019.06.09</span>
            </p>
            <p class="col-md-4">
                <span class="cLightGray pr8">财务</span>
                <span class="cGreen"> 张三</span>
            </p>
            <span class="roleFixed">客户</span>
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
