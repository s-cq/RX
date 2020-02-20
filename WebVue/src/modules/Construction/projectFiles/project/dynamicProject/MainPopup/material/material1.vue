<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'供应商详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-if="leftInfo.AfterMarketState > 10" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) in datalist.items" :key="index">
            <p class="analyItemTit tx-center">{{item.shopName}}</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <img :src="item.shopPhoto" style="width:60px;height:60px;" alt="">
                </div>
                <div class="col-md-9">
                    <div class="col-md-6"><span class="cLightGray pr8">编号</span><span>{{item.shopCode}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">主营</span><span :title="item.manageMainType">{{item.manageMainType | truncate(10)}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">产品</span><span>{{item.matCount}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">商家</span><span>{{item.userCount}}</span></div>
                </div>
            </div>
        </div>
    </div>
        <div class="layerRtb-scroll thinScroll" v-else v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) in datalist" :key="index">
            <p class="analyItemTit tx-center">{{item.shopName}}</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <img :src="item.shopPhoto" style="width:60px;height:60px;" alt="">
                </div>
                <div class="col-md-9">
                    <div class="col-md-6"><span class="cLightGray pr8">编号</span><span>{{item.shopCode}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">主营</span><span :title="item.manageMainType">{{item.manageMainType | truncate(10)}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">产品</span><span>{{item.matCount}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">商家</span><span>{{item.userCount}}</span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">产品</span><span>{{matCount}}</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">店铺</span><span>{{leftInfo.AfterMarketState > 10?datalist.items.length:datalist.length}}</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">商家</span><span>{{shopCount}}</span></div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetMatDetails, GetShopItemsByRwdID } from '../../Resources/Api/index'
export default {
    data () {
        return {
            datalist: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        shopCount () {
            if (this.leftInfo.AfterMarketState > 10) {
                return this.datalist.items.map(startReady => startReady.userCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
            } else {
                return this.datalist.map(startReady => startReady.userCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
            }
        },
        matCount () {
            if (this.leftInfo.AfterMarketState > 10) {
                return this.datalist.items.map(startReady => startReady.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
            } else {
                return this.datalist.map(startReady => startReady.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
            }
        }
    },
    created () {
        this.load()
    },
    methods: {
        load () {
            let _this = this
            if (this.leftInfo.AfterMarketState > 10) {
                GetShopItemsByRwdID({
                    rwdID: this.leftInfo.orderno
                }).then((result) => {
                    _this.datalist = result.data.body
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                GetMatDetails({
                    F_OrderNo: this.leftInfo.orderno,
                    F_CityID: this.leftInfo.areaid
                }).then((result) => {
                    _this.datalist = result.data.Body
                }).catch((err) => {
                    console.log(err)
                })
            }
        }


    }
}
</script>
