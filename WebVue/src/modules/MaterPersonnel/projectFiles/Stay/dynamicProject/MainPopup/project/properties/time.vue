<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'施工时间'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">施工时间</p>
            <div class="analyItemCon">
                <select class="width100">
                    <option value="">请选择</option>
                    <option value="1">均可</option>
                    <option value="2">白天</option>
                    <option value="3">晚上</option>
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
