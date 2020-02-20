<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'历史详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">普薪</p>
                <div class="analyItemCon">

                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">普级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">底薪</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">月评</span></p>
                        <p class="col-md-3"><span>{{body.abilityLevel}}</span></p>
                        <p class="col-md-3"><span>{{body.baseSalary}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.generalAdjust)}}</span></p>
                        <p class="col-md-3"><span>{{body.adjustMoney}}</span></p>
                        <!-- <input id="baseManageSalary" type="hidden" v-bind:value="baseManageSalary"> -->
                    </div>
                    <div class="col-md-2">
                        <p>
                            <span class="cLightGray pr8">实薪</span>
                        </p>
                        <p class="">{{Number(body.baseManageSalary+body.adjustMoney+body.evaluateMoney)}} </p>
                    </div>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">管薪</p>
                <div class="analyItemCon">

                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">管级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">底薪</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">月评</span></p>
                        <p class="col-md-3"><span>{{body.manageLevel}}</span></p>
                        <p class="col-md-3"><span>{{body.evaluateMoney}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.generalAdjust+body.manageAdjust)}}</span></p>
                        <p class="col-md-3"><span>{{body.adjustMoney}}</span></p>
                        <!-- <input id="baseManageSalary" type="hidden" v-bind:value="baseManageSalary"> -->
                    </div>
                    <div class="col-md-2">
                        <p>
                            <span class="cLightGray pr8">实薪</span>
                        </p>
                        <p class="">{{Number(body.baseManageSalary+body.adjustMoney+body.evaluateMoney)}} </p>
                    </div>
                </div>
            </div>

            <div class="analyItem">
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
                        <p>
                            <span class="cLightGray pr8">合计</span>
                        </p>
                        <p>{{Number(completion_money+fine_money+negotiate_profit).toFixed(2)}}</p>
                    </div>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">订单</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">工人录入</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">&nbsp;</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8"></span></p>
                        <p class="col-md-3"><span>{{body.orderMoney}}</span></p>
                        <p class="col-md-3"><span>{{Number(workerDetails.workerSumMoney===null?0:workerDetails.workerSumMoney)}}</span></p>
                        <p class="col-md-3"><span>&nbsp;</span></p>
                        <p class="col-md-3"><span>&nbsp;</span></p>
                    </div>
                    <div class="col-md-2">
                        <p>
                            <span class="cLightGray pr8">合计</span>
                        </p>
                        <p></p>
                        <p>{{(Number(body.orderMoney)+Number(workerDetails.workerSumMoney===null?0:workerDetails.workerSumMoney)).toFixed(2)}}</p>
                        <p></p>
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
            <div class="analyItem">
                <p class="analyItemTit tx-center">平衡</p>

                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-12"><span class="cLightGray pr8">平衡</span></p>

                        <p class="col-md-12  cGreen">

                            {{body.manualChangeWages}}</p>

                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>

                        <p class="col-md-3  cGreen">

                            {{body.manualChangeWages}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span class=""></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span class=""></span></p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">收入</span>
                        <span class="pr8 cGreen">{{body.trueSalary}}</span>
                    </p>
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
    getInternalSalaryByUserCard, getMonthReviewRecording
} from '../../../Resources/Api'
// import { getTechnicsDetail } from '../../../Resources/Api/index'getStayStaySalaryDetail
export default {
    props: ['month', 'year'],
    data () {
        return {
            pointTime: '',
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
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        if (this.month < 10) {
            this.pointTime = this.year + '-0' + this.month
        } else {
            this.pointTime = this.year + '-' + this.month
        }
        this.GetUserTradeDetailByUserCardFn()
        this.getMonthReviewRecordingFn()
    },
    methods: {
        getMonthReviewRecordingFn () {
            getMonthReviewRecording({
                user_card_no: this.leftInfo.cardNo,
                pointTime: this.pointTime
            }).then({

            }).catch(error => {
                console.log(error)
            })
        },
        GetUserTradeDetailByUserCardFn () {
            this.body = {}
            this.order = {}
            getInternalSalaryByUserCard({
                user_card_no: this.leftInfo.cardNo,
                pointTime: this.pointTime
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
                }
            }).catch(error => {
                console.log(error)
            })
        }

    }

}
</script>
