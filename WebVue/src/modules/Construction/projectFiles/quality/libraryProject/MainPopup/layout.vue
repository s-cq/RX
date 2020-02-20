<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'新增'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">类</p>
            <div class="analyItemCon">
                <el-select v-model="value1" placeholder="请选择" v-if="radio == 1">
                    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <input class="width200" type="text" placeholder="输入类" v-if="radio == 2">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">科目</p>
            <div class="analyItemCon">
                <el-select v-model="value" placeholder="请选择" v-if="radio == 1">
                    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <input class="width200" type="text" placeholder="输入科目" v-if="radio == 2">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">子目</p>
            <div class="analyItemCon">
                <input class="width200" type="text" placeholder="输入子目">
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="tx-center">
            <el-radio v-model="radio" label="1">选择已有</el-radio>
            <el-radio v-model="radio" label="2">不选择</el-radio>
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
                    value: '基础',
                    label: '基础'
                },
                {
                    value: '专项',
                    label: '专项'
                },
                {
                    value: '成品',
                    label: '成品'
                },
                {
                    value: '组装',
                    label: '组装'
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
