<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'竣工'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">印记</p>
                <div class="analyItemCon">
                    <p> {{this.leftInfo.username}}来公司已经{{seniority}}个月了,感谢您的辛勤付出，未来仍旧无限精彩</p>
                    <p>您现在普级{{abilityLevel}}级</p>
                    <p>您现在管级{{manageLevel}}级</p>
                    <p>您现在的累计竣工项目为{{ordinaryCompletedTotal}}个</p>
                    <p>您现在的累计竣工额为{{ordinaryCompletedMoney}}元</p>
                    <p>您在瑞祥的总计收入为：{{trueSalaryTotal}}元</p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="fl col-md-9"></p>
                    <p class="fr col-md-3">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAchievementImprint } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            abilityLevel: 0,
            manageLevel: 0,
            ordinaryCompletedMoney: 0,
            ordinaryCompletedTotal: 0,
            seniority: 0,
            trueSalaryTotal: 0,
            tubeCompletedMoney: 0,
            tubeCompletedTotal: 0,
            body: {}
        }
    },
    created () {
        this.getAchievementImprintFn()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'updatePlate'])
    },
    methods: {
        getAchievementImprintFn () {
            getAchievementImprint({
                user_card_no: this.leftInfo.cardNo
            }).then(result => {
                this.body = result.data.Body
                this.abilityLevel = this.body.abilityLevel
                this.manageLevel = this.body.manageLevel
                this.ordinaryCompletedMoney = this.body.ordinaryCompletedMoney
                this.ordinaryCompletedTotal = this.body.ordinaryCompletedTotal
                this.seniority = this.body.seniority
                this.trueSalaryTotal = this.body.trueSalaryTotal
                this.tubeCompletedMoney = this.body.tubeCompletedMoney
                this.tubeCompletedTotal = this.body.tubeCompletedTotal
            })
        }
    }
}
</script>
