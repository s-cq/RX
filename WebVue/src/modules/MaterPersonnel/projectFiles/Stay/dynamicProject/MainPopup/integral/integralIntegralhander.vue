<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437">
            <div class="analyItem">
                <p class="analyItemTit tx-center">积分</p>
                <div class="analyItemCon">
                    <p class="col-md-3 cRed nowIntegralAll">0分</p>
                    <p class="col-md-3"><strong class="EndLevels cGreen fz14 pr5 nowLevelAll">4</strong>级降<strong
                            class="EndLevelsLast cRed fz14 pl5 pr5 beforeLevelAll">4</strong>级</p>
                    <p class="col-md-3"><span class="cLightGray pr8 ">距离降<strong
                                class="cRed fz14 beforeLevelThree beforeLevelAll">4</strong>级需扣<span
                                class="cRed diffIntegralAll">100</span>分</span>
                    </p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span
                            class="fz14 cRed StateAll">传统最低阶</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem ">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span
                            class="fz14 cRed LastState">传统最低级</span></p>
                    <p class="col-md-3 cRed"><span class="EndDays residueClass">10天</span></p>
                    <p class="col-md-3"><strong class="EndLevels cGreen fz14 pr5 nowLevelAll">4</strong>级降<strong
                            class="EndLevelsLast cRed fz14 pl5 pr5 beforeLevelAll">4</strong>级</p>
                    <p class="col-md-3"><span class="cRed fz14 dayStateClass">未到时</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">通知</p>
                <div class="analyItemCon">
                    <p class="col-md-7">
                        <input type="text" value="" class="col-md-10 notice" placeholder="未满足降5级要求" readonly="">
                    </p>
                    <p class="col-md-3">日期<span class="cLightGray pr8 dateClass">2019-9-20</span></p>
                    <p class="col-md-2"><span class="fr cRed fz14">未推送</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">状态</span>
                        <span class="cRed">面授未启动</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">答题</span>
                        <span class="cRed">未答题</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">分数</span>
                        <span class="cRed">0</span>
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

        }
    },
    created () {

    },
    methods: {

    }
}

</script>
