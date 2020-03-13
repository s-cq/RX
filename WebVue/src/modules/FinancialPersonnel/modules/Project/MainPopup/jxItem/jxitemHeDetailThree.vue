<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【绩效_合计】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="">
            <div class="analyItem">
                <p class="analyItemTit tx-center">监理</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="监理预计提成 = 绩效金额 * 0.002 ">绩效占比</span>
                        <span class="cGreen">{{performance.superMap.complete_ratio | toFixed()}}%</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="公式 = 绩效金额 * 0.002">公式</span>
                        <span class="cGreen">绩效金额 * {{performance.superMap.complete_ratio | toFixed()}}%</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title=" 监理预计提成 = 绩效金额 * 0.002">预计提成</span>
                        <span class="cGreen">{{(performance.PerformanceMoney*(performance.superMap.complete_ratio/100)) | toFixed()}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">经理</p>
                <div class="analyItemCon" v-if="performance.engineerMap!=null">
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="经理预计提成 = 绩效金额 * 0.0005 ">绩效占比</span>
                        <span class="cGreen">{{performance.engineerMap.complete_ratio | toFixed()}}%</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="公式 = 绩效金额 * 0.0005">公式</span>
                        <span class="cGreen">绩效金额 * {{performance.engineerMap.complete_ratio | toFixed()}}% </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title=" 经理预计提成 = 绩效金额 * 0.0005">预计提成</span>
                        <span class="cGreen">{{(performance.PerformanceMoney*(performance.engineerMap.complete_ratio/100)) | toFixed()}}</span>
                    </p>
                </div>
                <div class="analyItemCon" v-else>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="经理预计提成 = 绩效金额 * 0.0005 ">绩效占比</span>
                        <span class="cGreen">0.00%</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="公式 = 绩效金额 * 0.0005">公式</span>
                        <span class="cGreen">绩效金额 * 0.00% </span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title=" 经理预计提成 = 绩效金额 * 0.0005">预计提成</span>
                        <span class="cGreen">0.00</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            performance: {},
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
        }
    },
    created () {
        this.performance = this.$route.query.performance
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    },
    filters: {
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        },
        // 金额过滤
        toFixed (value) {
            if (value == null || isNaN(value) || value === undefined) {
                return '0.00'
            } else {
                return value.toFixed(2)
            }
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
