<template>
<div class="pr10">
    <div class="pr10" >

        <div class="">
            <div class="analyItem pr10">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('')" class="analyItem pr10" active-class="anItemBor-active">
            <p class="analyItemTit tx-center" v-if="upgradeInfo?upgradeInfo.depositCash >= upgradeInfo.leDeposit:0" style="background: #97E4B0;color: #fff;">押金</p>
            <p v-else class="analyItemTit tx-center">押金</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">押金</span>
                    <span class="rz-num">{{upgradeInfo?(upgradeInfo.leDeposit/10000).toFixed(2):0}}万</span>
                </p>
                  <p class="fl col-md-6">
                    <span class="cLightGray pr8">实际缴纳</span>
                    <span class="rz-num">{{upgradeInfo?(upgradeInfo.depositCash/10000).toFixed(2):0}}万</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('')" class="analyItem pr10" active-class="anItemBor-active">
            <p class="analyItemTit tx-center" style="background: #97E4B0;color: #fff;">接单</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">总金额</span>
                    <span>{{upgradeInfo?(upgradeInfo.leReceiptMoney/10000).toFixed(2):0}}万</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">单项目金额</span>
                    <span>{{upgradeInfo?(upgradeInfo.leReceiptNum/10000).toFixed(2):0}}万</span>
                </p>
            </div>
        </router-link>

        <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center" v-if="upgradeInfo.leComplete>0 &&  pmUpgrage[0]?(pmUpgrage[0].surplus_money ?  this.money+pmUpgrage[0].surplus_money : this.money) >= upgradeInfo.leComplete:0" style="background: #97E4B0;color: #fff;">竣工</p>
            <p v-else class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">竣工</span>
                    <span>{{upgradeInfo?(upgradeInfo.leComplete/10000).toFixed(2):0}}万</span>
                </p>
                 <p class="col-md-6">
                    <span class="cLightGray pr8">竣工完成</span>
                <span  class="completedMoneyClass" v-if="pmUpgrage[0].surplus_money!==null&&pmUpgrage[0].surplus_money!==''&&pmUpgrage[0].surplus_money!==undefined">
                {{pmUpgrage[0] ? ((Number(this.money)+Number(pmUpgrage[0].surplus_money))/10000).toFixed(2):(Number(this.money)/10000).toFixed(2)}}万
  </span>
                </p>
            </div>
        </router-link>
        <!-- <router-link tag="div" :to="routerPath('')"  class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">保障</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">五险</span>
                    <span></span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">加点</span>
                    <span></span>
                </p>
            </div>
        </router-link>-->
         <router-link tag="div" :to="routerPath('')"   class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center" v-if="upgradeInfo.leSecurityOpen ==1" style="background: #97E4B0;color: #fff;">安全员证</p>
            <p v-else class="analyItemTit tx-center">安全员证</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">{{upgradeInfo.leSecurityOpen==1?'开启':'未开启'}}</span>
                </p>
            </div>
        </router-link>
         <router-link tag="div" :to="routerPath('')"   class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center" v-if="upgradeInfo.leTrainingNum >0" style="background: #97E4B0;color: #fff;">培训</p>
            <p v-else class="analyItemTit tx-center">培训</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">{{upgradeInfo.leTrainingNum>0?'开启':'未开启'}}</span>
                </p>
            </div>
        </router-link>
    </div>

      <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
              <p class="col-md-6">
                    <span class="cLightGray pr8">共有</span>
                    <span>5项</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">完成</span>
                    <span>{{completeNumbedr}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { findUpgradeInfo,
    getPMUpgradeMsg,
    getAchievementMsg} from '../Resources/Api/index'
export default {
    data () {
        return {
            pmUpgrage: {},
            pmAchievement: {},
            upgradeInfo: {},
            money: 0,
            completeNumbedr: 1
        }
    },
    created () {
        this.GetLeveInfo()
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
        GetLeveInfo () {
            let _this = this
            _this.upgradeInfo = {}
            findUpgradeInfo({
                uid: this.leftInfo.uid
            }).then(results => {
                this.upgradeInfo = results.data.Body
                if (this.upgradeInfo) {
                    if (this.upgradeInfo.depositCash >= this.upgradeInfo.leDeposit) {
                        this.completeNumbedr += 1
                    }
                    if (this.upgradeInfo.leSecurityOpen === 1) {
                        this.completeNumbedr += 1
                    }
                    if (this.upgradeInfo.leTrainingNum > 0) {
                        this.completeNumbedr += 1
                    }
                }
                this.GetAchievement()
            }).catch(error => {
                console.log(error)
            })
        },
        GetPMUpgrade () {
            let _this = this
            _this.pmUpgrage = []
            getPMUpgradeMsg({
                uid: this.leftInfo.uid
            }).then(results => {
                this.pmUpgrage = results.data.Body
                if (this.pmUpgrage != null && this.upgradeInfo != null) {
                    const currentMoney = this.pmUpgrage[0].surplus_money ? (this.money + this.pmUpgrage[0].surplus_money) : this.money
                    if (this.upgradeInfo.leComplete <= currentMoney && this.upgradeInfo.leComplete > 0) {
                        this.completeNumbedr += 1
                    }
                }
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

                if (this.pmAchievement) {
                    this.pmAchievement.forEach(element => {
                        this.money += element.grossProfitReceived
                    })
                }
                this.GetPMUpgrade()
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    updated: function () {
    },
    watch: {
        leftInfo () {
            this.completeNumbedr = 1
            this.money = 0
            this.GetLeveInfo()
        }
    }
}
</script>
