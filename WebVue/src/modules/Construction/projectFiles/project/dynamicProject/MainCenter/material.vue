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
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link :to="routerPath('material1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">供应商</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">产品</span><span>{{matorderModel.matCount}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">店铺</span><span></span>{{matorderModel.shopCount}}</div>
                <div class="col-md-3"><span class="cLightGray pr8">商家</span><span>{{matorderModel.userCount}}</span></div>
            </div>
        </router-link>
        <router-link :to="routerPath('material2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">全部</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">总数</span><span>{{matorderModel.orderCount}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">已评价</span><span>{{matorderModel.orderCountToHasEvaluate}}</span></div>
            </div>
        </router-link>
         <router-link :to="routerPath('material3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">进行中</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">总数</span><span>{{matorderModel.orderCountToProceed}}</span></div>
            </div>
        </router-link>
        <router-link :to="routerPath('material4')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">待验收</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">总数</span><span>{{matorderModel.orderCountToAccept}}</span></div>
            </div>
        </router-link>
        <router-link :to="routerPath('material5')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">待评价</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">总数</span><span>{{matorderModel.orderCountToEvaluate}}</span></div>
            </div>
        </router-link>
    </div>
       <div class="pr10">
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetProinfoStatisticsInfoByClient } from '../Resources/Api/index'
export default {
    data () {
        return {
            matorderModel: {} // 项目材料订单信息
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
        // 自动加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                rwdID: this.leftInfo.orderno
            }
            // 根据条件阶段查询订单
            GetProinfoStatisticsInfoByClient(parm).then((result) => {
                if (result.data.statusCode === 1) {
                    _this.matorderModel = result.data.body
                }
            }).catch((error) => {
                console.log(error)
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
