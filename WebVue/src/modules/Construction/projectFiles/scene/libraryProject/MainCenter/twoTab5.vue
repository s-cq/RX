<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <p class="col-md-4">
                    <strong class="cGreen fz14">在施</strong>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('twoTab5TwoDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施前</p>
            <div class="analyItemCon">
                <div class="fl mr20">
                    <rx-viewer :images="data">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-8 clearfix">
                    <p class="col-md-4 lineH62"><span>形象</span></p>
                    <p class="col-md-4 lineH62"><span>形象标识</span></p>
                    <p class="col-md-4 lineH62"><span>安全出口</span></p>
                </div>
                <span class="circlemark circlemark-green">启</span>
                <!-- <span class="circlemark circlemark-lightRed">关</span> -->
                <span class="fixedmark fr cGreen">标准一</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab5TwoDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施中</p>
            <div class="analyItemCon">
                <div class="fl mr20">
                    <rx-viewer :images="data">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-8 clearfix">
                    <p class="col-md-4 lineH62"><span>形象</span></p>
                    <p class="col-md-4 lineH62"><span>形象标识</span></p>
                    <p class="col-md-4 lineH62"><span>安全出口</span></p>
                </div>
                <span class="circlemark circlemark-green">启</span>
                <!-- <span class="circlemark circlemark-lightRed">关</span> -->
                <span class="fixedmark fr cGreen">标准一</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab5TwoDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">施尾</p>
            <div class="analyItemCon">
                <div class="fl mr20">
                    <rx-viewer :images="data">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-8 clearfix">
                    <p class="col-md-4 lineH62"><span>形象</span></p>
                    <p class="col-md-4 lineH62"><span>形象标识</span></p>
                    <p class="col-md-4 lineH62"><span>安全出口</span></p>
                </div>
                <span class="circlemark circlemark-green">启</span>
                <!-- <span class="circlemark circlemark-lightRed">关</span> -->
                <span class="fixedmark fr cGreen">标准一</span>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            data: []
        }
    },
    created () {
        this.data = [
            'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
        ]
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
<style lang="">
    .fixedmark{
        margin-top: 47px;
    }
</style>

