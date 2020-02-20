<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'形象订单详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShowImage()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">订单1</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">状态</span><span>超期</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">评价</span><span>0</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">-10</span><span></span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">订单2</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">状态</span><span>超期</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">评价</span><span>0</span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">订单3</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">状态</span><span>超期</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">评价</span><span>0</span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">订单4</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">状态</span><span>超期</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">评价</span><span>0</span></p>
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
import {
    mapGetters
} from 'vuex'
import {

} from '../../../Resources/Api'
// import { getTechnicsDetail } from '../../../Resources/Api/index'
export default {
    // props: ['month', 'year'],
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {

    },
    methods: {
    }

}
</script>
