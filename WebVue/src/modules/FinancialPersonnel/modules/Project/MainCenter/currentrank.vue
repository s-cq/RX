<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                </p>
                <p class="col-md-4">
                    <span class="cGreen">{{leftInfo.stage}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.stage === '审计'">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目信息</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">编号</span>
                    <span>18-142207</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span class="cGreen"> 世纪中心10</span>
                </p>

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center select_bgGreen">意向接单</p>
            <div class="analyItemCon">
                <p class="col-md-8">
                    <span class="cLightGray pr8">发包额</span>
                    <span>110000.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cRed">意向接单完成</span>
                </p>
                <span><span class="circlemark circlemark-green">完</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center select_bgGreen">接单</p>
            <div class="analyItemCon">
                <p class="col-md-8">
                    <span class="cLightGray pr8"></span>
                </p>
                <p class="col-md-4">
                    <span class="cRed">接单完成</span>
                </p>
                <span><span class="circlemark circlemark-green">完</span></span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84" v-if="leftInfo.stage !== '审计'">
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">应选</span>
                    <span>9</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">实际</span>
                    <span class="cGreen">3</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">未选</span>
                    <span class="cRed">6</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">选人工占比</span>
                    <span class="cRed">33.33%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">储蓄卡总金额</span>
                    <span>25517.00元</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">储蓄卡余额</span>
                    <span>25517.00元</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">下单计划金额</span>
                    <span>15266.50</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">下单配送金额</span>
                    <span>0.00</span>
                </p>
                <p class="col-md-6">
                    <span data-title="储蓄卡和下单的总占比" class="cLightGray pr8">储蓄卡和下单总占比</span>
                    <span> 0%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">质量</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总计</span>
                    <span>39个</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已完成</span>
                    <span>3个</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">占比</span>
                    <span>0.00%</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">订单</span>
                    <span>5个</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已处理</span>
                    <span>4个</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">占比</span>
                    <span>80.00%</span>
                </p>
                <span><span class="circlemark circlemark-lightGreen">良</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">款项</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">合同额</span>
                    <span>10.50万</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">应收</span>
                    <span class="cGreen">10.50万</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已收</span>
                    <span class="cGreen">5.25万</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">资料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">应传</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已传</span>
                    <span class="cGreen">0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span class="cGreen">0</span>%
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项目</span>
                    <span>6种</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">总项</span>
                    <span class="cGreen">81项</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">总额</span>
                    <span class="cGreen">120719.34元</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">绘制</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">基础图纸</span>
                    <span>6张</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">完成图纸</span>
                    <span class="cGreen">6张</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">复尺</span>
                    <span class="cGreen">8个</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">占比</span>
                    <span class="cGreen">100%</span>
                </p>
                <span><span class="circlemark circlemark-green">优</span></span>
            </div>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
        </router-link>
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
<style lang="scss" scoped>
    .select_bgGreen {
        background: #14b149 !important;
        color: #fff !important;
    }
</style>
