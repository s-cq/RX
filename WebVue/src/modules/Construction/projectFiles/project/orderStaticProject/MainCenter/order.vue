<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <span class="cGreen pr8" :data-title='currentState'>{{leftInfo.state}}</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目名片</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLightGray pr8">单号</span> <span>{{leftInfo.id}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">名称</span> <span>{{leftInfo.name}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">阶段</span> <span>{{leftInfo.state}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">经理</span> <span>张三</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">监理</span> <span>李四</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">项目经理</span> <span>王五</span></div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <!-- 开工仪式 -->
        <rx-ceremony v-if="leftInfo.id == 1"></rx-ceremony>
        <!-- 开工日期 -->
        <rx-data v-if="leftInfo.id == 2"></rx-data>
        <!-- 物业办理 -->
        <rx-dandle v-if="leftInfo.id == 3"></rx-dandle>
        <!-- 现场保护 -->
        <rx-protect v-if="leftInfo.id == 4"></rx-protect>
        <!-- 现场交底 -->
        <rx-disclose v-if="leftInfo.id == 5"></rx-disclose>
        <!-- 摄像头 -->
        <rx-camera v-if="leftInfo.id == 6"></rx-camera>
        <!-- 形象布置 -->
        <rx-image v-if="leftInfo.id == 7"></rx-image>
        <!-- 临电布设 -->
        <rx-temporary v-if="leftInfo.id == 8"></rx-temporary>
        <!-- 现场放线 -->
        <rx-laying v-if="leftInfo.id == 9"></rx-laying>
        <!-- 安全订单 -->
        <rx-safe v-if="leftInfo.id == 10"></rx-safe>
        <!-- 环境订单 -->
        <rx-environmental v-if="leftInfo.id == 11"></rx-environmental>
        <!-- 形象订单 -->
        <rx-imageorder v-if="leftInfo.id == 12"></rx-imageorder>
        <!-- 巡检订单 -->
        <rx-inspection v-if="leftInfo.id == 13"></rx-inspection>
        <!-- 洽商订单 -->
        <rx-negotiation v-if="leftInfo.id == 14"></rx-negotiation>
        <!-- 延期订单 -->
        <rx-delay v-if="leftInfo.id == 15"></rx-delay>
        <!-- 投诉订单 -->
        <rx-complaint v-if="leftInfo.id == 16"></rx-complaint>
        <!-- 罚款订单 -->
        <rx-fine v-if="leftInfo.id == 17"></rx-fine>
        <!-- 总检订单 -->
        <rx-general v-if="leftInfo.id == 18"></rx-general>
        <!-- 材料确认订单 -->
        <rx-materialconfirm v-if="leftInfo.id == 19"></rx-materialconfirm>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import rxCeremony from './projectstage/ceremony' // 开工仪式
import rxData from './projectstage/data' // 开工日期
import rxDandle from './projectstage/dandle' // 物业办理
import rxProtect from './projectstage/protect' //  现场保护
import rxDisclose from './projectstage/disclose' // 现场交底
import rxCamera from './projectstage/camera' // 摄像头
import rxImage from './projectstage/image' // 形象布置
import rxTemporary from './projectstage/temporary' // 临电布设
import rxLaying from './projectstage/laying' // 现场放线
import rxImageorder from './projectstage/imageorder' // 形象订单
import rxSafe from './projectstage/safe' // 安全订单
import rxEnvironmental from './projectstage/environmental' // 环境订单
import rxInspection from './projectstage/inspection' // 巡检订单
import rxNegotiation from './projectstage/negotiation' // 洽商订单
import rxDelay from './projectstage/delay' //  延期订单
import rxComplaint from './projectstage/complaint' // 投诉订单
import rxFine from './projectstage/fine' // 罚款订单
import rxGeneral from './projectstage/general' // 总检订单
import rxMaterialconfirm from './projectstage/materialconfirm' // 材料确认订单
export default {
    components: {
        rxCeremony,
        rxData,
        rxDandle,
        rxProtect,
        rxDisclose,
        rxCamera,
        rxImage,
        rxTemporary,
        rxLaying,
        rxImageorder,
        rxSafe,
        rxEnvironmental,
        rxInspection,
        rxNegotiation,
        rxDelay,
        rxComplaint,
        rxFine,
        rxGeneral,
        rxMaterialconfirm
    },
    data () {
        return {
            currentState: '当前阶段'
        }
    },
    created () {
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])

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
    },
    watch: {
    },
    filters: {
    }
}
</script>
