<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'日期选择'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
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
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交" v-if="buttonIsShow">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            buttonIsShow: false // 是否显示按钮
        }
    },
    computed: {
        ...mapGetters(['userInfo', 'twoToThreeInfo'])
    },
    created () {
        this.buttonType()
    },
    methods: {
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
