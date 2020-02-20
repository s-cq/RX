<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'储值卡'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem anItemBor" v-for="(item, index) in cardList" :key="index" @click="clickFourShow(0)">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="pr8 cLightGray">储值卡</span>
                    <span>{{item.cardno}}</span>
                </p>
                <p class="col-md-6">
                    <span class="pr8 cLightGray">材料种类</span>
                    <span>{{item.type}}</span>
                </p>
                <p class="col-md-6">
                    <span class="pr8 cLightGray">总金额</span>
                    <span>{{item.money.toFixed(2)}}</span>
                </p>
                <p class="col-md-6">
                    <span class="pr8 cLightGray">余额</span>
                    <span>{{item.balance.toFixed(2)}}</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
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
        <marcard-four v-if="fourIndex === 0" :key="0"></marcard-four>
    </transition-group>
</div>
</template>
<script>
import marcardFour from './four/marcardFour'
export default {
    components: {
        marcardFour
    },
    data () {
        return {
            fourIndex: undefined,
            cardList: [{
                name: '洁具店铺',
                cardno: '20200108021',
                type: 1,
                money: 91.00,
                balance: 490
            }, {
                name: '油工店铺',
                cardno: '20200108031',
                type: 3,
                money: 36.00,
                balance: 520
            },
            {
                name: '壁纸店铺',
                cardno: '20200108018',
                type: 1,
                money: 51.00,
                balance: 430
            },
            {
                name: '灯具店铺',
                cardno: '20200108042',
                type: 2,
                money: 910.00,
                balance: 20
            }]
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
