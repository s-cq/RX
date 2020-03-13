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
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=物业押金&type=145')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">物业押金</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.Amount | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.DaiFuYJ+entity.SUMYJ | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{entity.Amount-(entity.DaiFuYJ+entity.SUMYJ) | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=物业管理费&type=146')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">物业管理费</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.AllWYGLF | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.DaiFuGLF+entity.SUMGLF | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{entity.AllWYGLF - entity.SUMGLF - entity.DaiFuGLF | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=工程一切险&type=162')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">工程一切险</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.AllGCYQX | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.DaiFuGCYQX + entity.SUMGCYQX | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{entity.AllGCYQX - entity.SUMGCYQX - entity.DaiFuGCYQX | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <div class="analyItem ">
        <!-- <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=人身意外险&type=162')" class="analyItem anItemBor" active-class="anItemBor-active"> -->
            <p class="analyItemTit tx-center">人身意外险</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.AllRSYWX | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.DaiFuRSYWX + entity.SUMRSYWX | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{entity.AllRSYWX - entity.SUMRSYWX - entity.DaiFuRSYWX | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        <!-- </router-link> -->
         </div>
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=空调款&type=112')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">空调款</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.KT_publish_fee | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.SumKTK | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{entity.KT_publish_fee - entity.SumKTK | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=消防款&type=113')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">消防款</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.XF_publish_fee | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.SumXFK | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{(entity.XF_publish_fee - entity.SumXFK) | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=钢结构款&type=109')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">钢结构款</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.GJG_publish_fee | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.SumGJGK | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{(entity.GJG_publish_fee)- (entity.SumGJGK) | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('otpayDetailThree?index=客户代购&type=163')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">客户代购</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                   <span class="cLightGray pr8">应付</span><br>
                   <span>{{entity.QT_publish_fee | toFixed()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">待付/已付</span><br>
                    <span>{{entity.SumQTFXK | toFixed()}}</span>项
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未付</span><br>
                    <span>{{entity.QT_publish_fee - entity.SumQTFXK | toFixed()}}</span>元
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
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
import { getOtherPaymentSecond } from '../Resources/Api'
export default {
    data () {
        return {
            loading: false,
            entity: {}, // 页面实体
            entityList: {} // 页面实体集合
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
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
        // 查询回款二段数据
        load () {
            this.loading = true
            let param = {
                orderNo: this.leftInfo.orderno // this.leftInfo.orderno
            }
            getOtherPaymentSecond(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.entity = results.data.Body.otherPaymentMap
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
