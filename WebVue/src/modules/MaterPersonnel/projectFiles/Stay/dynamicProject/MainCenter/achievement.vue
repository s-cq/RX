<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <div class="col-md-11">
                        <span class="cLightGray pr8">竣工金额</span>
                        <span class="completedMoneyClass" v-if="pmUpgrage[0].surplus_money!==null&&pmUpgrage[0].surplus_money!==''&&pmUpgrage[0].surplus_money!==undefined">

                            {{pmUpgrage[0] ?  ((Number(this.money)+Number(pmUpgrage[0].surplus_money))/10000).toFixed(2) : (Number(this.money)/10000).toFixed(2)}}万
                        </span>
                        <span v-else class="completedMoneyClass">
                           --
                            </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="100">
            <router-link tag="div" :to="{path: routerPath('achievementAchievementl'), query:{pmUpgrage:pmUpgrage[0],pmAchievement:pmAchievement,jmoney:this.money}}" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="clearfix">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">等级</span>
                            <span class="levelClass">{{pmUpgrage[0].le_level}}</span>级
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">竣工金额</span>
                            <span class="completedMoneyClass">{{pmUpgrage[0] ?  ((Number(this.money)+Number(pmUpgrage[0].surplus_money))/10000).toFixed(2) : (Number(this.money)/10000).toFixed(2)}}万</span>
                        </p>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" :to="routerPath('')" class="analyItem"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <div class="clearfix">
                        <p class="col-md-4">
                            <span class="cLightGray pr8"></span>
                            <span class="levelClass"></span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8"></span>
                            <span class="completedMoneyClass"></span>
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="layerRtb-footer">
            <router-link tag="div" :to="routerPath('')"  class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">距</span>
                        <span class="NextLevelClass">{{pmUpgrage[0].NLe}}</span>级
                    </p>
                    <p class="col-md-2">
                        <span class="NextLevelDayClass">{{datys}}</span>天
                    </p>
                    <p class="col-md-2">
                        <span class="diffMoneytwo cRed">{{pmUpgrage[0].surplus_money ?  ((this.money+pmUpgrage[0].surplus_money-pmUpgrage[0].le_complete)/10000).toFixed(2) : ((this.money-pmUpgrage[0].le_complete)/10000).toFixed(2)}}万</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态</span>
                        <span class="isAgree cRed">{{(pmUpgrage[0].surplus_money ?  this.money+pmUpgrage[0].surplus_money-pmUpgrage[0].le_complete : this.money-pmUpgrage[0].le_complete)>0?'同意':'不同意'}}</span>
                    </p>
                    <p class="">
                        <span class="monthClass">{{getToday}}</span>月
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPMUpgradeMsg, getAchievementMsg } from '../Resources/Api/index'
export default {
    data () {
        return {
            pmUpgrage: {},
            pmAchievement: {},
            money: 0,
            getToday: '',
            datys: ''
        }
    },
    created () {
        var time = new Date()
        this.getToday = time.getMonth() + 1
        var year = time.getFullYear()
        var month = time.getMonth() + 1
        this.datys = new Date(year, month, 0).getDate() - time.getDate()

        this.GetPMUpgrade()
        this.GetAchievement()
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
        GetPMUpgrade () {
            let _this = this
            _this.pmUpgrage = []
            getPMUpgradeMsg({
                uid: this.leftInfo.uid
            }).then(results => {
                this.pmUpgrage = results.data.Body
                console.log(this.pmUpgrage)
            }).catch(error => {
                console.log(error)
            })
        },
        GetAchievement () {
            let _this = this
            _this.pmAchievement = []
            getAchievementMsg({
                uid: this.leftInfo.uid,
                state: 1
            }).then(results => {
                this.pmAchievement = results.data.Body
                if (this.pmAchievement != null) {
                    this.pmAchievement.forEach(element => {
                        this.money += element.grossProfitReceived
                    })
                }
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
            this.money = 0
            this.GetPMUpgrade()
            this.GetAchievement()
        }
    }
}

</script>
