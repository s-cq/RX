<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'结余记录'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div v-if="record.length>0">
                <div class="analyItem" v-for="(item,index) in record" :key="index">
                    <p class="analyItemTit tx-center">记录{{index+1}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">月份</span>
                            <span>{{item.asr_Month | slice(0,7)}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">状态</span>
                            <span :class="item.asr_Result!=1?'cRed':'cGreen'">{{item.asr_Result!=1?'保持原级':'升级'}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">结余</span>
                            <span>{{item.asr_Balance}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">当月</span>
                            <span>{{item.asr_TotalPerformance}}</span>
                        </p>
                        <p class="col-md-12">
                            <span class="cLightGray pr8">备注</span>
                            <span>{{item.asr_Content}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无记录！</span>
                        </p>
                    </div>
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
import { GetByUIdAchievementSettlementRecord } from '../../../Resources/Api'
export default {
    data () {
        return {
            record: []
        }
    },
    created () {
        this.GetByUIdAchievementSettlementRecordFn()
    },
    methods: {
        // 查询指定人员的成就结算记录信息
        GetByUIdAchievementSettlementRecordFn () {
            let _this = this
            _this.record = []
            GetByUIdAchievementSettlementRecord({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.record = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}

</script>
<style scoped>
    .circlemark,
    .showstips {
        width: 60px;
        height: 25px;
        line-height: 23px;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
    }

</style>
