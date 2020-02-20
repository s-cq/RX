<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem statusCha" data-anItem="status">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                </div>
            </div>
        </div>
        <div class="statusScroll pr10">
            <div class="analyItem anItemBor anItemBorThree" data-anItem="ThreeExpenditureResultMonths">
                <p class="analyItemTit tx-center">结果</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">本月</span>
                        <span>{{(resultMoney + managerMoney) | toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">年度</span>
                        <span>{{YResultMoney | toFixed(2)}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem anItemBor anItemBorThree" data-anItem="ThreeExpenditrueProcessMonths">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">本月</span>
                        <span>{{processMoney | toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">年度</span>
                        <span>{{YProcessMoney | toFixed(2)}}</span>
                    </p>
                </div>
            </div>

            <div class="analyItem anItemBor anItemBorThree" data-anItem="ThreeExpenditureSalaryMonths">
                <p class="analyItemTit tx-center">工资</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">本月</span>
                        <span>{{Number(baseSalary) | toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">年度</span>
                        <span>{{YBaseSalary | toFixed(2)}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="pr10">
            <div class="analyItem anItemBor anItemBorThree statusCha" style="margin-top: 1px;">
                <p class="analyItemTit tx-center layerSeBtn">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">结果</span>
                        <span>{{(resultMoney + managerMoney)  | toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">过程</span>
                        <span>{{processMoney  | toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">工资</span>
                        <span>{{baseSalary  | toFixed(2)}}</span>
                    </p>

                </div>
            </div>

        </div>

    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    GetWageRecord
} from '../Resources/Api'
export default {
    data () {
        return {
            body: {},
            baseSalary: 0.0, // 应发底薪 = 实薪（底薪【普+管】 +调整【调整+外快】 + 平衡 + 周月评）+奖罚 + 社保公积金个税
            resultMoney: 0.0, // 结果
            processMoney: 0.0, // 过程
            managerMoney: 0.0, // 管提

            YBaseSalary: 0.0, // 年度底薪
            YResultMoney: 0.0, // 年度结果
            YProcessMoney: 0.0, // 年度过程
            YManagerMoney: 0.0 // 年度管提
        }
    },
    created () {
        this.GetWageRecordFn()
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
        GetWageRecordFn () {
            var date = new Date()

            var year = date.getFullYear() // 获取完整的年份(4位)
            var month = date.getMonth() // 获取当前月份(0-11,0代表1月)
            GetWageRecord({
                cardNO: this.leftInfo.cardNo,
                subject: '', // 工资科目(可空) 1、底薪，2、结果，3、过程，4、管提
                wageDate: year + '-' + month, // 薪酬日期(可空)
                payDate: ''// 发放日期(可空)
            }).then(results => {
                let bodyList = results.data
                for (var i = 0; i < bodyList.length; i++) {
                    let body = bodyList[i]
                    let subject = body.Subject
                    switch (subject) { // 1、底薪，2、结果，3、过程，4、管提
                    case 1:
                        if (body.Year === year && body.Month === month) {
                            this.baseSalary = body.Amount
                        }
                        if (body.Year === year) {
                            this.YBaseSalary += body.Amount
                        }
                        break
                    case 2:
                        if (body.Year === year && body.Month === month) {
                            this.resultMoney = body.Amount
                        }
                        if (body.Year === year) {
                            this.YResultMoney += body.Amount
                        }
                        break
                    case 3:
                        if (body.Year === year && body.Month === month) {
                            this.processMoney = body.Amount
                        }
                        if (body.Year === year) {
                            this.YProcessMoney += body.Amount
                        }
                        break
                    case 4:
                        if (body.Year === year && body.Month === month) {
                            this.managerMoney = body.Amount
                        }
                        if (body.Year === year) {
                            this.YManagerMoney += body.Amount
                        }
                        break
                    }
                }
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leftInfo () {
            this.GetWageRecordFn()
        }

    }
}
</script>
