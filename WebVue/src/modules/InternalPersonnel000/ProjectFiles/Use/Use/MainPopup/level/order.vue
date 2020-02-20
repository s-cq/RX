<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'订单'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="18">
            <div class="analyItem anItemBor" @click="clickFourShow(0)">
                <p class="analyItemTit tx-center">摄像头</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单个数</span><span>2个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单未完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成率</span><span>50%</span></p>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="clickFourShowSafety(0)">
                <p class="analyItemTit tx-center">安全订单</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单个数</span><span>2个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单未完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成率</span><span>50%</span></p>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="clickFourShowImage(0)">
                <p class="analyItemTit tx-center">形象订单</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单个数</span><span>2个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单未完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成率</span><span>50%</span></p>
                </div>
            </div>
            <div class="analyItem anItemBor" @click="clickFourShowEnvironment(0)">
                <p class="analyItemTit tx-center">环境订单</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单个数</span><span>2个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单未完成</span><span>1个</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">订单完成率</span><span>50%</span></p>
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
            <camera-detail v-if="fourIndex === currentIndex" :key='currentIndex'></camera-detail>
            <image-detail v-if="fourIndexImage === currentIndexImage" :key='currentIndexImage'></image-detail>
            <environment-detail v-if="fourIndexEnvironment === currentIndexEnvironment" :key='currentIndexEnvironment'></environment-detail>
            <safety-detail v-if="fourIndexSafety === currentIndexSafety" :key='currentIndexSafety'></safety-detail>
        </transition-group>
    </div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import CameraDetail from './four/cameraDetail'
import ImageDetail from './four/imageDetail'
import EnvironmentDetail from './four/environmentDetail'
import SafetyDetail from './four/safetyDetail'
import {
// getStayStaySalaryHistoryDetail
} from '../../Resources/Api'
export default {
    components: {
        CameraDetail,
        ImageDetail,
        EnvironmentDetail,
        SafetyDetail
    },
    data () {
        return {
            body: {},
            fourIndex: undefined,
            currentIndex: 0,
            fourIndexImage: undefined,
            currentIndexImage: 0,
            fourIndexEnvironment: undefined,
            currentIndexEnvironment: 0,
            fourIndexSafety: undefined,
            currentIndexSafety: 0,
            month: '',
            year: ''
        }
    },
    created () {
    // this.GetUserTradeDetailByUserCardFn()
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
        // GetUserTradeDetailByUserCardFn () {
        //     this.body = {}
        //     if (Number(this.leftInfo.MONTH) < 10) {
        //         this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
        //     } else {
        //         this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
        //     }
        //     getStayStaySalaryHistoryDetail({
        //         user_card_no: this.leftInfo.u_kahao,
        //         pointTime: this.pointTime
        //     }).then(results => {
        //         this.body = results.data.Body
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // },
        // 点击四段
        clickFourShow (index) {
            this.fourIndex = index
            this.currentIndex = index
        },
        // 点击四段
        clickFourShowImage (index) {
            this.fourIndexImage = index
            this.currentIndexImage = index
        },
        // 点击四段
        clickFourShowEnvironment (index) {
            this.fourIndexEnvironment = index
            this.currentIndexEnvironment = index
        },
        // 点击四段
        clickFourShowSafety (index) {
            this.fourIndexSafety = index
            this.currentIndexSafety = index
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
        }
    }
}
</script>
