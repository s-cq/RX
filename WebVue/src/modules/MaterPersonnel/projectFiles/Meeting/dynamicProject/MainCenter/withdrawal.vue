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
        <router-link tag="div" :to="routerPath('withdrawalWithdrawalInfo')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">保金</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">收入</span>
                    <span>{{shouRu.toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">支出</span>
                    <span>{{(zhiChu).toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">余额</span>
                    <span>{{(shouRu+zhiChu).toFixed(2)}}</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('platformInfo')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">平台费</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">倒计时</span>
                    <span class="cGreen">100h</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">详情</span>
                    <span></span>
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
import { GetPmUserinfoDepositbyUid } from '../Resources/Api'
export default {
    data () {
        return {
            Record: [],
            shouRu: 0,
            zhiChu: 0
        }
    },
    created () {
        this.GetPmUserinfoDepositbyUidFn()
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
        GetPmUserinfoDepositbyUidFn () {
            let _this = this
            _this.Record = []
            _this.shouRu = 0
            _this.zhiChu = 0
            GetPmUserinfoDepositbyUid({
                uid: _this.leftInfo.uid
            }).then(res => {
                _this.Record = res.data.body
                for (let i = 0; i < _this.Record.length; i++) {
                    if (_this.Record[i].money > 0) {
                        _this.shouRu = _this.shouRu + _this.Record[i].money
                    } else {
                        _this.zhiChu = _this.zhiChu + _this.Record[i].money
                    }
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
            this.GetPmUserinfoDepositbyUidFn()
        }
    }
}
</script>
