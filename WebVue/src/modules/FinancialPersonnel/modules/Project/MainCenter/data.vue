<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-4">
                    <span class="pr8 cLightGray">点位数量</span>
                    <span class="cGreen">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">使用完成</span>
                    <span class="cGreen">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">异常</span>
                    <span class="cRed">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">正常</span>
                    <span class="cGreen">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">使用中</span>
                    <span class="cGreen">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未使用</span>
                    <span class="cRed">个</span>
                </p> -->
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">预留1</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
            </div>
        </router-link>
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">预留2</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
            </div>
        </router-link>
        <router-link exact tag='div' :to="routerPath('dataDetailThree?index=3')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">预留3</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">预留</span>
                    <span>0</span>
                </p>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" exact :to="routerPath('dataDetailThreeHandel')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">共有</span>
                    <span class="cGreen">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">使用中</span>
                    <span class="cGreen">个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">未使用</span>
                    <span class="cRed">个</span>
                </p>
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
