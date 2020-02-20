<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'材料'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">原料</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">材料</span>
                    <span>普通玻璃</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">规格</span>
                    <span>8m*8m</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">成本</span>
                    <span>320元</span>
                </p>
            </div>
        </div>
        <div class="analyItem" v-for="index in 1" :key="index">
            <p class="analyItemTit tx-center">换算</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span class="cLightGray pr8">公式</span>
                    <span class="pr8">1</span>
                    <span class="pr8">:</span>
                    <span v-show="switchIndex != index">4</span>
                    <span v-show="switchIndex == index">
                        <input class="width80" type="text" value="4">
                    </span>
                </p>
                <div class="components-switch">
                    <div v-show="switchIndex == index">
                        <span class="switch-save" @click="switchChange(null, 'save')">保存</span>
                        <span class="switch-back" @click="switchChange(null, 'back')">返回</span>
                    </div>
                    <div v-show="switchIndex != index">
                        <span class="switch-edit" @click="switchChange(index, 'edit')">编辑</span>
                    </div>
                </div>


            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">产量</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">产量</span>
                    <span>4块</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">成本</span>
                    <span>80元</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">名称</span>
                    <span>普通玻璃</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">规格</span>
                    <span title="">5mm</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">用量</span>
                    <span title="">8㎡</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr5">成本</span>
                    <span title="">80元</span>
                </p>
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
            switchIndex: null
        }
    },
    created () {

    },
    methods: {
        switchChange (index, type) {
            this.switchIndex = index
            if (type === 'save') {
                // ... do something
            }
        }
    }
}
</script>
