<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="pr8">
                        <span class="cRed"></span>
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="{path: routerPath('phaseDeposit'), query:{leDeposit:stayLevel[0][0].leDeposit}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">押金</p>
            <div class="analyItemCon">
                <p class="fl col-md-12">
                    <span class="cLightGray pr8">押金</span>
                    <span class="rz-num">{{(stayLevel[0][0].leDeposit/10000).toFixed(2)}}万</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="{path: routerPath('phaseOrder'), query:{leReceiptMoney:stayLevel[0][0].leReceiptMoney,leReceiptNum:stayLevel[0][0].leReceiptNum}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">接单</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">总金额</span>
                    <span>{{(stayLevel[0][0].leReceiptMoney/10000).toFixed(2)}}万</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">单项目金额</span>
                    <span>{{(stayLevel[0][0].leReceiptNum/10000).toFixed(2)}}万</span>
                </p>
            </div>
        </router-link>

        <router-link tag="div" :to="{path: routerPath('phaseCompletion'), query:{leComplete:stayLevel[0][0].leComplete}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">竣工</span>
                    <span>{{(stayLevel[0][0].leComplete/10000).toFixed(2)}}万</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="{path: routerPath('phaseGuarantee'), query:{leEnsureRisks:stayLevel[0][0].leEnsureRisks,leEnsureLittle:stayLevel[0][0].leEnsureLittle}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">保障</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">五险</span>
                    <span>{{stayLevel[0][0].leEnsureRisks===0?'关闭':'开启'}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">加点</span>
                    <span>{{stayLevel[0][0].leEnsureLittle===0?'关闭':'开启'}}</span>
                </p>
            </div>
        </router-link>
         <router-link tag="div" :to="{path: routerPath('phaseSecurity'), query:{leSecurityOpen:stayLevel[0][0].leSecurityOpen}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">安全员证</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">{{stayLevel[0][0].leSecurityOpen===0?'未开启':'开启'}}</span>
                </p>
            </div>
        </router-link>
         <router-link tag="div" :to="{path: routerPath(''), query:{leSecurityOpen:stayLevel[0][0].leSecurityOpen}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">培训次数</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">{{stayLevel[0][0].leTrainingNum>0?'开启':'未开启'}}</span>
                </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getStayLevelById } from '../Resources/Api'
export default {
    data () {
        return {
            stayLevel: []
        }
    },
    created () {
        this.GetStayLevel()
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
        GetStayLevel () {
            let _this = this
            _this.stayLevel = []
            getStayLevelById({
                leId: _this.leftInfo.leId
            }).then(results => {
                _this.stayLevel = results.data.Body
                console.log(_this.stayLevel)
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
            this.GetStayLevel()
        }
    }
}
</script>
