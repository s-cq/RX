<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-6"><span class="cLightGray pr8">预计本月</span> <span>{{Number(body.trueSalary).toFixed(2)}}</span></p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <!-- <router-link tag="div" :to="{name:'salaryBasesalary6',params:{body:body}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">底薪</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">普 + 管</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">周月评</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">补贴</span></p>
                        <p class="col-md-3"><span>{{body.abilityLevel}}+{{body.manageLevel}}</span></p>
                        <p class="col-md-3"><span>{{body.evaluateMoney}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.generalAdjust+body.manageAdjust)}}</span></p>
                        <p class="col-md-3"><span>{{body.adjustMoney}}</span></p>
                        <input id="baseManageSalary" type="hidden" value="4500">
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">实薪</span></p>
                        <p>{{Number(body.baseManageSalary+body.adjustMoney+body.evaluateMoney)}} </p>
                    </div>
                </div>
            </router-link> -->
            <router-link tag="div" :to="{name:'salaryResult6',params:{stayStayResult:body.stayStayResult}}" class="analyItem anItemBor" active-class="anItemBor-active">
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

            <router-link tag="div" :to="{name:'salaryManagement6',params:{stayStayManagement:body.stayStayManagement}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
            <router-link tag="div" :to="{name:'salaryProcess6',params:{order:order,orderDetail:orderDetail,orderCount:orderCount,orderMoney:body.orderMoney}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
            <router-link tag="div" :to="{name:'salaryBasesalary6',params:{body:body}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">工资</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-4"><span class="cLightGray pr8">普薪</span><span>{{body.baseSalary==null?0:body.baseSalary}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">管薪</span><span>{{body.manageSalary==null?0:body.manageSalary}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">奖罚</span><span>{{Number(body.punishTotalMoney).toFixed(2)}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">周月评</span><span>{{body.evaluateMoney}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">社公</span><span>{{Number(body.socialFund).toFixed(2)}}</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">综合</span><span>
                                {{(Number(body.baseSalary==null?0:body.baseSalary)
                            +Number(body.manageSalary==null?0:body.manageSalary)
                            +Number(body.punishTotalMoney)
                            +Number(body.evaluateMoney)+Number(body.socialFund)).toFixed(2)}}</span></p>
                        <input id="baseManageSalary" type="hidden" value="4500">
                    </div>
                    <!-- <div class="col-md-2">
                        <p><span class="cLightGray pr8">实薪</span></p>
                        <p>{{Number(body.baseManageSalary+body.adjustMoney+body.evaluateMoney)}} </p>
                    </div> -->
                </div>
            </router-link>
            <!-- <router-link tag="div" :to="routerPath('salaryRewardandpunishment6')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">奖罚</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">奖罚</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">现金</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">考勤</span></p>
                        <p class="col-md-3">&nbsp;</p>
                        <p class="col-md-3">{{Number(body.eventMoney).toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{Number(body.cashGain).toFixed(2)}}</p>
                        <p class="col-md-3">{{Number(body.attendance).toFixed(2)}}</p>
                        <p class="col-md-3">&nbsp;</p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p class="col-md-3">{{Number(body.punishTotalMoney).toFixed(2)}}</p>
                    </div>
                </div>
            </router-link> -->
            <!-- <div class="analyItem ">
                <p class="analyItemTit tx-center">社公</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">社保</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">公积金</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">个税</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8"></span></p>
                        <p class="col-md-3 cRed">{{Number(body.socialSecurity).toFixed(2)}}</p>
                        <p class="col-md-3 cRed">{{Number(body.houseFund).toFixed(2)}}</p>
                        <p class="col-md-3 cRed">{{Number(body.incomeTax).toFixed(2)}}</p>
                        <p class="col-md-3 cRed">&nbsp;</p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p class="col-md-3 cRed">{{Number(body.socialFund).toFixed(2)}}</p>
                    </div>
                </div>
            </div> -->
            <!-- <router-link tag="div" :to="routerPath('salaryHistory6')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span title="本年综合收入之和（不含本月、含上月及之前的）" class="cLightGray pr8">应发薪酬</span> </p>
                    <p class="col-md-3"><span title="首先是未发月份的，未发收入之和（不含本月、不含上月）" class="cLightGray pr8">未发薪酬</span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                    <p class="col-md-3"><span class="cGreen pr8">{{Number(body.prevHTMoney).toFixed(2)}}</span></p>
                    <p class="col-md-3"><span class="cGreen pr8">{{Number(body.prevWFHTMoney).toFixed(2)}}</span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                    <p class="col-md-3"><span class="pr8"></span></p>
                </div>
            </router-link> -->
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('salaryComprehensive6')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">结果</span><span>{{Number(completion_money+fine_money+negotiate_profit).toFixed(2)}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">过程</span><span>{{Number(body.orderMoney+workerDetails.workerSumMoney).toFixed(2)}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">管理</span><span>{{Number(completion_moneys+fine_moneys+negotiate_profits).toFixed(2)}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">工资</span><span>
                            {{(Number(body.baseSalary==null?0:body.baseSalary)
                            +Number(body.manageSalary==null?0:body.manageSalary)
                            +Number(body.punishTotalMoney)
                            +Number(body.evaluateMoney)+Number(body.socialFund)).toFixed(2)}}
                        </span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">总收入</span><span class="pr8 cGreen">{{Number(body.trueSalary).toFixed(2)}}</span></p>
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
            getStayStaySalaryDetail({
                user_card_no: this.leftInfo.cardNo
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
                // this.unit_price += this.order[o].unit_price * this.order[o].orderCount

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
        ...mapGetters(['leftInfo', 'updatePlate'])
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
        },
        updatePlate () {
            this.GetUserTradeDetailByUserCardFn()
        }

    }
}
</script>
