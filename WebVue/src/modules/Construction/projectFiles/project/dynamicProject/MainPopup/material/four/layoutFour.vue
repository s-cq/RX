<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'订单详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">进度</p>
            <div class="analyItemCon">
                <el-steps :active="sepindex" align-center>
                    <el-step v-for="(item, index) in datalist.orderFlow" :key="index" :title="item.title" :description="item.execTime"></el-step>
                </el-steps>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">店铺</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">名称</span><span>{{datalist.shopInfo.compName}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">类型</span><span>{{datalist.shopInfo.shopName}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">地址</span><span>{{datalist.shopInfo.cityName}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">订单数</span><span>{{datalist.shopInfo.orderCount}}</span></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料清单</p>
            <div class="analyItemCon">
                <div class="col-md-12" v-for="(item, index) in datalist.materialItems" :key="index">
                    <p class="col-md-2"><span class="cLightGray" title="名称">名称:</span><span :title="item.productData.matName">{{item.productData.matName | truncate(5) }}</span></p>
                    <p class="col-md-2"><span class="cLightGray" title="品牌">品牌:</span><span :title="item.productData.brandName">{{item.productData.brandName | truncate(5)}}</span></p>
                    <p class="col-md-3"><span class="cLightGray" title="规格">规格:</span><span :title="item.productData.valueList[0].paraValue">{{item.productData.valueList[0].paraValue | truncate(10)}}</span></p>
                    <p class="col-md-4"><span class="cLightGray" title="型号">型号:</span><span :title="item.productData.matSpec">{{item.productData.matSpec |  truncate(10)}}</span></p>
                    <p class="col-md-1"><span class="cLightGray" title="数量">数量:</span><span :title="item.alreadyCount">{{item.alreadyCount}}</span></p>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">
                <div class="col-md-3" v-for="(item, index) in datalist.photoItems" :key="index">
                    <img :src="item" style="width: 60px;height: 60px;" alt="">
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">评价</p>
            <div class="analyItemCon">
                <div  v-if=" datalist.evaluateOrder.evaluateStar !==undefine" class="col-md-12" >
                    <div class="col-md-3"><span class="cLightGray pr8">评价</span><span>{{datalist.evaluateOrder.evaluateStar}}星</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">印象</span><span :title="datalist.evaluateOrder.evaluateReamrk">{{datalist.evaluateOrder.evaluateReamrk}}</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">描述</span><span>{{datalist.evaluateOrder.markItems}}</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">附件</span><span>
                        <img :src="item" style="width: 60px;height: 60px;" v-for="(item, index) in datalist.evaluateOrder.markItems" :key="index"></span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">时间</span><span>{{datalist.evaluateOrder.time}}</span></div>
                </div>
                <div  v-else class="col-md-12" >
                    <span class="cLightGray pr8">尚未评价</span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetOrderDetailsByClient } from '../../../Resources/Api/index'
export default {
    props: [
        'orderid'
    ],
    data () {
        return {
            datalist: [],
            sepindex: 1
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        load () {
            let _this = this
            GetOrderDetailsByClient({
                orderId: this.orderid
            }).then((result) => {
                _this.datalist = result.data.body
                for (let index = 0; index < this.datalist.orderFlow.length; index++) {
                    const element = this.datalist.orderFlow[index]
                    if (element.state === '进行中') {
                        this.sepindex = index
                    }
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        clickFourShow (index) {
            this.fourIndex = index
        }

    }
}
</script>
