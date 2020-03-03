
<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'预留名称'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="pr5">
            <div class="analyItem threeCha">
                <p class="analyItemTit tx-center bggreen_cw">订单</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">订单号</span><span class="uiLink_new uiLink_newHu" data-orderid="14404760-3073-4b4f-add5-dc6908f06cc3">139CD0030003</span></p>
                    <p class="fl col-md-8"><span class="cLightGray pr8">工程地址</span><span><span title="成都市龙泉驿区龙城一号">成都市龙泉驿区龙城..</span></span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">项经</span><span>钟树林</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">联系方式</span><span>15198009138</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">要求日期</span><span>2019-11-06</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">合同号</span><span>CE19018</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">总计</span><span>11175.00元</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">材料</span><span>5种</span></p>
                </div>
            </div>
        </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem threeCha">
                <p class="analyItemTit tx-center bggreen_cw">下单</p>
                <div class="analyItemCon">
                <p class="fl col-md-4"><span class="cLightGray pr8">项经</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">下单日期</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8"></span><span>项经</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
                </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">接单</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">材商</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">用时</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">备货</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">材商</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">用时</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">送货</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">材商</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>预留</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">用时</span><span>预留</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">收货</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">项经</span><span>钟树林</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>2019/11/13 12点</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">用时</span><span>23H</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">收货类型</span><span class="cGreen">手动确认收货</span></p>
                    <p class="fl col-md-8"><span class="cRed">注：超过72小时自动收货</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
                <span class="roleFixed">项经</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bggreen_cw">项评材</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">项经</span><span>钟树林</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>2019/11/13 12点</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">评星</span><span class="cGreen">5星</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no">
                </div>
                <span class="roleFixed">项经</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center  bggreen_cw">财务</p>
            <div class="analyItemCon relative">
                <p class="fl col-md-4 cGreen"><span class="cLightGray pr8">已支付</span><span>11175.00</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>2019/11/14 11点</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">用时</span><span>24H</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes active">
                    <input type="text" class="judge-span judge-no ">
                </div>
                <span class="roleFixed">财务</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center bgblue_cw">客评材</p>
            <div class="analyItemCon relative">
                    <p class="fl col-md-4"><span class="cLightGray pr8">客户</span><span>--</span></p>
                <p class="fl col-md-4"><span class="cLightGray pr8">日期</span><span>--</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">评星</span><span class="cRed">未评</span></p>
                <div class="judge-div">
                    <input type="text" class="judge-span judge-yes ">
                    <input type="text" class="judge-span judge-no">
                </div>
                <span class="roleFixed">客户</span>
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
            <div class="analyItemCon relative">
                <p class="fl col-md-4"><span class="cLightGray pr8">进度</span><span class="cGreen">已支付</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">项评材</span><span class="cGreen">5星</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">客评材</span><span class="cRed">未评</span></p>
                    <div class="judge-div">
                        <input type="text" class="judge-span judge-yes">
                        <input type="text" class="judge-span judge-no ">
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
