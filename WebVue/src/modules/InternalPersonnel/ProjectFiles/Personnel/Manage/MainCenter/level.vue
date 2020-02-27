<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                 <div class="analyItemCon">
                     <p class="col-md-4">
                        <button class="uiBtn-normal " :class="{'uiBtn-blue':flg==2 }"  @click="flg=2">普级</button>
                    </p>
                     <p class="col-md-4">
                        <button class="uiBtn-normal " :class="{'uiBtn-blue':flg==3 }"  @click="flg=3">管级</button>
                    </p>
                    <p class="col-md-4">
                        <button class="uiBtn-normal " :class="{'uiBtn-blue':flg==1 }"  @click="flg=1">管培级</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="87">
            <div v-if="flg==1">
                <router-link tag="div" :to="{path: routerPath('levelThree'), query: {index:1}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center analyLightGreen">招</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">学历</span>
                            <span class="">本科</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">全日制</span>
                            <span class="">是</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">专业</span>
                            <span class="">市场营销</span>
                        </p>
                    </div>
                </router-link>
                <router-link tag="div" :to="{path: routerPath('levelThree'), query: {index: 2}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center analyLightGreen">培</p>
                    <div class="analyItemCon">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">培养标准</span>
                        </p>
                    </div>
                </router-link>
                <router-link tag="div" :to="{path: routerPath('levelThree'), query: {index: 3}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center analyLightGreen">用</p>
                    <div class="analyItemCon">
                        <p class="col-md-6">
                            <span class="cLightGray pr8">考核标准</span>
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="pr10">
            <router-link tag="div" :to="{path: routerPath('levelThreeHander'), query: {index: 3}}" exact class="analyItem anItemBor" active-class="anItemBor-active">
                    <p class="analyItemTit tx-center ">处理</p>
                    <div class="analyItemCon">
                        <p class="col-md-6">
                            <span class="cLightGray pr8"></span>
                        </p>
                    </div>
            </router-link>
            <!-- <div class="analyItem anItemBor">
                <p class="analyItemTit tx-center">处理</p>
                <div class="analyItemCon">
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            flg: 0// zpy
        }
    },
    created () {
        this.nextLevel = this.leftInfo.abilityLevel !== '' && this.leftInfo.abilityLevel >= 0 ? Number(this.leftInfo.abilityLevel) + 1 : ''
        if (this.nextLevel === 13) {
            this.UseResultgetUseResultMonthReview(12, 1)
            this.UseResultgetUseResultMonthReview(12, 2)
        } else {
            this.UseResultgetUseResultMonthReview(this.leftInfo.abilityLevel, 1)
            this.UseResultgetUseResultMonthReview(this.nextLevel, 2)
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
    },
    watch: {
        leftInfo () {
        }
    }
}
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
