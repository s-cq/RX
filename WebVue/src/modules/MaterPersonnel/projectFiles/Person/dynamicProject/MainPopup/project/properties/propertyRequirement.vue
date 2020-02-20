<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'保护要求'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
        <p class="analyItemTit tx-center">保护要求</p>
           <div class="analyItemCon">
                <span class="cLightGray mr10">保护材料</span>
                <select class="width100" id="ProtectiveMaterial">
                    <option value="">请选择</option>
                    <option value="无要求">无要求</option>
                    <option value="彩条布">彩条布</option>
                    <option value="石膏板">石膏板</option>
                    <option value="木工板">木工板</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <span class="cLightGray mr10">围挡</span>
                <select class="width100" id="HoardingMaterial">
                    <option value="">请选择</option>
                    <option value="无要求">无要求</option>
                    <option value="彩钢板">彩钢板</option>
                    <option value="石膏板">石膏板</option>
                    <option value="喷绘">喷绘</option>
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
