<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'退单'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437" v-if="refundUser.length>0">
            <div class="analyItem"  v-for="(item,index) in refundUser" :key="index">
                <p class="analyItemTit tx-center"></p>
                <div class="analyItemCon">
                    <p class="col-md-12">
                        <span class="cLightGray pr8">{{refundUser.pmDepositRemark}}</span></p>
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
            refundUser: []
        }
    },
    created () {
        this.GetDeposit()
    },
    methods: {
        GetDeposit () {
            let _this = this
            _this.refundUser = []
            getDepositDetail({
                uId: _this.leftInfo.uid,
                flag: 3 /* 退单 */
            }).then(results => {
                _this.refundUser = results.data.Body
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
            this.GetDeposit()
        }
    }
}
