<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="100">
            <div v-for="(item,index) in daiJie" :key="index">
                <router-link tag="div" exact :to="routerPath('expenditureExpenditureInfo?orderNo='+item.OrderID)" class="analyItem anItemBor"
                    active-class="anItemBor-active" v-if="item.SUMJSMoney>0 || item.SUMRenGong>0">
                    <p class="analyItemTit tx-center">支出记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">编号</span>
                            <span>{{item.Number}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">类型</span>
                            <span>项目款</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">金额</span>
                            <span>{{(item.SUMJSMoney+item.SUMRenGong).toFixed(2)}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">时间</span>
                            <span>{{item.JSTime!=undefined?item.JSTime.slice(0,10):''}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">单号</span>
                            <span>{{item.OrderID}}</span>
                        </p>
                    </div>
                </router-link>
            </div>
            <div v-for="(item,index) in Record" :key="index">
                <div class="analyItem" v-if="item.money<0">
                    <p class="analyItemTit tx-center">支出记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">单号</span>
                            <span>{{item.orderNo}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">类型</span>
                            <span>押金</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">金额</span>
                            <span>{{item.money}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">时间</span>
                            <span>{{item.riskTime!==undefined?item.riskTime.slice(0,10):''}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">来源</span>
                            <span>{{item.sourceName}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">金额</span>
                        <span>{{money}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    GetUidRevenueRecords,
    GetyyMoneyListByUserID
} from '../Resources/Api'
export default {
    data () {
        return {
            Record: [],
            daiJie: [],
            money: 0
        }
    },
    created () {
        this.money = 0
        this.GetUidRevenueRecordsFn()
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
        // 查询项目待结款信息
        GetUidRevenueRecordsFn () {
            let _this = this
            _this.Record = []
            GetUidRevenueRecords({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.Record = results.data.Body
                for (let i = 0; i < _this.Record.length; i++) {
                    if (_this.Record[i].money < 0) {
                        _this.money = _this.money + _this.Record[i].money
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询项目待结款信息
        GetyyMoneyListByUserIDFn () {
            let _this = this
            _this.daiJie = []
            GetyyMoneyListByUserID({
                uid: _this.leftInfo.uid,
                flag: 2
            }).then(results => {
                _this.daiJie = results.data.Body
                for (let i = 0; i < _this.daiJie.length; i++) {
                    if (_this.daiJie[i].SUMJSMoney > 0 || _this.daiJie[i].SUMRenGong > 0) {
                        _this.money = (_this.money + (_this.daiJie[i].XMJLWFMoney - _this.daiJie[i].SUMJSMoney +
                            _this.daiJie[i].SUMJSMoney + _this.daiJie[i].SUMRenGong)).toFixed(2)
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
            this.money = 0
            this.GetUidRevenueRecordsFn()
            this.GetyyMoneyListByUserIDFn()
        }
    }
}

</script>
