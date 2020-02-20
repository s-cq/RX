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
                    <div v-for="(data, index) in data1" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入内容" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input>
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
                    <div v-for="(data, index) in data2" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入内容" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input>
                         <el-select v-model="value" placeholder="请选择" v-if="data.name === '一切险' && data.isInput" class="w100 ml5">
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
                    <div v-for="(data, index) in data3" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入内容" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input>
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
                    <div v-for="(data, index) in data4" :key="index"  class="col-md-4" style="line-height:28px">
                        <el-checkbox :label="data" :key="data.name">{{data.name}}</el-checkbox>
                        <el-input placeholder="请输入内容" size="mini" v-if="data.isInput" style="width:100px" class="ml5"></el-input>
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
                    <span class="cGreen">{{this.data1.length + this.data2.length + this.data3.length + this.data4.length}}</span>
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
            data1: [
                {
                    isInput: false,
                    name: '押金'
                },
                {
                    isInput: false,
                    name: '管理费'
                },
                {
                    isInput: false,
                    name: '房屋租赁合同'
                },
                {
                    isInput: false,
                    name: '收楼证明'
                },
                {
                    isInput: false,
                    name: '物业费、水电费交费清单'
                },
                {
                    isInput: false,
                    name: '授权租户进场装修证明'
                },
                {
                    isInput: false,
                    name: '授权租户对原有设施进行改造'
                },
                {
                    isInput: false,
                    name: '建筑设计消防审核意见书 '
                },
                {
                    isInput: false,
                    name: '施工现场备案凭证'
                }
            ],
            data2: [
                {
                    isInput: false,
                    name: '人身险'
                },
                {
                    isInput: false,
                    name: '一切险'
                },
                {
                    isInput: false,
                    name: '押金'
                },
                {
                    isInput: false,
                    name: '资质（施工、设计）、营业执照、安全生产许可证、法人身份证'
                },
                {
                    isInput: false,
                    name: '授权书 （给装饰公司）'
                },
                {
                    isInput: false,
                    name: '授权书 （给装饰公司）'
                },
                {
                    isInput: false,
                    name: '项目经理证件'
                },
                {
                    isInput: false,
                    name: '安全员证'
                },
                {
                    isInput: false,
                    name: '设计总说明 '
                },
                {
                    isInput: false,
                    name: '原始平面图 '
                },
                {
                    isInput: false,
                    name: '平面布置'
                },
                {
                    isInput: false,
                    name: '墙面放线图'
                },
                {
                    isInput: false,
                    name: '墙面立面、剖面'
                },
                {
                    isInput: false,
                    name: '综合天花布置'
                },
                {
                    isInput: false,
                    name: '消防图'
                },
                {
                    isInput: false,
                    name: '施工图纸'
                },
                {
                    isInput: false,
                    name: '电气图'
                },
                {
                    isInput: false,
                    name: '空调系统图'
                },
                {
                    isInput: false,
                    name: '施工组织方案'
                },
                {
                    isInput: false,
                    name: '用电防火管理制度'
                },
                {
                    isInput: false,
                    name: '安全生成协议'
                },
                {
                    isInput: false,
                    name: '合同'
                },
                {
                    isInput: false,
                    name: '报价'
                }
            ],
            data3: [
                {
                    isInput: false,
                    name: '物业资料(安全协议书等)'
                }
            ],
            data4: [
                {
                    isInput: false,
                    name: '出入证资料(工人身份证、照片)'
                },
                {
                    isInput: false,
                    name: '当地备案'
                },
                {
                    isInput: false,
                    name: '施工组织方案'
                },
                {
                    isInput: false,
                    name: '用火防火管理制度'
                },
                {
                    isInput: false,
                    name: '安全管理协议'
                }
            ],
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
            checkedLength: 0
        }
    },
    created () {

    },
    methods: {
        handleCheckAllChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData1 = val ? this.data1 : []
            this.isIndeterminate1 = false
            this.inputShowOrHide(this.checkedData1, ['押金', '管理费'], this.data1)
        },
        handleCheckedDatasChange (value) {
            this.inputShowOrHide(value, ['押金', '管理费'], this.data1)
            let checkedCount = value.length
            this.checkAll1 = checkedCount === this.data1.length
            this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.data1.length
        },
        handleCheckAllConmpanyChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData2 = val ? this.data2 : []
            this.isIndeterminate2 = false
            this.inputShowOrHide(this.checkedData2, ['押金', '一切险'], this.data2)
        },
        handleCheckedCompanysChange (value) {
            this.inputShowOrHide(value, ['押金', '一切险'], this.data2)
            let checkedCount = value.length
            this.checkAll2 = checkedCount === this.data2.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.data2.length
        },
        handleCheckAllwuyeChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData3 = val ? this.data3 : []
            this.isIndeterminate3 = false
        },
        handleCheckedwuyeChange (value) {
            let checkedCount = value.length
            this.checkAll3 = checkedCount === this.data3.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.data3.length
        },
        handleCheckAllManChange (val) {
            // val true 是全选 false 是全不选
            this.checkedData4 = val ? this.data4 : []
            this.isIndeterminate4 = false
        },
        handleCheckedManChange (value) {
            let checkedCount = value.length
            this.checkAll4 = checkedCount === this.data3.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.data4.length
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
