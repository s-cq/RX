<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'名片'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">设置</p>
            <div class="analyItemCon">
                <p class="col-md-10"></p>
                <p class="col-md-2">
                    <el-tooltip :content="'Switch value: ' + switchValue" placement="top">
                        <el-switch v-model="switchValue" active-color="#66b1ff" inactive-color="#ddd" active-value="100" inactive-value="0">
                        </el-switch>
                    </el-tooltip>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
</div>
</template>
<script>
export default {

    data () {
        return {
            fourIndex: undefined,
            switchValue: 0
        }
    },
    created () {

    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
