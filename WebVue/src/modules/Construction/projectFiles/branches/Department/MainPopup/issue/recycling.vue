<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'回收'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">信息</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cLightGray pr8">设备号</span>
                    <span>{{ leftInfo.encode_device }}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">监控号</span>
                    <span>{{ leftInfo.camera }}</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">项目经理</span>
                    <span>暂无</span>
                </p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">项目监理</span>
                    <span>暂无</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">收回</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{ nowTimeInfo }}</span>
                </p>
                <el-button v-if="leftInfo.camera_state == 1" type="primary" class="fr" @click="_updateCameraStateFn">确认</el-button>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-12 tx-center">
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// vuex
import { mapGetters, mapMutations } from 'vuex'
// Api
import { updateCameraState } from '../../Resources/Api/index'
export default {
    data () {
        return {
            nowTime: new Date()
        }
    },
    created () {

    },
    methods: {
        ...mapMutations({
            setUpdateLeft: `SET_UPDATE_LEFT`
        }),
        /* 更新监控状态 */
        _updateCameraStateFn () {
            let params = {
                camera_state: 2, // 出库状态 0 = 库存1 = 已出库 2 = 归库
                camera: this.leftInfo.camera, // 监控编号
                point_id: '', // --点位
                region_id: this.leftInfo.region_id, // --地区id
                order_no: this.twoToThreeInfo.order_no, // --单号
                remark: this.userInfo.as_fullName, // --备注， 如果是工程经理操作（ 传入工程经理谁操作归库） 如果是监理操作（ 传入监理谁操作出库）
                opereater: this.userInfo.as_fullName // --操作人
            }
            updateCameraState(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.setUpdateLeft()
                }
            }).catch((err) => {
                console.log(`更新监控状态接口错误,错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'twoToThreeInfo']),
        nowTimeInfo () {
            let time = this.$utils.format('yyyy-MM-dd', this.nowTime)
            return time
        }
    }
}
</script>
