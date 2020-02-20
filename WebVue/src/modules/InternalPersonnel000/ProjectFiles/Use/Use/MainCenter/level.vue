<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">6级升7级</span><span></span></p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="87">
            <!-- <router-link tag="div" :to="routerPath('managementFine')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">入职天数</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">入职天数</span><span>30天</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">实际</span><span>170天</span></p>
                    <p class="fl"><span class="circlemark circlemark-green">完</span></p>
                </div>
            </router-link> -->
            <router-link tag="div" :to="routerPath('order2')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">订单</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">总数</span><span>20个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">完成</span><span>8个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">未完成</span><span>8个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8"></span><span style="color:red">50%</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">未</span></p>
                </div>
            </router-link>
            <!-- <router-link tag="div" :to="routerPath('managementCompletion')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">打卡天数</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">打卡天数</span><span>10天</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">实际</span><span>0天</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">未</span></p>
                </div>
            </router-link> -->
            <router-link tag="div" :to="routerPath('managementPreparation2')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">目标竣工额</span><span>55万</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">完成</span><span>27.5万</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">未完成</span><span>27.5万</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8"></span><span style="color:red">50%</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('holdingACertificate2')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">持有证书</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">个数</span><span>3个</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('customerReviews2')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">客户评价</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">投诉</span><span>3星</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>

            <router-link tag="div" :to="routerPath('training2')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8" style=" color:red">待培训</span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8" style=" color:silver">无需培训</span><span></span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('')" class="analyItem " active-class="anItemBor-active">
                <p class="analyItemTit tx-center">样板间</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">晋升标准</span><span>5个</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">已完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8"></span><span style="color:red">20%</span></p>
                    <p class="fl"><span class="cLightGray pr8"></span><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
        </div>
        <router-link tag="div" :to="routerPath('processProcessing')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-12" style="color:red"><span class="cLightGray pr8"></span><span>6级降到5级，已符合降级条件，具体原因：竣工差，客户评价差，样板间差</span></p>
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
