<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=前期')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">前期</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span>0</span>%
                </p>
            </div>
        </router-link>
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=中期')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">中期</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span>0</span>%
                </p>
            </div>
        </router-link>
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=后期')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">后期</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span>0</span>%
                </p>
            </div>
        </router-link>
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=其他')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">其他</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span>0</span>%
                </p>
            </div>
        </router-link>
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=现场贴纸')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">现场贴纸</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">应传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">已传</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">完成度</span>
                    <span>0</span>%
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <!-- <router-link tag="div" exact :to="routerPath('dataDetailThreeHandel')" class="analyItem anItemBor" active-class="anItemBor-active"> -->
            <div class="analyItem">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
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
