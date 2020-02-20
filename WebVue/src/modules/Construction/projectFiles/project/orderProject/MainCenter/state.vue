<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-3">
                    <span class="cGreen pr8" :data-title="currentStage">{{leftInfo.stage | stage}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div class="analyItem">
            <p class="analyItemTit tx-center">订单</p>
            <div class="analyItemCon">
                <div class="col-md-12" >
                    <p class="col-md-3"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">当前阶段</span><span class="cGreen">完工</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { getSupervisorOrderState, getMaterialState } from '../Resources/Api/index'
export default {
    data () {
        return {
            currentStage: '当前阶段'
        }
    },
    created () {

    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
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
        // 加载

    },
    watch: {
        // leftInfo () {
        //     this.load()
        // }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
                value = '历史'
                break
            case 2:
                value = '准备'
                break
            case 3:
                value = '在施'
                break
            case 4:
                value = '竣工'
                break
            default:
                break
            }
            return value
        }
    }
}
</script>
