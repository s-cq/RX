<template>
<div class="">
    <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">项目</p>
        <div class="analyItemCon">
            <div class="col-md-4"><span class="cLightGray pr8">发包金额</span><span>{{proinfo.publishMoney}}元</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">材料总额</span><span>{{proinfo.planMoney}}元</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">材料占比</span><span>{{proinfo.proportion}}</span></div>
        </div>
    </router-link>
    <router-link :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">储值材料</p>
        <div class="analyItemCon">
            <div class="col-md-4"><span class="cLightGray pr8">总额</span><span>{{storedInfo.planMoney}}元</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">储值卡</span><span>{{storedInfo.cardCount}}个</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">产品</span><span>{{storedInfo.matCount}}个</span></div>
        </div>
    </router-link>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getProInfoMaterialInfoToReady } from '../../Resources/Api/proStage'
import { } from '../../Resources/Api/index'

export default {
    data () {
        return {
            proinfo: [], // 项目信息
            storedInfo: [] // 储值信息

        }
    },
    created () {
        this.load()
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
        },
        // 加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let proparm = {
                rwdID: _this.leftInfo.orderno
            }
            // 获取项目材料信息
            getProInfoMaterialInfoToReady(proparm).then(results => {
                if (results.data.statusCode === 1) {
                    _this.proinfo = results.data.body.proInfo
                    _this.storedInfo = results.data.body.storedInfo
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
