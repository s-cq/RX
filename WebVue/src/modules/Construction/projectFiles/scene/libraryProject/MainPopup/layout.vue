<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'新增标准'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">一级名称</p>
            <div class="analyItemCon">
                <el-select v-model="value1" placeholder="请选择一级名称" v-if="radio == 1">
                    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <input class="width200" type="text" placeholder="输入一级名称" v-if="radio == 2">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">二级名称</p>
            <div class="analyItemCon">
                <el-select v-model="value" placeholder="请选择二级名称" v-if="radio == 1">
                    <el-option v-for="item in options1" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <input class="width200" type="text" placeholder="输入二级名称" v-if="radio == 2">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">三级名称 </p>
            <div class="analyItemCon">
                <input class="width200" type="text" placeholder="输入三级名称">
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="tx-center">
            <el-radio v-model="radio" label="1">新增</el-radio>
            <el-radio v-model="radio" label="2">已有</el-radio>
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            radio: '1',
            options: [
                {
                    value: '形象',
                    label: '形象'
                },
                {
                    value: '安全',
                    label: '安全'
                },
                {
                    value: '环境',
                    label: '环境'
                }],
            options1: [
                {
                    value: '形象1',
                    label: '形象1'
                },
                {
                    value: '安全1',
                    label: '安全1'
                },
                {
                    value: '环境1',
                    label: '环境1'
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
