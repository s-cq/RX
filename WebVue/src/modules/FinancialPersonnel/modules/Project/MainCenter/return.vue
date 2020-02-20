<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span class="cGreen">0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span class="cGreen">0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span class="cGreen">0%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span class="cGreen">0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span class="cGreen">0个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span class="cGreen">0%</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link tag="div" exact :to="routerPath('returnDetailThree?index= '+index+'')" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in sceneList" :key="index">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">预留</span>
                    <span>0</span>
                </p>
                <!-- <p class="col-md-4">
                    <span class="cGreen">{{item.currenStage}}</span>
                </p> -->
                 <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('returnDetailThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon"></div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: '',
    data () {
        return {
            sceneList: [
                {
                    name: '物业办理',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '资料确认'
                },
                {
                    name: '现场保护',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '保护修改'
                },
                {
                    name: '形象布置',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '形象修改'
                },
                {
                    name: '临电布设',
                    creatName: '系统',
                    time: '2020-01-17',
                    currenStage: '临电实施'
                },
                {
                    name: '现场放线',
                    creatName: '',
                    time: '2020-01-17',
                    currenStage: '放线修改'
                },
                {
                    name: '开工仪式',
                    creatName: '肖辉',
                    time: '2020-01-17',
                    currenStage: '物品准备'
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
