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
                <p class="analyItemTit tx-center">薪酬</p>
                <div class="analyItemCon relative">
                    <p class="fl col-md-2"><span class="cLightGray pr8">底薪</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">社保</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">公积金</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8">个税</span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8"></span></p>
                    <p class="fl col-md-2"><span class="cLightGray pr8"></span></p>
                    <p class="col-md-2 cGreen"><span>{{Number(body.baseSalary+body.manageSalary)}}</span></p>
                    <p class="col-md-2 cRed"><span>{{body.socialSecurity}}</span></p>
                    <p class="col-md-2 cRed"><span>{{body.houseFund}}</span></p>
                    <p class="col-md-2 cRed"><span>{{body.incomeTax}}</span></p>
                </div>
            </div>
            <div data-action="FourProcessPunish" class="analyItem ">
                <p class="analyItemTit tx-center">周月评</p>
                <div class="analyItemCon relative">
                    <p class="fl col-md-3"><span class="cLightGray pr8">合计</span><span>{{body.evaluateMoney}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">调整</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">普薪</span> <input type="text" class="width60" v-model="puSalary"></p>
                    <p class="col-md-3"><span class="cLightGray pr8">管薪</span> <input type="text" class="width60" v-model="guanSalary"></p>
                    <input type="button" value="调整" class="uiBtn-normal uiBtn-blue" @click="submitSalary(1)">
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
                    <p class="col-md-3"><span class="cLightGray pr8">双薪</span> <input type="text" class="width60" v-model="shuangSalary"></p>
                    <p class="col-md-3"><span class="cLightGray pr8">兼职</span> <input type="text" class="width60" v-model="jianSalary"></p>
                    <p class="col-md-3"><span class="cLightGray pr8">补贴</span> <input type="text" class="width60" v-model="buSalary"></p>
                    <input type="button" value="调整" class="uiBtn-normal uiBtn-blue" @click="submitSalary(2)">
                </div>
            </div>
            <!-- <div data-anitem=" history" class="analyItem  history">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon relative">
                    <p class="fl col-md-2"></p>
                </div>
            </div> -->
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3"><span class="cLightGray pr8">普级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">管级</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">底薪</span></p>
                        <p class="col-md-3"><span class="cLightGray pr8">调整</span></p>
                        <p class="col-md-3"><span>{{body.abilityLevel}}</span></p>
                        <p class="col-md-3"><span>{{body.manageLevel}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.baseSalary+body.manageSalary)}}</span></p>
                        <p class="col-md-3"><span>{{Number(body.generalAdjust+body.manageAdjust)}}</span></p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">实薪</span></p>
                        <p>{{Number(body.baseSalary+body.manageSalary+ body.adjustMoney + body.generalAdjust) | toFixed(2)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {
    mapGetters, mapMutations
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
            buSalary: 0

        }
    },
    created () {
        this.body = this.$route.params.body
    },
    methods: {
        ...mapMutations({
            setupdatePlate: `SET_UPDATE_PLATE`
        }),
        submitSalary (type) {
            this.load(type)
        },
        load (type) {
            let parm = {}
            let month = new Date().getMonth() + 1
            if (type === 1) {
                // let remarks = '测试'
                parm = {
                    user_card_no: this.leftInfo.cardNo,
                    loginCardNo: this.userInfo.as_cardNo,
                    updateCardNo: this.userInfo.as_cardNo,
                    adjustType: type,
                    generalAdjust: this.puSalary, // 普薪调整
                    manageAdjust: this.guanSalary, // 管薪调整
                    doubleSalary: 0, // 双薪调整
                    partTime: 0, // 兼职调整
                    subsidy: 0, // 补贴调整
                    generalReal: Number(this.body.baseSalary) + Number(this.puSalary), // 现普薪+普薪调整
                    manageReal: Number(this.body.manageSalary) + Number(this.guanSalary), // 现管薪+管薪调整
                    adjustMoney: Number(this.puSalary) + Number(this.guanSalary), // 普薪调整+管薪调整或者双薪+兼职+补贴调整
                    remarks: this.userInfo.as_userName + '为' + this.leftInfo.userName + '，调整' + month + '月份薪酬：' + '普薪调整：' + this.puSalary +
            '元，实际' + (Number(this.body.baseSalary) + Number(this.puSalary)) + '元，管薪调整：' + this.guanSalary + '元，实际' + (Number(this.body.manageSalary) + Number(this.guanSalary)) + '元' // 处理内容简述String
                }
            }
            if (type === 2) {
                parm = {
                    user_card_no: this.leftInfo.cardNo,
                    loginCardNo: this.userInfo.as_cardNo,
                    updateCardNo: this.userInfo.as_cardNo,
                    adjustType: type,
                    generalAdjust: 0, // 普薪调整
                    manageAdjust: 0, // 管薪调整
                    doubleSalary: this.shuangSalary, // 双薪调整
                    partTime: this.jianSalary, // 兼职调整
                    subsidy: this.buSalary, // 补贴调整
                    generalReal: Number(this.body.baseSalary) + Number(this.puSalary), // 现普薪+普薪调整
                    manageReal: Number(this.body.manageSalary) + Number(this.guanSalary), // 现管薪+管薪调整
                    adjustMoney: Number(this.doubleSalary) + Number(this.partTime + this.subsidy), // 普薪调整+管薪调整或者双薪+兼职+补贴调整
                    remarks: this.userInfo.as_userName + '为' + this.leftInfo.userName + '，补贴' + month + '月份薪酬：' + '双薪：' + this.shuangSalary +
            '元，兼职：' + this.jianSalary + '元，补贴：' + this.buSalary + '元，共' + (Number(this.shuangSalary == null ? 0 : this.shuangSalary) +
              Number(this.jianSalary == null ? 0 : this.jianSalary) + Number(this.buSalary == null ? 0 : this.buSalary)) + '元'
                }
            }
            saveUserDoubleSalary(parm).then(results => {
                layer.msg('调整成功', { icon: 1, time: 3000 })
                this.setupdatePlate()
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
