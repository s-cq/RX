<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'出库'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item, index) in projectList" :key="index">
            <p class="analyItemTit tx-center">项目{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span>{{ item.order_no }}</span>
                </p>
                <p class="col-md-4" :title="item.order_name">
                    <span class="cLightGray pr8">项目名称</span>
                    <span>{{ item.order_name | truncate(8) }}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span>{{ item.order_checker_name }}</span>
                </p>
                <div class="col-md-4 lh28" v-if="item.name == '' || item.name == undefined || item.name == null">
                    <span class="cLightGray pr8 fl">点位</span>
                    <div class="width120 fl">
                        <el-select v-model="pointsId" placeholder="请选择点位" @change="getInfo(index)">
                            <el-option
                            v-for="list in item.pointList"
                            :key="list.id"
                            :label="list.name"
                            :value="list.id">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="col-md-4 lh28" v-else>
                    <span class="cLightGray pr8">点位</span>
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon relative">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span><span>{{ checkInfo.order_no }}</span>
                </p>
                <p class="col-md-4" :title="checkInfo.order_name">
                    <span class="cLightGray pr8">项目</span><span>{{ checkInfo.order_name | truncate(8) }}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">点位</span><span>{{ checkInfo.name }}</span>
                </p>
                <el-button type="primary" @click="_updatePointsFn" style="position: absolute;right: 10px;top: 20px;"  v-if="saveState">保存</el-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// vuex
import { mapGetters } from 'vuex'
// Api
import { getProjectLeftList } from '../../../../Item/Term/Resources/Api/index'
import { getPointByPro, updatePoints, isBindOrder } from '../../Resources/Api/index'
export default {
    data () {
        return {
            pointsId: '', // 点位id
            projectList: [], // 项目列表
            saveState: true, // 按钮状态
            checkInfo: {} // 选中详情
        }
    },
    created () {
        this._isBindOrderFn()
    },
    methods: {
        // 获取单条数据信息
        getInfo (index) {
            this.checkInfo = this.projectList[index]
        },
        /* 按监控号查询是否有项目及结果 */
        _isBindOrderFn () {
            let params = {
                camera: this.leftInfo.camera
            }
            isBindOrder(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    if (result.data.Body.orderList.length > 0) {
                        this.saveState = false
                        this.projectList = result.data.Body.orderList
                        this.checkInfo = this.projectList[0]
                    } else {
                        this.saveState = true
                        this._getProjectLeftListFn()
                    }
                }
            }).catch((err) => {
                console.log(`按监控号查询是否有项目及结果接口错误,错误内容${err}`)
            })
        },
        // 获取项目列表数据
        _getProjectLeftListFn () {
            let params = {
                region_id: this.leftInfo.region_id, // 地区ID eg: 11
                area_id: '0'
            }
            getProjectLeftList(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.projectList = result.data.Body.orderList
                    this.projectList.forEach((item, index) => {
                        this._getPointByProFn(item.order_no, index)
                    })
                } else {
                    console.log(result.data.StatusMsg)
                }
            }).catch((err) => {
                console.log(`获取项目列表数据接口错误,错误内容${err}`)
            })
        },
        // 按项目查询点位
        _getPointByProFn (orderno, index) {
            let params = {
                order_no: orderno
            }
            getPointByPro(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$set(this.projectList[index], 'pointList', result.data.Body.orderList)
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },
        // 更新点位
        _updatePointsFn () {
            let params = {
                id: this.pointsId, // 点位id
                camera: this.leftInfo.camera // 监控点位编号
            }
            updatePoints(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'success',
                        message: '更新成功'
                    })
                }
            }).catch((err) => {
                console.log(`更新点位接口错误,错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
