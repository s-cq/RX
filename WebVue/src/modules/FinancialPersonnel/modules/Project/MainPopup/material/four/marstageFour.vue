
<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'预留名称'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem threeCha">
                <p class="analyItemTit tx-center bggreen_cw">订单</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span class="uiLink_new uiLink_newHu" >预留</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span><span title="预留">预留..</span></span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">预留</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">预留</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">预留</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
        <div class="analyItem" v-if="$route.query.name === '已收货'">
            <p class="analyItemTit tx-center">现场送达照片</p>
            <div class="analyItemCon">
                <rx-viewer :images="sceneImgList">
                    <div class="clearfix mt10">
                        <div class="fl ml5" v-for="(item, index) of sceneImgList" :key="index">
                            <img :src="item | smallImg(100, 100)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
                <div class="timePos cBlue" @click="clickFiveShow(0)">送达时间：2020-01-15</div>
            </div>
        </div>
        <div class="analyItem" v-if="$route.query.name === '已收货'">
            <p class="analyItemTit tx-center">评价</p>
            <div class="analyItemCon">
                <div>
                    <el-rate
                        v-model="starValue"
                        disabled
                    ></el-rate>
                </div>
                <ul class="mt5 mb10 clearfix">
                    <li class="evlText">配送超时</li>
                </ul>
                <textarea class="col-md-11" readonly placeholder="暂无评价内容"></textarea>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">预留名称</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
    </div>
    <!-- 五段段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <marcard-five v-if="fiveIndex === 0" :key="0"></marcard-five>
    </transition-group>
</div>
</template>
<script>
import marcardFive from '../five/marcardFive'
export default {
    components: {
        marcardFive
    },
    data () {
        return {
            starValue: 5, // 星星Value
            fiveIndex: undefined,
            sceneImgList: [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/202011513273680.jpg?x-oss-process=image/resize,m_fill,h_105,w_115,limit_0',
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/202011513273680.jpg?x-oss-process=image/resize,m_fill,h_105,w_115,limit_0'
            ]
        }
    },
    created () {

    },
    methods: {
        clickFiveShow (index) {
            this.fiveIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
    .statePos,
    .timePos {
        height: 25px;
        position: absolute;
        right: 20px;
        font-weight: 700;
        cursor: pointer;
        top: 27px;
        font-size: 14px;
    }
    .timePos {
        cursor: inherit;
        top: 10px;
        font-size: 12px;
    }
    .evlText {
        cursor: pointer;
        background-color: #ddd;
        border-radius: 5px;
        padding: 1px 5px;
        float: left;
    }
</style>
