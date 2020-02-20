<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【订单_项目订单】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item,index) in drawList" :key="index">
            <p class="analyItemTit tx-center">订单{{index+1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span><br>
                    <span>{{item.orderno}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span><br>
                    <span>{{item.stage === 0 ? '已完成' : '执行中'}}</span>
                </p>
                 <p class="col-md-4">
                   <span class="cLightGray pr8">金额</span><br>
                   <span>0</span>
                </p>
                <!-- <span><span :class="['circlemark', item.stage === 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed' ]">{{item.stage === 0 ? '完' : '执'}}</span></span> -->
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
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            drawList: [
                {
                    name: '始结构图',
                    type: '原始结构图',
                    orderno: '80-5555-YS-1',
                    stage: 0
                },
                {
                    name: '分区构图',
                    type: '分区构图',
                    orderno: '80-5555-FQ-1',
                    stage: 0
                },
                {
                    name: '功能构图',
                    type: '功能构图',
                    orderno: '80-5555-GN-1',
                    stage: 0
                },
                {
                    name: '色彩构图',
                    type: '色彩构图',
                    orderno: '80-5555-SC-1',
                    stage: 0
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
