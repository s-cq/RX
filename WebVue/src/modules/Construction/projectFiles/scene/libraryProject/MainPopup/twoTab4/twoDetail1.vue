<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'名片'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">设置</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">选择</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p class="col-md-3">
                    <input type="button" value="确认" class="uiBtn-small uiBtn-blue"/>
                </p>
                <p class="col-md-3">
                    <span>标准一</span>
                </p>
                <p class="col-md-3">
                    <el-switch
                        v-model="value1"
                        active-color="#09f"
                        inactive-color="#ddd"
                        active-value="100"
                        inactive-value="0">
                    </el-switch>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">标准一</p>
            <div class="analyItemCon">
                <p class="col-md-3 lineH80">
                    <span class="cLightGray pr8">标准</span>
                </p>
                <p class="col-md-3">
                    <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"  class="fl ml10"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                </p>
                <p class="col-md-3 lineH80">
                    <span>不合格</span>
                </p>
                <p class="col-md-3 lineH80">
                    <el-select v-model="value3" placeholder="请选择">
                        <el-option v-for="item in options1" :key="item.value"  :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            options: [
                {
                    value: '标准一',
                    label: '标准一'
                }],
            options1: [
                {
                    value: '轻度罚款',
                    label: '轻度罚款'
                },
                {
                    value: '中度罚款',
                    label: '中度罚款'
                },
                {
                    value: '重度罚款',
                    label: '重度罚款'
                }],
            value: '',
            value1: '',
            value3: '',
            data: []
        }
    },
    created () {
    },
    methods: {

    }
}
</script>
<style lang="">
    .analyItemCon p.lineH80 {
        line-height: 80px;
    }
</style>
