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
            <!-- <router-link tag="div" :to="routerPath('processWorker')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">工人录入</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">人数</span><span>--</span></p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">单价</span><span v-if="!iconShow">20</span>
                    <input type="text" class="width60" v-if="iconShow"/>
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="pointer ml20 imgIcon" v-if="iconShow" @click="iconShow=false"/>
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="pointer m5 imgIcon" v-if="iconShow" @click="iconShow=false"/>
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="pointer ml20 imgIcon" v-if="!iconShow" @click="iconShow=true"/>
                </p>
            </div>
        </router-link> -->
            <router-link tag="div" :to="{path: routerPath('processOrder'),
            query: {stand: userMoneyData !== null && userMoneyData.resultMonthStandard !== null && userMoneyData.resultMonthStandard.orderCompletionRateMonth !== null ? userMoneyData.resultMonthStandard.orderCompletionRateMonth  : null,
            processCount: userMoneyData !== null && userMoneyData.processCount !== null ?  userMoneyData.processCount : null,
            processSum:  userMoneyData !== null && userMoneyData.processSum !== null ?  userMoneyData.processSum : null,
            flag: userMoneyData !== null && userMoneyData.monthReviewRecording !== null  && userMoneyData.monthReviewRecording.monthReviewRecording.length > 0 ? 1 : 0}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">标准</span><span>{{userMoneyData !== null && userMoneyData.resultMonthStandard !== null && userMoneyData.resultMonthStandard.orderCompletionRateMonth !== null ? userMoneyData.resultMonthStandard.orderCompletionRateMonth.toFixed(2)  : '--'}}%</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">完成</span><span class="cGreen">{{rate}}%</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">差额</span><span class="cRed">{{Difference}}%</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">未</span></p>
                </div>
            </router-link>
            <!-- <router-link tag="div" :to="routerPath('processorderList?1')" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">安全订单</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单数量</span><span>4个</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">完成</span><span>0个</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('processorderList?2')" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">形象订单</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单数量</span><span>4个</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">完成</span><span>0个</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('processorderList?3')" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">环境订单</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单数量</span><span>4个</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">完成</span><span>0个</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('processorderList?4')" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">巡检订单</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单数量</span><span>4个</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">完成</span><span>0个</span></p>
                    <p class="fl"><span class="circlemark circlemark-red">差</span></p>
                </div>
            </router-link> -->
        </div>
        <router-link tag="div" :to="routerPath('processProcessing')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">标准</span><span>{{userMoneyData !== null && userMoneyData.resultMonthStandard !== null && userMoneyData.resultMonthStandard.orderCompletionRateMonth !== null ? userMoneyData.resultMonthStandard.orderCompletionRateMonth.toFixed(2)  : '--'}}%</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">完成</span><span class="cGreen">{{rate}}%</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">差额</span><span class="cRed">{{Difference}}%</span></p>
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
        // 完成率
        rate () {
            let number = 0
            const allOrder = this.userMoneyData !== null && this.userMoneyData.processSum !== null ? this.processSum : 0
            const completion = this.userMoneyData !== null && this.userMoneyData.processCount !== null ? this.userMoneyData.processCount : 0
            if (allOrder === 0 || completion === 0) {
                number = 0
            } else {
                number = (Number(completion) / Number(allOrder)).toFixed(2)
            }
            return number
        },
        // 差额率
        Difference () {
            let number = 0
            let complete = 0
            const standMoney = this.userMoneyData !== null && this.userMoneyData.resultMonthStandard !== null && this.userMoneyData.resultMonthStandard.orderCompletionRateMonth ? this.userMoneyData.resultMonthStandard.orderCompletionRateMonth : 0
            const allOrder = this.userMoneyData !== null && this.userMoneyData.processSum !== null ? this.processSum : 0
            const completion = this.userMoneyData !== null && this.userMoneyData.processCount !== null ? this.userMoneyData.processCount : 0
            if (allOrder === 0 || completion === 0) {
                complete = 0
            } else {
                complete = (Number(completion) / Number(allOrder)).toFixed(2)
            }
            number = complete - standMoney
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
