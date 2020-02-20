<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:params.WorkerTypeName}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">信息</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLightGray pr8">工时</span><span class="cGreen">{{workerTypeStandardList[0].WorkingHours | toFixed(2)}}小时</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">工期</span><span>{{orderConstructionPeriodList[0].construction_period}}天</span></div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">标准</p>
            <div class="analyItemCon">
                <div class="col-md-4" v-for="(item,index) in constructionStandardList" :key="index">
                    <span class="cLightGray pr8"></span><span class="cGreen">{{item.Name}}</span>
                    </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">所需</span><span>{{workerTypeStandardList[0].PerHeadWorkingHours/leftInfo.construction_period}}</span></div>
                <div class="col-md-3"><span class="cLightGray pr8">已选</span><span>{{workerTypeStandardList[0].PerHeadWorkingHours}}</span></div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getWorkerTypeStandardByWorkerTypeId } from '../Resources/Api/proStage'
export default {
    data () {
        return {
            params: [], // 二段传参 工种名称，工种编号
            constructionStandardList: [], // 施工准则
            orderConstructionPeriodList: [], // 订单工期
            workerTypeStandardList: []// 订单标准信息
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.params = this.$route.params
        this.load()
    },
    methods: {
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let proparm = {
                orderNo: _this.leftInfo.orderno,
                workerTypeId: _this.params.WorkerTypeId
            }
            getWorkerTypeStandardByWorkerTypeId(proparm).then((result) => {
                if (result.data.StatusCode === 0) {
                    _this.constructionStandardList = result.data.Body.constructionStandardList
                    _this.orderConstructionPeriodList = result.data.Body.orderConstructionPeriodList
                    _this.workerTypeStandardList = result.data.Body.workerTypeStandardList
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    watch: {
        $route () {
            this.params = this.$route.params
            this.load()
        }
    }

}
</script>
