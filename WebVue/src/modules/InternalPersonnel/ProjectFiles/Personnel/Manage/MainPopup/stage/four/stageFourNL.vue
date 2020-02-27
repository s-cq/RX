<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'能力'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">业能</p>
            <div class="analyItemCon">
                <div class="col-md-10">
                  <div class="fl">
                        <rx-viewer :images="imgList" >
                            <div class="clearfix tx-center">
                                <div class="mr10 fl" v-for="(imgitem, imgindex) of imgList" :key="imgindex" style="position:relative">
                                    <img :src="imgitem | smallImg(80, 80)">
                                </div>
                            </div>
                        </rx-viewer>
                    </div>
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
                </div>
                 <p class="col-md-12 mt20" v-if="bzedit==1">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                          <el-input v-model="input" placeholder="输入业能"></el-input>
                        </span>
                </p>
                <div class="col-md-2 "  v-if="bzedit === 0">
                        <img  style="position: absolute; right: 10px;top: 40px;" src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="bzedit=1">
                </div>
                <div class="col-md-2 imgbox " v-if="bzedit === 1">
                        <img style="position: absolute; right: 40px;top: 40px;" src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img style="position: absolute; right: 10px;top: 40px;" src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="bzedit=0">
                </div>
            </div>
        </div>
            <!-- <div class="analyItem" >
                <p class="analyItemTit tx-center">业能</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">本科</span>
                    </p>
                </div>
            </div> -->
            <div class="analyItem" >
                <p class="analyItemTit tx-center">管能</p>
                <div class="analyItemCon">
                    <p class="col-md-12 mb20">
                        <el-checkbox-group v-model="checkListGuan">
                            <el-checkbox label="1" >组织</el-checkbox>
                            <el-checkbox label="2" >协调</el-checkbox>
                            <el-checkbox label="3" >决策</el-checkbox>
                            <el-checkbox label="4" >沟通</el-checkbox>
                        </el-checkbox-group>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8 col-md-1">备注:</span>
                        <span class="col-md-8">
                         <el-input  v-model="inputGuan" placeholder="输入备注"></el-input>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <el-button class="fr" type="primary">提交</el-button>
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
            checkListGuan: ['1', '3'],
            inputGuan: '',
            bzedit: 0,
            input: '',
            imgList: ['https://proj01.oss-cn-beijing.aliyuncs.com/common/1564111203BsnPKKQ8M4.png']
        }
    },

    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
    },
    methods: {
        successUpload (value) {
            debugger
            this.imgList.push(value.src)
        }
    },
    watch: {
        leftInfo () {
        },
        $route () {
        }
    }
}
</script>
