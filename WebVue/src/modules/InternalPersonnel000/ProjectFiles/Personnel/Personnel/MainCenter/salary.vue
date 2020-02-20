<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">预计本月</span> <span>{{Number(body.trueSalary).toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8 cRed">{{Number(money) | moneyText(2)}}</span>
                        <span class="cLightGray pr8 cRed">{{Number(body.trueSalary) | evaluateText(2)}}</span>

                    </p>
                    <span class="circlemark" :class="Number(body.trueSalary) | evaluateClass">{{Number(body.trueSalary) | evaluateText(1)}}</span>
                    <span style="right:40px" class="circlemark" :class="Number(money) | moneyClass">{{Number(money) | moneyText(1)}}</span>
                    <div class="fixedTrangle"><span href="javascript:" class="fixedtips"></span>
                        <div class="fixedtipscon pt10 pb10" style="z-index:100;top:2px;max-heigth:170px"> <i></i>
                            <div>
                                <div style="border-bottom:1px dotted">
                                    <p class="cGreen">高收</p>
                                    <p class="cLightGreen">中收</p>
                                    <p class="cOrange">低收</p>
                                    <p class="cRed">无收</p>
                                </div>
                                <div>
                                    <p class="cGreen">高收</p>
                                    <p class="cOrange">中收</p>
                                    <p class="cRed">低收</p>
                                    <p class="cRed">无收</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <router-link tag="div" :to="{name:'salaryBasesalary1',params:{body:body}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
            </router-link>
            <router-link tag="div" :to="{name:'salaryResult1',params:{stayStayResult:body.stayStayResult}}" class="analyItem anItemBor" active-class="anItemBor-active">
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

            <router-link tag="div" :to="{name:'salaryManagement1',params:{stayStayManagement:body.stayStayManagement}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
            <router-link tag="div" :to="{name:'salaryProcess1',params:{order:order,orderDetail:orderDetail,orderCount:orderCount,orderMoney:body.orderMoney}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
            <router-link tag="div" :to="routerPath('salaryRewardandpunishment1')" class="analyItem anItemBor" active-class="anItemBor-active">
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
            </router-link>
            <div class="analyItem ">
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
            </div>
            <!-- <router-link tag="div" :to="{path:routerPath('superServerThree'),query: {data:serverNameList}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">增值</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">总金额</span><span>{{allmoney}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">实际金额</span><span>{{allactualMoney}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">项目个数</span><span>{{allnumber}}</span></p>
                </div>
            </router-link> -->
            <router-link tag="div" :to="routerPath('salaryHistory1')" class="analyItem anItemBor" active-class="anItemBor-active">
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
            </router-link>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('salaryComprehensive1')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">预计收入</span><span class="pr8 cGreen">{{body.trueSalary}} 元</span></p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getStayStaySalaryDetail, getValueAddServicesBySupervisionCard, getStayStayResultDetail } from '../Resources/Api'
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
            workerDetails: {},
            serverNameList: [], // 二段增值名称
            serverAllData: [], // 所有数据

            // 竣工金额
            money: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate', 'userInfo']),
        allmoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.allmoney)
            })
            return number.toFixed(2)
        },
        allactualMoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.actualMoney)
            })
            return number.toFixed(2)
        },
        allnumber () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.number)
            })
            return allnumber
        },
        // 综合中的合计金额
        planMoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.allmoney)
            })
            const number1 = this.body.hasOwnProperty('trueSalary') && this.body.trueSalary ? Number(this.body.trueSalary) : 0
            return (number + number1).toFixed(2)
        }
    },
    created () {
        this.GetUserTradeDetailByUserCardFn()
        this.getValueAddServicesBySupervisionCard()
        this.stayCompleteDataFn()
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
        // 获取增值服务
        getValueAddServicesBySupervisionCard () {
            let parms = {
                supervisionCard: this.leftInfo.cardNo
            }
            getValueAddServicesBySupervisionCard(parms).then(results => {
                if (results.data.StatusCode === 1) {
                    this.serverNameList = []
                    this.serverAllData = results.data.Body.valueAddServicesList
                    this.serverAllData.forEach(element => {
                        if (element.length > 0) {
                            let serverObject = {}
                            let allmoney = 0
                            let actualMoney = 0
                            let number = 0
                            // this.serverNameList.push(element[0].name)
                            element.forEach(item => {
                                if (item.proname !== null) {
                                    allmoney += Number(item.money)
                                    actualMoney += Number(item.actualMoney)
                                    number += 1
                                } else {
                                    allmoney += 0
                                    actualMoney += 0
                                    number += 0
                                }
                            })
                            serverObject.name = element[0].name
                            serverObject.allmoney = allmoney
                            serverObject.actualMoney = actualMoney
                            serverObject.number = number
                            serverObject.currentObject = element
                            this.serverNameList.push(serverObject)
                        }
                    })
                }
            }).catch((error) => {
                console.log(error)
            })
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
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询本月留竣工提成数据
        stayCompleteDataFn () {
            getStayStayResultDetail({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                const completionList = results.data.Body
                this.money = 0
                for (var i = 0; i < completionList.length; i++) {
                    this.money += completionList[i].completion_money
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    filters: {
        evaluateClass (str) {
            if (Number(str) >= 15000) {
                return 'circlemark-green'
            } else if (Number(str) >= 8000 && Number(str) < 15000) {
                return 'circlemark-lightGreen'
            } else if (Number(str) >= 4000 && Number(str) < 8000) {
                return 'circlemark-yellow'
            } else if (Number(str) < 4000) {
                return 'circlemark-lightRed'
            }
        },
        evaluateText (str, flag) {
            if (Number(str) >= 15000) {
                if (flag === 1) {
                    return '高'
                } else if (flag === 2) {
                    return '高收'
                }
            } else if (Number(str) >= 8000 && Number(str) < 15000) {
                if (flag === 1) {
                    return '中'
                } else if (flag === 2) {
                    return '中收'
                }
            } else if (Number(str) >= 4000 && Number(str) < 8000) {
                if (flag === 1) {
                    return '低'
                } else if (flag === 2) {
                    return '低收'
                }
            } else if (Number(str) < 4000) {
                if (flag === 1) {
                    return '无'
                } else if (flag === 2) {
                    return '无收'
                }
            }
        },
        moneyClass (str) {
            let num = Number(str) / 10000
            if (num >= 100) {
                return 'circlemark-green'
            } else if (num >= 60 && num < 100) {
                return 'circlemark-lightGreen'
            } else if (num > 0 && num < 60) {
                return 'circlemark-yellow'
            } else if (num <= 0) {
                return 'circlemark-lightRed'
            }
        },
        moneyText (str, flag) {
            let num = Number(str) / 10000
            if (num >= 100) {
                if (flag === 1) {
                    return '高'
                } else if (flag === 2) {
                    return '高产'
                }
            } else if (num >= 60 && num < 100) {
                if (flag === 1) {
                    return '中'
                } else if (flag === 2) {
                    return '中产'
                }
            } else if (num > 0 && num < 60) {
                if (flag === 1) {
                    return '低'
                } else if (flag === 2) {
                    return '低产'
                }
            } else if (num <= 0) {
                if (flag === 1) {
                    return '无'
                } else if (flag === 2) {
                    return '无产'
                }
            }
        }
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
            this.getValueAddServicesBySupervisionCard()
        },
        updatePlate () {
            this.GetUserTradeDetailByUserCardFn()
            this.getValueAddServicesBySupervisionCard()
        }

    }
}
</script>
