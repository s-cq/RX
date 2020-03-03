<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【施尾_成本账】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="plr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">成本</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="发包金额= 承包给项目经理的总金额">发包金额</span>
                        <span>425,000.00</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">项目经理</span>
                        <span>黄娟</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="项目总用= 发包已收（来源投资财务交易平台系统分账）* 0.8">项目总用</span>
                        <span>238,000.00</span>
                    </p>
                </div>
            </div>
             <div class="analyItem">
                 <p class="analyItemTit tx-center">其他费</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="夜间施工费 = 来源审计报价的夜间施工费">夜间施工费</span><br>
                        <span>0.00</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="远程施工费 = 来源审计报价的远程施工费">远程施工费</span><br>
                        <span>0.00</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="合计 = 夜间施工费 + 远程施工费">合计</span><br>
                        <span>0.00</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">人工</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="计划总人工 = 发包金额 - 计划总材料">计划总人工</span><br>
                        <span>157,109.58</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="核算总人工 = 工种应付金额合计（总工时 / 8 * 每天工资）">核算总人工</span><br>
                        <span>192,771.65</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="差额 = 计划总人工 - 核算总人工 - 夜间施工费 - 远程施工费">差额</span><br>
                        <span>-35,662.07</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="占比 = 核算总人工 / 发包金额">占比</span><br>
                        <span>45.36%</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">材料</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="计划总材料 = 发包金额 - 计划总人工">计划总材料</span><br>
                        <span>267,890.42</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="核算总材料 = 计划材料总额">核算总材料</span><br>
                        <span>267,890.42</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="差额 = 计划总材料 - 核算总材料">差额</span><br>
                        <span>0.00</span>
                    </p>
                    <p class="fl col-md-2">
                        <span class="cLightGray pr8" data-title="占比 = 计划总材料 / 发包金额">占比</span><br>
                        <span>63.03%</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">盈余账</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="盈余账 = 发包金额 - 核算总人工 - 核算总材料 - 夜间施工费 - 远程施工费">盈余</span>
                            <span class="cRed layerui-title" data-title="【预警】 = 盈余总额大于10000或者盈余总额小于 -10000都属于问题，否则属于正常">-35,662.07</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="项目实际发包毛利率">发包毛利率</span>
                            <span class="cRed" style="font-weight:bolder">10.38%</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="发包日期 = 项目实际的发包日期">发包日期</span>
                        <span>2019-12-25</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8" data-title="项目可用= 发包已收（来源投资财务交易平台系统分账）* 0.8 - 已付人工款 - 已付材料款 - 待付人工款 - 待付材料款">项目可用</span>
                    <span>51,790.90</span>
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
