<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div class="analyItem">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目总数</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">绩效总金额</span>
                        <span>{{(negotiate_profit+fine_money+completion_money).toFixed(2)}}</span>
                    </p>
                     <span class="circlemark circlemark-green" v-if="(junQuanzhong+fineQuanzhong+qiaQuanzhong)>=100">优</span>
                    <span class="circlemark circlemark-lightGreen" v-if="(junQuanzhong+fineQuanzhong+qiaQuanzhong)>=75">良</span>
                    <span class="circlemark circlemark-yellow" v-if="(junQuanzhong+fineQuanzhong+qiaQuanzhong)>=50">中</span>
                    <span class="circlemark circlemark-lightRed" v-else>差</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">过程</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">管理</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">薪酬</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人事</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">留</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">标记</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">培训</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">成就</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('handerState')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { getStayStayResultDetail, getExcellentGoodModeratePoor } from '../Resources/Api'
export default {
    data () {
        return {
            // 项目总数
            projectSum: 0,
            // 洽商金额
            negotiate_profit: 0,
            // 罚款金额
            fine_money: 0,
            // 竣工金额
            completion_money: 0,
            junStateObject: {}, // 竣工的状态按钮显示
            fineStateObjdect: {}, // 罚款的状态按钮显示
            qiaStateObjdect: {}, // 洽商的状态按钮显示
            junQuanzhong: 0, // 竣工的权重
            fineQuanzhong: {}, // 罚款的权重
            qiaQuanzhong: {} // 洽商的权重
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        // 竣工的按钮
        const junMoney = (this.negotiate_profit + this.fine_money + this.completion_money) / 10000
        this.getExcellentGoodModeratePoor(junMoney, 1)
        // 罚款的按钮
        const fineMoney = Number(this.fine_money) / 10000
        this.getExcellentGoodModeratePoor(fineMoney, 2)
        // 洽商的按钮
        const qiaMoney = Number(this.negotiate_profit) / 10000
        this.getExcellentGoodModeratePoor(qiaMoney, 3)
    },
    methods: {
        // 获取状态中的按钮
        getExcellentGoodModeratePoor (money, flag) {
            let type = 0
            if (flag === 1) {
                type = 5
            } else if (flag === 2) {
                type = 9
            } else if (flag === 3) {
                type = 10
            }
            getExcellentGoodModeratePoor({
                user_card_no: this.leftInfo.cardNo,
                standard: money,
                abilityLevel: this.leftInfo.abilityLevel,
                abilityType: type
            }).then(results => {
                if (results.data.StatusCode === 0) {
                    if (flag === 1) {
                        this.junStateObject.stageName = results.data.Body.standardName
                        this.junStateObject.stageNum = results.data.Body.userGoodBad
                        this.junQuanzhong = results.data.Body.quanzhong
                    } else if (flag === 2) {
                        this.fineStateObjdect.stageName = results.data.Body.standardName
                        this.fineStateObjdect.stageNum = results.data.Body.userGoodBad
                        this.fineQuanzhong = results.data.Body.quanzhong
                    } else if (flag === 3) {
                        this.qiaStateObjdect.stageName = results.data.Body.standardName
                        this.qiaStateObjdect.stageNum = results.data.Body.userGoodBad
                        this.qiaQuanzhong = results.data.Body.quanzhong
                    }
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
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },
    watch: {
        leftInfo () {
            this.stayCompleteDataFn()
            // 竣工的按钮
            const junMoney = (this.negotiate_profit + this.fine_money + this.completion_money) / 10000
            this.getExcellentGoodModeratePoor(junMoney, 1)
            // 罚款的按钮
            const fineMoney = Number(this.fine_money) / 10000
            this.getExcellentGoodModeratePoor(fineMoney, 2)
            // 洽商的按钮
            const qiaMoney = Number(this.negotiate_profit) / 10000
            this.getExcellentGoodModeratePoor(qiaMoney, 3)
        }
    }
}

</script>
