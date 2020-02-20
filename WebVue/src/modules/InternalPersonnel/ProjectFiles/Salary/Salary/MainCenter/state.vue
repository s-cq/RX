<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">人数</span><span>{{personCount}}人</span>
                    </p>

                </div>
            </div>
        </div>
        <!-- <div class="thinScroll pr10" v-scrollHeight="84">
            <div class="analyItem">
                <p class="analyItemTit tx-center">结果</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">过程</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">管理</p>
                <div class="analyItemCon">

                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">薪酬</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div> -->
        <div class="pr10">
            <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <div class="fl col-md-3">
                        <span class="score-strong fz16 cGreen">{{trueSalaryTotal}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { getInternalSalaryByUserCard } from '../Resources/Api'
export default {
    data () {
        return {
            trueSalaryTotal: 0.00,
            personCount: 0
        }
    },
    created () {
        this.trueSalaryTotal = this.leftInfo.salaryTotal
        this.personCount = this.leftInfo.totalCount
        this.getInternalSalaryByUserCardFn()
    },
    methods: {
        getInternalSalaryByUserCardFn () {
            getInternalSalaryByUserCard({

            }).then(results => {

            })
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.trueSalaryTotal = this.leftInfo.salaryTotal
            this.personCount = this.leftInfo.totalCount
        }
    }
}
</script>
