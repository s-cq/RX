<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'位置详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">一级名称</p>
            <div class="analyItemCon">
                <el-select v-model="value" placeholder="请选择一级名称" @change="selectChange()">
                    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">二级名称</p>
            <div class="analyItemCon">
                <el-select v-model="value1" placeholder="请选择二级名称">
                    <el-option v-for="item in options1" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
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
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="tx-center">
                    <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
                </div>
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
            options1: [],
            value: '',
            value1: ''
        }
    },
    created () {

    },
    methods: {
        selectChange () {
            if (this.value === '形象') {
                this.options1 = [
                    {
                        value: '形象标识',
                        label: '形象标识'
                    },
                    {
                        value: '着装形象',
                        label: '着装形象'
                    }
                ]
            } else if (this.value === '安全') {
                this.options1 = [
                    {
                        value: '用电安全',
                        label: '用电安全'
                    },
                    {
                        value: '消防安全',
                        label: '消防安全'
                    },
                    {
                        value: '设备安全',
                        label: '设备安全'
                    },
                    {
                        value: '人员安全',
                        label: '人员安全'
                    }
                ]
            } else if (this.value === '环境') {
                this.options1 = [
                    {
                        value: '现场保护',
                        label: '现场保护'
                    }
                ]
            }
        }
    }
}
</script>
