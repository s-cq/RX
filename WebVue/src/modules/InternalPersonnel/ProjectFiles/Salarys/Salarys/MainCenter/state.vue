<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <strong class="fz14 cGreen">{{salaryModel.zt_name}}</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="84">
            <div class="analyItem">
                <p class="analyItemTit tx-center">结果</p>
                <div class="analyItemCon">
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3"><span class="score-strong fz16 cGreen">{{(Number(salaryModel.DiscussMoney)+Number(salaryModel.CarryMoney)+Number(salaryModel.CompleteMoney)).toFixed(2)}}</span></div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3"><span class="score-strong fz16 cGreen">{{(Number(salaryModel.ProcessCompleteMoney == null ? 0 : salaryModel.ProcessCompleteMoney)+
                            Number(salaryModel.ProcessOverdueMoney == null ? 0 : salaryModel.ProcessOverdueMoney)+Number(salaryModel.ProcessWorkerMoney == null ? 0 : salaryModel.ProcessWorkerMoney)).toFixed(2)}}</span></div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">管理</p>
                <div class="analyItemCon">
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3">&nbsp;</div>
                    <div class="fl col-md-3"><span class="score-strong fz16 cGreen">{{(Number(salaryModel.DiscussMoneyTeam)+Number(salaryModel.CompleteMoneyTeam)+Number(salaryModel.CarryMoneyTeam)).toFixed(2)}}</span></div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">薪酬</p>
                <div class="analyItemCon">
                    <div class="fl col-md-4">
                        <span class="cLightGray pr8">底薪</span><span class="cGreen">{{(Number(salaryModel.Salary)+Number(salaryModel.AdjustMoney)).toFixed(2)}}</span>
                    </div>
                    <div class="fl col-md-4">
                        <span class="cLightGray pr8">奖罚</span><span class="cGreen">{{(Number(salaryModel.Fines)+Number(salaryModel.CheckingInFine)).toFixed(2)}}</span>
                    </div>
                    <div class="fl col-md-4">
                        <span class="cLightGray pr8">平衡</span><span class="cGreen">{{Number(salaryModel.ManualChangeWages).toFixed(2)}}</span>
                    </div>
                    <div class="fl col-md-4">
                        <span class="cLightGray pr8">周月评</span><span class="cGreen">{{Number(salaryModel.Commission).toFixed(2)}}</span>
                    </div>
                    <div class="fl col-md-4">
                        <span class="cLightGray pr8">社公税</span>
                        <span class="cGreen">
                            {{(Number(salaryModel.SocialSecurity) + Number(salaryModel.HousingFund) + Number(salaryModel.Tax)).toFixed(2)}}
                        </span>
                    </div>
                    <div class="fl col-md-4">
                        <span class="cLightGray pr8">合计</span>
                        <span class="cGreen">
                            {{
                        (
                        Number(salaryModel.Salary)+
                        Number(salaryModel.Fines)+Number(salaryModel.CheckingInFine) +
                        Number(salaryModel.Commission) +Number(salaryModel.SocialSecurity) +
                        Number(salaryModel.AdjustMoney) +Number(salaryModel.HousingFund) +
                        Number(salaryModel.Tax)+Number(salaryModel.ManualChangeWages)).toFixed(2)}}
                        </span>
                    </div>

                </div>
            </div>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="routerPath('stateHandle')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <div class="fl col-md-3">
                        <span class="score-strong fz16 cGreen" id="totalMoneyInStatus">{{salaryModel.TrueSalaryTotal==null?0:salaryModel.TrueSalaryTotal.toFixed(2)}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { getInternalSalaryByUserCard } from '../Resources/Api'
export default {
    data () {
        return {
            trueSalaryTotal: 0.00,
            personCount: 0,
            user_card_no: '',
            pointTime: '',
            salaryModel: {},
            ordinarySalary: 0,
            manageSalary: 0
        }
    },
    created () {
        this.trueSalaryTotal = this.leftInfo.salaryTotal
        this.personCount = this.leftInfo.totalCount
        this.user_card_no = this.leftInfo.u_kahao
        if (Number(this.leftInfo.MONTH) < 10) {
            this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
        } else {
            this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
        }
        // this.timer = setTimeout(() => { // 设置延迟执行
        this.getInternalSalaryByUserCardFn()
    // }, 5000)
    },
    methods: {

        getInternalSalaryByUserCardFn () {
            getInternalSalaryByUserCard({
                user_card_no: this.user_card_no,
                pointTime: this.pointTime
            }).then(results => {
                this.salaryModel = results.data.Body.salaryModel
                this.ordinarySalary = results.data.Body.ordinarySalary
                this.manageSalary = results.data.Body.manageSalary
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
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leftInfo () {
            this.user_card_no = this.leftInfo.u_kahao
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            this.getInternalSalaryByUserCardFn()
        },
        updatePlate () {
            this.getInternalSalaryByUserCardFn()
        }
    }


}
</script>
