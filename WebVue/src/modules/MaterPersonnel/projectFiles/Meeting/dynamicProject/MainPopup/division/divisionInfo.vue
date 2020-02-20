<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:$route.query.name}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div ></div>
        <div class="analyItem" v-for="(item,index) in Record" :key="index">
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
                    <span class="cLightGray pr8">项目</span>
                    <span :data-title="item.proname">{{item.proname | truncate(10)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{item.construction_time!=undefined && item.construction_time!=null?item.construction_time.slice(0,10):'--'}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span ></span>
                </p>
                <p class="col-md-4" v-if="item.AfterMarketState===4|| item.AfterMarketState===5">
                    <span class="cLightGray pr8">待结算</span>
                    <span>{{item.dai}}</span>
                </p>
                 <span class="status" v-if="item.AfterMarketState===2 || item.AfterMarketState===3" style="width: 18px; color: green; right: 10px; position: absolute; top: 50%; transform: translateY(-50%); font-size: 14px; font-weight: 700;">
                    {{item.AfterMarketState===2?'施前':item.AfterMarketState===3?'施中':''}}</span>
            </div>
        </div>
        <div class="analyItem" v-for="(item,index) in yiJieSuanRecord" :key="index">
            <p class="analyItemTit tx-center">{{item.proname.slice(0,4)}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">编号</span>
                    <span>{{item.Number}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span>{{item.OrderID}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">项目</span>
                    <span :data-title="item.proname">{{item.proname | truncate(10)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{item.JSTime!=undefined && item.JSTime!=null?item.JSTime.slice(0,10):'--'}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span ></span>
                </p>
                <p class="col-md-4" v-if="item.AfterMarketState===4|| item.AfterMarketState===5">
                    <span class="cLightGray pr8">已结算</span>
                    <span>{{(item.SUMJSMoney+item.SUMRenGong).toFixed(2)}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">待结算</span>
                    <span>{{$route.query.dai}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已结算</span>
                    <span>{{$route.query.yi}}</span>
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
import { GetByIDOngoingProjects, GetyyMoneyListByUserID } from '../../Resources/Api'
export default {
    data () {
        return {
            Record: [],
            yiJieSuanRecord: []
        }
    },
    created () {
        this.GetByIDOngoingProjectsFn()
        this.GetyyMoneyListByUserIDFn()
    },
    methods: {
        // 查询项目经理施前和施中的项目
        GetByIDOngoingProjectsFn () {
            let _this = this
            _this.Record = []
            GetByIDOngoingProjects({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.Record = results.data.Body
                for (let i = 0; i < results.data.Body.length; i++) {
                    if (_this.$route.query.region === results.data.Body[i].areaid) {
                        if (results.data.Body[i].AfterMarketState === 4 || results.data.Body[i].AfterMarketState === 5) {
                            GetyyMoneyListByUserID({
                                uid: _this.leftInfo.uid,
                                flag: 2,
                                OrderID: results.data.Body[i].orderno
                            }).then(res => {
                                results.data.Body[i].dai = (res.data.Body[0].XMJLWFMoney - res.data.Body[0].SUMJSMoney).toFixed(2)
                            }).catch(error => {
                                console.log(error)
                            })
                        }
                        _this.Record.push(results.data.Body[i])
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询已结算的项目信息
        GetyyMoneyListByUserIDFn () {
            let _this = this
            _this.yiJieSuanRecord = []
            let daqu = []
            GetyyMoneyListByUserID({
                uid: _this.leftInfo.uid,
                flag: 2
            }).then(res => {
                for (let i = 0; i < res.data.Body.length; i++) {
                    daqu = res.data.Body[i].OrderID.split('-')
                    if (daqu[0] === _this.$route.query.region) {
                        _this.yiJieSuanRecord.push(res.data.Body[i])
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
        $route () {
            this.GetByIDOngoingProjectsFn()
            this.GetyyMoneyListByUserIDFn()
        }
    }
}
</script>
