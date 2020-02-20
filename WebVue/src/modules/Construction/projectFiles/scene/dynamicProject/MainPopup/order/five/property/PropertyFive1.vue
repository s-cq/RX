<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'资料植入'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon">
                <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 5px 0;"></div>
                <el-checkbox-group v-model="checkedData1" @change="handleCheckedDatasChange">
                    <div v-for="(data, index) in firstPartyList" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name" @change="selectChange(data.id,checkedData1,firstPartyList)" :checked="data.isExist ? true : false">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入金额" size="mini" v-if="data.name === '押金' && data.isInput || data.name === '管理费' && data.isInput" style="width:100px" class="ml5" v-model="data.data"></el-input>
                    </div>
                </el-checkbox-group>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">公司</p>
            <div class="analyItemCon">
                <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllConmpanyChange">全选</el-checkbox>
                <div style="margin: 5px 0;"></div>
                <el-checkbox-group v-model="checkedData2" @change="handleCheckedCompanysChange">
                    <div v-for="(data, index) in companyList" :key="index"  class="col-md-6" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name" @change="selectChange(data.id,checkedData2,companyList)" :checked="data.isExist ? true : false">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入金额" size="mini" v-if="data.name === '一切险' && data.isInput || data.name === '押金' && data.isInput " style="width:100px" class="ml5" v-model="data.data"></el-input>
                         <el-select v-model="data.second_data" placeholder="请选择" v-if="data.name === '一切险' && data.isInput " class="w100 ml5">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-checkbox-group>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">物业</p>
            <div class="analyItemCon">
                <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllwuyeChange">全选</el-checkbox>
                <div style="margin: 5px 0;"></div>
                <el-checkbox-group v-model="checkedData3" @change="handleCheckedwuyeChange">
                    <div v-for="(data, index) in propertyList" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name" :checked="data.isExist ? true : false">{{data.name}}</el-checkbox>
                        <!-- <el-input placeholder="请输入金额" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input> -->
                    </div>
                </el-checkbox-group>
                <span class="dataTitle cRed"> 注：设计师到物业拿回资料，客户盖章</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目经理</p>
            <div class="analyItemCon">
                <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllManChange">全选</el-checkbox>
                <div style="margin: 5px 0;"></div>
                <el-checkbox-group v-model="checkedData4" @change="handleCheckedManChange">
                    <div v-for="(data, index) in projectManagerList" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name" :checked="data.isExist ? true : false">{{data.name}}</el-checkbox>
                        <!-- <el-input placeholder="请输入金额" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input> -->
                    </div>
                </el-checkbox-group>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">总共</span>
                    <span class="cGreen">{{this.firstPartyList.length + this.companyList.length + this.propertyList.length + this.projectManagerList.length}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">已选择</span>
                    <span class="cGreen">{{this.checkedData1.length + this.checkedData2.length + this.checkedData3.length + this.checkedData4.length}}</span>
                </p>
                <p class="col-md-3"><el-checkbox v-model="allSelect" @change="allSelectChange()">全选</el-checkbox></p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" @click="submitData()" v-if="this.buttonIsShow">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { findOrderChildTypeDetail, saveDataToBottom } from '../../../../Resources/Api/index'
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: ['type', 'role'],
    data () {
        return {
            selectModel: '', // 押金input
            checkAll1: false, // 用于判断全选和不选
            checkedData1: [], // 客户数据
            checkAll2: false, // 用于判断全选和不选
            checkedData2: [], // 公司数据
            checkAll3: false, // 用于判断全选和不选
            checkedData3: [], // 物业数据
            checkAll4: false, // 用于判断全选和不选
            checkedData4: [], // 项目经理数据
            isIndeterminate1: false,
            isIndeterminate2: false,
            isIndeterminate3: false, // 没全部选中的状态
            isIndeterminate4: false,
            allSelect: false, // 全选
            options: [
                {
                    value: '我方',
                    label: '我方'
                },
                {
                    value: '物业投保',
                    label: '物业投保'
                }
            ],
            value: '',
            firstPartyList: [],
            companyList: [],
            propertyList: [],
            projectManagerList: [],
            buttonIsShow: false // 是否显示按钮
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'userInfo'])
    },
    created () {
        this.findOrderChildTypeDetail()
        this.buttonType()
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
                this.buttonIsShow = false
            }
        },
        // 全部选择
        allSelectChange () {
            if (this.allSelect) {
                this.checkAll1 = true
                this.checkAll2 = true
                this.checkAll3 = true
                this.checkAll4 = true
                this.handleCheckAllChange(true)
                this.handleCheckAllConmpanyChange(true)
                this.handleCheckAllwuyeChange(true)
                this.handleCheckAllManChange(true)
            } else {
                this.checkAll1 = false
                this.checkAll2 = false
                this.checkAll3 = false
                this.checkAll4 = false
                this.handleCheckAllChange(false)
                this.handleCheckAllConmpanyChange(false)
                this.handleCheckAllwuyeChange(false)
                this.handleCheckAllManChange(false)
            }
        },
        // 获取数据
        findOrderChildTypeDetail () {
            let parm = {
                orderChildTypeId: 1,
                projectOrderCode: this.$route.query.code
            }
            // 接口获取数据
            findOrderChildTypeDetail(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.firstPartyList = results.data.Body.firstPartyList
                    this.companyList = results.data.Body.companyList
                    this.propertyList = results.data.Body.propertyList
                    this.projectManagerList = results.data.Body.projectManagerList
                    this.isShowInput(this.firstPartyList, 1)
                    this.isShowInput(this.companyList, 2)
                    this.isShowInput(this.propertyList, 3)
                    this.isShowInput(this.projectManagerList, 4)
                    this.selectAllFunction()
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 判断是否全部选中
        selectAllFunction () {
            const datalength = this.firstPartyList.length + this.companyList.length + this.propertyList.length + this.projectManagerList.length
            const cloneLength = this.checkedData1.length + this.checkedData2.length + this.checkedData3.length + this.checkedData4.length
            if (datalength === cloneLength) {
                this.allSelect = true
            } else {
                this.allSelect = false
            }
        },
        // 回显遍历
        isShowInput (array, type) {
            array.forEach(element => {
                if (element.isExist) {
                    element.isInput = true
                } else {
                    element.isInput = false
                }
            })
            const selectArray = array.filter((item) => { return item.isExist === 1 })
            if (selectArray.length === array.length) {
                switch (type) {
                case 1:
                    this.checkAll1 = true
                    break
                case 2:
                    this.checkAll2 = true
                    break
                case 3:
                    this.checkAll3 = true
                    break
                case 4:
                    this.checkAll4 = true
                    break
                default:
                    break
                }
            }
        },
        handleCheckAllChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData1 = val ? this.firstPartyList : []
            this.isIndeterminate1 = false
            this.selectAll(this.firstPartyList, val)
        },
        handleCheckedDatasChange (value) {
            let checkedCount = value.length
            this.checkAll1 = checkedCount === this.firstPartyList.length
            this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.firstPartyList.length
            this.selectAllFunction()
        },
        handleCheckAllConmpanyChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData2 = val ? this.companyList : []
            this.isIndeterminate2 = false
            this.selectAll(this.companyList, val)
        },
        handleCheckedCompanysChange (value) {
            let checkedCount = value.length
            this.checkAll2 = checkedCount === this.companyList.length
            this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.companyList.length
            this.selectAllFunction()
        },
        handleCheckAllwuyeChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData3 = val ? this.propertyList : []
            this.isIndeterminate3 = false
        },
        handleCheckedwuyeChange (value) {
            let checkedCount = value.length
            this.checkAll3 = checkedCount === this.propertyList.length
            this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.propertyList.length
            this.selectAllFunction()
        },
        handleCheckAllManChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData4 = val ? this.projectManagerList : []
            this.isIndeterminate4 = false
        },
        handleCheckedManChange (value) {
            let checkedCount = value.length
            this.checkAll4 = checkedCount === this.projectManagerList.length
            this.isIndeterminate4 = checkedCount > 0 && checkedCount < this.projectManagerList.length
            this.selectAllFunction()
        },
        // 当个input 改变
        selectChange (id, judgeArray, itemArray) {
            const currentIndex = judgeArray.findIndex((item) => { return item.id === id })
            const dataCurrentIndex = itemArray.findIndex((item) => { return item.id === id })
            if (currentIndex >= 0) {
                itemArray[dataCurrentIndex].isInput = true
            } else {
                itemArray[dataCurrentIndex].isInput = false
            }
        },
        // 全选
        selectAll (currentData, falg) {
            if (falg) {
                currentData.forEach(element => {
                    element.isInput = true
                })
            } else {
                currentData.forEach(element => {
                    element.isInput = false
                })
            }
            this.selectAllFunction()
        },
        // 获取cookie
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        },
        // 提交数据
        submitData () {
            let firstPartyData = []
            let propertyList = []
            let companyList = []
            let projectManagerList = []
            this.checkedData1.forEach((item) => {
                const selectJson = {}
                selectJson.name = item.name
                selectJson.data = item.data
                selectJson.orderChildTypeDetailId = item.id
                selectJson.orderChildTypeId = item.order_child_type_id
                firstPartyData.push(selectJson)
            })
            this.checkedData2.forEach((item) => {
                const selectJson = {}
                selectJson.name = item.name
                selectJson.data = item.data
                if (item.name === '一切险') {
                    selectJson.secondData = item.second_data
                } else {
                    selectJson.secondData = ''
                }
                selectJson.orderChildTypeDetailId = item.id
                selectJson.orderChildTypeId = item.order_child_type_id
                companyList.push(selectJson)
            })
            this.checkedData3.forEach((item) => {
                const selectJson = {}
                selectJson.name = item.name
                selectJson.orderChildTypeDetailId = item.id
                selectJson.orderChildTypeId = item.order_child_type_id
                propertyList.push(selectJson)
            })
            this.checkedData4.forEach((item) => {
                const selectJson = {}
                selectJson.name = item.name
                selectJson.orderChildTypeDetailId = item.id
                selectJson.orderChildTypeId = item.order_child_type_id
                projectManagerList.push(selectJson)
            })
            const parm = {
                code: this.$route.query.code,
                // createUserNo: this.getCookie('u_kahao'),
                // createUserName: this.getCookie('xinming'),
                createUserNo: this.userInfo.as_cardNo,
                createUserName: this.userInfo.as_fullName,
                orderNo: this.leftInfo.orderno,
                orderNumber: (this.checkedData1.length + this.checkedData2.length + this.checkedData3.length + this.checkedData4.length),
                firstPartyList: firstPartyData,
                propertyList: propertyList,
                companyList: companyList,
                projectManagerList: projectManagerList,
                orderChildTypeId: 1,
                role: 1
            }
            // 根据条件阶段查询订单
            saveDataToBottom(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    this.setUpDatePlate()
                    this.$parent.$parent.clickFiveShow()
                    this.buttonIsShow = false
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.findOrderChildTypeDetail()
        }
    }
}
</script>
<style lang="">
    .dataTitle {
        position: absolute;
        right: 10px;
        bottom: 5px;
    }
    .w100 {
        width:100px;
    }
</style>
