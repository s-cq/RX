<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'物业信息'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">物业信息</p>
            <div class="analyItemCon">
                <div class="col-md-6 pb10">
                    <span class="cLightGray pr8 fl lh28" title="负责人电话">负责人电话</span>
                    <input type="text" id="LeaderPhone" class=" width120" onkeyup="this.value = this.value.replace(/\D/g, '')">
                </div>
                <div class="col-md-4 pb10">
                    <span class="cLightGray pr8 fl lh28" title="面积">面积</span>
                    <div class="uiText-selfAuto">
                        <input type="text" id="BuildArea" onkeyup="this.value = this.value.replace(/\D/g, '')" class="form-control noradius">
                        <div class="uiText-commonIcon uiText-commonIcon-right">m²</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <span class="cLightGray pr8 fl lh28 dis-il-block width70 tx-right " title="保修期">保修期</span>
                    <div class="uiText-selfAuto">
                        <input type="text" id="GuarantyDate" onkeyup="this.value = this.value.replace(/\D/g, '')" class="form-control noradius">
                        <div class="uiText-commonIcon uiText-commonIcon-right">月</div>
                    </div>
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
