<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title  :title="{name:'订单详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGreen pr8">{{MatList.baseInfo.orderState}}</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">订单号</span><span>{{MatList.baseInfo.orderNumber}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">合同号</span><span>{{leftInfo.contract_no}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">工程地址</span><span>xxxxxxxxxxx</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">下单</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">接单</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">配送</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">收货</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">评价</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetOrderFlowInfoToSecond } from '../Resources/Api/order'
export default {
    data () {
        return {
            params: [], // 二段传参 工种名称，工种编号
            MatList: [] // 材料信息
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.params = this.$route.params
        this.load()
    },
    methods: {
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let proparm = {
                orderId: _this.params.matOrder.orderId
            }
            GetOrderFlowInfoToSecond(proparm).then((result) => {
                if (result.data.statusCode === 1) {
                    _this.MatList = result.data.body
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    watch: {
        $route () {
            this.params = this.$route.params
            this.load()
        }
    }

}
</script>
