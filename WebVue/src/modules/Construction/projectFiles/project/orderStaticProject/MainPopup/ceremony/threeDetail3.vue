<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'举行'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">图片上传</p>
            <div class="analyItemCon">

                <div class="clearfix mt10 fl">
                    <rx-upload
                        class="fl"
                        :data="{id: 11}" :init="{class: 1, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer :images="data" class="fl ml10">
                        <div class="clearfix">
                            <div v-for="(item, index) of data" :key="index" class="fl mr10">
                                <img :src="item | smallImg(78, 78)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">文字描述</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <textarea style="width:80%"></textarea>
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
            data: [],
            value1: null,
            starList1: []
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
<style>
    .LinkCell   {
        background: #f1f1f1;
        padding:2px 5px;
        border: 1px solid #f1f1f1;
        border-radius: 15px;
        cursor: pointer;
    }
    .LinkCellActive {
        background: #ffeed6;
        color:  #ff9600;
        border-color: #ff9600;
    }
</style>
