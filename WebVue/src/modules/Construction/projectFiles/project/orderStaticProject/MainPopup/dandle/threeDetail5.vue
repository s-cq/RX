<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'开工证'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工证</p>
            <div class="analyItemCon">
                <div class="analyItemCon">
                    <rx-viewer :images="data" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(item, index) of data" :key="index" class="fl mr10">
                                <img :src="item | smallImg(88, 88)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                    <rx-upload
                        :data="{id: 11}"
                        :init="{class: 1, mime: 1}"
                        :elStyle="{width:'90px', height: '90px'}"
                        @success="successUpload" class="fl">
                        <div class="fl uiImgUpload uiImgUpload-gblock">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">开工日期</p>
            <div class="analyItemCon">
                <el-date-picker
                    v-model="value"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            data: [],
            value: ''
        }
    },
    created () {

    },
    methods: {
        successUpload (value) {
            console.log(value)
            this.data.push(value.src)
        }
    }
}
</script>
