<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'标准详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">图片</p>
            <div class="analyItemCon">
                <rx-viewer :images="data" class="fl">
                    <div class="clearfix">
                        <div class="col-md-4" v-for="(item, index) of data" :key="index">
                            <img :src="item | smallImg(80, 80)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
                <rx-upload  :data="{id: 11}" :init="{class: 1, mime: 1}"  class="fl ml10"
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
        <div class="analyItem">
            <p class="analyItemTit tx-center">标准名称</p>
            <div class="analyItemCon">
                <input type="text" id="dataNote" class="widthB60" placeholder="标准一">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">描述</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <textarea class="col-md-10">1、验收标准：现场入户门进入后的左侧或者右侧上面粘贴；要求高度标识牌下沿距离地面1.5米，粘贴端正。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。
                    </textarea>
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
                    <input type="button" class="uiBtn-red uiBtn-normal" value="删除">
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
        this.data = [
            'http://wenes01.oss-cn-beijing.aliyuncs.com/Project/Image/2017/10/20/14291087049232.jpg'
        ]
    },
    methods: {

    }
}
</script>
