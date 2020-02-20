<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-6"><span class="cLightGray pr8">预计本月</span> <span>{{body.trueSalary+body.commission}}</span></p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="84">
            <router-link tag="div" :to="{name:'salaryBasesalary4',params:{body:body}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">底薪</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-2"><span class="cLightGray pr8">普 + 管</span></p>
                        <p class="col-md-2"><span class="cLightGray pr8">周月评</span></p>
                        <p class="col-md-2"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-2"><span class="cLightGray pr8">补贴</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">平衡</span></p>
                        <p class="col-md-2"><span>{{body.baseManageSalary}}</span></p>
                        <p class="col-md-2"><span>{{body.commission}}</span></p>
                        <p class="col-md-2"><span>{{Number(body.generalAdjust+body.manageAdjust)}}</span></p>
                        <p class="col-md-2"><span>{{body.adjustMoney}}</span></p>
                        <p class="col-md-4"><span>{{body.manualChangeWages==null?0:body.manualChangeWages}}</span></p>
                        <!-- <input id="baseManageSalary" type="hidden" value="4500"> -->
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p>{{Number(body.baseManageSalary+body.adjustMoney+body.commission+body.manualChangeWages).toFixed(2)}} </p>
                    </div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'salaryResult4',params:{stayStayResult:body.stayStayResult}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">结果</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">竣工</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">罚款</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">洽商</span></p>
                        <p class="col-md-3">&nbsp;</p>
                        <p class="col-md-3 cGreen">{{completion_money.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{fine_money.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{negotiate_profit.toFixed(2)}}</p>
                        <p class="col-md-3">&nbsp;</p>

                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p>{{Number(completion_money+fine_money+negotiate_profit).toFixed(2)}}</p>
                    </div>
                    <div class="fixedTrangle">
                        <!-- <a href="javascript:" class="fixedtips"></a> -->
                        <div class="fixedtipscon pt10 pb10">
                            <i></i>
                        </div>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" :to="{name:'salaryManagement4',params:{stayStayManagement:body.stayStayManagement}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">管理</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">竣工</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">罚款</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">洽商</span></p>
                        <p class="col-md-3">&nbsp;</p>
                        <p class="col-md-3 cGreen">{{completion_moneys.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{fine_moneys.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{negotiate_profits.toFixed(2)}}</p>
                        <p class="col-md-3">&nbsp;</p>

                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p>{{Number(completion_moneys+fine_moneys+negotiate_profits).toFixed(2)}}</p>
                    </div>
                    <div class="fixedTrangle">
                        <!-- <a href="javascript:" class="fixedtips"></a> -->
                        <div class="fixedtipscon pt10 pb10">
                            <i></i>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'salaryProcess4',params:{order:order,orderDetail:orderDetail,orderCount:orderCount}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">订单</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">工人录入</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">&nbsp;</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8"></span></p>
                        <p class="col-md-3"><span>{{body.orderMoney}}</span></p>
                        <p class="col-md-3"><span>{{workerDetails.workerSumMoney===null?0:Number(workerDetails.workerSumMoney)}}</span></p>
                        <p class="col-md-3"><span>&nbsp;</span></p>
                        <p class="col-md-3"><span>&nbsp;</span></p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p></p>
                        <p>{{Number(body.orderMoney+workerDetails.workerSumMoney).toFixed(2)}}</p>
                        <p></p>
                    </div>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('salaryRewardandpunishment4')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">奖罚</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">奖罚</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">考勤</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8"></span></p>
                        <p class="col-md-3">&nbsp;</p>
                        <p class="col-md-3">{{body.eventMoney}}</p>
                        <p class="col-md-3">{{body.attendance.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">&nbsp;</p>
                        <p class="col-md-3">&nbsp;</p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p class="col-md-3">{{body.punishTotalMoney}}</p>
                    </div>
                </div>
            </router-link>
            <div class="analyItem ">
                <p class="analyItemTit tx-center">社公</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">社保</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">公积金</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">个税</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8"></span></p>
                        <p class="col-md-3 cRed">{{body.socialSecurity}}</p>
                        <p class="col-md-3 cRed">{{body.houseFund}}</p>
                        <p class="col-md-3 cRed">{{body.incomeTax}}</p>
                        <p class="col-md-3 cRed">&nbsp;</p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p class="col-md-3 cRed">{{body.socialFund}}</p>
                    </div>
                </div>
            </div>
            <router-link tag="div" :to="routerPath('salaryHistory4')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span title="本年综合收入之和（不含本月、含上月及之前的）" class="cLightGray pr8">应发薪酬</span> </p>
                    <p class="col-md-3"><span title="首先是未发月份的，未发收入之和（不含本月、不含上月）" class="cLightGray pr8">未发薪酬</span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                    <p class="col-md-3"><span class="cGreen pr8">{{body.prevHTMoney}}</span></p>
                    <p class="col-md-3"><span class="cGreen pr8">{{body.prevWFHTMoney}}</span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                </div>
            </router-link>

        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('salaryComprehensive4')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">预计收入</span><span class="pr8 cGreen">{{body.trueSalary+body.commission}}</span></p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    getStayStaySalaryDetail
} from '../Resources/Api'
export default {
    data () {
        return {
            body: {},
            order: [],
            orderCount: 0,
            unit_price: 0,
            completionList: {},
            completionLists: {},
            countOrderPrice: 0,
            orderDetail: [],
            // 竣工金额
            completion_money: 0,
            // 竣工提成
            comprehensive_completion: 0,
            // 罚款金额
            fine_money: 0,
            // 罚款提成
            comprehensive_fine: 0,
            // 洽商金额
            negotiate_profit: 0,
            // 洽商提成
            comprehensive_negotiate: 0,
            // 项目总数
            projectSums: 0,
            // 竣工金额
            completion_moneys: 0,
            // 竣工提成
            comprehensive_completions: 0,
            // 罚款金额
            fine_moneys: 0,
            // 罚款提成
            comprehensive_fines: 0,
            // 洽商金额
            negotiate_profits: 0,
            // 洽商提成
            comprehensive_negotiates: 0,
            workerDetails: {}
        }
    },
    created () {
        this.GetUserTradeDetailByUserCardFn()
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
        GetUserTradeDetailByUserCardFn () {
            this.body = {}
            this.order = {}
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            getStayStaySalaryDetail({
                user_card_no: this.leftInfo.u_kahao,
                pointTime: this.pointTime
            }).then(results => {
                this.body = results.data.Body
                this.order = this.body.order
                this.orderDetail = this.body.orderDetail
                this.workerDetails = this.body.workerDetails
                this.completionList = results.data.Body.stayStayResult
                this.completionLists = results.data.Body.stayStayManagement
                for (var i = 0; i < this.completionList.length; i++) {
                    // this.projectSum++
                    this.completion_money += this.completionList[i].completion_expected
                    this.fine_money += this.completionList[i].fine_commission
                    this.negotiate_profit += this.completionList[i].negotiate_commission
                }
                for (var j = 0; j < this.completionLists.length; j++) {
                    // this.projectSum++
                    this.completion_moneys += this.completionLists[j].completion_expected
                    this.fine_moneys += this.completionLists[j].fine_commission
                    this.negotiate_profits += this.completionLists[j].negotiate_commission
                }
                this.orderCount = this.orderDetail.length
                for (var q = 0; q < this.orderDetail.length; q++) {
                    this.countOrderPrice += Number(this.orderDetail[q].countOrderTypeId) * Number(this.orderDetail[q].unit_price)
                    console.log('this.countOrderPrice' + this.countOrderPrice)
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.countOrderPrice = 0
            this.orderDetail = []
            this.body = {}
            this.order = []
            this.orderCount = 0
            this.unit_price = 0
            this.completionList = {}
            this.completionLists = {}
            // 竣工金额
            this.completion_money = 0
            // 竣工提成
            this.comprehensive_completion = 0
            // 罚款金额
            this.fine_money = 0
            // 罚款提成
            this.comprehensive_fine = 0
            // 洽商金额
            this.negotiate_profit = 0
            // 洽商提成
            this.comprehensive_negotiate = 0
            // 项目总数
            this.projectSums = 0
            // 竣工金额
            this.completion_moneys = 0
            // 竣工提成
            this.comprehensive_completions = 0
            // 罚款金额
            this.fine_moneys = 0
            // 罚款提成
            this.comprehensive_fines = 0
            // 洽商金额
            this.negotiate_profits = 0
            // 洽商提成
            this.comprehensive_negotiates = 0
            this.GetUserTradeDetailByUserCardFn()
        }
    }
}
</script>
