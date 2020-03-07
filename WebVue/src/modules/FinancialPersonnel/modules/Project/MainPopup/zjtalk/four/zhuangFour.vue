<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'【装饰_增减项】详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center"><span>装饰</span>|<span>减项</span></p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请日期</span><span>2020-01-13</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">增减类型</span>
                        <span style="color: red">
                            减项(<span>减项减利</span>)
                        </span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span class="layerui-title" style="color:green" data-title="【地方成本】审批通过">【地成】通过</span>
                    <input @click="chakan()" type="button" value="查看" data-title="点击进入查看增减项记录" class="uiBtn-blue uiBtn-small zjx_check layerui-title" data-zjxid="3343" data-zjxtype="0" data-flag="1">
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">签单金额</span>
                    <span>28,000.00</span>
                </p>

                <p class="fl col-md-4">
                    <span class="cLightGray pr8">发包金额</span>
                    <span>23,680.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">税金金额</span>
                    <span>0.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">装饰协调费</span>
                    <span>0.00</span>
                </p>

                <p class="fl col-md-4">
                    <span class="cLightGray pr8">人工增减金额</span>
                    <span>10,656.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">材料增减金额</span>
                    <span>13,024.00</span>
                </p>

                <p class="fl col-md-4 layerui-title" data-title="【装饰-减项】后期甲方更换地址">
                    <span class="cLightGray pr8">增减内容</span><span>【装饰-减...</span>
                </p>
                <p class="fl col-md-4 layerui-title" data-title="【装饰-减项】后期甲方更换地址">
                    <span class="cLightGray pr8">增减原因</span><span>【装饰-减...</span>
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
    </div>
        <!-- 五段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <rx-zhuangfive v-if="fiveIndex == 0 " :key="0"></rx-zhuangfive>
    </transition-group>
</div>
</template>
<script>
import rxZhuangfive from '../five/zhuangFive'

export default {
    components: {
        rxZhuangfive
    },
    data () {
        return {
            fiveIndex: undefined // 关闭index

        }
    },
    created () {

    },
    methods: {
        chakan () {
            this.fiveIndex = 0
        },
        clickFiveShow () {
            this.fiveIndex = undefined
        }
    }
}
</script>
