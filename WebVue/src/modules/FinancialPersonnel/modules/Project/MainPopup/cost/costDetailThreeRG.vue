<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【施尾_人工】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目可用</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="项目总用= 发包已收（来源投资财务交易平台系统分账）* 0.8">项目总用</span>
                    <span>238,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="项目可用 = 发包已收（来源投资财务交易平台系统分账）* 0.8 - 已付人工款 - 已付材料款 - 待付人工款 - 待付材料款">项目可用</span>
                    <span>51,790.90</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="计划总人工 = 发包金额 - 计划总材料">计划总人工</span>
                    <span>157,109.58</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工总额</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="人工计划总额 = 发包金额  - 材料计划总额">人工计划总</span>
                    <span>157,109.58</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">修改人工</span>
                    <input type="text" class="jm_tab_inp width80 xgMoney" placeholder="计划人工" data-payable="425000.0000" value="157109.58" data-summoney="157109.5800">
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">差额</span>
                    <span id="rgceMoney">0.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">人工款</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="可用额度 =（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项）">可用额度</span>
                    <span>76,983.69</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="已付人工 =出纳已支付的人工凭证">已付人工</span>
                    <span>136,000.00</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="待付人工 =出纳待支付的人工凭证">待付人工</span>
                    <span>0.00</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">剩余</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="剩余可用 =（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工 - 待付人工 ">剩余可用</span>
                    <span>-59,016.31</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8" data-title="未用人工 =人工计划总额 - 已付人工 - 待付人工 ">未用人工</span>
                    <span>21,109.58</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="cLightGray pr8" data-title="人工可用=（发包金额 - 材料计划总额）* 0.7 * 回款比例（不包含增项） - 已付人工 - 待付人工">人工可用</span>
                    <span>-59,016.31</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr10">工种合计</span>
                    <span>0.00</span>
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
