<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'支出详情'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div v-if="Record.length>0">
                <div class="analyItem" v-for="(item,index) in Record" :key="index">
                    <p class="analyItemTit tx-center">支出记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">凭证</span>
                            <span>{{item.Code}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">申请日期</span>
                            <span>{{item.CreateDate!==undefined?item.CreateDate.slice(0,10):''}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">状态</span>
                            <span>出纳已付</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">金额</span>
                            <span>{{item.DebitAll}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">支付日期</span>
                            <span>{{item.Time!==undefined?item.Time.slice(0,10):''}}</span>
                        </p>
                         <p class="col-md-4">
                            <span class="cLightGray pr8">备注</span>
                            <span :data-title="item.Summary1">{{item.Summary1| truncate(10)}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">支出记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无数据！</span>
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
    GetByOrderPaymentRecord
} from '../../Resources/Api'
export default {
    data () {
        return {
            Record: [],
            money: 0
        }
    },
    created () {
        this.GetByOrderPaymentRecordFn()
    },
    methods: {
        // 查询指定项目的人工付款记录信息
        GetByOrderPaymentRecordFn () {
            let _this = this
            _this.Record = []
            _this.money = 0
            GetByOrderPaymentRecord({
                orderNo: _this.$route.query.orderNo
            }).then(results => {
                _this.Record = results.data.Body
                for (let i = 0; i < _this.Record.length; i++) {
                    _this.money = _this.money + _this.Record[i].DebitAll
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        $route () {
            this.GetByOrderPaymentRecordFn()
        }
    }
}

</script>
