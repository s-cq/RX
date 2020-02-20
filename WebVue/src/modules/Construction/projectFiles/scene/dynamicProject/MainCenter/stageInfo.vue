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
        <div class="analyItem">
            <p class="analyItemTit tx-center">审计</p>
             <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">审计</span>
                    <span class="cGreen pr8">
                        完成
                    </span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">监理</span>
                    <span class="cGreen pr8">
                        完成
                    </span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">客服</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">外人</span>
                    <span class="cGreen pr8">完成</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">财务</span>
                    <span class="cGreen pr8">完成</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">材料</span>
                    <span class="cGreen pr8">完成</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">设计师</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">经理</span>
                    <span class="cRed pr8">未完</span>
                </p>

                <span><span class="circlemark circlemark-lightRed">未</span></span>
                <i class="projectCtrolSet " lkw-settype="gc_set_sj" data-module="1"></i>
                <div class="fixedTrangle">
                    <span href="javascript:" class="fixedtips"></span>
                    <div class="fixedtipscon pt10 pb10" style="display: none;">
                        48个小时内未完成发包为异常
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">准备</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">客户端</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" v-bind:title="11">外人</span>
                    <span class="cRed">未完</span>
                </p>

                <p class="col-md-4">
                    <span class="cLightGray pr8">经理</span>
                    <span class="cRed pr8">未完</span>
                </p>
               <span>
                   <span class="circlemark circlemark-lightRed">未</span>
                    <i class="projectCtrolSet " lkw-settype="gc_set_sj" data-module="2"></i>
                    <div class="fixedTrangle">
                        <span href="javascript:" class="fixedtips"></span>
                        <div class="fixedtipscon pt10 pb10" style="display: none;">
                        项目经理、监理7天内没有完成开工前准备工作为异常
                        </div>
                    </div>
                </span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施前</p>
             <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed pr8">未完</span>
                </p>

                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="cRed pr8">未完</span>
                </p>
               <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施中</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed pr8">未完</span>
                </p>

                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">施尾</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed pr8">未完</span>
                </p>

                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣工</p>
              <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总检</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">验收</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">结算</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
                <i class="projectCtrolSet " lkw-settype="gc_set_sj" data-module="10"></i>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">完工</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">甲方</span>
                    <span class="cGreen pr8">已结算</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">丙方</span>
                    <span class="cGreen pr8">已结算</span>
                </p>
                <span><span class="circlemark circlemark-lightGreen">完</span></span>
                <i class="projectCtrolSet " lkw-settype="gc_set_sj" data-module="11"></i>

            </div>
        </div>
        <router-link tag="div" :to="routerPath('stageInfoCollection')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">集巡</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">集巡</span>
                    <span class="cRed pr8">未开启</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">开启时间</span>
                    <span class=" pr8"></span>
                </p>
                <p class="col-md-4 lh28 cRed tx-center"><span class="cRed fr" id="E_xj2">未开启</span></p>
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
