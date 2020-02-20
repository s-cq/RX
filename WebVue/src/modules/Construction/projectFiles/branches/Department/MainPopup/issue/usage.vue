<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'使用情况'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item, index) in usageList" :key="index">
            <p class="analyItemTit tx-center">记录</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">备注</span>
                    <span>{{ item.remark }}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{ item.create_date | slice(0, 10) }}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{ item.update_date | slice(0, 10) }}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">操作人</span>
                    <span>{{ item.opereater }}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer" style="padding-bottom: 1px">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
</div>
</template>
<script>
// vuex
import { mapGetters } from 'vuex'
// Api
import { getRecord } from '../../Resources/Api/index'
export default {
    data () {
        return {
            usageList: [] // 使用记录
        }
    },
    created () {
        this._getRecordFn()
    },
    methods: {
        /* 按监控号查询使用记录 */
        _getRecordFn () {
            let params = {
                camera: this.leftInfo.camera
            }
            getRecord(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.usageList = result.data.Body.orderList
                }
            }).catch((err) => {
                console.log(`按监控号查询使用记录接口错误,错误内容${err}`)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
