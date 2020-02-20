<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'竣工详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShowEnvironment()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">虾吃虾涮</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span>已竣工</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">金额</span><span>214713.80</span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">呷哺呷哺</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span>已竣工</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">金额</span><span>214713.80</span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">海底捞</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">订单号</span><span>AQDD95-1330001</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">项目单号</span><span>95-1330</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">状态</span><span>已竣工</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">金额</span><span>214713.80</span></p>
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

} from '../../Resources/Api'
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
