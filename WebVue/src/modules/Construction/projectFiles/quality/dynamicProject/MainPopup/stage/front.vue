<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'施前情况'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">监理</p>
            <div class="analyItemCon">
                <div class="fl">
                    <rx-viewer  style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)" >
                                <span class="standardImg pointer" @click="currentIndex(1)">标准</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="fl">
                    <rx-viewer  style="position:relative">
                        <div class="mr10">
                            <img :src="src | smallImg(80, 80)" >
                            <span class="sceneImg">现</span>
                        </div>
                    </rx-viewer>
                </div>
                 <div class="fl">
                   <rx-viewer  style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)" >
                                <span class="sceneImg" onclick="getContent(8)">景</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-12" v-if="clickIndex == 1 && !this.flag">
                    <span  style="display: inline;">1、检验标准：材料码放标识牌粘贴位于材料集中处上方正确，要求高度距离地面上方1.5米，粘贴端正。
                    2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。
                    </span>
                </p>
                <span class="circlemark circlemark-lightGreen">已</span>
            </div>

        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">项经</p>
            <div class="analyItemCon">
                <div class="fl">
                    <rx-viewer  style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)" >
                                <span class="standardImg pointer" @click="currentIndex(1)">标准</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="fl">
                    <rx-viewer  style="position:relative">
                        <div class="mr10">
                            <img :src="src | smallImg(80, 80)" >
                            <span class="sceneImg">现</span>
                        </div>
                    </rx-viewer>
                </div>
                 <div class="fl">
                   <rx-viewer  style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)" >
                                <span class="sceneImg" onclick="getContent(8)">景</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-12" v-if="clickIndex == 1 && !this.flag">
                    <span  style="display: inline;">1、检验标准：材料码放标识牌粘贴位于材料集中处上方正确，要求高度距离地面上方1.5米，粘贴端正。
                    2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。
                    </span>
                </p>
                <span class="circlemark circlemark-lightGreen">已</span>
           </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon">
               <el-rate
                v-model="rateValue"
                @change="rateChange"
                >
                </el-rate>
                <div v-if="rateValue" class="mt5 mb5">
                    <span v-for="(item, index) of rateContent" :key="index" class="LinkCell mr5" @click="rateContent(index)">{{item}}</span>
                </div>
                <div class="clearfix mb10">
                    <textarea name="textarea" class="col-md-10"></textarea>
                </div>
                <rx-upload
                    :data="{id: 11}"
                    :init="{class: 1, mime: 1}"
                    :elStyle="{width:'100px', height: '100px'}"
                    @success="successUpload">
                    <div class="uiImgUpload uiImgUpload-gblock mr10">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">设计师</p>
            <div class="analyItemCon">
               <el-rate
                v-model="rateValue"
                @change="rateChange"
                >
                </el-rate>
                <div v-if="rateValue" class="mt5 mb5">
                    <span v-for="(item, index) of rateContent" :key="index" class="LinkCell mr5" @click="rateContent(index)">{{item}}</span>
                </div>
                <div class="clearfix mb10">
                    <textarea name="textarea" class="col-md-10"></textarea>
                </div>
                <rx-upload
                    :data="{id: 11}"
                    :init="{class: 1, mime: 1}"
                    :elStyle="{width:'100px', height: '100px'}"
                    @success="successUpload">
                    <div class="uiImgUpload uiImgUpload-gblock mr10">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">工人</p>
           <div class="analyItemCon">
               <el-rate
                v-model="rateValue"
                @change="rateChange"
                >
                </el-rate>
                <div v-if="rateValue" class="mt5 mb5">
                    <span v-for="(item, index) of rateContent" :key="index" class="LinkCell mr5" @click="rateContent(index)">{{item}}</span>
                </div>
                <div class="clearfix mb10">
                    <textarea name="textarea" class="col-md-10"></textarea>
                </div>
                <rx-upload
                    :data="{id: 11}"
                    :init="{class: 1, mime: 1}"
                    :elStyle="{width:'100px', height: '100px'}"
                    @success="successUpload">
                    <div class="uiImgUpload uiImgUpload-gblock mr10">
                        <a href="javascript:">
                            <span type="file" value="" class="file"></span>
                            <em class="bgIcon file-ico"></em>
                        </a>
                    </div>
                </rx-upload>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p>
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            fourIndex: undefined,
            data: [],
            clickIndex: 0, // 点击时的下标
            flag: true,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg',
            rateValue: null,
            rateContent: []
        }
    },
    created () {
        this.data = [
            'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg',
            'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg',
            'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg'
        ]
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        currentIndex (index) {
            if (this.flag) {
                this.clickIndex = index
            }
            this.flag = !this.flag
        },
        rateChange () {
            if (this.rateValue === 1) {
                this.rateContent = ['材料劣质', '质量极差', '暴力施工', '无法直视']
            } else if (this.rateValue === 2 || this.rateValue === 3) {
                this.rateContent = ['材料可以', '质量好', '施工良好', '干净整洁']
            } else if (this.rateValue === 4 || this.rateValue === 5) {
                this.rateContent = ['材料完美', '质量保障', '施工完美', '干净整洁']
            }
        }
    }
}
</script>
<style lang="">
    .standardImg {
        width: 28px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        position: absolute;
        top: 1px;
        left: 1px;
        background: #000;
        opacity: 0.6;
        color: #fff;
        border-radius: 5px;
        padding: 0 1px;
    }
    .sceneImg {
        width: 28px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        position: absolute;
        top: 1px;
        left: 1px;
        background: #f00;
        opacity: 0.6;
        color: #fff;
        border-radius: 5px;
        padding: 0 1px;
    }
    .LinkCell {
         background: #f1f1f1;
        padding: 2px 5px;
        border: 1px solid #f1f1f1;
        border-radius: 15px;
    }
    .LinkCellActive {
        background: #ffeed6;
        color: #ff9600;
        border-color: #ff9600;
    }
</style>
