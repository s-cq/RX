<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'竣工'}"></three-title>

            <div class="analyItem">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                    <div class="textBox" >
                        <p class="col-md-3">
                            <span class="cLightGray pr8">总金额</span>
                            <span class="surplusMoneyClass">{{(Amount/10000).toFixed(2)}}万</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">当前</span>
                            <strong class="NowLevelClass cGreen">{{pmUpgrage.le_level}}</strong>级
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8 hide">升下一级条件金额</span>
                            <span class="NextLevelMoneyClass">{{(pmUpgrage.le_complete/10000).toFixed(2)}}万</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8 hide">下一级</span>
                            <strong class="NextLevelClass cRed">{{pmUpgrage.NLe}}</strong>级
                        </p>
                    </div>
                </div>
            </div>
            <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
                <p class="analyItemTit tx-center">结余</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">结余</span>
                        <span class="surplusMoneyClass">{{pmUpgrage.surplus_money?(pmUpgrage.surplus_money/10000).toFixed(2):0}}万</span>
                    </p>
                </div>
            </div>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
             <div tag="div" class="analyItem anItemBor" v-for="(item,index) in pmAchievement" :key="index">
                <p class="analyItemTit tx-center">{{item.proname | slice(0,4)}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目单号</span>
                        <span class="surplusMoneyClass">{{item.orderno}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">竣工金额</span>
                        <span class="surplusMoneyClass">{{(item.grossProfitReceived/10000).toFixed(2)}}万</span>
                    </p>
                     <p class="col-md-4">
                        <span class="cLightGray pr8">结算时间</span>
                        <span class="surplusMoneyClass">{{item.finalTime}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">金额</span><span
                            class="completedMoneyClassThree">{{pmUpgrage.surplus_money?((this.money+pmUpgrage.surplus_money)/10000).toFixed(2):(this.money/10000).toFixed(2) }}万</span></p>
                    <p class="col-md-3"><strong class="NowLevelClass cGreen">{{pmUpgrage.le_level}}</strong>级升<strong
                            class="NextLevelClass cRed">{{pmUpgrage.NLe}}</strong>级</p>
                    <p class="col-md-3"><span class="cLightGray pr8">差额</span>{{pmUpgrage.surplus_money ?  ((this.money+pmUpgrage.surplus_money-pmUpgrage.le_complete)/10000).toFixed(2) : ((this.money-pmUpgrage.le_complete)/10000).toFixed(2)}}万</p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span>
                    <span class="isAgree cRed">{{(pmUpgrage.surplus_money ?  this.money+pmUpgrage.surplus_money-pmUpgrage.le_complete : this.money-pmUpgrage.le_complete)>0?'同意':'不同意'}}</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 四段渲染容器 -->
        <!-- 结余 Balance -->
      <!--   <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <rx-balance v-if="fourIndex === 0" :key="0"></rx-balance>
        </transition-group> -->
        <!-- 历史 Balance -->
       <!--  <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <rx-history v-if="fourIndex === 1" :key="0"></rx-history>
        </transition-group> -->
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'

import {
    findAllHisdeposit
} from '../../Resources/Api'
export default {
    data () {
        return {
            fourIndex: undefined,
            Amount: '',
            pmUpgrage: {},
            pmAchievement: [],
            money: 0

        }
    },
    created () {
        this.pmUpgrage = this.$route.query.pmUpgrage
        this.pmAchievement = this.$route.query.pmAchievement
        this.money = this.$route.query.jmoney
        this.HisDeposit()
    },
    methods: {
        HisDeposit () {
            let _this = this
            _this.Amount = {}
            findAllHisdeposit({
                uid: this.leftInfo.uid
            }).then(result => {
                this.Amount = result.data.Body
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.HisDeposit()
        }
    }
}

</script>
