<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'固定材料类别'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270">
        <div  class="analyItem anItemBor" v-for="(item,index) in twoToThreeInfo.items" :key="index"  @click="clickFourShow(0, item.shopId)">
            <p class="analyItemTit tx-center">{{ item.shopName }}</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">种类</span><span>{{ item.matCount }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">供应商</span><span>{{ item.userCount }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">计额</span><span>{{ item.planMoney }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">配送金额</span><span>{{ item.totalMoney }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">配比</span><span>--</span></p>
                <span class="circlemark circlemark-green">正</span>
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
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 产品详情 -->
        <rx-product-info v-if="fourIndex === 0" :key="0" :shopId="fourShopId"></rx-product-info>
    </transition-group>
</div>
</template>
<script>
// vuex
import { mapGetters } from 'vuex'

// components
import rxProductInfo from './productInfo.vue'
export default {
    data () {
        return {
            fourIndex: undefined,
            fourShopId: ''
        }
    },
    components: {
        rxProductInfo
    },
    created () {
    },
    computed: {
        ...mapGetters(['userInfo', 'twoToThreeInfo'])
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        clickFourShow (index, id) {
            this.fourIndex = index
            this.fourShopId = id
        }
    },
    watch: {
    }
}
</script>
