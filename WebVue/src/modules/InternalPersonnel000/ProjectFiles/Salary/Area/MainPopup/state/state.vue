<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="270">
            <div class="analyItem">
                <p class="analyItemTit tx-center">结果</p>
                <div class="analyItemCon">

                    <p class="col-md-4">
                        <span class="cLightGray pr8">竣工提成</span>
                        <span>{{salaryModel.CompleteMoney == null ? 0 : salaryModel.CompleteMoney.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">洽商提成</span>
                        <span>{{salaryModel.DiscussMoney == null ? 0 : salaryModel.DiscussMoney.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">罚款提成</span>
                        <span>{{salaryModel.CarryMoney == null ? 0 : salaryModel.CarryMoney.toFixed(2)}}</span>
                    </p>

                    <div class="fl col-md-3">
                        <span class="score-strong fz16 cRed">{{( Number(salaryModel.DiscussMoney == null ? 0 : salaryModel.DiscussMoney)+
                             Number(salaryModel.CarryMoney == null ? 0 : salaryModel.CarryMoney)+ Number(salaryModel.CompleteMoney == null ? 0 : salaryModel.CompleteMoney)).toFixed(2)}}</span>
                    </div>

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">完成金额</span>
                        <span>{{salaryModel.ProcessCompleteMoney == null ? 0 : salaryModel.ProcessCompleteMoney.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">超期金额</span>
                        <span>{{salaryModel.ProcessOverdueMoney == null ? 0 : salaryModel.ProcessOverdueMoney.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">工人录入</span>
                        <span>{{Number(salaryModel.ProcessWorkerMoney == null ? 0 : salaryModel.ProcessWorkerMoney.toFixed(2))}}</span>
                    </p>
                    <div class="fl col-md-3">
                        <span class="score-strong fz16 cRed">{{(Number(salaryModel.ProcessCompleteMoney == null ? 0 : salaryModel.ProcessCompleteMoney)+
                            Number(salaryModel.ProcessOverdueMoney == null ? 0 : salaryModel.ProcessOverdueMoney)+Number(salaryModel.ProcessWorkerMoney == null ? 0 : salaryModel.ProcessWorkerMoney)).toFixed(2)}}</span>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">管理</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">竣工提成</span>
                        <span>{{salaryModel.CompleteMoneyTeam == null ? 0 : salaryModel.CompleteMoneyTeam.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">洽商提成</span>
                        <span>{{salaryModel.DiscussMoneyTeam == null ? 0 : salaryModel.DiscussMoneyTeam.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">罚款提成</span>
                        <span>{{salaryModel.CarryMoneyTeam == null ? 0 : salaryModel.CarryMoneyTeam.toFixed(2)}}</span>
                    </p>
                    <div class="fl col-md-3">
                        <span class="score-strong fz16 cRed">{{(Number(salaryModel.CarryMoneyTeam == null ? 0 : salaryModel.CarryMoneyTeam)+Number(salaryModel.DiscussMoneyTeam == null ? 0 : salaryModel.DiscussMoneyTeam)+(salaryModel.CompleteMoneyTeam == null ? 0 : salaryModel.CompleteMoneyTeam)).toFixed(2)}}</span>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">薪酬</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">普薪{{abilityLevel == null ? 0 : abilityLevel}}级</span>
                        <span>{{ordinarySalary == null ? 0 : ordinarySalary.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">管薪{{manageLevel == null ? 0 : manageLevel}}级</span>
                        <span>{{manageSalary == null ? 0 : manageSalary.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">考勤</span>
                        <span>{{salaryModel.CheckingInFine == null ? 0 : salaryModel.CheckingInFine.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">人工奖罚</span>
                        <span>{{salaryModel.Fines == null ? 0 : salaryModel.Fines.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">个税</span>
                        <span>{{salaryModel.Tax == null ? 0.00 : salaryModel.Tax.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">社保</span>
                        <span>{{salaryModel.SocialSecurity == null ? 0 : salaryModel.SocialSecurity.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">总调整额</span>
                        <span>{{salaryModel.AdjustMoney == null ? 0 : salaryModel.AdjustMoney.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">公积金</span>
                        <span>{{salaryModel.HousingFund == null ? 0 : salaryModel.HousingFund.toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">周月评</span>
                        <span>{{salaryModel.EvaluateMoney == null ? 0 : salaryModel.EvaluateMoney.toFixed(2)}}</span>
                    </p>
                    <div class="fl col-md-3">
                        <span class="score-strong fz16 cRed">
                            {{
                        (Number(ordinarySalary) + Number(manageSalary)+
                        Number(salaryModel.Fines)+Number(salaryModel.CheckingInFine) +
                        Number(salaryModel.EvaluateMoney) +Number(salaryModel.SocialSecurity) +
                        Number(salaryModel.AdjustMoney) +Number(salaryModel.HousingFund) +
                        Number(salaryModel.Tax)).toFixed(2)}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">过程平衡</p>
                <div class="analyItemCon">

                    <div class="fl col-md-9" v-if="salaryModel.Status == 1">
                        <span class="cBlue">已平衡</span>
                    </div>
                    <div class="fl col-md-9" v-else>
                        <span class="cLightGray pr8">平衡薪酬</span>
                        <input type="text" value="0" class="mr20" id="kcMoney" /><br /><br />
                        <span class="cLightGray pr8">平衡原因</span>
                        <textarea type="text" value="0" class="mr20" id="kcReason" />
                        <input v-if="uiBtnBlue" type="button" value="确定" class="uiBtn-small uiBtn-blue" @click="CheckPH($event)">
                </div>
                <div class="fl col-md-3">

                </div>
                <span class="score-strong fz16" :class="salaryModel.ManualChangeWages">{{salaryModel.ManualChangeWages==null?0:salaryModel.ManualChangeWages.toFixed(2)}}</span>

                </div>
            </div>
        </div>
        <div class="layerRtb-footer" style="height:270px;">
            <div class="analyItem">

            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="fl col-md-3">
                    <div class="mt5"><span class="cLightGray pr8">应发</span></div>
                    <div class="mt5"><span class="cGreen">{{salaryModel.TrueSalaryTotal == null ? 0 : salaryModel.TrueSalaryTotal.toFixed(2)}}</span></div>
                </div>
                <div class="fl col-md-3">
                    <div class="mt5"><span class="cLightGray pr8">实发</span></div>
                    <div class="mt5"><span class="cGreen">{{salaryModel.CommissionAmount == null ? 0 : salaryModel.CommissionAmount.toFixed(2)}}</span></div>
                </div>
                <div class="fl col-md-3">
                    <div class="mt5"><span class="cLightGray pr8">剩余</span></div>
                    <div class="mt5"><span class="cRed">{{(Number(salaryModel.TrueSalaryTotal == null ? 0 : salaryModel.TrueSalaryTotal.toFixed(2))-Number(salaryModel.CommissionAmount == null ? 0 : salaryModel.CommissionAmount.toFixed(2))).toFixed(2)}}</span></div>
                </div>
                <div class="fl col-md-3">
                    <div class="mt5"><span class="score-strong fz16 cGreen">{{salaryModel.TrueSalaryTotal == null ? 0 : salaryModel.TrueSalaryTotal.toFixed(2)}}</span></div>
                </div>
            </div>

            </div>
            <div class="clearfix">
                <div class="col-md-7 handle-left pb10" style="min-height: 172px;">

                <div class="clearfix">
                    <h2 class="uiTitle2 mt3">
                        <i class="uiTitle-icon"></i><span class="ml5 fz14">处理</span>
                    </h2>
                </div>
                <div class="pr10">
                    <textarea class="evaluate-textarea evaluateText" style="width: 100%;height: 66px;padding: 4px 8px;"></textarea>
                    </div>
                    <div v-if="salaryModel.Status == 1">
                        <div class="tx-center pt10">
                            <span class="cBlue">待地方会计发放</span>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="uiBtnBlue" class="tx-center pt10">
                            <input type="button" value="通过" class="uiBtn-normal uiBtn-blue" @click="CheckTG($event)">
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
// 手动通过操作
import {
    mapGetters, mapMutations
} from 'vuex'
import { getInternalSalaryByUserCard, updateProvideSalary, pushCheckedSalaryToTouziCaiwu } from '../../Resources/Api'

// 手动平衡操作
var gc = true
// 手动通过操作
var tg = true
export default {

    data () {
        return {
            trueSalaryTotal: 0.00,
            personCount: 0,
            userCard: '',
            pointTime: '',
            salaryModel: {},
            ordinarySalary: 0,
            manageSalary: 0,
            abilityLevel: 0,
            manageLevel: 0,
            worker_money: 0.00,
            uiBtnBlue: true
        }
    },
    created () {
        this.trueSalaryTotal = this.leftInfo.salaryTotal
        this.personCount = this.leftInfo.totalCount
        this.userCard = this.leftInfo.u_kahao
        if (Number(this.leftInfo.MONTH) < 10) {
            this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
        } else {
            this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
        }
        this.getInternalSalaryByUserCardFn()
        console.log(this.userInfo.as_diquId + 'this.userInfo.as_diquId')
        if (this.userInfo.as_diquId !== 39) {
            this.uiBtnBlue = false
        }
    },
    methods: {
        ...mapMutations({
            setupdatePlate: `SET_UPDATE_PLATE`
        }),
        getInternalSalaryByUserCardFn () {
            getInternalSalaryByUserCard({
                userCard: this.userCard,
                pointTime: this.pointTime
            }).then(results => {
                this.salaryModel = results.data.Body.salaryModel
                this.ordinarySalary = results.data.Body.ordinarySalary
                this.manageSalary = results.data.Body.manageSalary
                this.abilityLevel = results.data.Body.abilityLevel
                this.manageLevel = results.data.Body.manageLevel
                this.worker_money = results.data.Body.workerMoney.worker_money
            }).catch(error => {
                console.log(error)
            })
        },
        CheckPH (event) {
            if (gc === true) {
                gc = false
            } else {
                layer.msg('对不起，不能重复提交！', { icon: 5, time: 1000 })
                return false
            }

            var xingming = this.salaryModel.u_xingming
            var Id = this.salaryModel.ID
            var kcMoney = Number($('#kcMoney').val())
            var kcReason = '平衡'
            kcReason = $('#kcReason').val()
            if (Id === '' || Id === undefined) {
                parent.layer.msg('对不起，请选择对应的平衡人员！', { icon: 5, time: 3000 })
                gc = true
                return false
            }
            var tomy = Number(this.salaryModel.TrueSalaryTotal) + Number(kcMoney)

            // 弹框
            this.$confirm('您确定要把【' + xingming + '】的金额手动平衡：' + kcMoney + '元吗？平衡后总金额为' + tomy + '元', '平衡确认', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                this.saveCheckPHFn(Id, xingming, kcMoney, kcReason)
                this.setupdatePlate()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消'
                })
            })

            gc = true
        },
        saveCheckPHFn (Id, xingming, kcMoney, kcReason) {
            updateProvideSalary({
                Id: Id,
                kcMoney: kcMoney,
                kcRemarks: kcReason,
                status: 0,
                curUserCard: this.userInfo.as_cardNo,
                salaryType: 1
            }).then(results => {
                if (results.data.Body.Status === 'ok') {
                    layer.msg('【' + xingming + '】的工资手动平衡：【' + kcMoney + '】元 成功，待【集团财务】提交凭证中！', { icon: 6, time: 3000 })

                    $('#tabData').find('tr.tractive').click()
                } else {
                    layer.msg('【' + xingming + '】的工资手动平衡失败！', { icon: 5, time: 3000 })
                }
                gc = true
            }).catch(error => {
                console.log(error)
                gc = true
                layer.msg('【' + xingming + '】的工资手动平衡出错！', { icon: 5, time: 3000 })
            })
        },


        CheckTG (event) { // 通过
            if (this.salaryModel.Status === 1) {
                layer.msg('对不起，此人已经审核过！', { icon: 5, time: 1000 })
                return false
            }

            if (tg === true) {
                tg = false
            } else {
                layer.msg('对不起，不能重复提交！', { icon: 5, time: 1000 })
                return false
            }
            var xingming = this.salaryModel.u_xingming
            var Id = this.salaryModel.ID
            var kcMoney = Number($('#kcMoney').val())
            var kcReason = '通过'
            kcReason = $('#kcReason').val()
            if (Id === '' || Id === undefined) {
                layer.msg('对不起，请选择对应的审批人员！', { icon: 5, time: 1000 })
                tg = true
                return false
            }
            // 弹框
            this.$confirm('您确定【' + xingming + '】的工资核实无误审批通过吗？', '通过确认', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                this.saveCheckTGFn(Id, xingming, kcMoney, kcReason)
                this.setupdatePlate()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消'
                })
            })

            tg = true
        },

        saveCheckTGFn (Id, xingming, kcMoney, kcReason) {
            this.pushCheckedSalaryToTouziCaiwuFn()
            updateProvideSalary({

                Id: Id,
                kcMoney: kcMoney,
                kcRemarks: kcReason,
                status: 1,
                salaryType: 2,
                curUserCard: this.userInfo.as_cardNo
            }).then(results => {
                if (results.data.Body.Status === 'ok') {
                    layer.msg('【' + xingming + '】审批成功，待【地方会计】提交凭证中！', { icon: 6, time: 3000 })
                    tg = true
                } else {
                    layer.msg('【' + xingming + '】审批失败！', { icon: 5, time: 1000 })
                    tg = true
                }
            }).catch(error => {
                console.log(error)
                tg = true
                layer.msg('【' + xingming + '】的工资手动平衡出错！', { icon: 5, time: 3000 })
            })
        },
        pushCheckedSalaryToTouziCaiwuFn (areaId, userno, username, jsid, timeSelect) {
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            pushCheckedSalaryToTouziCaiwu({
                // 分司id，地区id,查取数据
                Region: this.leftInfo.Region,
                // 用户卡号
                EmployeeCardNo: this.leftInfo.u_kahao,
                // 用户姓名
                EmployeeName: this.leftInfo.u_xingming,
                // 岗位名称
                PositionId: this.leftInfo.u_jibie,
                // 薪酬-年,月
                PointTime: this.pointTime,
                // 部门，1.商务，2.主案，3.工程，4.投资
                Dept: 3,
                // 登录用户卡号
                curUserCard: this.userInfo.as_cardNo,
                // 登录用户姓名
                curUserName: this.userInfo.as_userName
            }).then(results => {

            }).catch(error => {
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
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    watch: {
        leftInfo () {
            this.userCard = this.leftInfo.u_kahao
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            this.getInternalSalaryByUserCardFn()
        }

    }


}
</script>
