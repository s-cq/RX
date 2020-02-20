<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'保护确认'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) of protectList" :key="index" >
            <p class="analyItemTit tx-center">{{item.name | truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="fixedBox">
                    <rx-viewer :images="item.data" class="ml10">
                        <div class="clearfix">
                            <div class="fl mr10">
                                <img :src="item.data | smallImg(88, 88)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                    <div>
                        {{item.content}}
                    </div>
                    <rx-switch v-model="value" ></rx-switch>
                </div>
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
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '步行梯扶手保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '门保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
                    content: '1、检验标准：公共区域墙面保护先使用5-8CM防火板做基层保护，面层使用公司PVC加棉材质保护膜，保护膜粘贴密实、平整、牢固。2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。'
                },
                {
                    name: '半成品保护',
                    data: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554712893ApCxhii2KA.jpg',
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
