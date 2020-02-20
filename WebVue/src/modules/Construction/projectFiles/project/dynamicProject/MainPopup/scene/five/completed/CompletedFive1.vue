<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'内容确认'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
        <div class="analyItem" v-for="(item, index) in dataList" :key="index">
            <p class="analyItemTit tx-center">{{item.title |  truncate(5)}}</p>
            <div class="analyItemCon">
                <div class="analyItemflex">
                    <div>{{item.content}}</div>
                    <el-checkbox v-model="checkID[item.id]" @change="selctChange(item.id)" :checked="item.result === '无此项' ? false : true"></el-checkbox>
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
import { getinspectionData, saveInspection } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            dataList: [], // 总的数组
            checkID: [], // 复选数组
            submitData: [], // 提交数组
            buttonIsShow: false,
            isAllSelect: false, // 全选
            selectNumber: 0
        }
    },
    created () {
        this.getinspectionData()
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
        // 获取数据
        getinspectionData () {
            let parm = {
                orderCode: this.$route.query.code
            }
            // 接口订单数据
            getinspectionData(JSON.stringify(parm)).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.inspectionDataList
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
            this.submitData = []
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
                    inspectionList: this.submitData,
                    orderNo: this.leftInfo.orderno,
                    projectOrderCode: this.$route.query.code,
                    // createUserNo: this.getCookie('u_kahao'),
                    // createUserName: this.getCookie('xinming')
                    createUserNo: this.userInfo.as_cardNo,
                    createUserName: this.userInfo.as_fullName
                }
                const dataJson = JSON.stringify(parm)
                // 接口订单数据
                saveInspection(dataJson).then(results => {
                    if (results.data.StatusCode === 1) {
                        this.setUpDatePlate()
                        this.$parent.$parent.clickFiveShow()
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
