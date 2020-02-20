<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name: '确认'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">信息</p>
            <div class="analyItemCon">
                <div class="col-md-4 lh28" v-if="switchIndex != 1">
                    <span class="cLightGray pr8">点位名</span>
                    <span>{{ twoToThreeInfo.name }}</span>
                </div>
                <div class="col-md-4 lh28" v-else>
                    <span class="cLightGray pr8 fl">点位名</span>
                    <div class="width120 fl">
                        <el-input v-model="pointsName" placeholder="点位名称"></el-input>
                    </div>
                </div>
                <div class="components-switch">
                    <div v-show="switchIndex == 1">
                        <span class="switch-save" @click="switchChange(null, 'save')">保存</span>
                        <span class="switch-back" @click="switchChange(null, 'back')">返回</span>
                    </div>
                    <div v-show="switchIndex != 1">
                        <span class="switch-edit" @click="switchChange(1, 'edit')">编辑</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">摄像头</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">卡号</span><span>{{ leftInfo.order_no }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">添加时间</span><span>{{ leftInfo.create_date | slice(0,10) }}</span></p>
                <p class="col-md-6">
                    <span class="cLightGray pr8">设备状态</span>
                    <span v-if="leftInfo.state === 0">在线</span>
                    <span v-else-if="leftInfo.state === 1">不在线</span>
                    <span v-else>未检测</span>
                <p class="col-md-6"><span class="cLightGray pr8">设备编号</span><span>{{ projectInfo.encode_device }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">监控名称</span><span>{{ projectInfo.camera_name }}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">监控编号</span><span>{{ projectInfo.camera }}</span></p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">确认</p>
            <div class="analyItemCon">
                <div class="col-md-10">
                    <p class="col-md-12"><span>请确认摄像头与上面信息一致。</span></p>
                    <p class="col-md-12"><span>检查摄像头完整可用无问题。</span></p>
                    <p class="col-md-12"><span>确认后发生问题请自行负责。</span></p>
                </div>
                <div class="col-md-2 mt20">
                    <el-button type="primary" v-if="twoToThreeInfo.camera_state == 0" @click="confirmBtn">确认</el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px;">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
</div>
</template>
<script>
// vuex
import { mapGetters, mapMutations } from 'vuex'
// Api
import { updatePointName } from '../../Resources/Api/index'
import { updateCameraState, getInfoByCamera } from '../../../../branches/Department/Resources/Api/index'
export default {
    data () {
        return {
            switchIndex: null,
            pointsName: '', // 点位名称
            projectInfo: {} // 项目详情
        }
    },
    created () {
        this._getInfoByCameraFn()
    },
    methods: {
        ...mapMutations({
            setUpdateLeft: `SET_UPDATE_LEFT`
        }),
        switchChange (index, type) {
            if (index === 1) {
                this.pointsName = JSON.parse(JSON.stringify(this.twoToThreeInfo.name))
            }
            this.switchIndex = index
            if (type === 'save') {
                // ... do something
                this._updatePointNameFn()
            }
        },
        confirmBtn () {
            this.$confirm('是否确定您已拿到摄像头?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this._updateCameraStateFn()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        /* 获取监控编码获取监控信息 */
        _getInfoByCameraFn () {
            let params = {
                camera: this.twoToThreeInfo.camera
            }
            getInfoByCamera(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.projectInfo = result.data.Body.orderList[0]
                }
            }).catch((err) => {
                console.log(`获取监控编码获取监控信息接口错误，错误内容${err}`)
            })
        },
        /* 更新监控状态 */
        _updateCameraStateFn () {
            let params = {
                camera_state: 1, // 出库状态 0 = 库存1 = 已出库 2 = 归库
                camera: this.twoToThreeInfo.camera, // 监控编号
                point_id: 0, // --点位
                region_id: this.leftInfo.region_id, // --地区id
                order_no: this.twoToThreeInfo.order_no, // --单号
                remark: this.userInfo.as_fullName, // --备注， 如果是工程经理操作（ 传入工程经理谁操作归库） 如果是监理操作（ 传入监理谁操作出库）
                opereater: this.userInfo.as_fullName // --操作人
            }
            updateCameraState(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'success',
                        message: '核对成功,摄像头出库'
                    })
                    this.setUpdateLeft()
                }
            }).catch((err) => {
                console.log(`更新监控状态接口错误,错误内容${err}`)
            })
        },
        /* 更新点位名称 */
        _updatePointNameFn () {
            let params = {
                id: this.twoToThreeInfo.id,
                name: this.pointsName
            }
            updatePointName(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'success',
                        message: '更新点位名称成功'
                    })
                    this.setUpdateLeft()
                }
            }).catch((err) => {
                console.log(`更新点位名称接口错误,错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['twoToThreeInfo', 'leftInfo', 'userInfo'])
    }
}
</script>
