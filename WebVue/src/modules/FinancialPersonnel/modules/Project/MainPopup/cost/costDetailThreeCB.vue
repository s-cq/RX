<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【成本账】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" v-if="workorder !== {}">
        <div class="plr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">成本</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="发包金额= 承包给项目经理的总金额">发包金额</span>
                        <span>{{workorder.actual_publish_money | toFixed()}}</span>

                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">项目经理</span>
                        <span>{{workorder.pm_username}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="项目总用= 发包已收（来源投资财务交易平台系统分账）* 0.8">项目总用</span>
                        <span>{{workorder.packAmount ===null ? '--' : (workorder.packAmount*0.8)| toFixed()}}</span>
                    </p>
                </div>
            </div>
             <div class="analyItem">
                 <p class="analyItemTit tx-center">其他费</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="夜间施工费 = 来源审计报价的夜间施工费">夜间施工费</span>
                        <span>{{workorder.nightwork_fee| toFixed()}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="远程施工费 = 来源审计报价的远程施工费">远程施工费</span>
                        <span>{{workorder.distance_fee | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="合计 = 夜间施工费 + 远程施工费">合计</span>
                        <span>{{(workorder.nightwork_fee+workorder.distance_fee) | toFixed()}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">人工</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="计划总人工 = 发包金额 - 计划总材料">计划总人工</span><br>
                        <span>{{workorder.workerPlaneSumMoney | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="核算总人工 = 工种应付金额合计（总工时 / 8 * 每天工资）">核算总人工</span><br>
                        <span>{{workorder.workerPlaneMoney | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="差额 = 计划总人工 - 核算总人工 - 夜间施工费 - 远程施工费">差额</span><br>
                        <span>{{workorder.workerDifference | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="占比 = 核算总人工 / 发包金额">占比</span><br>
                        <span>{{(workorder.workerProportion*100) | toFixed()}}%</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">材料</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="计划总材料 = 发包金额 - 计划总人工">计划总材料</span><br>
                        <span>{{workorder.workerPlaneSumMoney | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="核算总材料 = 计划材料总额">核算总材料</span><br>
                        <span>{{workorder.materialplanMoney | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="差额 = 计划总材料 - 核算总材料">差额</span><br>
                        <span>{{workorder.materialDifference | toFixed()}}</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="占比 = 计划总材料 / 发包金额">占比</span><br>
                        <span>{{(workorder.materialProportion*100) | toFixed()}}%</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">盈余账</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="盈余账 = 发包金额 - 核算总人工 - 核算总材料 - 夜间施工费 - 远程施工费">盈余</span>
                            <span class="cRed layerui-title" data-title="【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常">--</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="项目实际发包毛利率">发包毛利率</span>
                            <span class="cRed" style="font-weight:bolder">{{workorder.decorate_publish_profit_rate}}%</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="发包日期 = 项目实际的发包日期">发包日期</span>
                        <span>{{myFormatDate(workorder.publish_time)}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="项目可用= 发包已收（来源投资财务交易平台系统分账）* 0.8 - 已付人工款 - 已付材料款 - 待付人工款 - 待付材料款">项目可用</span>
                    <span>{{workorder.availableMoney | toFixed()}}</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getCostSharingThree } from '../../Resources/Api'
export default {
    data () {
        return {
            workorder: {} // 二段数据
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
        // 查询回款二段数据
        load () {
            let param = {
                orderNo: this.leftInfo.orderno, // this.leftInfo.orderno
                type: 0
            }
            getCostSharingThree(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.workorder = results.data.Body.workorder
                }
            }).catch(() => {})
        },
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
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
                return '--'
            } else {
                return value.toFixed(2)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
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
</style>
