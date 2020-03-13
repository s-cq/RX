<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-4">
                    <span class="pr8 cLightGray">合同额</span>
                    <span>9.60万</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应收</span>
                    <span class="cGreen">9.60万</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已收</span>
                    <span class="cGreen">4.80万</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-loading="loading" v-scrollHeight="84">
        <router-link tag="div"  exact :to="{path:routerPath('jxitemHeDetailThree'), query:{performance:performance}}"  class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="绩效金额 = 合同金额 - 装饰协调费 - 工程一切险 - 税金 - 保险 - 物业管理费 - 装饰其他金额 - 分项合计金额（空调，消防，弱电，钢结构） - 分项税金的合计 + 合同增减项金额">绩效金额</span><br>
                        <span class="cGreen">{{performance.PerformanceMoney | toFixed()}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="洽商利润 = （增项签单金额 - 增项发包金额 - 增项税金 - 增项代购）/ （增项签单金额 - 增项税金 - 增项代购）">洽商利润</span><br>
                        <span class="cGreen">{{performance.Amount | toFixed()}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="罚款金额 = 支款已扣除的罚款 ">罚款金额</span><br>
                        <span class="cGreen">{{(performance.jlFineMoney+performance.gcjlFineMoney) | toFixed()}}</span>
                    </p>
                    <!--提示层信息及内容 开始-->
                    <div class="fixedTrangle">
                        <i href="javascript:" class="fixedtips"></i>
                        <div class="fixedtipscon pt10 pb10">
                            <i></i>
                            <p>绩效金额 = 合同金额 - 装饰协调费 - 工程一切险 - 税金 - 保险 - 物业管理费  - 装饰其他金额 - 分项合计金额（空调，消防，弱电，钢结构） - 分项税金的合计</p>
                            <p>预计总提成 = 监理预计提成 + 工程经理预计提成</p>
                        </div>
                    </div>
                    <!--提示层信息及内容 结束-->
            </div>
        </router-link>
        <router-link tag="div" exact :to="{path:routerPath('jxitemOtherDetailThree'), query:{performance:performance,index:1}}" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">监理</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="普级 = 来源工程内部人事级别设置">普级</span><br>
                    <span class="cGreen">{{performance.superMap.superAbilityLevel}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="洽商提成 = 增项总利润 * 分账比例 * 客户评分 / 100">洽商提成</span><br>
                    <span class="cGreen">{{performance.superMap.incrementMoney | toFixed()}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="罚款提成 = 监理罚款总金额 * 分账比例 * 客户评分 / 100 ">罚款提成</span><br>
                    <span class="cGreen">{{performance.superMap.fineMoney | toFixed()}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8" data-title="竣工提成 = 绩效金额 * 分账比例 * 客户评分 / 100">竣工提成</span><br>
                    <span class="cGreen">{{performance.superMap.completeMoney | toFixed()}}</span>
                </p>
                    <span class="circlemark circlemark-green">完</span>
                <!--提示层信息及内容 开始-->
                <div class="fixedTrangle">
                    <i href="javascript:" class="fixedtips"></i>
                    <div class="fixedtipscon pt10 pb10">
                        <i></i>
                        <p>洽商提成 = 增项总利润 * 分账比例  * 客户评分 / 100</p>
                        <p>罚款提成 = 监理罚款总金额 * 分账比例  * 客户评分 / 100</p>
                        <p>竣工提成 = 绩效金额 *  分账比例  * 客户评分 / 100 </p>
                    </div>
                </div>
                <!--提示层信息及内容 结束-->
            </div>
        </router-link>
        <router-link tag="div"  exact :to="{path:routerPath('jxitemOtherDetailThree'), query:{performance:performance,index:2}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">经理</p>
            <div class="analyItemCon" v-if="performance.engineerMap!==null">
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="管级 = 来源工程内部人事级别设置">管级</span><br>
                     <span class="cGreen">{{performance.engineerMap.engineerManageLevel}}</span>
                 </p>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="洽商提成 = 增项总利润 * 分账比例 * 客户评分 / 100">洽商提成</span><br>
                     <span class="cGreen">{{performance.engineerMap.incrementMoney | toFixed()}}</span>
                 </p>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="罚款提成 = 经理罚款总金额 * 分账比例 * 客户评分 / 100">罚款提成</span><br>
                     <span class="cGreen">{{performance.engineerMap.fineMoney | toFixed()}}</span>
                 </p>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="竣工提成 = 绩效金额 * 分账比例 * 客户评分 / 100">竣工提成</span><br>
                     <span class="cGreen">{{performance.engineerMap.completeMoney | toFixed()}}</span>
                 </p>
                     <span class="circlemark circlemark-green">完</span>
                 <!--提示层信息及内容 开始-->
                 <div class="fixedTrangle">
                     <i href="javascript:" class="fixedtips"></i>
                     <div class="fixedtipscon pt10 pb10">
                         <i></i>
                         <p>洽商提成 = 增项利润 * 分账比例 * 客户评分 / 100</p>
                         <p>罚款提成 = 经理罚款总金额 * 分账比例 * 客户评分 / 100 </p>
                         <p>竣工提成 = 绩效金额 * 分账比例 * 客户评分 / 100</p>
                     </div>
                 </div>
                 <!--提示层信息及内容 结束-->
            </div>
            <div class="analyItemCon" v-else>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="管级 = 来源工程内部人事级别设置">管级</span><br>
                     <span class="cGreen">无</span>
                 </p>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="洽商提成 = 增项总利润 * 分账比例 * 客户评分 / 100">洽商提成</span><br>
                     <span class="cGreen">0.00</span>
                 </p>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="罚款提成 = 经理罚款总金额 * 分账比例 * 客户评分 / 100">罚款提成</span><br>
                     <span class="cGreen">0.00</span>
                 </p>
                 <p class="col-md-3">
                     <span class="cLightGray pr8" data-title="竣工提成 = 绩效金额 * 分账比例 * 客户评分 / 100">竣工提成</span><br>
                     <span class="cGreen">0.00</span>
                 </p>
                     <span class="circlemark circlemark-green">完</span>
                 <!--提示层信息及内容 开始-->
                 <div class="fixedTrangle">
                     <i href="javascript:" class="fixedtips"></i>
                     <div class="fixedtipscon pt10 pb10">
                         <i></i>
                         <p>洽商提成 = 增项利润 * 分账比例 * 客户评分 / 100</p>
                         <p>罚款提成 = 经理罚款总金额 * 分账比例 * 客户评分 / 100 </p>
                         <p>竣工提成 = 绩效金额 * 分账比例 * 客户评分 / 100</p>
                     </div>
                 </div>
                 <!--提示层信息及内容 结束-->
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" exact :to="routerPath('jxitemDetailThreeHandel')" class="analyItem anItemBor" active-class="anItemBor-active">
         <p class="analyItemTit tx-center">处理</p>
         <div class="analyItemCon">
            <p class="col-md-6">
                <span class="cLightGray pr8" data-title="洽商提成 = 洽商提成 + 罚款提成 + 竣工提成">监理<span class="cGreen">【{{performance.superMap.userName}}】</span>总提成：</span>
                <span class="cGreen">{{(performance.superMap.incrementMoney+performance.superMap.fineMoney+performance.superMap.completeMoney) | toFixed()}}</span>
            </p>
            <p class="col-md-6" v-if="performance.engineerMap!==null">
                <span class="cLightGray pr8" data-title="洽商提成 = 洽商提成 + 罚款提成 + 竣工提成">经理<span class="cGreen">【{{performance.engineerMap.userName}}】</span>总提成：</span>
                <span class="cGreen">{{(performance.engineerMap.incrementMoney+performance.engineerMap.fineMoney+performance.engineerMap.completeMoney) | toFixed()}}</span>
            </p>
            <p class="col-md-6" v-else>
                <span class="cLightGray pr8" data-title="洽商提成 = 洽商提成 + 罚款提成 + 竣工提成">经理<span class="cGreen">【无】</span>总提成：</span>
                <span class="cGreen">0.00</span>
            </p>
            <span class="circlemark circlemark-green">完</span>
         </div>
      </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPerformanceSecond } from '../Resources/Api'
export default {
    data () {
        return {
            loading: false,
            performance: {} // 二段数据
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
            this.loading = true
            let param = {
                orderNo: this.leftInfo.orderno // this.leftInfo.orderno
            }
            getPerformanceSecond(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.performance = results.data.Body
                    this.loading = false
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
                return '0.00'
            } else {
                return value.toFixed(2)
            }
        }
    }
}
</script>

