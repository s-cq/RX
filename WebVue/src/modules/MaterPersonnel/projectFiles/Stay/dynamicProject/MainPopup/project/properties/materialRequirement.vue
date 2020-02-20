<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'材料要求'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料要求</p>
            <div class="analyItemCon">
                <span class="cLightGray mr10">材料防火等级</span>
                <select class="width100" id="MaterialFireLevel">
                    <option value="">请选择</option>
                    <option value="无">无</option>
                    <option value="A">A</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="B3">B3</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <span class="cLightGray mr10">材料环保等级</span>
                <select class="width100" id="MaterialProtectLevel">
                    <option value="">请选择</option>
                    <option value="无">无</option>
                    <option value="E0">E0</option>
                    <option value="E1">E1</option>
                    <option value="E2">E2</option>
                </select>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="保存">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    }
}
</script>
