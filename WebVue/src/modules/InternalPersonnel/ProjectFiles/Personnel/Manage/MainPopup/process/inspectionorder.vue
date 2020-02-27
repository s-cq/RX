<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'巡检订单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="orderList.length>0">
            <div class="analyItem" v-for="(item,index) in orderList" :key="index">
                <p class="analyItemTit tx-center">{{item.proname | slice(0,4)}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">订单号</span>
                        <span>{{item.order_number}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目单号</span>
                        <span>{{item.order_no}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态</span>
                        <span v-if="item.stage===0" class="cGreen">已完成</span>
                        <span v-else-if="item.dayCha>0" class="cRed">超期</span>
                        <span v-else class="cGreen">进行中</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">评价</span>
                        <span>{{item.evaluate_star}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="analyItem">
                <p class="analyItemTit tx-center">记录</p>
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
                    <span class="cLightGray pr8">已完成</span>
                    <span>{{wanCheng}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待完成</span>
                    <span>{{daiWanCheng}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">超期</span>
                    <span>{{chaoQi}}</span>
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
    GetByRoleOrderList
} from '../../Resources/Api'
export default {
    data () {
        return {
            wanCheng: 0,
            daiWanCheng: 0,
            chaoQi: 0,
            orderList: []
        }
    },
    created () {

    },
    methods: {
        GetByRoleOrderListFn () {
            this.orderList = []
            this.wanCheng = 0
            this.daiWanCheng = 0
            this.chaoQi = 0
            let _this = this
            if (_this.leftInfo.js_name === '工程监理' || _this.leftInfo.js_name === '工程经理') {
                GetByRoleOrderList({
                    userRole: _this.leftInfo.js_name === '工程监理' ? 3 : 6,
                    typeName: '巡检订单'
                }).then(results => {
                    _this.orderList = results.data.Body
                    for (let i = 0; i < _this.orderList.length; i++) {
                        if (_this.orderList[i].stage === 0) {
                            _this.wanCheng = _this.wanCheng + 1
                        } else {
                            if (_this.orderList[i].dayCha > 0) {
                                _this.chaoQi = _this.chaoQi + 1
                            }
                            _this.daiWanCheng = _this.daiWanCheng + 1
                        }
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
