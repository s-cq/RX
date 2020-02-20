<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'财务'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">财务</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="c999999">{{orderDetail.personnelName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">罚款</span>
                    <span class="c999999 cRed">{{orderDetail.financialPenaltyFormula}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span class="c999999">{{orderDetail.financialPenaltyStageName}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="c999999">{{orderDetail.personnelName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">罚款</span>
                    <span class="c999999 cRed">{{orderDetail.financialPenaltyFormula}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span class="c999999">{{orderDetail.financialPenaltyStageName}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props: [ 'currentList' ],
    data () {
        return {
            orderDetail: {}
        }
    },
    created () {

    },
    mounted () {
        this.orderDetail = this.currentList
    },
    computed: {
        ...mapGetters([ 'leftInfo', 'twoInfo', 'updateThree' ])
    },
    methods: {
        // 收展
        openBox (event) {
            if ($(event.target).attr('data-num') === '1') {
                $(event.target).parents('.analyItemCon').find('.openBox').css({'height': 'auto'})
                $(event.target).attr('data-num', '2')
                $(event.target).html('收')
            } else {
                $(event.target).parents('.analyItemCon').find('.openBox').css({'height': '60px'})
                $(event.target).attr('data-num', '1')
                $(event.target).html('展')
            }
        }
    },
    watch: {
        $router () {
            this.orderDetail = this.currentList
        }
    },
    filters: {

    }
}
</script>
