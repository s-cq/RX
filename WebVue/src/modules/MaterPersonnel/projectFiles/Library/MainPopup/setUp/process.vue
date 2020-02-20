<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'过程'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem ">
            <p class="analyItemTit tx-center">自带单</p>
            <div class="analyItemCon">
                <div class="textBox" v-if="zdedit == 0">
                    <p class="col-md-5">
                        <span class="cLightGray pr8">未签（加分）</span>
                        <span name="le_self_unsigned_score">{{process.leSelfUnsignedScore}}</span>
                    </p>
                    <p class="col-md-5">
                        <span class="cLightGray pr8">已签（加分）</span>
                        <span name="le_self_signed_score">{{process.leSelfSignedScore}}</span>
                    </p>
                </div>
                <div class="analyItemCon" v-if="zdedit == 1">
                    <p class="col-md-5">
                        <span class="cLightGray pr8">未签（加分）:</span><input type="text" v-model="leSelfUnsignedScore" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                    </p>
                    <p class="col-md-5">
                        <span class="cLightGray pr8">已签（加分）:</span><input type="text" v-model="leSelfSignedScore" class="width60 evaluateStandard" name="set_le_self_signed_score" value="">
                    </p>
                </div>
                <div class="analyItemCon" v-if="zdedit == 0">
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="zdedit=1">
                </div>
                <div class="analyItemCon" v-if="zdedit == 1">
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelZJ()">
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="zdedit=0">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">推荐</p>
            <div class="analyItemCon">
                <div class="textBox" v-if="tjedit == 0">
                    <p class="col-md-5">
                        <span class="cLightGray pr8">未签(加分)</span>
                        <span>{{process.leRefereeUnsignedScore}}</span>
                    </p>
                    <p class="col-md-5">
                        <span class="cLightGray pr8">已签(加分)</span>
                        <span>{{process.leRefereeSignedScore}}</span>
                    </p>
                </div>
                <div class="analyItemCon" v-if="tjedit == 1">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">未签（加分）:</span><input type="text" v-model="leRefereeUnsignedScore" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                        <p class="col-md-5">
                            <span class="cLightGray pr8">已签（加分）:</span><input type="text" v-model="leRefereeSignedScore" class="width60 evaluateStandard" name="set_le_self_signed_score" value="">
                        </p>
                </div>
                <div class="analyItemCon" v-if="tjedit == 0">
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="tjedit=1">
                </div>
                <div class="analyItemCon" v-if="tjedit == 1">
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelTJ()">
                    <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="tjedit=0">
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
                    <span name="le_self_unsigned_score">3项</span>
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
            zdedit: 0,
            tjedit: 0,
            process: {}
        }
    },
    created () {
        console.log(this.$route.query.process)
        this.process = this.$route.query.process
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
        UdateStayLevelZJ () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leSelfUnsignedScore: _this.leSelfUnsignedScore,
                    leSelfSignedScore: _this.leSelfSignedScore
                }
            }).then(results => {
                this.zdedit = 0
                this.process.leSelfUnsignedScore = _this.leSelfUnsignedScore
                this.process.leSelfSignedScore = _this.leSelfSignedScore
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpProcess?basic=${this.process}`)
            }).catch(error => {
                console.log(error)
            })
        },
        UdateStayLevelTJ () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leRefereeUnsignedScore: _this.leRefereeUnsignedScore,
                    leRefereeSignedScore: _this.leRefereeSignedScore
                }
            }).then(results => {
                this.tjedit = 0
                this.process.leRefereeUnsignedScore = _this.leRefereeUnsignedScore
                this.process.leRefereeSignedScore = _this.leRefereeSignedScore
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpProcess?basic=${this.process}`)
            }).catch(error => {
                console.log(error)
            })
        }

    }
}
</script>
