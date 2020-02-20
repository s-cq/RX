<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'结果'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
                  <div class="analyItem ">
                <p class="analyItemTit tx-center">洽商</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="qtedit == 0">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">洽谈</span>
                            <span name="le_self_unsigned_score">{{(resu.leNegotiation/10000).toFixed(2)}}万</span>
                        </p>
                        <p class="col-md-5">
                            <span class="cLightGray pr8">加分</span>
                            <span name="le_self_unsigned_score">{{resu.leNegotiationScore}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="qtedit == 1">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">洽谈:</span><input type="text"  v-model="leNegotiation" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                         <p class="col-md-5">
                            <span class="cLightGray pr8">加分:</span><input type="text" v-model="leNegotiationScore" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                    </div>
                    <div id='edit' class="analyItemCon" v-if="qtedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="qtedit=1">
                    </div>
                    <div id='save' class="analyItemCon" v-if="qtedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelQT()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="qtedit=0">
                    </div>
                </div>
            </div>
            <!-- <div class="analyItem">
                <p class="analyItemTit tx-center">样板间</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="ybjedit == 0">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">样板奖金</span>
                            <span>{{resu.leScreedBonus}}</span>
                        </p>
                        <p class="col-md-5">
                            <span class="cLightGray pr8">加分</span>
                            <span>{{resu.leScreedBonusScore}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="ybjedit == 1">
                            <p class="col-md-5">
                                <span class="cLightGray pr8">样板奖金:</span><input type="text" v-model="leScreedBonus" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                            </p>
                            <p class="col-md-5">
                                <span class="cLightGray pr8">加分:</span><input type="text" v-model="leScreedBonusScore" class="width60 evaluateStandard" name="set_le_self_signed_score" value="">
                            </p>
                    </div>
                    <div id='ybjedit' class="analyItemCon" v-if="ybjedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="ybjedit=1">
                    </div>
                    <div id='ybjsave' class="analyItemCon" v-if="ybjedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYBJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="ybjedit=0">
                    </div>
                </div>
            </div> -->
                <div class="analyItem">
                <p class="analyItemTit tx-center">满意度</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="myedit == 0">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">满意度</span>
                            <span>{{resu.leDegreeScore}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="myedit == 1">
                            <p class="col-md-10">
                                <span class="cLightGray pr8">满意度:</span><input type="text" v-model="leDegreeScore" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                            </p>
                    </div>
                    <div class="analyItemCon" v-if="myedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="myedit=1">
                    </div>
                    <div class="analyItemCon" v-if="myedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelMY()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="myedit=0">
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
                    <span name="le_self_unsigned_score">3项</span>
                </p>
                <p class="fr col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span name="le_self_unsigned_score">2项</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { updateStayLevelById } from '../../Resources/Api'
export default {
    data () {
        return {
            qtedit: 0,
            ybjedit: 0,
            myedit: 0,
            resu: {},
            leNegotiation: '',
            leNegotiationScore: '',
            leScreedBonus: '',
            leScreedBonusScore: '',
            leDegreeScore: ''
        }
    },
    created () {
        console.log(this.$route.query.result)
        this.resu = this.$route.query.result
    },
    mounted () {

    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {

    },
    methods: {
        ...mapMutations({
            setUpdatePlate: `SET_UPDATE_PLATE`
        }),
        UdateStayLevelQT () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leNegotiation: _this.leNegotiation,
                    leNegotiationScore: _this.leNegotiationScore
                }
            }).then(results => {
                this.qtedit = 0
                this.resu.leNegotiation = _this.leNegotiation
                this.resu.leNegotiationScore = _this.leNegotiationScore
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpResult?result=${this.resu}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelYBJ () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leScreedBonus: _this.leScreedBonus,
                    leScreedBonusScore: _this.leScreedBonusScore
                }
            }).then(results => {
                this.ybjedit = 0
                this.resu.leScreedBonusScore = _this.leScreedBonusScore
                this.resu.leScreedBonus = _this.leScreedBonus
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpResult?result=${this.resu}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelMY () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leDegreeScore: _this.leDegreeScore
                }
            }).then(results => {
                this.myedit = 0
                this.resu.leDegreeScore = _this.leDegreeScore
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpResult?result=${this.resu}`)
            }).catch(error => {
                console.log(error)
            })
        }

    }
}
</script>
