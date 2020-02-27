<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'款项_期数】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">明细</p>
            <div class="analyItemCon">
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">应收</span>
                        <span>{{formatDate($route.query.item.receivable_time)}}</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">实收</span>
                        <span class="c666">{{formatDate($route.query.item.received_time)}}</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">金额</span>
                    <span class="c666">{{$route.query.item.received}}</span>
                </p>
                <p class="fl col-md-3">
                    <span class="cLightGray pr8">倒计时</span>
                    <span :class="{'cRed':$route.query.item.day<0}" >{{$route.query.item.day}}</span>

                </p>
            </div>
         </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <return-four v-if="fourIndex === 0" :key="0"></return-four>
    </transition-group>
</div>
</template>
<script>
import returnFour from './four/returnFour'
export default {
    components: {
        returnFour
    },
    data () {
        return {
            fourIndex: undefined
        }
    },
    created () {
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        // 时间转换
        formatDate (value) {
            let date = new Date(value)
            let y = date.getFullYear()
            let MM = date.getMonth() + 1
            MM = MM < 10 ? ('0' + MM) : MM
            let d = date.getDate()
            d = d < 10 ? ('0' + d) : d
            return y + '-' + MM + '-' + d
        }
    }
}
</script>
