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
            :to="{path: routerPath( stand === null ? '' : 'managementThree'),
            query: {stand:  stand, complete: complete,
            flag: userMoneyData !== null && userMoneyData.monthReviewRecording !== null  && userMoneyData.monthReviewRecording.monthReviewRecording.length > 0 ? 1 : 0}}" exact :class="['analyItem', stand === null ? '' : 'anItemBor']" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center">管理</p>
                    <div class="analyItemCon">
                        <p class="col-md-4"><span class="cLightGray pr8">标准</span><span>{{stand === null ? '--' : stand}}万</span></p>
                        <p class="col-md-4"><span class="cLightGray pr8">完成</span><span class="cGreen">{{complete === null ? '--' : complete}}</span>万</p>
                        <p class="col-md-4"><span class="cLightGray pr8">差额</span><span class="cRed">{{Difference}}</span>万</p>
                        <p class="fl"><span class="circlemark circlemark-red">未</span></p>
                    </div>
            </router-link>
        <!-- <router-link tag="div" :to="routerPath('managementNegotiation')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">洽商</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('managementCompletion')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('managementPreparation')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">准备</p>
            <div class="analyItemCon">

            </div>
        </router-link> -->
    </div>
    <router-link tag="div" :to="routerPath( stand === null ? '' : 'processing')" :class="['analyItem', stand === null ? '' : 'anItemBor']" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">处理</p>
        <div class="analyItemCon">
            <p class="col-md-4"><span class="cLightGray pr8">标准</span><span>{{stand === null ? '--' : stand}}万</span></p>
            <p class="col-md-4"><span class="cLightGray pr8">完成</span><span class="cGreen">{{complete === null ? '--' : complete}}</span>万</p>
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
            userMoneyData: null, // 用户数据
            stand: null, // 标准
            complete: null // 完成
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        Difference () {
            let number = ''
            const standMoney = this.userMoneyData !== null && this.userMoneyData.resultManageStandard !== null && this.userMoneyData.resultManageStandard.complete_standard_month ? this.userMoneyData.resultManageStandard.complete_standard_month : 0
            const completionMoney = this.userMoneyData !== null && this.userMoneyData.resultResultManage !== null && this.userMoneyData.resultResultManage.manageCompletionMoney ? this.userMoneyData.resultResultManage.manageCompletionMoney / 10000 : 0
            if (this.userMoneyData !== null && this.userMoneyData.resultManageStandard === null) {
                number = '--'
            } else {
                number = (Number(completionMoney) - Number(standMoney)).toFixed(2)
            }
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
                    if (this.userMoneyData !== null) {
                        if (this.userMoneyData.resultManageStandard === null) {
                            this.stand = null
                            this.complete = null
                        } else {
                            if (this.userMoneyData.resultManageStandard.complete_standard_month !== null) {
                                this.stand = this.userMoneyData.resultManageStandard.complete_standard_month
                            }
                            if (this.userMoneyData.resultResultManage !== null) {
                                if (this.userMoneyData.resultResultManage.manageCompletionMoney !== null) {
                                    this.complete = (this.userMoneyData.resultResultManage.manageCompletionMoney / 10000).toFixed(2)
                                }
                            }
                        }
                    }
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
