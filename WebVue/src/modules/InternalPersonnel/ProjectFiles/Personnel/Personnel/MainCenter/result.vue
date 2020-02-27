<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目总数</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">绩效总金额</span>
                        <span>{{(negotiate_profit+fine_money+completion_money).toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">总提成</span>
                        <span>{{(comprehensive_negotiate+comprehensive_fine+comprehensive_completion).toFixed(2)}}</span>
                    </p>
                    <span class="circlemark circlemark-green" v-if="(junQuanzhong)>=100">优</span>
                    <span class="circlemark circlemark-lightGreen" v-else-if="(junQuanzhong)>=75">良</span>
                    <span class="circlemark circlemark-yellow" v-else-if="(junQuanzhong)>=50">中</span>
                    <span class="circlemark circlemark-lightRed" v-else>差</span>
                    <div class="fixedTrangle"><a href="javascript:" class="fixedtips"></a>
                        <div class="fixedtipscon pt10 pb10" style="display: none;"><i></i>
                            <p>优:实际>={{jungongStandard.greatMore}}万</p>
                            <p>良:{{jungongStandard.goodMore}}万&lt;=实际&lt;{{jungongStandard.greatMore}}万</p>
                            <p>中:{{jungongStandard.averageMore}}万&lt;=实际&lt;{{jungongStandard.goodMore}}万</p>
                            <p>差:{{jungongStandard.badMore}}万&lt;=实际&lt;{{jungongStandard.averageMore}}万</p>
                            <p>待:未进行标准设置或暂无数据</p>
                        </div>
                    </div> <!-- <span class="circlemark" :class="junStateObject.hasOwnProperty('stageNum') && junStateObject.stageNum !== null ? junStateObject.stageNum : 0 | stageColor">{{junStateObject.hasOwnProperty('stageName')  && junStateObject.stageName !== null ? junStateObject.stageName : ''  }}</span> -->
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <router-link tag="div" :to="{name:'resultCompletion1',params:{completionList:completionList}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
                    <span class="circlemark" :class="junStateObject.hasOwnProperty('stageName') && junStateObject.stageNum !== null ? junStateObject.stageNum : 0 | stageColor">{{junStateObject.hasOwnProperty('stageName') && junStateObject.stageName !== null ? junStateObject.stageName : '' }}</span>
                    <div class="fixedTrangle"><span href="javascript:" class="fixedtips"></span>
                        <div class="fixedtipscon pt10 pb10" style="display: none;"><i></i>
                            <p>优:实际>={{jungongStandard.greatMore}}万</p>
                            <p>良:{{jungongStandard.goodMore}}万&lt;=实际&lt;{{jungongStandard.greatMore}}万</p>
                            <p>中:{{jungongStandard.averageMore}}万&lt;=实际&lt;{{jungongStandard.goodMore}}万</p>
                            <p>差:{{jungongStandard.badMore}}万&lt;=实际&lt;{{jungongStandard.averageMore}}万</p>
                            <p>待:未进行标准设置或暂无数据</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'resultFine1',params:{completionList:completionList}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
                    <!-- <span class="circlemark" :class="fineStateObjdect.hasOwnProperty('stageName') && fineStateObjdect.stageNum !== null ? fineStateObjdect.stageNum : 0 | stageColor">{{fineStateObjdect.hasOwnProperty('stageName') && fineStateObjdect.stageName !== null ? fineStateObjdect.stageName : ''  }}</span> -->
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'resultNegotiation1',params:{completionList:completionList}}" class="analyItem anItemBor" active-class="anItemBor-active">
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
                    <!-- <span class="circlemark" :class="qiaStateObjdect.hasOwnProperty('stageName') && qiaStateObjdect.stageNum !== null ? qiaStateObjdect.stageNum : 0 | stageColor">{{qiaStateObjdect.hasOwnProperty('stageName') && qiaStateObjdect.stageName !== null ? qiaStateObjdect.stageName : ''  }}</span> -->
                </div>
            </router-link>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">综合</p>
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
import { getStayStayResultDetail, getStayStayResultEvaluation, getExcellentGoodModeratePoor } from '../Resources/Api'
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
            jungongStandard: {},
            // 洽商金额
            negotiate_profit: 0,
            // 洽商提成
            comprehensive_negotiate: 0,
            tradeDetail: {},
            stayCompleteState: 5,
            stayCarryState: 5,
            stayDiscussState: 5,
            junStateObject: {}, // 竣工的状态按钮显示
            fineStateObjdect: {}, // 罚款的状态按钮显示
            qiaStateObjdect: {}, // 洽商的状态按钮显示
            junQuanzhong: 0, // 竣工的权重
            fineQuanzhong: {}, // 罚款的权重
            qiaQuanzhong: {} // 洽商的权重
        }
    },
    created () {
        this.stayCompleteDataFn()

        this.GetUserTradeDetailByUserCardFn()
        // 竣工的按钮

        this.getExcellentGoodModeratePoor()
    // // 罚款的按钮
    // const fineMoney = Number(this.fine_money) / 10000
    // this.getExcellentGoodModeratePoor(fineMoney, 2)
    // // 洽商的按钮
    // const qiaMoney = Number(this.negotiate_profit) / 10000
    // this.getExcellentGoodModeratePoor(qiaMoney, 3)
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
        // 获取状态中的按钮
        getExcellentGoodModeratePoor () {
            getExcellentGoodModeratePoor({
                user_card_no: this.leftInfo.cardNo,
                standard: this.completion_money,
                abilityLevel: this.leftInfo.abilityLevel,
                abilityType: 5
            }).then(results => {
                if (results.data.StatusCode === 0) {
                    this.jungongStandard = results.data.Body
                    this.junStateObject.stageName = results.data.Body.standardName
                    this.junStateObject.stageNum = results.data.Body.userGoodBad
                    this.junQuanzhong = results.data.Body.quanzhong
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
        },
        stageColor (str) {
            switch (Number(str)) {
            case 1:
                return 'circlemark-green'
            case 2:
                return 'circlemark-lightGreen'
            case 3:
                return 'circlemark-yellow'
            case 4:
                return 'circlemark-lightRed'
            case 5:
                return 'circlemark-purple'
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
            // 竣工的按钮

            this.getExcellentGoodModeratePoor()
            // // 罚款的按钮
            // const fineMoney = Number(this.fine_money) / 10000
            // this.getExcellentGoodModeratePoor(fineMoney, 2)
            // // 洽商的按钮
            // const qiaMoney = Number(this.negotiate_profit) / 10000
            // this.getExcellentGoodModeratePoor(qiaMoney, 3)
        }
    }
}
</script>
