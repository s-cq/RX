<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="cGreen"><font size="2">{{leftInfo.stage}}</font></span>
                </p>
                <p class="col-md-7">
                    <span class="cGreen"><font size="2">预计完成时间：2020-03-12</font></span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">工种</span>
                    <span class="cGreen">5个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">天数</span>
                    <span class="cGreen">68.26天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总成本</span>
                    <span class="cGreen">18233.94元</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray">总报价</span>
                    <span class="cGreen">6</span>
                </p>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">店铺</span>
                    <span>13</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">金额</span>
                    <span>26749.17</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">质量</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总计</span>
                    <span>0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已完成</span>
                    <span>0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">占比</span>
                    <span>0%</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">订单</span>
                    <span>4个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已处理</span>
                    <span>0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">占比</span>
                    <span>0%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">款项</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">合同额</span>
                    <span>0万</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应收</span>
                    <span class="cGreen">0万</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已收</span>
                    <span class="cGreen">0 万</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">项目</span>
                    <span>7种</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总项</span>
                    <span>67项</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总额</span>
                    <span>68880.02元</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
    </div>
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
