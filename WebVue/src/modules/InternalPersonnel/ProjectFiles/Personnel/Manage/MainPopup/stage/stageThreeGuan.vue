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
        <rx-stageFourXL v-if="fourIndex === 1" :key="1"></rx-stageFourXL>
        <rx-stageFourPD v-if="fourIndex === 2" :key="2"></rx-stageFourPD>
        <rx-stageFourXG v-if="fourIndex === 3" :key="3"></rx-stageFourXG>
        <rx-stageFourSW v-if="fourIndex === 4" :key="4"></rx-stageFourSW>
        <rx-stageFourNL v-if="fourIndex === 5" :key="5"></rx-stageFourNL>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import rxStageFourXL from './four/stageFourXL'
import rxStageFourPD from './four/stageFourPD'
import rxStageFourXG from './four/stageFourXG'
import rxStageFourSW from './four/stageFourSW'
import rxStageFourNL from './four/stageFourNL'
export default {
    components: {
        rxStageFourXL, // 学历
        rxStageFourPD, // 品德
        rxStageFourXG, // 性格
        rxStageFourSW, // 思维
        rxStageFourNL // 能力
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
