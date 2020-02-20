<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'历史'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="18">
            <div class="analyItem threeCha">
                <p class="analyItemTit tx-center">标题</p>
                <div class="analyItemCon clearfix">

                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">工资</span>
                    </p>
                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">提成</span>
                    </p>
                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">综合</span>
                    </p>
                    <p class="fl col-md-3">
                        <span class="cLightGray pr8">未发</span>
                    </p>
                </div>
            </div>

            <div :class="['analyItem', 'anItemBor', fourIndex === index ? 'anItemBor-active' : '']" data-anitem="salaryHistory" v-for="(item,index) in body" :key="index" @click="clickFourShow(index,item.MONTH,item.YEAR)">
                <!-- <input type="hidden" data-month="9" data-year="2019"> -->
                <p class="analyItemTit tx-center monthHistory">{{item.MONTH}}月</p>
                <div class="analyItemCon clearfix">
                    <p class="fl col-md-3">{{item.Salary.toFixed(2)}} </p>
                    <p class="fl col-md-3"><span>{{item.Commission.toFixed(2)}}</span></p>
                    <p class="fl col-md-3"><span>{{item.TrueSalaryTotal.toFixed(2)}}</span></p>
                    <p class="fl col-md-3" title="应发合计 - 已发合计">
                        <span>{{Number((item.TrueSalaryTotal?item.TrueSalaryTotal:0)-(item.CommissionAmount?item.CommissionAmount:0)).toFixed(2)}}</span>
                    </p>

                </div>
            </div>

        </div>
        <!-- <div class="boldTopLine pl10 pt10 pr5 threeCha">

            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span class=""></span></p>
                    <p class="col-md-4"><span class="cLightGray pr8"></span><span class=""></span></p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">收入</span>
                        <span class="pr8 cGreen">7472.00</span>
                    </p>
                </div>
            </div>
        </div> -->
        <!-- 四段渲染容器 -->
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <history-detail v-if="fourIndex === currentIndex" :key='currentIndex' :month='month' :year='year'></history-detail>
        </transition-group>
    </div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import HistoryDetail from './four/historyDetail'
import {
    getStayStaySalaryHistoryDetail
} from '../../Resources/Api'
export default {
    components: {
        HistoryDetail
    },
    data () {
        return {
            body: {},
            fourIndex: undefined,
            currentIndex: 0,
            month: '',
            year: ''
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
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            getStayStaySalaryHistoryDetail({
                user_card_no: this.leftInfo.u_kahao,
                pointTime: this.pointTime
            }).then(results => {
                this.body = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 点击四段
        clickFourShow (index, month, year) {
            this.fourIndex = index
            this.currentIndex = index
            this.month = month
            this.year = year
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
