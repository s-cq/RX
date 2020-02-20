<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="100">
        <router-link tag="div" :to="routerPath('issueRecord')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">基础信息</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">卡号</span><span>{{ leftInfo.card }}</span>
                </p>
                <p class="col-md-4" :title="leftInfo.encode_device_name"><span class="cLightGray pr8">设备名称</span><span>{{ leftInfo.encode_device_name  }}</span></p>

                <p class="col-md-4">
                    <span class="cLightGray pr8">设备状态</span>
                    <span v-if="leftInfo.state === 0">在线</span>
                    <span v-else-if="leftInfo.state === 1">不在线</span>
                    <span v-else>未检测</span>
                </p>
                <p class="col-md-4" :title="leftInfo.camera_name"><span class="cLightGray pr8">监控名称</span><span>{{ leftInfo.camera_name }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">开拍时间</span><span>{{ cameraInfo.begin_date }}点</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">结束时间</span><span>{{ cameraInfo.end_data }}点</span></p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('issueIssue')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">出库</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">项目</span><span></span></p>
                <p class="col-md-6"><span class="cLightGray pr8">项目名称</span><span></span></p>
                <p class="col-md-6"><span class="cLightGray pr8">监理</span><span></span></p>
                <p class="col-md-6"><span class="cLightGray pr8">领取时间</span><span></span></p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('issueRecycling')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">收回</p>
            <div class="analyItemCon">
                <p class="col-md-12"><span class="cLightGray pr8">时间</span><span></span></p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('issueUsage')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">使用记录</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">共使用</span><span></span></p>
                <p class="col-md-6"><span class="cLightGray pr8">项目</span><span></span></p>
            </div>
        </router-link>
    </div>
    <div class="layerRtb-footer" style="padding-left: 0px;">
        <router-link tag="div" :to="routerPath('issueHander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
// Vuex
import { mapGetters, mapMutations } from 'vuex'
// Api
import { getSauxiliaryInfo } from '../Resources/Api/index'
export default {
    data () {
        return {
            cameraInfo: {}
        }
    },
    created () {
        this._getSauxiliaryInfoFn()
    },
    methods: {
        ...mapMutations({
            setTwoToThree: `SET_TWO_TO_THREE_INFO`
        }),
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        //  按监控编号查询附属信息
        _getSauxiliaryInfoFn () {
            let _this = this
            let params = {
                camera: _this.leftInfo.camera
            }
            getSauxiliaryInfo(params).then(result => {
                if (result.data.StatusCode === 0) {
                    _this.cameraInfo = result.data.Body.orderList[0]
                    _this.setTwoToThree(_this.cameraInfo)
                }
            }).catch(err => {
                console.log(`按监控编号查询附属信息接口错误，错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this._getSauxiliaryInfoFn()
        }
    }
}
</script>
