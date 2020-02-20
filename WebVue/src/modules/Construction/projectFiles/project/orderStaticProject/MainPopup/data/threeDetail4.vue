<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'日期修改'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">合同开工</p>
            <div class="analyItemCon">
                <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd"
                    @blur='value1Change()'>
                </el-date-picker>
            </div>
        </div>
        <div class="analyItem">
             <p class="analyItemTit tx-center">首期款</p>
            <div class="analyItemCon">
                <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">二期款</p>
            <div class="analyItemCon">
                <el-date-picker
                    v-model="value3"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">三期款</p>
            <div class="analyItemCon">
               <el-date-picker
                    v-model="value4"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">尾款</p>
            <div class="analyItemCon">
               <el-date-picker
                    v-model="value5"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
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
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
        }
    },
    created () {

    },
    methods: {
        value1Change () {
            const initialTime = this.value1
            this.value2 = this.AddDays(initialTime, 7)
            this.value3 = this.AddDays(initialTime, 10)
            this.value4 = this.AddDays(initialTime, 11)
            this.value5 = this.AddDays(initialTime, 12)
        },
        // 时间默认加天数
        AddDays (date, days) {
            var nd = new Date(date).getTime()
            nd = nd + days * 24 * 60 * 60 * 1000
            nd = new Date(nd).getTime()
            var cdate = nd
            return cdate
        }
    }
}
</script>
