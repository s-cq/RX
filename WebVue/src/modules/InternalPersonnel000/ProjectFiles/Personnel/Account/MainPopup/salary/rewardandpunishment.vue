<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'奖罚&考勤明细'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem ">
                <p class="analyItemTit tx-center">考勤</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">天数</span><span class="">{{body.attendance}}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">公式</span><span class="">{{body.baseSalary}} / 22 * {{body.attendance}}</span>
                    </p>
                    <p class="col-md-4"><span class="cLightGray pr8">金额</span><span class="">{{Number(body.baseSalary / 22 * body.attendance).toFixed(2)}}</span></p>
                </div>
            </div>
            <div :class="['analyItem']" @click="clickFourShow(0,body)">
                <p class="analyItemTit tx-center">人工</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">奖励</span>
                        <span class="cGreen">{{body.addMoneySum}}元</span>
                    </p>

                    <p class="col-md-4"><span class="cLightGray pr8">罚款</span>
                        <span class="cRed">{{body.subMoneySum}}元</span>
                    </p>
                    <p class="col-md-4"><span class="cLightGray pr8">合计</span>
                        <span class="fz12  cRed">
                            {{Number(body.addMoneySum + body.subMoneySum)}}元
                        </span>
                    </p>
                </div>
            </div>

        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">合计</span>
                        <span class="cRed">{{(Number(body.addMoneySum + body.subMoneySum)-Number(body.baseSalary / 22 * body.attendance)).toFixed(2)}}元</span>
                    </p>
                </div>
            </div>

        </div>
        <!-- 四段渲染容器 -->
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <rewardandpunishment-detail v-if="fourIndex === currentIndex" :key='currentIndex' :bodys='bodys'></rewardandpunishment-detail>
        </transition-group>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import RewardandpunishmentDetail from './four/rewardandpunishmentDetail'
import {
    getStayStaySalaryBonusDetail
} from '../../Resources/Api'
export default {
    components: {
        RewardandpunishmentDetail
    },
    data () {
        return {
            body: {},
            order: [],
            orderCount: 0,
            unit_price: 0,
            bodys: {}
        }
    },
    created () {
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
            this.order = {}
            getStayStaySalaryBonusDetail({
                user_card_no: this.leftInfo.cardNo
            }).then(results => {
                this.body = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 点击四段
        clickFourShow (index, body) {
            this.fourIndex = index
            this.currentIndex = index
            this.bodys = body
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
