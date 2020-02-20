<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'收入详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="RecordList.length>0">
            <div class="analyItem" v-for="(item,index) in RecordList" :key="index">
                <p class="analyItemTit tx-center">{{type===0?'收入':'支出'}}{{index+1}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">单号</span>
                        <span >{{item.orderNo}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">发起时间</span>
                        <span >{{item.riskTime| slice(0,10)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">金额</span>
                        <span :class="item.money>0?'cGreen':'cRed'">{{item.money}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">类型</span>
                        <span >{{item.sourceName}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">处理时间</span>
                        <span >{{item.doTime| slice(0,10)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态</span>
                        <span >{{item.depositType==1?'已处理':item.depositType}}</span>
                    </p>
                     <p class="col-md-12">
                        <span class="cLightGray pr8">备注</span>
                        <span :data-title="item.remark">{{item.remark | truncate(100)}}</span>
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
                    <span class="cLightGray pr8">合计</span>
                    <span :class="money>0?'cGreen':'cRed'">{{money}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetPmUserinfoDepositbyUid } from '../../../Resources/Api'
export default {
    data () {
        return {
            Record: [],
            RecordList: [],
            money: 0
        }
    },
    props: {
        type: Number,
        required: true
    },
    created () {
        this.GetPmUserinfoDepositbyUidFn()
    },
    methods: {
        // 查询已结算的项目信息
        GetPmUserinfoDepositbyUidFn () {
            let _this = this
            _this.Record = []
            _this.RecordList = []
            _this.money = 0
            GetPmUserinfoDepositbyUid({
                uid: _this.leftInfo.uid
            }).then(res => {
                _this.Record = res.data.body
                for (let i = 0; i < _this.Record.length; i++) {
                    _this.Record[i].doTime = _this.Record[i].doTime !== undefined ? _this.timestampToTimeFn(_this.Record[i].doTime) : ''
                    _this.Record[i].riskTime = _this.timestampToTimeFn(_this.Record[i].riskTime)
                    if (_this.Record[i].money > 0 && _this.type === 0) {
                        _this.money = _this.money + _this.Record[i].money
                        _this.RecordList.push(_this.Record[i])
                    } else if (_this.Record[i].money < 0 && _this.type === 1) {
                        _this.RecordList.push(_this.Record[i])
                        _this.money = _this.money + _this.Record[i].money
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        timestampToTimeFn (timestamp) {
            var date = new Date(timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '-'
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            let D = date.getDate() + ' '
            let h = date.getHours() + ':'
            let m = date.getMinutes() + ':'
            let s = date.getSeconds()
            return Y + M + D + h + m + s
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
