<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'投诉'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-if="Complaint.length>0">
            <div class="analyItem">
                <p class="analyItemTit tx-center"></p>
                <div class="analyItemCon">

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
                        <p class="col-md-4">
                            <span>次数</span>
                        </p>
                        <p class="col-md-4">
                            <span>积分</span>
                        </p>
                        <p class="col-md-4">
                            <span  @click="clickFourShow(0)">历史</span>
                        </p>
                </div>
            </div>
        </div>
          <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 问题 threeresultDetail -->
        <rx-history v-if="fourIndex === 0" :key="0" :basic="basic"></rx-history>
    </transition-group>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getDepositDetail } from '../../Resources/Api/index'
import rxHistory from './IntegralHistory/history'
export default {
    components: {
        rxHistory
    },
    data () {
        return {
            Complaint: [],
            fourIndex: undefined
        }
    },
    created () {
        console.log(this.leftInfo)
    },
    methods: {
        GetDeposit () {
            let _this = this
            getDepositDetail({
                uId: _this.leftInfo.uid,
                flag: 1
            })
        },
        clickFourShow (index) {
            this.fourIndex = index
        }
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
