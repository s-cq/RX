<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'培训'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
            <div class="analyItem ">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="isedit == 0">
                        <p class="col-md-10">
                            <span class="cLightGray pr8">次数</span>
                            <span name="le_self_unsigned_score">{{training.leTrainingNum}}</span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="isedit == 1">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">次数:</span><input type="text" v-model="leTrainingNum" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                    </div>
                    <div  class="analyItemCon" v-if="isedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="isedit = 1">
                    </div>
                    <div  class="analyItemCon" v-if="isedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="isedit = 0">
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
import { updateStayLevelById } from '../../Resources/Api'
export default {
    data () {
        return {
            isedit: 0,
            training: {},
            leTrainingNum: ''
        }
    },
    created () {
        console.log(this.$route.query.training)
        this.training = this.$route.query.training
    },
    mounted () {

    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    methods: {
        ...mapMutations({
            setUpdatePlate: `SET_UPDATE_PLATE`
        }),
        UdateStayLevelYJ () {
            let _this = this
            updateStayLevelById({
                stayLevel: {
                    leId: _this.leftInfo.leId,
                    leTrainingNum: _this.leTrainingNum
                }
            }).then(results => {
                this.isedit = 0
                this.training.leTrainingNum = _this.leTrainingNum
                this.setUpdatePlate()
                this.$router.push(`/projectFiles/Library/setUpTraining?training=${this.training}`)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
