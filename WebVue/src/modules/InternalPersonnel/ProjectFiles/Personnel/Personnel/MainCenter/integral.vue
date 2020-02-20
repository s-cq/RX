<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <!-- <span class="cLightGray pr8">连降培训</span> -->
                        <span v-if="integralStatus === 0">正常</span>
                        <span v-if="integralStatus === 1">异常</span>
                        <span v-if="integralStatus === 2">问题</span>
                        <span v-if="integralStatus === 3">整改</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="85">
            <div class="analyItem">
                <p class="analyItemTit tx-center">积分</p>
                <div class="analyItemCon">
                    <p class="col-md-6">
                        <input type="button" value="普级" :class="['uiBtn-normal', currentInput === 0 ? 'uiBtn-blue' : 'uiBtn-gray']" @click="getIntegralTwoDataFn(1,0)">
                        <span class="cLightGray pr8">积分</span>
                        <span class="cRed">{{userIntegral}}分</span>
                    </p>
                    <p class="col-md-6">
                        <input type="button" value="管级" :class="['uiBtn-normal', currentInput === 1 ? 'uiBtn-blue' : 'uiBtn-gray']" @click="getIntegralTwoDataFn(2,1)">
                        <span class="cLightGray pr8">积分</span>
                        <span class="cGreen">{{guanUserIntegral}}分</span>
                    </p>
                </div>
            </div>
            <router-link tag="div" :to="{path:routerPath('inteThree?index'), query: {integralType:item.integralTypeId}}" class="analyItem anItemBor" active-class="anItemBor-active" exact v-for="(item, index) in classification" :key="index">
                <p class="analyItemTit tx-center" :data-title="item.integralDescription">{{item.integralDescription | truncate(5)}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr10">奖</span>
                        <span class="cGreen">{{item.integralIncrease}}分</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr10">罚</span>
                        <span class="cRed">{{item.integralDeduction}}分</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr10">总计</span>
                        <span class="cGreen fz14">{{item.integralMoney}}分</span>
                    </p>
                </div>
            </router-link>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="{path: routerPath('inteHandleThree'), query: {userIntegral: Number( currentInput === 0 ? userIntegral : guanUserIntegral), fa:fa, integralStatus: integralStatus}}" class="analyItem anItemBor" active-class="anItemBor-active" exact v-for="(item, index) in text" :key="index">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <div>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">{{currentInput === 0 ? '普级' : '管级'}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">奖</span>
                            <span class="cGreen">{{jiang}}分</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">罚</span>
                            <span class="cRed">{{fa}}分</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">持有</span>
                            <span class="cGreen fz14">{{ currentInput === 0 ? userIntegral : guanUserIntegral}}分</span>
                        </p>
                    </div>
                    <!-- <div>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">管级</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">奖</span>
                            <span class="cGreen">2分</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">罚</span>
                            <span class="cRed">-1分</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr10">持有</span>
                            <span class="cGreen fz14">1分</span>
                        </p>
                    </div> -->
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { getIntegralTwoData } from '../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            text: ['月评', '竣工'],
            currentInput: 0, // 当前的按钮
            userIntegral: 0,
            guanUserIntegral: 0, // 管级积分
            integralStatus: null, // 当前的积分状态
            integralRecording: {},
            body: {},
            jiang: 0,
            fa: 0,
            classification: []
        }
    },
    created () {
        this.getIntegralTwoDataFn(1, 0)
        this.getIntegralTwoDataFn(2, 0)
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'updatePlate'])
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
        getIntegralTwoDataFn (flag, index) {
            this.fa = 0
            this.jiang = 0
            getIntegralTwoData({
                user_card_no: this.leftInfo.cardNo,
                levelFlag: flag
            }).then(result => {
                this.currentInput = index
                if (flag === 1) {
                    this.body = result.data.Body
                    this.userIntegral = result.data.Body.userIntegral
                    this.integralStatus = result.data.Body.integralStatus === null ? 0 : result.data.Body.integralStatus
                    this.integralRecording = result.data.Body.integralRecording
                    this.classification = result.data.Body.classification
                    if (this.integralRecording != null) {
                        for (var i = 0; i < this.integralRecording.length; i++) {
                            if (this.integralRecording[i].integralType !== 1) {
                                if (this.integralRecording[i].integralIncreaseOrDecrease < 0) {
                                    this.fa = this.fa + this.integralRecording[i].integralIncreaseOrDecrease
                                } else {
                                    this.jiang = this.jiang + this.integralRecording[i].integralIncreaseOrDecrease
                                }
                            }
                        }
                    }
                }
                if (flag === 2) {
                    this.body = result.data.Body
                    this.guanUserIntegral = result.data.Body.userIntegral
                    this.integralStatus = result.data.Body.integralStatus === null ? 0 : result.data.Body.integralStatus
                    this.integralRecording = result.data.Body.integralRecording
                    this.classification = result.data.Body.classification
                    if (this.integralRecording != null) {
                        for (var j = 0; j < this.integralRecording.length; j++) {
                            if (this.integralRecording[j].integralType !== 1) {
                                if (this.integralRecording[j].integralIncreaseOrDecrease < 0) {
                                    this.fa = this.fa + this.integralRecording[j].integralIncreaseOrDecrease
                                } else {
                                    this.jiang = this.jiang + this.integralRecording[j].integralIncreaseOrDecrease
                                }
                            }
                        }
                    }
                }
            })
        }
    },
    watch: {
        leftInfo () {
            this.getIntegralTwoDataFn(1, 0)
            this.getIntegralTwoDataFn(2, 0)
        }
    }
}

</script>
