<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'积分详情'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item, index) in integralThreeData" :key="index">
                <p class="analyItemTit tx-center">详情{{index+1}}</p>
                <div class="analyItemCon">
                    <p class="col-md-3">
                        <span v-if="item.integralIncreaseOrDecrease>0" class="cLightGray pr10">奖</span>
                        <span v-if="item.integralIncreaseOrDecrease<0" class="cLightGray pr10">罚</span>
                        <span class="cGreen">{{item.integralIncreaseOrDecrease}}分</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr8">原因描述</span>
                        <span>{{item.integral_remake}}</span>
                    </p>
                    <p class="col-md-3">
                        <span class="cLightGray pr10">时间</span>
                        <span>{{item.createTime}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem" v-if="integralThreeData.length === 0">
                <p class="analyItemTit tx-center">详情</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr10">暂无数据</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr10">总数</span>
                        <span>{{integralCount}}个</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr10">奖</span>
                        <span class="cGreen">{{integraljiang}}分</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr10">罚</span>
                        <span class="cRed">{{integralfa}}分</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getIntegralThreeData } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            integralType: 0,
            body: {},
            integralThreeData: {},
            integralCount: 0,
            integraljiang: 0,
            integralfa: 0
        }
    },
    created () {
        this.integralType = this.$route.query.integralType
        this.getIntegralThreeDataFn()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'updatePlate'])
    },
    methods: {
        getIntegralThreeDataFn () {
            this.integralCount = 0
            this.integraljiang = 0
            this.integralfa = 0

            getIntegralThreeData({
                user_card_no: this.leftInfo.cardNo,
                levelFlag: 1,
                integralType: this.integralType
            }).then(result => {
                this.body = result.data.Body
                this.integralThreeData = result.data.Body.integralThreeData

                if (this.integralThreeData != null) {
                    for (var i = 0; i < this.integralThreeData.length; i++) {
                        this.integralCount++
                        if (this.integralThreeData[i].integralIncreaseOrDecrease > 0) {
                            this.integraljiang += this.integralThreeData[i].integralIncreaseOrDecrease
                        } else {
                            this.integralfa += this.integralThreeData[i].integralIncreaseOrDecrease
                        }
                    }
                }
            })
        }
    },
    watch: {
        $route () {
            this.integralType = this.$route.query.integralType
            this.getIntegralThreeDataFn()
        }
    }
}
</script>
