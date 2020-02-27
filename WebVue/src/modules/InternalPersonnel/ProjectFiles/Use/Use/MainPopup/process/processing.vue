<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item, index)  in monthRecoredList" :key="index">
                <p class="analyItemTit tx-center">月评</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">月评</span><span class="cGreen">{{$utils.format('yyyy-MM-dd', item.finish_date)}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">奖罚</span><span class="cGreen">{{item.evaluate_money}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">积分</span><span class="cGreen">{{item.evaluate_integral}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">评价</span><span class="cGreen">{{item.evaluate_result | evalFilters()}}</span></p>
                    <p class="col-md-12"><span class="cLightGray pr8">留言</span><span class="cGreen">{{item.remarks}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">总计</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">总绩效金额</span><span class="cGreen">192,207.44</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">竣工预计</span><span class="cGreen">615.06</span></p>
                    <p class="fl"><span class="circlemark circlemark-green">优</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">推送</p>
                <div class="analyItemCon">
                    <div class="col-md-9">
                        <textarea class="col-md-12" :value="standText"></textarea>
                    </div>
                    <div class="tx-center pt10 pb10"><input type="button" value="执行" class="uiBtn-normal uiBtn-blue" @click="saveUserHandInfo()"></div>
                    <p class="fl"><span class="circlemark circlemark-green">优</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">奖罚金额</span><span class="cGreen">0</span>元</p>
                    <p class="col-md-4"><span class="cLightGray pr8">奖罚积分</span><span class="cGreen"></span></p>
                    <p class="col-md-12"><span class="cLightGray pr8">处理内容</span><span class="cGreen"></span></p>
                    <p class="col-md-12"><span class="cLightGray pr8">处理时间</span><span class="cGreen"></span></p>
                    <div class="fr pr20 tx-center ">
                        <input type="button" class="uiBtn-normal uiBtn-blue" value="处理">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getMonthReviewRecording, saveUserHandInfo } from '../../Resources/Api/index'
export default {
    data () {
        return {
            monthRecoredList: [], // 月评数据
            standText: '', // 标准提交模板
            moneyValue: 0 // 罚款金额
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
    // 获取上月的天数
        const currentDate = new Date()
        const startTime = `${currentDate.getMonth()}-01`
        const endTime = `${currentDate.getMonth()}-${new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()}`
        this.standText = `${startTime} ~ ${endTime} 月接单标准：，实际：，具体奖罚变动为+x元/-x元。付出就会有回报，不负自己！——瑞祥工程部`
        this.getMonthReviewRecording()
    },
    methods: {
    // 获取月评
        getMonthReviewRecording () {
            let parms = {
                user_card_no: this.leftInfo.cardNo
            }
            getMonthReviewRecording(parms).then((results) => {
                if (results.data.StatusCode === 0) {
                    const data = results.data.Body.monthReviewRecording
                    this.monthRecoredList = data.filter((item) => { return Number(item.evaluate_type) === 22 })
                    this.moneyValue = this.monthRecoredList[0].evaluate_money
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 提交推送
        saveUserHandInfo () {
            let prams = {
                outline: this.standText,
                handType: 17,
                taskStatus: 1,
                gainFine: this.moneyValue,
                integral: 0,
                user_card_no: this.leftInfo.cardNo, // 被评价人卡号
                createdBy: this.userInfo.as_cardNo, // 创建人卡号
                modifyBy: this.userInfo.as_cardNo, // 修改人卡号
                remarks: this.standText,
                delFlag: 0,
                createUserMan: this.userInfo.as_cardNo
            }
            saveUserHandInfo(prams).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.$message('提交成功')
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    filters: {
        evalFilters (index) {
            let evalText = ''
            switch (Number(index)) {
            case 1:
                evalText = '优'
                break
            case 2:
                evalText = '良'
                break
            case 3:
                evalText = '中'
                break
            case 4:
                evalText = '差'
                break
            default:
                break
            }
            return evalText
        }
    }
}
</script>
