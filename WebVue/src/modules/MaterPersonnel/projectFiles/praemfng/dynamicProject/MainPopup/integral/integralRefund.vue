<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'退单'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437">
                <div class="analyItem">
                    <p class="analyItemTit tx-center">退单</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="jdedit == 0">
                            <span class="cLightGray pr8">次数</span>
                            <span >{{penalty[0]?penalty[0].deductNum:0}}</span>
                        </p>
                        <p class="col-md-4" v-if="jdedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>{{penalty[0]?penalty[0].deductFraction:0}}分</span>
                        </p>
                        <p class="col-md-4" v-if="jdedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="integralnum"></span>
                        </p>
                        <p class="col-md-4" v-if="jdedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="integralScope"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="jdedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="jdedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="jdedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="SaveIntegral()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="jdedit = 0">
                    </div>
                    </div>
                </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                                <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { saveIntegralInfo } from '../../Resources/Api'
export default {
    data () {
        return {
            jdedit: 0,
            penalty: [],
            integralnum: 0,
            integralScope: 0,
            id: ''
        }
    },

    created () {
        this.penalty = this.$route.query.integr
        console.log(this.penalty[0])
        if (this.penalty[0]) {
            this.integralnum = this.penalty[0].deductNum
            this.integralScope = this.penalty[0].deductFraction
            this.id = this.penalty[0].id
        } else {
            this.penalty = [{'deductNum': 0, 'deductFraction': 0}]
        }
    },
    methods: { ...mapMutations({
        setUpdatePlate: `SET_UPDATE_PLATE`
    }),
    SaveIntegral () {
        saveIntegralInfo({
            id: this.id,
            leveId: this.leftInfo.leLevel,
            deductNum: this.integralnum,
            deductFraction: this.integralScope,
            integralType: 1,
            integralName: '退单'
        }).then(result => {
            this.jdedit = 0
            this.penalty[0].deductNum = this.integralnum
            this.penalty[0].deductFraction = this.integralScope
            this.setUpdatePlate()

            this.$router.push(`/projectFiles/praemfng/integralRefund?integr=${this.penalty}`)
        })
    }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leftInfo () {

        }
    }
}


</script>
<style>
    .mensbvrh{
        position: absolute;
    }
</style>
