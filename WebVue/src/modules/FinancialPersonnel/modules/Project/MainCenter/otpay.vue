<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-4">
                    <span class="pr8 cLightGray">项目</span>
                    <span>{{offerList.length}}种</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总项</span>
                    <span>{{totalProject}}项</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总额</span>
                    <span>{{totalMoney}}元</span>
                </p> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index='+item.name)" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in offerList" :key="index">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>0</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>0</span>元
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-3">
                    <span class="cLightGray pr8">工程总造价</span>
                    <span class="projectNum"> 96129.25元</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">其他费用</span>
                    <span class="projectMoney">0元</span>
                </p> -->
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
            offerList: [
                {
                    name: '物业押金',
                    number: 1,
                    money: 1119.04
                },
                {
                    name: '物业管理费',
                    number: 6,
                    money: 57779.36
                },
                {
                    name: '工程一切险',
                    number: 1,
                    money: 700
                },
                {
                    name: '空调款',
                    number: 16,
                    money: 34346.6
                },
                {
                    name: '客户代购',
                    number: 16,
                    money: 34346.6
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
