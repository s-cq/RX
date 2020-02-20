<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'公积金'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">标准</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">级别</span>
                    <span>{{leftInfo.grade}}级</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">公积金</span>
                    <span>{{userLevel.housingFund}}元</span>
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
