<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">名片</p>
            <div class="analyItemCon">
                <div style="display:flex;align-items:center;height:80px;">
                    <div style="width:30%">
                        <p>编号：289</p>
                        <p>名称：<span> 实木栏板及扶手</span></p>
                    </div>
                    <div style="width:38%">
                        <p>步骤：0/2</p>
                        <p>上传时间：--</p>
                    </div>
                    <div style="width:20%">
                        <rx-viewer :images="data3" style="position:relative">
                            <div class="clearfix">
                                <div class="col-md-4" v-for="(item, index) of data3" :key="index">
                                    <img :src="item | smallImg(60, 60)" :alt="index">
                                </div>
                            </div>
                            <span class="imgClickStyle" @click="isShow = !isShow">标准</span>
                        </rx-viewer>

                    </div>
                    <div class="tx-center">
                        <p>待完成</p>
                        <span  class="orderDetailBtn">详情</span>
                    </div>
                </div>
                <div class="col-md-12 stantard mt5" v-if="isShow">标准:按照施工图进行放线，按栏板或栏杆底面的斜度，预制木扶手预装由上而下进行，先预装起步弯头，及连接第一步扶手的折弯弯头，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">工序</p>
            <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <rx-viewer :images="data3">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data3" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-4 ml5">
                    <span id="spanName">安装立杆</span>
                </p>
                <p class="col-md-8 ml5">
                    <span class="width180 fl omit" title="按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。" id="spanContent">按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</span>
                </p>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣检</p>
             <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <rx-viewer :images="data3">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data3" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-4 ml5">
                    <span id="spanName">安装立杆</span>
                </p>
                <p class="col-md-8 ml5">
                    <span class="width180 fl omit" title="按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。" id="spanContent">按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</span>
                </p>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('twoTab2TwoDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">评价</p>
            <div class="analyItemCon clearfix" style="display:flex;align-items:center;">
                <div class="col-md-2">
                    <rx-viewer :images="data3">
                        <div class="clearfix">
                            <div class="col-md-4" v-for="(item, index) of data3" :key="index">
                                <img :src="item | smallImg(60, 60)" :alt="index">
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <p class="col-md-4 ml5">
                    <span id="spanName">安装立杆</span>
                </p>
                <p class="col-md-8 ml5">
                    <span class="width180 fl omit" title="按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。" id="spanContent">按照施工图进行放线，按栏板或栏杆底面的斜度，进行分段预装，分段预装检查无误对扶手和栏杆上固定件，固定间距控制在16cm以内。</span>
                </p>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            data3: [],
            isShow: false
        }
    },
    created () {
        setTimeout(() => {
            this.data3 = [
                'https://proj01.oss-cn-beijing.aliyuncs.com/common/15590980606M7sdkCH5f.png'
            ]
        }, 1000)
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
<style >
    .orderDetailBtn {
        background: #43ccec;
        color: #fff;
        display: block;
        width: 45px;
        border-radius: 4px;
        margin: 0 auto;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
    }
    .imgClickStyle {
        background: rgba(0,0,0,0.7);
        border-radius: 5px;
        padding: 2px 5px;
        color: #fff;
        z-index: 9999;
        cursor: pointer;
        position: absolute;
        bottom: 5px;
    }
</style>
