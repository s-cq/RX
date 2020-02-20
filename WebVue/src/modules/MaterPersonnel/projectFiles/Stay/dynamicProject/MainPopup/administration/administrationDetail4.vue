<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'离职'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">性质</p>
            <div class="analyItemCon clearfix">
                <label class="uiRadio12">
                    <input type="radio" name="radios" value="0" class="uiRadio12-input laheiChecked" checked="checked">拉黑</label>
                <label class="uiRadio12">
                    <input type="radio" name="radios" value="1" class="uiRadio12-input laheiChecked">个人</label>
                <label class="uiRadio12">
                    <input type="radio" name="radios" value="2" class="uiRadio12-input laheiChecked">公司</label>
            </div>
        </div>
       <div class="analyItem">
            <p class="analyItemTit tx-center">资料</p>
            <div class="analyItemCon clearfix">
                <div class="fl mr20">
                    <p class="tx-center" id="dowload_doc">离职协议</p>
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
                    <p class="tx-center cBlue cPoi">打印</p>
                </div>
                <p class="fl col-md-11">
                    <textarea class="mt5 col-md-10" placeholder="离职备注" style="height: 95px;"></textarea>
                </p>
                <p class="clearfix" style="right: 30px;">
                    <span class="fl lizhiSubmit">
                        <input type="button" class="uiBtn-blue uiBtn-normal" value="提交" style="">
                    </span>
                </p>
            </div>
        </div>
        <div class="analyItem zhibaoContent">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon clearfix">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">质保内</span>
                    <span class="ng-binding"></span>
                </p>
                <p class="fr">
                    <rx-switch></rx-switch>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">押金</p>
            <div class="analyItemCon clearfix">
                <div class="fl mr20">
                    <p class="tx-center">押金</p>
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
                <p class="fr" style="margin-top:40px;">
                    <span class="fr">
                        <input type="button" class="uiBtn-blue uiBtn-normal" value="提交" style="">
                    </span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">退押金</p>
            <div class="analyItemCon clearfix">
                <p class="">
                    <span class="cLightGray pr8">退还金额</span>
                    <input class="p-money-inp" type="text" style="margin-left: 3px;">
                </p>
                <div class="mt10">
                    <span class="cLightGray pr8">备注内容</span>
                    <textarea class=""></textarea>
                    <input type="button" class="uiBtn-blue uiBtn-normal fr" value="退还押金">
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
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
