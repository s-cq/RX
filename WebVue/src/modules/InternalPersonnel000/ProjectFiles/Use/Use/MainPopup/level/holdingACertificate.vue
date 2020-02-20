<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'持有证书详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShowEnvironment()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">持有证书</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">一级证书</span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">二级证书</span><span></span></p>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">证书图片</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">图片1</span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">图片2</span><span></span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">证书单号 </p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">证书单号1</span><span></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">证书单号2</span><span></span></p>
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
