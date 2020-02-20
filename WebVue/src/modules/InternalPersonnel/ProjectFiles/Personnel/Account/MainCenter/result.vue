<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">绩效总金额</span>
                        <span>{{Number(completion_money+fine_money+negotiate_profit).toFixed(2)}}</span>
                    </p>
                    <span class="circlemark" :class="stayCompleteState | evaluateColor">{{stayCompleteState | evaluate}}</span>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <router-link tag="div" :to="{name:'resultCompletion5',params:{completionList:completionList}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">项目</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">绩效</span>
                        <span>{{completion_money.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">提成</span>
                        <span>{{comprehensive_completion.toFixed(2)}}</span>
                    </p>
                    <span class="circlemark" :class="stayCompleteState | evaluateColor">{{stayCompleteState | evaluate}}</span>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'resultFine5',params:{completionList:completionList}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">罚款</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">项目</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">金额</span>
                        <span>{{fine_money.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">提成</span>
                        <span>{{comprehensive_fine.toFixed(2)}}</span>
                    </p>
                    <span class="circlemark" :class="stayCarryState | evaluateColor">{{stayCarryState | evaluate}}</span>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'resultNegotiation5',params:{completionList:completionList}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">洽商</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">项目</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">利润</span>
                        <span>{{negotiate_profit.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">提成</span>
                        <span>{{comprehensive_negotiate.toFixed(2)}}</span>
                    </p>
                    <span class="circlemark" :class="stayDiscussState | evaluateColor">{{stayDiscussState | evaluate}}</span>
                </div>
            </router-link>
            <div class="analyItem ">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">项目总数</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">绩效总金额</span>
                        <span>{{(negotiate_profit+fine_money+completion_money).toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">总提成</span>
                        <span>{{(comprehensive_negotiate+comprehensive_fine+comprehensive_completion).toFixed(2)}}</span>
                    </p>
                    <!-- <span class="circlemark" :class="tradeDetail.stayDiscussState | evaluateColor">{{tradeDetail.stayDiscussState | evaluate}}</span> -->
                </div>
            </div>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">竣工</span>
                        <span class="cGreen">{{comprehensive_completion.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">罚款</span>
                        <span class="cGreen">{{comprehensive_fine.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">洽商</span>
                        <span class="cGreen">{{comprehensive_negotiate.toFixed(2)}}</span>
                    </p>
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
    getStayStayResultDetail,
    getStayStayResultEvaluation
} from '../Resources/Api'
export default {
    data () {
        return {
            completionList: {},
            // 项目总数
            projectSum: 0,
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
            tradeDetail: {},
            stayCompleteState: 5,
            stayCarryState: 5,
            stayDiscussState: 5
        }
    },
    created () {
        this.stayCompleteDataFn()
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
        // 查询本月留竣工提成数据
        stayCompleteDataFn () {
            getStayStayResultDetail({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                this.completionList = results.data.Body
                this.completion_money = 0
                this.projectSum = 0
                this.completion_money = 0
                this.comprehensive_completion = 0
                this.fine_money = 0
                this.comprehensive_fine = 0
                this.negotiate_profit = 0
                this.comprehensive_negotiate = 0
                for (var i = 0; i < this.completionList.length; i++) {
                    this.projectSum++
                    this.completion_money += this.completionList[i].completion_money
                    this.comprehensive_completion += this.completionList[i].comprehensive_completion
                    this.fine_money += this.completionList[i].fine_money
                    this.negotiate_profit += this.completionList[i].negotiate_profit
                    this.comprehensive_fine += this.completionList[i].comprehensive_fine
                    this.comprehensive_negotiate += this.completionList[i].comprehensive_negotiate
                }
            }).catch(error => {
                console.log(error)
            })
        },
        GetUserTradeDetailByUserCardFn () {
            getStayStayResultEvaluation({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                this.tradeDetail = results.data.Body
                if (this.tradeDetail != null) {
                    this.stayCompleteState = this.tradeDetail.stayCompleteState
                    this.stayCarryState = this.tradeDetail.stayCarryState
                    this.stayDiscussState = this.tradeDetail.stayDiscussState
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    filters: {
        evaluate: function (str) {
            switch (Number(str)) {
            case 1:
                return '优'
            case 2:
                return '良'
            case 3:
                return '中'
            case 4:
                return '差'
            case 0:
                return '待'
            }
        },
        resultColor: function (str) {
            switch (str) {
            case '0':
                return 'cPurple'
            case '1':
                return 'cGreen'
            case '2':
                return 'cLightGreen'
            case '3':
                return 'cYellow'
            case '4':
                return 'cRed'
            default:
                return 'cRed'
            }
        },
        evaluateColor: function (str) {
            switch (Number(str)) {
            case 0:
                return 'circlemark-purple'
            case 1:
                return 'circlemark-green'
            case 2:
                return 'circlemark-lightGreen'
            case 3:
                return 'circlemark-yellow'
            case 4:
                return 'circlemark-lightRed'
            }
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.stayCompleteDataFn()
            this.GetUserTradeDetailByUserCardFn()
        }
    }
}
</script>
