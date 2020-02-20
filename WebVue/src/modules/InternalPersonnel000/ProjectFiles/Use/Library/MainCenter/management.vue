<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="10">
            <router-link tag="div" :to="{name:'resultCompletion',params:{datainfo: datainfo}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{datainfo.completeStandard}}万/周</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span>{{datainfo.completeStandardMonth}}万/月</span></div>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('managementPenalty')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">罚款</p>
                <div class="analyItemCon">

                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('managementNegotiation')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">洽商</p>
                <div class="analyItemCon">

                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { getWarehouseDetail } from '../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            datainfo: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        load () {
            getWarehouseDetail({ abilityLevel: this.leftInfo.grade })
                .then(result => {
                    if (result.data.Body.warehouseDetail !== null) {
                        this.datainfo = result.data.Body.warehouseDetail
                    } else {
                        this.datainfo = {
                            completeStandard: '-',
                            getCompleteStandardMonth: '-'
                        }
                    }
                })
                .catch(err => {
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
            this.load()
        }
    }
}
</script>
