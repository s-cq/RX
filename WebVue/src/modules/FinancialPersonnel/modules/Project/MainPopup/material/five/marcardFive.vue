<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'清单'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item,index) in marList" :key="index">
            <p class="analyItemTit tx-center">清单{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">名称</span>
                    <span>{{item.name}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">品牌</span>
                    <span>{{item.pin}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">型号</span>
                    <span>{{item.xing}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">规格</span>
                    <span>{{item.gui}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">成本</span>
                    <span>{{item.cheng.toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">档次</span>
                    <span>{{item.dang}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">总量</span>
                    <span>{{item.zong}}个</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">用量</span>
                    <span>{{item.yong}}个</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">共</span>
                    <span>{{marList.length}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            marList: [{
                name: '八字阀',
                pin: '广东产',
                xing: '其他',
                gui: '20mm',
                cheng: 13,
                dang: '-',
                zong: 7,
                yong: 0
            }]
        }
    },
    created () {

    },
    methods: {

    }
}
</script>
