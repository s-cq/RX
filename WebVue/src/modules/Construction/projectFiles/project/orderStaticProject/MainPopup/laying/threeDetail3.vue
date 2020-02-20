<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'放线实施'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) of protectList" :key="index" >
            <p class="analyItemTit tx-center">{{item.name | truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="fixedBox">
                    <rx-viewer :images="item.data" style="position:relative" class="fl">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="item.data | smallImg(80, 80)">
                                <span class="standardStyle">标</span>
                            </div>
                        </div>
                    </rx-viewer>
                    <div class="fl">
                        <rx-viewer :images="item.senceImg" style="position:relative" :option={}>
                            <div class="clearfix tx-center">
                                <div class="mr10">
                                    <img :src="item.senceImg | smallImg(80, 80)">
                                    <span class="standardStyle">现</span>
                                </div>
                            </div>
                        </rx-viewer>
                    </div>
                    <rx-upload
                        class="fl"
                        :data="{id: item.id,index: index}" :init="{class: 2, mime: 1}"
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
                 <div>{{item.content}}}</div>
                 <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            value: 0,
            protectList: [
                {
                    name: '公共区域墙面保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    senceImg: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397410dB3KXxKi54.png',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '步行梯扶手保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    senceImg: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397410dB3KXxKi54.png',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '门保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    senceImg: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397410dB3KXxKi54.png',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '半成品保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    senceImg: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1571397410dB3KXxKi54.png',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                }
            ]
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
<style lang="">
    .fixedBox {
        display: flex;
        align-items: center;
    }
</style>
