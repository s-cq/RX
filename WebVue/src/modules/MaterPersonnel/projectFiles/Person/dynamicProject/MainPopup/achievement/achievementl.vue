<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'竣工'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                    <div class="textBox" >
                        <p class="col-md-3">
                            <span class="cLightGray pr8">当月</span>
                            <span class="surplusMoneyClass">{{(Amount.currentMoney/10000).toFixed(2)}}</span>万
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">当前</span>
                            <strong class="NowLevelClass cGreen">{{Achievement.xianLevel}}</strong>级
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8 hide">升下一级条件金额</span>
                            <span class="NextLevelMoneyClass">{{(Achievement.upgradeAmount/10000).toFixed(2)}}</span>万
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8 hide">下一级</span>
                            <strong class="NextLevelClass cRed">{{Achievement.level}}</strong>级
                        </p>
                        <p class="col-md-3" :data-title="'（当月+结余）- 升级条件 = 差额'">
                            <span class="cLightGray pr8">差额</span>
                            <span :class="(Achievement.Balance+Amount.currentMoney)<Achievement.upgradeAmount?'cRed':'cGreen'">{{(((Achievement.Balance+Amount.currentMoney)-Achievement.upgradeAmount)/10000).toFixed(2)}}</span>万
                        </p>
                    </div>
                </div>
            </div>
            <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
                <p class="analyItemTit tx-center">结余</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">结余</span>
                        <span class="surplusMoneyClass">{{(Achievement.Balance/10000).toFixed(2)}}</span>万
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                   <p class="col-md-3">
                        <span class="cLightGray pr8">总金额</span>
                        <span>{{(Amount.allMoney/10000).toFixed(2)}}</span>万
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">金额</span><span
                            class="completedMoneyClassThree">{{((Achievement.Balance+Amount.currentMoney)/10000).toFixed(2)}}</span>万</p>
                    <p class="col-md-3"><strong class="NowLevelClass cGreen">{{Achievement.xianLevel}}</strong>级升<strong
                            class="NextLevelClass cRed">{{Achievement.level}}</strong>级</p>
                    <p class="col-md-3"><span class="cLightGray pr8">差额</span><span
                            :class="(Achievement.Balance+Amount.currentMoney)<Achievement.upgradeAmount?'cRed':'cGreen'">{{(((Achievement.Balance+Amount.currentMoney)-Achievement.upgradeAmount)/10000).toFixed(2)}}</span>万</p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span :class="(Achievement.Balance+Amount.currentMoney)<Achievement.upgradeAmount?'cRed':'cGreen'">{{(Achievement.Balance+Amount.currentMoney) &lt; Achievement.upgradeAmount?'不同意':'同意'}}</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 四段渲染容器 -->
        <!-- 结余 Balance -->
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <rx-balance v-if="fourIndex === 0" :key="0"></rx-balance>
        </transition-group>
        <!-- 历史 Balance -->
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <rx-history v-if="fourIndex === 1" :key="0"></rx-history>
        </transition-group>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
// // 注: 所有的大组件已 rx-xxx 命名
import rxBalance from './Four/Balance'
import rxHistory from './Four/History'
import {
    GetByUIdCompletionAmount,
    GetByUIdAchievementInformation
} from '../../Resources/Api'
export default {
    components: {
        rxBalance,
        rxHistory
    },
    data () {
        return {
            fourIndex: undefined,
            Amount: {},
            Achievement: {}
        }
    },
    created () {
        this.GetByUIdCompletionAmountFn()
        this.GetByUIdAchievementInformationFn()
    },
    methods: {
        // 查询指定人员所负责的项目竣工金额信息
        GetByUIdCompletionAmountFn () {
            let _this = this
            _this.Amount = {}
            GetByUIdCompletionAmount({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.Amount = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询人员成就结算信息
        GetByUIdAchievementInformationFn () {
            let _this = this
            _this.Achievement = {}
            GetByUIdAchievementInformation({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.Achievement = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        clickFourShow (index) {
            this.fourIndex = index
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}

</script>
