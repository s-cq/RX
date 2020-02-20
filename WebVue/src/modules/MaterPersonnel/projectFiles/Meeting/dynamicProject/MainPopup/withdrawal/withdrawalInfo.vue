<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'保金详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div tag="div" @click="clickFourShow(0,0)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">收入</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span >{{shouRu}}</span>
                </p>
            </div>
        </div>
        <div tag="div" @click="clickFourShow(0,1)" class="analyItem anItemBor">
            <p class="analyItemTit tx-center">支出</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span >{{zhiChu}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
              <p class="col-md-4">
                    <span class="cLightGray pr8">收入</span>
                    <span>{{shouRu.toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">支出</span>
                    <span>{{(zhiChu).toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">余额</span>
                    <span>{{(shouRu+zhiChu).toFixed(2)}}</span>
                </p>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight"
        leave-active-class="animated faster slideOutRight">
        <!-- 记录 Record -->
        <rx-record :type="type" v-if="fourIndex === 0" :key="0"></rx-record>
    </transition-group>
</div>
</template>
<script>
// 注: 所有的大组件已 rx-xxx 命名
import rxRecord from './Four/RecordOfRevenue'
import { mapGetters } from 'vuex'
import { GetPmUserinfoDepositbyUid } from '../../Resources/Api'
export default {
    components: {
        rxRecord
    },
    data () {
        return {
            fourIndex: undefined,
            Record: [],
            shouRu: 0,
            zhiChu: 0,
            type: 0
        }
    },
    created () {
        this.GetPmUserinfoDepositbyUidFn()
    },
    methods: {
        clickFourShow (index, log) {
            this.fourIndex = index
            this.type = log
        },
        // 查询已结算的项目信息
        GetPmUserinfoDepositbyUidFn () {
            let _this = this
            _this.Record = []
            _this.shouRu = 0
            _this.zhiChu = 0
            GetPmUserinfoDepositbyUid({
                uid: _this.leftInfo.uid
            }).then(res => {
                _this.Record = res.data.body
                for (let i = 0; i < _this.Record.length; i++) {
                    if (_this.Record[i].money > 0) {
                        _this.shouRu = _this.shouRu + _this.Record[i].money
                    } else {
                        _this.zhiChu = _this.zhiChu + _this.Record[i].money
                    }
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
