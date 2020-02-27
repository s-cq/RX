<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
            <div class="analyItem anItemBor" @click="FourShow(1)">
                <p class="analyItemTit tx-center">学历</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">本科</span>
                    </p>
                     <span class="circlemark circlemark-lightRed">未</span>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="FourShow(2)">
                <p class="analyItemTit tx-center">品德</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">人品内容</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">管品内容</span>
                    </p>
                    <span class="circlemark circlemark-lightRed">未</span>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="FourShow(3)">
                <p class="analyItemTit tx-center">性格</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">性格内容</span>
                    </p>
                    <span class="circlemark circlemark-lightRed">未</span>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="FourShow(4)">
                <p class="analyItemTit tx-center">思维</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">思维内容</span>
                    </p>
                    <span class="circlemark circlemark-lightRed">未</span>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="FourShow(5)">
                <p class="analyItemTit tx-center">能力</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">业能</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">管能</span>
                    </p>
                    <span class="circlemark circlemark-lightGreen">完</span>
                </div>
            </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">已完成</span>
                    <span>2项</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">未完成</span>
                    <span>3项</span>
                </p>
                 <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <rx-levelFourXL v-if="fourIndex === 1" :key="1"></rx-levelFourXL>
        <rx-levelFourPD v-if="fourIndex === 2" :key="2"></rx-levelFourPD>
        <rx-levelFourXG v-if="fourIndex === 3" :key="3"></rx-levelFourXG>
        <rx-levelFourSW v-if="fourIndex === 4" :key="4"></rx-levelFourSW>
        <rx-levelFourNL v-if="fourIndex === 5" :key="5"></rx-levelFourNL>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import rxLevelFourXL from './four/levelFourXL'
import rxLevelFourPD from './four/levelFourPD'
import rxLevelFourXG from './four/levelFourXG'
import rxLevelFourSW from './four/levelFourSW'
import rxLevelFourNL from './four/levelFourNL'
export default {
    components: {
        rxLevelFourXL, // 学历
        rxLevelFourPD, // 品德
        rxLevelFourXG, // 性格
        rxLevelFourSW, // 思维
        rxLevelFourNL // 能力
    },
    data () {
        return {
            fourIndex: undefined
        }
    },

    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
    },
    methods: {
        FourShow (index) {
            this.fourIndex = index
        },
        clickFourShow () {
            this.fourIndex = undefined
        }
    },
    watch: {
        leftInfo () {
        },
        $route () {
        }
    }
}
</script>
