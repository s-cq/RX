<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'订单修改'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <ul class="clearfix uiTab5">
        <li :class="['fl', currentIndex === 80 ? 'uiTab5-active' : '']" @click="tabClick(80)">用电安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 82 ? 'uiTab5-active' : '']" @click="tabClick(82)">消防安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 83 ? 'uiTab5-active' : '']" @click="tabClick(83)">设备安全<i class="uiTab-i"></i></li>
        <li :class="['fl', currentIndex === 84 ? 'uiTab5-active' : '']" @click="tabClick(84)">人员安全<i class="uiTab-i"></i></li>
    </ul>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem" v-for="(item, index) in currentList" :key="index">
            <p class="analyItemTit tx-center">{{item.standard_name}}</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="item.picturePath | smallImg(80, 80)">
                                <span class="standardStyle">标</span>
                            </div>
                        </div>
                    </rx-viewer>
                    <div>{{item.content}}</div>
                    <el-checkbox v-model="checkID[item.id]" @change="selctChange(item.id)" ></el-checkbox>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                    <span>{{selectNumber}}</span>
                </p>
                <p class="col-md-4">
                    <el-checkbox v-model="isAllSelect" @change="selectAllChange()">全选</el-checkbox>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定" @click="submitButton()" v-if="buttonIsShow">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getFindSafetyOrderStandard, saveSafetyWorkerType } from '../../../../Resources/Api/index'
export default {
    props: ['Projectcode', 'type', 'role'],
    data () {
        return {
            currentIndex: 80, // 当前的index
            currentList: [], // 当前的数组
            dataList: [], // 全部的数据
            equipmentSafeData: [], // 设备安全
            personnelSafeData: [], // 人员安全
            fireSafeData: [], // 消防安全
            electricSafeData: [], // 用电安全
            checkID: [], // 复选数组
            submitData: [], // 提交数组
            buttonIsShow: false,
            isAllSelect: false, // 全选
            selectNumber: 0
        }
    },
    created () {
        this.getFindSafetyOrderStandard()
        this.buttonType()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate', 'userInfo'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 全选
        selectAllChange () {
            if (this.isAllSelect) {
                this.dataList.forEach(element => {
                    this.checkID[element.id] = true
                })
                this.selectNumber = this.dataList.length
            } else {
                this.dataList.forEach(element => {
                    this.checkID[element.id] = false
                })
                const selectArray = this.checkID.filter((item) => { return item === true })
                this.selectNumber = selectArray.length
            }
        },
        // 选中与不选中
        selctChange (currentID) {
            const selectArray = this.checkID.filter((item) => { return item === true })
            this.selectNumber = selectArray.length
            if (this.selectNumber === this.dataList.length) {
                this.isAllSelect = true
            } else {
                this.isAllSelect = false
            }
        },
        // 判断按钮是否显示
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
        // 切换tab
        tabClick (index) {
            this.currentIndex = index
            switch (index) {
            case 83:
                this.currentList = this.equipmentSafeData
                break
            case 84:
                this.currentList = this.personnelSafeData
                break
            case 82:
                this.currentList = this.fireSafeData
                break
            case 80:
                this.currentList = this.electricSafeData
                break
            default:
                break
            }
        },
        // 获取数据
        getFindSafetyOrderStandard () {
            let parm = {
                projectOrderCode: this.Projectcode
            }
            // 接口订单数据
            getFindSafetyOrderStandard(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.safeList
                    this.dataList.forEach(element => {
                        this.checkID[element.id] = false
                    })
                    // 设备安全数据
                    this.equipmentSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 83
                    })
                    // 人员安全数据
                    this.personnelSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 84
                    })
                    // 消防安全数据
                    this.fireSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 82
                    })
                    // 用电安全数据
                    this.electricSafeData = this.dataList.filter(function (item) {
                        return item.worker_type_Id === 80
                    })
                    this.currentList = this.electricSafeData
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 提交订单
        submitButton () {
            this.dataList.forEach(element => {
                if (this.checkID[element.id]) {
                    let currentIndex = this.dataList.findIndex((item) => { return item.id === element.id })
                    this.submitData.push(this.dataList[currentIndex])
                }
            })
            if (this.submitData.length === 0) {
                this.$message('至少选择一项')
            } else {
                let parm = {
                    safetyList: JSON.stringify(this.submitData),
                    orderNo: this.leftInfo.orderno,
                    projectOrderCode: this.twoToThreeInfo.code,
                    // createUserNo: this.getCookie('u_kahao'),
                    // createUserName: this.getCookie('xinming')
                    createUserNo: this.userInfo.as_cardNo,
                    createUserName: this.userInfo.as_fullName
                }
                // const dataJson = JSON.stringify(parm)
                // 接口订单数据
                saveSafetyWorkerType(parm).then(results => {
                    if (results.data.StatusCode === 1) {
                        this.setUpDatePlate()
                        this.$parent.$parent.clickFiveShow()
                        this.buttonIsShow = false
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
