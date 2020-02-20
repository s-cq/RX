<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'在施'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
         <div class="analyItem">
            <p class="analyItemTit tx-center">临电线布设</p>
            <div class="analyItemCon">
                <div class="fl">
                    <rx-viewer style="position:relative">
                        <div class="clearfix">
                            <div class="mr10">
                                <img :src="src | smallImg(80, 80)">
                                <span class="standardImg pointer">标</span>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-10">
                    <span  style="display: inline;">1、检验标准：材料码放标识牌粘贴位于材料集中处上方正确，要求高度距离地面上方1.5米，粘贴端正。
                    2、拍照标准：距离3米拍摄照片，照片必须有墙、顶、地全景。
                    </span>
                </p>
                <span class="circlemark circlemark-lightGreen">已</span>
           </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">共</span>
                    <span style="color:red;">1</span>&nbsp;项
                </p>
                <span class="circlemark circlemark-lightGreen">
                    已
                </span>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data () {
        return {
            fourIndex: undefined,
            clickIndex: 0, // 点击时的下标
            flag: true,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1554356888tjKGjcXAZb.jpg'
        }
    },
    created () {
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
</style>
