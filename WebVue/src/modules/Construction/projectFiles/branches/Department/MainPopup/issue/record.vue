<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'基础信息'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">基础</p>
            <div class="analyItemCon">
                <p class="col-md-12"><span class="cLightGray pr8">卡号</span><span>{{ leftInfo.card }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">添加时间</span><span>{{ leftInfo.create_date | slice(0,10) }}</span></p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">设备状态</span>
                    <span v-if="leftInfo.state === 0">在线</span>
                    <span v-else-if="leftInfo.state === 1">不在线</span>
                    <span v-else>未检测</span>
                <p class="col-md-6"><span class="cLightGray pr8">设备名称</span><span>{{ leftInfo.encode_device_name }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">设备编号</span><span>{{ leftInfo.encode_device }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">监控名称</span><span>{{ leftInfo.camera_name }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">监控编号</span><span>{{ leftInfo.camera }}</span></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">拍摄</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">开始拍摄</span><span>{{ twoToThreeInfo.begin_date }}点</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">结束拍摄</span><span>{{ twoToThreeInfo.end_data }}点</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">间隔</span><span>{{ twoToThreeInfo.interval }}分</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getInfoByCamera } from '../../Resources/Api/index.js'
export default {
    data () {
        return {
            cameraInfo: {}
        }
    },
    created () {
        this._getInfoByCameraFn()
    },
    methods: {
        /* 使用监控编码获取监控信息 */
        _getInfoByCameraFn () {
            let params = {
                camera: this.leftInfo.camera
            }
            getInfoByCamera(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.cameraInfo = result.data.Body.orderList[0]
                }
            }).catch((err) => {
                console.log(`使用监控编码获取监控信息接口错误,错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo'])
    }
}
</script>
