<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'离职'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFour()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">性质</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <el-radio v-model="radio" label="1">拉黑</el-radio>
                    <el-radio v-model="radio" label="2">个人</el-radio>
                    <el-radio v-model="radio" label="3">公司</el-radio>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">资料</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <textarea class="col-md-10 pl5" placeholder="离职备注"></textarea>
                </p>
                <p class="col-md-10 mt10">
                    <span class="cLightGray pr8 fl">离职协议</span>
                    <rx-upload
                        class="fl"
                        :data="{}"
                        :init="{class: 10, mime: 1}"
                        :elStyle="{width:'90px', height: '80px'}"
                        @success="successUpload">
                        <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                            <a href="javascript:">
                                <span type="file" value="" class="file"></span>
                                <em class="bgIcon file-ico"></em>
                            </a>
                        </div>
                    </rx-upload>
                    <rx-viewer class="fl" v-if="dataImg !== ''">
                       <div class="look_imgHover fl relative" style="width:78px;height:78px;" >
                            <img :src="dataImg">
                            <div class="upload_finish_div">
                                <div class="upload_finish_bg"></div>
                                <div class="upload_finish_linksm">
                                    <div class="dis-il-block">
                                        <a href="javascript:" class="ImgBtn enlarge_viewer enlarge_link" :data-src="dataImg"></a>
                                        <a href="javascript:" class="ImgBtn delect_link" @click="delectImg(index)"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </rx-viewer>
                </p>
                <p class="fr train-div">
                    <input type="button" value="提交" class="uiBtn-blue uiBtn-small">
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
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
            radio: '0', // 性质选项
            dataImg: '' // 资料图片
        }
    },
    created () {

    },
    methods: {
        // 上传资料
        successUpload (value) {
            this.dataImg = value.src
        }
    }
}
</script>
<style lang="scss" scoped>
    .upload_finish_linksm a {
        height: 30px;
    }
</style>
