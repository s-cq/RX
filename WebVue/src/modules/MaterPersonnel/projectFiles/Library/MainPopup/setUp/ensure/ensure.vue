<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'保障'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
            <div class="analyItem ">
                <p class="analyItemTit tx-center">五险</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="isedit == 0">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">基数:</span>
                            <span name="le_self_unsigned_score">{{baozhang.leEnsureRisksBase}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="isedit == 1">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">基数:</span><input type="text" v-model="leEnsureRisksBase" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                    </div>
                    <div  class="analyItemCon" v-if="isedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="isedit = 1">
                        <rx-switch v-model="state1"></rx-switch>
                    </div>
                    <div  class="analyItemCon" v-if="isedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelWX()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="isedit = 0">
                    </div>
                    <span>6级以上项目经理公司统一缴纳保险</span>
                </div>
            </div>
            <div class="analyItem ">
                <p class="analyItemTit tx-center">加点</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="jdedit == 0">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">基数</span>
                            <span name="le_self_unsigned_score">{{baozhang.leEnsureLittleBase}}</span>
                        </p>
                          <p class="col-md-5">
                            <span class="cLightGray pr8">每级增长:</span>
                            <span name="le_self_unsigned_score">{{baozhang.leEnsureLittleGrow}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="jdedit == 1">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">基数:</span><input type="text" v-model="leEnsureLittleBase" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                        <p class="col-md-5">
                            <span class="cLightGray pr8">每级增长:</span><input type="text" v-model="leEnsureLittleGrow" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                    </div>
                    <div  class="analyItemCon" v-if="jdedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="jdedit = 1">
                           <rx-switch v-model="state"></rx-switch>
                    </div>
                    <div  class="analyItemCon" v-if="jdedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJD()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="jdedit = 0">
                    </div>
                    <span>10级以上项目经理接单，单个项目增加0.5，每上升一级增加0.5个点</span>
                </div>
            </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">共</span>
                    <span name="le_self_unsigned_score">2项</span>
                </p>
                <p class="fr col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span name="le_self_unsigned_score">1项</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { updateStayLevelById } from '../../../Resources/Api'
export default {
    props: ['basic'],
    data () {
        return {
            isedit: 0,
            jdedit: 0,
            baozhang: {},
            leEnsureRisksBase: '',
            leEnsureLittleGrow: '',
            leEnsureLittleBase: '',
            leEnsureLittle: '',
            state: this.basic.leEnsureLittle,
            state1: this.basic.leEnsureRisks
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    created () {
        this.baozhang = this.basic
        console.log(this.state)
    },
    methods: {
        ...mapMutations({
            setUpdatePlate: `SET_UPDATE_PLATE`
        }),
        UdateStayLevelWX () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leEnsureRisksBase: _this.leEnsureRisksBase
                }
            }).then(results => {
                this.isedit = 0
                this.basic.leEnsureRisksBase = _this.leEnsureRisksBase
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelWXStatus () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leEnsureRisks: _this.state1
                }
            }).then(results => {
                this.basic.leEnsureRisks = _this.state1
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
                    leEnsureLittleGrow: _this.leEnsureLittleGrow,
                    leEnsureLittleBase: _this.leEnsureLittleBase
                }
            }).then(results => {
                this.jdedit = 0
                this.basic.leEnsureLittleGrow = _this.leEnsureLittleGrow
                this.basic.leEnsureLittleBase = _this.leEnsureLittleBase
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelJDStatus () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leEnsureLittle: _this.state
                }
            }).then(results => {
                this.basic.leEnsureLittle = _this.leEnsureLittle
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpBasic?basic=${this.basic}`)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        state (newValue, oldValue) {
            this.UdateStayLevelJDStatus()
        },
        state1 (newValue, oldValue) {
            this.UdateStayLevelWXStatus()
        }
    }

}
</script>
