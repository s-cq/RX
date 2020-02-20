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
        <router-link exact v-for="(item,index) in processList" :key="index" tag="div" :to="routerPath('processProcessDetail?orderNo='+item.orderNo)" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">{{item.compName.substring(0,4)}}</p>
            <div class="analyItemCon">
                    <p class="col-md-3">
                        <span class="cLightGray pr8">应做</span>
                        <span>{{item.oughtOrder}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">已做</span>
                        <span class="c666">{{item.overOrder}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">差额</span>
                        <span class="c666">{{item.oughtOrder - item.overOrder}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">阶段</span>
                        <span class="c666">{{item.afterMarketState}}</span>
                    </p>
            </div>
        </router-link>
     <!--    <router-link tag="div" :to="routerPath('processProcessDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">订单2</p>
            <div class="analyItemCon">

            </div>
        </router-link> -->
    </div>
</div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    GetByuidProjectManagerProcess
} from '../Resources/Api'
export default {
    data () {
        return {
            processList: []
        }
    },
    created () {
        this.getProjectManagerProcess()
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
        getProjectManagerProcess () {
            let _this = this
            _this.processList = []
            GetByuidProjectManagerProcess({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.processList = results.data.Body
                _this.processList.forEach(element => {
                    element.afterMarketState = _this.$options.filters['AfterMarketState'](element.afterMarketState, element.constructionPeriod)
                })
            }).catch(error => {
                console.log(error)
            })
        }
    },
    filters: {
        AfterMarketState (parone, partwo) {
            let value = ''
            switch (parone) {
            case 2:
                value = '准备'
                break
            case 3:
                switch (partwo) {
                case 1:
                    value = '施前'
                    break
                case 2:
                    value = '施中'
                    break
                case 3:
                    value = '施尾'
                    break
                default:
                    value = '在施'
                    break
                }
                break
            case 4:
                value = '竣工'
                break
            }
            return value
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.getProjectManagerProcess()
        }
    }
}
</script>
