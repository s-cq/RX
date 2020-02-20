<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:ProjectDebriefing.stagename+'阶段--处理'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "84">
        <div class="analyItem">
            <p class="analyItemTit tx-center">11团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_11===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_11===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_11===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"> <el-button type="success" @click="promoteGroupHandle(11,ProjectDebriefing.state_11+1)">处理</el-button> </span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">12团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_12===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_12===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_12===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteGroupHandle(12,ProjectDebriefing.state_12+1)">处理</el-button></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">13团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_13===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_13===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_13===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteGroupHandle(13,ProjectDebriefing.state_13+1)">处理</el-button></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">14团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_14===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_14===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_14===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteGroupHandle(14,ProjectDebriefing.state_14+1)">处理</el-button></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">15团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_15===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_15===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_15===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteGroupHandle(15,ProjectDebriefing.state_15+1)">处理</el-button></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">16团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_16===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_16===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_16===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteGroupHandle(16,ProjectDebriefing.state_16+1)">处理</el-button></span>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">17团</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-3" :class="ProjectDebriefing.state_17===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_17===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.state_17===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteGroupHandle(17,ProjectDebriefing.state_17+1)">处理</el-button></span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <span class="col-md-12">{{leftInfo.orderno}}</span>
                    <span class="col-md-3" :class="ProjectDebriefing.Wholestate===1?'cGreen':'cGray'">接收数据</span>
                    <span class="col-md-3" :class="ProjectDebriefing.Wholestate===2?'cGreen':'cGray'">执行</span>
                    <span class="col-md-3" :class="ProjectDebriefing.Wholestate===3?'cGreen':'cGray'">完成结果</span>
                    <span class="col-md-3"><el-button type="success" @click="promoteCurrentHandle(ProjectDebriefing.Wholestate+1)">处理</el-button></span>
                    <span class="col-md-3" v-show="ProjectDebriefing.Wholestate===3"><el-button type="success" @click="promoteNextHandle()">下一阶段</el-button></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getProjectDebriefing, promoteProgressByGroup, promoteProgressCurrent, promoteProgressNext } from '../Resources/Api'
export default {
    data () {
        return {
            ProjectDebriefing: {}
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    methods: {
        // 加载页面
        load () {
            let _this = this
            let parm = {
                procode: _this.leftInfo.orderno
            }
            // 获取项目当前阶段信息
            getProjectDebriefing(parm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.ProjectDebriefing = results.data.Body
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 团处理,执行进入下一个部门节点
        promoteGroupHandle (id, state) {
            let _this = this
            if (state > 3) {
                _this.$message({
                    message: '该阶段已经完成！',
                    type: 'warning'
                })
                return
            }
            let parm = {
                operationcardno: _this.userInfo.user.u_kahao,
                operationname: _this.userInfo.user.xinming,
                procode: _this.leftInfo.orderno,
                stage: _this.ProjectDebriefing.stage,
                groupNum: id,
                state: state
            }
            // 推进项目当前阶段该团进度
            promoteProgressByGroup(parm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.$message({
                        message: '操作成功！',
                        type: 'success'
                    })
                    _this.load()
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 推进当前项目的完成
        promoteCurrentHandle (state) {
            let _this = this
            if (state > 3) {
                _this.$message({
                    message: '该阶段已经完成！',
                    type: 'warning'
                })
                return
            }
            let parm = {
                operationcardno: _this.userInfo.user.u_kahao,
                operationname: _this.userInfo.user.xinming,
                procode: _this.leftInfo.orderno,
                stage: _this.ProjectDebriefing.stage,
                state: state
            }
            // 完成当前项目阶段
            promoteProgressCurrent(parm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.$message({
                        message: '操作成功！',
                        type: 'success'
                    })
                    _this.load()
                } else {
                    _this.$message({
                        message: results.data.Body.msg,
                        type: 'error'
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 进入下一阶段
        promoteNextHandle () {
            let _this = this
            let parm = {
                operationcardno: _this.userInfo.user.u_kahao,
                operationname: _this.userInfo.user.xinming,
                procode: _this.leftInfo.orderno,
                stage: _this.ProjectDebriefing.stage
            }
            // 推进项目进入下一阶段
            promoteProgressNext(parm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.$message({
                        message: '操作成功！',
                        type: 'success'
                    })
                    _this.load()
                } else {
                    _this.$message({
                        message: results.data.Body.msg,
                        type: 'error'
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        }

    },
    filters: {
        state (val) {
            let res = ''
            switch (val) {
            case 1:
                res = '接收数据'
                break
            case 2:
                res = '执行'
                break
            case 3:
                res = '完成结果'
                break
            default:
                break
            }
            return res
        }
    }

}
</script>
