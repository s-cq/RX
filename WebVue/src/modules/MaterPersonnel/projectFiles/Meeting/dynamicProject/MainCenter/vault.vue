<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('vaultSettlement')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">待结算</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总收入</span>
                    <span>{{shouRu}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已提现</span>
                    <span>{{tiXian}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">余额</span>
                    <span :class="(shouRu-tiXian)<0?'cRed':''">{{(shouRu-tiXian).toFixed(2)}}</span>
                </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { GetyyMoneyListByUserID } from '../Resources/Api'
export default {
    data () {
        return {
            shouRu: 0,
            tiXian: 0
        }
    },
    created () {
        this.GetyyMoneyListByUserIDFn()
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
        // 查询已结算的项目信息
        GetyyMoneyListByUserIDFn () {
            let _this = this
            _this.shouRu = 0
            _this.tiXian = 0
            GetyyMoneyListByUserID({
                uid: _this.leftInfo.uid,
                flag: 2
            }).then(res => {
                for (let i = 0; i < res.data.Body.length; i++) {
                    _this.shouRu = (_this.shouRu + (Number(res.data.Body[i].XMJLWFMoney) - Number(res.data.Body[i].SUMJSMoney) + Number(res.data.Body[i].SUMJSMoney) + Number(res.data.Body[i].SUMRenGong))).toFixed(2)
                    _this.tiXian = (_this.tiXian + (Number(res.data.Body[i].SUMJSMoney) + Number(res.data.Body[i].SUMRenGong))).toFixed(2)
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
            this.GetyyMoneyListByUserIDFn()
        }
    }
}
</script>
