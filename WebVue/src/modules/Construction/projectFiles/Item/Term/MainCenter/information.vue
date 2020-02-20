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
        <!-- <router-link tag="div" exact v-for="(item, index) in 10" :key="index" :to="routerPath(`informationPoint?index=${index+1}`)" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">点位{{ index + 1 }}</p>
            <div class="analyItemCon">

            </div>
        </router-link> -->
        <router-link tag="div" :to="routerPath('informationConfirm')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">核对</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">点位名称</span><span>{{ twoInfo.camera_name }}</span></p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">库存状态</span>
                    <span v-if="twoInfo.camera_state === 0">库存</span>
                    <span v-else-if="twoInfo.camera_state === 1">已出库</span>
                    <span v-else>已归库</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="{name: 'informationSetting', params: nowPoints}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">拍摄设置</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">开始时间</span><span>{{ nowPoints.begin_date }}点/天</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">结束时间</span><span>{{ nowPoints.end_data }}点/天</span></p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('informationInstall')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">安装</p>
            <div class="analyItemCon">
                <span class="cRed">--</span>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('informationPhotograph?pointId='+pointsInfo.camera)" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">拍照</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">拍摄</span><span>{{ twoInfo.cou }}天</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">共</span><span>{{ twoInfo.tot }}张</span></p>
            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('informationUntying')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">解绑</p>
            <div class="analyItemCon">
                <span class="cRed">--</span>
            </div>
        </router-link>
    </div>
    <div class="layerRtb-footer" style="padding-left: 0px;">
        <router-link tag="div" :to="routerPath('informationHander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
// Api
import { getSauxiliaryInfo } from '../../../branches/Department/Resources/Api/index'
import { getTow } from '../Resources/Api/index'
export default {
    props: ['pointsInfo'],
    data () {
        return {
            nowPoints: {
                begin_date: '',
                end_data: '',
                interval: ''
            }, // 当前点位详情信息
            twoInfo: {
                begin_date: 0,
                camera: '',
                camera_name: '',
                camera_state: 0,
                cou: 0,
                end_data: 0,
                tot: 0
            }
        }
    },
    created () {
        this._getSauxiliaryInfoFn()
        this._getTowFn()
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
        /* 根据点位camera获取详情信息 */
        _getSauxiliaryInfoFn () {
            this.nowPoints = {
                begin_date: '',
                end_data: '',
                interval: ''
            }
            let params = {
                camera: this.pointsInfo.camera
            }
            getSauxiliaryInfo(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    if (JSON.stringify(result.data.Body.orderList) !== '[]') {
                        this.nowPoints = result.data.Body.orderList[0]
                    }
                }
            }).catch((err) => {
                console.log(`根据点位camera获取详情信息接口错误,错误内容${err}`)
            })
        },
        /* 按点位查询拍摄的二段信息 */
        _getTowFn () {
            this.twoInfo = {
                begin_date: 0,
                camera: '',
                camera_name: '',
                camera_state: 0,
                cou: 0,
                end_data: 0,
                tot: 0
            }
            let params = {
                camera: this.pointsInfo.camera
            }
            getTow(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    if (JSON.stringify(result.data.Body.orderList) !== '[]') {
                        this.twoInfo = result.data.Body.orderList[0]
                    }
                }
            }).catch((err) => {
                console.log(`按点位查询拍摄的二段信息接口错误,错误内容${err}`)
            })
        }
    },
    watch: {
        pointsInfo () {
            this._getSauxiliaryInfoFn()
            this._getTowFn()
        }
    }
}
</script>
