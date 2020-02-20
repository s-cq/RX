<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="cLightGreen pr8"> 准备</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="{path:routerPath('orderInfo'), query:{typeName: item}}" class="analyItem anItemBor" exact active-class="anItemBor-active"
            v-for="(item, index) in  qualityList" :key='index'
            >
            <p class="analyItemTit tx-center">{{item | slice(0,4)}}</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getConstProcess } from '../Resources/Api/index'
export default {
    data () {
        return {
            qualityList: [] // 质量订单
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getConstProcess()
    },
    methods: {

        getConstProcess () {
            let _this = this
            // let parm = {
            //     orderNo: '50-18189'
            // }
            let parm = {
                orderNo: this.leftInfo.orderno
            }
            getConstProcess(parm).then((result) => {
                _this.qualityList = result.data.Body.constProcessList
            }).catch((err) => {
                console.log(err)
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
    watch: {
        leftInfo () {
            this.getConstProcess()
        }
    }
}
</script>
