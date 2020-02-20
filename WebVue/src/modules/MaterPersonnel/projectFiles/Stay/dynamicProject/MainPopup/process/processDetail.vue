<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="orderList.length>0">
        <div class="analyItem" v-for="(item,index) in orderList" :key="index">
            <p class="analyItemTit tx-center">{{item.orderName}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">{{item.orderNumber}}</span>
                </p>
                <p class="col-md-4">
                <span class="cLightGray pr8">{{item.orderName}}</span>
                <p>
                 <p class="col-md-4">
                <span class="cLightGray pr8">{{item.orderTime}}</span>
                <p>
                     <span></span> <p>
                    <span></span>
                    <span class="circlemark circlemark-red">{{item.status==0?"完":"未"}}</span>
                </p>
            </div>
        </div>
        </div>
        <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">订单</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
                        </p>
                    </div>
                </div>
        </div>
        <!-- <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p>
            </div>
        </div> -->
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                        <span class="cLightGray pr8">应做</span>
                        <span>{{rest[0].oughtOrder}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已做</span>
                        <span class="c666">{{rest[0].overOrder}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">差额</span>
                        <span class="c666">{{rest[0].oughtOrder-rest[0].overOrder}}</span>
                    </p>
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
</div>
</template>
<script>
import { GetOrderInfoByProject, GetByuidProjectManagerProcess } from '../../Resources/Api'
import {
    mapGetters
} from 'vuex'
export default {
    data () {
        return {
            orderList: [],
            rest: []
        }
    },
    created () {
        this.GetOrderInfo()
        this.getProjectManagerProcess()
    },
    methods: {
        GetOrderInfo () {
            let _this = this
            _this.orderList = []
            GetOrderInfoByProject({
                orderNo: _this.$route.query.orderNo
            }).then(results => {
                _this.orderList = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        getProjectManagerProcess () {
            let _this = this
            _this.rest = []
            GetByuidProjectManagerProcess({
                uid: _this.leftInfo.uid,
                orderNo: _this.$route.query.orderNo
            }).then(results => {
                _this.rest = results.data.Body
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
            this.GetOrderInfo()
            this.getProjectManagerProcess()
        },
        leftInfo () {
            this.getProjectManagerProcess()
        }
    }
}
</script>
