<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'监理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-if="penalty.length>0">
            <div class="analyItem"  v-for="(item,index) in penalty" :key="index">
                <p class="analyItemTit tx-center"></p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">{{item.pmDepositRemark}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">监理</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="jdedit == 0">
                            <span class="cLightGray pr8">金额</span>
                            <span >大于5000</span>
                        </p>
                        <p class="col-md-4" v-if="jdedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>-50分</span>
                        </p>
                        <p class="col-md-4" v-if="jdedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="lisOrder"></span>
                        </p>
                        <p class="col-md-4" v-if="jdedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="jisOrder"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="jdedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="jdedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="jdedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelJD()">
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
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            jdedit: 0,
            penalty: [],
            lisOrder: '200',
            jisOrder: '-20分'
        }
    },
    created () {
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
