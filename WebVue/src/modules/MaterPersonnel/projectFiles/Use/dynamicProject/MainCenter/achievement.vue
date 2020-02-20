<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <div class="col-md-11">
                        <span class="cLightGray pr8">竣工金额</span>
                        <span class="completedMoneyClass">0.00</span>万
                    </div>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="100">
            <router-link tag="div" :to="routerPath('achievementAchievementl')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="clearfix">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">等级</span>
                            <span class="levelClass">4</span>级
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">竣工金额</span>
                            <span class="completedMoneyClass">0.00</span>万
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="layerRtb-footer">
            <router-link tag="div" :to="routerPath('achievementAchievementlhander')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">距</span>
                        <span class="NextLevelClass">5</span>级
                    </p>
                    <p class="col-md-2">
                        <span class="NextLevelDayClass">10</span>天
                    </p>
                    <p class="col-md-2">
                        <span class="diffMoneytwo cRed">-30.00</span>万
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态</span>
                        <span class="isAgree cRed">不同意</span>
                    </p>
                    <p class="">
                        <span class="monthClass">9</span>月
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

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
