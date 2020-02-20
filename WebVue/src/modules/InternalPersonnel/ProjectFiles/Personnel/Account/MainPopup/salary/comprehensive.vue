<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'综合'}"></three-title>
        <div class="threeScroll pl10 pr5" style="height: 362px; overflow: hidden; width: auto;" v-scrollHeight="18">
            <div class="analyItem">
                <p class="analyItemTit tx-center">底薪</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">普级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">管级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">补贴</span></p>
                        <p class="col-md-3"><span>{{body.abilityLevel}}</span></p>
                        <p class="col-md-3"><span>{{body.manageLevel}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.generalAdjust+body.manageAdjust)}}</span></p>
                        <p class="col-md-3"><span>{{body.adjustMoney}}</span></p> <input id="baseManageSalary" type="hidden" value="0">
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">实薪</span></p>
                        <p>{{Number(body.baseManageSalary+body.adjustMoney+body.evaluateMoney)}} </p>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">奖罚</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">奖罚</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">现金</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">考勤</span></p>
                        <p class="col-md-3">&nbsp;</p>
                        <p class="col-md-3">{{body.eventMoney}}</p>
                        <p class="col-md-3 cGreen">{{body.cashGain}}</p>
                        <p class="col-md-3">{{body.attendance}}</p>
                        <p class="col-md-3">&nbsp;</p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p class="col-md-3">{{body.punishTotalMoney}}</p>
                    </div>
                </div>
            </div>
            <div class="analyItem">
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
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">总收</span>{{(Number(body.trueSalary)-
                        (Number(body.orderMoney)+Number(workerDetails.workerSumMoney===null?0:workerDetails.workerSumMoney))
                        -Number(completion_money+fine_money+negotiate_profit)
                        -Number(completion_moneys+fine_moneys+negotiate_profits)
                        ).toFixed(2)}}</p>
                        <p class="col-md-3"><span class="cLightGray pr8">底薪</span>{{Number(body.baseSalary+body.manageSalary).toFixed(2)}}</p>
                        <p class="col-md-3"><span class="cLightGray pr8">奖罚</span>{{body.punishTotalMoney}}</p>
                        <p class="col-md-3"><span class="cLightGray pr8">社公</span>{{body.socialFund}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    getStayStaySalaryDetail
} from '../../Resources/Api'
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
                this.workerDetails = this.body.workerDetails
                this.orderCount = this.body.workerDetails.workerDetails.length

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
