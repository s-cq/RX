<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-4">
                    <span class="pr8 cLightGray">合同额</span>
                    <span>9.60万</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应收</span>
                    <span class="cGreen">9.60万</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">已收</span>
                    <span class="cGreen">4.80万</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">差</span></span> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link tag="div" exact to="" class="analyItem " active-class="anItemBor-active">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减合同（装饰 +分项）= 与甲方（客户）新签订增减项合同金额">增减合同</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减发包（装饰 +分项）= 与丙方（项目经理）新签订增减发包金额">增减发包</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减利润（装饰 +分项） = （增减合同 - 增减发包 - 增项代购主材 - 增项税金）">增减利润</span><br>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('zjtalkDetailThree?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">装饰增减</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="与甲方（客户）新签订增项合同金额">增项合同</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="与甲方（客户）新签订减项合同金额">减项合同</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="与甲方（客户）新签订增减项合同金额">增减合同</span><br>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact to="" class="analyItem " >
            <p class="analyItemTit tx-center">分包</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增项发包（装饰）= 与丙方（项目经理）新签订增项发包金额">增项发包</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="减项发包（装饰）= 与丙方（项目经理）新签订减项发包金额">减项发包</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减发包（装饰）= 与丙方（项目经理）新签订增减发包金额">增减发包</span><br>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" exact :to="routerPath('zjtalkDetailThree?index=3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">分项增减</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减合同（分项）= 与甲方（客户）新签订增减合同金额">增减合同</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减发包（分项）= 与丙方（项目经理）新签订增减发包金额">增减发包</span><br>
                    <span class="cGreen">0.00</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="增减利润（分项）= （增减合同 - 增减发包 - 增项代购主材 - 增项税金）">增减利润</span><br>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10">
       <div class="analyItem ">
         <p class="analyItemTit tx-center">处理</p>
         <div class="analyItemCon"></div>
    </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: '',
    data () {
        return {


        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
