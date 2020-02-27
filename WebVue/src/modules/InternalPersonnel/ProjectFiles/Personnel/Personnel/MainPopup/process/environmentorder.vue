<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name: order_name}"></three-title>
        <!-- <input id="order"></input> <button type="button">项目筛选</button> -->
        <div class="">
            <p class="col-md-4 pl10 pr20 pb20">
                <el-input v-model="input" clearable></el-input>
            </p>
            <p class="col-md-4">
                <el-button @click="GetByRoleOrderListFn" type="button">项目筛选</el-button>
            </p>
        </div>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div v-if="orderList.length>0">
                <div class="analyItem" v-for="(item,index) in orderList" :key="index">
                    <p class="analyItemTit tx-center">{{item.proname | slice(0,4)}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">项目名称</span>
                            <span>{{item.proname| slice(0,4)}}</span>
                        </p>
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
                            <span :class="item.orderStatus | evaluateColor">{{item.orderStatusName}}</span>
                            <!-- <span v-if="item.stage===0" class="cGreen">已完成</span>
                            <span v-else-if="item.dayCha>0" class="cRed">超期</span>
                            <span v-else class="cGreen">进行中</span> -->
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">评价</span>
                            <span>{{item.evaluate_star|starLevel}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">暂无数据</p>
                    <div class="analyItemCon">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">暂无数据</span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer" v-if="orderList.length>0">
            <div v-if="orderList[0].order_type_id!==28" class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">已完成</span>
                        <span>{{orderStatus0}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">进行中</span>
                        <span>{{orderStatus1}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">超期</span>
                        <span>{{orderStatus3}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{priceCount}}</span>
                    </p>
                </div>
            </div>
            <div v-if="orderList[0].order_type_id==28" class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">接单已完成</span>
                        <span>{{orderStatus0}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">评价已完成</span>
                        <span>{{orderStatus1}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{priceCount}}</span>
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
    getStayStayProcessOrderTypeDetail
} from '../../Resources/Api'
export default {
    data () {
        return {
            input: '', // 输入框
            wanCheng: 0,
            daiWanCheng: 0,
            chaoQi: 0,
            orderList: [],
            order_type_id: 0,
            user_card_no: 0,
            order_name: '',
            orderStatus0: 0,
            orderStatus1: 0,
            orderStatus2: 0,
            orderStatus3: 0,
            priceCount: 0
        }
    },
    created () {
        this.order_type_id = this.$route.query.order_type_id

        this.user_card_no = this.$route.query.user_card_no
        this.order_name = this.$route.query.order_name
        // this.priceCount = this.$route.query.priceCount
        this.GetByRoleOrderListFn()
    },
    methods: {
        GetByRoleOrderListFn () {
            this.orderList = []
            let obj = {}
            if (this.input === undefined || this.input === '') {
                obj = {
                    user_card_no: this.user_card_no,
                    order_type_id: this.order_type_id
                }
            } else {
                obj = {
                    user_card_no: this.user_card_no,
                    order_type_id: this.order_type_id,
                    proname: this.input
                }
            }
            getStayStayProcessOrderTypeDetail(obj).then(result => {
            // getStayStayProcessOrderTypeDetail({
            //     user_card_no: this.user_card_no,
            //     order_type_id: this.order_type_id
            // }).then(result => {
                this.orderStatus0 = 0
                this.orderStatus1 = 0
                this.orderStatus2 = 0
                this.orderStatus3 = 0
                this.priceCount = 0
                this.orderList = result.data.Body
                console.log(this.orderList)
                // 2未开启，1进行中，0已完成，3超期
                for (var i = 0; i < this.orderList.length; i++) {
                    switch (this.orderList[i].orderStatus) {
                    case 0:
                        this.orderStatus0++
                        this.priceCount += this.orderList[0].unit_price
                        break
                    case 1:
                        this.orderStatus1++
                        if (this.orderList[i].order_type_id === 28) {
                            this.priceCount += this.orderList[0].finish_price + this.orderList[0].unit_price
                        }
                        break
                    case 2:
                        this.orderStatus2++
                        break
                    case 3:
                        this.orderStatus3++
                        this.priceCount -= this.orderList[0].unit_price
                        break
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    filters: {


        evaluateColor: function (str) {
            switch (str) {
            case 0:
                return 'cGreen'
            case 1:
                return 'cGreen'
            case 2:
                return 'cRed'
            case 3:
                return 'cRed'
            }
        },
        starLevel: function (str) {
            switch (str.toString()) {
            case '-1':
            case '0':
                return '未评价'
            default:
                return str + '星'
            }
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        $route () {
            this.order_type_id = this.$route.query.order_type_id
            this.user_card_no = this.$route.query.user_card_no
            this.order_name = this.$route.query.order_name
            this.GetByRoleOrderListFn()
        }
    }
}
</script>
