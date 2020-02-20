<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'款项信息详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">合同总金额</span><span>90,000.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">装饰合同额</span><span>90,000.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">空调总金额</span><span>0.00  A：详情</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">弱电合同额</span><span>0.00  A：详情</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">钢结构合同额</span><span>0.00  A：详情</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">消防合同额</span><span>0.00  A：详情</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">客户代购</span><span>0.00  A：详情</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">费项</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">折前工程直接费</span><span>91,855.47</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">原始总造价</span><span>99,912.05</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">工程总造价</span><span>90,000.86</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">回扣系数</span><span>1.0000</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">装饰自定义报价</span><span>2,000</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">装饰其他金额</span><span>0</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">取费</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">夜间施工费</span><span>0.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">远程施工费</span><span>0.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">综合取费</span><span>6,530.93</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">保险</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">工程一切险</span><span>0.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">人身意外险</span><span>0.00</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">税金</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">税金</span><span>0.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">系数税金</span><span>0.00</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">物业</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">物业管理费</span><span>0.00</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">物业押金</span><span>0.00</span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">协调费</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">装饰协调费</span><span>0.00</span></div>
                </div>
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
