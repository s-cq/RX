<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'摄像头详情'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">领取情况</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">实际领取</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">已领取</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">未领取</span>
                        <span>{{projectSum}}</span>
                    </p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">安装情况</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">实际安装数量</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">已安装数量</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">未安装数量</span>
                        <span>{{projectSum}}</span>
                    </p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">工作时间</p>
                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">摄像头实际工作时间</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">摄像头还需工作时间</span>
                        <span>{{projectSum}}</span>
                    </p>

                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">拍摄位置</p>

                <div class="analyItemCon">
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">摄像头位置标准</span>
                        <span>{{projectSum}}</span>
                    </p>
                    <p class="col-md-4 ">
                        <span class="cLightGray pr8">摄像头位置调整</span>
                        <span>{{projectSum}}</span>
                    </p>
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
