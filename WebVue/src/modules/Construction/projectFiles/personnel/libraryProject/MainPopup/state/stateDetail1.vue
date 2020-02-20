<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'审计详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
       <div class="analyItem">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray">报价</span></p>
                <select class="fl">
                    <option>调取报价中的科目</option>
                    <option>调取报价中的科目</option>
                    <option>调取报价中的科目</option>
                </select>
                <input type="button" value="确认" class="uiBtn-small uiBtn-blue fr">
            </div>
        </div>
       <div class="analyItem">
            <p class="analyItemTit tx-center">适用1</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <select>
                        <option class="hide">科目</option>
                        <option>科目一</option>
                        <option>科目二</option>
                        <option>科目三</option>
                    </select>
                </p>
                <p class="col-md-4"><input type="button" value="确认" class="uiBtn-small uiBtn-blue"></p>
                <p class="col-md-4"><span>拆除</span></p>
                <input type="button" value="删除" class="uiBtn-small uiBtn-red fr removeRed">
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
       <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span>2</span>项</p>
                <input type="button" value="确认" class="uiBtn-small uiBtn-blue fr">
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data () {
        return {
            fourIndex: undefined
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
