<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray">报价</span></p>
                <div class="col-md-4">
                    <el-select v-model="value" placeholder="调取报价中的科目">
                        <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <input type="button" value="确认" class="uiBtn-small uiBtn-blue fr">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">适用</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                    <el-select v-model="value1" placeholder="调取报价中的科目">
                        <el-option v-for="item in options1" :key="item.value"  :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="col-md-4">
                    <input type="button" value="确认" class="uiBtn-small uiBtn-blue">
                </div>
                <div class="col-md-3">
                    <span>拆除</span>
                </div>
                <input type="button" value="确认" class="uiBtn-small uiBtn-red fr">
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span>2</span>项</p>
                <input type="button" value="确认" class="uiBtn-small uiBtn-blue fr">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            options: [
                {
                    value: '调取报价中的科目',
                    label: '调取报价中的科目'
                },
                {
                    value: '调取报价中的科目',
                    label: '调取报价中的科目'
                },
                {
                    value: '调取报价中的科目',
                    label: '调取报价中的科目'
                }],
            options1: [
                {
                    value: '科目一',
                    label: '科目一'
                },
                {
                    value: '科目二',
                    label: '科目二'
                },
                {
                    value: '科目三',
                    label: '科目三'
                }],
            value: '',
            value1: ''
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
