<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-3">
                    <span class="cLightGray pr8">总计</span>
                    <span>7个</span>
                </p> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <!-- 合同账 -->
        <router-link tag="div" exact :to="{path:routerPath('costDetailThreeHT'), query:{item:workorder}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合同账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="合同金额= 与甲方（客户）签订合同金额">合同金额</span><br>
                    <span>{{workorder.contract_fee | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="成本金额（发包金额） = 与丙方（项目经理）实际的发包发包额">成本金额</span><br>
                    <span>{{workorder.actual_publish_money | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">毛利</span><br>
                    <span>{{workorder.gross_profit | toFixed()}}</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 成本账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeCB?index='+2+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">成本账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="发包金额 = 实际发包给项目经理的发包额">发包金额</span><br>
                    <span>{{workorder.actual_publish_money | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划总人工 = 来源工人联盟系统人工计划总额接口">计划人工</span><br>
                    <span>{{workorder.workerPlaneMoney | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划材料 = 来源材料系统材料计划总额">计划材料</span><br>
                    <span>{{workorder.materialplanMoney | toFixed()}}</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 人工 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeRG?index='+3+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">人工</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划总人工 = 来源工人联盟系统人工计划总额接口">计划总人工</span><br>
                    <span>{{workorder.workerPlaneMoney | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="人工可用 =（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工 - 待付人工 ">人工可用</span><br>
                        <span>--</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="未用人工 =人工计划总额 - 已付人工 - 待付人工 ">未用人工</span><br>
                        <span>{{workorder.workerUnusedMoney | toFixed()}}</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 材料 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeCL?index='+4+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="计划总材料 = 发包金额 - 计划总人工">计划总材料</span><br>
                    <span>{{workorder.materialplanMoney | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="材料可用 = 项目可用 - 人工可用">材料可用</span><br>
                        <span>--</span>
                </p>
                <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="未用材料 = 材料计划总额 - 已付/待付材料 - 未付材料款">未用材料</span><br>
                        <span>{{workorder.materialUnusedMoney | toFixed()}}</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 奖罚 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeJF?index='+5+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">奖罚</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">待办罚款</span><br>
                    <span>{{workorder.pendingFine | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">地方罚款</span><br>
                    <span>{{workorder.localFine | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">集团罚款</span><br>
                    <span>{{workorder.groupFine | toFixed()}}</span>
                </p>

            </div>
        </router-link>
        <!-- 分项账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeFX?index='+6+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">分项账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">分项总额</span>
                    <span>--</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="发包日期 = 项目实际的发包日期">发包日期</span>
                        <span>{{workorder.publish_time == null ? '--':formatDate(workorder.publish_time)}}</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
            </div>
        </router-link>
        <!-- 盈余账 -->
        <router-link tag="div" exact :to="routerPath('costDetailThreeYY?index='+7+'')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">盈余账</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title=" 盈余总额 =发包金额 - 计划总人工（来源工人联盟人工计划总额） - 计划总材料（来源材料业务材料计划总额） - 夜间施工费 - 远程施工费">盈余总额</span>
                        <span class="cRed layerui-title" data-title="【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常">--</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">重审金额</span>
                    <span>--</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">预警</span>
                    <span class="cRed">--</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
                <div class="fixedTrangle">
                    <i  class="fixedtips"></i>
                    <div class="fixedtipscon pt10 pb10" style="display: none;">
                        <i></i>
                        <p>【盈余总额】 = 发包金额 - 计划总人工（来源工人联盟人工计划总额） - 计划总材料（来源材料业务材料计划总额） - 夜间施工费 - 远程施工费</p>
                        <p>【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常</p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
    <!-- <div class="pr10">
        <router-link tag="div" exact :to="routerPath('costDetailThreeHandel?index='+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in qualityList" :key="index">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 合同</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 成本</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 人工</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 材料</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 分项</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8"> 盈余</span>
                        <span style="color:green;font-weight:bolder">完</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
        </div>
        </router-link>
    </div> -->
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getCostSharingSecond } from '../Resources/Api'
export default {
    data () {
        return {
            workorder: {}, // 二段数据
            qualityList: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        console.info(this.leftInfo)
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
        // 查询回款二段数据
        load () {
            let param = {
                orderNo: this.leftInfo.orderno // this.leftInfo.orderno
            }
            getCostSharingSecond(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.workorder = results.data.Body.workorder
                }
            }).catch(() => {})
        },
        // 时间转换
        formatDate (value) {
            let date = new Date(value)
            let y = date.getFullYear()
            let MM = date.getMonth() + 1
            MM = MM < 10 ? ('0' + MM) : MM
            let d = date.getDate()
            d = d < 10 ? ('0' + d) : d
            return y + '-' + MM + '-' + d
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        toFixed (value) {
            if (value !== undefined) {
                return typeof Number(value) === 'number' ? value.toFixed(2) : '--'
            } else {
                return '--'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .staticSRyle {
        width: 25px;
        line-height: 25px!important;
        top: 2px;
        left: 2px;
        background: #000;
        opacity: .6;
        height: 25px;
        position: absolute;
        border-radius: 5px;
        color: #fff;
        text-align: center;
    }
    .fixedRight {
        position: absolute;
        right: 10px;
        top: 14%;
        margin-top: -12px;
        font-size: 14px;
        font-weight: 700;
    }
</style>
