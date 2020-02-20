<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'薪酬'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">普级</p>
                <div class="analyItemCon relative">
                    <p class="fl col-md-2"><span class="cLightGray pr8">普级</span><span>{{body.abilityLevel}}</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">底薪</span><span class="cGreen">{{body.baseSalary}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">管级</p>
                <div class="analyItemCon relative">
                    <p class="fl col-md-2"><span class="cLightGray pr8">管级</span><span>{{body.manageLevel}}</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">底薪</span><span class="cGreen">{{body.manageSalary}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">平衡</p>
                <div class="analyItemCon relative">
                    <!-- <p class="fl col-md-6"><span class="cLightGray pr8">底薪</span></p> -->
                    <!-- <p class="fl col-md-2"><span class="cLightGray pr8">社保</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">公积金</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">个税</span></p> -->
                    <p class="fl col-md-6"><span class="cLightGray pr8">平衡</span><span>{{body.manualChangeWages}}</span></p>
                    <!-- <p class="fl col-md-2"><span class="cLightGray pr8"></span></p> -->
                    <!-- <p class="col-md-6 cGreen"><span>{{Number(body.baseSalary+body.manageSalary)}}</span></p> -->
                    <!-- <p class="col-md-2 cRed"><span>{{body.socialSecurity}}</span></p>
                    <p class="col-md-2 cRed"><span>{{body.houseFund}}</span></p>
                    <p class="col-md-2 cRed"><span>{{body.incomeTax}}</span></p> -->
                    <!-- <p class="col-md-6 cRed"><span>{{body.manualChangeWages}}</span></p> -->
                </div>
            </div>
            <div data-action="FourProcessPunish" class="analyItem ">
                <p class="analyItemTit tx-center">周月评</p>
                <div class="analyItemCon relative">
                    <p class="fl col-md-3"><span class="cLightGray pr8">合计</span><span>{{body.commission}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">调整</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">普薪</span> <span>{{generalAdjust}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">管薪</span> <span>{{manageAdjust}}</span></p>
                    <!-- <input type="button" value="调整" class="uiBtn-normal uiBtn-blue" @click="submitSalary(1)"> -->
                    <div class="fixedTrangle"><a href="javascript:" class="fixedtips"></a>
                        <div class="fixedtipscon pt10 pb10"><i></i>
                            <p>在原底薪基础上加减</p>
                            <p>正加负减</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">普薪</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">双薪</span> <span>{{doubleSalary}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">兼职</span> <span>{{partTime}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">补贴</span> <span>{{subsidy}}</span></p>
                    <!-- <input type="button" value="调整" class="uiBtn-normal uiBtn-blue" @click="submitSalary(2)"> -->
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <!-- <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">普级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">管级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">底薪</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-3"><span>{{body.abilityLevel}}</span></p>
                        <p class="col-md-3"><span>{{body.manageLevel}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.baseSalary+body.manageSalary)}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.generalAdjust+body.manageAdjust)}}</span></p>
                    </div> -->
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p>{{Number(body.baseManageSalary+body.adjustMoney+body.commission+body.manualChangeWages).toFixed(2)}} </p>
                    </div>
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
    saveUserDoubleSalary
} from '../../Resources/Api'
export default {
    data () {
        return {
            body: {},
            puSalary: 0, // 普薪
            guanSalary: 0, // 管薪
            salaryType: '',
            shuangSalary: 0,
            jianSalary: 0,
            buSalary: 0,
            generalAdjust: 0,
            manageAdjust: 0,
            subsidy: 0,
            partTime: 0,
            doubleSalary: 0
        }
    },
    created () {
        this.body = this.$route.params.body
    },
    methods: {
        submitSalary (type) {
            this.load(type)
        },
        load (type) {
            //         if (adjustType === 1) {
            //         adjustMoney: generalAdjust + manageAdjust;//普薪调整+管薪调整或者双薪+兼职+补贴调整
            //         userHandInfo = curUserName + '为' + userName + '，调整' + month + '月份薪酬：' + '普薪调整：' + _this.generalAdjust +
            //           '元，实际' + generalReal + '元，管薪调整：' + _this.manageAdjust + '元，实际' + manageReal + '元';   //处理内容简述String
            //       } else if (adjustType === 2) {
            //   adjustMoney: doubleSalary + partTime + subsidy
            //   userHandInfo = curUserName + '为' + userName + '，补贴' + month + '月份薪酬：' + '双薪：' + _this.doubleSalary +
            //     '元，兼职：' + _this.partTime + '元，补贴：' + _this.subsidy + '元，共' + adjustMoney + '元';   //处理内容简述String
            // }
            // remarks: userHandInfo
            let parm = {}
            if (type === 1) {
                let remarks = '测试'
                parm = {
                    user_card_no: this.leftInfo.u_kahao,
                    loginCardNo: this.userInfo.as_cardNo,
                    updateCardNo: this.userInfo.as_cardNo,
                    adjustType: type,
                    generalAdjust: this.puSalary, // 普薪调整
                    manageAdjust: this.guanSalary, // 管薪调整
                    doubleSalary: 0, // 双薪调整
                    partTime: 0, // 兼职调整
                    subsidy: 0, // 补贴调整
                    generalReal: this.body.baseSalary + this.puSalary, // 现普薪+普薪调整
                    manageReal: this.body.manageSalary + this.guanSalary, // 现管薪+管薪调整
                    adjustMoney: this.puSalary + this.guanSalary, // 普薪调整+管薪调整或者双薪+兼职+补贴调整
                    remarks: remarks,
                    pointTime: this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
                }
            }
            if (type === 2) {
                let remarks = '测试'
                parm = {
                    user_card_no: this.leftInfo.u_kahao,
                    loginCardNo: this.userInfo.as_cardNo,
                    updateCardNo: this.userInfo.as_cardNo,
                    adjustType: type,
                    generalAdjust: 0, // 普薪调整
                    manageAdjust: 0, // 管薪调整
                    doubleSalary: this.shuangSalary, // 双薪调整
                    partTime: this.jianSalary, // 兼职调整
                    subsidy: this.buSalary, // 补贴调整
                    generalReal: this.body.baseSalary + this.puSalary, // 现普薪+普薪调整
                    manageReal: this.body.manageSalary + this.guanSalary, // 现管薪+管薪调整
                    adjustMoney: this.doubleSalary + this.partTime + this.subsidy, // 普薪调整+管薪调整或者双薪+兼职+补贴调整
                    remarks: remarks,
                    pointTime: this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
                }
            }
            saveUserDoubleSalary(parm).then(results => {
                this.completionList = results.data.Body
                this.generalAdjust = this.completionList.generalAdjust
                this.manageAdjust = this.completionList.manageAdjust
                this.subsidy = this.completionList.subsidy
                this.partTime = this.completionList.partTime
                this.doubleSalary = this.completionList.doubleSalary
            }).catch(error => {
                console.log(error)
            })
        }
    },

    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    }
}

</script>
