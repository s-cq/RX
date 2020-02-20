<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'评价'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-if="penalty.length>0">
            <div class="analyItem"  v-for="(item,index) in penalty" :key="index">
                <p class="analyItemTit tx-center"></p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">{{item.pmDepositRemark}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center"></p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无内容！</span>
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
import { mapGetters } from 'vuex'
import { getEvaluateByPmID } from '../../Resources/Api/index'
export default {
    data () {
        return {
            penalty: []
        }
    },
    created () {
        this.GetDeposit()
    },
    methods: {
      
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetProjectManagerResult()
        }
    }
}


</script>
