<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【洽商_合计】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">洽商金额</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="洽商金额 = 合同增项金额合计">洽商金额 </span>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">洽商绩效</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="洽商绩效 = （增项签单金额 - 增项税金 - 增项代购）">洽商绩效 </span>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">利润</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="洽商利润 = （增项签单金额 - 增项发包金额 - 增项税金 - 增项代购）/ （增项签单金额 - 增项税金 - 增项代购）">洽商利润 </span>
                    <span class="cGreen">0.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">核算标准</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">余完 = <span class="cGreen">洽商绩效 - 洽商 = 0</span></span><br>
                    <span></span>
                </p>
                    <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem ">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6 ">
                    <span class="cLightGray pr8">余完 = <span class="cGreen">洽商绩效 - 洽商  = 0</span></span><br>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr10"></span>
                    <input type="button" value="确定" class="uiBtn-blue uiBtn-small btnpost">
                </p>
                    <span class="circlemark circlemark-lightRed">未</span>
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
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .staticSRyle {
        width: 25px;
        line-height: 25px!important;
        top: 2px;
        left: 2px;
        background: #000;
        opacity: .6;
        height: 25px;
        position: absolute;
        border-radius: 5px;
        color: #fff;
        text-align: center;
    }
</style>
