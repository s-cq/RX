
<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'指定归库'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">步骤</p>
            <div class="analyItemCon">
                <p class="col-md-12" v-for="(item, index) in installList" :key="index"><span class="cLightGray pr8">步骤{{ index+1 }}</span><span>{{ item }}</span></p>
            </div>
        </div>
        <div class="analyItem"  v-for="(item, index) of pointsList" :key="index">
            <p class="analyItemTit tx-center">{{item.name === null ? `点位 ${index + 1}` : item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">监控名称：</span>
                    <span >{{item.name}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">设备名称：</span>
                    <span >{{item.encode_device_name}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">监控编号：</span>
                    <span >{{item.card}}</span>
                </p>
                <input type="button" class="uiBtn-small uiBtn-blue fr" @click="submit(index)" value="归库" v-if="item.camera_state === 1"/>
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
import { getPointByPro, PostJump, upCameraState } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            installList: [
                '断电', '拆摄像头', '拧螺丝', '装摄像头', '拆底座', '填孔', '拍照'
            ],
            // upCameraState
            caremaName: [],
            pointsList: [], // 点位信息
            caremaNameList: [], // 监控设备数据
            value: [],
            buttonIsShow: false
        }
    },
    created () {
        this.getPointByPro()
        this.buttonType()
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
                    let array = result.data.Body.orderList
                    array.forEach(element => {
                        if (element.camera_state === 1) {
                            this.pointsList.push(element)
                        }
                    })
                }
            }).catch((err) => {
                console.log(`按项目查询点位接口错误,错误内容${err}`)
            })
        },
        // 摄像头归库
        submit (index) {
            let params = {
                camera_state: 2,
                camera: this.pointsList[index].camera,
                point_id: this.pointsList[index].id,
                region_id: this.leftInfo.areaid,
                order_no: this.leftInfo.orderno,
                remark: this.userInfo.as_jueseName + this.userInfo.as_fullName + '操作归库',
                opereater: this.userInfo.as_cardNo
            }
            // 归库
            upCameraState(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.getPointByPro()
                }
            }).catch((err) => {
                console.log(`归库失败，${err}`)
            })
        },

        // 跳转阶段
        submitButton () {
            let num = 0
            this.pointsList.forEach(element => {
                if (element.camera_state === 1) {
                    num++
                }
            })
            if (num > 0) {
                this.open('提示', '还有未归库的摄像头不能进入下一阶段！！！')
                return
            }

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
