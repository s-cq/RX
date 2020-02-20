
<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'资料盖章'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(data, index) in dataList" :key="index" >
            <p class="analyItemTit tx-center">客户</p>
            <div class="analyItemCon">
                <p class="col-md-10">{{dataList.name}}</p>
                <rx-radio  :label="data"></rx-radio>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总共</span>
                    <span></span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" value="提交">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { getFindDetailData } from '../../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            dataList: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getFindDetailData()
    },
    methods: {
        // 获取数据
        getFindDetailData () {
            let parm = {
                code: this.leftInfo.code
            }
            // 接口获取数据
            getFindDetailData(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.dataList = results.data.Body.DetailDataList
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.getFindDetailData()
        }
    }
}
</script>
<style lang="">
    .dataTitle {
        position: absolute;
        right: 10px;
        bottom: 5px;
    }
    .w100 {
        width:100px;
    }
</style>
