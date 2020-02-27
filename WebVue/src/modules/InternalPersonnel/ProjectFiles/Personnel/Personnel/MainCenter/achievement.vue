<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr10">累计金额</span><span>{{Number(ordinaryCompletedMoney/10000).toFixed(2)}}万</span></p>
                    <span class="circlemark" :class=" moneyAssessment  | stageColor">{{ moneyAssessment}}</span>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="85">
            <router-link tag="div" :to="routerPath('achImprintThree')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">印记</p>
                <div class="analyItemCon">
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('achThree')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">累计成就</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr10">个数</span><span>{{ordinaryCompletedTotal}}个</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr10">累计金额</span><span>{{Number(ordinaryCompletedMoney/10000).toFixed(2)}}万</span></p>
                    <span class="circlemark" :class=" moneyAssessment  | stageColor">{{ moneyAssessment}}</span>
                </div>
            </router-link>
            <router-link tag="div" :to="{path:routerPath('trainThree'),query: {pathUrl: jumpUrl!== null ? jumpUrl : 'null'}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr10">函授</span><span>{{peiObject !== null && peiObject.appTrainNum !== null ? peiObject.appTrainNum : 0}}次</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr10">面授</span><span>{{peiObject !== null && peiObject.militaryNum !== null ? peiObject.militaryNum : 0}}次</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('shengjicishu')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">升级</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr10">升级次数</span><span>{{shengjicishu}}次</span></p>
                    <span class="circlemark" :class=" assessmentRise  | stageColor">{{ assessmentRise}}</span>
                </div>
            </router-link>
        </div>
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getTrainProcess, getLatelyClassTrainResultByCardNo, getAllAchievement } from '../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            peiObject: null, // 培训数据
            jumpUrl: null, // 三段的URl
            ordinaryCompletedMoney: 0,
            ordinaryCompletedTotal: 0,
            body: {},
            junStateObject: {}, // 竣工的状态按钮显示
            fineStateObjdect: {}, // 罚款的状态按钮显示
            qiaStateObjdect: {}, // 洽商的状态按钮显示
            junQuanzhong: 0, // 竣工的权重
            fineQuanzhong: {}, // 罚款的权重
            qiaQuanzhong: {}, // 洽商的权重
            shengjicishu: 0,
            assessmentRise: 0, // 升级次数优良中差
            moneyAssessment: 0 // 累计金额优良中差


        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getTrainProcess()
        this.getAllAchievementFn()
    },
    methods: {

        getAllAchievementFn () {
            getAllAchievement({
                user_card_no: this.leftInfo.cardNo
            }).then(result => {
                this.body = result.data.Body
                this.ordinaryCompletedMoney = this.body.ordinaryCompletedMoney
                this.ordinaryCompletedTotal = this.body.ordinaryCompletedTotal
                this.shengjicishu = this.body.shengjicishu
                this.assessmentRise = this.body.assessmentRise
                this.moneyAssessment = this.body.moneyAssessment
            })
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        getTrainProcess () {
            // 获取培训接口
            getTrainProcess({ cardNo: this.leftInfo.cardNo }).then((results) => {
                if (results.data.statusCode === 1) {
                    this.peiObject = results.data.body
                }
            }).catch((error) => {
                console.log(error)
            })
            // 获取培训三段URl
            getLatelyClassTrainResultByCardNo({ cardNo: this.leftInfo.cardNo }).then((results) => {
                if (results.data.statusCode === 1) {
                    const data = results.data.body
                    if (data !== null) {
                        this.jumpUrl = data.jumpUrl
                    }
                }
            }).catch((error) => {
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
    watch: {
        leftInfo () {
            this.getTrainProcess()
            this.getAllAchievementFn()
        }
    }
}
</script>
