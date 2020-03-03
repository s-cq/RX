<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【施尾_合同账】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="plr10">
                <div class="analyItem">
                    <p class="analyItemTit tx-center">合同</p>
                    <div class="analyItemCon">
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">合同金额</span>
                            <span class="cGreen">480,000.00</span>
                        </p>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">成本</p>
                    <div class="analyItemCon">
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8" data-title="发包金额= 承包给项目经理的总金额">发包金额</span>
                            <span class="cGreen">425,000.00</span>
                        </p>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">毛利</p>
                    <div class="analyItemCon">
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8" data-title="毛利金额 = 合同金额 - 发包金额">毛利金额</span>
                            <span class="cGreen">55,000.00</span>
                        </p>
                    </div>
                </div>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">核算公式</p>
                    <div class="analyItemCon">
                        <p class="fl col-md-8">
                            <span class="cLightGray pr8">公司毛利 = <span class="cGreen">合同金额 - 发包金额</span></span><br>
                            <span></span>
                        </p>
                    </div>
                </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="cLightGray pr8 col-md-10" data-title="公司毛利 = 合同金额 - 发包金额">
                    <span class="cGreen">公司毛利 = 合同金额 - 发包金额</span>
                </p>
                <span class="circlemark circlemark-green">完</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
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
