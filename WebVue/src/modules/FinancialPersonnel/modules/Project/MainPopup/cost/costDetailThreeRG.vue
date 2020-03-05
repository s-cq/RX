<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【施尾_人工】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目可用</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="项目总用= 发包已收（来源投资财务交易平台系统分账）* 0.8">项目总用</span>
                    <span>{{(workorder.packAmount*0.8).toFixed(2)}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="项目可用 = 发包已收（来源投资财务交易平台系统分账）* 0.8 - 已付人工款 - 已付材料款 - 待付人工款 - 待付材料款">项目可用</span>
                    <span>{{workorder.availableMoney.toFixed(2)}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="计划总人工 = 发包金额 - 计划总材料">计划总人工</span>
                    <span>{{workorder.workerPlaneSumMoney.toFixed(2)}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工总额</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="人工计划总额 = 发包金额  - 材料计划总额">人工计划总</span>
                    <span>{{workorder.workerPlaneSumMoney.toFixed(2)}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">修改人工</span>
                    <input type="text" class="jm_tab_inp width80 xgMoney" placeholder="计划人工" data-payable="425000.0000" value="157109.58" :data-summoney="workorder.workerPlaneMoney.toFixed(2)">
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">差额</span>
                    <span id="rgceMoney">{{(workorder.workerPlaneSumMoney - workorder.workerPlaneMoney).toFixed(2)}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工款</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="可用额度 =（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项）">可用额度</span>
                    <span>--</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="已付人工 =出纳已支付的人工凭证">已付人工</span>
                    <span>{{worker.workerPayMoney.toFixed(2)}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="待付人工 =出纳待支付的人工凭证">待付人工</span>
                    <span>{{worker.workerWaitPayMoney.toFixed(2)}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">剩余</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="剩余可用 =（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工 - 待付人工 ">剩余可用</span>
                    <span>--</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="未用人工 =人工计划总额 - 已付人工 - 待付人工 ">未用人工</span>
                    <span>{{(workorder.workerPlaneSumMoney-worker.workerPayMoney-worker.workerWaitPayMoney).toFixed(2)}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="cLightGray pr8" data-title="人工可用=（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工 - 待付人工">人工可用</span>
                    <span>--</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr10">工种合计</span>
                    <span>--</span>
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
            workorder: null,
            worker: null
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
                orderNo: this.leftInfo.orderno, // this.leftInfo.orderno
                type: 3
            }
            getCostSharingThree(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.workorder = results.data.Body.workorder
                    this.worker = results.data.Body.worker
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
