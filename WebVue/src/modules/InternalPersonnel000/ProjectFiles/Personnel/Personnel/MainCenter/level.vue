<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <div class='lh28'>
                        <span class="cBlue pointer" @click="flagIndex = 1">{{leftInfo.abilityLevel > 12 ? 12 : leftInfo.abilityLevel}}级 </span> 升
                        <span style="color:#e033ff" class="pointer" @click="flagIndex = 2">{{nextLevel > 12 ? 12 : nextLevel}}级</span>
                    </div>
                    <div class='lh28'>
                        <span class=" pr8">底薪</span>
                        <span class="cLightGray">{{flagIndex === 1 ? levelDate === null  ? '--' : levelDate.baseSalary : nextLevelDate === null  ? '--' : nextLevelDate.baseSalary}}</span>
                    </div>
                    <div class='lh28'>
                        <span class="fl pr8">标准</span>
                        <div class="col-md-3">
                            <span class="cLightGray pr8">有效竣工额</span>
                            <p class="cGreen">{{flagIndex === 1 ? levelDate === null  ? 0: levelDate.achieve_standard : nextLevelDate === null  ? '--' : nextLevelDate.achieve_standard}}万</p>
                        </div>
                        <div class="col-md-2">
                            <span class="cLightGray pr8">罚款</span>
                            <p class="cGreen">{{ flagIndex === 1 ? levelDate === null  ? 0: levelDate.fine_money_standard : nextLevelDate === null  ? 0: nextLevelDate.fine_money_standard}}元</p>
                        </div>
                        <div class="col-md-2">
                            <span class="cLightGray pr8"> 增项</span>
                            <p class="cGreen">{{ flagIndex === 1 ? levelDate === null  ? 0: levelDate.increment_money_standard : nextLevelDate === null  ? 0: nextLevelDate.increment_money_standard}}元</p>
                        </div>
                        <div class="col-md-2">
                            <span class="cLightGray pr8">增值服务</span>
                            <p class="cGreen">--万</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="87">
            <router-link tag="div" :to="{path: routerPath('levelThree'), query: {index:1,stangMoney:userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null ? 0: userMoneyData.resultMonthStandard.achieve_standard}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">完工</p>
                <div class="analyItemCon">
                    <p class="col-md-5">
                        <span class="cLightGray pr8">标准</span>
                        <span>{{userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null ? 0: userMoneyData.resultMonthStandard.achieve_standard}}万</span>
                    </p>
                    <p class="col-md-5">
                        <span class="cLightGray pr8">实际</span>
                        <span>{{userMoneyData === null || userMoneyData.resultResultComple == null  || userMoneyData.resultResultComple.resultCompletionMoney === null ? 0 : userMoneyData.resultResultComple.resultCompletionMoney/10000}}万</span>
                    </p>
                    <p class="col-md-2">
                        <span class="cGreen tx-fb">{{(Number(userMoneyData === null || userMoneyData.resultResultComple == null  || userMoneyData.resultResultComple.resultCompletionMoney === null ? 0 : userMoneyData.resultResultComple.resultCompletionMoney)
                            /Number(userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null ? 0: userMoneyData.resultMonthStandard.achieve_standard)/100).toFixed(2)

                            }}%</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="{path: routerPath('levelThree'), query: {index: 2}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">订单</p>
                <div class="analyItemCon">
                    <p class="col-md-5">
                        <span class="cLightGray pr8">标准</span>
                        <span>{{userMoneyData === null || userMoneyData.resultMonthStandard == null  || userMoneyData.resultMonthStandard.orderCompletionRateMonth === null ? 0 : userMoneyData.resultMonthStandard.orderCompletionRateMonth}}%</span>
                    </p>
                    <p class="col-md-5">
                        <span class="cLightGray pr8">实际</span>
                        <span>{{orderScale}}%</span>
                        <!-- <span>{{Number(processCount/processSum/100)}}%</span> -->
                    </p>
                    <p class="col-md-2">
                        <span class="cGreen tx-fb">{{orderScale}}%</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="{path: routerPath('levelThree'), query: {index: 3, comEvl: userMoneyData === null || userMoneyData.haoPingSum == null ? 0 : userMoneyData.haoPingSum, stand:userMoneyData === null || userMoneyData.resultMonthStandard == null  || userMoneyData.resultMonthStandard.inspection_bonus === null ? 0 : userMoneyData.resultMonthStandard.inspection_bonus }}" exact class="analyItem anItemBor" active-class="anItemBor-active">
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
            </router-link>
        </div>
        <div class="pr10">
            <div class="analyItem anItemBor">
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
import { UseResultgetUseResultMonthReview } from '../Resources/Api'
export default {
    data () {
        return {
            nextLevelDate: null, // 下一级的状态的数据
            levelDate: null, // 用于存状态中的数据
            nextLevel: 0, // 级别
            flagIndex: 1,
            userMoneyData: {}, // 阶段数据
            comScale: 0, // 完工比例
            orderScale: 0, // 订单比例
            evalScale: 0 // 好评比例
        }
    },
    created () {
        this.nextLevel = this.leftInfo.abilityLevel !== '' && this.leftInfo.abilityLevel >= 0 ? Number(this.leftInfo.abilityLevel) + 1 : ''
        if (this.nextLevel === 13) {
            this.UseResultgetUseResultMonthReview(12, 1)
            this.UseResultgetUseResultMonthReview(12, 2)
        } else {
            this.UseResultgetUseResultMonthReview(this.leftInfo.abilityLevel, 1)
            this.UseResultgetUseResultMonthReview(this.nextLevel, 2)
        }
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
        UseResultgetUseResultMonthReview (level, flag) {
            let parm = {
                user_card_no: this.leftInfo.cardNo,
                abilityLevel: level
            }
            UseResultgetUseResultMonthReview(parm).then((results) => {
                if (results.data.StatusCode === 0) {
                    const userMoneyData = results.data.Body
                    // this.resultMonthStandard = results.data.Body.resultMonthStandard
                    // this.resultManageStandard = results.data.Body.resultManageStandard
                    // this.resultResultComple = results.data.Body.resultResultComple
                    // this.processCount = results.data.Body.processCount
                    // this.processSum = results.data.Body.processSum
                    // this.haoPingSum = results.data.Body.haoPingSum
                    // this.resultResultManage = results.data.Body.resultResultManage
                    // this.baseSalary = results.data.Body.baseSalary
                    // this.complete_standard_month = this.resultMonthStandard.complete_standard_month
                    // this.achieve_standard = this.resultMonthStandard.achieve_standard
                    // this.inspection_bonus = this.resultMonthStandard.inspection_bonus
                    // if (this.resultResultComple != null) {
                    //     this.resultCompletionMoney = this.resultResultComple.resultCompletionMoney
                    // }
                    // 将数据存到levelDate 中
                    let currentObject = {}
                    // 底薪
                    if (userMoneyData === null || userMoneyData.baseSalary === null) {
                        currentObject.baseSalary = '--'
                    } else {
                        currentObject.baseSalary = userMoneyData.baseSalary
                    }
                    // 有效竣工额
                    if (userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null) {
                        currentObject.achieve_standard = 0
                    } else {
                        currentObject.achieve_standard = userMoneyData.resultMonthStandard.achieve_standard
                    }
                    // 罚款
                    if (userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.fine_money_standard === null) {
                        currentObject.fine_money_standard = 0
                    } else {
                        currentObject.fine_money_standard = userMoneyData.resultMonthStandard.fine_money_standard
                    }
                    // 增值
                    if (userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.increment_money_standard === null) {
                        currentObject.increment_money_standard = 0
                    } else {
                        currentObject.increment_money_standard = userMoneyData.resultMonthStandard.increment_money_standard
                    }
                    if (Number(flag) === 1) {
                        this.userMoneyData = results.data.Body
                        this.levelDate = currentObject
                    } else if (Number(flag) === 2) {
                        this.nextLevelDate = currentObject
                    }
                    if (Number(flag) === 1) {
                    // 完工比例
                        if (userMoneyData !== null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.achieve_standard === null ||
            userMoneyData.resultResultComple == null || userMoneyData.resultResultComple.resultCompletionMoney === null || userMoneyData.resultResultComple.resultCompletionMoney === 0) {
                            this.comScale = 0
                        } else {
                            if (userMoneyData.resultMonthStandard.achieve_standard === 0) {
                                this.comScale = (userMoneyData.resultResultComple.resultCompletionMoney / 100).toFixed(2)
                            } else {
                                this.comScale = (userMoneyData.resultResultComple.resultCompletionMoney / userMoneyData.resultMonthStandard.achieve_standard / 100).toFixed(2)
                            }
                        }
                        // 订单比例
                        if (userMoneyData !== null || userMoneyData.processCount == null || userMoneyData.processSum === null || userMoneyData.processCount === 0) {
                            this.orderScale = 0
                        } else {
                            if (userMoneyData.processSum === 0) {
                                this.orderScale = (userMoneyData.processCount / 100).toFixed(2)
                            } else {
                                this.orderScale = (userMoneyData.processCount / userMoneyData.processSum / 100).toFixed(2)
                            }
                        }
                        // 好评比例
                        if (userMoneyData === null || userMoneyData.resultMonthStandard == null || userMoneyData.resultMonthStandard.inspection_bonus === null || userMoneyData.haoPingSum === 0) {
                            this.orderScale = 0
                        } else {
                            if (userMoneyData.resultMonthStandard.inspection_bonus === 0) {
                                this.orderScale = (userMoneyData.haoPingSum / 100).toFixed(2)
                            } else {
                                this.orderScale = (userMoneyData.haoPingSum / userMoneyData.resultMonthStandard.inspection_bonus / 100).toFixed(2)
                            }
                        }
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.nextLevelDate = null // 下一级的状态的数据
            this.levelDate = null // 用于存状态中的数据
            this.flagIndex = 1
            this.nextLevel = this.leftInfo.abilityLevel !== '' && this.leftInfo.abilityLevel >= 0 ? Number(this.leftInfo.abilityLevel) + 1 : ''
            this.UseResultgetUseResultMonthReview(this.leftInfo.abilityLevel, 1)
            this.UseResultgetUseResultMonthReview(this.nextLevel, 2)
        }
    }
}
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
