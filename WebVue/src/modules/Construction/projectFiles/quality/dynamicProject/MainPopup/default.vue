<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'准备各小阶段详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">主案图纸</p>
            <div class="analyItemCon">
                <div class="fl">
                    <rx-viewer :images="data" style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)" :alt="index">
                                <span class="standardImg pointer" @click="currentIndex(1)">标准</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="fl">
                    <rx-viewer :images="data" style="position:relative">
                        <div class="mr10">
                            <img :src="src | smallImg(80, 80)" :alt="index">
                            <span class="sceneImg">现</span>
                        </div>
                    </rx-viewer>
                </div>
                 <div class="fl">
                   <rx-viewer :images="data" style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)" :alt="index">
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
            <p class="analyItemTit tx-center">阶段名称</p>
            <div class="analyItemCon"></div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon"></div>
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
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg'
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
</style>
