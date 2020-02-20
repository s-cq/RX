<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <!-- <div class="analyItem">
            <p class="analyItemTit tx-center">安全</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">订单数量</span><span>4</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">已完成</span><span>0</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">超期</span><span>4</span></p>
            </div>
        </div> -->
    </div>
    <div class="layerRtb-footer">
        <!-- <div class="analyItem">
            <p class="analyItemTit tx-center">总计</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">订单数量</span><span>4</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">已完成</span><span>0</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">超期</span><span>4</span></p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p>
            </div>
        </div> -->
         <div class="analyItem">
            <p class="analyItemTit tx-center">月评</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="cLightGray pr8">时间</span><span>{{timeArea}}</span>
                </div>
                <div class="col-md-12 pt5">
                    <p class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{standValue === null ? '' : standValue.toFixed(2)}}%</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">实际</span><span class="cGreen">{{rate}}%</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">差额</span><span class="cRed">{{Difference}}%</span></p>
                </div>
                <div class="col-md-12">
                    <div class="clearfix pb10 pt5 col-md-6">
                        <span class="fl lh28 cLightGray pr8">奖罚</span>
                        <strong class="pr5 fl lh28 cGreen fz16">+</strong>
                        <div class="dis-il-block fl">
                            <div class="width80 uiText-selfAuto">
                                <input type="text" class="form-control noradius " v-model="prizeMoney">
                                <div class="uiText-commonIcon uiText-commonIcon-right">元</div>
                            </div>
                        </div>
                        <strong class="pr5 fl lh28  cRed fz16 ml10">-</strong>
                        <div class="dis-il-block fl">
                            <div class="width80 uiText-selfAuto">
                                <input type="text" class="form-control noradius cRed" v-model="penaltyMoney ">
                                <div class="uiText-commonIcon uiText-commonIcon-right">元</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 pt5">
                    <span class="fl lh28 cLightGray pr8">留言</span>
                    <textarea  class="col-md-9 mr10" placeholder="请输入留言" style="height:30px" v-model="textDesc"></textarea>
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitData()" v-if="isShowButton">
                </div>
                <!-- <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { saveMonthReview } from '../../Resources/Api/index'
export default {
    data () {
        return {
            textDesc: '', // 文字描述
            prizeMoney: '', // 奖金
            penaltyMoney: '', // 罚款
            timeArea: '', // 时间
            standValue: null, // 标准数据
            processCount: null, // 过程已完成单数
            processSum: null, // 过程已完成单数
            isShowButton: false // 是否月评
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        // 完成率
        rate () {
            let number = 0
            const allOrder = this.processCount !== null && this.processSum ? this.processSum : 0
            const completion = this.processCount !== null && this.processCount ? this.processCount : 0
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
            const standMoney = this.standValue !== null ? this.standValue : 0
            const allOrder = this.processCount !== null && this.processSum ? this.processSum : 0
            const completion = this.processCount !== null && this.processCount ? this.processCount : 0
            if (allOrder === 0 || completion === 0) {
                complete = 0
            } else {
                complete = Number(completion) / Number(allOrder)
            }
            number = (complete - standMoney).toFixed(2)
            return number
        }
    },
    created () {
        // 获取上月的天数
        const currentDate = new Date()
        const startTime = `${currentDate.getMonth()}-01`
        const endTime = `${currentDate.getMonth()}-${new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()}`
        this.timeArea = `${startTime} ~ ${endTime}`
        this.standValue = this.$route.query.stand
        this.processCount = this.$route.query.processCount
        this.processSum = this.$route.query.processSum
        // 是否月评
        this.isShowButton = !this.$route.query.flag
    },
    methods: {
        // 提交
        submitData () {
            let number = 0
            const allOrder = this.processCount !== null && this.processSum ? this.processSum : 0
            const completion = this.processCount !== null && this.processCount ? this.processCount : 0
            if (allOrder === 0 || completion === 0) {
                number = 0
            } else {
                number = Number(completion) / Number(allOrder)
            }
            if (this.prizeMoney === '' || this.penaltyMoney === '') {
                this.$message('请输入金额')
                return false
            } else {
                const money = (this.prizeMoney === '' ? 0 : Number(this.prizeMoney)) - (this.penaltyMoney === '' ? 0 : Number(this.penaltyMoney))
                const currentYear = new Date().getFullYear()
                const currentMonth = new Date().getMonth() + 1
                const evaluateWeek = Math.floor(new Date(currentYear, currentMonth, 0).getDate() / 7)
                let prams = {
                    evaluateType: 22,
                    evaluateResult: 3,
                    evaluateMoney: money,
                    evaluateIntegral: 0,
                    remarks: this.textDesc,
                    delFlag: 0,
                    evaluateYear: currentYear,
                    evaluateMonth: currentMonth,
                    evaluateWeek: evaluateWeek,
                    personId: this.leftInfo.cardNo,
                    operatorId: this.userInfo.as_cardNo,
                    evaluateFlag: 2,
                    actualCount: number,
                    actualNo: 0,
                    stanardCount: this.standValue !== null ? this.standValue : 0
                }
                saveMonthReview(prams).then((resules) => {
                    if (resules.data.StatusCode === 0) {
                        this.$message('提交成功')
                        this.textDesc = '' // 文字描述
                        this.prizeMoney = '' // 奖金
                        this.penaltyMoney = '' // 罚款
                        this.isShowButton = false
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    },
    watch: {
        $route () {
            this.standValue = this.$route.query.stand
            this.processCount = this.$route.query.processCount
            this.processSum = this.$route.query.processSum
            // 是否月评
            this.isShowButton = !this.$route.query.flag
        }
    }
}
</script>
