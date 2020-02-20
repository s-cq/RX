<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'待结算'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="Record.length>0">
            <div class="analyItem" v-for="(item,index) in Record" :key="index">
                <p class="analyItemTit tx-center">收入{{index+1}}</p>
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
                        <span class="cLightGray pr8">时间</span>
                        <span>{{item.JSTime!=undefined && item.JSTime!=null?item.JSTime.slice(0,10):'--'}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">收入</span>
                        <span>{{(item.XMJLWFMoney -item.SUMJSMoney + item.SUMJSMoney + item.SUMRenGong).toFixed(2)}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem" v-for="(item,index) in Record" :key="index">
                <p class="analyItemTit tx-center">支出{{index+1}}</p>
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
                        <span class="cLightGray pr8">时间</span>
                        <span>{{item.JSTime!=undefined && item.JSTime!=null?item.JSTime.slice(0,10):'--'}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已提现</span>
                        <span>{{(item.SUMJSMoney +item.SUMRenGong).toFixed(2)}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="analyItem">
                <p class="analyItemTit tx-center">记录</p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span>暂无记录信息！</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
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
        </div>
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { GetyyMoneyListByUserID } from '../../Resources/Api'
export default {
    data () {
        return {
            shouRu: 0,
            tiXian: 0,
            Record: []
        }
    },
    created () {
        this.GetyyMoneyListByUserIDFn()
    },
    methods: {
        // 查询已结算的项目信息
        GetyyMoneyListByUserIDFn () {
            let _this = this
            _this.shouRu = 0
            _this.tiXian = 0
            _this.Record = []
            GetyyMoneyListByUserID({
                uid: _this.leftInfo.uid,
                flag: 2
            }).then(res => {
                _this.Record = res.data.Body
                for (let i = 0; i < res.data.Body.length; i++) {
                    _this.shouRu = _this.shouRu + (res.data.Body[i].XMJLWFMoney - res.data.Body[i].SUMJSMoney + res.data.Body[i].SUMJSMoney + res.data.Body[i].SUMRenGong).toFixed(2)
                    _this.tiXian = _this.tiXian + (res.data.Body[i][i].SUMJSMoney + res.data.Body[i][i].SUMRenGong).toFixed(2)
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
