<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-3">
                    <span class="cLightGray pr12">预留名称</span>
                    <span>预留</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr12">预留名称</span>
                    <span>预留</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr12">预留名称</span>
                    <span>预留</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr12">预留名称</span>
                    <span>预留</span>
                </p>
                <span><span class="circlemark circlemark-lightGreen">良</span></span> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <!-- <router-link tag="div" exact :to="routerPath('ordertDetailThree?index='+index)" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in drawList" :key="index">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">类型</span><br>
                   <span>{{item.type}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span><br>
                    <span>{{item.orderno}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span><br>
                    <span>{{item.stage === 0 ? '已完成' : '执行中'}}</span>
                </p>
                <span><span :class="['circlemark', item.stage === 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed' ]">{{item.stage === 0 ? '完' : '执'}}</span></span>
            </div>
        </router-link> -->
        <router-link tag="div" exact  :to="{path:routerPath('ordertDetailThree'), query: {entityList: entityList}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">订单</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">订单个数</span>
                    <span>{{entityList.length}}</span>
                </p>
                 <p class="col-md-4">
                   <span class="cLightGray pr8">金额</span>
                   <span>{{totalMoney()}}</span>
                </p>
                <!-- <span><span :class="['circlemark', item.stage === 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed' ]">{{item.stage === 0 ? '完' : '执'}}</span></span> -->
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" exact :to="routerPath('orderDetailThreeHandel')" class="analyItem anItemBor" active-class="anItemBor-active" >
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getProjectOrder } from '../Resources/Api'
export default {
    data () {
        return {
            loading: false,
            entity: {}, // 页面实体
            entityList: [] // 页面实体集合
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        console.info(this.leftInfo)
        this.load()
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
        totalMoney () {
            let sumMoney = 0
            this.entityList.forEach((item, index) => {
                sumMoney += item.price
            })
            return sumMoney
        },
        // 查询回款二段数据
        load () {
            this.loading = true
            let param = {
                orderNo: this.leftInfo.orderno // this.leftInfo.orderno
            }
            getProjectOrder(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.entityList = results.data.Body.projectOrderList
                    console.log(this.entityList)
                    this.loading = false
                }
            }).catch(() => {})
        },
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        },
        // 金额过滤
        toFixed (value) {
            if (value == null || isNaN(value) || value === undefined) {
                return '0.00'
            } else {
                return value.toFixed(2)
            }
        }
    }
}
</script>
