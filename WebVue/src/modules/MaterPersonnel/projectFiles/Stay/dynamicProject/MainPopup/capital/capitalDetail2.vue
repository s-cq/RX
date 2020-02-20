<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'押金'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">续交</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已续押</span>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">申请中</span>
                    <span>0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cRed" style="font-weight: bolder">请您在集团工程财务系统新版保证金版块进行操作【押金续押】业务</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">待缴</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">待缴</span>
                    <span>20000.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">退还</p>
            <div class="analyItemCon clearfix">
                <div class="col-md-12">
                    <div class="col-md-9">
                        <p class="col-md-3 mr10">
                            <span class="cLightGray pr8">已退回</span>
                            <span class="ng-binding">0.00</span>
                        </p>
                        <p class="col-md-3 mr10">
                            <span class="cLightGray pr8">申请中</span>
                            <span class="ng-binding">0.00</span>
                        </p>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGray pr8"></span>
                        <span class="choice-span current hide">办理</span>
                    </div>
                </div>
                <div class="fl mt10 lizhinew">
                    <div class="fl mr20">
                         <rx-upload
                            :data="{id: 11}"
                            :init="{class: 1, mime: 1}"
                            :elStyle="{width:'80px', height: '70px'}"
                            @success="successUpload">
                            <div class="fl uiImgUpload uiImgUpload-gblock mr10">
                                <a href="javascript:">
                                    <span type="file" value="" class="file"></span>
                                    <em class="bgIcon file-ico"></em>
                                </a>
                            </div>
                        </rx-upload>
                        <p class="tx-center cBlue cPoi">上传押金条</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">剩余押金</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">剩余</span>
                    <span>0.00</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon clearfix">
                <div class="col-md-3 mb10">
                    <span class="cLightGray pr8">级别</span>
                    <span class="ng-binding">4</span>
                </div>
                <div class="col-md-3 mb10">
                    <span class="cLightGray pr8">应缴</span>
                    <span class="ng-binding">20000.00</span>
                </div>
                <div class="col-md-3 mb10">
                    <span class="cLightGray pr8">已缴</span>
                    <span class="ng-binding">0.00</span>
                </div>
                <div class="col-md-3 mb10">
                    <span class="cLightGray pr8">待缴</span>
                    <span class="ng-binding">20000.00</span>
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

        }
    },
    created () {
    },
    methods: {
        successUpload (value) {
            console.log(value)
        }
    }
}
</script>
