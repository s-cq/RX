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
        <router-link tag="div" exact :to="routerPath('ordertDetailThree?index='+index)" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in drawList" :key="index">
            <p class="analyItemTit tx-center">订单</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">订单个数</span><br>
                    <span>0</span>
                </p>
                 <p class="col-md-4">
                   <span class="cLightGray pr8">金额</span><br>
                   <span>0</span>
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
export default {
    name: '',
    data () {
        return {
            drawList: [
                {
                    name: '始结构图',
                    type: '原始结构图',
                    orderno: '80-5555-YS-1',
                    stage: 0
                },
                {
                    name: '分区构图',
                    type: '分区构图',
                    orderno: '80-5555-FQ-1',
                    stage: 0
                },
                {
                    name: '功能构图',
                    type: '功能构图',
                    orderno: '80-5555-GN-1',
                    stage: 0
                },
                {
                    name: '色彩构图',
                    type: '色彩构图',
                    orderno: '80-5555-SC-1',
                    stage: 0
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        totalProject () {
            let number = 0
            this.offerList.forEach(item => {
                number += item.number
            })
            return number
        },
        totalMoney () {
            let money = 0
            this.offerList.forEach(item => {
                money += item.money
            })
            return money
        }
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
