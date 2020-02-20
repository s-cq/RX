<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'延期单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "18">
        <div class="analyItem">
            <p class="analyItemTit tx-center">工期</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">开工日期</span>
                    <span>2019-10-9</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">天数</span>
                    <span>60 + 4天</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">天数</p>
            <div class="analyItemCon">
                <p class="flex">
                    <span class="cLightGray pr8">请输入延期单上的天数</span>
                    <span><input type="text" value="" id="txtdelay" class="width80"></span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">上传延期单</p>
             <div class="analyItemCon">
                <div class="clearfix mt10 fl">
                    <rx-viewer :images="data" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(item, index) of data" :key="index" class="fl mr10">
                                <img :src="item | smallImg(78, 78)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                    <rx-upload
                        class="fl"
                        :data="{id: 11}" :init="{class: 2, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
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
export default {
    data () {
        return {
            data: []
        }
    },
    created () {

    },
    methods: {
        successUpload (value) {
            this.data.push(value.src)
        }
    }
}
</script>
