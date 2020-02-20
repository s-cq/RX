<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-8"><span class="cLightGray pr8">标准</span><span></span></p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="87">
            <router-link tag="div"
            :to="{path: routerPath('completionProject'),
            query: {stand: userMoneyData !== null && userMoneyData.resultMonthStandard !== null && userMoneyData.resultMonthStandard.complete_standard_month !== null ? userMoneyData.resultMonthStandard.complete_standard_month  : null,
            complete: userMoneyData !== null && userMoneyData.resultResultComple !== null && userMoneyData.resultResultComple.resultCompletionMoney !== null ? userMoneyData.resultResultComple.resultCompletionMoney : null,
            flag: userMoneyData !== null && userMoneyData.monthReviewRecording !== null  && userMoneyData.monthReviewRecording.monthReviewRecording.length > 0 ? 1 : 0}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">结果</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">标准</span><span>{{userMoneyData !== null && userMoneyData.resultMonthStandard !== null && userMoneyData.resultMonthStandard.complete_standard_month !== null ? userMoneyData.resultMonthStandard.complete_standard_month.toFixed(2)  : '--'}}万</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">完成</span><span class="cGreen">{{userMoneyData !== null && userMoneyData.resultResultComple !== null && userMoneyData.resultResultComple.resultCompletionMoney !== null ? (userMoneyData.resultResultComple.resultCompletionMoney / 10000).toFixed(2) : '--'}}</span>万</p>
                    <p class="col-md-4"><span class="cLightGray pr8">差额</span><span class="cRed">{{Difference}}</span>万</p>
                    <p class="fl"><span class="circlemark circlemark-red">未</span></p>
                </div>
            </router-link>
        </div>
        <router-link tag="div" :to="routerPath('resultProcessing')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">标准</span><span>{{userMoneyData !== null && userMoneyData.resultMonthStandard !== null && userMoneyData.resultMonthStandard.complete_standard_month !== null ? userMoneyData.resultMonthStandard.complete_standard_month.toFixed(2)  : '--'}}万</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">完成</span><span class="cGreen">{{userMoneyData !== null && userMoneyData.resultResultComple !== null && userMoneyData.resultResultComple.resultCompletionMoney !== null ? (userMoneyData.resultResultComple.resultCompletionMoney / 10000).toFixed(2)  : '--'}}</span>万</p>
                <p class="col-md-4"><span class="cLightGray pr8">差额</span><span class="cRed">{{Difference}}</span>万</p>
                <p class="fl"><span class="circlemark circlemark-red">未</span></p>
            </div>
        </router-link>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { UseResultgetUseResultMonthReview } from '../Resources/Api/index'
export default {
    data () {
        return {
            userMoneyData: null // 用户数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        Difference () {
            let number = 0
            const standMoney = this.userMoneyData !== null && this.userMoneyData.resultMonthStandard !== null && this.userMoneyData.resultMonthStandard.complete_standard_month ? this.userMoneyData.resultMonthStandard.complete_standard_month : 0
            const completionMoney = this.userMoneyData !== null && this.userMoneyData.resultResultComple && this.userMoneyData.resultResultComple.resultCompletionMoney ? this.userMoneyData.resultResultComple.resultCompletionMoney / 10000 : 0
            number = (Number(completionMoney) - Number(standMoney)).toFixed(2)
            return number
        }
    },
    created () {
        this.UseResultgetUseResultMonthReview()
    },
    methods: {
        // 获取数据
        UseResultgetUseResultMonthReview () {
            let parm = {
                user_card_no: this.leftInfo.cardNo
            }
            UseResultgetUseResultMonthReview(parm).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.userMoneyData = results.data.Body
                }
            }).catch((error) => {
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
            this.UseResultgetUseResultMonthReview()
        }
    }
}
</script>
