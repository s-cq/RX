<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'检查上传'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目总检</p>
            <div class="analyItemCon">
                <rx-viewer :images="projectImg" class="fl" v-if="projectImg.length > 0">
                    <div class="clearfix">
                        <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of projectImg" :key="imgindex">
                            <img :src="imgitem | smallImg(80, 80)" >
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload
                    v-if="projectList.length === 0"
                    :data="{id: 11}"
                    :init="{class: 2, mime: 1}"
                    :elStyle="{width:'80px', height: '80px'}"
                    @success="successUploadProjectList" class="fl">
                    <div class="fl uiImgUpload uiImgUpload-gblock">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">竣工验收</p>
            <div class="analyItemCon">
                <rx-viewer :images="completedImg" class="fl" v-if="completedImg.length > 0">
                    <div class="clearfix">
                        <div class="fl mr10" :option={}  v-for="(imgitem, imgindex) of completedImg" :key="imgindex">
                            <img :src="imgitem | smallImg(80, 80)" >
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload
                    v-if="completedList.length === 0"
                    :data="{id: 11}"
                    :init="{class: 2, mime: 1}"
                    :elStyle="{width:'80px', height: '80px'}"
                    @success="successUploadCompleted" class="fl">
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
export default {
    data () {
        return {
            projectImg: [], // 项目图片
            completedImg: [], // 竣工图片
            projectList: [], // 项目数组
            completedList: [] // 竣工数组
        }
    },
    created () {
        this.getPhototList()
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 上传图片
        successUploadProjectList (value) {
            this.projectImg.push(value.src)
        },
        successUploadCompleted (value) {
            this.completedImg.push(value.src)
        }
    }
}
</script>
