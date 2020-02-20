<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'投诉'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437">
                <div class="analyItem">
                    <p class="analyItemTit tx-center">轻度</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="qdedit == 0">
                            <span class="cLightGray pr8">次数</span>
                            <span >1</span>
                        </p>
                        <p class="col-md-4" v-if="qdedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>-10分</span>
                        </p>
                        <p class="col-md-4" v-if="qdedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="lisOrder"></span>
                        </p>
                        <p class="col-md-4" v-if="qdedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="jisOrder"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="qdedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="qdedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="qdedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJD()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="qdedit = 0">
                    </div>
                    </div>
                </div>
                    <div class="analyItem">
                    <p class="analyItemTit tx-center">中度</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="cedit == 0">
                            <span class="cLightGray pr8">次数</span>
                            <span >1</span>
                        </p>
                        <p class="col-md-4" v-if="cedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>-10分</span>
                        </p>
                        <p class="col-md-4" v-if="cedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="lisOrder"></span>
                        </p>
                        <p class="col-md-4" v-if="cedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="jisOrder"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="cedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="cedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="cedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJD()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="cedit = 0">
                    </div>
                    </div>
                </div>
                    <div class="analyItem">
                    <p class="analyItemTit tx-center">重度</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="hedit == 0">
                            <span class="cLightGray pr8">次数</span>
                            <span >1</span>
                        </p>
                        <p class="col-md-4" v-if="hedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>-10分</span>
                        </p>
                        <p class="col-md-4" v-if="hedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="lisOrder"></span>
                        </p>
                        <p class="col-md-4" v-if="hedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="jisOrder"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="hedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="hedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="hedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJD()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="hedit = 0">
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
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            qdedit: 0,
            cedit: 0,
            hedit: 0,
            penalty: [],
            lisOrder: '2',
            jisOrder: '-20分'
        }
    },
    created () {
        this.GetDeposit()
    },
    methods: {

    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetProjectManagerResult()
        }
    }
}


</script>
<style>
    .mensbvrh{
        position: absolute;
    }
</style>
