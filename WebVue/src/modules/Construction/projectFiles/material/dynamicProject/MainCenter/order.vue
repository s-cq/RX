<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="进入该阶段的日期">{{leftInfo.AfterMarketStateTime}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8">未开启</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">正</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link  v-for="(item,index) in matorderModel"  :key="index" tag="div" exact
        :to="{name:'orderinfo',params:{matOrder: item}, query: {ind: index}}"
         class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">订单{{index+1}}</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLight pr8">订单号</span><span>{{item.orderNumber}}</span></div>
                    <div class="col-md-3"><span class="cLight pr8">产品</span><span>{{item.matCount}}种</span></div>
                    <div class="col-md-3"><span class="cLight pr8">材料商</span><span>{{item.userName}}</span></div>
                    <div class="col-md-3" v-if="item.itemsFlow!==null"><span class="cLight pr8">{{item.itemsFlow[0].title}}</span><span>{{item.itemsFlow[0].time}}</span></div>
                    <div class="col-md-3" v-if="item.itemsFlow!==null"><span class="cLight pr8">{{item.itemsFlow[1].title}}</span><span>{{item.itemsFlow[1].time}}</span></div>
                    <div class="col-md-3"><span class="cLight pr8">订单状态</span><span></span></div>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetOrderItemsByRwdIDAndState } from '../Resources/Api/order'
export default {
    data () {
        return {
            matorderModel: [] // 项目材料订单信息
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
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
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let parm = {
                rwdID: _this.leftInfo.orderno,
                state: 0
            }
            GetOrderItemsByRwdIDAndState(parm).then((result) => {
                if (result.data.statusCode === 1) {
                    _this.matorderModel = result.data.body
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
