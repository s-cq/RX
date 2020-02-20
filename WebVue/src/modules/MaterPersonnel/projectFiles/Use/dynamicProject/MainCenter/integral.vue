<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="100">
             <router-link tag="div" :to="{path: routerPath('integralInfo'), query:{integral:integral}}"  class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">积分</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">当前</span>
                        <span class="cRed">{{integral.aggregateIntegral}}分</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('integralComplaints')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">投诉</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">记录的客户投诉回访</span>
                        <span class="cRed"></span>
                    </p>
                </div>
            </router-link>
              <router-link tag="div" :to="routerPath('integralRejecte')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">拒单</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">发包拒单</span>
                        <span class="cRed"></span>
                    </p>
                </div>
            </router-link>
              <router-link tag="div" :to="routerPath('integralRefund')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">退单</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">发包退单</span>
                        <span class="cRed"></span>
                    </p>
                </div>
            </router-link>
              <router-link tag="div" :to="routerPath('integralPenalty')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">管理</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">所有的罚款</span>
                        <span class="cRed"></span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('integralEvaluate')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">评价</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">所有的评价</span>
                        <span class="cRed"></span>
                    </p>
                </div>
            </router-link>
        </div>
        <div class="pr10">
        <router-link tag="div" :to="routerPath('')" class="analyItem" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                 <p class="col-md-4">
                            <span>{{integral.aggregateIntegral}}分</span>
                        </p>
                         <p class="col-md-4">
                            <span>{{integral.userLevel}}级降{{integral.nextLevel}} 级</span>
                        </p>
                         <p class="col-md-4">
                            <span>差额{{100-Number(integral.aggregateIntegral)}}分</span>
                        </p>
            </div>
        </router-link>
    </div>
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
import { getIntegralMsg } from '../Resources/Api'
export default {
    data () {
        return {
            integral: {}
        }
    },
    created () {
        this.GetIntegral()
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
        GetIntegral () {
            let _this = this
            _this.integral = {}
            getIntegralMsg({
                uid: this.leftInfo.uid
            }).then(results => {
                this.integral = results.data.Body
            }).catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetIntegral()
        }
    }
}

</script>
