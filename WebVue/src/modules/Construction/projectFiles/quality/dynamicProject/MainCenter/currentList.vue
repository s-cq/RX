<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="cLightGreen pr8"> 准备</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">基础</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:卫生间隔断</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:开平玻璃门</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:水泥找平</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:接线盒</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:木基层</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:单面单层</span><span></span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">成品</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:木质踢脚线</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:铝合金踢脚线</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:铺贴复合地板</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:木门安装</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:墙面插座</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:水龙头安装</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:洁具</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:台面</span><span></span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">组装</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:隐形门</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:截止阀</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:开关面板</span><span></span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">专项</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:石材吧台</span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">A:玻璃镜饰面</span><span></span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">拆除</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:拆除</span><span></span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">搬运</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:搬运</span><span></span></div>
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" exact active-class="anItemBor-active">
            <p class="analyItemTit tx-center">清理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">A:清理</span><span></span></div>
                </div>
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
