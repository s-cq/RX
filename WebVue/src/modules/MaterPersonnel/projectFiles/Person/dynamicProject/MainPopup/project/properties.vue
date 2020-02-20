<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'楼盘'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">施工时间</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">施工时间</span><span>无</span></p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">材料要求</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">防火等级</span><span>无</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">环保等级</span><span>无</span></p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(2)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">保护要求</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">保护材料</span><span>无</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">围 挡</span><span>无</span></p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(3)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">消防维保</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">维保</span><span>无</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">维保公司</span><span>无</span></p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(4)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">空调维保</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">维保</span><span>无</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">维保公司</span><span>无</span></p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(5)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">物业要求</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">物业要求</span><span>无</span></p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(6)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">物业信息</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">负责人电话</span><span>无</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">面积</span><span>无</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">保修期</span><span>无</span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>
        <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 施工时间 time -->
        <rx-time v-if="fourIndex === 0" :key="0"></rx-time>
        <!-- 材料要求 materialRequirement -->
        <rx-materialRequirement v-if="fourIndex === 1" :key="1"></rx-materialRequirement>
        <!-- 保护要求 protectRequirement -->
        <rx-protectRequirement v-if="fourIndex === 2" :key="2"></rx-protectRequirement>
        <!-- 消防维保 fireControl -->
        <rx-fireControl v-if="fourIndex === 3" :key="3"></rx-fireControl>
        <!-- 空调维保 airConditioner -->
        <rx-airConditioner v-if="fourIndex === 4" :key="4"></rx-airConditioner>
        <!-- 物业要求 propertyRequirement -->
        <rx-propertyRequirement v-if="fourIndex === 5" :key="5"></rx-propertyRequirement>
        <!-- 物业信息 propertyInfo -->
        <rx-propertyInfo v-if="fourIndex === 6" :key="6"></rx-propertyInfo>
    </transition-group>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxTime from './properties/time'
import rxMaterialRequirement from './properties/materialRequirement'
import rxProtectRequirement from './properties/protectRequirement'
import rxFireControl from './properties/fireControl'
import rxAirConditioner from './properties/airConditioner'
import rxPropertyRequirement from './properties/propertyRequirement'
import rxPropertyInfo from './properties/propertyInfo'

export default {
    components: {
        rxTime,
        rxMaterialRequirement,
        rxProtectRequirement,
        rxFireControl,
        rxAirConditioner,
        rxPropertyRequirement,
        rxPropertyInfo
    },
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
