<template>
<div class="layerRtb layerRtb-threecolumn">
    <!-- <three-title :title="{name:$route.query.name}"></three-title> -->
    <three-title :title="{name:'【'+stageFilter(leftInfo.AfterMarketState)+'阶段_'+qualityListItem.shopName+'】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <!-- 审计 -->
        <div v-if="leftInfo.AfterMarketState==1" class="analyItem anItemBor" v-for="(item, index) in marStageThree.items" :key="index" @click="clickFourShow(0)">
            <p class="analyItemTit tx-center">订单{{index + 1}}</p>
            <div class="analyItemCon">
                <div class="col-md-3 materImgParent">
                        <rx-viewer :images="item.shopPhoto">
                            <div class="clearfix mt10">
                                <div class="fl relative">
                                    <img :src="item.shopPhoto | smallImg(100, 100)">
                                </div>
                            </div>
                        </rx-viewer>
                </div>
                <div class="col-md-9 rialsTab">
                    <p><span class="tx-fb fz14 mr10 materName">不锈钢线条</span> <span class="materBrand">地方品牌</span></p>
                    <div class="clearfix matSpec">
                        <p class="cLightGray fl">规格：</p> <p style="margin: 3px;">镜面本色宽度≤22mm </p>
                    </div>
                    <div class="clearfix choiceParameter">
                        <p class="cLightGray fl">型号：</p>
                        <p style="width: auto;">201</p>
                    </div>
                </div>
                <p style="color: red;font-size: 18px; font-weight: 700;position: absolute;right: 10px;top: 4px;">
                    <span>￥</span>
                    <span class="fz16 matPrice product">15.00</span> <span>元/m</span>
                </p>
                <p style="color: red; font-weight: 700; position: absolute; right: 10px; bottom: 5px;">
                    <span>总量/已用量：</span>
                    <span class="fz16">67.9/0</span>
                </p>
            </div>
        </div>
        <div v-else class="analyItem anItemBor" v-for="(item, index) in marStageThree.items" :key="index" @click="clickFourShow(0)">
            <p class="analyItemTit tx-center">订单{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">订单号</span><br>
                    <span class="cBlue">111ZZ0490004</span>
                </p>
                <p class="fl col-md-2">
                    <span class="cLightGray pr8">姓名</span><br>
                    <span>东明</span>
                </p>
                <p class="fl col-md-2">
                    <span class="cLightGray pr8">金额</span><br>
                    <span>1,492.00</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">支付时间</span><br>
                    <span>2019-12-02</span>
                </p>
                <p class="fl col-md-2">
                    <span class="cLightGray pr8">状态</span><br>
                    <span >预留</span>
                </p>
                    <span class="circlemark circlemark-Green layerui-title" data-title="已结清">预留</span>
             </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <!-- 审计 -->
        <div v-if="leftInfo.AfterMarketState==1"  class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总金额</span>
                    <span>预留元</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">产品数</span>
                    <span>预留</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">材料商数</span>
                    <span>预留</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">预留</span></span>
            </div>
        </div>
        <div v-else  class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">可用</span>
                    <span>预留</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额合计</span>
                    <span>预留</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">预留</span></span>
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
import { mapGetters } from 'vuex'
import marstageFour from './four/marstageFour'
import { GetProductDetailItemsToFinanceByShopID } from '../../Resources/Api'
export default {
    components: {
        marstageFour
    },
    data () {
        return {
            qualityListItem: {}, // 二段信息
            marStageThree: {}, // 三段信息
            fourIndex: undefined
        }
    },
    created () {
        this.qualityListItem = this.$route.query.qualityListItem
        console.log(this.$route)
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        GetProductDetailItemsToFinanceByShopID () {
            GetProductDetailItemsToFinanceByShopID({
                rwdID: this.leftInfo.orderno, // 项目单号
                shopId: this.qualityListItem.shopId// 店铺id
            }).then(results => {
                if (Number(results.data.statusCode) === 1) {
                    this.marStageThree = results.data.Body
                }
            }).catch(() => {})
        },
        stageFilter (stage) {
            var stageName = ''
            switch (stage) {
            case 1:
                stageName = '审计'
                break
            case 2:
                stageName = '准备'
                break
            case 3:
                stageName = '在施'
                break
            case 4:
                stageName = '竣工'
                break
            case 5:
                stageName = '完工'
                break
            case 6:
                stageName = '历史'
                break
            }
            return stageName
        },
        clickFourShow (index) {
            this.fourIndex = index
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
