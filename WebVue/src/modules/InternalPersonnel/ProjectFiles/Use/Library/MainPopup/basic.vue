<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'当阶'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
            <div class="analyItem ">
                <p class="analyItemTit tx-center">押金</p>
                <div class="analyItemCon">
                    <div class="textBox"  v-if="yjedit == 0">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">押金</span>
                            <span name="le_self_unsigned_score">{{(basic.leDeposit/10000).toFixed(2)}}万</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="yjedit == 1">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">押金:</span><input type="text" v-model="leDeposit" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                    </div>
                    <div  class="analyItemCon" v-if="yjedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="yjedit=1">
                    </div>
                    <div  class="analyItemCon" v-if="yjedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="yjedit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">接单</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="jdedit == 0">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">总金额</span>
                            <span>{{(basic.leReceiptMoney/10000).toFixed(2)}}万</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">单项目金额</span>
                            <span>{{(basic.leReceiptNum/10000).toFixed(2)}}万</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">接单个数</span>
                            <span>{{basic.leReceiptAmount}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="jdedit == 1">
                            <p class="col-md-5">
                                <span class="cLightGray pr8">总金额:</span><input type="text" v-model="leReceiptMoney" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                            </p>
                            <p class="col-md-5">
                                <span class="cLightGray pr8">单项目金额:</span><input type="text" v-model="leReceiptNum" class="width60 evaluateStandard" name="set_le_self_signed_score" value="">
                            </p>
                            <p class="col-md-5">
                                <span class="cLightGray pr8">接单个数:</span><input type="text" v-model="leReceiptAmount" class="width60 evaluateStandard" name="set_le_self_signed_score" value="">
                            </p>
                    </div>
                    <div class="analyItemCon" v-if="jdedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="jdedit=1">
                    </div>
                    <div class="analyItemCon" v-if="jdedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJD()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="jdedit=0">
                    </div>
                </div>
            </div>
                <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="jgedit == 0">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">竣工</span>
                            <span>{{(basic.leComplete/10000).toFixed(2)}}万</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="jgedit == 1">
                            <p class="col-md-10">
                                <span class="cLightGray pr8">竣工金额:</span><input type="text" v-model="leComplete" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                            </p>
                    </div>
                    <div class="analyItemCon" v-if="jgedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="jgedit=1">
                    </div>
                    <div class="analyItemCon" v-if="jgedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJG()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="jgedit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem" @click="clickFourShow(0)">
                <p class="analyItemTit tx-center">保障</p>
                <div class="analyItemCon">
                    <div class="textBox">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">五险</span>
                            <span>{{basic.leEnsureRisks==0?'关闭':'开启'}}</span>
                        </p>
                        <p class="col-md-5">
                            <span class="cLightGray pr8">加点</span>
                            <span>{{basic.leEnsureLittle==0?'关闭':'开启'}}</span>
                        </p>
                </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">安全员证</p>
                <div class="analyItemCon">
                    <div class="textBox">
                        <p class="col-md-5">
                           <el-radio v-model="leSecurityOpen" label="1">启动</el-radio>
                        </p>
                        <p class="col-md-5">
                           <el-radio v-model="leSecurityOpen" label="0">未启动</el-radio>
                        </p>
                </div>
                </div>
            </div>
        </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">共</span>
                    <span name="le_self_unsigned_score">4项</span>
                </p>
                <p class="fr col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span name="le_self_unsigned_score">4项</span>
                </p>
            </div>
        </div>
    </div>
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 问题 threeresultDetail -->
        <rx-ensure v-if="fourIndex === 0" :key="0" :basic="basic"></rx-ensure>
    </transition-group>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { updateStayLevelById } from '../../Resources/Api'
import rxEnsure from './ensure/ensure'
export default {
    components: {
        rxEnsure
    },
    data () {
        return {
            fourIndex: undefined,
            yjedit: 0,
            jdedit: 0,
            jgedit: 0,
            basic: {},
            num: 0,
            leDeposit: '',
            leReceiptNum: '',
            leReceiptAmount: '',
            leReceiptMoney: '',
            leComplete: '',
            leSecurityOpen: '' + this.$route.query.basic.leSecurityOpen + ''

        }
    },
    created () {
        this.basic = this.$route.query.basic
    },
    mounted () {

    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leSecurityOpen () { this.UdateStayLevelAQ() }

    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        ...mapMutations({
            setUpdatePlate: `SET_UPDATE_PLATE`
        }),
        UdateStayLevelYJ () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leDeposit: Number(_this.leDeposit) * 10000
                }
            }).then(results => {
                this.yjedit = 0
                this.basic.leDeposit = _this.leDeposit * 10000
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelJD () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leReceiptNum: Number(_this.leReceiptNum) * 10000,
                    leReceiptMoney: Number(_this.leReceiptMoney) * 10000,
                    leReceiptAmount: Number(_this.leReceiptAmount) * 10000
                }
            }).then(results => {
                this.jdedit = 0
                this.basic.leReceiptNum = _this.leReceiptNum * 10000
                this.basic.leReceiptMoney = _this.leReceiptMoney * 10000
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelJG () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leComplete: Number(_this.leComplete) * 10000
                }
            }).then(results => {
                this.jgedit = 0
                this.basic.leComplete = _this.leComplete
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelAQ () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leSecurityOpen: _this.leSecurityOpen
                }
            }).then(results => {
                this.basic.leSecurityOpen = _this.leSecurityOpen
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        }

    }
}
</script>
