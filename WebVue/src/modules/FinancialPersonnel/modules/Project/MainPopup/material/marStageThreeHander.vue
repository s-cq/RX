<template>
<div class="layerRtb layerRtb-threecolumn">
    <!-- <three-title :title="{name:$route.query.name}"></three-title> -->
    <three-title :title="{name:'预留'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
        <ul class="clearfix uiTab3">
            <li :class="{'uiTab3-active':flg==1}" data-title="材料支款待办"><a @click="flg=1" href="javascript:">待办</a></li>
            <li :class="{'uiTab3-active':flg==2}" data-title="材料支款记录"><a @click="flg=2" href="javascript:">记录</a></li>
        </ul>
    </div>
    <div v-if="flg===1" class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem anItemBor" v-for="(item, index) in stageOrderList" :key="index" @click="clickFourShow(0)">
            <p class="analyItemTit tx-center">订单{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留名称</span><br>
                    <span class="cGreen">预留</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留名称</span><br>
                    <span class="cGreen">预留</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留名称</span><br>
                    <span class="cGreen">预留</span>
                </p>
            </div>
        </div>
    </div>
    <div v-if="flg===2" class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
    <div class="analyItem anItemBor" v-for="(item, index) in stageOrderList" :key="index" @click="clickFourShow(0)">
        <p class="analyItemTit tx-center">订单{{index + 1}}</p>
        <div class="analyItemCon">
            <p class="fl col-md-4">
                <span class="cLightGray pr8">预留名称</span><br>
                <span class="cGreen">预留名称</span>
            </p>
            <p class="fl col-md-4">
                <span class="cLightGray pr8">预留名称</span><br>
                <span class="cGreen">预留名称</span>
            </p>
            <p class="fl col-md-4">
                <span class="cLightGray pr8">预留名称</span><br>
                <span class="cGreen">预留名称</span>
            </p>
        </div>
    </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">总金额</span>
                    <span>25517.00元</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">储值卡</span>
                    <span>1个</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">材料种类</span>
                    <span>10种</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">余额</span>
                    <span>25517.00元</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <marstage-four v-if="fourIndex === 0" :key="0"></marstage-four>
    </transition-group>
</div>
</template>
<script>
import marstageFour from './four/marstageFour'
export default {
    components: {
        marstageFour
    },
    data () {
        return {
            flg: 1,
            fourIndex: undefined,
            stageOrderList: [{
                orderno: 'HZ19043022S',
                time: 'HZ19043022S',
                type: 1,
                src: 'https://www.wenes.cn/wenesCenter/images/project/demo_img1.jpg',
                marName: '王贵龙',
                stage: '待接单'
            },
            {
                orderno: 'HZ19043022S',
                time: 'HZ19043022S',
                type: 2,
                src: 'https://www.wenes.cn/wenesCenter/images/project/demo_img1.jpg',
                marName: '王贵龙',
                stage: '待接单'
            },
            {
                orderno: 'HZ19043022S',
                time: 'HZ19043022S',
                type: 3,
                src: 'https://www.wenes.cn/wenesCenter/images/project/demo_img1.jpg',
                marName: '王贵龙',
                stage: '待接单'
            }
            ]
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    },
    watch: {
        $route () {
            this.flg = 1
        }
    }
}
</script>
<style lang="scss">
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
</style>
