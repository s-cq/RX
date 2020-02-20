<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'客户评价'}"></three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem anItemBor">
                <p class="analyItemTit tx-center">投诉</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">3个</span><span></span></p>
                </div>
            </div>

            <div class="analyItem anItemBor" @click="clickFourShowOne(0)">
                <p class="analyItemTit tx-center">一星</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">1个</span><span></span></p>

                </div>
            </div>
            <div class="analyItem anItemBor" @click="clickFourShowTwo(0)">
                <p class="analyItemTit tx-center">二星</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">1个</span><span></span></p>

                </div>
            </div>
            <div class="analyItem anItemBor" @click="clickFourShowThree(0)">
                <p class="analyItemTit tx-center">三星</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">1个</span><span></span></p>

                </div>
            </div>

            <div class="analyItem anItemBor" @click="clickFourShowFour(0)">
                <p class="analyItemTit tx-center">四星 </p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">2个</span><span></span></p>

                </div>
            </div>
            <div class="analyItem anItemBor" @click="clickFourShowFive(0)">
                <p class="analyItemTit tx-center">五星 </p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">3个</span><span></span></p>
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

        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <onestar-detail v-if="fourIndexOnestar === currentIndexOnestar" :key='currentIndexOnestar'></onestar-detail>
            <twostar-detail v-if="fourIndexTwostar === currentIndexTwostar" :key='currentIndexTwostar'></twostar-detail>
            <threestar-detail v-if="fourIndexThreestar === currentIndexThreestar" :key='currentIndexThreestar'></threestar-detail>
            <fourstar-detail v-if="fourIndexFourstar === currentIndexFourstar" :key='currentIndexFourstar'></fourstar-detail>
            <fivestar-detail v-if="fourIndexFivestar === currentIndexFivestar" :key='currentIndexFivestar'></fivestar-detail>
        </transition-group>

    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'

import OnestarDetail from './four/onestarDetail'
import TwostarDetail from './four/twostarDetail'
import ThreestarDetail from './four/threestarDetail'
import FourstarDetail from './four/fourstarDetail'
import FivestarDetail from './four/fivestarDetail'
import {
} from '../../Resources/Api'
// import { getTechnicsDetail } from '../../../Resources/Api/index'
export default {
    components: {
        OnestarDetail,
        TwostarDetail,
        ThreestarDetail,
        FourstarDetail,
        FivestarDetail
    },
    data () {
        return {
            fourIndexOnestar: undefined,
            currentIndexOnestar: 0,
            fourIndexTwostar: undefined,
            currentIndexTwostar: 0,
            fourIndexThreestar: undefined,
            currentIndexThreestar: 0,
            fourIndexFourstar: undefined,
            currentIndexFourstar: 0,
            fourIndexFivestar: undefined,
            currentIndexFivestar: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {

    },
    methods: {
    // 点击四段
        clickFourShowOne (index) {
            this.fourIndexOnestar = index
            this.currentIndexOnestar = index
        },
        // 点击四段
        clickFourShowTwo (index) {
            this.fourIndexTwostar = index
            this.currentIndexTwostar = index
        },
        // 点击四段
        clickFourShowThree (index) {
            this.fourIndexThreestar = index
            this.currentIndexThreestar = index
        },
        // 点击四段
        clickFourShowFour (index) {
            this.fourIndexFourstar = index
            this.currentIndexFourstar = index
        },
        // 点击四段
        clickFourShowFive (index) {
            this.fourIndexFivestar = index
            this.currentIndexFivestar = index
        }
    }

}
</script>
