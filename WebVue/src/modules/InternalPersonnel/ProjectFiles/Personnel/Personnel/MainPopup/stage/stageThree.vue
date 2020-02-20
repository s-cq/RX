<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'级别详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">完工</p>
            <div class="analyItemCon">
                <p class="col-md-5">
                    <span class="cLightGray pr8">标准</span>
                    <span>{{userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null ? 0: userMoneyData.resultMonthStandard.achieve_standard}}万</span>
                </p>
                <p class="col-md-5">
                    <span class="cLightGray pr8">实际</span>
                    <span>{{userMoneyData === null || userMoneyData.resultResultComple == null  || userMoneyData.resultResultComple.resultCompletionMoney === null ? 0 : userMoneyData.resultResultComple.resultCompletionMoney / 10000}}万</span>
                </p>
                <p class="col-md-2">
                    <span class="cGreen tx-fb">{{(Number(userMoneyData === null || userMoneyData.resultResultComple == null  || userMoneyData.resultResultComple.resultCompletionMoney === null ? 0 : userMoneyData.resultResultComple.resultCompletionMoney)
                        /Number(userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null ? 0: userMoneyData.resultMonthStandard.achieve_standard)/100).toFixed(2)

                        }}%</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
           <p class="analyItemTit tx-center">订单</p>
            <div class="analyItemCon">
                <p class="col-md-5">
                    <span class="cLightGray pr8">标准</span>
                    <span>{{userMoneyData === null || userMoneyData.resultMonthStandard == null  || userMoneyData.resultMonthStandard.orderCompletionRateMonth === null ? 0 : userMoneyData.resultMonthStandard.orderCompletionRateMonth}}%</span>
                </p>
                <p class="col-md-5">
                    <span class="cLightGray pr8">实际</span>
                    <span>{{orderScale}}%</span>
                </p>
                <p class="col-md-2">
                    <span class="cGreen tx-fb">{{orderScale}}%</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">好评</p>
            <div class="analyItemCon">
                <p class="col-md-5">
                    <span class="cLightGray pr8">标准</span>
                    <span>{{userMoneyData === null || userMoneyData.resultMonthStandard == null  || userMoneyData.resultMonthStandard.inspection_bonus === null ? 0 : userMoneyData.resultMonthStandard.inspection_bonus}}个</span>
                </p>
                <p class="col-md-5">
                    <span class="cLightGray pr8">实际</span>
                    <span>{{userMoneyData === null || userMoneyData.haoPingSum == null ? 0 : userMoneyData.haoPingSum}}个</span>
                </p>
                <p class="col-md-2">
                    <span class="cGreen tx-fb">{{orderScale}}%</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-8">
                    <span v-if="comScale === 100 && orderScale === 100 && evalScale === 100" class="cGreen">{{this.leftInfo.abilityLevel}}级升到{{this.nextLevel}}级 已符合升级标准</span>
                    <span class="cRed" v-else>尚未满足升级条件</span>
                </p>
                <p class="col-md-2">
                    <span v-if="comScale === 100 && orderScale === 100 && evalScale === 100" class="cGreen tx-fb">100%</span>
                    <span class="cRed tx-fb" v-else>--</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { UseResultgetUseResultMonthReview } from '../../Resources/Api'
export default {
    data () {
        return {
            nextLevel: 0, // 级别
            userMoneyData: {}, // 阶段数据
            comScale: 0, // 完工比例
            orderScale: 0, // 订单比例
            evalScale: 0 // 好评比例
        }
    },
    created () {
        this.nextLevel = this.$route.query.level !== '' && this.$route.query.level >= 0 ? Number(this.$route.query.level) + 1 : ''
        this.UseResultgetUseResultMonthReview(this.$route.query.level)
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
        // 获取
        UseResultgetUseResultMonthReview (level) {
            this.userMoneyData = {}
            let parm = {
                user_card_no: this.leftInfo.cardNo,
                abilityLevel: level
            }
            UseResultgetUseResultMonthReview(parm).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.userMoneyData = results.data.Body
                    // 完工比例
                    if (this.userMoneyData !== null || this.userMoneyData.resultMonthStandard == null || this.userMoneyData.resultMonthStandard.achieve_standard === null ||
            this.userMoneyData.resultResultComple == null || this.userMoneyData.resultResultComple.resultCompletionMoney === null || this.userMoneyData.resultResultComple.resultCompletionMoney === 0) {
                        this.comScale = 0
                    } else {
                        if (this.userMoneyData.resultMonthStandard.achieve_standard === 0) {
                            this.comScale = (this.userMoneyData.resultResultComple.resultCompletionMoney / 100).toFixed(2)
                        } else {
                            this.comScale = (this.userMoneyData.resultResultComple.resultCompletionMoney / this.userMoneyData.resultMonthStandard.achieve_standard / 100).toFixed(2)
                        }
                    }
                    // 订单比例
                    if (this.userMoneyData !== null || this.userMoneyData.processCount == null || this.userMoneyData.processSum === null || this.userMoneyData.processCount === 0) {
                        this.orderScale = 0
                    } else {
                        if (this.userMoneyData.processSum === 0) {
                            this.orderScale = (this.userMoneyData.processCount / 100).toFixed(2)
                        } else {
                            this.orderScale = (this.userMoneyData.processCount / this.userMoneyData.processSum / 100).toFixed(2)
                        }
                    }
                    // 好评比例
                    if (this.userMoneyData === null || this.userMoneyData.resultMonthStandard == null || this.userMoneyData.resultMonthStandard.inspection_bonus === null || this.userMoneyData.haoPingSum === 0) {
                        this.orderScale = 0
                    } else {
                        if (this.userMoneyData.resultMonthStandard.inspection_bonus === 0) {
                            this.orderScale = (this.userMoneyData.haoPingSum / 100).toFixed(2)
                        } else {
                            this.orderScale = (this.userMoneyData.haoPingSum / this.userMoneyData.resultMonthStandard.inspection_bonus / 100).toFixed(2)
                        }
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        $route () {
            this.comScale = 0 // 完工比例
            this.orderScale = 0 // 订单比例
            this.evalScale = 0 // 好评比例
            this.nextLevel = this.$route.query.level !== '' && this.$route.query.level >= 0 ? Number(this.$route.query.level) + 1 : ''
            this.UseResultgetUseResultMonthReview(this.$route.query.level)
        }
    }
}
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
