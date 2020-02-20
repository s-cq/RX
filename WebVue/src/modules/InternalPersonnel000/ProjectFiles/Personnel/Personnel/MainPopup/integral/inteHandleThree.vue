<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'积分处理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" :class="$route.query.integralStatus === 0 ? 'analyRed' : ''">
                <p class="analyItemTit tx-center analyLightGreen">正常</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">时间:</span>
                        <span>{{ $utils.format('yyyy-MM-dd',new Date())}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态:</span>
                        <span>正常</span>
                    </p>
                    <p class="col-md-12">
                        <span class="pr8 cRed">提示：消分培训累计1次级别将降一级。</span>
                    </p>
                </div>
            </div>
            <div class="analyItem" :class="$route.query.integralStatus === 1 ? 'analyRed anItemBor' : ''">
                <p class="analyItemTit tx-center analyOrange">异常</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">时间:</span>
                        <span>{{$utils.format('yyyy-MM-dd',new Date())}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态:</span>
                        <span>待培</span>
                    </p>
                    <p class="col-md-10">
                        <span class="pr8 cRed">提示；消分培训累计2次降级两次，4级人员将封停</span>
                    </p>
                    <div class="fr train-div">
                        <input type="button" value="培训" class="uiBtn-gray uiBtn-normal"
                        :disabled="$route.query.integralStatus === 1 ? false : true" @click="clickFour(2)">
                    </div>
                </div>
            </div>
            <div class="analyItem" :class="$route.query.integralStatus === 2 ? 'analyRed anItemBor' : ''">
                <p class="analyItemTit tx-center analyRed">问题</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">时间:</span>
                        <span>{{$utils.format('yyyy-MM-dd',new Date())}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态:</span>
                        <span>待培</span>
                    </p>
                    <p class="col-md-10">
                        <span class="pr8 cRed">提示：再次消分将进入待离状态</span>
                    </p>
                    <div class="fr train-div">
                        <input type="button" value="培训" class="uiBtn-blue uiBtn-normal"
                        :disabled="$route.query.integralStatus === 2 ? false : true" @click="clickFour(3)">
                    </div>
                </div>
            </div>
            <div class="analyItem" :class="$route.query.integralStatus === 3 ? 'analyRed anItemBor' : ''">
                <p class="analyItemTit tx-center analyGray">整改</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">时间:</span>
                        <span>{{$utils.format('yyyy-MM-dd',new Date())}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态:</span>
                        <span>待离</span>
                    </p>
                    <div class="fr train-div">
                        <input type="button" value="离职" class="uiBtn-red uiBtn-normal"
                        :disabled="$route.query.integralStatus === 3 ? false : true" @click="clickFour(4)" >
                    </div>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">通知</p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 0">{{leftInfo.userName + leftInfo.jsName}}您好！您当前积分为{{$route.query.userIntegral}}分，积分正常，请继续保持。</span>
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 1">{{leftInfo.userName + leftInfo.jsName}}您好！您当前积分为0分，暂停工作，需要培训后方可继续工作</span>
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 2">{{leftInfo.userName + leftInfo.jsName}}您好！您当前积分不足，业绩与订单完成率不符合标准，当前有降级的危险，请尽快提升增加积分，恢复正常状态，加油吧！</span>
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 3">{{leftInfo.userName + leftInfo.jsName}}您好！很遗憾告诉您，您已不符合我司要求，酌情考虑，不再担任工程经理职位，感谢您之前为公司的付出，祝您找到心仪的工作。</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 0">您当前业绩及订单正常，积分持有正常，请继续保持</span>
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 1">您当前业绩及订单不符合标准，暂停工作，需培训后方可继续工作</span>
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 2">您当前工作不符合级别标准，需要修整，请努力提高积分</span>
                        <span class="cLightGray pr10" v-if="$route.query.integralStatus === 3">您当前不符合级别要求，即降级处理，请继续努力；</span>
                        <span class="cLightGray pr10">积分扣除达{{60 - Number($route.query.fa)}}分， <span v-if="Number($route.query.userIntegral) === 0"> 满足  <span class="cRed">降级</span> 的条件，</span>继续加油！</span>
                    </p>
                </div>
            </div>
        </div>
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <!-- 正常 -->
            <normal-four v-if="fourIndex === 1" :key='1'></normal-four>
            <!-- 异常 -->
            <anomaly-four v-if="fourIndex === 2" :key='2'></anomaly-four>
            <!-- 问题 -->
            <issue-four v-if="fourIndex === 3" :key='3'></issue-four>
            <!-- 整改 -->
            <abarbeitung-four v-if="fourIndex === 4" :key='4'></abarbeitung-four>
            <!-- 综合 -->
            <handle-four v-if="fourIndex === 5" :key='5'></handle-four>
        </transition-group>
    </div>
</template>
<script>
// import { getAllInternalUserLevelByUserCard } from '../../Resources/Api'
import { mapGetters } from 'vuex'
import normalFour from './four/normalfour'
import anomalyFour from './four/anomalyfour'
import issueFour from './four/issuefour'
import abarbeitungFour from './four/abarbeitungfour'
import handleFour from './four/handlefour'
export default {
    components: {
        normalFour,
        anomalyFour,
        issueFour,
        abarbeitungFour,
        handleFour
    },
    data () {
        return {
            fourIndex: undefined // 四段index
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
    },
    methods: {
        // 点击出现四段
        clickFour (index) {
            this.fourIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
    .analyRed {
        border: 1px solid red;
    }
    .analyItem .uiBtn-blue[disabled] {
        background: #09f;
    }
    .analyItem .uiBtn-red[disabled] {
        background: #f33;
    }
</style>
