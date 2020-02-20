<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'管理'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
            <div class="analyItem ">
                <p class="analyItemTit tx-center">协助</p>
                <div class="analyItemCon">
                    <div class="textBox" v-if="isedit == 0">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">未签(加分)</span>
                            <span name="le_self_unsigned_score">0</span>
                        </p>
                          <p class="col-md-5">
                            <span class="cLightGray pr8">已签(加分)</span>
                            <span name="le_self_unsigned_score"></span>
                        </p>
                    </div>
                    <div class="analyItemCon" v-if="isedit == 1">
                        <p class="col-md-5">
                            <span class="cLightGray pr8">未签(加分):</span><input type="text" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                        <p class="col-md-5">
                            <span class="cLightGray pr8">已签(加分):</span><input type="text" class="width60 evaluateStandard" name="set_le_self_unsigned_score" value="">
                        </p>
                    </div>
                    <div  class="analyItemCon" v-if="isedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="isedit = 1">
                    </div>
                    <div  class="analyItemCon" v-if="isedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="isedit=0">
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
export default {
    data () {
        return {
            isedit: 0
        }
    },
    created () {

    },
    methods: {
    }
}
</script>
