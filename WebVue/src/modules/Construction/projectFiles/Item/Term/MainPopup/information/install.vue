<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name: '安装'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">步骤</p>
            <div class="analyItemCon">
                <p class="col-md-12" v-for="(item, index) in installList" :key="index"><span class="cLightGray pr8">步骤{{ index+1 }}</span><span>{{ item }}</span></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-4">
                        <rx-upload
                            :data="{id: 11}"
                            :init="{class: 1, mime: 1}"
                            :elStyle="{width:'70px', height: '70px'}"
                            @success="successUpload">
                            <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                                <a href="javascript:">
                                    <span type="file" value="" class="file"></span>
                                    <em class="bgIcon file-ico"></em>
                                </a>
                            </div>
                        </rx-upload>
                    </div>
                    <div class="col-md-4 mt20"><span class="cRed">请对着安装好的摄像头拍照并上传</span></div>
                    <div class="col-md-4 mt20 tx-center">
                        <el-button type="primary">提交</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px;">
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
            installList: [
                '打孔', '装底座', '拧螺丝', '装摄像头', '通电', '拍照'
            ]
        }
    },
    created () {

    },
    methods: {
        successUpload (value) {
            // do what ...
            console.log(value)
            /**
             * data: {id: 11}
             * init: {class: 1, mime: 1}
             * src: "https://rxjy-test.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1562402405N9k4EByCdHMAx4hBzbwxd2Nr.jpg"
             */
        }
    }
}
</script>
