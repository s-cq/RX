<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'竣工'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">标准</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">标准</span>
                    <span>{{userLevel.completeMoneyStandard}}元</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">提成</span>
                    <span>{{userLevel.completeRatio}}%</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">罚款一</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span></span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>30000元</span>
                </p>
                <p class="col-md-4" :data-title="'项目金额=金额x提成率'">
                    <span class="cLightGray pr8">提成金额</span>
                    <span>{{(30000*(userLevel.completeRatio/100)).toFixed(2)}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">罚款二</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span></span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>30000元</span>
                </p>
                <p class="col-md-4" :data-title="'项目金额=金额x提成率'">
                    <span class="cLightGray pr8">提成金额</span>
                    <span>{{(30000*(userLevel.completeRatio/100)).toFixed(2)}}</span>
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
    GetUserLevelStandardByAbilityLevel
} from '../../Resources/Api'
export default {
    data () {
        return {
            userLevel: {}
        }
    },
    created () {
        this.GetUserLevelStandardByAbilityLevelFn()
    },
    methods: {
        // 查询登记对应的分项设置信息
        GetUserLevelStandardByAbilityLevelFn () {
            let _this = this
            _this.userLevel = {}
            GetUserLevelStandardByAbilityLevel({
                level: _this.leftInfo.grade
            }).then(results => {
                _this.userLevel = results.data.Body
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
