<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'设置'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">设置</p>
            <div class="analyItemCon">
                <div class="col-md-12" v-if="switchIndex != 1">
                    <p class="col-md-6"><span class="cLightGray pr8">开始时间</span><span>{{ photoInfo.begin_date }}点/天</span></p>
                    <p class="col-md-6"><span class="cLightGray pr8">结束时间</span><span>{{ photoInfo.end_data }}点/天</span></p>
                    <p class="col-md-6"><span class="cLightGray pr8">拍摄间隔</span><span>{{ photoInfo.interval }}分钟</span></p>
                </div>
                <div class="col-md-12 lh28" v-else>
                    <div class="col-md-6">
                        <span class="fl cLightGray pr8">开始时间</span>
                        <div class="width120 fl">
                            <el-input v-model.number="settingInfo.begin_date" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <span class="fl cLightGray pr8">结束时间</span>
                        <div class="width120 fl">
                            <el-input v-model.number="settingInfo.end_data" placeholder="请输入内容"></el-input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <span class="fl cLightGray pr8">拍摄间隔</span>
                        <div class="width120 fl">
                            <el-input v-model.number="settingInfo.interval" placeholder="请输入内容"></el-input>
                        </div>
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
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">开始时间</span><span>{{ photoInfo.begin_date }}点/天</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">结束时间</span><span>{{ photoInfo.end_data }}点/天</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">拍摄间隔</span><span>{{ photoInfo.interval }}分钟</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { updateCameraInfo } from '../../Resources/Api/index'
export default {
    data () {
        return {
            switchIndex: null,
            settingInfo: {
                begin_date: '',
                end_data: '',
                interval: ''
            },
            photoInfo: {}
        }
    },
    created () {
        if (this.twoToThreeInfo.begin_date === undefined) {
            this.photoInfo = this.$route.params
        } else {
            this.photoInfo = JSON.parse(JSON.stringify(this.twoToThreeInfo))
        }
    },
    methods: {
        ...mapMutations({
            setUpdateLeft: `SET_UPDATE_LEFT`
        }),
        switchChange (index, type) {
            if (index === 1) {
                this.settingInfo = this.photoInfo
            }
            this.switchIndex = index
            if (type === 'save') {
                // ... do something
                this._updateCameraInfoFn()
            }
        },
        /* 更新监控信息 */
        _updateCameraInfoFn () {
            let params = {
                id: this.settingInfo.id,
                camera: this.leftInfo.camera === undefined ? this.twoToThreeInfo.camera : this.leftInfo.camera,
                begin_date: this.settingInfo.begin_date,
                end_data: this.settingInfo.end_data,
                interval: this.settingInfo.interval
            }
            console.log(this.settingInfo)

            updateCameraInfo(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })
                    this.setUpdateLeft()
                    // 关闭弹窗
                    this.$router.push(this.$route.matched[1].path)
                }
            }).catch((err) => {
                console.log(`更新监控信息接口错误，错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['twoToThreeInfo', 'leftInfo'])
    }
}
</script>
