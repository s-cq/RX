<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'资料植入'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon">
                <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 5px 0;"></div>
                <el-checkbox-group v-model="checkedData1" @change="handleCheckedDatasChange">
                    <div v-for="(data, index) in firstPartyList" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入内容" size="mini" v-if="data.name === '押金' || data.name === '管理费'" style="width:100px" class="ml5"></el-input>
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
                    <div v-for="(data, index) in companyList" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入内容" size="mini" v-if="data.name === '一切险' && data.name === '押金'" style="width:100px" class="ml5"></el-input>
                         <el-select v-model="value" placeholder="请选择" v-if="data.name === '一切险' " class="w100 ml5">
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
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <!-- <el-input placeholder="请输入内容" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input> -->
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
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <!-- <el-input placeholder="请输入内容" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input> -->
                    </div>
                </el-checkbox-group>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总共</span>
                    <span class="cGreen">{{this.firstPartyList.length + this.companyList.length + this.propertyList.length + this.projectManagerList.length}}</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                    <span class="cGreen">{{this.checkedData1.length + this.checkedData2.length + this.checkedData3.length + this.checkedData4.length}}</span>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { findOrderChildTypeDetail } from '../../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            checkAll1: false, // 用于判断全选和不选
            checkedData1: [],
            checkAll2: false, // 用于判断全选和不选
            checkedData2: [],
            checkAll3: false, // 用于判断全选和不选
            checkedData3: [],
            checkAll4: false, // 用于判断全选和不选
            checkedData4: [],
            isIndeterminate1: false,
            isIndeterminate2: false,
            isIndeterminate3: false, // 没全部选中的状态
            isIndeterminate4: false,
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
            projectManagerList: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.findOrderChildTypeDetail()
    },
    methods: {
        // 获取数据
        findOrderChildTypeDetail () {
            let parm = {
                orderChildTypeId: 1,
                projectOrderCode: this.leftInfo.code
            }
            // 接口获取数据
            findOrderChildTypeDetail(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.firstPartyList = results.data.Body.firstPartyList
                    this.companyList = results.data.Body.companyList
                    this.propertyList = results.data.Body.propertyList
                    this.projectManagerList = results.data.Body.projectManagerList
                    console.log(results.data.Body)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        handleCheckAllChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData1 = val ? this.firstPartyList : []
            this.isIndeterminate1 = false
            this.inputShowOrHide(this.checkedData1, ['押金', '管理费'], this.firstPartyList)
        },
        handleCheckedDatasChange (value) {
            this.inputShowOrHide(value, ['押金', '管理费'], this.firstPartyList)
            let checkedCount = value.length
            this.checkAll1 = checkedCount === this.firstPartyList.length
            this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.firstPartyList.length
        },
        handleCheckAllConmpanyChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData2 = val ? this.companyList : []
            this.isIndeterminate2 = false
            this.inputShowOrHide(this.checkedData2, ['押金', '一切险'], this.companyList)
        },
        handleCheckedCompanysChange (value) {
            this.inputShowOrHide(value, ['押金', '一切险'], this.companyList)
            let checkedCount = value.length
            this.checkAll2 = checkedCount === this.companyList.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.companyList.length
        },
        handleCheckAllwuyeChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData3 = val ? this.propertyList : []
            this.isIndeterminate3 = false
        },
        handleCheckedwuyeChange (value) {
            let checkedCount = value.length
            this.checkAll3 = checkedCount === this.propertyList.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.propertyList.length
        },
        handleCheckAllManChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData4 = val ? this.projectManagerList : []
            this.isIndeterminate4 = false
        },
        handleCheckedManChange (value) {
            let checkedCount = value.length
            this.checkAll4 = checkedCount === this.projectManagerList.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.projectManagerList.length
        },
        // input显示与隐藏
        inputShowOrHide (data, inputData1, defaultData) {
            inputData1.forEach(ele => {
                let index = data.findIndex(item => item.name === ele)
                let dataIndex = defaultData.findIndex(item => item.name === ele)
                if (index >= 0) {
                    defaultData[dataIndex].isInput = true
                } else {
                    defaultData[dataIndex].isInput = false
                }
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
