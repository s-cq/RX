<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">金额</span>
                        <span>{{Number(orderMoney)+Number(workerMoney.worker_money*workerSum)}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
            <router-link tag="div" :to="{path: routerPath('processEnvironmentorder'),query:{order_type_id:item.order_type_id,user_card_no:leftInfo.cardNo,order_name:item.name,priceCount:item.unit_price*item.orderCount}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in orderList" :key="index" exact>
                <p class="analyItemTit tx-center">{{item.name}}</p>
                <p class="analyItemTit tx-center" style="display:none">{{item.order_type_id}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{item.orderCount}}个</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{item.unit_price}}</span>
                    </p>
                    <!-- <p class="col-md-4 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{}}</span>
                    </p> -->
                </div>
            </router-link>

            <router-link tag="div" :to="{name: 'worker'}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">工人录入</p>
                <!-- <p class="analyItemTit tx-center" style="display:none">{{item.order_type_id}}</p> -->
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">个数</span>
                        <span>{{workerSum}}个</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">单价</span>
                        <span>{{workerMoney.worker_money}}</span>
                    </p>
                    <!-- <p class="col-md-4 ">
                        <span class="cLightGray pr8">总价</span>
                        <span>{{}}</span>
                    </p> -->
                </div>
            </router-link>

        </div>
        <div class="pr10">
            <router-link tag="div" :to="{name:'handerProcess'}" class="analyItem anItemBor" active-class="anItemBor-active" exact>
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">总个数</span>
                        <span>{{countSum}}</span>
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
import {
    getStayStayProcessDetail,
    getWorkerDetails
} from '../Resources/Api'
export default {
    data () {
        return {
            orderList: [],
            countSum: 0,
            countMoney: 0.0,
            anQuan: 0,
            xingXiang: 0,
            huanJing: 0,
            xunJian: 0,
            orderMoney: 0,
            workerSum: 0,
            body: {},
            workerMoney: {},
            workerDetails: {}
        }
    },
    created () {
        this.GetByRoleOrderListFn()
        this.getWorkerDetailsFn()
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
        GetByRoleOrderListFn () {
            this.anQuan = 0
            this.xingXiang = 0
            this.huanJing = 0
            this.xunJian = 0
            let _this = this

            getStayStayProcessDetail({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                _this.orderList = results.data.Body.StayStayProcessDetail
                this.orderMoney = results.data.Body.orderMoney
                for (var i = 0; i < _this.orderList.length; i++) {
                    this.countSum += _this.orderList[i].orderCount
                    this.countMoney += _this.orderList[i].orderCount * _this.orderList[i].unit_price
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getWorkerDetailsFn () {
            getWorkerDetails({
                user_card_no: this.leftInfo.cardNo,
                grade: this.leftInfo.abilityLevel
            }).then(results => {
                this.body = results.data.Body
                this.workerSum = this.body.workerDetails.length
                this.workerDetails = this.body.workerDetails
                this.workerMoney = this.body.workerMoney
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetByRoleOrderListFn()
        }
    }
}
</script>
