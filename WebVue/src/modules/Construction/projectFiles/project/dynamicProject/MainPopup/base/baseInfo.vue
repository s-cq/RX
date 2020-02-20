<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'基础信息'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270" v-if="this.$route.query.ind === 1">
        <div v-if="loginList.length>0">
            <div class="analyItem" v-for="(item,index) in loginList" :key="index">
                <p class="analyItemTit tx-center">第{{loginList.length - index}}次</p>
                <div class="analyItemCon">
                    <div class="col-md-2">
                        <span class="cLightGray pr5">登陆端</span> <span>{{item.loginType}}</span>
                    </div>
                    <div class="col-md-6" v-if="item.loginType === 'APP'">
                        <span class="cLightGray pr5">登陆设备</span> <span>{{item.device}}</span>
                    </div>
                    <div class="col-md-6">
                        <span class="cLightGray pr5">登陆时间</span> <span>{{item.createTime}}</span>
                    </div>
                    <div class="col-md-4">
                        <span class="cLightGray pr5">登陆阶段</span> <span>{{item.stage}}</span>
                    </div>
                </div>
            </div>
         </div>
    </div>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "270" v-if="this.$route.query.ind === 2">
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">

            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"  v-if="this.$route.query.ind === 1">
                 <div class="col-md-4"><span class="cLightGray pr8">登陆次数</span> <span>{{loginList.length}} 次</span></div>
            </div>
            <div class="analyItemCon"  v-if="this.$route.query.ind === 2">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { GetLoginList } from '../../Resources/Api/index'
export default {
    data () {
        return {
            loginList: []
        }
    },
    created () {
        this.loginList = this.$route.query.loginList
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
        $route () {
            this.loginList = this.$route.query.loginList
        }
    }
}
</script>
