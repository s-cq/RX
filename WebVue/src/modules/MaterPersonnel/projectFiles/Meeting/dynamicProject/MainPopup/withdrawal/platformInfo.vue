<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'平台详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">充值</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">服务费</span>
                    <span >5000元</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">日期</span>
                    <span >2019-09-10</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">日期</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">开始</span>
                    <span >2019-09-10</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">结束</span>
                    <span >2020-09-10</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">倒计时</span>
                    <span >360天</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">续费</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                    <span>从保证金扣除</span>
                </p>
                <p class="col-md-4">
                    <span class="cGreen">未启动</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
               <p class="col-md-4">
                    <span class="cLightGray pr8"></span>
                    <span></span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">剩余</span>
                    <span>360天</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">历史</span>
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
