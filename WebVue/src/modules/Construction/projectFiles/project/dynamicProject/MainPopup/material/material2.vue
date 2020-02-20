<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem anItemBor" v-for="(item, index) in datalist" :key="index"  @click="clickFourShow(0,item.orderId)">
            <p class="analyItemTit tx-center">{{'订单'+(index+1)}}</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <img :src="item.itemsPhoto[0]" style="width:60px;height:60px;" alt="">
                </div>
                <div class="col-md-9">
                    <div class="col-md-6"><span class="cLightGray pr8">编号</span><span>{{item.orderNumber}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">产品</span><span>{{item.matCount}}</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">类型</span><span>{{item.orderType}}</span></div>

                    <div class="col-md-6" v-for="(item, index) in item.itemsFlow" :key="index">
                        <span class="cLightGray pr8">{{item.title}}</span><span>{{item.time}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">数量</span><span>{{datalist.length}}</span></div>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <layout-four v-if="fourIndex === 0" :key="0" :orderid="orderId"></layout-four>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GeProInfoOrderItemsByClient } from '../../Resources/Api/index'
import layoutFour from './four/layoutFour'
export default {
    components: {
        layoutFour
    },
    data () {
        return {
            datalist: [],
            fourIndex: undefined,
            orderId: 0
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
            GeProInfoOrderItemsByClient({
                rwdID: this.leftInfo.orderno,
                state: 0
            }).then((result) => {
                _this.datalist = result.data.body
            }).catch((err) => {
                console.log(err)
            })
        },
        clickFourShow (index, orderId) {
            this.fourIndex = index
            this.orderId = orderId
        }
    }
}
</script>

