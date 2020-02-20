<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'消防维护'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">消防维护</p>
            <div class="analyItemCon">
                <span class="cLightGray mr10">消防维保</span>
                <select class="width100" onchange="IsFireCompany(this)">
                    <option value="">请选择</option>
                    <option value="1">是</option>
                    <option value="2">否</option>
                </select>
                <div class="col-md-11 pb10 pt10">
                    <span class="cLightGray pr8 fl lh28 firedis" title="消防维保公司" style="display: block;">公司名称</span>
                    <input type="text" id="FirecontrolCompany" class="firedis width280" style="display: inline-block;">
                </div>
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
