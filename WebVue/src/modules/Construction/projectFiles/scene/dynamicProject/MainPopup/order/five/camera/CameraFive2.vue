<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'指定出库'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) of pointsList" :key="index">
            <p class="analyItemTit tx-center">{{item.name === null ? `点位 ${index + 1}` : item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-5">
                    <span class="cLightGray pr8">名称</span>
                    <el-input v-model="caremaName[index]" placeholder="请输入点位名称" class="width120 ml20" v-if="item.camera === null"></el-input>
                    <span v-else>{{item.name}}</span>
                </p>
                <p class="col-md-5">
                    <span class="cLightGray pr8">监控点</span>
                    <el-select v-model="value[index]" placeholder="请选择"  v-if="item.camera === null">
                        <el-option
                            v-for="item in caremaNameList"
                            :key="item.camera"
                            :label="item.camera_name"
                            :value="item.camera">
                        </el-option>
                    </el-select>
                    <span v-else>{{item.camera_name}}</span>
                </p>
                <p class="col-md-5 mt10">
                    <span class="cLightGray pr8">开始时间</span>
                    <el-input v-model="item.camereDetail[0].begin_date" placeholder="请输入开始时间" class="width120" type="number"  v-if=" item.camereDetail === null"></el-input>
                    <span>{{item.camereDetail ? item.camereDetail[0].begin_date : ''}} 点</span>
                </p>
                 <p class="col-md-5 mt10">
                    <span class="cLightGray pr8">结束时间</span>
                    <el-input v-model="item.camereDetail[0].end_data" placeholder="请输入结束时间" class="width120" type="number"  v-if="item.camereDetail === null"></el-input>
                    <span>{{item.camereDetail ? item.camereDetail[0].end_data : ''}} 点</span>
                </p>
                <input type="button" class="uiBtn-small uiBtn-blue fr" @click="submit(index)" value="保存" v-if="buttonIsShow"/>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitButton()" v-if="buttonIsShow">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getPointByPro, getCamerasListByRegion, PostJump, upCameraStateForPro, getSauxiliaryInfo, upCameraInfo } from '../../../../Resources/Api/index'
export default {
    props: ['type', 'role'],
    data () {
        return {
            // upCameraState
            caremaName: [],
            pointsList: [], // 点位信息
            caremaNameList: [], // 监控设备数据
            value: [], // 监控点数组
            buttonIsShow: false
        }
    },
    created () {
        this.getPointByPro()
        this.getCamerasListByRegion()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'userInfo'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 按钮显示与隐藏
        buttonType () {
            if (this.userInfo.as_diquId === 39) {
                if (this.twoToThreeInfo.status === this.type) {
                    this.buttonIsShow = true
                } else {
                    this.buttonIsShow = false
                }
            } else {
                const userLevel = this.userInfo.as_level
                if (userLevel.length > 0) {
                    userLevel.forEach(ele => {
                        if (Number(ele) === 47) {
                            if (this.twoToThreeInfo.status === this.type) {
                                this.buttonIsShow = true
                            } else {
                                this.buttonIsShow = false
                            }
                        }
                    })
                } else {
                    this.buttonIsShow = false
                }
            }
        },
        // 按项目查询点位
        getPointByPro () {
            let params = {
                order_no: this.leftInfo.orderno
            }
            getPointByPro(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.pointsList = result.data.Body.orderList
                    this.pointsList.forEach((element, index) => {
                        this.caremaName.push(element.name)
                        this.getSauxiliaryInfo(element.camera, index)
                    })
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },
        // 获取开始时间
        getSauxiliaryInfo (camera, index) {
            let params = {
                camera: camera
            }
            getSauxiliaryInfo(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$set(this.pointsList[index], 'camereDetail', result.data.Body.orderList)
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },
        // 获取监控设备
        getCamerasListByRegion () {
            let params = {
                region_id: this.leftInfo.areaid,
                area_id: 0
            }
            getCamerasListByRegion(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    let array = result.data.Body.orderList
                    array.forEach(element => {
                        if (element.camera_state !== 1) {
                            this.caremaNameList.push(element)
                        }
                    })
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },
        // 保存点位信息 保存监控信息
        submit (index) {
            if (this.caremaName[index] === null || this.caremaName[index] === undefined) {
                this.open('警告', '请填写点位名称之后再提交！！！')
                return
            }
            if (this.value[index] === null || this.value[index] === undefined) {
                this.open('警告', '请选择监控点之后再提交！！！')
                return
            }
            let params = {
                camera_state: 1,
                name: this.caremaName[index],
                camera: this.value[index],
                id: this.pointsList[index].id,
                point_id: this.pointsList[index].id,
                region_id: this.leftInfo.areaid,
                order_no: this.leftInfo.orderno,
                remark: this.userInfo.as_jueseName + this.userInfo.as_fullName + '操作出库',
                opereater: this.userInfo.as_cardNo
            }
            upCameraStateForPro(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    let Cameraparams = {
                        id: this.pointsList[index].camereDetail[0].id,
                        camera: this.pointsList[index].camera,
                        begin_date: this.pointsList[index].camereDetail[0].begin_date,
                        end_data: this.pointsList[index].camereDetail[0].end_data,
                        interval: this.pointsList[index].camereDetail[0].interval
                    }
                    upCameraInfo(Cameraparams).then((result) => {
                        if (result.data.StatusCode === 0) {
                            this.caremaName = []
                            this.value = []
                            this.getPointByPro()
                            this.getCamerasListByRegion()
                        }
                    }).catch((err) => {
                        console.log(`保存监控信息失败，${err}`)
                    })
                }
            }).catch((err) => {
                console.log(`分配摄像头失败，${err}`)
            })
        },
        // 弹框提示
        open (title, msg) {
            this.$alert(msg, title, {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: msg
                    })
                }
            })
        },
        // 跳转阶段
        submitButton () {
            let parm = {
                orderCode: this.$route.query.code,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming')
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName
            }
            // const dataJson = JSON.stringify(parm)
            // 阶段接口
            PostJump(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.setUpDatePlate()
                    this.$parent.$parent.clickFiveShow()
                }
            }).catch(error => {
                console.log(error)
            })
        },
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
        // leftInfo () {
        //     this.load()
        // }
    }
}
</script>

<style>
   .width120.el-input {
       width: 120px;
       display: inline-block;
   }
</style>
