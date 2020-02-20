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
        <router-link tag="div" exact :to="routerPath('resultProject?orderNo='+item.orderno+'&money='+item.contract_fee+'&ContractingMoney='+item.actual_publish_money+'&uncollected='+item.uncollected)" class="analyItem anItemBor" active-class="anItemBor-active"
        v-for="(item,index) in project" :key="index" >
            <p class="analyItemTit tx-center">{{item.proname.slice(0,4)}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">编号</span>
                    <span>{{item.contract_no}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span>{{item.orderno}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span :data-title="item.proaddr">{{item.proaddr | truncate(6)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">开期</span>
                    <span>{{item.construction_time!==undefined && item.construction_time!=='' ? item.construction_time.slice(0,10):'--'}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">工期</span>
                    <span>{{item.construction_period}}天</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待结算</span>
                    <span>{{item.money}}</span>
                </p>
                <span class="status" style="width: 18px; color: green; right: 10px; position: absolute; top: 50%; transform: translateY(-50%); font-size: 14px; font-weight: 700;">
                    {{item.AfterMarketState===4||item.AfterMarketState===5?'竣工':item.AfterMarketState===2?'准备':'在施'}}</span>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <div class="analyItem" >
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">合计</span>
                    <span>{{moneySum}}元</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetByIDOngoingProjects,
    GetyyMoneyListByUserID } from '../Resources/Api'
export default {
    data () {
        return {
            project: [],
            money: 0
        }
    },
    created () {
        this.GetByIDOngoingProjectsFn()
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
        // 查询项目经理施前和施中的项目
        GetByIDOngoingProjectsFn () {
            this.project = []
            let _this = this
            _this.money = 0
            GetByIDOngoingProjects({
                uid: this.leftInfo.uid
            }).then(results => {
                _this.project = results.data.Body
                for (let i = 0; i < _this.project.length; i++) {
                    _this.project[i].money = 0.00
                    // 查询项目待结款信息
                    GetyyMoneyListByUserID({
                        uid: _this.leftInfo.uid,
                        flag: 2,
                        OrderID: _this.project[i].orderno
                    }).then(results => {
                        if (results.data.Body !== undefined && results.data.Body.length > 0) {
                            _this.project[i].money = Number(results.data.Body[0].XMJLWFMoney - results.data.Body[0].SUMJSMoney).toFixed(2)
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        moneySum () {
            let _this = this
            _this.money = 0
            this.project.forEach((item, index) => {
                _this.money = _this.money + item.money
            }
            )
            return _this.money
        }
    },
    watch: {
        leftInfo () {
            this.GetByIDOngoingProjectsFn()
        }
    }
}
</script>
