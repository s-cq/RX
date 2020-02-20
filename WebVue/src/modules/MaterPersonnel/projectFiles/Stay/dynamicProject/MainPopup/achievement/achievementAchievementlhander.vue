<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'处理'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="textBox" style="display: block;">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">总金额</span>
                            <span class="completedAllMoneyClass cRed">0.00</span>万
                        </p>
                        <p class="col-md-3">
                            <strong class="NowLevelClass cGreen">4</strong>级升
                            <strong class="NextLevelClass cRed">5</strong>级
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">差额</span>
                            <span class="diffMoney cRed">-30.00</span>万
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8 ">状态</span>
                            <span class="isPromoted cRed">不同意</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span class="isPromoted cRed">不同意</span>
                    </p>
                    <p class="col-md-3"><span class="cLightGray pr8"></span><span
                            class="NextLevelDayClass cRed">10</span>天 </p>
                    <p class="col-md-3"><strong class="NowLevelClass cGreen">4</strong>级升<strong
                            class="NextLevelClass cRed">5</strong>级</p>
                    <p class="col-md-3"><span class="cLightGray pr8"></span><span class="DayMsg cRed">未到时</span></p>
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
