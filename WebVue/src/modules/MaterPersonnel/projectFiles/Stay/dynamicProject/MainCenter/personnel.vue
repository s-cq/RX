<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">工龄</span>
                    <span class="pSeniority">0月</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">级别</span>
                    <span class="cGreen rankClass">4</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">地区</span>
                    <span class="regionClass">汉街</span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">入口</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">身份</span>
                    <span class="pSeniority">已验证</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">进展</span>
                    <span class="cGreen rankClass">15</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">最近登录</span>
                    <span class="regionClass">2019/9/18 10:06</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">信息</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                    <p>
                        <span class="cLightGray pr8">姓名</span>
                        <span class="pName">张国平</span>
                    </p>
                    <p>
                        <span class="cLightGray pr8">状态</span>
                        <span class="userStateClass">临时</span>
                    </p>
                </div>
                <div class="col-md-3">
                    <p>
                        <span class="cLightGray pr8">押金</span>
                        <span class="pledgeMoneyClass">0</span>
                    </p>
                </div>
                <div class="col-md-3">
                    <p class="workerNumClass" style="display: none;">
                        <span class="cRed pr8">工人差</span>
                        <span class="workerNewNumClass">0人</span>
                    </p>
                    <p class="projectNumClass">
                        <span class="cRed pr8">项目差</span>
                        <span class="projectNewNumClass">1个</span>
                    </p>
                </div>
                <span class="circlemark circlemark-purple">待</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">职务</p>
            <div class="analyItemCon">
                <div class="col-md-2 mt10">
                    <img src="https://proj01.oss-cn-beijing.aliyuncs.com/common/1568698952Gch46Qnbmz.jpg" height="80" width="60" class="imageClass">
                </div>
                <div class="col-md-8">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">姓名</span>
                        <span class="pName">张国平</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">职务</span>
                        <span>项目经理</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">卡号</span>
                        <span class="pCardNo">g00006062</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8 ">邀请码</span>
                        <span class="InvitationNo">g00006062</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">工龄</span>
                        <span class="pSeniority">0月</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">级别</span>
                        <span class="rankClass">4</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">地区</span>
                        <span class="regionClass">汉街</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">入职</span>
                        <span class="dataTimeClass">2019-9-17</span>
                    </p>
                </div>
                <div class="col-md-2" style="padding-top: 30px;">
                    <img style="width:45px;height: 45px;" alt="二维码" class="QRclass" src="https://proj01.oss-cn-beijing.aliyuncs.com/camera/56255b39-7510-465c-8532-46774e468120.png">
                </div>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">级别</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">级别</span>
                    <span class="cGreen w700 fz18 rankClass">4</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">接单量</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">接单额</span>
                    <span>0</span>
                </p>
                <span class="circlemark">
                    <i class="cGreen w700 fz18 rankClass">4</i>
                </span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail4')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">培训</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">函授</span>
                    <span class="cRed">未开启</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">面授</span>
                    <span class="cRed">未开启</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('personnelPersonnelDetail5')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">通知</p>
            <div class="analyItemCon">
                <div class="col-md-10 pt5" style="padding-left:15px">
                    <p class="fl col-md-8"><span class="cLightGray pr8">标题</span><span class="informTitleClass"></span></p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">统计</span><span class="cRed noticeCountClass">0</span>
                        <span class="cGreen countClass">1</span>/<span class="countSumClass">1</span>
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

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
