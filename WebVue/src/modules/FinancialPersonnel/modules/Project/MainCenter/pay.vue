<template>
<div class="" >
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
    <div class="thinScroll pr10" v-scrollHeight="84" v-loading="loading">
        <router-link tag="div" exact :to="routerPath('payDetailThreeHJ?index= '+1+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
                <p class="analyItemTit tx-center">合计</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title=" 最终发包额 = 原始发包金额 + 增项发包 - 减项发包 ">最终发包额</span><br>
                        <span>{{debitItem.actualPublishMoney | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="项目可用 = 发包已收（来源投资财务交易平台系统分账）* 0.8 - 已付人工款 - 已付材料款 - 待付人工款 - 待付材料款">项目可用</span><br>
                        <span>{{debitItem.availableMoney | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-4">
                            <span class="cLightGray pr8" data-title=" 未付总额 = 最终发包额 - 已付人工款 - 已付材料款 - 已付增项款">未付总额</span><br>
                            <span>{{debitItem.unPayMoney | toFixed()}}</span>
                    </p>
                </div>
        </router-link>
        <!-- 收入 -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">收入</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总应收 = 出纳对项目的总应收合计（包含增项）">总应收</span><br>
                    <span>{{debitItem.receivables | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总已收 = 出纳对项目的总已收合计（包含增项）">总已收</span><br>
                    <span>{{debitItem.sumReceived | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总未收 = 总应收 - 总已收">总未收</span><br>
                    <span>{{debitItem.notReceived | toFixed()}}</span>
                </p>
            </div>
        </div>
        <!-- 分账 -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">分账</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="发包已收（项目成本分账金额） = （发包金额 / (总签单额 - 质保金) ）*  总回款金额">发包已收</span><br>
                    <span>{{debitItem.contractReceivedMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title=" 项目总用=发包已收（来源投资财务交易平台系统分账）* 0.8">项目总用</span><br>
                    <span>{{debitItem.sumAvailableMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="剩余总用=发包金额 - 发包已收（最终根据投资财务交易平台分账而得）">剩余总用</span><br>
                    <span>{{debitItem.remainingContractReceivedMoney | toFixed()}}</span>
                </p>
            </div>
        </div>
        <!-- 支出 -->
        <div class="analyItem">
            <p class="analyItemTit tx-center">支出</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总应付 = 原始发包金额 + 增项发包 - 减项发包 ">总应付</span><br>
                    <span>{{debitItem.actualPublishMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="总已付 = 人工款 + 材料款 + 增项款 + 结算款">总已付</span><br>
                    <span>{{debitItem.payMoney | toFixed()}}</span>
                </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="总未付 = 总应付 - 总已付">总未付</span><br>
                        <span>{{debitItem.unPayMoney | toFixed()}}</span>
                    </p>
            </div>
        </div>
        <!-- 人工款 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeRG?index= '+2+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">人工款</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title=" 可用=（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工款 - 待付人工款 ">可用</span><br>
                    <span class="c666">{{debitItem.workerAvailableMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="已付=出纳支付的（已付人工 + 已经结算款）">已付</span><br>
                    <span class="c666">{{debitItem.workerPayMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="未付 = 总未付 - 增项未付 - 材料未付 - 结算未付">未付</span><br>
                    <span class="c666">{{debitItem.workerUnPayMoney | toFixed()}}</span>
                </p>
            </div>
        </router-link>
        <!-- 材料款 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeCL?index= '+3+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">材料款</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title=" 可用=当人工可用> 项目可用时， 人工可用=项目可用 <br/>材料款可用资金： <br/>1、当人工可用为负数时：项目可用资金 + 人工款可用资金 ，  <br/>2、人工可用为正数时： 项目可用资金 - 人工款可用资金">可用</span><br>
                    <span class="c666">{{debitItem.materialAvailableMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="已付 = 出纳已付材料总额">已付</span><br>
                    <span class="c666">{{debitItem.materialPayMoney | toFixed()}}</span>
                </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="未付 = 材料下单未支付的配送单">未付</span><br>
                            <span class="c666">{{debitItem.materialUnPayMoney | toFixed()}}</span>
                </p>
                <p class="col-md-3">
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
                   <span class="c666">{{debitItem.sumIncreaseMoney | toFixed()}}</span>
               </p>
               <p class="fl col-md-4">
                   <span class="cLightGray pr8">已付</span><br>
                   <span class="c666">{{debitItem.increaseMoney | toFixed()}}</span>
               </p>
                   <p class="fl col-md-4">
                       <span class="cLightGray pr8">未付</span><br>
                           <span class="c666">{{debitItem.unIncreaseMoney | toFixed()}}</span>
                   </p>
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
                    <span>{{debitItem.settlementMoney | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span>{{debitItem.settlementAccounts | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{debitItem.settlementUnPayMoney | toFixed()}}</span>
                </p>
            </div>
        </router-link>
        <!-- 增项协调费 -->
        <router-link tag="div" exact :to="routerPath('payDetailThreeZXX?index= '+6+'')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">增项协调费</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应付</span><br>
                    <span class="c666">{{debitItem.coordinationMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已付</span><br>
                    <span class="c666">{{debitItem.coordinationPayMoney | toFixed()}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span class="c666">{{debitItem.coordinationUnPayMoney | toFixed()}}</span>
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
import { getDebitSecond } from '../Resources/Api'

export default {
    name: '',
    data () {
        return {
            loading: true,
            debitItem: {} // 支二段数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 默认加载
        load () {
            this.loading = true
            let param = {
                orderNo: this.leftInfo.orderno // this.leftInfo.orderno
            }
            // 查询材料数据
            getDebitSecond(param).then(results => {
                this.debitItem = results.data.Body.workorder
                this.loading = false
            }).catch(() => {})
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        },
        // 金额过滤
        toFixed (value) {
            if (value == null || isNaN(value) || value === undefined) {
                return '0.00'
            } else {
                return value.toFixed(2)
            }
        }
    }
}
</script>
