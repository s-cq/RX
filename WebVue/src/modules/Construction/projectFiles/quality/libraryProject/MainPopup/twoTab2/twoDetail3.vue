<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'竣检'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">实木栏板及扶手</p>
            <div class="analyItemCon">
                <rx-viewer :images="data" class="fl">
                    <div class="clearfix">
                        <div class="col-md-4" v-for="(item, index) of data" :key="index">
                            <img :src="item | smallImg(80, 80)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
                <div class="fl ml20">
                    <p class="col-md-8">
                        <span>安装立杆</span>
                    </p>
                    <p class="col-md-8">
                        <span>按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</span>
                    </p>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">实施</p>
            <div class="analyItemCon">
                <rx-viewer :images="data" class="fl">
                    <div class="clearfix">
                        <div class="col-md-4" v-for="(item, index) of data" :key="index">
                            <img :src="item | smallImg(80, 80)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
                <div class="fl ml20">
                    <p class="col-md-12">
                        <span>暂无内容</span>
                    </p>
                </div>
                <div class="fr" style="line-height:85px;margin-right:80px">
                    <span class="cLightGray pr8">完成时间</span>
                    <span>--</span>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣检验收</p>
            <div class="analyItemCon">
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
                <textarea class="col-md-4" placeholder="请输入" style='height:80px'></textarea>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
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
            data: [],
            checkList: ['选中且禁用', '复选框 A'],
            options: [
                {
                    value: '项经',
                    label: '项经'
                },
                {
                    value: '客户',
                    label: '客户'
                },
                {
                    value: '监理',
                    label: '监理'
                },
                {
                    value: '设计师',
                    label: '设计师'
                },
                {
                    value: '工人',
                    label: '工人'
                }],
            value: ''
        }
    },
    created () {
        setTimeout(() => {
            this.data = [
                'http://wenes01.oss-cn-beijing.aliyuncs.com/Project/Image/2017/10/20/14291087049232.jpg'
            ]
        }, 1000)
    },
    methods: {
        successUpload (value) {
            console.log(value)
        }
    }
}
</script>
