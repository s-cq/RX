<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'培训内容'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShowEnvironment()"></span>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">

            <div class="analyItem">
                <p class="analyItemTit tx-center">培训课程</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">名称</span><span>冬日特训</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">日期</span><span>2019年12月10日</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">得分</span><span>88分</span></p>
                    <p class="col-md-12"><span class="cLightGray pr8">评价内容</span><span>此人态度很好,要加强关注</span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">武练评语</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">名称</span><span>冬日特训</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">日期</span><span>2019年12月10日</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">得分</span><span>76分</span></p>
                    <p class="col-md-12"><span class="cLightGray pr8">评价内容</span><span>有坚持的特性，不抛弃，不放弃</span></p>
                </div>
            </div>

            <div class="analyItem">
                <p class="analyItemTit tx-center">文修评语</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">名称</span><span>冬日特训</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">日期</span><span>2019年12月10日</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">得分</span><span>90分</span></p>
                    <p class="col-md-12"><span class="cLightGray pr8">评价内容</span><span>笔记做的很好，听课很认真，积极回答问题</span></p>
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
