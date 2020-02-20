<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'项目历史'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div v-if="record.length>0">
                <div class="analyItem" v-for="(item,index) in record" :key="index">
                    <p class="analyItemTit tx-center">项目{{index+1}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">名称</span>
                            <span :data-title="item.comp_name">{{item.comp_name | truncate(6)}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">编号</span>
                            <span>{{item.orderno}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">合同金额</span>
                            <span>{{item.contract_fee}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">竣工金额</span>
                            <span>{{item.money}}</span>
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">日期</span>
                            <span>{{item.finishtime | slice(0,10)}}</span>
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
                    <p class="col-md-12">
                        <span class="cLightGray pr8">总金额</span>
                        <span>{{(money/10000).toFixed(2)}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import { GetByUIdHistoryProject } from '../../../Resources/Api'
export default {
    data () {
        return {
            record: [],
            money: 0
        }
    },
    created () {
        this.GetByUIdHistoryProjectFn()
    },
    methods: {
        // 查询指定人员所负责的项目竣工金额信息
        GetByUIdHistoryProjectFn () {
            let _this = this
            _this.record = []
            _this.money = 0
            GetByUIdHistoryProject({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.record = results.data.Body
                for (let i = 0; i < _this.record.length; i++) {
                    _this.money = _this.money + _this.record[i].money
                }
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
