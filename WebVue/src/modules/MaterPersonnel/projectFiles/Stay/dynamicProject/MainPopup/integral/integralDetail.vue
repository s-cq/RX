<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'积分'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                    <p class="col-md-3">金牌&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="cLightGray pr8 fz14 goleMedal cGreen">0个</span></p>
                    <p class="col-md-2 cRed nowIntegralThree">0分</p>
                    <p class="col-md-2">当前&nbsp;&nbsp;<span class="cLightGray pr8 nowLevelThree cGreen fz14">4</span>级
                    </p>
                    <p class="col-md-2">-100分</p>
                    <p class="col-md-2">下级别&nbsp;&nbsp;<span class="cLightGray pr8 beforeLevelThree cRed fz14">4</span>级
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">结余</p>
                <div class="analyItemCon">
                    <p class="col-md-3">结余&nbsp;&nbsp;&nbsp;&nbsp;<span
                            class="cLightGray pr8 cRed surplus_integra">0分</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">过程|留</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">加分</span><span class="threeCourse">0</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">管理|留</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">加分</span><span class="threeManage">0</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">结果|留</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">加分</span><span class="threeResult">0</span>
                    </p>
                </div>
            </div>
            <div class="analyItem ">
                <p class="analyItemTit tx-center">过程|用</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">加分</span><span>0</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">减分</span><span>-0</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">合计</span><span class="cGreen">0</span>
                    </p>
                </div>
            </div>
            <div class="analyItem ">
                <p class="analyItemTit tx-center">结果|用</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">加分</span><span>0</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">减分</span><span>-0</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">合计</span><span class="cRed">0</span>
                    </p>
                </div>
            </div>
            <div class="analyItem ">
                <p class="analyItemTit tx-center">管理|用</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">加分</span><span>0</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">减分</span><span>0</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">合计</span><span class="cGreen">0</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3 cRed nowIntegralThree">0分</p>
                    <p class="col-md-3"><strong class="EndLevels cGreen fz14 pr5 nowLevelThree">4</strong>级降<strong
                            class="EndLevelsLast cRed fz14 pl5 pr5 beforeLevelThree">4</strong>级</p>
                    <p class="col-md-3"><span class="cLightGray pr8 ">距离降<strong
                                class="cRed fz14 beforeLevelThree">4</strong>级需扣<span
                                class="cRed diffIntegralThree">100</span>分</span>
                    </p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span
                            class="fz14 cRed StateThree">传统最低级</span></p>
                </div>
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
