<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'事件'}">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem threeCha" v-for="(item,index) in eventPlat" :key="index">
                <p class="analyItemTit tx-center">标题</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">时间</span>
                        <span class="cGreen">{{item.rp_FinishTime}}</span>
                    </p>
                    <p class="col-md-4"><span class="cLightGray pr8">金额</span><span class="cGreen">{{item.rp_ActualMoney}}</span>元</p>
                    <p class="col-md-4"><span class="cLightGray pr8">发起人</span>{{item.em_SponsorName}}</p>
                    <p class="col-md-11">
                        <span class="cLightGray pr8">摘要</span><span>{{item.em_Content}}</span>
                    </p>
                </div>
            </div>

        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">奖励</span><span class="cGreen">{{body.addMoneySum==null?0:body.addMoneySum}}</span>元</p>
                    <p class="col-md-4"><span class="cLightGray pr8">罚款</span><span class="cRed">{{body.subMoneySum==null?0:body.subMoneySum}}</span>元</p>
                    <p class="col-md-4"><span class="cLightGray pr8">合计</span>
                        <span class="cGreen">{{Number(body.addMoneySum==null?0:body.addMoneySum)+Number(body.subMoneySum==null?0:body.subMoneySum)}}</span>元</p>
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
    getStayStaySalaryBonusDetail
} from '../../../Resources/Api'
export default {
    data () {
        return {
            body: {},
            fourIndex: undefined,
            currentIndex: 0,
            month: '',
            year: '',
            eventPlat: {}
        }
    },
    created () {
        this.body = this.bodys
        this.GetUserTradeDetailByUserCardFn()
    },
    methods: {
    // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        GetUserTradeDetailByUserCardFn () {
            this.body = {}
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            this.year = this.leftInfo.YEAR
            if (this.leftInfo.MONTH < 10) {
                this.month = '0' + this.leftInfo.MONTH
            } else {
                this.month = this.leftInfo.MONTH
            }
            getStayStaySalaryBonusDetail({
                user_card_no: this.leftInfo.u_kahao,
                year: this.year,
                month: this.month
            }).then(results => {
                this.body = results.data.Body
                this.eventPlat = this.body.eventPlat
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
        }
    }
}
</script>
