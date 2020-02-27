<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="fl col-md-12">
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link tag="div" exact :to="routerPath('payDetailThreeHJ?index= '+1+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
                <p class="analyItemTit tx-center">合计</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title=" 最终发包额 = 原始发包金额 + 增项发包 - 减项发包 ">最终发包额</span><br>
                        <span>425,000.00</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="项目可用 = 发包已收（来源投资财务交易平台系统分账）* 0.8 - 已付人工款 - 已付材料款 - 待付人工款 - 待付材料款">项目可用</span><br>
                        <span>51,790.90</span>
                    </p>
                    <p class="fl col-md-4">
                            <span class="cLightGray pr8" data-title=" 未付总额 = 最终发包额 - 已付人工款 - 已付材料款 - 已付增项款">未付总额</span><br>
                            <span>238,790.90</span>
                    </p>
                </div>
        </router-link>
        <!-- 收入 -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">收入</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总应收 = 出纳对项目的总应收合计（包含增项）">总应收</span><br>
                    <span>480,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总已收 = 出纳对项目的总已收合计（包含增项）">总已收</span><br>
                    <span>336,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总未收 = 总应收 - 总已收">总未收</span><br>
                    <span>144,000.00</span>
                </p>
            </div>
        </div>
        <!-- 分账 -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">分账</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="发包已收（项目成本分账金额） = （发包金额 / (总签单额 - 质保金) ）*  总回款金额">发包已收</span><br>
                    <span>297,500.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title=" 项目总用=发包已收（来源投资财务交易平台系统分账）* 0.8">项目总用</span><br>
                    <span>238,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="剩余总用=发包金额 - 发包已收（最终根据投资财务交易平台分账而得）">剩余总用</span><br>
                    <span>127,500.00</span>
                </p>
            </div>
        </div>
        <!-- 支出 -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">支出</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总应付 = 原始发包金额 + 增项发包 - 减项发包 ">总应付</span><br>
                    <span>425,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总已付 = 人工款 + 材料款 + 增项款 + 结算款">总已付</span><br>
                    <span>186,209.10</span>
                </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="总未付 = 总应付 - 总已付">总未付</span><br>
                        <span>238,790.90</span>
                    </p>
            </div>
        </div>
        <!-- 人工款 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeRG?index= '+2+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">人工款</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title=" 可用=（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工款 - 待付人工款 ">可用</span><br>
                    <span class="c666">-59,016.31</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="已付=出纳支付的（已付人工 + 已经结算款）">已付</span><br>
                    <span class="c666">136,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="未付 = 总未付 - 增项未付 - 材料未付 - 结算未付">未付</span><br>
                    <span class="c666">238,790.90</span>
                </p>
            </div>
        </router-link>
        <!-- 材料款 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeCL?index= '+3+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">材料款</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title=" 可用=当人工可用> 项目可用时， 人工可用=项目可用 <br/>材料款可用资金： <br/>1、当人工可用为负数时：项目可用资金 + 人工款可用资金 ，  <br/>2、人工可用为正数时： 项目可用资金 - 人工款可用资金">可用</span><br>
                    <span class="c666">-7,225.41</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="已付 = 出纳已付材料总额">已付</span><br>
                    <span class="c666">50,209.10</span>
                </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="未付 = 材料下单未支付的配送单">未付</span><br>
                            <span class="c666">0.00</span>
                </p>
                <p class="col-md-3">
                    <span class="circlemark circlemark-lightRed">未</span>
                </p>
            </div>
        </router-link>
        <!-- 增项款 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeZX?index= '+3+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
        <!-- <router-link tag="div" exact :to="routerPath('payDetailThreeCL?index= '+4+'')" class="analyItem anItemBor" active-class="anItemBor-active" > -->
            <p class="analyItemTit tx-center">增项款</p>
            <div class="analyItemCon">
               <p class="fl col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span class="c666">0.00</span>
               </p>
               <p class="fl col-md-4">
                   <span class="cLightGray pr8">已付</span><br>
                   <span class="c666">0.00</span>
               </p>
                   <p class="fl col-md-4">
                       <span class="cLightGray pr8">未付</span><br>
                           <span class="c666">0.00</span>
                   </p>
                   <span class="circlemark circlemark-green">完</span>
               <!-- <div class="fixedTrangle">
                   <a  href="javascript:" class="fixedtips"></a>
                   <div class="fixedtipscon pt10 pb10" style="display: none;">
                       <i></i>
                       <p>未付 &gt; 0 为差</p>
                       <p>未付 = 0 为优</p>
                       <p>增项可用额度 =（增项分账总额 * 0.7) - 已付/待付增项 </p>
                   </div>
               </div> -->
            </div>
        </router-link>
        <!-- 结算款 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeJS?index= '+5+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">结算款</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">应付</span><br>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>0.00</span>
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <!-- 增项协调费 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeZXX?index= '+6+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">增项协调费</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应付</span><br>
                    <span class="c666">0.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="c666">0.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span class="c666">0.00</span>
                </p>
                <!-- <div class="fixedTrangle">
                    <a href="javascript:" class="fixedtips"></a>
                    <div class="fixedtipscon pt10 pb10">
                        <i></i>
                        <p>增项协调费可用额度 =增项协调费 * 增项回款率 - 已付/待付增项协调费 </p>
                    </div>
                </div> -->
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('payDetailThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon"></div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: '',
    data () {
        return {
            sceneList: [
                {
                    name: '物业办理',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '资料确认'
                },
                {
                    name: '现场保护',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '保护修改'
                },
                {
                    name: '形象布置',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '形象修改'
                },
                {
                    name: '临电布设',
                    creatName: '系统',
                    time: '2020-01-17',
                    currenStage: '临电实施'
                },
                {
                    name: '现场放线',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '放线修改'
                },
                {
                    name: '开工仪式',
                    creatName: '肖辉',
                    time: '2020-01-17',
                    currenStage: '物品准备'
                }
            ]
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
