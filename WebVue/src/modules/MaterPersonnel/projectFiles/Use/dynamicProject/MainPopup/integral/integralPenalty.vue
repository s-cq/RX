<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'罚款'}"></three-title>
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
import { getDepositDetail } from '../../Resources/Api/index'
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
        GetDeposit () {
            let _this = this
            _this.penalty = []
            getDepositDetail({
                uId: _this.leftInfo.uid,
                flag: 2
            }).then(results => {
                _this.penalty = results.data.Body
            }).catch(error => {
                console.log(error)
            })
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
