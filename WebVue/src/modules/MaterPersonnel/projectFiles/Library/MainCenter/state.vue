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
    <div class="thinScroll pr10" v-scrollHeight="100">
        <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">押金</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">押金</span>
                    <span class="rz-num">{{(stayLevel[0][0].leDeposit/10000).toFixed(2)}}万</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">接单</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">总金额</span>
                    <span>{{(stayLevel[0][0].leReceiptMoney/10000).toFixed(2)}} 万</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">单项目金额</span>
                    <span>{{(stayLevel[0][0].leReceiptNum/10000).toFixed(2)}} 万</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">竣工</span>
                    <span>{{(stayLevel[0][0].leComplete/10000).toFixed(2)}} 万</span>
                </p>
            </div>
        </router-link>
     <!--    <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
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
        </router-link> -->
      <!--   <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">奖金</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">样板间</span>
                    <span>{{stayLevel[0][0].leScreedBonus}}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">协助奖励</span>
                    <span>{{stayLevel[0][0].leScreedBonusScore}}</span>
                </p>
            </div>
        </router-link> -->
    </div>
        <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
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
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leftInfo () {
            this.GetStayLevel()
        },
        updatePlate () {
            this.GetStayLevel()
        }
    }
}
</script>
